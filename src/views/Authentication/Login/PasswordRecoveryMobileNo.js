import React, { Component } from 'react';
import {
    Container, Row, Col, CardGroup, Card, CardBody, Button,
    Input, InputGroup, FormText, Label
} from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
import { Forgotpassword, SaveForgotPassDetails ,SaveInputWarnings} from '../../Authentication/AuthenticationAction';

import LoginHeader from "./LoginHeader";
import LoginFooter from './LoginFooter';

class PasswordRecovery1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            warning:"",
        };
        this.sendOTPClicked = this.sendOTPClicked.bind(this);
    }

    componentDidUpdate() {
        let LogIn = this.props.LoginDetails
        if (LogIn.requestId !== '' && LogIn.ForgotPass_Request_Success) {
            this.props.history.push("/PasswordRecoveryOTP");
            this.props.LoginDetails.ForgotPass_Request_Success = false;
        }
    }
    sendOTPClicked() {
        console.log("sendOtpClicked");
        let mobileNo =this.props.LoginDetails.forgotPasswordMobileNo;

      
        if(mobileNo == "" ){
            this.props.SaveInputWarnings("Required mobile number", "mobileNo");
           
        }else
        if(mobileNo.length<10 ){
            this.props.SaveInputWarnings("Enter a valid 10 digit mobile number", "mobileNo");
        }else{
            this.props.Forgotpassword({ mobileNo });
        }   
        // let requestId = this.props.LoginDetails.requestId;
        // console.log("requestId : " + requestId)
        // if(requestId!=""|| requestId!="undefined"){
        //         this.props.history.push("/PasswordRecoveryOTP")
        // }
    }

    render() {

        return (
            <div style={{ background: "white" }} >
                <LoginHeader />
                <div style={{ background: "white" }} >

                    <div style={{ display: "block", padding: "5% 0% 0% 0%", textAlign: "center", lineHeight: 1 }}>
                        <label className="labelStyleHeadings" style={{ fontSize: 45, fontWeight: 600, marginBottom: 0 }}>Password Recovery</label>
                        <div style={{ display: "block", justifyContent: "center", margin: "4% 0% 2% 0%" }}>
                            <Label style={{ fontWeight: 600, fontSize: 22, marginBottom: 0 }}>Please enter the registered mobile number. </Label>
                            <div style={{ margin: "1% 43% 1% 43%" }}>
                                <Input
                                    maxLength={10}
                                    value={this.props.LoginDetails.forgotPasswordMobileNo}
                                    onChange={(e) => {
                                        let MobileNo = e.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (MobileNo == '' || re.test(MobileNo)) {
                                            this.props.SaveForgotPassDetails(MobileNo, "mobileNo");
                                        }
                                    }}
                                    style={{ padding: 15 }}
                                />
                            </div>
                            <FormText  color="red" style={{ marginLeft: 15, fontSize: 15 }}> {this.props.LoginDetails.InputWarnings.mobileNoWarning}</FormText>
                            <div style={{ display: "flex", justifyContent: "center", fontSize: 15 }}>
                                <button className="buttonStyle Submit"
                                    // disabled={this.props.LoginDetails.forgotPasswordMobileNo.length !== 10}
                                    onClick={() => {
                                        this.sendOTPClicked()
                                    }}>
                                    Send OTP
                            </button>
                                <button className="buttonStyle special2"
                                    onClick={() => {
                                        this.props.history.push("/")

                                    }}>
                                    Cancel
                            </button>
                            </div>
                        </div>
                        <div style={{ display: "block", justifyContent: "center" }}>
                            <Label style={{ fontSize: 18 }}>An OTP will be sent to the registered mobile number via SMS.</Label>
                        </div>


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

    const { LoginDetails } = Authentication;
    return { LoginDetails };
}

export default connect(mapStateToProps, {
    Forgotpassword, SaveForgotPassDetails,SaveInputWarnings
})(PasswordRecovery1);
