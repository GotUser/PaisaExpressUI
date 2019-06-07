import React, { Component } from 'react';
import {
    Row, Col, Button, Card, CardHeader, CardBody,
    Form, FormGroup, FormText, Label, Input, Alert,
    Modal, ModalHeader, ModalBody, ModalFooter

} from 'reactstrap';

import {
    moneyTransferInitialLoad, onCustomerMobileNoChanged, ClearMoneyTrasferSuccessResponse,
    GetCustomerInformation, newCustomerSave, ProcessMoneyTransfer, getBankDetails, onBeneficiaryEdit,
    CacleModalsInDisplayBeniList, ClearApisResponseInMoneyTransferComp, ClearApiSuccessInMoneyTrasfer, CloseRemoveBeniModal, RemoveBeni
} from '../BankManagement/BankManagementAction';
import { connect } from 'react-redux';

import { SingleDatePicker } from 'react-dates';
// import moment from 'moment';

import MTCustomerDetails from './MoneyTrasferChildComponents/MTCustomerDetails';
import MTBeniForm from './MoneyTrasferChildComponents/MTBeniDetailsForm';
import BeniListofCustomers from './MoneyTrasferChildComponents/DisplayBeniList';

import MoneyTransferModal from './MoneyTrasferChildComponents/MoneyTransferModal';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

var windowObjectReference = null; // global variable
var PreviousUrl;

class MoneyTransferNew extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNoValidation: '',
            visible: true,
            Errors: {},
            activeIndex: 0,
            disableMobileInput: false,
            isEnableAddButton: false,
            isModalOpen: false,
            displayBeneSuccessModal: false,
            displaySchedulerModal: false,
            focused: false,
            date: '',
        }
        // this.next = this.next.bind(this);
        // this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        // this.onExiting = this.onExiting.bind(this);
        // this.onExited = this.onExited.bind(this);
        this.onDismiss = this.onDismiss.bind(this);

        this.GetCustomerInfo = this.GetCustomerInfo.bind(this);
    }
    onDismiss() {
        this.setState({ visible: false });
    }

    componentDidUpdate() {

        setTimeout(function () {
            if (this.props.moneyTransfer.customerDetails.isCustomerSaveSuccess) {
                this.props.moneyTransfer.customerDetails.isCustomerSaveSuccess = false;
                this.setState({
                    activeIndex: 1,
                });
            }
        }.bind(this), 3000);

        if (this.props.ApiResponseOnBene.AddBeneSuccess || this.props.ApiResponseOnBene.ErrorOnGetSlabRate || this.props.ApiResponseOnBene.removeBeniFail) {
            setTimeout(() => {
                this.props.ClearApisResponseInMoneyTransferComp();
            }, 15000);
        }

        if (this.props.moneyTransfer.MoneyTransferSuccess) {

            // console.log(" Monet Trasfer Success Fully");
            // var win = window.open('/#/PrintStatementOnMTansfer', '_blank');
            // win.focus();

            // this.props.history.push('/PrintStatementOnMTansfer');

            // setTimeout(() => {
            //     this.props.ClearApiSuccessInMoneyTrasfer();
            // }, 15000);
        }

        // this.props.moneyTransfer.MoneyTransferSuccess


        if (this.props.ApiResponseOnCust_Details.FocusBeniFornInput) {
            console.log(" / / / / / / / / / / / / / / / / /   this.child.myInput.focus();    this.props.ApiResponseOnCust_Details.FocusBeniFornInput Is True: ")
            // this.child.myInput.focus();
        }
    }

    componentWillMount() {

        document.body.style.overflow = "visible"

        // if (this.props.location.state == undefined) {
        //     this.props.history.push('/MoneyTransferNew');
        // }

        console.log("   this.props.moneyTransferInitialLoad(); this.props.moneyTransferInitialLoad(); this.props.moneyTransferInitialLoad();  ");
        console.log(this.props.location.state);

        if (this.props.location.state == undefined) {
            this.props.moneyTransferInitialLoad();
        }
    }
    componentDidMount() {

        this.props.getBankDetails();
    }

    GetCustomerInfo() {

        // let customerInfo = {
        //     customerMobileNo: "9703949433",
        //     FullName: "Prashanth",
        //     eKYCSelected: "PAN",
        //     eKYCInfo: "523652365222",
        //     address: "9-85,bc colony"
        // }

        let mobileNo = this.props.moneyTransfer.customerMobileNo;
        let AccessToken = this.props.LoginDetails.accessToken;

        // window.open("https://www.w3schools.com", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");

        this.props.GetCustomerInformation({ mobileNo, AccessToken });

    }
    onMobileNumberChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)) {
            let mobileNo = e.target.value;
            this.props.onCustomerMobileNoChanged({ mobileNo })
        }
    }

    SaveNewCustomer_Click() {

        let customerInfo = {
            customerMobileNo: this.props.moneyTransfer.customerDetails.customerMobileNo,
            FullName: this.props.moneyTransfer.customerDetails.FullName,
            eKYCSelected: this.props.moneyTransfer.customerDetails.selectedEKYC,
            eKYCInfo: this.props.moneyTransfer.customerDetails.eKYCInfo,
            address: this.props.moneyTransfer.customerDetails.address
        }
        if (this.ValidateFields(customerInfo)) {
            this.props.newCustomerSave({ customerInfo });
        }
    }

    ToggleBankIFSCSearch() {

        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    focusField(fieldValue) {
        if (fieldValue === undefined) {
            return '';
        }
        else {
            return 'is-invalid'
        }
    }

    Transfer_Beneficiary_Click(benfry) {
        console.log("================= Parent benfry ==================");
    }

    toggleSuccessAlert() {
        if (this.props.location.state != undefined) {
            if (this.props.location.state.isRedirect != undefined) {
                if (this.props.location.state.transferedAmount != undefined) {
                    return <Alert style={{ backgroundColor: '#9ccc65' }} isOpen={this.state.visible} toggle={this.onDismiss}>
                        Rs. <strong>{this.props.location.state.transferedAmount}/-</strong>  has been transfered to <strong>{this.props.location.state.transferedTo}</strong>
                    </Alert>
                }
                else if (this.props.location.state.benefAdded != undefined) {
                    return <Alert style={{ backgroundColor: '#9ccc65' }} isOpen={this.state.visible} toggle={this.onDismiss}>
                        <strong>{this.props.location.state.benefAdded}</strong> has been added to your Beneficiary list.
                </Alert>
                }
            }
        }
    }


    // onExiting() {
    //     this.animating = true;
    // }

    // onExited() {
    //     this.animating = false;
    // }

    // next() {
    //     if (this.animating) return;
    //     const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    //     this.setState({ activeIndex: nextIndex });
    // }

    // previous() {
    //     if (this.animating) return;
    //     const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    //     this.setState({ activeIndex: nextIndex });
    // }

    goToIndex(newIndex) {

        this.props.moneyTransfer.isEditTrue = true;
        if (this.animating) return;
        setTimeout(function () {
            this.setState({ activeIndex: newIndex });
        }.bind(this), 3000);

    }


    render() {

        const { activeIndex } = this.state;
        let validCustomerName = this.props.moneyTransfer.validCustomerName;

        return (
            <div className="animated fadeIn" >

                {/* {this.props.moneyTransfer.MoneyTransferSuccess ? 
                    window.open('/#/PrintStatementOnMTansfer', 'sharer', 'toolbar=0,status=0,width=700,height=555') : null} */}
                <Row  >
                    <Col md="12">
                        <CustomerBreadCrumb from="MoneyTransfer" contentPath="/ Banking / MoneyTransfer" />
                    </Col>

                    <Col xs="12" md="12" >
                        <div>
                            {this.toggleSuccessAlert()}
                        </div>
                        <Card style={{ border: '1px solid #ffc800', }}>
                            <CardHeader style={{
                                backgroundColor: '#ffffff'
                            }}>
                                <Form action="" inline>
                                    <Col xs="12" md="5">
                                        <FormGroup style={{ marginBottom: 0, marginTop: '10px' }} >

                                            <Label htmlFor="CustomerMobileNumber" style={{ paddingRight: '30px' }}>Mobile Number</Label>
                                            <Input ref={el => this.CustomerMobileNumber = el}
                                                style={{ width: '35%' }}
                                                type="text" onChange={(e) => this.onMobileNumberChange(e)}
                                                value={this.props.moneyTransfer.customerMobileNo}
                                                className={this.focusField(this.state.Errors["CustomerMobNo"])}
                                                id="CustomerMobileNumber" placeholder="Mobile Number" maxLength={10}
                                                disabled={this.state.disableMobileInput} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs="12" md="1" style={{ paddingTop: 15 }}>
                                        <Button
                                            style={{ marginRight: '10px' }}
                                            outline
                                            disabled={this.props.moneyTransfer.customerMobileNo.length !== 10}
                                            // disabled={true}
                                            onClick={this.GetCustomerInfo}
                                            // disabled={this.state.disableMobileInput}
                                            color="warning">Proceed</Button>
                                    </Col>

                                    <Col xs="12" md="5">
                                        {validCustomerName != '' ?
                                            <div>
                                                <span className="h4" style={{ marginRight: 10, color: 'coral' }}>{validCustomerName}</span>
                                                <span>
                                                    <i className="fa fa-edit fa-lg mt-3"
                                                        style={{ cursor: 'pointer', color: 'lightslategray' }} onClick={() => this.goToIndex(0)}></i>
                                                </span>
                                            </div>
                                            : null
                                        }
                                    </Col>

                                    {/* <Col xs="12" md="1" style={{ paddingTop: 15 }}>
                                        <Button
                                            outline
                                            disabled={false}
                                            onClick={() => window.location.reload()}
                                            color="danger">Back</Button>
                                    </Col> */}
                                </Form>
                            </CardHeader>
                            <span style={{ fontSize: 16, color: 'green', marginLeft: '10%' }}> {this.props.moneyTransfer.MoneyTransferSuccess ?
                                " Amount " + this.props.moneyTransfer.processTransfer.beneficiary.Depositing + " is Trasfered Successfully to the beneficiary Account." : null}</span>

                            <CardBody style={{
                                borderTop: 0,
                                // height: 'calc(100vh + 40px)',
                                marginTop: -15,
                                borderBottomWidth: '2px', borderBottomLeftRadius: '5px',
                                borderBottomRightRadius: '5px'
                            }}>

                                <Row>
                                    <Col>
                                        <Row  >
                                            <Col xs="12" md="6">

                                                <MTCustomerDetails />
                                                <MTBeniForm ref={(ch) => this.child = ch} />
                                            </Col>
                                            <Col xs="12" md="6">


                                                <BeniListofCustomers />

                                                {/* <Row
                                                    style={{ height: '100%' }}
                                                >
                                                    <Col xs="12" style={{
                                                        borderLeft: '1px solid orange'
                                                    }}>

                                                        {this.RenderBeneficiaryList()}

                                                    </Col>
                                                </Row>
                                                <Row style={{ paddingBottom: 45, }}>
                                                    <Col xs="12" md="12" style={{
                                                        borderLeft: '1px solid orange'
                                                    }}>

                                                    </Col>
                                                </Row> */}
                                            </Col>
                                        </Row >
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row >


                {/* <Modal isOpen={this.state.isModalOpen} className={'modal-warning ' + this.props.className} >
                    <ModalHeader>Select</ModalHeader>
                    <ModalBody>
                        <Col>
                            <FormGroup row>
                                <Col md="4">
                                    <Label htmlFor="selectName"> Bene Bank Name</Label>
                                </Col>
                                <Col xs="10" md="7">
                                    <Input bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'bankName'
                                            let value = e.target.value;

                                            this.props.onBeneficiaryEdit({ field, value })
                                        }}
                                        type="select" name="selectName" id="selectName">
                                        <option
                                            disabled={this.props.benificiaryDetails.beneficiaryValidations.isBankDefaultVisible}
                                            value="0"> Select Bank </option>
                                        {this.props.benificiaryDetails.beneficiaryEdit.bankNames.map((bankName) =>
                                            <option value={bankName} key={bankName}>
                                                {bankName}</option>)}

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="4">
                                    <Label htmlFor="selectState"> Bank State</Label>
                                </Col>
                                <Col xs="10" md="7">
                                    <Input bsSize="sm"
                                        disabled={!this.props.benificiaryDetails.beneficiaryValidations.isBankDefaultVisible}
                                        onChange={(e) => {
                                            let field = 'bankState'
                                            let value = e.target.value;

                                            this.props.onBeneficiaryEdit({ field, value })
                                        }}
                                        type="select" name="selectState" id="selectState">
                                        <option
                                            disabled={this.props.benificiaryDetails.beneficiaryValidations.isBankStateDefaultVisible}
                                            value="0"> Select State </option>
                                        {this.props.benificiaryDetails.beneficiaryEdit.bankStates.map((bankState) =>
                                            <option value={bankState} key={bankState}>
                                                {bankState}</option>)}

                                    </Input>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md="4">
                                    <Label htmlFor="selectBranch"> Bank Branch</Label>
                                </Col>
                                <Col xs="10" md="7">
                                    <Input bsSize="sm"
                                        disabled={!this.props.benificiaryDetails.beneficiaryValidations.isBankStateDefaultVisible}
                                        onChange={(e) => {
                                            let field = 'bankBranch'
                                            let value = e.target.value;

                                            this.props.onBeneficiaryEdit({ field, value })
                                        }}
                                        type="select" name="selectBranch" id="selectBranch">
                                        <option
                                            disabled={this.props.benificiaryDetails.beneficiaryValidations.isBankBranchDefaultVisible}
                                            value="0"> Select Branch </option>
                                        {this.props.benificiaryDetails.beneficiaryEdit.bankBranches.map((bankBranch) =>
                                            <option value={bankBranch} key={bankBranch}>
                                                {bankBranch}</option>)}

                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="4">
                                    <Label style={{ verticalAlign: 'sub' }}
                                        htmlFor="inputBankIFSC"> Bank IFSC Code</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'IFSC'
                                            let value = e.target.value;
                                            this.props.onBeneficiaryEdit({ field, value })
                                        }}
                                        value={this.props.benificiaryDetails.beneficiaryEdit.bankIFSC}
                                        className={this.focusField(this.state.Errors["ifsc"])}
                                        type="text" id="inputBankIFSC" placeholder="IFSC Code" />
                                    <FormText color="red"> {this.state.Errors["ifsc"]} </FormText>
                                </Col>
                            </FormGroup>
                        </Col>
                    </ModalBody>
                    <ModalFooter>
                        <Button className="deleteModelButton" color="danger" onClick={() => this.ToggleBankIFSCSearch()}>Search</Button>{' '}
                        <Button color="secondary" onClick={() => this.ToggleBankIFSCSearch()}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}

                <Modal isOpen={this.state.displayBeneSuccessModal} className={'modal-success ' + this.props.className} >
                    <ModalHeader>Bene Add Success</ModalHeader>
                    <ModalBody>
                        <Col>
                            <FormGroup>
                                <Label> Beneficiary <strong>{this.props.moneyTransfer.recentlyAddedBeneficiary}</strong> has been added to the list</Label>
                                <Label> A Charge of <strong>₹4/-</strong> has been applied for the validation of the Bene</Label>
                            </FormGroup>

                        </Col>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => {
                            let val = !this.state.displayBeneSuccessModal;
                            this.setState({
                                displayBeneSuccessModal: val
                            })
                        }}>OK</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.props.OpenRemoveBeniModal} className={'modal-warning ' + this.props.className} >
                    <ModalHeader>Delete Bene.</ModalHeader>
                    <ModalBody>
                        This Benificiary Will Be Removed From The List. you will not be able to get this bene details.
                    </ModalBody>
                    <span style={{ fontSize: 16, marginLeft: '5%', color: 'red' }}> {this.props.ApiResponseOnBene.removeBeniFail ? this.props.ApiResponseOnBene.ErrorMsg : null} </span>
                    <ModalFooter>
                        <Button className="deleteModelButton" color="danger" onClick={() => this.RemoveBenificiary(this.props.BeneDetailsToRemove, this.props.BeneIndexToRemove)}>OK</Button>{' '}
                        <Button color="secondary" onClick={() => this.props.CloseRemoveBeniModal()}>Cancel</Button>
                    </ModalFooter>
                </Modal>




                {this.MoneyTrasferSuccessModal()}


                {/* <Modal isOpen={this.props.moneyTransfer.displayScheduleMoneyTransferModal} className={'modal-warning ' + this.props.className} >
                    <ModalHeader>Schedule Your Transaction</ModalHeader>
                    <ModalBody>
                        <FormGroup row>
                            <Col xs="12" md="4">
                                <Label>Schedule Date</Label>
                            </Col>
                            <Col xs="12" md="6">
                                <SingleDatePicker
                                    numberOfMonths={1}
                                    date={this.state.date} // momentPropTypes.momentObj or null

                                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                    focused={this.state.focused} // PropTypes.bool
                                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                />
                            </Col>

                        </FormGroup>
                        <FormGroup row>
                            <Col xs="12" md="4">
                                <Label>Transfer Amount</Label>
                            </Col>
                            <Col xs="12" md="6">
                                <Input disabled value={this.props.moneyTransfer.processTransfer.transferAmount} />
                            </Col>

                        </FormGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={() => this.ScheduleMoneyTransfer()}>Schedule</Button>
                        <Button color="danger" onClick={() => this.props.CacleModalsInDisplayBeniList()}>Cancel</Button>
                    </ModalFooter>
                </Modal> */}

                <MoneyTransferModal />
            </div>
        )
    }

    RemoveBenificiary(benificiary, i) {
        const BeneToDel = {
            CustomerMobileNo: this.props.moneyTransfer.customerMobileNo,
            BeneMobileNo: benificiary.mobileNo,
            AccountNumber: benificiary.acccountNo
        }

        let AccessToken = this.props.LoginDetails.accessToken;

        this.props.RemoveBeni(AccessToken, BeneToDel, i)
    }

    MoneyTrasferSuccessModal() {


        if (this.props.moneyTransfer.MoneyTransferSuccess) {


            return <Modal isOpen={this.props.moneyTransfer.MoneyTransferSuccess} className=
                {this.props.MoneyTrasferSuccessResponse.Status === 'SUCCESS' ? 'modal-success ' + this.props.className : 'modal-danger ' + this.props.className}
            >
                <ModalHeader>

                    {this.props.MoneyTrasferSuccessResponse.Status === 'SUCCESS' ?
                        'Transaction Success' : 'Transaction Failure'}
                </ModalHeader>
                <ModalBody>

                </ModalBody>
                <span style={{ fontSize: 16, marginLeft: '5%' }}>
                    {/* Amount is Trasfered Successfully to the beneficiary Account. */}
                    {/* {this.props.MoneyTrasferSuccessResponse.message} Trasaction Reference Number : {this.props.MoneyTrasferSuccessResponse.transactionCode} */}
                    {this.props.MoneyTrasferSuccessResponse.message}
                </span>
                {this.props.MoneyTrasferSuccessResponse.Status === 'SUCCESS' ?
                    <span style={{ fontSize: 16, marginLeft: '5%' }}>
                        {/* Amount is Trasfered Successfully to the beneficiary Account. */}
                        Trasaction Reference Number : {this.props.MoneyTrasferSuccessResponse.transactionCode}
                    </span>
                    : null}
                <ModalFooter>
                    <Button className="deleteModelButton" color="danger" onClick={() => {
                        let AccessToken = this.props.LoginDetails.accessToken;
                        let mobileNo = this.props.moneyTransfer.customerMobileNo;
                        // this.props.GetCustomerInformation({ mobileNo, AccessToken });
                        // this.props.ClearApiSuccessInMoneyTrasfer();
                        this.props.ClearMoneyTrasferSuccessResponse();
                    }
                    }>OK</Button>{' '}
                    {/* <Button color="secondary" onClick={() => this.PrintTransferStatement()}>Print </Button> */}
                </ModalFooter>
            </Modal>
        }
        else return null;
    }

    PrintTransferStatement() {

        let newWindow = window.open("/#/PrintStatementOnMTansfer", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
        newWindow.focus();
    }


    // ScheduleMoneyTransfer() {
    //     let val = !this.state.displaySchedulerModal;
    //     this.setState({
    //         displaySchedulerModal: val
    //     })
    // }
    ValidateFields(customerInfo) {
        let errors = {};
        let isValid = true;

        if (customerInfo.eKYCSelected != '') {
            if (customerInfo.eKYCInfo == '') {
                errors["ekycInfo"] = 'Required';
            }
        } else {
            errors["ekycDDL"] = 'Required';
        }

        if (customerInfo.FullName == '') {
            errors["FullName"] = 'Required';
            isValid = false;
        }
        if (customerInfo.lastName == '') {
            errors["lastName"] = 'Required';
            isValid = false;
        }
        if (customerInfo.address == '') {
            errors["address"] = 'Required';
            isValid = false;
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
            return 'is-invalid';
        }
    }
}

const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { moneyTransfer, benificiaryDetails, ApiResponseOnBene, OpenRemoveBeniModal, MoneyTrasferSuccessResponse,
        ApiResponseOnCust_Details, BeneDetailsToRemove, BeneIndexToRemove } = bankManagement;

    const { LoginDetails, userRoleModulePermissions, } = Authentication;

    return {
        moneyTransfer, benificiaryDetails, LoginDetails, userRoleModulePermissions, ApiResponseOnBene, OpenRemoveBeniModal,
        MoneyTrasferSuccessResponse, ApiResponseOnCust_Details, BeneDetailsToRemove, BeneIndexToRemove
    };

};


export default connect(mapStateToProps, {
    moneyTransferInitialLoad, onCustomerMobileNoChanged, ClearMoneyTrasferSuccessResponse,
    GetCustomerInformation, newCustomerSave, ProcessMoneyTransfer, getBankDetails, onBeneficiaryEdit,
    CacleModalsInDisplayBeniList, ClearApisResponseInMoneyTransferComp, ClearApiSuccessInMoneyTrasfer,
    CloseRemoveBeniModal, RemoveBeni
})(MoneyTransferNew);

