import React, { Component } from 'react';
import {
     Input, InputGroup, FormText, Label
} from 'reactstrap';

import { connect } from 'react-redux';
import { ResetPassword, SaveForgotPassDetails, RestPasswordMisMatch } from '../../Authentication/AuthenticationAction';
import LoginHeader from "./LoginHeader";
import LoginFooter from './LoginFooter';
const LabelStyle = {
     padding: 3, background: "#8c8787", borderRadius: "50%", margin: "0px 15px 1px 0px", color: "#12e012" 
 }
class CreateNewPassword extends Component {

     constructor(props) {
          super(props);
          this.state = {
               count: 16,
             
          };
          this.savePasswordClicked = this.savePasswordClicked.bind(this);
     }
     componentDidUpdate() {
          let resetPassword_Success = this.props.LoginDetails.resetPassword_Success;
          if (resetPassword_Success) {
               this.props.history.push("/PasswordCreatedSuccess");
          }
     }
     savePasswordClicked() {
          console.log("savePasswordClicked");
          let mobileNo = this.props.LoginDetails.forgotPasswordMobileNo;
          let requestId = this.props.LoginDetails.requestId;
          // let otp = this.props.LoginDetails.otp;
          let otp = this.props.LoginDetails.OTP;
          let fullotp = ""
          let CancatOtp = fullotp.concat(otp.field1, otp.field2, otp.field3, otp.field4, otp.field5, otp.field6)
          let newPassword = this.props.LoginDetails.newPassword;
          let newpasswordConfirm = this.props.LoginDetails.newpasswordConfirm;

          if (newPassword == newpasswordConfirm) {
               this.props.ResetPassword({ mobileNo, requestId, CancatOtp, newPassword });
          } else {
               this.props.RestPasswordMisMatch();
          }
     }

     render() {
          return (
               <div style={{ background: "white" }} >

                    <LoginHeader />
                    <div style={{ background: "white" }} >
                         <div style={{ width: "65%", textAlign: "center", margin: "5% 0% 3% 0%" }}>
                              <label className="labelStyleHeadings" style={{ fontSize: 50, fontWeight: 600 }} >Create New Password</label>
                         </div>
                         <div style={{ display: "flex", margin: "3% 0% 0% 0%", justifyContent: "center" }}>

                              <div style={{width:"21%" }}>

                                   <div>
                                        <Input type="password"
                                             maxLength={6}
                                             placeholder="Enter Password"
                                             value={this.props.LoginDetails.newPassword}
                                             onChange={(e) => {
                                                  let NewPassword = e.target.value;
                                                  const re = /^[0-9a-zA-Z\b]+$/;
                                                  if (NewPassword == '' || re.test(NewPassword)) {
                                                       this.props.SaveForgotPassDetails(NewPassword, "newpassword");
                                                  }
                                             }}
                                             style={{ padding: 15 }} style={{ padding: "5%", margin: "0% 0% 8% 0%" }}
                                        />
                                        <Input
                                             type="password"
                                             maxLength={6}
                                             placeholder="Verify  Password"
                                             value={this.props.LoginDetails.newpasswordConfirm}
                                             onChange={(e) => {
                                                  let newpasswordConfirm = e.target.value;
                                                  const re = /^[0-9a-zA-Z\b]+$/;
                                                  if (newpasswordConfirm == '' || re.test(newpasswordConfirm)) {
                                                       this.props.SaveForgotPassDetails(newpasswordConfirm, "newpasswordConfirm");
                                                  }
                                             }}
                                             style={{ padding: 15 }} style={{ padding: "5%", margin: "0% 0% 8% 0%" }} style={{ padding: "5%" }} />
                                   </div>


                                   <FormText color="red" style={{ marginLeft: 15, fontSize: 15 }}>{this.props.LoginDetails.ResetPassMisMatch ? "Password is not matching" : ""}</FormText>

                                   <div style={{ display: "flex", marginTop: "5%" }}>
                                        <button className="buttonStyle Submit"  style={{ width:150 }}
                                             onClick={() => {  this.savePasswordClicked()}}> Reset Password</button>
                                        <button className="buttonStyle special2"  style={{ width:150 }}
                                             onClick={() => {this.props.history.push("/")}}> Cancel</button>
                                   </div>
                              </div>

                              <div style={{ margin: "1% 0% 0% 10%", fontWeight: 600 }}>
                                   <Label style={{ }}>
                                        <Label style={LabelStyle}>
                                             {/* &#x2713; */}
                                        </Label>
                                        Your password has to be at least 8 characters long
                                   </Label>
                                   <br />
                                   <Label style={{ }}>
                                        <Label style={LabelStyle}>
                                             {/* &#x2713; */}
                                        </Label>
                                        Must contain at least one lower case letter, one upper case letter
                                   </Label>
                                   <br />
                                   <Label style={{  }}>
                                        <Label style={LabelStyle}>
                                             {/* &#x2713; */}
                                        </Label>
                                        Must contain at least one number
                                   </Label>
                                   <br />
                                   <Label style={{  }}>
                                        <Label style={LabelStyle}>
                                             {/* &#x2713; */}
                                        </Label>
                                        Should contain one of these special characters ~!@#$%^&*()_+
                                   </Label>
                              </div>

                         </div>
                    </div>

                    <div style={{ margin: "20% 0% 0% 0%" }}>
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
     ResetPassword, SaveForgotPassDetails ,RestPasswordMisMatch
})(CreateNewPassword);
