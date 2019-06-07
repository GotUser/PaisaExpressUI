import React, { Component } from 'react';
import { Row, Label, Input, FormText, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import { SaveOTPafterTrasRequest, CancleTheTrasaction, ValidateMoneyTrasferOtp } from '../BankManagementAction';
import { ReturnCustomerMobileNo } from '../../../GlobalVars';

class TransactionDescriptionAndOTPVerify extends Component {

    componentDidUpdate() {
        if (this.props.MTTransDetails.ApiResult.otpVerifySuccess) {
            this.props.history.push('/MoneyTrasferSuccess');
        }
    }

    render() {

        let MTndBENE = this.props.MTTransDetails;
        let CustomerName = this.props.MTcustomer.ExistingCustomer.fullName !== '' ? this.props.MTcustomer.ExistingCustomer.fullName :
            this.props.MTcustomer.CustomerDetails.fullName;
        let CustomerMobileNo = ReturnCustomerMobileNo(this.props.MTcustomer);

        return (
            <div className="animated fadeIn">
                <Row style={{ marginTop: "5%" }}>
                    <label class="labelStyleHeadings">Transaction Description</label>
                </Row>

                <Row style={{}}>
                    <Col xs="12" lg="4" style={{ textAlign: "left", borderRadius: 15, background: "white", padding: "4%", fontWeight: 600 }}>
                        <Row>
                            <Col xs="12" lg="6">
                                <FormText> Payor   </FormText>
                                <Label style={{ marginBottom: 0 }} >{CustomerName}</Label> <br />
                                <Label>+91 {CustomerMobileNo}</Label>
                            </Col>

                            <Col xs="12" lg="6" style={{ textAlign: "end" }}>
                                <FormText> Payee   </FormText>
                                <Label style={{ marginBottom: 0 }} >{MTndBENE.BeneInfo.fullName}</Label> <br />
                                <Label>+91 9865451235</Label>
                            </Col>
                        </Row>


                        <Row>
                            <Col style={{ textAlign: "end" }}>
                                <FormText> Account Number  </FormText>
                                <Label  >{MTndBENE.BeneInfo.acccountNo}</Label>
                            </Col>
                        </Row>


                        <Row style={{ borderBottom: "1px solid lightgray", marginBottom: "5%" }}>
                            <Col xs="12" lg="6" >
                                <FormText> Mode of Transfer   </FormText>
                                <Label style={{}} >{MTndBENE.TransMode}</Label> <br />
                            </Col>

                            <Col xs="12" lg="6" style={{ textAlign: "end" }}>
                                <FormText> IFSC  </FormText>
                                <Label style={{}} >{MTndBENE.BeneInfo.ifsc}</Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="12" lg="6" >
                                <FormText> Amount to be Transfered   </FormText>
                            </Col>

                            <Col xs="12" lg="6" style={{ textAlign: "end" }}>
                                <Label  >{MTndBENE.TransAmount}</Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="12" lg="6" >
                                <FormText> Charges   </FormText>
                            </Col>

                            <Col xs="12" lg="6" style={{ textAlign: "end", borderBottom: "1px solid lightgray" }}>
                                <Label  >{MTndBENE.AdditionalCharges}</Label>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs="12" lg="6">
                                <FormText> Total Amount   </FormText>
                            </Col>

                            <Col xs="12" lg="6" style={{ textAlign: "end" }}>
                                <Label  >{parseInt(MTndBENE.AdditionalCharges) + parseInt(MTndBENE.TransAmount)}</Label>
                            </Col>
                        </Row>

                        <Row style={{ justifyContent: "center" }}>
                            <div>
                                {/* <button class="buttonStyleForMTcomponents transactionDescription"> Modify </button> */}
                            </div>
                        </Row>
                    </Col>

                    <Col xs="12" lg="7" style={{ textAlign: "center", fontWeight: 600, paddingTop: "8%" }}>
                        <Row style={{ justifyContent: "center" }}>
                            <div style={{ width: "35%" }}>
                                <Label> Please Authorize</Label><br />

                                <Input
                                    value={MTndBENE.OTPafterTrasRequest}
                                    onChange={(txt) => {
                                        this.props.SaveOTPafterTrasRequest(txt.target.value)
                                    }}
                                    placeholder="Enter your password" />
                            </div>
                        </Row>
                        {MTndBENE.ApiResult.OtpVerifyFail ? <span style={{ fontSize: '15', color: 'red' }}>OTP mismatch, Please Try again.</span> : null}
                        <Row style={{ justifyContent: "center" }}>
                            <div style={{ paddingRight: "2%" }}>
                                <button
                                    onClick={() => {
                                        let accessToken = this.props.LoginDetails.accessToken;
                                        let Data = {
                                            InternalTxId: MTndBENE.InternalTransID,
                                            OTP: MTndBENE.OTPafterTrasRequest
                                        }
                                        this.props.ValidateMoneyTrasferOtp(accessToken, Data)
                                    }}
                                    class="buttonStyle Submit"> Submit</button>
                            </div>
                            <div>
                                <button
                                    onClick={() => {
                                        this.props.CancleTheTrasaction();
                                        this.props.history.push('/Customer');
                                    }}
                                    class="buttonStyle special2"> Cancel </button>
                            </div>
                        </Row>

                        <Row style={{ marginTop: "5%", fontStyle: "italic", textAlign: "left" }}>
                            <Col xs="12" lg="2">

                            </Col>
                            <div>
                                <b style={{ color: "rgb(1, 142, 211)", paddingRight: 19 }} >Note:  </b>
                            </div>
                            <Col>
                                <FormText >  1.Please review the transaction before submitting </FormText >
                                <FormText> 2.Modify any details of the transaction if needed </FormText>
                                <FormText> 3.You will recieve the transaction confirmation on screen or through SMS or via email </FormText>
                                <FormText> 4.Check your email/messages for the confirmation message from us </FormText>

                            </Col>
                        </Row>
                    </Col>
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
    SaveOTPafterTrasRequest, CancleTheTrasaction, ValidateMoneyTrasferOtp
})(TransactionDescriptionAndOTPVerify);


