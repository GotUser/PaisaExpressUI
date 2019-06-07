import React, { Component } from 'react';
import {
  Container, Row, Col, CardGroup, Card, CardBody, Button,
  Input, InputGroup, FormText, Label
} from 'reactstrap';

import LaddaButton, { EXPAND_LEFT,EXPAND_RIGHT,EXPAND_UP
} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';

import {
  PaisaExpressLogin, ResetLogin, getUserAccessPermissions, SaveLogInIpDetails,
  GetMyPermissionsMenuList
} from '../../Authentication/AuthenticationAction'

import LoginAnim from '../../../../public/img/Login_anim-3.gif';

import LoginHeader from "./LoginHeader";
import LoginFooter from './LoginFooter';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      executableCounter: 0,
      Errors: {}
    }
    this.LoginClicked = this.LoginClicked.bind(this);
  }

  componentWillMount() {
    let isLoginSuccess = false
    this.props.ResetLogin()
    // this.props.SaveLogInIpDetails(isLoginSuccess, 'isLoginSuccess');
  }

  componentDidUpdate() {
    let password = this.props.LoginDetails.password;

    if (this.props.LoginDetails.isLoginSuccess) { 
      if (this.props.userRoleModulePermissions.isLoginRolesLoaded) {
        let roleName=this.props.LoginDetails.roleName;
            roleName == "Admin" ? this.props.history.push("Admin")
            : roleName == "FSE" ? this.props.history.push("FsePage")
            : roleName == "Agent" ? this.props.history.push("AgentPage")
            : roleName == "Retailer" ? this.props.history.push("RetailerPage")
            : roleName == "Distributor" ? this.props.history.push("DistributorPage")
            : null;
        document.body.classList.toggle('sidebar-minimized');
        this.props.userRoleModulePermissions.isLoginRolesLoaded = false;
        // this.props.history.push({
        //   pathname: '/Admin',
        //   state: {
        //     Role: this.props.LoginDetails.roleName,
        //     FromLogIn: true
        //   }
        // })
      }
      else {
        let accessToken = this.props.LoginDetails.accessToken;
        let UserId = this.props.LoginDetails.UserId;
        // this.props.getUserAccessPermissions(accessToken, UserId);
        this.props.GetMyPermissionsMenuList(accessToken);
      }
    }
  }
  LoginClicked() {
    let mobileNo = this.props.LoginDetails.mobileNo;
    let password = this.props.LoginDetails.password;
    this.props.PaisaExpressLogin({ mobileNo, password });
  }



  render() {
    return (
      <div style={{ background: "white" }} >
        <LoginHeader />
        <div style={{ background: "white" }} >
          <div style={{ display: "flex", padding: "8% 0% 0% 0%", justifyContent: "center" }}>
            <div style={{ width: "52%", paddingTop: "3%" }}>
              <div >
                <img src={LoginAnim}></img>
              </div>
            </div>

            <div style={{ width: "38%" }}>
              <Card style={{ width: "65%", background: "#fbfbfb" }}>
                <CardBody>
                  <Input
                    maxLength={10}
                    value={this.props.LoginDetails.mobileNo}
                    onKeyPress={(e) => {
                      const re = /[0-9:]+/g;
                      if (!re.test(e.key)) {
                        e.preventDefault();
                      }
                    }}
                    onChange={(text) => {
                      // console.log("  MobileNo MobileNo MobileNo ");
                      // console.log(MobileNo);
                      let MobileNo = text.target.value;
                      const re = /^[0-9\b]+$/;
                      if (MobileNo == '' || re.test(MobileNo)) {
                        this.props.SaveLogInIpDetails(MobileNo, 'mobileNo');
                      }
                    }}
                    className={this.focusField(this.state.Errors["mobileNo"])}
                    type="text" placeholder="Mobile Number"
                    style={{ padding: "5%", margin: "2% 0% 5% 2%" }} />

                  <Input
                    value={this.props.LoginDetails.password}
                    onChange={(text) => {

                      this.props.SaveLogInIpDetails(text.target.value, 'password');
                    }}
                    type="password" placeholder="Password" maxLength={6}
                    className={this.focusField(this.state.Errors["password"])}
                    style={{ padding: "5%", margin: "2% 0% 2% 2%" }} />

                  <FormText style={{ margin: "5px 0px 5px 15px" }}>
                    <a style={{ cursor: "pointer", textDecoration: "underline", fontSize: 15 }}
                      onClick={() => {
                        this.props.history.push("PasswordRecoveryMobileNo")
                      }}
                    >Forgot password?
                                  </a>
                  </FormText>

                  {/* <Button onClick={() => this.LoginClicked()} color="warning" className="px-4"
                    >Sign in</Button> */}

                    
                  <LaddaButton
                              style={{ padding: "5%", margin: "2%", width: "100%", color: "black" }}
                                className="btn btn-warning btn-ladda"
                                loading={this.props.ProgressIndicator.InProgress}
                                onClick={() => this.LoginClicked()}
                                data-color="warning"
                                data-style={EXPAND_LEFT}    >
                    Sign in
                  </LaddaButton>

                  <FormText color="red" style={{ margin: "5px 0px 5px 15px", fontSize: 15 }}>{this.props.LoginDetails.loginError}</FormText>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        <div style={{ margin: "18% 0% 0% 0%" }}>
          <LoginFooter />
        </div>
      </div>
    );
  }
  ValidateFields({ mobileNo, password }) {
    let errors = {};
    let isValid = true;
    if (mobileNo != undefined && password != undefined) {
      if (mobileNo == '') {
        errors["mobileNo"] = 'Required';
        isValid = false;
      } else if (mobileNo.length < 10) {
        errors["mobileNo"] = 'Entered a 10 digit mobile no.';
        isValid = false;
      }
      if (password == '' || password == null) {
        errors["password"] = 'Required';
        isValid = false;
      }
    }
    this.setState({
      Errors: errors
    });
    return isValid;
  }
  focusField(fieldValue) {
    if (fieldValue === undefined) {
      return '';
    }
    else {
      return 'is-invalid'
    }
  }

  SaveToLocalStore() {
    // console.log('Save To Local Store')
    let roles = this.props.role.rolesList;
    // console.log(roles)
    localStorage.setItem('AdminRoles', JSON.stringify(roles));
    localStorage.setItem('DistributorRoles', JSON.stringify(roles[0]));
    localStorage.setItem('RetailerRoles', JSON.stringify(roles[1]));
    localStorage.setItem('AgentRoles', JSON.stringify(roles[2]));
  }
}
const mapStateToProps = ({ Authentication }) => {

  const { LoginDetails, userRoleModulePermissions ,ProgressIndicator} = Authentication;
  return { LoginDetails, userRoleModulePermissions ,ProgressIndicator};
}

export default connect(mapStateToProps, {
  PaisaExpressLogin, ResetLogin, getUserAccessPermissions, SaveLogInIpDetails,
  GetMyPermissionsMenuList
})(Login);
