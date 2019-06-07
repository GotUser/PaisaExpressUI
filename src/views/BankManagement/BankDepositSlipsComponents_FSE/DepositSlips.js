import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Input, FormGroup, FormText,
    Button, Item, Text, H1, Label, Alert, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import { connect } from 'react-redux';
import { DisplaySpinner } from '../../../views/GlobalModals';

import {
    Get_Deposited_Slips_From_Db_Submitter, Get_Deposited_Slip_Submitter, ResetDepositSlipComp
} from '../BankManagementAction';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import SwitchToggle from 'react-toggle'
import "react-toggle/style.css"



class DepositSlip extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {

        this.props.ResetDepositSlipComp();
        let AccessToken = this.props.LoginDetails.accessToken;
        this.props.Get_Deposited_Slips_From_Db_Submitter(AccessToken)
    }

    componentDidUpdate() {
        if (this.props.DespositSlipComp.isGetDepositedSlipSuccess) {
            console.log("isGetDepositedSlipSuccess: true")
            this.props.history.push("/ViewDepositedSlip")
        }
    }


    UplaodSlipClicked() {
        this.props.history.push("/UploadSlip")
    }


    render() {

        return (
            <div className="animated fadeIn">

                <CustomerBreadCrumb from="DepositSlips" />
                {!this.props.ProgressIndicator.InProgress ?
                    <Row>
                        <Col xs="12" lg="12">
                            <Card>
                                <CardHeader>
                                    <h5 className="font-weight-bold"> FSE Deposit Slips</h5>
                                    {/* <Input style={{ height: 33, width: '15%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                            value={this.state.searchingValue}
                                            onChange={this.onChange} /> */}
                                </CardHeader>

                                <CardBody>
                                    <div style={{ marginTop: 30 }}>
                                        <button className="buttonStyle Submit"
                                            onClick={() => this.UplaodSlipClicked()}>
                                            Upload Slip
                                                </button>
                                    </div>
                                    <Row>
                                        <Table>
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Amount</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.props.DespositSlipComp.depositedSlipsList.map((item, i) => (
                                                    <tr key={i} >
                                                        <td> {item.depositedOn} </td>
                                                        <td> {item.totalDepositedAmount}</td>
                                                        <td>
                                                            <Button onClick={() => {
                                                                let AccessToken = this.props.LoginDetails.accessToken;
                                                                this.props.Get_Deposited_Slip_Submitter(AccessToken, item.depositSlipId)
                                                            }} color="success" >View</Button>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Row>

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
    Get_Deposited_Slips_From_Db_Submitter, Get_Deposited_Slip_Submitter, ResetDepositSlipComp

})(DepositSlip);
