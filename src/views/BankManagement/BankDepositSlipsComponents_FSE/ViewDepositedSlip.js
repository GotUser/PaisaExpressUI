import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Input, FormGroup, FormText,
    Button, Item, Text, H1, Label, Alert, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';
import swal from 'sweetalert';
import { connect } from 'react-redux';
import { DisplaySpinner } from '../../../views/GlobalModals';
import {
    Get_Deposited_Slips_From_Db_Submitter, Get_Deposited_Slip_Submitter, Approve_Deposit_Slip, ResetDepositSlipComp
} from '../BankManagementAction';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';
import "react-toggle/style.css";

class ViewDepositedSlip extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidUpdate() {
        if (this.props.DespositSlipComp.isApproveDepositSlipSuccess) {
            this.props.history.push("/AdminDepositSlips");
            swal({
                title: "Slip approved successfully!",
                icon: "success",
            });
        }
    }
    render() {
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="ViewDepositedSlip" />
                {!this.props.ProgressIndicator.InProgress ?
                    <Row>
                        <Col xs="12" lg="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="font-weight-bold"> FSE View Deposit Slips</h5>
                                    {/* <Input style={{ height: 33, width: '15%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                            value={this.state.searchingValue}
                                            onChange={this.onChange} /> */}
                                </CardHeader>
                                <CardBody style={{ paddingLeft: "10%" }}>
                                    <Row>
                                        <div style={{ width: "30%" }}>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>Retailer</th>
                                                        <th>Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.DespositSlipComp.getDepositSlipVMTenantAmounts.map((item, i) => (
                                                        <tr key={i} >
                                                            <td> {item.tenantName} </td>
                                                            <td> {item.amount}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </Table>
                                        </div>
                                    </Row>

                                    <Row>
                                        <div style={{ display: "flex", marginTop: 30, paddingLeft: 10 }}>
                                            <div style={{ marginRight: 60 }}>
                                                <Label>TxID {RequireIconForIpFiled()}</Label>
                                            </div>
                                            <div style={{}}>
                                                <Label style={{ border: "1px solid transparent", borderBottom: "1px solid lightgray" }}>{this.props.DespositSlipComp.BankSlipTxId}</Label>
                                            </div>
                                        </div>
                                    </Row>

                                    <Row style={{ marginTop: "3%", paddingLeft: 10 }}>
                                        <img className="hover-zoom"
                                            onClick={() => {
                                                console.log(" console.log(Image Clicked : )")
                                            }}
                                            style={{ height: '40vh' }}
                                            src={"data:image/jpg;base64," + this.props.DespositSlipComp.DepositSlipImage}
                                        />
                                    </Row>

                                    {this.props.LoginDetails.roleName == "Admin" ?
                                        <Row style={{ marginBottom: 100 }}>
                                            <div style={{ marginTop: 30 }}>
                                                <button className="buttonStyle Submit"
                                                    onClick={() => {
                                                        let DepositSlipId = this.props.DespositSlipComp.depositSlipId;
                                                        let AccessToken = this.props.LoginDetails.accessToken;
                                                        this.props.Approve_Deposit_Slip(AccessToken, DepositSlipId)
                                                    }}>Approve</button>
                                            </div>
                                            <div style={{ marginTop: 30 }}>
                                                <button className="buttonStyle special2">Reject</button>
                                            </div>
                                        </Row>
                                        : null}
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    :
                    <Row style={{ margin: "18%" }}>
                        {DisplaySpinner()}
                    </Row>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ userManagementReducer, Authentication, bankManagement }) => {
    const { OrganizationDetails } = userManagementReducer;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    const { DespositSlipComp, ProgressIndicator } = bankManagement

    return { OrganizationDetails, LoginDetails, userRoleModulePermissions, DespositSlipComp, ProgressIndicator };
};
export default connect(mapStateToProps, {
    Get_Deposited_Slips_From_Db_Submitter, Get_Deposited_Slip_Submitter, Approve_Deposit_Slip, ResetDepositSlipComp
})(ViewDepositedSlip);


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5, font: "bold" }} > *</span>
}