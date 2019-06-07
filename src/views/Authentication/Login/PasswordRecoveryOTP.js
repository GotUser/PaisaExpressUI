import React, { Component } from 'react';
import {
    Container, Row, Col, CardGroup, Card, CardBody, Button,
    Input, InputGroup, FormText, Label
} from 'reactstrap';
import { connect } from 'react-redux';
import LaddaButton, { EXPAND_LEFT} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';
import '../../../../public/CustomStyles.css';
import { Forgotpassword, SaveForgotPassDetails, ResendOTP, ValidateResetPassOTP } from '../AuthenticationAction';

import LoginHeader from "./LoginHeader";
import LoginFooter from './LoginFooter';
const inputOtpStyle = {
    border: 0,
    borderBottom: "1px solid #a1a7ac",
    borderRadius: 0,
    display: "inline-block",
    width: 30,
    fontSize: 30,
    color: "#5f6771",
    padding: 0,
    marginRight: 7,
    textAlign: "center",
    lineHeight: 1
}

class PasswordRecovery extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 16,
        };
        this.resendOTPClicked = this.resendOTPClicked.bind(this);
        this.submitOTPClicked = this.submitOTPClicked.bind(this);
    }


    componentWillMount(){
        { this.counter() }
    }

    componentDidUpdate() {
        let OTP = this.props.LoginDetails.OTP;
        if (OTP.field1 == '') {
            var IpField = document.getElementById("otpInput1");
            IpField.focus();
        }
        else if (OTP.field1 !== '' && OTP.field2 == '') {
            var IpField = document.getElementById("otpInput2");
            IpField.focus();
        } else if (OTP.field2 !== '' && OTP.field3 == '') {
            var IpField = document.getElementById("otpInput3");
            IpField.focus();
        } else if (OTP.field3 !== '' && OTP.field4 == '') {
            var IpField = document.getElementById("otpInput4");
            IpField.focus();
        } else if (OTP.field4 !== '' && OTP.field5 == '') {
            var IpField = document.getElementById("otpInput5");
            IpField.focus();
        } else if (OTP.field5 !== '' && OTP.field6 == '') {
            var IpField = document.getElementById("otpInput6");
            IpField.focus();
        }
        if (this.props.LoginDetails.OtpValidation_Success) {
            this.props.history.push("/CreateNewPassword")
        }
    }
    submitOTPClicked() {
        console.log("submitOTPClicked");
        let otp = this.props.LoginDetails.OTP;
        let otp1 = ""
        let CancatOtp = otp1.concat(otp.field1, otp.field2, otp.field3, otp.field4, otp.field5, otp.field6)

        let ReSetPassOTP_ToSend = {
            "otp": CancatOtp,
            "mobileNo": this.props.LoginDetails.forgotPasswordMobileNo,
            "requestid": this.props.LoginDetails.requestId
        }
        // if (otp != "" || otp != undefined) {
        //     this.props.history.push("/CreateNewPassword")
        // }
        this.props.ValidateResetPassOTP(ReSetPassOTP_ToSend)
    }

    resendOTPClicked() {
        console.log("resendOtpClicked");
        let mobileNo = this.props.LoginDetails.forgotPasswordMobileNo;
        let requestId = this.props.LoginDetails.requestId;
        this.props.ResendOTP({ mobileNo, requestId })
        this.setState({
            count: 16
        })
        {this.counter()}
    }

    
    counter() {  
        setTimeout(() => {
            if (this.state.count > 0) {
                this.setState({
                    count: this.state.count - 1
                })            
                // return (this.state.count,
                this.counter()
            } else {
            }
        }, 1000)
    }

    render() {
        let mobileNumber = this.props.LoginDetails.forgotPasswordMobileNo 
        let lastThreeDigits= mobileNumber.substring(7)
       
        return (
            <div style={{ background: "white" }} >
                <LoginHeader />
                <div style={{ background: "white" }} >

                    <div style={{ display: "block", padding: "5% 0% 0% 0%", textAlign: "center", lineHeight: 1 }}>
                        <label className="labelStyleHeadings" style={{ fontSize: 45, fontWeight: 600, marginBottom: 0 }}>Password Recovery</label>
                        <div style={{ display: "block", justifyContent: "center", margin: "2% 0% 2% 0%" }}>
                            <Label style={{ fontWeight: 600, fontSize: 25, marginBottom: 20 }}>Please enter the OTP </Label>
                            <div style={{ marginBottom: "1%" }}>
                                <Input
                                    maxLength={1}
                                    id="otpInput1"
                                    // ref={(input) => { this.nameInput1 = input; }}
                                    // autoFocus={this.props.LoginDetails.OTP.field1 == ''}
                                    value={this.props.LoginDetails.OTP.field1}
                                    onChange={(e) => {
                                        let otp = e.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (otp == '' || re.test(otp)) {
                                            this.props.SaveForgotPassDetails(otp, "otpfield1");
                                        }
                                    }}
                                    type="pasword" style={inputOtpStyle} />
                                <Input
                                    maxLength={1}
                                    id="otpInput2"
                                    // ref={(input) => { this.nameInput2 = input; }}
                                    // autoFocus={!(this.props.LoginDetails.OTP.field1 == '') && this.props.LoginDetails.OTP.field2 == ''}
                                    value={this.props.LoginDetails.OTP.field2}
                                    onChange={(e) => {
                                        let otp = e.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (otp == '' || re.test(otp)) {
                                            this.props.SaveForgotPassDetails(otp, "otpfield2");
                                        }
                                    }} type="pasword" style={inputOtpStyle} />
                                <Input
                                    maxLength={1}
                                    id="otpInput3"
                                    // ref={(input) => { this.nameInput3 = input; }}
                                    value={this.props.LoginDetails.OTP.field3}
                                    onChange={(e) => {
                                        let otp = e.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (otp == '' || re.test(otp)) {
                                            this.props.SaveForgotPassDetails(otp, "otpfield3");
                                        }
                                    }} type="pasword" style={inputOtpStyle} />
                                <Input
                                    maxLength={1}
                                    id="otpInput4"
                                    // ref={(input) => { this.nameInput4 = input; }}
                                    value={this.props.LoginDetails.OTP.field4}
                                    onChange={(e) => {
                                        let otp = e.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (otp == '' || re.test(otp)) {
                                            this.props.SaveForgotPassDetails(otp, "otpfield4");
                                        }
                                    }} type="pasword" style={inputOtpStyle} />
                                <Input
                                    maxLength={1}
                                    // ref={(input) => { this.nameInput5 = input; }}
                                    id="otpInput5"
                                    value={this.props.LoginDetails.OTP.field5}
                                    onChange={(e) => {
                                        let otp = e.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (otp == '' || re.test(otp)) {
                                            this.props.SaveForgotPassDetails(otp, "otpfield5");
                                        }
                                    }} type="pasword" style={inputOtpStyle} />
                                <Input
                                    maxLength={1}
                                    // ref={(input) => { this.nameInput6 = input; }}
                                    id="otpInput6"
                                    value={this.props.LoginDetails.OTP.field6}
                                    onChange={(e) => {
                                        let otp = e.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (otp == '' || re.test(otp)) {
                                            this.props.SaveForgotPassDetails(otp, "otpfield6");
                                        }
                                    }} type="pasword" style={inputOtpStyle} />
                            </div>
                            <FormText color="red" style={{ marginLeft: 15, fontSize: 15 }}>{this.props.LoginDetails.Reset_pass_Process_Error}</FormText>
                            <div style={{ display: "flex", justifyContent: "center", fontSize: 15 }}>
                              
                                {/* <button className="buttonStyle Submit" style={{width:132}}
                                 onClick={() => { this.submitOTPClicked() }}
                                 > Submit OTP</button> */}

                                <LaddaButton
                                        className="buttonStyle Submit"
                                        loading={this.props.ProgressIndicator.InProgress}
                                        onClick={() => { this.submitOTPClicked() }}
                                        data-color="warning"
                                        data-style={EXPAND_LEFT}> Submit OTP</LaddaButton>

                                <button className="buttonStyle special2" style={{width:120}}
                                    onClick={() => {  this.props.history.push("/")}}
                                     >Cancel</button>
                            </div>
                        </div>
                        <div style={{ display: "block", justifyContent: "center" }}>
                            <Label style={{ fontSize: 18 }}>An OTP is sent to the registered mobile number  XXXXXXX{lastThreeDigits} via SMS.</Label>
                            <br />
                            <Label style={{ fontSize: 17 }}>Please Check your mobile. It will look something like "<b>356872</b>" </Label>
                        </div>

                        {this.state.count > 0 ?
                            <div style={{ display: "flex", justifyContent: "center", fontSize: 17 }}>
                                <div style={{ padding: "3% 1% 0% 0%" }} >
                                    <Label>You will recieve the  OTP in less than</Label>
                                </div>
                                <div id="stepOne" style={{ background: 'white', height: 70, width: 70, color: "black", border: "2px solid darkred", fontSize: "small", padding: 10 }}
                                    className="circle">
                                    <b style={{ fontSize: 25 }}>{this.state.count} </b> seconds
                                </div>
                            </div>
                            :
                            <div style={{ display: "flex", justifyContent: "center", fontSize: 17 }}>
                                <div style={{ padding: "3% 1% 0% 0%" }} >
                                    <Label>If you did not receive the OTP,we will send it again</Label>
                                </div>

                                <div style={{ padding: "3% 1% 0% 0%" }}>
                                    <a style={{ cursor: "pointer", color: "blue", fontSize: 18 }}
                                        onClick={() => {
                                            this.resendOTPClicked()
                                            // this.props.history.push("CreateNewPassword")
                                        }}>
                                        Resend OTP
                                    </a>
                                </div>
                            </div>}
                    </div>
                </div>
                <div style={{ margin: "18% 0% 0% 0%" }}>
                    <LoginFooter />
                </div>

            </div>
        );
    }
}

const mapStateToProps = ({ Authentication }) => {

    const { LoginDetails,ProgressIndicator } = Authentication;
    return { LoginDetails, ProgressIndicator };
}

export default connect(mapStateToProps, {
    Forgotpassword, SaveForgotPassDetails, ResendOTP, ValidateResetPassOTP
})(PasswordRecovery);
