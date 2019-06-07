import React, { Component } from 'react';
import {
    Badge, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Button, ButtonDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody,
    Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon,
    InputGroupButton,
} from 'reactstrap';
import classnames from 'classnames';
import {
    StoreSelectedBankInReducer, 
    SaveBeneficiary, OtherBankDetailsButtonAction,
    StoreOtherBankDetailsAction
} from
    '../Transactions/TransactionsAction'

import {
    tempSaveBenefeciary
} from '../BankManagement/BankManagementAction'
import { connect } from 'react-redux';

class BenificiaryBank extends Component {

    constructor(props) {
        super(props);

        this.StoreselectedBank = this.StoreselectedBank.bind(this);
        this.StoreselectedState = this.StoreselectedState.bind(this);
        this.StoreselectedBranch = this.StoreselectedBranch.bind(this);

        // this.StoreOtherBankDetails = this.StoreOtherBankDetails.bind(this);
        this.OtherBankDetailsButton = this.OtherBankDetailsButton.bind(this);

        this.state = {
            OtherBankField: false,
            isModified: ''
        };

    }

    // STORING SELECTED BANK NAME
    StoreselectedBank(val) {
        const selectedOption = val.target.value;
        console.log("selectbank is " + val.target.value);

        const field = 'bankName'
        console.log(" Bank Name IN Component:" + selectedOption);

        this.props.StoreSelectedBankInReducer({ selectedOption, field });
    }

    // STORING SELECTED BANK STATE

    StoreselectedState(val) {

        const selectedOption = val.target.value;

        const field = 'bankState'
        console.log(" Bank Name IN Component:" + selectedOption);

        this.props.StoreSelectedBankInReducer({ selectedOption, field });

    }

    // STORING SELECTED BANK BRANCH
    StoreselectedBranch(val) {

        const selectedOption = val.target.value;
        const field = 'bankBranch'
        console.log(" Bank Name IN Component:" + selectedOption);

        this.props.StoreSelectedBankInReducer({ selectedOption, field });

    }

    SaveBeneficiary() {
        console.log(inputMobileNo.value.length)
        console.log(" All Values");

        console.log(inputbankAddress.value);

        const ACHolderName = inputACHolderName.value;
        const MobileNO = inputMobileNo.value;
        const IFSCCode = inputIFSC.value;
        const BankName = selectbank.value;
        const BankState = selectState.value;
        //const BankDistrict = selectDistrict.value;
        const BankDistrict = '';
        const BankBranch = selectBranch.value;
        const BankAddress = inputbankAddress.value;
        const AccountNumber = this.props.addBankDetailsComponent.accountNumber;


        this.props.SaveBeneficiary({ ACHolderName, MobileNO, IFSCCode, BankName, BankState, BankDistrict, BankBranch, BankAddress });
        let beneficiary = {
            accountNo: AccountNumber,
            bankName: selectbank.value,
            ifsc: inputIFSC.value,
            accountMobile: inputMobileNo.value,
            accountHolder: inputACHolderName.value
        }

        let benfList = this.props.moneyTransfer.benificiaries;
        this.props.tempSaveBenefeciary({
            beneficiary,
            benfList
        })
        console.log(" Clicked on SaveBankDetailsButton ");
    }

    // resetForm() {
    //     console.log(" resetForm");
    //     if (this.props.addBankDetailsComponent.saveBankDetailsSuccessFully) {
    //         document.getElementById("create-course-form").reset();
    //     }
    // }

    OtherBankDetailsButton(From) {
        // if (From === 'BankName')
        //     this.setState({ OtherBankField: !this.state.OtherBankField });
        // else if (From === 'BankBranch') {
        // console.log(" Bank ? :" );
        console.log(" Bank ? :" + From);
        // }

        this.props.OtherBankDetailsButtonAction(From);

    }

    render() {

        // { this.resetForm() }
        console.log('---------------- RENDER  BENEFICIARY --------------------------')
        console.log(this.props)
        return (
            <Row>
                <Col xs="12">
                    <Card>
                        <CardHeader>
                            <strong>Fill Bank Details</strong>
                        </CardHeader>
                        {/* <text  style={{ alignContent: 'center', alignSelf: 'center', color: 'red' }}>  Please Fill All Details </text> */}
                        <CardBody>
                            <Col xs="12" md="8">
                                <Form id="create-course-form" action="" method="post"
                                    encType="multipart/form-data" className="form-horizontal">

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="inputACHolderName"> A/C Holder Name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input
                                                ref={el => this.inputACHolderName = el}
                                                type="text" id="inputACHolderName" placeholder="Enter Name" />
                                            {/* <FormText hidden={!this.props.addBankDetailsComponent.ACHolderNameFieldEmpty}
                                                color="red"> Please Enter A/c Holder Name </FormText> */}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label max={10} htmlFor="inputMobileNo">Mobile NO</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input maxLength={10} id="inputMobileNo" placeholder="Enter Mobile Number" />
                                            {/* <FormText hidden={!this.props.addBankDetailsComponent.MobileNoFieldEmpty} color="red"> Please Enter Mobile Number </FormText> */}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label max={10} htmlFor="inputAccountNo">Account Number</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input id="inputAccountNo"
                                                onChange={(e) => {

                                                    this.props.addBankDetailsComponent.accountNumber = e.target.value
                                                    this.setState({
                                                        isModified: e.target.value
                                                    })
                                                }}
                                                placeholder="Account Number"
                                                value={this.props.addBankDetailsComponent.accountNumber} />
                                            {/* <FormText hidden={!this.props.addBankDetailsComponent.accountNumber} color="red"> Please Enter Mobile Number </FormText> */}
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label max={10} htmlFor="inputConfirmAccount">Confirm Account Number</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input id="inputConfirmAccount"
                                                ref={el => this.inputConfirmAccountNumber = el}
                                                placeholder="Confirm Account Number"
                                                type="password"
                                                value={this.props.addBankDetailsComponent.confirmAccountNumber} />
                                            <FormText color="red"> Please Enter Mobile Number </FormText>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectbank">Bank Name</Label>
                                        </Col>
                                        <Col xs="10" md="7">
                                            <Input
                                                disabled={this.props.addBankDetailsComponent.disableSelectBankNameField}
                                                onChange={this.StoreselectedBank}
                                                type="select" id="selectbank">
                                                <option
                                                    disabled={this.props.addBankDetailsComponent.dissableSelectHintforBank}
                                                    value="0">Select Bank Name</option>
                                                {this.props.addBankDetailsComponent.bankList.map((bankName) => <option key={bankName} >
                                                    {bankName}</option>)}

                                            </Input>
                                        </Col>

                                        <Col xs="12" md="2">
                                            <Button onClick={() => this.OtherBankDetailsButton('BankName')} > Other </Button>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup style={{ marginTop: -10 }} row>
                                        <Col md="3">

                                        </Col>
                                        <Col xs="12" md="7">
                                            <Collapse
                                                isOpen={this.props.addBankDetailsComponent.OtherBankNameField}
                                            // isOpen={true}
                                            >
                                                <Input
                                                    onChangeCapture={(evt) => {
                                                        console.log(evt.target.value);
                                                        const val = evt.target.value;
                                                        const field = 'BankName';
                                                        this.props.StoreOtherBankDetailsAction({ val, field });
                                                    }}
                                                    placeholder="Enter Bank Name"
                                                    type="text" id="selectbank">

                                                </Input>
                                            </Collapse>

                                        </Col>
                                    </FormGroup>


                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectState">Bank State</Label>
                                        </Col>
                                        <Col xs="10" md="7">
                                            <Input
                                                disabled={!this.props.addBankDetailsComponent.dissableSelectHintforBank ||
                                                    this.props.addBankDetailsComponent.disableSelectBankStateField}
                                                // disabled={this.props.addBankDetailsComponent.selectedBankName.length > 0 ? true : false}
                                                onChange={this.StoreselectedState}
                                                type="select" name="selectState" id="selectState">
                                                <option
                                                    disabled={this.props.addBankDetailsComponent.dissableSelectHintforState}
                                                    value="0">Select Bank State </option>
                                                {this.props.addBankDetailsComponent.bankStates.map((bankState) => <option key={bankState} >
                                                    {bankState}</option>)}

                                            </Input>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <Button
                                                disabled={!this.props.addBankDetailsComponent.dissableSelectHintforBank}
                                                onClick={() => this.OtherBankDetailsButton('BankState')} > Other </Button>
                                        </Col>
                                    </FormGroup>



                                    <FormGroup style={{ marginTop: -10 }} row>
                                        <Col md="3">

                                        </Col>
                                        <Col xs="12" md="7">
                                            <Collapse
                                                isOpen={this.props.addBankDetailsComponent.OtherBankStateField}
                                            // isOpen={true}
                                            >
                                                <Input
                                                    // disabled={!this.props.addBankDetailsComponent.dissableSelectHintforBank}
                                                    onChangeCapture={(evt) => {
                                                        // this.props.role.roleName = evt.target.value;
                                                        console.log(evt.target.value);
                                                        const val = evt.target.value;
                                                        const field = 'BankState';

                                                        this.props.StoreOtherBankDetailsAction({ val, field });
                                                    }}
                                                    placeholder="Enter Bank State "
                                                    type="text" id="selectState">

                                                </Input>
                                            </Collapse>

                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectBranch"> Bank Branch</Label>
                                        </Col>
                                        <Col xs="10" md="7">
                                            <Input
                                                // disabled={!this.props.addBankDetailsComponent.dissableSelectHintforDistrict}
                                                disabled={!this.props.addBankDetailsComponent.dissableSelectHintforState ||
                                                    this.props.addBankDetailsComponent.disableSelectBankBranchField}
                                                onChange={this.StoreselectedBranch}
                                                type="select" name="selectBranch" id="selectBranch">
                                                <option
                                                    //  disabled={this.props.addBankDetailsComponent.dissableSelectHintforBranch}
                                                    disabled={this.props.addBankDetailsComponent.dissableSelectHintforDistrict}
                                                    value="0"> Select Branch </option>
                                                {this.props.addBankDetailsComponent.bankBranches.map((bankBranch) =>
                                                    <option key={bankBranch}>
                                                        {bankBranch}</option>)}

                                            </Input>
                                        </Col>
                                        <Col xs="12" md="2">
                                            <Button
                                                disabled={!this.props.addBankDetailsComponent.dissableSelectHintforState}
                                                onClick={() => this.OtherBankDetailsButton('BankBranch')} > Other </Button>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup style={{ marginTop: -10 }} row>
                                        <Col md="3">

                                        </Col>
                                        <Col xs="12" md="7">
                                            <Collapse
                                                isOpen={this.props.addBankDetailsComponent.OtherBankBranchField}
                                            // isOpen={true}
                                            >
                                                <Input

                                                    onChangeCapture={(evt) => {
                                                        // this.props.role.roleName = evt.target.value;
                                                        console.log(evt.target.value);
                                                        const val = evt.target.value;
                                                        const field = 'BankBranch';
                                                        this.props.StoreOtherBankDetailsAction({ val, field });
                                                    }}

                                                    placeholder="Enter Bank Branch "
                                                    type="text" id="selectBranch">

                                                </Input>
                                            </Collapse>
                                        </Col>
                                    </FormGroup>



                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="inputIFSC">IFSC Code</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="inputIFSC" placeholder="Enter IFSC Code" />
                                            <FormText hidden={!this.props.addBankDetailsComponent.IFSCFieldEmpty} color="red"> Please Enter IFSC Code </FormText>
                                        </Col>
                                    </FormGroup>


                                    {/* <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="inputbankAddress"> Bank Address</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text" id="inputbankAddress"  placeholder="Enter Bank Addredd" />
                                            <FormText hidden={!this.props.addBankDetailsComponent.BankAddressFieldEmpty} color="red"> Please Enter Bank Address </FormText>
                                        </Col>
                                    </FormGroup> */}

                                    <FormGroup row>
                                        <Col md="3">
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Button
                                                disabled={!this.props.addBankDetailsComponent.dissableSelectHintforBranch}
                                                onClick={() => this.SaveBeneficiary()}
                                                style={{ width: 100 }}
                                                color="secondary">Save</Button>
                                            {/* <Button  size="sm" color="success"><i className="fa fa-dot-circle-o"></i> Submit</Button> */}
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </Col>
                        </CardBody>
                    </Card>

                </Col>
            </Row>
        )
    }
}

const mapStateToProps = ({ transaction, bankManagement }) => {
    const { addBankDetailsComponent } = transaction;
    const { moneyTransfer } = bankManagement;

    return { moneyTransfer, addBankDetailsComponent };
};

export default connect(mapStateToProps, {
    StoreSelectedBankInReducer, SaveBeneficiary, OtherBankDetailsButtonAction,
    StoreOtherBankDetailsAction, tempSaveBenefeciary
})(BenificiaryBank);

