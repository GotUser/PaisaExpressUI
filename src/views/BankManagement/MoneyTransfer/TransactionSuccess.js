import React, { Component } from 'react';
import { Row, Label, Input, FormText, Col } from 'reactstrap';
import { connect } from 'react-redux';
const logo = require("../../../../public/img/Success_Payment.png");
import { ReturnCustomerMobileNo } from '../../../GlobalVars';

import { CancleTheTrasaction, moneyTransferInitialLoad } from '../BankManagementAction';

// import { CustomerBreadCrumb } from '../../../components/ViewComponents/CustomBreadcrumb';

class TransactionSuccess extends Component {
    render() {
        let MTndBENE = this.props.MTTransDetails;
        let CustomerName = this.props.MTcustomer.ExistingCustomer.fullName !== '' ? this.props.MTcustomer.ExistingCustomer.fullName :
            this.props.MTcustomer.CustomerDetails.fullName;
        let CustomerMobileNo = ReturnCustomerMobileNo(this.props.MTcustomer);
        return (
            <div className="animated fadeIn">
                {/* <CustomerBreadCrumb from="MTSuccess" contentPath="/ Management / Role" /> */}
                <Row>
                    <Col xs="12" lg="4"  > </Col>
                    <Col xs="12" lg="4" style={{ justifyContent: "center" }}>

                        <Row style={{ marginTop: "5%", color: "white", textAlign: "center", background: "linear-gradient(to right, rgba(19, 175, 146, 0.58), rgba(29, 144, 222, 0.58))", padding: "5%", borderRadius: 12, fontWeight: 600 }}>
                            <Col>
                                <Row style={{ justifyContent: "center" }}>
                                    <i>
                                        <img src={logo} style={{}}></img>
                                    </i>
                                    <Label style={{ color: "white", width: "100%" }}>
                                        <FormText color="white" style={{}}>   You have successfully transferred </FormText>
                                        <Label style={{ fontSize: "x-large" }}> &#x20B9; {MTndBENE.TransAmount}  /- </Label>
                                    </Label>
                                </Row>
                                <Row style={{ textAlign: "start" }}>
                                    <Col xs="12" lg="6" >
                                        <FormText color="white" style={{ color: "white" }} > Payor   </FormText>
                                        <Label style={{}} >{CustomerName}</Label> <br />
                                    </Col>

                                    <Col xs="12" lg="6" style={{ textAlign: "end" }}>
                                        <FormText color="white" style={{ color: "white" }} > Payee </FormText>
                                        <Label style={{}} >{MTndBENE.BeneInfo.fullName} </Label>
                                    </Col>
                                </Row>

                                <Row style={{ textAlign: "start" }}>
                                    <Col xs="12" lg="6" >
                                        <FormText color="white" style={{ color: "white" }} > Transaction ID   </FormText>
                                        <Label style={{}} >{MTndBENE.InternalTransID}</Label> <br />
                                    </Col>

                                    <Col xs="12" lg="6" style={{ textAlign: "end" }}>
                                        <FormText color="white" style={{ color: "white" }} > Account Number </FormText>
                                        <Label style={{}} >{MTndBENE.BeneInfo.acccountNo}</Label>
                                    </Col>
                                </Row>

                                <Row style={{ textAlign: "start" }}>
                                    <Col xs="12" lg="7" >
                                        <FormText color="white" style={{ color: "white" }} > Date & Time   </FormText>
                                        <Label style={{}} >{MTndBENE.ApiResult.TrasSuccessDateNDtime}</Label> <br />
                                    </Col>

                                    <Col xs="12" lg="5" style={{ textAlign: "end" }}>
                                        <FormText color="white" style={{ color: "white" }} > IFSC</FormText>
                                        <Label style={{}} >{MTndBENE.BeneInfo.ifsc}</Label>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row style={{ width: "100%", marginLeft: 1, fontStyle: "italic", textAlign: "center", background: "white", paddingBottom: "3%" }}>
                            <Col>
                                <Row>
                                    <Label style={{ color: "black", width: "100%" }}>
                                        <FormText style={{}}>  <b style={{ color: "rgb(1, 142, 211)", paddingRight: "1%" }} >Note:  </b>  Please keep the Transaction ID for future reference. </FormText>
                                        <FormText style={{ paddingRight: "7%" }}>  You can keep a print of it take a picture. </FormText>
                                    </Label>
                                </Row>

                                <Row style={{ justifyContent: "center" }}>
                                    <div style={{ marginRight: "4%" }}>
                                        <button
                                            onClick={() => {
                                                this.props.moneyTransferInitialLoad();
                                                this.props.history.push('/Dashboard');
                                            }}
                                            class="buttonStyle Submit"><i class="fa fa-home"></i></button>
                                    </div>
                                    <div>
                                        <button
                                            onClick={() => {
                                                this.props.CancleTheTrasaction();
                                                this.props.history.push('/Customer');
                                            }
                                            }
                                            class="buttonStyle Submit"> Make Another Transfer</button>
                                    </div>
                                </Row>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs="12" lg="4"  > </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer, MTBeneficiary, MTTransDetails } = bankManagement;
    return { LoginDetails, MTcustomer, MTBeneficiary, MTTransDetails }
};

export default connect(mapStateToProps, {
    CancleTheTrasaction, moneyTransferInitialLoad
})(TransactionSuccess);


