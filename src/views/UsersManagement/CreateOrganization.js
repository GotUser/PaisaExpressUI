
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

// import SwitchToggle from 'react-toggle'
import "react-toggle/style.css"

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

import {
    Save_Org_Form_Types, Save_Mobile_Number,
    AddBankToCreatingOrganization, Save_ORG_RegistrationIpDetails, OrgRegistrationInputWarnings, GetCreateOrgTemplate,
    RemoveDistributorBankOptionFromArray, SendCreateOrganizationDetails, clearResponseOnORGApis,
    SendOrgBankDetails_At_Registraion,
    GetCreateOrganizationInfo, ResetOrg
} from './UserManagementAction';


import '../../../public/CustomStyles.css';

import CreateOrganizationBankForm from './Organization_Registration_Step_By_Step/CreateOrganizationBankForm';
import OrgBasicDetailsForm from './Organization_Registration_Step_By_Step/OrgBasicDetailsForm'
import OrgRegDocumentForm from './Organization_Registration_Step_By_Step/OrgRegDocumentForm';

class CreateOrganization extends Component {
    componentWillMount() {
        this.AddBank()
    }

    componentDidUpdate() {

        if (this.props.OrganizationDetails.OrgApiResults.SuccessOnSubmitOrgDetail) {


            if (this.props.OrganizationDetails.PresentCreatingOrgType === 'Distributor') {
                this.props.history.push('/Distributor');
            } else if (this.props.OrganizationDetails.PresentCreatingOrgType === 'AdminRetailer') {
                this.props.history.push('/AdminRetailer');
            } else if (this.props.OrganizationDetails.PresentCreatingOrgType === 'Retailer') {
                this.props.history.push('/Retailer');
            }

            this.props.ResetOrg();
        }

        if (this.props.OrganizationDetails.OrgApiResults.Error !== '') {
            setTimeout(() => {

                this.props.clearResponseOnORGApis();
            }, 15000);
        }

        if (this.props.OrganizationDetails.formType == 2) {

            document.getElementById("stepTwo").className = "circle special";
            document.getElementById("stepOne").style.backgroundColor = "#8bc435";
            document.getElementById("stepOne").innerHTML = "&#10003;"
            document.getElementById("lineOne").className = "line special";

        } else if (this.props.OrganizationDetails.formType == 3) {
            document.getElementById("stepThree").className = "circle special";
            document.getElementById("stepTwo").innerHTML = "&#10003;"
            document.getElementById("lineTwo").className = "line special";

        }
    }

    renderAddBank() {
        if (this.props.OrganizationDetails.formType == 3) {
            return <div>
                <CardFooter style={{ background: "#ffffff", marginTop: 30, border: "1px solid white" }}>

                    <FormGroup row>
                        <Button type='button' color="warning" outline size="sm" onClick={this.AddBank.bind(this)}>Add Bank Details</Button>
                    </FormGroup>
                    <FormGroup row style={{ marginTop: 40 }}>
                        <LaddaButton
                            className="btn btn-warning btn-ladda"
                            loading={this.props.ProgressIndicator.InProgress}
                            onClick={this.contactBankSubmit.bind(this)}
                            data-color="rgb(248, 176, 24)"
                            data-style={EXPAND_LEFT}>
                            Submit
                        </LaddaButton>
                        <Button style={{ marginLeft: 10, width: 100, border: '1px solid lightgrey' }} onClick={this.CancleClicked.bind(this)}>Back</Button>
                    </FormGroup>
                </CardFooter>
            </div>
        }
    }

    renderSwitch(ch) {
        console.log("this.props.OrganizationDetails.formType is: " + ch);
        switch (ch) {
            case 1:
                return <OrgBasicDetailsForm />;
            case 2:
                return <OrgRegDocumentForm />;
            case 3:
                return <CreateOrganizationBankForm />;
            default:
                return <OrgBasicDetailsForm />;
        }
    }

    render() {
        console.log("this.props.OrganizationDetails.PresentCreatingOrgType: " + this.props.OrganizationDetails.PresentCreatingOrgType)

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="UserRegistration" fromcomponent={this.props.OrganizationDetails.PresentCreatingOrgType} />
                <Row>
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader color="warning">
                                <strong style={{ fontSize: 20 }}  > Registering </strong>
                            </CardHeader>
                            <CardBody>
                                <FormGroup id="formgroup"  /*style={{border: "1px solid #e2e2e2"}}*/ row>
                                    <div style={{ marginBottom: 0 }} className="dotsandlines">
                                        <div className="circle-contain">
                                            <div id="stepOne" style={{ background: '#0c95be' }} className="circle">1</div>
                                        </div>
                                        <div id="lineOne" className="line">Step1 : Basic Details</div>
                                        <div className="circle-contain">
                                            <div id="stepTwo" className="circle">2</div>
                                        </div>
                                        <div id="lineTwo" className="line">Step2 : Document Details</div>
                                        <div className="circle-contain">
                                            <div id="stepThree" className="circle">3</div>
                                        </div>
                                        <div id="lineThree" className="line">Step3 : Bank details</div>
                                        <div className="circle-contain">
                                            <div id="stepFour" className="circle" >&#10003;</div>
                                        </div>
                                    </div>
                                </FormGroup>

                                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                                    {this.props.OrganizationDetails.OrgApiResults.Error}</span>

                                {this.renderSwitch(this.props.OrganizationDetails.formType)}

                                {this.renderAddBank()}

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="1"></Col>
                </Row>
            </div>
        )
    }

    CancleClicked() {
        let formType = 2;
        this.props.Save_Org_Form_Types(formType);
    }

    SubmitUserDetailsTOList() {
        var BankDetails = JSON.parse(JSON.stringify(this.props.OrganizationDetails.NewOrgBankDetails));
        BankDetails.map((bank, i) => {
            console.log(" =  =  =   =  =  =  =  =  =  =  =  =  =  =  =  =  =  BankDetails  In New Org Main Validation :   ");
            console.log(bank);
            bank.OrganizationBankId = null,
                delete bank.BranchName;
            delete bank.City;
            delete bank.bankBranches;
            delete bank.bankCities;
            delete bank.bankName;
            delete bank.ifsc;
        })




        console.log(" / / / / / / / / / / / / /  / /  / // / / / / / // / / / / / BankDetails BankDetails BankDetails BankDetails BankDetails BankDetails ");
        console.log(BankDetails);



        let AccessToken = this.props.LoginDetails.accessToken;
        let UserMobileNo = this.props.OrganizationDetails.CreatingOrgMobileNo;
        let CreatingOrganizationId = this.props.OrganizationDetails.CreatingOrganizationId;
        // "accountNo": "string",
        // "accountHolderName": "string",
        // "bankBranchId": 0

        console.log("-----------------------BankDetails.bankId")
        console.log(BankDetails.bankId)

        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;
        this.props.SendOrgBankDetails_At_Registraion(AccessToken, CreatingOrganizationId, BankDetails, PresentCreatingOrgType);


    }


    contactBankSubmit(e) {
        e.preventDefault();
        if (this.handleValidation()) {
            this.SubmitUserDetailsTOList();
        }
    }

    handleValidation() {
        let formIsValid = true;
        //Bank Details
        var IsdetailsEnterCorrectly;
        if (this.props.OrganizationDetails.NewOrgBankDetails.length === 0) {
            // console.log(" Bank Length IS ZERO  ");
            IsdetailsEnterCorrectly = true
        }
        else this.props.OrganizationDetails.NewOrgBankDetails.map((bank, i) => {
            bank.AccountHolderName === '' ? IsdetailsEnterCorrectly = false : bank.AccountNo === '' ? IsdetailsEnterCorrectly = false :
                bank.AccountNo.length < 11 ? this.WarningsOnSubmit("Please Enter Vaild Account Number ", 'BankDetails') : bank.BankBranchId === '' ? IsdetailsEnterCorrectly = false :
                    bank.ifsc === '' ? IsdetailsEnterCorrectly = false : IsdetailsEnterCorrectly = true
        })
        if (!IsdetailsEnterCorrectly) {
            formIsValid = false;
            this.WarningsOnSubmit("Please Fill All Bank Detail ", 'BankDetails');
        }
        return formIsValid;
    }

    WarningsOnSubmit(message, field) {
        this.props.OrgRegistrationInputWarnings(message, field)
    }

    AddBank() {
        var IsdetailsEnterCorrectly;

        if (this.props.OrganizationDetails.NewOrgBankDetails.length === 0) {
            IsdetailsEnterCorrectly = true
        }
        else this.props.OrganizationDetails.NewOrgBankDetails.map((item, i) => {
            item.AccountHolderName === '' ? IsdetailsEnterCorrectly = false : item.AccountNo === '' ? IsdetailsEnterCorrectly = false :
                item.BankBranchId === '' ? IsdetailsEnterCorrectly = false :
                    item.ifsc === '' ? IsdetailsEnterCorrectly = false : IsdetailsEnterCorrectly = true
        })

        console.log(" IsdetailsEnterCorrectly VALUE :" + IsdetailsEnterCorrectly);

        if (IsdetailsEnterCorrectly) {
            this.props.AddBankToCreatingOrganization();
        }
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication, transaction }) => {
    const { UserRegistration, OrganizationDetails, ProgressIndicator } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { UserRegistration, OrganizationDetails, LoginDetails, ProgressIndicator };
};

export default connect(mapStateToProps, {
    Save_Org_Form_Types, Save_Mobile_Number,
    AddBankToCreatingOrganization, OrgRegistrationInputWarnings,
    RemoveDistributorBankOptionFromArray, GetCreateOrgTemplate,
    SendCreateOrganizationDetails, clearResponseOnORGApis, SendOrgBankDetails_At_Registraion,
    GetCreateOrganizationInfo, ResetOrg
})(CreateOrganization);



