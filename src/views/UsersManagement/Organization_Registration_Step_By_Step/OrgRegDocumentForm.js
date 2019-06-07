import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup,
    FormText, Label, Input, CardFooter, Collapse,
} from 'reactstrap';

import LaddaButton, {
    EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP
} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import SwitchToggle from 'react-toggle'
import "react-toggle/style.css"

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import {
    SaveOrgDocumentWarnings,
    Save_Org_Form_Types,
    SaveOrgDocuments,
    AddDocuments
} from '../UserManagementAction';
import { Labelstyle1 } from '../../../GlobalVars';
import '../../../../public/CustomStyles.css';
import { INSPECT_MAX_BYTES } from 'buffer';
import { NumberRegex, FullNameRegex } from '../../AllRegexFormats';

var CitiesOfStateObj = '';

class OrgRegDocumentForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Bankselected: false,
            Branchselected: false,
            fields: {},
            errors: {},
            cashLimitchecked: false,
            AdditionalInsentives: '',
            commissionMode: '',

            SelectedState: '',
            disableSubmit: false,
        };
    }


    handleImageChange(e, field) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                let Image = reader.result.split(',');
                let Base64 = Image[1];
                // console.log(Base64);
                this.props.SaveOrgDocuments(Base64, field);
            }
            reader.readAsDataURL(file)
        } else {
            this.props.SaveOrgDocumentWarnings("Image type should be either PNG or JPEG", 'pictureBase64')
        }
    }

    render() {
        let Documents = this.props.OrganizationDetails.OrgDocuments;

        return (
            <div className="animated fadeIn">

                <Row>
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <FormGroup row>
                                    <Col md="2">
                                        <Label style={Labelstyle1} >Electricity Bill {RequireIconForIpFiled()}</Label>
                                    </Col>
                                    <Col xs="12" md="3">
                                        <Input type="file"
                                            onChange={(e) => this.handleImageChange(e, 'Electricity')}
                                            id="file-input" name="file-input" />
                                        {/* <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.picture} </FormText> */}
                                    </Col>
                                    <Col xs="12" md="2">
                                        {/* {DisplayDocImage(this.props.OrganizationDetails.OrgDocuments.Aadhar)} */}
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="2">
                                        <Label style={Labelstyle1} >Aadhar Card</Label>
                                    </Col>
                                    <Col xs="12" md="3">
                                        <Input type="file"
                                            onChange={(e) => this.handleImageChange(e, 'Aadhar')}
                                            id="file-input" name="file-input" />
                                        {/* <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.picture} </FormText> */}
                                    </Col>
                                    <Col xs="12" md="2">
                                        {DisplayDocImage(this.props.OrganizationDetails.OrgDocuments.Aadhar)}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="2">
                                        <Label style={Labelstyle1} >PAN Card {RequireIconForIpFiled()}</Label>
                                    </Col>
                                    <Col xs="12" md="3">
                                        <Input type="file"
                                            onChange={(e) => this.handleImageChange(e, 'PanCard')}
                                        />
                                        {/* <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.picture} </FormText> */}
                                    </Col>
                                    <Col xs="12" md="2">
                                        {DisplayDocImage(this.props.OrganizationDetails.OrgDocuments.pan)}
                                    </Col>
                                </FormGroup>
                                <FormGroup row>
                                    <Col md="2">
                                        <Label style={Labelstyle1}>Voter ID</Label>
                                    </Col>
                                    <Col xs="12" md="3">
                                        <Input type="file"
                                            onChange={(e) => this.handleImageChange(e, 'VoterId')}
                                        />
                                        {/* <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.picture} </FormText> */}
                                    </Col>
                                    <Col xs="12" md="2">
                                        {DisplayDocImage(this.props.OrganizationDetails.OrgDocuments.voterId)}
                                    </Col>
                                </FormGroup>

                                <FormGroup row>
                                    <Col md="2">
                                        <Label style={Labelstyle1} >Driving License</Label>
                                    </Col>
                                    <Col xs="12" md="3">
                                        <Input type="file"
                                            onChange={(e) => this.handleImageChange(e, 'DLicense')}
                                        />
                                        {/* <FormText color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.picture} </FormText> */}
                                    </Col>
                                    <Col xs="12" md="2">
                                        {DisplayDocImage(this.props.OrganizationDetails.OrgDocuments.DLicense)}
                                    </Col>
                                </FormGroup>
                            </CardBody>

                            <CardFooter>

                                <LaddaButton
                                    disabled={
                                        Documents.Aadhar == '' || Documents.pan == '' ||
                                        Documents.voterId == '' || Documents.DLicense == ''
                                    }
                                    className="btn btn-warning btn-ladda"
                                    loading={this.props.ProgressIndicator.InProgress}
                                    onClick={this.contactSubmit.bind(this)}
                                    data-color="warning"
                                    data-style={EXPAND_LEFT} >
                                    {this.props.OrganizationDetails.enableNextButtonInOrgDocs ? " Save & Continue" : "Continue"}

                                </LaddaButton>



                                <Button style={{ marginLeft: 10, width: 100 }} onClick={this.CancleClicked.bind(this)}>Back</Button>
                                {this.props.OrganizationDetails.enableNextButtonInOrgDocs ?
                                    <Button style={{ marginLeft: 10, width: 100 }} onClick={this.nextClicked.bind(this)} color="warning"> Skip </Button> : null}
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs="12" md="1"></Col>
                    <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                        {this.props.OrganizationDetails.OrgDocuments.Warning}</span>
                </Row>


            </div>
        )
    }



    nextClicked(e) {
        e.preventDefault();
        // setTimeout(() => {
        let formType = 3;
        this.props.Save_Org_Form_Types(formType);
        // this.dotsAndLines();
        //   }, 800)
        // this.SubmitUserDetailsTOList();
    }

    CancleClicked() {

        let formType = 1;
        this.props.Save_Org_Form_Types(formType);
    }

    contactSubmit(e) {
        e.preventDefault();

        let Documents = this.props.OrganizationDetails.OrgDocuments;

        let AccessToken = this.props.LoginDetails.accessToken;

        let PayloadToUpload = {
            "tenantId": this.props.OrganizationDetails.CreatingOrganizationId,
            "mobileNumber": this.props.OrganizationDetails.CreatingOrgMobileNo,
            "tenantDocuments": [
                {
                    "type": "PAN",
                    "base64picture": Documents.pan === '' ? null : Documents.pan
                },
                {
                    "type": "DRIVING LICENSE",
                    "base64picture": Documents.DLicense === '' ? null : Documents.DLicense
                },
                {
                    "type": "VOTER ID",
                    "base64picture": Documents.voterId === '' ? null : Documents.voterId
                },
                {
                    "Type": "AADHAR",
                    "base64picture": Documents.Aadhar === '' ? null : Documents.Aadhar
                }
            ]
        }

        console.log(PayloadToUpload)
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;

        this.props.AddDocuments(PayloadToUpload, AccessToken, PresentCreatingOrgType);
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { OrganizationDetails, UserDetails, ProgressIndicator } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { OrganizationDetails, LoginDetails, UserDetails, ProgressIndicator };
};

export default connect(mapStateToProps, {
    SaveOrgDocumentWarnings, SaveOrgDocuments, AddDocuments,

    Save_Org_Form_Types
})(OrgRegDocumentForm);

function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5, font: "bold" }} > *</span>

}

export function DisplayDocImage(Base64) {

    if (Base64 == undefined || Base64 == null || Base64 == '') {
        return null
    } else return <img
        style={{ height: '10vh', width: '100%' }}
        // src={img}
        src={"data:image/jpg;base64," + Base64}
    />
}
