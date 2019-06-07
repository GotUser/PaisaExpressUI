import React, { Component } from 'react';
import {
  Container, Row, Col, CardGroup, Card, CardBody, Button,
  Input, InputGroup, FormText
} from 'reactstrap';

import { connect } from 'react-redux';

import { PaisaExpressLogin, ResetLogin, getUserAccessPermissions } from '../../Authentication/AuthenticationAction'

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
    // this.props.ResetLogin()
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
  }

  componentDidUpdate() {
    console.log(" ...... # # # # # #  LogIn Component DId mount # # # # # . . . . . . . ");
    if (this.props.LoginDetails.isLoginSuccess) {

      if (this.props.userRoleModulePermissions.isLoginRolesLoaded) {
        console.log(" ...... # # # # # #  LogIn Component DId mount isLoginRolesLoaded TRUE # # # # # . . . . . . . ");
        // document.body.classList.toggle('sidebar-hidden');
        document.body.classList.toggle('sidebar-minimized');
        // document.body.classList.toggle('aside-menu-hidden');
        this.props.userRoleModulePermissions.isLoginRolesLoaded = false;
        this.props.history.push({
          pathname: '/Dashboard',
          
          state: {
            Role: this.props.LoginDetails.roleName,
            FromLogIn: true
          }
        })
      }
      else {
        console.log(" isLoginRolesLoaded isLoginRolesLoaded isLoginRolesLoaded isLoginRolesLoaded Is FAIL and this.state.executableCounter ");
        console.log(this.state.executableCounter);
        // if (this.state.executableCounter === 0) {

          let accessToken = this.props.LoginDetails.accessToken;
          //this.props.getAllRoles({ accessToken });
          let UserId = this.props.LoginDetails.UserId;
          this.props.getUserAccessPermissions(accessToken, UserId);

          // this.setState({
          //   executableCounter: 1
          // })

        // }
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
      <div className="app flex-row align-items-center">
        {/* <div className="progress-bar" >
          <Filler />
        </div> */}
        {/* <div className="app flex-row align-items-center"> */}

        <Container>
          <Row className="justify-content-center">
            <Col md="4">
              <CardGroup className="mb-4">
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    {/* <p className="text-muted">Sign In to your account</p> */}

                    <InputGroup className="mb-3">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-user"></i>
                        </span>
                      </div>
                      <Input
                        maxLength={10}
                        onKeyPress={(e) => {
                          const re = /[0-9:]+/g;
                          if (!re.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        onChangeCapture={(text) => { this.props.LoginDetails.mobileNo = text.target.value }}
                        className={this.focusField(this.state.Errors["mobileNo"])}
                        type="text" placeholder="Mobile No" />

                    </InputGroup>

                    <InputGroup className="mb-4">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="icon-lock"></i>
                        </span>
                      </div>
                      <Input
                        onChangeCapture={(text) => { this.props.LoginDetails.password = text.target.value }}
                        type="password" placeholder="Password" maxLength={6}
                        className={this.focusField(this.state.Errors["password"])} />
                    </InputGroup>
                    <Row>
                      <Col md="12">
                        <FormText color="red" style={{ textAlign: 'right' }}> {this.props.LoginDetails.loginError}</FormText>
                      </Col>
                      <Col xs="6">

                        <Button onClick={() => this.LoginClicked()} color="warning" className="px-4">Login</Button>

                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
        {/* </div> */}
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
    console.log('Save To Local Store')
    let roles = this.props.role.rolesList;
    console.log(roles)
    localStorage.setItem('AdminRoles', JSON.stringify(roles));
    localStorage.setItem('DistributorRoles', JSON.stringify(roles[0]));
    localStorage.setItem('RetailerRoles', JSON.stringify(roles[1]));
    localStorage.setItem('AgentRoles', JSON.stringify(roles[2]));
  }
}

const mapStateToProps = ({ Authentication }) => {

  const { LoginDetails, userRoleModulePermissions,ProgressIndicator } = Authentication;
  return { LoginDetails, userRoleModulePermissions,ProgressIndicator };
}

export default connect(mapStateToProps, { PaisaExpressLogin, ResetLogin, getUserAccessPermissions })(Login);



const Filler = (props) => {
  return <div className="filler" ></div>
}