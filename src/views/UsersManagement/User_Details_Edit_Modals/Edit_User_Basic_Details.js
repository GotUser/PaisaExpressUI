
import React, { Component } from 'react';
import {
    Col, Button, Form, FormGroup, Card, CardBody, CardFooter, CardHeader,
    FormText, Label, Input, Row
} from 'reactstrap';

import { connect } from 'react-redux';
import LaddaButton, { EXPAND_LEFT } from 'react-ladda';

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';
import { DisplaySpinner } from '../../GlobalModals';


import { NumberRegex, FullNameRegex, EmailId } from '../../AllRegexFormats';
import {
    CloseUserSettingsModal, SubmitEdittedUserDetails, Save_Editing_User_Basic_Details, IpWarnings_At_Edit_User_Basic_Details, clearResponseOfUserApis,
} from '../../UsersManagement/UserManagementAction';

import { Labelstyle1, InputTextStyle, toTitleCase } from '../../../GlobalVars';

var DefaultProfilePic = require('../../../../public/img/DefaultProfilePic.jpg');

class Edit_User_Basic_Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchingValue: '',
            fields: {},
            errors: {},
        };
    }

    componentDidUpdate() {

        if (this.props.UserDetails.UserApiResults.Error !== '' && this.props.UserDetails.UserApiResults.updateUserDetailsFail !== '') {
            setTimeout(() => {
                this.props.clearResponseOfUserApis()
            }, 15000);
        }

        let EditingUserType = this.props.UserDetails.EditingUserType;

        if (!this.props.UserDetails.EditUserClicked) {
            EditingUserType == "FSE" ?
                this.props.history.push("/FSE")
                :
                this.props.history.push("/Agent")
        }

    }
    SubmitEditUserDetails() {

        const usertoUpdateReducer = this.props.UserDetails.UserDetailsToEdit;
        const UserMobileNo = usertoUpdateReducer.mobileNumber === undefined || usertoUpdateReducer.mobileNumber === null ?
            usertoUpdateReducer.mobileNo : usertoUpdateReducer.mobileNumber

        // usertoUpdateReducer.profilePicture !== '' && usertoUpdateReducer.profilePicture !== undefined ? usertoUpdateReducer.profilePicture.substr(usertoUpdateReducer.profilePicture.indexOf(",") + 1) : null;


        let UserDataToSend =
        {
            userId: usertoUpdateReducer.userId,
            fullName: usertoUpdateReducer.fullName,
            mobileNo: UserMobileNo,
            emailId: usertoUpdateReducer.emailId,
            picture: usertoUpdateReducer.profilePicture,
            addressDetails: {
                addressLine1: usertoUpdateReducer.addressLine1,
                addressLine2: usertoUpdateReducer.addressLine2
            }
        }
        let EditingUserType = this.props.UserDetails.EditingUserType;

        let AccessToken = this.props.LoginDetails.accessToken;

        this.props.SubmitEdittedUserDetails(AccessToken, UserDataToSend, usertoUpdateReducer, EditingUserType)
    }

    contactSubmit(e) {
        if (this.handleValidation(e)) {
            this.SubmitEditUserDetails()
        } else {
            console.log(this.state.errors);
        }
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        let errors = {};
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                this.props.UserDetails.UserDataEditWarning.profilePicture = "";

                let Image = reader.result.split(',');
                let Base64 = Image[1];
                this.props.Save_Editing_User_Basic_Details(Base64, 'profilePicture');
            }
            reader.readAsDataURL(file)
        } else {
            this.props.IpWarnings_At_Edit_User_Basic_Details("Image type should be either PNG or JPEG", "profilePicture")
        }
    }

    handleValidation(e) {
        let errors = {};
        let formIsValid = true;
        let user = this.props.UserDetails.UserDetailsToEdit;

        if (user.fullName === '') {
            formIsValid = false;
            errors["fullName"] = "Required User Name";
        }

        if (user.addressLine1 === '') {
            formIsValid = false;
            errors["addressLine1"] = "Required Address Line1";
        }
        if (user.addressLine2 === '') {
            formIsValid = false;
            errors["addressLine2"] = "Required Address Line 2";
        }


        if (user.emailId === '') {
            formIsValid = false;
            errors["emailId"] = "Required Email Id";
        }
        else {
            let lastAtPos = user.emailId.lastIndexOf('@');
            let lastDotPos = user.emailId.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&
                user.emailId.indexOf('@@') == -1 &&
                lastDotPos > 2 && (user.emailId.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["emailId"] = "Email is not valid";
            }
        }

        if (errors.length != 0) {
            this.props.IpWarnings_At_Edit_User_Basic_Details(errors, 'AllErrorsAfterValidation');
        }

        return formIsValid;
    }


    DisplayThis_For_Agent_Only() {

        let StatesObj = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;

        if (this.props.UserDetails.EditingUserType == 'Agent') {

            return <div>
                <FormGroup row>
                    <Col md="2">
                        <Label style={Labelstyle1} >Address  {RequireIconForIpFiled()} </Label>
                    </Col>
                    <Col xs="12" md="4">

                        <Input type="text"
                            style={InputTextStyle}
                            value={this.props.UserDetails.UserDetailsToEdit.addressLine1}
                            placeholder={this.props.UserDetails.UserDetailsToEdit.addressLine1 != null ? '' : 'Enter address Line 1'}
                            onChangeCapture={(event) => {
                                let value = event.target.value;
                                // if (value === '' || value.match(FullNameRegex)) {
                                let TitleCaseVal = toTitleCase(value)
                                this.props.Save_Editing_User_Basic_Details(TitleCaseVal, 'addressLine1');
                                // } else this.props.IpWarnings_At_Edit_User_Basic_Details(" Please Enter Only Letters", "addressLine1");
                            }}
                            id='agentAddressLine1' />

                        <FormText color="red"> {this.props.UserDetails.UserDataEditWarning.addressLine1} </FormText>
                    </Col>
                    <Col xs="12" md="4">
                        <Input type="text"
                            style={InputTextStyle}
                            value={this.props.UserDetails.UserDetailsToEdit.addressLine2}
                            placeholder={this.props.UserDetails.UserDetailsToEdit.addressLine2 != null ? '' : 'Enter address Line 2'}
                            onChangeCapture={(event) => {
                                let value = event.target.value;
                                // if (value === '' || value.match(FullNameRegex)) {
                                let TitleCaseVal = toTitleCase(value)
                                this.props.Save_Editing_User_Basic_Details(TitleCaseVal, 'addressLine2');
                                // } else this.props.IpWarnings_At_Edit_User_Basic_Details(" Please Enter Only Letters", "addressLine2");
                            }}
                            id='agentAddressLine2' />
                        <FormText
                            color="red">{this.props.UserDetails.UserDataEditWarning.addressLine2} </FormText>
                    </Col>
                </FormGroup>

            </div>
        } else return null;
    }


    render() {

        let pictureBase64 = this.props.UserDetails.UserDetailsToEdit.pictureBase64;
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="User" />
                {
                    !this.props.ProgressIndicator.InProgress ?
                        <Row>
                            <Col xs="12" md="12">
                                <Card>

                                    <CardHeader> Edit {this.props.UserDetails.EditingUserType} </CardHeader>

                                    <CardBody>

                                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                                            <FormGroup row>
                                                <Col md="2">
                                                    <Label style={Labelstyle1} htmlFor="agentfullName">User Name {RequireIconForIpFiled()}</Label>
                                                </Col>
                                                <Col xs="12" md="5">
                                                    <Input type="text"
                                                        style={InputTextStyle}
                                                        value={this.props.UserDetails.UserDetailsToEdit.fullName}
                                                        onChange={(event) => {
                                                            let value = event.target.value;
                                                            if (value == '' || value.match(FullNameRegex)) {
                                                                let TitleCaseVal = toTitleCase(value)
                                                                this.props.Save_Editing_User_Basic_Details(TitleCaseVal, 'fullName');
                                                            } else this.props.IpWarnings_At_Edit_User_Basic_Details(" Please Enter Only letters", "fullName");
                                                        }}
                                                        id='agentfullName' />
                                                    <FormText color="red"> {this.props.UserDetails.UserDataEditWarning.fullName} </FormText>
                                                </Col>
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md="2">
                                                    <Label style={Labelstyle1} htmlFor="agentMobileNo">Mobile No {RequireIconForIpFiled()}</Label>
                                                </Col>
                                                <Col xs="12" md="5">
                                                    <Input type="text" maxLength={10}

                                                        disabled={true}
                                                        value={this.props.UserDetails.UserDetailsToEdit.mobileNumber === undefined || this.props.UserDetails.UserDetailsToEdit.mobileNumber === null ?
                                                            this.props.UserDetails.UserDetailsToEdit.mobileNo : this.props.UserDetails.UserDetailsToEdit.mobileNumber}
                                                        onChangeCapture={(event) => {
                                                            let value = event.target.value;
                                                            if (value === '' || value.match(NumberRegex)) {
                                                                this.props.Save_Editing_User_Basic_Details(value, 'mobileNumber');
                                                            } else this.props.IpWarnings_At_Edit_User_Basic_Details(" Please Enter Only Numbers", "mobileNumber");
                                                        }}
                                                        id='agentMobileNo' />
                                                    <FormText
                                                        color="red"> {this.props.UserDetails.UserDataEditWarning.mobileNumber} </FormText>
                                                </Col>
                                            </FormGroup>

                                            <FormGroup row>
                                                <Col md="2">
                                                    <Label style={Labelstyle1} htmlFor="agentEmailId">Email Id  {RequireIconForIpFiled()}</Label>
                                                </Col>
                                                <Col xs="12" md="5">
                                                    <Input type="text"
                                                        value={this.props.UserDetails.UserDetailsToEdit.emailId}
                                                        onChangeCapture={(event) => {
                                                            let value = event.target.value;
                                                            if (value == '' || value.match(EmailId)) {
                                                                this.props.Save_Editing_User_Basic_Details(value, 'emailId');
                                                            } else this.props.IpWarnings_At_Edit_User_Basic_Details(" Please Enter Valid Emailid", "emailId");
                                                        }}

                                                        id='agentEmailId' />
                                                    <FormText
                                                        color="red">{this.props.UserDetails.UserDataEditWarning.emailId} </FormText>
                                                </Col>
                                            </FormGroup>


                                            <FormGroup row>
                                                <Col md="2">
                                                    <Label style={Labelstyle1} htmlFor="file-input">Profile Pic</Label>
                                                </Col>
                                                <Col xs="12" md="4">
                                                    <img
                                                        onClick={() => {
                                                            console.log(" console.log(Image Clicked : )")
                                                        }}
                                                        style={{ height: '20vh', width: '100%' }}
                                                        src={pictureBase64 == undefined ? DefaultProfilePic : "data:image/jpg;base64," + this.props.UserDetails.UserDetailsToEdit.pictureBase64}

                                                    />
                                                    <Input type="file"
                                                        onChange={(e) => { this.handleImageChange(e) }}
                                                        id="file-input" name="file-input" />
                                                    <FormText color="red"> {this.props.UserDetails.UserDataEditWarning.profilePicture} </FormText>
                                                </Col>
                                            </FormGroup>
                                        </Form>
                                        <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                                            {this.props.UserDetails.UserApiResults.Error}</span>
                                    </CardBody>

                                    <CardFooter>
                                        <LaddaButton
                                            className="btn btn-warning btn-ladda"
                                            loading={this.props.ProgressIndicator.InProgress}
                                            onClick={this.contactSubmit.bind(this)}
                                            data-color="warning"
                                            data-style={EXPAND_LEFT}
                                            style={{ marginRight: 20 }}  >
                                            Save
                                            </LaddaButton>
                                        <Button color="secondary" onClick={() => { this.props.CloseUserSettingsModal(), this.setState({ errors: {} }) }}>Cancel</Button>
                                    </CardFooter>

                                </Card>
                            </Col>
                        </Row>
                        :
                        <Row style={{ margin: "13%" }}>
                            {DisplaySpinner()}
                        </Row>
                }
            </div>
        )
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { UserDetails, OrganizationDetails, role, ProgressIndicator } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { UserDetails, OrganizationDetails, LoginDetails, role, ProgressIndicator };
};

export default connect(mapStateToProps, {
    CloseUserSettingsModal, SubmitEdittedUserDetails,
    Save_Editing_User_Basic_Details, IpWarnings_At_Edit_User_Basic_Details, clearResponseOfUserApis
})(Edit_User_Basic_Details);



function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5 }} > *</span>
}


