import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Input, FormGroup, FormText,
    Button, Item, Text, H1, Label, Alert, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import LaddaButton, {
    EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP
} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';


import { DisplaySpinner } from '../../../views/GlobalModals';
import {
    Get_Deposited_Slips_From_Db_Tenant, Get_Deposited_Slip_Tenant, ResetDepositSlipComp
} from '../BankManagementAction';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import SwitchToggle from 'react-toggle'
import "react-toggle/style.css"



class AdminDepositSlips extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentWillMount() {


        let AccessToken = this.props.LoginDetails.accessToken;


        this.props.ResetDepositSlipComp();
        this.props.Get_Deposited_Slips_From_Db_Tenant(AccessToken)
    }


    componentDidUpdate() {
        if (this.props.DespositSlipComp.isGetDepositedSlipSuccess) {
            console.log("isGetDepositedSlipSuccess: true")
            this.props.history.push("/ViewDepositedSlip")
        }
    }

    render() {
        console.log(this.props.DespositSlipComp.depositDepositListTenant)

        return (
            <div className="animated fadeIn">


                {!this.props.ProgressIndicator.InProgress ?
                    <div>
                        <CustomerBreadCrumb from="AdminDepositSlips" />
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

                                        <Row>
                                            <Table>
                                                <thead>
                                                    <tr>
                                                        <th>Date</th>
                                                        <th>FSE</th>
                                                        <th>Amount</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {this.props.DespositSlipComp.depositDepositListTenant.length != 0
                                                        ?
                                                        this.props.DespositSlipComp.depositDepositListTenant.map((item, i) => (
                                                            <tr key={i}>
                                                                <td> {item.depositedOn} </td>
                                                                <td> {item.depositorName} </td>
                                                                <td> {item.totalDepositedAmount}</td>
                                                                <td>
                                                                    {/* <LaddaButton
                                                                            className="btn btn-success btn-ladda"
                                                                            //  loading={  this.props.ProgressIndicator.InProgress }
                                                                            loading={ item.depositSlipId == this.props.DespositSlipComp.depositSlipId ? this.props.ProgressIndicator.InProgress : null}
                                                                            onClick={() => {
                                                                                let AccessToken = this.props.LoginDetails.accessToken;
                                                                                this.props.Get_Deposited_Slip_Tenant(AccessToken,item.depositSlipId)    
                                                                                }}
                                                                            data-style={EXPAND_LEFT}   >  View  </LaddaButton> */}
                                                                    <Button onClick={() => {
                                                                        let AccessToken = this.props.LoginDetails.accessToken;
                                                                        this.props.Get_Deposited_Slip_Tenant(AccessToken, item.depositSlipId)
                                                                    }} color="success" >View</Button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                        :
                                                        <tr >
                                                            <td> </td>
                                                            <td> </td>
                                                            <td> </td>
                                                            <td> </td>
                                                        </tr>
                                                    }
                                                </tbody>
                                            </Table>
                                        </Row>

                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>

                    </div>

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
    Get_Deposited_Slips_From_Db_Tenant, Get_Deposited_Slip_Tenant, ResetDepositSlipComp

})(AdminDepositSlips);
