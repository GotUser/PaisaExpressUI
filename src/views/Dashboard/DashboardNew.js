import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input,
    Card, CardBody, Table,
} from 'reactstrap';
import { connect } from 'react-redux';
import '../../../public/CustomStyles.css';

const eCashBalancelogo = require("../../../public/img/e-Cash Balance.png");
const CashCollectedlogo = require("../../../public/img/CashCollected.png");
const CashDepositedlogo = require("../../../public/img/CashDeposited.png");
const CashDuelogo = require("../../../public/img/CashDue.png");
const AddUser = require("../../../public/img/AddUser.png");
const DMT = require("../../../public/img/DMT.png");

import PoolBalanceIndicators from './AllChildComnponents/PoolBalanceIndicators';
import Approvals from './AllChildComnponents/Approvals';
import FSEScoreboard from './AllChildComnponents/FSEScoreboard';
import SupportMatrix from './AllChildComnponents/SupportMatrix';
import TransactionReport from './AllChildComnponents/TransactionReport';
import Piechart from './PieChart'
import AreaChart from "./AreaChart";
import Linechart from './LineChart';
import Linechart1 from './LineChart1';


import {
    // GetOrganizationStoreInfo,
     GetDashBoardCardDetails
} from '../UsersManagement/UserManagementAction';

import { GetRateCardsList } from '../Transactions/TransactionsAction';

class DashboardNew extends Component {

    constructor() {
        super();
        this.state = {    };
    }

    componentWillMount() {

        let AccessToken = this.props.LoginDetails.accessToken;
        console.log(" In   GetDashBoard  ");
        // console.log(AccessToken);
     
    }


    DMTview() {
        // var foundMoneyTrasfer = this.props.userRoleModulePermissions.modulePermissions.find(function (element) {
        //     return element.moduleName === "MoneyTransfer" ? true : false
        // });
   

        // if (foundMoneyTrasfer) {
            return  <div style={{ textAlign: "center" }}>
                        <i
                            onClick={() => this.props.history.push('/MoneyTransfer')}
                        >
                            <img src={DMT} style={{ width: "70%" }}></img>
                        </i>
                        <br />
                        <Label style={{ fontWeight: "normal" }}>DMT</Label><br />
                    </div>
        // } else null;
    }

    render() {
        return (
            <div className="animated fadeIn">
                {/* <Row>
                    <Col xs="12" md="12">
                        <Card style={{ background: "#c7cbd582" }}>
                            <CardBody>


                                <Row style={{fontSize:20,color:"white"}}>

                                    <div className="dashboardStyle" style={{background:"#1e8fc6"}}>
                                        <div>
                                            <Label style={{ marginBottom: 0 }}>e-Cash Balance</Label><br />
                                            <Label>2,50,000</Label>
                                        </div>
                                        <div style={{ paddingLeft: '20%', paddingTop: "6%" }}>
                                            <i>
                                                <img src={eCashBalancelogo} style={{ height: "50%" }}></img>
                                            </i>
                                        </div>
                                    </div>
                                    <div className="dashboardStyle" style={{ background: "#0c9c72c2" }}>
                                        <div>
                                            <Label style={{ marginBottom: 0 }}>Cash Collected</Label><br />
                                            <Label>2,50,000</Label>
                                        </div>
                                        <div style={{ paddingLeft: "20%", paddingTop: "2%" }}>
                                            <i>
                                                <img src={CashCollectedlogo} style={{ height: "75%" }}></img>
                                            </i>
                                        </div>
                                    </div>

                                    <div className="dashboardStyle" style={{ background: "#321071a6"}}>
                                        <div>
                                            <Label style={{ marginBottom: 0 }}>Cash Deposited</Label><br />
                                            <Label>2,50,000</Label>
                                        </div>
                                        <div style={{ paddingLeft: "16%", paddingTop: "2%" }}>
                                            <i>
                                                <img src={CashDepositedlogo} style={{ height: "75%" }}></img>
                                            </i>
                                        </div>
                                    </div>

                                    <div className="dashboardStyle" style={{ background: "#e00e0ea1",width:"25%",marginRight:0}}>
                                        <div>
                                            <Label style={{ marginBottom: 0 }}>Cash Due</Label><br />
                                            <Label>2,50,000</Label>
                                        </div>
                                        <div style={{ paddingLeft: "30%", paddingTop: "5%" }}>
                                            <i>
                                                <img src={CashDuelogo} style={{}}></img>
                                            </i>
                                        </div>
                                    </div>

                                </Row>


                                <Row style={{ marginTop: "1%", marginBottom: "1%" ,    color: "#1e8fc6"}}>
                                    <div style={{ width: "70%",display:"flex" ,background:"white",justifyContent:"center",textAlign:"center",padding:"2%",marginRight:"1%",height:90}}>
                                       
                                            <div style={{ marginRight:"3%" }}>
                                                <i>
                                                    <img src={AddUser} style={{ width: "50%" }}></img>
                                                </i>
                                                <br />
                                                <Label style={{ fontWeight: "normal" }}>Add User</Label><br />
                                            </div>
                                            {this.DMTview()}
                                       
                                    </div>

                                    <div style={{ padding: 10, background: "white", width: "29%"}}>
                                        <div style={{ height: "35%" }}>
                                            <label style={{ fontSize: 15, marginLeft: "8%" }} class="labelStyleForMTHeadings">Check Transaction Status</label><br />

                                        </div>
                                        <div style={{ display:"flex",justifyContent: "center" }}>
                                            <div style={{ width: "45%" }}>
                                                <Input />
                                            </div>
                                            <div style={{ width: "25%" }}>
                                                <button className="buttonStyleForMTcomponents" style={{ borderRadius: 0, height: "100%", margin: 0 }}>Track</button>
                                            </div>
                                        </div>
                                    </div>
                                </Row>

                                <Row style={{marginBottom:"1%"}}>
                                    <div style={{ width:"33%",background:"white"}}>  
                                        <AreaChart />
                                    </div>

                                    <div style={{ width:"32%",background:"white",marginLeft:"1%",marginRight:"1%"}}>
                                        <Piechart />
                                    </div>

                                    <div style={{ width:"33%",background:"white" }}>
                                        <PoolBalanceIndicators title="Place Holder For Charts" />
                                    </div>
                                </Row>

                                <Row style={{ marginBottom: 10 }}>
                                    <div style={{ width: "66%", background: "white", marginRight: 10 }}>
                                        <FSEScoreboard />
                                    </div>

                                    <div style={{width:"33%",background:"white",}}>
                                        <Linechart/>
                                    </div>
                                </Row>

                                <Row style={{ marginBottom:10 }}>
                                    <div style={{width:"33%",background:"white"}}>
                                        <Linechart1/>
                                    </div>

                                    <div style={{ width: "66%", background: "white", marginLeft: 10 }}>
                                        <TransactionReport />
                                    </div>
                                </Row>

                                <Row style={{}}>
                                    <div style={{ width: "52%", background: "white" }}>
                                        <Approvals />
                                    </div>

                                    <div style={{ width: "47%", background: "white", marginLeft: 10 }}>
                                        <SupportMatrix />
                                    </div>
                                </Row>


                            </CardBody>
                        </Card>
                    </Col>

                </Row> */}
            </div>
        )
    }
}
const mapStateToProps = ({ Authentication, userManagementReducer }) => {

    const { LoginDetails, userRoleModulePermissions, walletBalance } = Authentication;
    const { OrganizationDetails } = userManagementReducer;
    return {
        LoginDetails, walletBalance, userRoleModulePermissions, OrganizationDetails

    };
};

export default connect(mapStateToProps, {
    // GetOrganizationStoreInfo,
     GetDashBoardCardDetails, GetRateCardsList
})(DashboardNew);



