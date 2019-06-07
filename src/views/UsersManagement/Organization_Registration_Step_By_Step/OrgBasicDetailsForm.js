import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, Button, FormGroup,
    FormText, Label, Input, CardFooter, Collapse,
} from 'reactstrap';

import LaddaButton, {
    EXPAND_LEFT
} from 'react-ladda';

import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SwitchToggle from 'react-toggle'
import "react-toggle/style.css"

import { withRouter } from "react-router";
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import {
    Save_ORG_RegistrationIpDetails, OrgRegistrationInputWarnings,
    SendCreateOrganizationDetails, Save_Org_Form_Types, UpdateCreatingOrgBasicDetails, SetProgressIndicatorFalse
} from '../UserManagementAction';

import { Labelstyle1, InputTextStyle, toTitleCase } from '../../../GlobalVars';

import '../../../../public/CustomStyles.css';

import { NumberRegex, FullNameRegex, UrlRegex } from '../../AllRegexFormats';

var CitiesOfStateObj = '';

class OrgBasicDetailsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            fields: {},
            cashLimitchecked: false,
            commissionMode: '',
            SelectedState: '',
        };

        // this.CancleClicked = this.CancleClicked.bind(this)
    }


    componentWillMount() {
        this.props.SetProgressIndicatorFalse()
    }
    handleChange(field, e) {
        console.log("In handleChange vlaues are");
        console.log("field: " + field + " and value: " + e.target.value);
        let value = e.target.value;

        if (field === 'creditLimit') {
            if (value === '' || value.match(/^[0-9]+$/)) {
                this.props.Save_ORG_RegistrationIpDetails(value, field);
            } else this.props.OrgRegistrationInputWarnings("Enter Only numbers", field)

        } else if (field === 'organizationTypes') {
            this.props.Save_ORG_RegistrationIpDetails(value, field);
        }
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                this.props.Save_ORG_RegistrationIpDetails(reader.result, 'pictureBase64');
            }
            reader.readAsDataURL(file)
        } else {
            this.props.OrgRegistrationInputWarnings("Image type should be either PNG or JPEG", 'pictureBase64')
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
        let RoleModule = this.props.OrganizationDetails.OrganizationStoreInfo.roleModules;
        let RateCardList = this.props.OrganizationDetails.OrganizationStoreInfo.RateCardsList;

        return (
            <div className="animated fadeIn">
                {/* <CustomerBreadCrumb from="UserRegistration" fromcomponent={this.props.OrganizationDetails.PresentCreatingOrgType} /> */}
                <ReactCSSTransitionGroup
                    transitionName="slide"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {
                        <Row>
                            <Col xs="12" md="1"></Col>
                            <Col xs="12" md="12">
                                <Card>
                                    <CardBody>
                                        <FormGroup row >
                                            <Col md="2">
                                                <Label style={Labelstyle1} >Full Name {RequireIconForIpFiled()}  </Label>
                                            </Col>

                                            <Col xs="12" md="3">
                                                <Input
                                                    style={InputTextStyle}
                                                    value={this.props.OrganizationDetails.RegisteringOrg.fullName != null ?
                                                        this.props.OrganizationDetails.RegisteringOrg.fullName : ''}
                                                    placeholder="Enter Full Name"

                                                    onChange={(val) => {
                                                        let value = val.target.value;
                                                        if (value === '' || value.match(FullNameRegex)) {
                                                            let TitleCaseVal = toTitleCase(value);
                                                            this.props.Save_ORG_RegistrationIpDetails(TitleCaseVal, "fullName");
                                                        } else this.props.OrgRegistrationInputWarnings(" Please Enter Only letters", "fullName")
                                                    }
                                                    }
                                                    className="inputText" required />

                                                <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.fullName} </FormText>

                                            </Col>

                                            <Col md="2">
                                                <Label style={Labelstyle1} >Mobile  No  {RequireIconForIpFiled()}  </Label>
                                            </Col>

                                            <Col xs="12" md="3">
                                                <Input
                                                    value={this.props.OrganizationDetails.RegisteringOrg.mobileNo != null ?
                                                        this.props.OrganizationDetails.RegisteringOrg.mobileNo : ''}
                                                    placeholder="Enter Mobile Number"
                                                    onChange={(val) => {
                                                        let value = val.target.value
                                                        if (value === '' || value.match(/^[0-9]+$/)) {
                                                            this.props.Save_ORG_RegistrationIpDetails(value, 'mobileNo');
                                                        } else this.props.OrgRegistrationInputWarnings("Enter Only numbers", 'mobileNo')
                                                    }
                                                    }
                                                    maxLength={10}
                                                    required />
                                                <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.mobileNo} </FormText>
                                            </Col>


                                        </FormGroup>


                                        <FormGroup row >
                                            <Col md="2">
                                                <Label style={Labelstyle1} >Email Id  {RequireIconForIpFiled()}  </Label>
                                            </Col>
                                            <Col xs="12" md="3">
                                                <Input

                                                    value={this.props.OrganizationDetails.RegisteringOrg.emailId != null ?
                                                        this.props.OrganizationDetails.RegisteringOrg.emailId : ''}
                                                    placeholder="ex: paisaexpress@gmail.com"
                                                    onChange={(val) => {
                                                        let value = val.target.value
                                                        if (value === '' || value.match(/^[.@a-zA-Z_0-9]+$/)) {
                                                            this.props.Save_ORG_RegistrationIpDetails(value, 'emailId');
                                                        } else this.props.OrgRegistrationInputWarnings("Enter Valid Email ", 'emailId')
                                                    }
                                                    }
                                                    className="inputText" required />
                                                <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.emailId} </FormText>
                                            </Col>

                                            <Col md="2">
                                                <Label style={Labelstyle1}>Business Name{RequireIconForIpFiled()}  </Label>
                                            </Col>

                                            <Col xs="12" md="3">
                                                <Input
                                                    style={InputTextStyle}
                                                    onChange={(text) => {
                                                        let TitleCaseVal = toTitleCase(text.target.value);
                                                        this.props.Save_ORG_RegistrationIpDetails(TitleCaseVal, 'businessName');
                                                    }
                                                    }
                                                    value={
                                                        this.props.OrganizationDetails.RegisteringOrg.businessName != null ?
                                                            this.props.OrganizationDetails.RegisteringOrg.businessName : ''}
                                                    placeholder="ex: VaraLaskmi Stores"
                                                    className="inputText" required />

                                                <FormText color="red">{this.props.OrganizationDetails.RegistrationinputWarning.businessName}</FormText>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row >
                                            <Col md="2">
                                                <Label style={Labelstyle1} >Address   {RequireIconForIpFiled()}  </Label>
                                            </Col>

                                            <Col xs="12" md="4">
                                                <div className="user-input-wrp">
                                                    <Input
                                                        style={InputTextStyle}
                                                        onChange={(text) => {
                                                            let value = text.target.value;
                                                            if (value === '' || value.match(/^[.@a-zA-Z_0-9, ]+$/)) {
                                                                let TitleCaseVal = toTitleCase(text.target.value);
                                                                this.props.Save_ORG_RegistrationIpDetails(TitleCaseVal, 'addressLine1')
                                                            }
                                                        }}
                                                        value={this.props.OrganizationDetails.OrgAddressIp.addressLine1 != null ?
                                                            this.props.OrganizationDetails.OrgAddressIp.addressLine1 : ''}
                                                        class="inputText" required />
                                                    <span class="floating-label">Address Line 1</span>
                                                </div>
                                                <FormText color="red">{this.props.OrganizationDetails.RegistrationinputWarning.addressLine1} </FormText>
                                            </Col>

                                            <Col xs="12" md="4">
                                                <div class="user-input-wrp">
                                                    <Input
                                                        style={InputTextStyle}
                                                        onChange={
                                                            (text) => {
                                                                let value = text.target.value;
                                                                if (value === '' || value.match(/^[.@a-zA-Z_0-9, ]+$/)) {
                                                                    let TitleCaseVal = toTitleCase(text.target.value);
                                                                    this.props.Save_ORG_RegistrationIpDetails(TitleCaseVal, 'addressLine2')
                                                                }
                                                            }}
                                                        value={this.props.OrganizationDetails.OrgAddressIp.addressLine2 != null ?
                                                            this.props.OrganizationDetails.OrgAddressIp.addressLine2 : ''}
                                                        class="inputText" required />
                                                    <span class="floating-label">Address Line 2</span>
                                                </div>
                                                <FormText color="red">{this.props.OrganizationDetails.RegistrationinputWarning.addressLine2} </FormText>
                                            </Col>

                                        </FormGroup>

                                        <FormGroup row >
                                            <Col md="2">

                                            </Col>

                                            <Col xs="12" md="2">
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
                                                        this.props.Save_ORG_RegistrationIpDetails(val.target.value, "cityId");
                                                    }}
                                                >
                                                    <option value="select">Select City</option>

                                                    {Object.keys(CitiesOfStateObj).map((item, i) =>
                                                        <option key={item} value={item} >{CitiesOfStateObj[item]}</option>)}
                                                </Input>
                                                <FormText color="red">{this.props.OrganizationDetails.RegistrationinputWarning.cityId} </FormText>
                                            </Col>

                                            <Col xs="12" md="2">
                                                <FormText style={{ marginLeft: 15, fontSize: 13 }} > pinCode </FormText>
                                                <Input
                                                    placeholder="Enter Pin Code"
                                                    maxLength={6}
                                                    onChange={(Val) => {
                                                        let Value = Val.target.value;
                                                        if (Value === '' || Value.match(NumberRegex)) {
                                                            this.props.Save_ORG_RegistrationIpDetails(Value, 'pinCode');
                                                        } else this.props.OrgRegistrationInputWarnings("Enter numbers only", 'pinCode')
                                                    }}
                                                    value={this.props.OrganizationDetails.OrgAddressIp.pinCode != null ?
                                                        this.props.OrganizationDetails.OrgAddressIp.pinCode : ''}
                                                    class="inputText" required />


                                                <FormText color="red">{this.props.OrganizationDetails.RegistrationinputWarning.pinCode} </FormText>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row   >
                                            <Col md="2">
                                                <Label style={Labelstyle1} htmlFor="file-input">Profile Pic</Label>
                                            </Col>
                                            <Col xs="12" md="3">
                                                <Input type="file"
                                                    onChange={(e) => this.handleImageChange(e)}
                                                    id="file-input" name="file-input" />
                                                <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.picture} </FormText>
                                            </Col>
                                        </FormGroup>

                                        <FormGroup row>
                                            <Col md="2">
                                                <Label style={Labelstyle1}>Is Credit Eligible  {RequireIconForIpFiled()} </Label>
                                            </Col>
                                            <Col md="1">
                                                <label>
                                                    <SwitchToggle
                                                        defaultChecked={this.props.OrganizationDetails.RegisteringOrg.creditEligible}
                                                        onChange={() =>
                                                            //  this.setState({ cashLimitchecked: !this.state.cashLimitchecked })
                                                            this.props.Save_ORG_RegistrationIpDetails(
                                                                !this.props.OrganizationDetails.RegisteringOrg.creditEligible, "creditEligible")
                                                        } />
                                                </label>
                                            </Col>
                                            <Col md="2">
                                                <Collapse isOpen={this.props.OrganizationDetails.RegisteringOrg.creditEligible}>
                                                    <Input
                                                        maxLength={10}
                                                        // style={{ fontWeight: 'bold' }}
                                                        value={this.props.OrganizationDetails.RegisteringOrg.creditLimit != null ?
                                                            this.props.OrganizationDetails.RegisteringOrg.creditLimit : ''}
                                                        onChange={this.handleChange.bind(this, "creditLimit")}
                                                        placeholder="Enter Limit" />
                                                    <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.creditLimit} </FormText>
                                                </Collapse>
                                            </Col>
                                        </FormGroup>

                                        {this.IncentiveField()}
                                    </CardBody>

                                    <CardFooter>
                                        <LaddaButton
                                            className="btn btn-warning btn-ladda"
                                            loading={this.props.ProgressIndicator.InProgress}
                                            onClick={this.contactSubmit.bind(this)}
                                            data-color="rgb(248, 176, 24)"
                                            data-style={EXPAND_LEFT}   >
                                            {this.props.OrganizationDetails.enableNextButtonInOrgBasicDetails ? "Save & Continue" : "Continue"}
                                        </LaddaButton>
                                        <Button style={{ marginLeft: 10, width: 100 }} onClick={this.CancleClicked.bind(this)}>Cancel</Button>

                                        {this.props.OrganizationDetails.enableNextButtonInOrgBasicDetails ?
                                            <Button style={{ marginLeft: 10, width: 100 }} onClick={() => {
                                                let formType = 2;
                                                this.props.Save_Org_Form_Types(formType);
                                            }} color="warning">Skip</Button>
                                            : null
                                        }
                                    </CardFooter>
                                </Card>
                            </Col>
                            <Col xs="12" md="1"></Col>
                        </Row>
                    }
                </ReactCSSTransitionGroup>

            </div>


        )
    }
    IncentiveField() {

        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType
        if (PresentCreatingOrgType === 'AdminRetailer' || PresentCreatingOrgType === 'Retailer') {
            return <Collapse isOpen={this.props.OrganizationDetails.RegisteringOrg.commissionModel === 2}>
                <FormGroup row>
                    <Col md="2">

                    </Col>
                    <Col md="1">

                    </Col>
                    <Col md="2">

                    </Col>

                    <Col md="2">
                        <Label style={Labelstyle1}>Is Eligible For Additional Incentives</Label>
                    </Col>

                    <Col md="1">
                        <label>
                            <SwitchToggle
                                defaultChecked={this.props.OrganizationDetails.RegisteringOrg.elegibleForIncentives}
                                onChange={() =>
                                    //  this.setState({ cashLimitchecked: !this.state.cashLimitchecked })
                                    this.props.Save_ORG_RegistrationIpDetails(
                                        !this.props.OrganizationDetails.RegisteringOrg.elegibleForIncentives, "elegibleForIncentives")
                                } />
                        </label>
                    </Col>
                </FormGroup>
            </Collapse>
        }
    }

    SubmitUserDetailsTOList() {

        let AccessToken = this.props.LoginDetails.accessToken;

        if (this.props.OrganizationDetails.enableNextButtonInOrgBasicDetails) {
            var OrgDetailsData = this.props.OrganizationDetails.RegisteringOrg

            this.props.OrganizationDetails.RegisteringOrg.address = this.props.OrganizationDetails.OrgAddressIp;

            console.log("  OrgDetailsData Before Send to server :  ");
            console.log(OrgDetailsData);
            OrgDetailsData.organizationId = this.props.OrganizationDetails.CreatingOrganizationId;

            let OrgId_RegStage = {
                organizationId: this.props.OrganizationDetails.CreatingOrganizationId,
                registrationStage: 2
            }
            this.props.UpdateCreatingOrgBasicDetails(AccessToken, OrgDetailsData, OrgId_RegStage)


        } else {

            var OrgDetailsData = this.props.OrganizationDetails.RegisteringOrg

            if (this.props.OrganizationDetails.PresentCreatingOrgType === 'Distributor') {
                OrgDetailsData.selectedRoleId = 2;
            } else if (this.props.OrganizationDetails.PresentCreatingOrgType === 'Retailer' || this.props.OrganizationDetails.PresentCreatingOrgType === 'AdminRetailer') {
                OrgDetailsData.selectedRoleId = 3;
            }

            OrgDetailsData.SelectedOrganizationTypeId = this.props.OrganizationDetails.PresentOrgTypeId
            this.props.OrganizationDetails.RegisteringOrg.address = this.props.OrganizationDetails.OrgAddressIp;

            console.log("  OrgDetailsData Before Send to server :  ");
            console.log(OrgDetailsData);
            let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;

            this.props.SendCreateOrganizationDetails(OrgDetailsData, AccessToken, PresentCreatingOrgType);
        }

    }

    CancleClicked() {
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType

        if (PresentCreatingOrgType === 'Distributor') {
            this.props.history.push('/Distributor')
        }
        else if (PresentCreatingOrgType === 'AdminRetailer') {
            this.props.history.push('/AdminRetailer')
        }
        else if (PresentCreatingOrgType === 'PendingRetailer') {
            this.props.history.push('/ApproveRetailer')
        }
        if (PresentCreatingOrgType === 'PendingDistributor') {
            this.props.history.push('/PendingDistributor')
        }
    }

    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            this.SubmitUserDetailsTOList();
        }
    }

    handleValidation() {
        let fields = this.props.OrganizationDetails.RegisteringOrg;

        let formIsValid = true;

        //Full  Name
        if (!fields.fullName || fields.fullName === '') {
            formIsValid = false;
            this.WarningsOnSubmit("Required Full Name", 'fullName');
        } else if (fields.fullName !== "undefined") {
            if (!fields.fullName.match(FullNameRegex)) {
                formIsValid = false;
                this.WarningsOnSubmit("Enter Only letters", 'fullName');
            }
        }

        // Mobile Number
        if (!fields.mobileNo || fields.mobileNo.length !== 10) {
            formIsValid = false;
            this.WarningsOnSubmit("Enter a valid 10 digit Mobile Number", 'mobileNo');

        } else if (fields.mobileNo === '') {
            formIsValid = false;
            this.WarningsOnSubmit(" Mobile Number Required", 'mobileNo');
        } else if (fields.mobileNo !== undefined && fields.mobileNo !== "") {
            if (!fields.mobileNo.match(NumberRegex)) {
                formIsValid = false;
                this.WarningsOnSubmit("Mobile Number Is Invalid", 'mobileNo');
            }
        }
        //  cashLimitchecked Validation
        if (fields.creditEligible) {
            console.log(" Field IS ");
            console.log(fields["cashlimit"]);

            if (fields.creditLimit === undefined || fields.creditLimit === '' || fields.creditLimit === null || fields.creditLimit == '0') {
                formIsValid = false;
                this.WarningsOnSubmit("Please Enter Cash Limit", 'creditLimit');

            }
            else if (!fields.creditLimit.match(NumberRegex)) {
                formIsValid = false;
                this.WarningsOnSubmit("Please Enter Valid Amount", 'creditLimit');
            }
        }

        // Shop Name
        if (!fields.businessName || fields.businessName === '') {
            formIsValid = false;
            this.WarningsOnSubmit("Required Business Name or Shop Name", 'businessName');

        }

        let Address = this.props.OrganizationDetails.OrgAddressIp

        // Address
        if (!Address.addressLine1 || Address.addressLine1 === '') {
            formIsValid = false;

            this.WarningsOnSubmit("Required Address Line 1", 'addressLine1');
        }
        if (!Address.pinCode || Address.pinCode === '') {
            formIsValid = false;
            this.WarningsOnSubmit("Required pinCode", 'pinCode');
        } else if (Address.pinCode.length < 5) {
            formIsValid = false;
            this.WarningsOnSubmit("Required pinCode", 'pinCode');
        }

        //Email
        if (!fields.emailId || fields.emailId === '') {
            formIsValid = false;
            this.WarningsOnSubmit("Required Email Id", 'emailId')

        } else if (fields.emailId !== undefined && fields.emailId !== '') {
            let lastAtPos = fields.emailId.lastIndexOf('@');
            let lastDotPos = fields.emailId.lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields.emailId.indexOf('@@') == -1 && lastDotPos > 2 && (fields.emailId.length - lastDotPos) > 2)) {
                formIsValid = false;
                this.WarningsOnSubmit("Email is not valid", 'emailId')
            }
        }

        return formIsValid;
    }

    WarningsOnSubmit(message, field) {
        this.props.OrgRegistrationInputWarnings(message, field)
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
    SendCreateOrganizationDetails, Save_Org_Form_Types, UpdateCreatingOrgBasicDetails, SetProgressIndicatorFalse
})(OrgBasicDetailsForm));


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5, font: "bold" }} > *</span>

}
