import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    Col, Card, CardHeader, CardBody, Button, Form, FormGroup,
    FormText, Label, Input, Collapse, CardFooter, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import {
    ResetForm,
    // EditDistributorBankDetails,
    GetAllBanksFromDB, GetStatesOfSelectedBank,
    // SaveDistributorsBankDetails,
    GetBranchesOfSelectedBankandState,
    //  AddDistributorNewBanks, 
    // EditAdminRetailerBankDetails,
    // AddAdminRetailerBankDetails, 
    Save_Org_Bank_TO_Edit_And_Get_BankCities,
    Add_New_Org_Bank, Ip_Warnings_At_Edit_Org_Bank_Details, SendOrgBankDetails_TO_Edit, clearResponseOnORGApis, SendOrgBankDetails_TO_ADD
} from './UserManagementAction';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

import Org_Edit_Bank_Form from './Org_Users_Edit_Modals/Org_Edit_Bank_Form';
import { FullNameRegex, NumberRegex } from '../AllRegexFormats';


class EditDistributorOrRetailerBank extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            // Bankname: '',
            // Branch: '',
            // HolderName: '',
            // AccNo: '',
            // Ifsc: '',
            addOrEdit: '',
            errors: [],
            // EditingBankIndx: '',
            // State: 'AP',
            // selectedBankid: '',
            // changeState: false
        };

        this.SaveBankDetails = this.SaveBankDetails.bind(this);
        this.CancleButtonOrGoBack = this.CancleButtonOrGoBack.bind(this);
    }

    componentWillMount() {

        this.props.ResetForm();

        if (this.props.OrganizationDetails.EditOrganizationDetails.EditBankComponentFor === '') {

            this.props.history.push('/Dashboard');

        }

    }

    componentDidUpdate() {

        let ReducerValues = this.props.OrganizationDetails.OrgApiResults;



        if (ReducerValues.Error !== '' && ReducerValues.updateOrgBankFail) {
            setTimeout(() => {
                this.props.clearResponseOnORGApis();
            }, 15000);
        }

        if (ReducerValues.updateOrgBankSuccess) {
            // let EditBankComponentFor= this.props.OrganizationDetails.EditOrganizationDetails.EditBankComponentFor;
            let EditBankComponentFor = this.props.OrganizationDetails.PresentCreatingOrgType;
            EditBankComponentFor == "AdminRetailer" ? this.props.history.push("/AdminRetailer") :
                EditBankComponentFor == "Distributor" ? this.props.history.push("/Distributor") :
                    EditBankComponentFor == "PendingRetailer" ? this.props.history.push("/PendingRetailer") :
                        EditBankComponentFor == "PendingDistributor" ? this.props.history.push("/PendingDistributor") : null;
        }
    }

    SelectedBankTOEdit(val) {
        console.log("SelectedBankTOEdit")
        let BanksList = this.props.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Org_BanksList;

        let AccessToken = this.props.LoginDetails.accessToken;

        BanksList.map((item) => {

            if (item.bankDetailsId == val.target.value) {

                let AllStatesAndCities = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;

                var StateCitiesArray;
                Object.keys(AllStatesAndCities).map((state, i) => {
                    if (state == item.bankStateName) {
                        StateCitiesArray = AllStatesAndCities[state];
                    }
                }
                ),
                    this.props.Save_Org_Bank_TO_Edit_And_Get_BankCities(AccessToken, item, StateCitiesArray)
            }
        }
        )
    }
    AddNewBank() {
        // let NewBankToAdd = {
        //     accountHolderName: '', accountNumber: '', bankBranchName: '', bankCityId: '', bankIFSCCode: ' ',
        //     bankName: '', bankStateName: '', organizationBankId: ''
        // }
        let NewBankToAdd = {
            accountHolderName: "",
            accountNumber: "",
            bankBranchName: "",
            bankName: "",
            branchId: 0,
            city: "",
            ifscCode: "",
            stateName: "",
            tenantBankId: 0
        }

        this.props.Add_New_Org_Bank(NewBankToAdd);
    }

    RetunEditForm(BankDetailsTOEdit) {

        if (BankDetailsTOEdit.ShowBankDetailsForm) {
            return < Org_Edit_Bank_Form />
        } else null
    }

    render() {

        let BankDetailsTOEdit = this.props.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks;


        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="EditDistributorOrRetailerBank" fromcomponent={this.props.OrganizationDetails.PresentCreatingOrgType} />
                <Card>
                    <CardHeader>
                        <Col md="10">
                            <Form action="" method="post" className="form-horizontal">
                                <FormGroup row>
                                    <Col xs="12" md="6">
                                        <Input
                                            style={{ marginLeft: -15 }}
                                            onChange={this.SelectedBankTOEdit.bind(this)}

                                            type="select" name="select" id="select">
                                            <option
                                                disabled={this.state.addOrEdit === 'edit'} value="0">Select Bank</option>
                                            {BankDetailsTOEdit.Org_BanksList.map((item, i) =>
                                                <option value={item.bankDetailsId} key={i} >{item.bankName} -  {item.accountNumber} </option>
                                            )}
                                        </Input>

                                    </Col>

                                    <Col xs="12" md="2">
                                        <Button disabled={this.state.addOrEdit === 'add'} color="warning" onClick={this.AddNewBank.bind(this)} style={{ marginBottom: '1rem', marginTop: 0 }}>Add New Account</Button>
                                    </Col>
                                </FormGroup>

                                <FormGroup
                                    hidden={BankDetailsTOEdit.ShowBankDetailsForm || BankDetailsTOEdit.Org_BanksList.length != 0} row>
                                    <Col xs="12" md="9">
                                        <Input style={{ alignSelf: 'left', marginLeft: -15 }} type="text"
                                            disabled={true}
                                            value="This user does not have bank details, Please add by clicking  'Add New Account' button."
                                            style={{ fontWeight: 'bold' }}
                                            id="note"
                                        />
                                    </Col>
                                </FormGroup>
                            </Form>

                        </Col>

                    </CardHeader>
                    <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                        {this.props.OrganizationDetails.OrgApiResults.Error}</span>
                    <Collapse
                        isOpen={BankDetailsTOEdit.ShowBankDetailsForm}
                    >

                        {this.RetunEditForm(BankDetailsTOEdit)}

                    </Collapse>
                    <CardFooter hidden={!BankDetailsTOEdit.ShowBankDetailsForm}  >
                        <FormGroup row>
                            <Col md="2">
                            </Col>
                            <Col xs="12" md="5">

                                <Button style={{ width: 100 }} color="warning" onClick={this.SaveBankDetails}>Save Details </Button>
                                <Button style={{ marginLeft: 25, width: 100 }} onClick={this.CancleButtonOrGoBack}>Cancel </Button>
                            </Col>
                        </FormGroup>
                    </CardFooter>
                </Card>

                {/* <Modal size="lg" isOpen={this.props.OrganizationDetails.OrgApiResults.updateOrgBankSuccess}
                    className={'modal-success ' + this.props.className}>
                    <ModalHeader>Success..!</ModalHeader>

                    <ModalBody >
                        <span style={{ marginLeft: '5%', fontSize: 16, }} >
                            Organization Bank Details is Saved Successfully. </span>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => { this.GotoOrgListComponent() }}>OK</Button>
                    </ModalFooter>
                </Modal> */}

            </div >
        );
    }



    GotoOrgListComponent() {

        let ReducerValues = this.props.OrganizationDetails;
        if (ReducerValues.OrgApiResults.updateOrgBankSuccess) {
            if (ReducerValues.EditOrganizationDetails.EditBankComponentFor === 'Distributor') {
                this.props.history.push('/Distributor')
            }
            else if (ReducerValues.EditOrganizationDetails.EditBankComponentFor === 'AdminRetailer') {
                this.props.history.push('/AdminRetailer')
            }
            else if (ReducerValues.EditOrganizationDetails.EditBankComponentFor === 'PendingRetailer') {
                this.props.history.push('/ApproveRetailer')
            }
        }

        this.props.clearResponseOnORGApis();
    }

    CancleButtonOrGoBack() {
        let EditBankComponentFor = this.props.OrganizationDetails.EditOrganizationDetails.EditBankComponentFor;
        if (EditBankComponentFor === 'Distributor') {
            this.props.history.push('/Distributor')
        }
        else if (EditBankComponentFor === 'AdminRetailer') {
            this.props.history.push('/AdminRetailer')
        }
        else if (EditBankComponentFor === 'PendingRetailer') {
            this.props.history.push('/ApproveRetailer')
        }
        if (EditBankComponentFor === 'PendingDistributor') {
            this.props.history.push('/PendingDistributor')
        }

    }

    SaveBankDetails() {

        if (this.handleValidation()) {
            this.SaveEdditedOrNewBankDetails()
        }
    }


    handleValidation() {


        let BankDetails = this.props.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details;

        let errors = {};
        let formIsValid = true;

        if (BankDetails.accountHolderName === '') {
            formIsValid = false;
            errors["accountHolderName"] = "Required holder Name";
        }


        // ACCT Number

        if (BankDetails.accountNumber === '') {
            formIsValid = false;
            errors["accountNumber"] = "Required Accont Number";
        }


        if (BankDetails.accountNumber.length < 11) {
            formIsValid = false;
            errors["accountNumber"] = "Account Number should not be less than 10 characters";
        }

        // Bank Name

        if (BankDetails.branchId === '') {
            formIsValid = false;
            errors["bankBranchName"] = "Required Bank Name";
        }

        // Bank Branch
        if (BankDetails.branchId === '') {
            formIsValid = false;
            errors["bankBranch"] = "Required Bank Branch";
        }

        // Bank ifscCode
        // if (BankDetails.bankIFSCCode === '') {
        //     formIsValid = false;
        //     errors["bankIFSCCode"] = "Required IFSC Code";
        // }

        // this.setState({ errors: errors });

        if (errors.length !== 0) {

            this.props.Ip_Warnings_At_Edit_Org_Bank_Details(errors, "AllRegexWarnings");
        }

        return formIsValid;
    }

    SaveEdditedOrNewBankDetails() {
        let AccessToken = this.props.LoginDetails.accessToken;
        let organizationId = this.props.OrganizationDetails.EditOrganizationDetails.EditingUserData.tenantId;
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;

        var UpdateBankData = [];

        let BankDetails = this.props.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details;

        let EdittedDataToSend = {
            bankDetailsId: parseInt(BankDetails.bankDetailsId),
            AccountNo: BankDetails.accountNumber,
            AccountHolderName: BankDetails.accountHolderName,
            BankBranchId: parseInt(BankDetails.branchId),
            TenantId: organizationId
        };
        UpdateBankData.push(EdittedDataToSend);
        if (this.props.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.AddOrEditBank === 'Edit') {

            this.props.SendOrgBankDetails_TO_Edit(AccessToken, EdittedDataToSend, PresentCreatingOrgType)
        } else {
            this.props.SendOrgBankDetails_TO_ADD(AccessToken, EdittedDataToSend, PresentCreatingOrgType)
        }
    }
}


const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { Distributor, user, AdminRetailers, retailer, allBankDetails, OrganizationDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;

    return { Distributor, user, AdminRetailers, retailer, allBankDetails, LoginDetails, OrganizationDetails };

};

export default connect(mapStateToProps, {
    ResetForm,
    // SaveDistributorsBankDetails,
    GetBranchesOfSelectedBankandState,
    // EditDistributorBankDetails,
    GetAllBanksFromDB, GetStatesOfSelectedBank,
    //  AddDistributorNewBanks, 
    // EditAdminRetailerBankDetails,
    // AddAdminRetailerBankDetails, 
    Save_Org_Bank_TO_Edit_And_Get_BankCities,
    Add_New_Org_Bank,
    Ip_Warnings_At_Edit_Org_Bank_Details,
    SendOrgBankDetails_TO_Edit,
    clearResponseOnORGApis,
    SendOrgBankDetails_TO_ADD
})(EditDistributorOrRetailerBank);
