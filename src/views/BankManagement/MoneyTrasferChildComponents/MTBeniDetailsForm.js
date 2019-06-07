import React, { Component, ReactDOM } from 'react';
import {
    Row, Col, Button, Card, CardHeader, CardBody,
    Form, FormGroup, FormText, Label, Input, InputGroup, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import { connect } from 'react-redux';

import {
    onBeneficiaryEdit, SaveBeneficiary, CheckValidateBeni_BeforeAdd, ClearApisResponseInMoneyTransferComp,
    //  ClearApiResponseOnBene
} from '../BankManagementAction';

import { Labelstyle, Labelstyle1 } from '../../../GlobalVars';
import { placeHolderColor } from '../../AllRegexFormats';
import { ModalOnMoneyTransferComp } from '../../GlobalModals';

class MTBeniDetailsForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Errors: {},
            date: '',
            isModalOpen: false,
            BeniBank: '',
            BeniBranch: ''
        }
        this.ToggleBankIFSCSearch = this.ToggleBankIFSCSearch.bind(this);
    }

    componentDidUpdate() {
        if (this.props.ApiResponseOnBene.message != '' || this.props.ApiResponseOnBene.ErrorMsg != '') {
            setTimeout(() => {
                // this.props.ClearApiResponseOnBene();
                this.props.ClearApisResponseInMoneyTransferComp();

            }, 10000);
        }
    }

    SaveBeneficiary() {

        let benfEdit = this.props.benificiaryDetails.beneficiaryEdit
        let beneficiary = {
            accountNo: benfEdit.acctNo,
            confAcctNo: benfEdit.confAccNo,
            bankName: benfEdit.selectedBank,
            ifsc: benfEdit.bankIFSC,
            accountMobile: benfEdit.acctMobileNo,
            accountHolder: benfEdit.acctHolderName,
            ImpsOrNeft: 'IMPS',
            Depositing: benfEdit.transferAmount,
            Charges: ''
        }

        this.props.moneyTransfer.recentlyAddedBeneficiary = benfEdit.acctHolderName;
        if (this.ValidateFields(beneficiary)) {

            let benfList = this.props.moneyTransfer.benificiaries;

            let beneficiaryToStore = {
                "CustomerMobileNo": this.props.moneyTransfer.customerMobileNo,
                "AccountHolderName": benfEdit.acctHolderName,
                "BeneMobileNo": benfEdit.acctMobileNo,
                "AccountNumber": benfEdit.acctNo,
                "BankBranchId": "1",
                "IFSC": benfEdit.bankIFSC,
                "DepositAmount": benfEdit.transferAmount,
                "VerifyBeneficiary": "false"
            }

            let BeneBankData = {
                bankName: this.props.benificiaryDetails.beneficiaryEdit.selectedBank,
                branchName: this.props.benificiaryDetails.beneficiaryEdit.selectedBankBranch
            }
            // this.props.SaveBeneficiary({
            //     beneficiary,
            //     benfList
            // })

            let AccessToken = this.props.LoginDetails.accessToken
            this.props.SaveBeneficiary(AccessToken, beneficiaryToStore, BeneBankData);
            let val = !this.state.displayBeneSuccessModal;
            this.setState({
                displayBeneSuccessModal: val
            })
        }

    }

    ValidateFields(beneficiaryInfo) {

        let errors = {};
        let isValid = true;
        if (beneficiaryInfo.accountMobile == '' || beneficiaryInfo.accountMobile.length < 10) {
            errors["MobNo"] = 'Enter a valid 10 digit Mobile Number';
            isValid = false;
        }
        if (beneficiaryInfo.accountHolder == '') {
            errors["acctHolder"] = 'Beneficiary Name Required';
            isValid = false;
        }
        if (beneficiaryInfo.accountNo == '') {
            errors["acctNo"] = 'Beneficiary Account Number Required';
            isValid = false;
        }
        else if (beneficiaryInfo.confAcctNo == '') {
            errors["confAcctNo"] = 'Kindly Re-Enter the Account Number';
            isValid = false;
        }
        if (beneficiaryInfo.accountNo.length != 0 && beneficiaryInfo.confAcctNo.length != 0) {
            if (beneficiaryInfo.accountNo != beneficiaryInfo.confAcctNo) {
                errors["confAcctNo"] = 'Entered Account Numbers do not match with each other';
                isValid = false;
            }
        }
        // if (beneficiaryInfo.bankName == '') {
        //     errors["bankName"] = 'Required';
        //     isValid = false;
        // }

        if (beneficiaryInfo.ifsc == '') {
            errors["ifsc"] = 'Required';
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

    ToggleBankIFSCSearch() {

        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {

        return (
            <div> <Card >
                <CardHeader style={{ borderBottomColor: '#ffa500', borderBottomWidth: '2px' }}>
                    <strong style={Labelstyle} >Beneficiary Details</strong>
                </CardHeader>
                <CardBody>

                    <Form >
                        <fieldset
                            disabled={!this.props.ApiResponseOnCust_Details.enterBeniDetails}
                        >
                            <FormGroup row>
                                <Col md="5">
                                    <Label
                                        style={Labelstyle1}
                                        // style={{ verticalAlign: 'sub' }}
                                        htmlFor="inputACHolderName"> Bene Name</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input bsSize="sm" ref={this.textInput}
                                        value={this.props.benificiaryDetails.beneficiaryEdit.acctHolderName}
                                        onChange={(e) => {
                                            let field = 'ACHolder'
                                            let value = e.target.value;
                                            this.props.onBeneficiaryEdit({ field, value })
                                        }}
                                        type="text" id="inputACHolderName" placeholder="Name"
                                        className={this.focusField(this.state.Errors["acctHolder"])}
                                        onPasteCapture={(e) => e.preventDefault()} />
                                    <FormText color="red"> {this.state.Errors["acctHolder"]} </FormText>
                                </Col>
                            </FormGroup>


                            {/* <FormGroup row>
                            <Col md="5">
                                <Label
                                    style={Labelstyle1}
                                    htmlFor="selectName"> Bene Bank Name</Label>
                            </Col>
                            <Col xs="10" md="7">
                                <Input bsSize="sm"
                                    onChange={(e) => {
                                        let field = 'bankName'
                                        let value = e.target.value;

                                        this.props.onBeneficiaryEdit({ field, value })
                                    }}
                                    type="select" name="selectName" id="selectName"
                                    onPasteCapture={(e) => e.preventDefault()}>
                                    <option
                                        disabled={this.props.benificiaryDetails.beneficiaryValidations.isBankDefaultVisible}
                                        value="0"> Select Bank </option>
                                    {this.props.benificiaryDetails.beneficiaryEdit.bankNames.map((bankName) =>
                                        <option value={bankName} key={bankName}>
                                            {bankName}</option>)}

                                </Input>
                            </Col>
                        </FormGroup> */}

                            <FormGroup row>
                                <Col md="5">
                                    <Label
                                        style={Labelstyle1}
                                        // style={{ verticalAlign: 'sub' }}
                                        htmlFor="inputBankIFSC"> Bene Bank Details</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <InputGroup>
                                        <Input bsSize="sm"
                                            onChange={(e) => {
                                                let field = 'IFSC'
                                                let value = e.target.value;
                                                this.props.onBeneficiaryEdit({ field, value })
                                            }}
                                            value={this.props.benificiaryDetails.beneficiaryEdit.bankIFSC}
                                            className={this.focusField(this.state.Errors["ifsc"])}
                                            type="text" id="inputBankIFSC" placeholder="IFSC Code"
                                            onPasteCapture={(e) => e.preventDefault()} />

                                        <div className="input-group-prepend" style={{ cursor: 'pointer' }} onClick={this.ToggleBankIFSCSearch} >
                                            <span className="input-group-text">
                                                <i className="fa fa-search"></i>
                                            </span>
                                        </div>
                                        <FormText color="red"> {this.state.Errors["ifsc"]} </FormText>
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5">
                                    <Label
                                        // style={{ verticalAlign: 'sub' }}
                                        style={Labelstyle1}
                                        htmlFor="inputAccountNumber">Account Number</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'acctNo'
                                            let value = e.target.value;
                                            const re = /^[0-9\b]+$/;
                                            if (value == '' || re.test(value)) {
                                                this.props.onBeneficiaryEdit({ field, value })
                                            }
                                        }}
                                        type="password" id="inputAccountNumber" placeholder="Account Number"
                                        className={this.focusField(this.state.Errors["acctNo"])}
                                        value={this.props.benificiaryDetails.beneficiaryEdit.acctNo}
                                        onPasteCapture={(e) => e.preventDefault()} />
                                    <FormText color="red"> {this.state.Errors["acctNo"]} </FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5">
                                    <Label
                                        //  style={{ verticalAlign: 'sub' }}
                                        style={Labelstyle1}
                                        htmlFor="inputConfAcctNumber">Confirm Account Number</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'confAcctNo'
                                            let value = e.target.value;
                                            const re = /^[0-9\b]+$/;
                                            if (value == '' || re.test(value)) {
                                                this.props.onBeneficiaryEdit({ field, value })
                                            }
                                        }}
                                        type="text" id="inputConfAcctNumber" placeholder="Account Number"
                                        className={this.focusField(this.state.Errors["confAcctNo"])}
                                        value={this.props.benificiaryDetails.beneficiaryEdit.confAccNo}
                                        onPasteCapture={(e) => e.preventDefault()} />
                                    <FormText color="red"> {this.state.Errors["confAcctNo"]} </FormText>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md="5">
                                    <Label
                                        // style={{ verticalAlign: 'sub' }}
                                        style={Labelstyle1}
                                        htmlFor="inputACMobileNo"> Bene Mobile Number</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input maxLength={10} bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'mobileNo'
                                            let value = e.target.value;
                                            const re = /^[0-9\b]+$/;
                                            if (value == '' || re.test(value)) {
                                                this.props.onBeneficiaryEdit({ field, value })
                                            }
                                        }}
                                        className={this.focusField(this.state.Errors["MobNo"])}
                                        type="text" id="inputACMobileNo" placeholder="Mobile Number"
                                        value={this.props.benificiaryDetails.beneficiaryEdit.acctMobileNo}
                                        onPasteCapture={(e) => e.preventDefault()} />
                                    <FormText color="red"> {this.state.Errors["MobNo"]} </FormText>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md="5">
                                    <Label
                                        // style={{ verticalAlign: 'sub' }}
                                        style={Labelstyle1}
                                        htmlFor="BeneAddress"> Bene Address</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input maxLength={10} bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'BeniAddress'
                                            let value = e.target.value;
                                            this.props.onBeneficiaryEdit({ field, value })
                                        }}
                                        // className={this.focusField(this.state.Errors["MobNo"])}
                                        type="text" id="BeniAddress" placeholder=" Enter Bene Address"
                                        value={this.props.benificiaryDetails.beneficiaryEdit.BeniAddress}
                                        onPasteCapture={(e) => e.preventDefault()} />
                                    <FormText color="red"> {this.state.Errors["BeniAddress"]} </FormText>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5">
                                    <Label
                                        //  style={{ verticalAlign: 'sub' }}
                                        style={Labelstyle1}
                                        htmlFor="inputACMobileNo"> Transfer Amount</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input maxLength={10} bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'transferAmount'
                                            let value = e.target.value;
                                            const re = /^[0-9\b]+$/;
                                            if (value == '' || re.test(value)) {
                                                this.props.onBeneficiaryEdit({ field, value })
                                            }
                                        }}
                                        className={this.focusField(this.state.Errors["transferAmount"])}
                                        type="text" id="inputACMobileNo" placeholder="Amount to Transfer"
                                        value={this.props.benificiaryDetails.beneficiaryEdit.transferAmount}
                                        onPasteCapture={(e) => e.preventDefault()} />
                                    <FormText color="red"> {this.state.Errors["transferAmount"]} </FormText>
                                </Col>
                            </FormGroup>
                        </fieldset>

                    </Form>

                    <FormGroup row>
                        <Col xs="12"  >
                            <Label style={{ float: 'right' }} check>
                                <Input type="checkbox"
                                    onClick={() => this.props.CheckValidateBeni_BeforeAdd()}
                                    checked={this.props.moneyTransfer.CheckValidateBeniBeforeAdd}
                                    id="checkbox2" />{' '}
                                <span style={{ color: placeHolderColor }}>  Validate Before Add(4 Rs/- will charge) </span>
                            </Label>

                        </Col>

                    </FormGroup>


                    {this.props.ApiResponseOnBene.AddBeneSuccess ?
                        < FormGroup row>
                            <Col xs="12"  >
                                <Label style={{ float: 'right' }} check>
                                    <span style={{ fontSize: 15 }}>Beneficiary successfully added to the list.</span>
                                </Label>
                            </Col>
                        </FormGroup> : null}

                    <FormGroup row>

                        {/* <Col xs="12" md="6">
                        </Col> */}
                        <Col xs="12"  >
                            {/* <Button style={{float:'right'}}
                                onClick={() =>
                                    // this.SaveBeneficiary()
                                    this.props.moneyTransfer.benificiaries = []
                                }

                                color="success">Val Beneficiary</Button> */}
                            {/* </Col>
                        <Col md="3"> */}

                            <Button
                                style={{ backgroundColor: '#e68d4c', float: 'right' }}
                                onClick={() => this.SaveBeneficiary()}
                                color="success">Add Beneficiary</Button>
                        </Col>

                    </FormGroup>
                </CardBody>
                <span style={{ marginLeft: '2%', marginBottom: '2', color: 'green' }}>  {this.props.ApiResponseOnBene.message}</span>
                <span style={{ marginLeft: '2%', marginBottom: '2', color: 'green' }}>  {this.props.ApiResponseOnBene.ErrorMsg}</span>
            </Card >

                {ModalOnMoneyTransferComp(this.props.ApiResponseOnBene.spinnerOnBeneInfo)}
                <Modal isOpen={this.state.isModalOpen} className={'modal-warning ' + this.props.className} >
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
                                            onChange={(bank) => {
                                                console.log(" bank bank bank bank bank  ");
                                                console.log(bank);
                                                console.log(bank.target.value);
                                            }
                                            }
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
                </Modal>
            </div >)
    }
}

const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { moneyTransfer, benificiaryDetails, ApiResponseOnCust_Details, ApiResponseOnBene } = bankManagement;

    const { LoginDetails, userRoleModulePermissions } = Authentication;

    return {
        moneyTransfer, benificiaryDetails, ApiResponseOnCust_Details, ApiResponseOnBene,
        LoginDetails, userRoleModulePermissions
    };

};

export default connect(mapStateToProps, {
    onBeneficiaryEdit, SaveBeneficiary, CheckValidateBeni_BeforeAdd, ClearApisResponseInMoneyTransferComp,
    //  ClearApiResponseOnBene
})(MTBeniDetailsForm);
