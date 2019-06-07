import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Input, FormGroup, FormText,
    Button
} from 'reactstrap';

import { connect } from 'react-redux';
import { DisplaySpinner } from '../../GlobalModals';


import {
    Save_DepositSlip_Details_Tenant, ResetDepositSlipComp, Get_All_CDM_Slips_From_DB, GetCDMStuckDetails
} from '../BankManagementAction'

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import "react-toggle/style.css"



class ApproveCDMStuck extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }


    componentWillMount() {
        this.props.ResetDepositSlipComp();
        let AccessToken = this.props.LoginDetails.accessToken;
        this.props.Get_All_CDM_Slips_From_DB(AccessToken);
    }

    componentDidUpdate() {
        if (this.props.DespositSlipComp.isGetDepositedSlipSuccess) {
            this.props.history.push("/ReportCDMStuck");
        }
    }

    UplaodSlipClicked() {
        this.props.history.push("/ReportCDMStuck")
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
                                <h5 className="font-weight-bold"> Tenant CDM Stuck</h5>
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
                                            Report CDM Stuck
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
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.props.DespositSlipComp.CDMReportList != undefined ?
                                                    this.props.DespositSlipComp.CDMReportList.
                                                        // this.state.CDMReportList.
                                                        map((item, i) => (

                                                            <tr key={i} >
                                                                <td> {item.dateOfDeposit} </td>
                                                                <td> {item.tenantType}</td>
                                                                <td> {item.tenantName}</td>
                                                                <td> {item.amount}</td>
                                                                <td>
                                                                    <Button onClick={() => {
                                                                        console.log(item)
                                                                        let AccessToken = this.props.LoginDetails.accessToken;
                                                                        this.props.GetCDMStuckDetails(AccessToken, item.id);
                                                                    }} color="success" >View</Button>
                                                                </td>
                                                            </tr>
                                                        ))
                                                    :
                                                    null
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
                        </Row>  }
                         */}
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
    Save_DepositSlip_Details_Tenant
    , ResetDepositSlipComp
    , Get_All_CDM_Slips_From_DB
    , GetCDMStuckDetails
})(ApproveCDMStuck);
