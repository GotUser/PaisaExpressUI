import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, Button, FormGroup, Modal, ModalBody, ModalFooter, ModalHeader,
    FormText, Label, Input, CardFooter, CardHeader, Collapse,
} from 'reactstrap';

import LaddaButton, {
    EXPAND_LEFT
} from 'react-ladda';

import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SwitchToggle from 'react-toggle'
import "react-toggle/style.css"
// import { DisplaySpinner } from '../../../GlobalModals';
import { DisplaySpinner } from '../../GlobalModals';
var DefaultProfilePic = require('../../../../public/img/DefaultProfilePic.jpg');
import { withRouter } from "react-router";
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import {
    Save_ORG_RegistrationIpDetails, OrgRegistrationInputWarnings,
    SendCreateOrganizationDetails, Save_Org_Form_Types, UpdateCreatingOrgBasicDetails,
    Cancle_Organization_Edit_Modal, Save_Editing_Org_Basic_Details, GetOrganizationsList,
    IpWarnings_At_Edit_Org_Basic_Details, SendChanged_Organization_Basic_Details, clearResponseOnORGApis
} from '../UserManagementAction';

import { Labelstyle1, InputTextStyle, toTitleCase } from '../../../GlobalVars';

import '../../../../public/CustomStyles.css';

import { NumberRegex, FullNameRegex, UrlRegex, AlphNumericRegex } from '../../AllRegexFormats';

var CitiesOfStateObj = '';

class Org_Edit_Basic_Details extends Component {

    constructor(props) {
        super(props);
        this.state = {
            SelectedState: '',
        };
        this.SaveEdditedDistributorDetails = this.SaveEdditedDistributorDetails.bind(this);
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                let Image = reader.result.split(',');
                let Base64 = Image[1];
                this.props.Save_Editing_Org_Basic_Details(Base64, 'profilePicture');
            }
            reader.readAsDataURL(file)
        } else {
            this.props.OrgRegistrationInputWarnings("Image type should be either PNG or JPEG", 'pictureBase64')
        }
    }

    componentDidUpdate() {
        let EditOrgModal = this.props.OrganizationDetails.EditOrganizationDetails.EditOrgModal;
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;

        if (!EditOrgModal) {
            PresentCreatingOrgType == "AdminRetailer" ? this.props.history.push("/AdminRetailer") :
                PresentCreatingOrgType == "PendingRetailer" ? this.props.history.push("/PendingRetailer") :
                    PresentCreatingOrgType == "Distributor" ? this.props.history.push("/Distributor") :
                        PresentCreatingOrgType == "PendingDistributor" ? this.props.history.push("/PendingDistributor") :
                            null
        }
    }

    SaveSelectedStateInLocal(stateName) {

        let AllStatesAndCities = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;

        Object.keys(AllStatesAndCities).map((state, i) => {
            if (state === stateName) {
                CitiesOfStateObj = AllStatesAndCities[state];
                console.log("  State Name IN  SaveSelectedStateInLocal ");
                console.log(state);
                console.log(AllStatesAndCities[state])
            }
        }
        )

        this.setState({ SelectedState: stateName });
    }
    render() {
        let StatesObj = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;
        let OrgDetails = this.props.OrganizationDetails.EditOrganizationDetails;
        let RateCardsList = this.props.OrganizationDetails.OrganizationStoreInfo.RateCardsList;
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;
        let profilePicture = OrgDetails.EditingUserData.profilePicture;

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="EditBasicDetails" contentPath="/ Management / Retailers" />

                {
                    !this.props.ProgressIndicator.InProgress ?
                        <Row>
                            <Col xs="12" md="1"></Col>
                            <Col xs="12" md="12">
                                <Card>
                                    <CardHeader> Edit {PresentCreatingOrgType == "Distributor" ? "Distributor" : "Retailer"}  </CardHeader>

                                    <CardBody>
                                        <FormGroup row >
                                            <Col md="2">
                                                <Label style={Labelstyle1} > Name   </Label>
                                            </Col>

                                            <Col xs="12" md="3">
                                                <Input className='modalInputCol' type="text"
                                                    style={InputTextStyle}
                                                    value={OrgDetails.EditingUserData.name}
                                                    onChange={(txt) => {
                                                        let value = txt.target.value;
                                                        if (value === '' || value.match(FullNameRegex)) {
                                                            let TitleCaseVal = toTitleCase(value)
                                                            this.props.Save_Editing_Org_Basic_Details(TitleCaseVal, "name");
                                                        } else this.props.IpWarnings_At_Edit_Org_Basic_Details(" Please Enter Only letters", "name");
                                                    }
                                                    }
                                                />
                                                <FormText color="red"> {OrgDetails.EditUserDataWarning.name} </FormText>
                                            </Col>


                                            <Col md="2">
                                                <Label style={Labelstyle1} >Mobile No  {RequireIconForIpFiled()}  </Label>
                                            </Col>

                                            <Col xs="12" md="3">
                                                <Input
                                                    value={OrgDetails.EditingUserData.mobileNo != null ?
                                                        OrgDetails.EditingUserData.mobileNo : ''}
                                                    placeholder="Enter Mobile Number"
                                                    onChange={(val) => {
                                                        let value = val.target.value
                                                        if (value === '' || value.match(/^[0-9]+$/)) {
                                                            this.props.Save_Editing_Org_Basic_Details(value, 'mobileNo');
                                                        } else this.props.IpWarnings_At_Edit_Org_Basic_Details("Enter Only numbers", 'mobileNo')
                                                    }
                                                    }
                                                    maxLength={10}
                                                    // style={{ fontWeight: 'bold' }}
                                                    required />
                                                <FormText color="red"> {OrgDetails.EditUserDataWarning.mobileNo} </FormText>
                                            </Col>
                                        </FormGroup>


                                        <FormGroup row >
                                            <Col md="2">
                                                <Label style={Labelstyle1} >Email Id  </Label>
                                            </Col>
                                            <Col xs="12" md="3">
                                                <Input type="text"
                                                    value={OrgDetails.EditingUserData.emailId}
                                                    placeholder={OrgDetails.EditingUserData.emailId === null || OrgDetails.EditingUserData.emailId === '' ?
                                                        'Enter Email Id' : null}
                                                    onChange={(txt) => {
                                                        let value = txt.target.value
                                                        if (value === '' || value.match(/^[.@a-zA-Z_0-9]+$/) || value.match(NumberRegex)) {
                                                            this.props.Save_Editing_Org_Basic_Details(value, 'emailId');
                                                        } else this.props.IpWarnings_At_Edit_Org_Basic_Details("Enter Valid Email ", 'emailId')
                                                    }}
                                                    id='agentEmailId' />
                                                <FormText color="red"> {OrgDetails.EditUserDataWarning.emailId} </FormText>
                                            </Col>

                                            <Col md="2">
                                                <Label style={Labelstyle1} > Business Name   </Label>
                                            </Col>

                                            <Col xs="12" md="3">

                                                <Input type="text"
                                                    style={InputTextStyle}
                                                    placeholder={OrgDetails.EditingUserData.businessName === null || OrgDetails.EditingUserData.businessName === '' ?
                                                        'Enter Business Name' : null}
                                                    value={OrgDetails.EditingUserData.businessName}
                                                    onChange={(txt) => {
                                                        let value = txt.target.value
                                                        if (value === '' || value.match(FullNameRegex)) {
                                                            let TitleCaseVal = toTitleCase(txt.target.value)
                                                            this.props.Save_Editing_Org_Basic_Details(TitleCaseVal, "businessName");
                                                        }
                                                    }}
                                                    id='agentShopName' />
                                                <FormText color="red"> {OrgDetails.EditUserDataWarning.businessName} </FormText>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row >
                                            <Col md="2">
                                                <Label style={Labelstyle1} >Address    </Label>
                                            </Col>

                                            <Col xs="12" md="4">
                                                <div className="user-input-wrp">
                                                    <Input type="text"
                                                        style={InputTextStyle}
                                                        value={OrgDetails.EditingUserData.address.addressLine1 != undefined ? OrgDetails.EditingUserData.address.addressLine1 : ""}
                                                        placeholder={OrgDetails.EditingUserData.address.addressLine1 === null || OrgDetails.EditingUserData.address.addressLine1 === '' ?
                                                            'Enter Address Line1' : null}
                                                        onChange={(txt) => {
                                                            let value = txt.target.value
                                                            if (value === '' || value.match(AlphNumericRegex)) {
                                                                let TitleCaseVal = toTitleCase(txt.target.value)
                                                                this.props.Save_Editing_Org_Basic_Details(TitleCaseVal, "addressLine1");
                                                            }
                                                        }}
                                                        id='agentAddress' />
                                                    <span class="floating-label">Address Line 1</span>
                                                </div>
                                                <FormText color="red"> {OrgDetails.EditUserDataWarning.addressLine1} </FormText>

                                            </Col>

                                            <Col xs="12" md="4">
                                                <div class="user-input-wrp">
                                                    <Input type="text"
                                                        style={InputTextStyle}
                                                        placeholder={OrgDetails.EditingUserData.address.addressLine2 ?
                                                            'Enter Address Line2' : null}
                                                        value={OrgDetails.EditingUserData.address.addressLine2 != undefined ? OrgDetails.EditingUserData.address.addressLine2 : null}
                                                        onChange={(txt) => {
                                                            let value = txt.target.value
                                                            if (value === '' || value.match(AlphNumericRegex)) {
                                                                let TitleCaseVal = toTitleCase(txt.target.value)
                                                                this.props.Save_Editing_Org_Basic_Details(TitleCaseVal, "addressLine2");
                                                            }
                                                        }
                                                        }
                                                        id='agentAddress' />
                                                    <span class="floating-label">Address Line 2</span>
                                                </div>
                                                <FormText color="red"> {OrgDetails.EditUserDataWarning.addressLine2} </FormText>
                                            </Col>

                                        </FormGroup>

                                        <FormGroup row >
                                            <Col md="2">

                                            </Col>

                                            {/* <Col xs="12" md="2">
                                                <FormText style={{ marginLeft: 15, fontSize: 13 }} > State / Province</FormText>
                                                <Input type="select"
                                                    style={InputTextStyle}
                                                    onChange={(val) => {
                                                        this.SaveSelectedStateInLocal(val.target.value)
                                                    }} >
                                                    <option value="select">Select State</option>
                                                    {Object.keys(StatesObj).map((t, i) =>
                                                        <option key={i} >{t}</option>)}
                                                </Input>

                                            </Col>

                                            <Col xs="12" md="2">
                                                <FormText style={{ marginLeft: 15, fontSize: 13 }} > City </FormText>
                                                <Input
                                                    style={InputTextStyle}
                                                    disabled={this.state.SelectedState === '' || this.state.SelectedState === null}
                                                    type="select"

                                                    onChange={(val) => {
                                                        this.props.Save_Editing_Org_Basic_Details(val.target.value, 'cityId');
                                                    }} >
                                                    <option value="select">Select City</option>
                                                    {Object.keys(CitiesOfStateObj).map((item, i) =>
                                                        <option key={item} value={item} >{CitiesOfStateObj[item]}</option>)}
                                                </Input>
                                                
                                            </Col> */}


                                            <Col xs="12" md="2">
                                                <FormText style={{ marginLeft: 15, fontSize: 13 }} > Pincode </FormText>
                                                <Input type="text"
                                                    maxLength={6}
                                                    placeholder={OrgDetails.EditingUserData.address.pinCode ?
                                                        'Enter Pin code' : null}
                                                    value={OrgDetails.EditingUserData.address.pinCode}
                                                    onChange={(txt) => {
                                                        let value = txt.target.value
                                                        if (value === '' || value.match(NumberRegex)) {
                                                            this.props.Save_Editing_Org_Basic_Details(value, 'pinCode');
                                                        }
                                                    }}
                                                />
                                                <FormText color="red"> {OrgDetails.EditUserDataWarning.pinCode} </FormText>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row   >
                                            <Col md="2">
                                                <Label style={Labelstyle1} htmlFor="file-input">Profile Pic</Label>
                                            </Col>
                                            <Col xs="12" md="3">
                                                <img
                                                    onClick={() => {
                                                        console.log(" console.log(Image Clicked : )")
                                                    }}
                                                    style={{ height: '20vh', width: '100%' }}
                                                    src={profilePicture == undefined ? DefaultProfilePic : "data:image/jpg;base64," + OrgDetails.EditingUserData.profilePicture}
                                                />
                                                <Input type="file" id="file-input"
                                                    onChange={(e) => this.handleImageChange(e)}
                                                    name="file-input" />
                                                <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.picture} </FormText>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Col md="2">
                                                <Label style={Labelstyle1}>Is Credit Available </Label>
                                            </Col>
                                            <Col md="1">
                                                <label>
                                                    <SwitchToggle
                                                        defaultChecked={OrgDetails.EditingUserData.creditEligible}
                                                        onChange={(e) => this.props.Save_Editing_Org_Basic_Details(!OrgDetails.EditingUserData.creditEligible, 'creditEligible')} />
                                                </label>
                                            </Col>
                                            <Col md="2">
                                                <Collapse isOpen={OrgDetails.EditingUserData.creditEligible}>
                                                    <Input type="text" name="text-input"
                                                        maxLength={8}
                                                        style={{ fontWeight: 'bold' }}
                                                        value={OrgDetails.EditingUserData.creditLimit}
                                                        onChange={(e) => {
                                                            let inputval = e.target.value;
                                                            if (inputval === '' || inputval.match(/^[0-9]+$/)) {
                                                                this.props.Save_Editing_Org_Basic_Details(inputval, 'creditLimit')
                                                            }
                                                        }
                                                        }
                                                        placeholder="Enter Cash Limit Here" />

                                                    <FormText
                                                        color="red"> {OrgDetails.EditUserDataWarning.creditLimit} </FormText>
                                                </Collapse>
                                            </Col>
                                            {this.IncentiveField(OrgDetails)}
                                        </FormGroup>
                                    </CardBody>

                                    <CardFooter>
                                        <Button style={{ width: 100, marginRight: 20 }} color="warning" onClick={this.contactSubmit.bind(this)}> Save</Button>
                                        <Button style={{ width: 100 }} onClick={() => {
                                            this.props.Cancle_Organization_Edit_Modal()
                                            this.props.history.goBack();
                                        }}>Cancel</Button>
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xs="12" md="1"></Col>
                        </Row>
                        :
                        <Row style={{ margin: "13%" }}>
                            {DisplaySpinner()}
                        </Row>
                }
            </div>
        )
    }

    ClearResponse() {

        console.log(" this is clear ClearResponse fiunction;");

        this.props.clearResponseOnORGApis();
        let OrgTypeName = this.props.OrganizationDetails.PresentCreatingOrgType
        let offset = 0;
        let limit = 100;
        let searchText = '';
        let AccessToken = this.props.LoginDetails.accessToken;
        if (this.props.OrganizationDetails.PresentCreatingOrgType === "AdminRetailer" || this.props.OrganizationDetails.PresentCreatingOrgType === "Retailer") {
            let OrgTypeId = 3;
            this.props.GetOrganizationsList(AccessToken, OrgTypeId, offset, limit, searchText, OrgTypeName);
        } else {
            let OrgTypeId = 2;
            this.props.GetOrganizationsList(AccessToken, OrgTypeId, offset, limit, searchText, OrgTypeName);
        }

    }

    IncentiveField(OrgDetails) {
        if (this.props.EditModalFrom === 'Retailer') {
            return <Collapse isOpen={
                OrgDetails.EditingUserData.commissionModel === 2
            }>
                <FormGroup row>
                    <Col md="4">
                        <Label style={Labelstyle1}>Additional Incentives</Label>
                    </Col>

                    <Col md="1">
                        <label>
                            <SwitchToggle
                                defaultChecked={OrgDetails.EditingUserData.elegibleForIncentives}
                                onChange={() =>
                                    this.props.Save_Editing_Org_Basic_Details(
                                        !OrgDetails.EditingUserData.elegibleForIncentives, "elegibleForIncentives")
                                } />
                        </label>
                    </Col>
                </FormGroup>
            </Collapse>
        }
    }

    contactSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            this.SaveEdditedDistributorDetails()
        }
    }

    handleValidation() {

        let errors = {};
        let formIsValid = true;
        let user = this.props.OrganizationDetails.EditOrganizationDetails.EditingUserData;

        //First Name
        if (user.name === '') {
            formIsValid = false;
            errors["name"] = "Required First Name";
        }

        if (user.mobileNo === '') {
            formIsValid = false;
            errors["mobileNo"] = "Required  mobileNo";
        } else if (user.mobileNo.length < 10) {
            formIsValid = false;
            errors["mobileNo"] = "Enter valid 10 digit mobile number";
        }

        if (user.address.addressLine1 === '') {
            formIsValid = false;
            errors["addressLine1"] = "Enter Address Line 1";
        }
        if (user.address.addressLine2 === '') {
            formIsValid = false;
            errors["addressLine2"] = "Enter Address Line 2";
        }
        if (user.address.addressLine2 === '') {
            formIsValid = false;
            errors["pinCode"] = "Enter Pincode";
        }

        // Shope Name 

        if (user.businessName === '') {
            formIsValid = false;
            errors["businessName"] = "Required Business Name";
        }

        //Email

        if (user.emailId === '') {
            formIsValid = false;
            errors["email"] = "Required Email Id";
        }
        else {
            let lastAtPos = user.emailId.lastIndexOf('@');
            let lastDotPos = user.emailId.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 &&
                user.emailId.indexOf('@@') == -1 &&
                lastDotPos > 2 && (user.emailId.length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["emailId"] = "Enter valid Email Address";
            }
        }


        //creditEligible
        if (user.creditEligible) {

            if (user.creditLimit === '' || user.creditLimit === null || user.creditLimit === undefined || user.creditLimit === 0) {
                formIsValid = false;
                errors["creditLimit"] = "Please enter Credit Limit.";
            }
        }


        if (errors.length != 0) {
            this.props.IpWarnings_At_Edit_Org_Basic_Details(errors, 'AllErrorsAfterValidation');
        }
        return formIsValid;
    }

    SaveEdditedDistributorDetails() {

        const etdUser = this.props.OrganizationDetails.EditOrganizationDetails.EditingUserData;
        let AccessToken = this.props.LoginDetails.accessToken;
        console.log(" Editted Data Before Send To Server : ");
        console.log(etdUser);
        console.log(this.props.OrganizationDetails.OrgList);
        let ProfileBase64 = etdUser.profilePicture !== '' && etdUser.profilePicture !== undefined ? etdUser.profilePicture : null;


        etdUser.profilePicture = ProfileBase64 !== null ? ProfileBase64.substr(ProfileBase64.indexOf(",") + 1) : null;


        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;
        let OrgTypeName = PresentCreatingOrgType == "PendingDistributor" || PresentCreatingOrgType == "Distributor" ? "Distributor" : "AdminRetailer";

        this.props.SendChanged_Organization_Basic_Details(AccessToken, etdUser, OrgTypeName);
    }
}

const mapStateToProps = ({ userManagementReducer, Authentication, transaction }) => {
    const { OrganizationDetails, ProgressIndicator } = userManagementReducer;
    const { LoginDetails } = Authentication;
    const { RateCard } = transaction;

    return { OrganizationDetails, LoginDetails, RateCard, ProgressIndicator };
};

export default withRouter(connect(mapStateToProps, {
    Save_ORG_RegistrationIpDetails, OrgRegistrationInputWarnings,
    SendCreateOrganizationDetails, Save_Org_Form_Types, UpdateCreatingOrgBasicDetails,

    Cancle_Organization_Edit_Modal, Save_Editing_Org_Basic_Details, GetOrganizationsList,
    IpWarnings_At_Edit_Org_Basic_Details, SendChanged_Organization_Basic_Details, clearResponseOnORGApis
})(Org_Edit_Basic_Details));


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5, font: "bold" }} > *</span>
}
