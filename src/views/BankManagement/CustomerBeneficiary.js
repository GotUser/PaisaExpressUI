import React, { Component } from 'react';
import {
    Row, Col, Button, ButtonDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody,
    Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon,
    InputGroupButton, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import classnames from 'classnames';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
// import moment from 'moment';

import {
    getBankDetails, onBeneficiaryEdit, SaveBeneficiary, ProcessMoneyTransfer, MoneyTransferAmount_Changed
} from '../BankManagement/BankManagementAction'
import { connect } from 'react-redux';

class CustomerBeneficiary extends Component {

    constructor(props) {
        super(props);
        //this.checkToEnableAddBenEficiary = this.checkToEnableAddBenEficiary.bind(this);
        this.state = {
            isEnableAddButton: false,
            Errors: {},
            isModalOpen: false,
            displayBeneSuccessModal: false,
            displayTransferModal: false,
            displaySchedulerModal: false,
            focused: false,
            date: '',
            isValidBeneCheck: true
        };
    }
    componentWillMount() {

        //console.log(this.props.location.state)
        // if (this.props.location.state == undefined) {
        //     this.props.history.push('/MoneyTransfer');
        // }
    }
    componentDidMount() {

        this.props.getBankDetails();
    }
    ToggleBankIFSCSearch() {

        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    SaveBeneficiary() {

        let benfEdit = this.props.benificiaryDetails.beneficiaryEdit

        let beneficiary = {
            accountNo: benfEdit.acctNo,
            confAcctNo: benfEdit.confAccNo,
            bankName: benfEdit.selectedBank,
            ifsc: benfEdit.bankIFSC,
            accountMobile: benfEdit.acctMobileNo,
            accountHolder: benfEdit.acctHolderName
        }

        this.props.moneyTransfer.recentlyAddedBeneficiary = beneficiary.accountHolder;
        if (this.ValidateFields(beneficiary)) {

            let benfList = this.props.moneyTransfer.benificiaries;
            let AccessToken = this.props.LoginDetails.accessToken
            this.props.SaveBeneficiary({
                AccessToken,
                beneficiary,
                benfList
            })
            let val = !this.state.displayBeneSuccessModal;
            this.setState({
                displayBeneSuccessModal: val
            })
        }

    }

    TransferAmount() {
        let val = !this.state.displayTransferModal;
        this.setState({
            displayTransferModal: val
        })
    }
    ScheduleMoneyTransfer() {
        let val = !this.state.displaySchedulerModal;
        this.setState({
            displaySchedulerModal: val
        })
    }
    Child_Transfer_Benef_Click(benfry, indx) {
        let beneficiary = benfry;

        //this.props.Transfer_Beneficiary_Click(benfry)

        // this.props.history.push({
        //     pathname: '/BankManagement/TransferProcess',
        //     state: { benificiaryInfo: beneficiary }
        // })

        this.props.ProcessMoneyTransfer({ beneficiary, indx })
    }
    RenderBeneficiaryList() {

        return <Card>
            <CardHeader style={{ borderBottomColor: '#ffa500', borderBottomWidth: '2px' }}>
                <strong>{this.props.moneyTransfer.customerMobileNo}'s</strong>
                <small> <i>Saved Beneficiaries</i></small>
            </CardHeader>
            <CardBody>
                <ListGroup style={{
                    maxHeight: 'calc(100vh - 300px)',
                    overflowY: 'auto'
                }}>
                    {this.props.moneyTransfer.benificiaries.length > 0 ?

                        this.props.moneyTransfer.benificiaries.map((benificiary, i) => (

                            <ListGroupItem key={i} style={{ paddingBottom: 0, fontSize: '14px' }}
                                active={this.props.moneyTransfer.selectedBeneficiaryIndex == i ? true : false}
                                action onClick={() => {
                                    this.Child_Transfer_Benef_Click(benificiary, i);

                                }
                                }>
                                {/* <ListGroupItemHeading><strong>{benificiary.accountHolder}</strong></ListGroupItemHeading> */}
                                <ListGroupItemText>
                                    <strong>{benificiary.accountHolder}</strong>  {benificiary.accountNo} | {benificiary.bankName}  | {benificiary.accountMobile}
                                    {this.TrasferModeUI(benificiary, i)}
                                </ListGroupItemText>
                            </ListGroupItem>
                        ))
                        : <ListGroupItem style={{ paddingBottom: 0, fontSize: '14px' }} disabled={true}>
                            <ListGroupItemText>
                                <strong>No Beneficiaries found</strong>
                            </ListGroupItemText>
                        </ListGroupItem>
                    }
                </ListGroup>
            </CardBody>
        </Card >

    }

    TrasferModeUI(beni, indx) {

        if (this.props.moneyTransfer.processTransfer.beneficiary != null) {
            if (this.props.moneyTransfer.processTransfer.beneficiary.accountNo === beni.accountNo && this.props.moneyTransfer.selectedBeneficiaryIndex === indx) {

                return <FormGroup>

                    <Col>
                        <FormGroup check inline>
                            <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                            <Label className="form-check-label" check htmlFor="inline-radio1"
                                style={{ fontWeight: '200', fontSize: '18px' }}>IMPS</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                            <Label className="form-check-label" check htmlFor="inline-radio2"
                                style={{ fontWeight: '200', fontSize: '18px' }}>NEFT</Label>
                        </FormGroup>
                        <FormGroup check inline>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-rupee"></i>
                                    </span>
                                </div>
                                <Input ref={el => this.transferAmount = el}
                                    type="text"
                                    onChange={(e) => {
                                        let value = e.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (value == '' || re.test(value)) {
                                            this.props.MoneyTransferAmount_Changed(e.target.value)
                                        }
                                    }}
                                    id="transferAmount" maxLength={7}
                                    value={this.props.moneyTransfer.processTransfer.transferAmount}
                                    onPasteCapture={(e) => e.preventDefault()}
                                    placeholder="eg: 15000" />
                                {/* <FormText hidden={this.state.mobileNoValidation.length < 1}
                                            color="red"> {this.state.mobileNoValidation} </FormText> */}
                            </InputGroup>

                            <FormGroup style={{ marginLeft: 10 }} check inline>
                                <Button
                                    onClick={() => this.TransferAmount()}
                                    color="warning">Transfer</Button>
                            </FormGroup>
                            <FormGroup check inline>
                                <Button
                                    style={{ backgroundColor: '#e68d4c' }}
                                    onClick={() => this.ScheduleMoneyTransfer()}
                                    color="warning">Schedule</Button>
                            </FormGroup>
                        </FormGroup>
                    </Col>
                </FormGroup>

            } else return null;
        } else return null

    }

    focusField(fieldValue) {
        if (fieldValue === undefined) {
            return '';
        }
        else {
            return 'is-invalid'
        }
    }

    renderConfirmTransactionDetails(isScheduled) {
        if (this.props.moneyTransfer.processTransfer.beneficiary != null) {
            const details = <Col>
                < FormGroup row>
                    <Col>
                        <Label>Bene. Name</Label>
                    </Col>
                    <Col>
                        <Label><strong>{this.props.moneyTransfer.processTransfer.beneficiary.accountHolder}</strong></Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>Bene. Bank</Label>
                    </Col>
                    <Col>
                        <Label><strong>{this.props.moneyTransfer.processTransfer.beneficiary.bankName}</strong></Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>Bene. Bank IFSC</Label>
                    </Col>
                    <Col>
                        <Label><strong>{this.props.moneyTransfer.processTransfer.beneficiary.ifsc}</strong> </Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>Bene. Account number</Label>
                    </Col>
                    <Col>
                        <Label><strong>{this.props.moneyTransfer.processTransfer.beneficiary.accountNo}</strong> </Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label>Transfer Amount</Label>
                    </Col>
                    <Col>
                        <Label><strong>{this.props.moneyTransfer.processTransfer.transferAmount}</strong></Label>
                    </Col>
                </FormGroup>
            </Col>
            if (isScheduled) {
                return <div>
                    {details}
                    <Col>
                        <FormGroup row>
                            <Col>
                                <Label><strong>Transfer Scheduled Date</strong></Label>
                            </Col>
                            <Col>
                                <Label>{this.state.date}</Label>
                            </Col>
                        </FormGroup>
                    </Col>
                </div>
            } else {
                return <div>
                    {details}
                </div>
            }
        }
    }
    render() {
        console.log('======== Customer Beneficiary After Change The Conditions  ========');
        console.log("  >  >  >   >  >  >   >  >  >   >  >  >   >  >  > selected benificiary values is:   >  >  >   >  >  >   >  >  >   >  >  >");
        console.log(this.props.moneyTransfer.processTransfer.beneficiary);
        console.log(this.props.moneyTransfer.selectedBeneficiaryIndex);
        // this.checkToEnableAddBenEficiary()
        return (
            <Row  >
                <Col xs="12" md="6">
                    <Card disabled={true} >
                        <CardHeader style={{ borderBottomColor: '#ffa500', borderBottomWidth: '2px' }}>
                            <strong>Beneficiary Details</strong>
                        </CardHeader>
                        <CardBody>

                            <FormGroup row>
                                <Col md="5">
                                    <Label style={{ verticalAlign: 'sub' }}
                                        htmlFor="inputACHolderName"> Bene Name</Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input bsSize="sm"
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


                            <FormGroup row>
                                <Col md="5">
                                    <Label htmlFor="selectName"> Bene Bank Name</Label>
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
                            </FormGroup>
                            <FormGroup row>
                                <Col md="5">
                                    <Label style={{ verticalAlign: 'sub' }}
                                        htmlFor="inputBankIFSC"> Bene Bank IFSC Code</Label>
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

                                        <div className="input-group-prepend" style={{ cursor: 'pointer' }} onClick={() => this.ToggleBankIFSCSearch()} >
                                            <span className="input-group-text">
                                                <i className="fa fa-search"></i>
                                            </span>
                                        </div>
                                        <FormText color="red"> {this.state.Errors["ifsc"]} </FormText>
                                    </InputGroup>
                                </Col>
                            </FormGroup>







                            {/* <FormGroup row>
                                <Col md="5">
                                    <Label style={{ verticalAlign: 'sub' }}
                                        htmlFor="inputBeneRelationship"> Bene Relationship<br /><span className="text-muted">(optional)</span></Label>
                                </Col>
                                <Col xs="12" md="7">
                                    <Input bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'Relationship'
                                            let value = e.target.value;
                                            this.props.onBeneficiaryEdit({ field, value })
                                        }}
                                        type="text" id="inputBeneRelationship" placeholder="Name"
                                        // className={this.focusField(this.state.Errors["relationship"])}
                                        onPasteCapture={(e) => e.preventDefault()} />
                                    <FormText color="red"> {this.state.Errors["relationship"]} </FormText> 
                                </Col>
                            </FormGroup> */}
                            <FormGroup row>
                                <Col md="5">
                                    <Label style={{ verticalAlign: 'sub' }}
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
                                    <Label style={{ verticalAlign: 'sub' }}
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
                                    <Label style={{ verticalAlign: 'sub' }}
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


                            <FormGroup>

                                <Row>
                                    <Col md="6">

                                    </Col>
                                    <Col md="3">
                                        <Button
                                            onClick={() => this.SaveBeneficiary()}
                                            color="success">Val Beneficiary</Button>
                                    </Col>
                                    <Col md="3">
                                        <Button
                                            style={{ backgroundColor: '#e68d4c' }}
                                            onClick={() => this.SaveBeneficiary()}
                                            color="success">Add Beneficiary</Button>
                                    </Col>

                                </Row>

                            </FormGroup>

                        </CardBody>
                    </Card>

                </Col>
                <Col xs="12" md="6">
                    <Row style={{ height: '55%' }}>
                        <Col xs="12" style={{
                            borderLeft: '1px solid orange'
                        }}>

                            {this.RenderBeneficiaryList()}

                        </Col>
                    </Row>
                    <Row style={{ paddingBottom: 45, height: 250 }}>
                        <Col xs="12" md="12" style={{
                            borderLeft: '1px solid orange'
                        }}>

                            {/*  <Card>   
                                <CardHeader style={{ borderBottomColor: '#ffa500', borderBottomWidth: '2px' }}>
                                    <strong>Trasaction Details</strong>
                                </CardHeader>

                                <CardBody>

                                    <FormGroup>
                                        <Col>
                                            <Label>Transfer Mode</Label>
                                        </Col>
                                        <Col>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                                <Label className="form-check-label" check htmlFor="inline-radio1"
                                                    style={{ fontWeight: '600', fontSize: '18px' }}>IMPS</Label>
                                            </FormGroup>
                                            <FormGroup check inline>
                                                <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                                <Label className="form-check-label" check htmlFor="inline-radio2"
                                                    style={{ fontWeight: '600', fontSize: '18px' }}>NEFT</Label>
                                            </FormGroup>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup>
                                        <Col>
                                            <Label>Transfer Amount</Label>
                                        </Col>
                                        <Row>
                                            <Col md="6">
                                                <InputGroup>
                                                    <div className="input-group-prepend">
                                                        <span className="input-group-text">
                                                            <i className="fa fa-rupee"></i>
                                                        </span>
                                                    </div>
                                                    <Input ref={el => this.transferAmount = el}
                                                        type="text"
                                                        onChange={(e) => {
                                                            let value = e.target.value;
                                                            const re = /^[0-9\b]+$/;
                                                            if (value == '' || re.test(value)) {
                                                                this.props.MoneyTransferAmount_Changed(e.target.value)
                                                            }
                                                        }}
                                                        id="transferAmount" maxLength={7}
                                                        value={this.props.moneyTransfer.processTransfer.transferAmount}
                                                        onPasteCapture={(e) => e.preventDefault()}
                                                        placeholder="eg: 15000" />
                                                    // <FormText hidden={this.state.mobileNoValidation.length < 1}
                                           // color="red"> {this.state.mobileNoValidation} </FormText> 
                                                </InputGroup>
                                            </Col>
                                            <Col md="3">
                                                <Button
                                                    onClick={() => this.TransferAmount()}
                                                    color="warning">Transfer</Button>
                                            </Col>
                                            <Col md="3">
                                                <Button
                                                    style={{ backgroundColor: '#e68d4c' }}
                                                    onClick={() => this.ScheduleMoneyTransfer()}
                                                    color="warning">Schedule</Button>
                                            </Col>

                                        </Row>

                                    </FormGroup>
                                </CardBody>
                            </Card> */}
                        </Col>
                    </Row>
                </Col>

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

                {/* <Modal isOpen={this.state.displayValidateModal} className={'modal-warning ' + this.props.className} >
                    <ModalHeader>Select</ModalHeader>
                    <ModalBody>
                        <Col>
                            <FormGroup check inline onClick={() => {
                                let checkChanged = this.state.isValidBeneCheck;
                                this.setState({ isValidBeneCheck: !checkChanged })
                            }}>
                                <Input className="form-check-input" type="checkbox" id="inline-checkbox1" name="inline-checkbox1"
                                    value="option1"
                                //checked={this.togglePermission(module.permissions, i, 1)}
                                />
                                <Label className="form-check-label" check htmlFor="inline-checkbox1"> A Charge of <strong>₹4/-</strong> will be applicable on validation of the beneficiary</Label>
                            </FormGroup>

                        </Col>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="danger" onClick={() => this.ValidateBeneficiary()}>Add Bene</Button>
                        <Button color="danger" onClick={() => this.ValidateBeneficiary()}>Cancel</Button>
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

                <Modal isOpen={this.state.displayTransferModal} className={'modal-warning ' + this.props.className} >
                    <ModalHeader>Transaction Details</ModalHeader>

                    <ModalBody>
                        {this.renderConfirmTransactionDetails()}
                    </ModalBody>

                    < ModalFooter >
                        <Button color="success" onClick={() => this.TransferAmount()}>Proceed</Button>
                        <Button color="danger" onClick={() => this.TransferAmount()}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.displaySchedulerModal} className={'modal-warning ' + this.props.className} >
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
                                    // isOutsideRange={day => (moment().diff(day) < 0)}
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
                        <Button color="danger" onClick={() => this.ScheduleMoneyTransfer()}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </Row >
        )
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
}

const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { moneyTransfer, benificiaryDetails } = bankManagement;

    const { LoginDetails, userRoleModulePermissions } = Authentication;

    return {
        moneyTransfer, benificiaryDetails,
        LoginDetails, userRoleModulePermissions
    };
};

export default connect(mapStateToProps, {
    getBankDetails, onBeneficiaryEdit, SaveBeneficiary, ProcessMoneyTransfer, MoneyTransferAmount_Changed
})(CustomerBeneficiary);

