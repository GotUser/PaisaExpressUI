import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Input, FormGroup, FormText,
    Button
} from 'reactstrap';

import { connect } from 'react-redux';
import { DisplaySpinner } from '../../GlobalModals';


import {
    Save_DepositSlip_Details_Tenant
    , ResetDepositSlipComp
    , Get_All_Deposits_From_DB
    , Get_Deposit_Details
} from '../BankManagementAction'

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import "react-toggle/style.css"



class TenantDepositSlips extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentWillMount() {
        this.props.ResetDepositSlipComp();
        let AccessToken = this.props.LoginDetails.accessToken;
        this.props.Get_All_Deposits_From_DB(AccessToken);
    }
    componentDidUpdate() {
        if (this.props.DespositSlipComp.isGetDepositedSlipSuccess) {
            this.props.history.push("/Deposit");
        }
    }

    UplaodSlipClicked() {
        this.props.history.push("/Deposit")
    }


    render() {
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="DepositSlips" />
                {/* { !this.props.ProgressIndicator.InProgress  ?    */}
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <h5 className="font-weight-bold">Tenant  Deposit Slips</h5>
                                {/* <Input style={{ height: 33, width: '15%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                            value={this.state.searchingValue}
                                            onChange={this.onChange} /> */}
                            </CardHeader>
                            <CardBody>
                                {this.props.LoginDetails.roleName == "Admin" ?
                                    null
                                    :
                                    <div style={{ marginTop: 30 }}>
                                        <button className="buttonStyle Submit"
                                            onClick={() => this.UplaodSlipClicked()}>
                                            Upload Slip
                                                    </button>
                                    </div>
                                }
                                <Row>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Type</th>
                                                <th>Retailer</th>
                                                <th>Amount</th>
                                                <th>Mode</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.DespositSlipComp.slipList.map((item, i) => (
                                                    <tr key={i} >
                                                        <td> {item.dateOfDeposit} </td>
                                                        <td> {item.tenantType}</td>
                                                        <td> {item.tenantName}</td>
                                                        <td> {item.amount}</td>
                                                        <td> {item.tenantDepositMode}</td>
                                                        <td>
                                                            <Button onClick={() => {
                                                                // console.log(item)
                                                                let AccessToken = this.props.LoginDetails.accessToken;
                                                                this.props.Get_Deposit_Details(AccessToken, item.id, item);
                                                            }} color="success" >View</Button>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </Table>
                                </Row>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                {/* :
                        <Row style={{margin:"18%"}}>
                            {DisplaySpinner()}       
                        </Row> 
            } */}
            </div>)
    }
}


const mapStateToProps = ({ userManagementReducer, Authentication, bankManagement }) => {
    const { OrganizationDetails } = userManagementReducer;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    const { DespositSlipComp, ProgressIndicator } = bankManagement

    return { OrganizationDetails, LoginDetails, userRoleModulePermissions, DespositSlipComp, ProgressIndicator };
};
export default connect(mapStateToProps, {
    Save_DepositSlip_Details_Tenant, ResetDepositSlipComp
    , Get_All_Deposits_From_DB
    , Get_Deposit_Details

})(TenantDepositSlips);
