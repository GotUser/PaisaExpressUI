import React, { Component } from 'react';
import { Row, Col, Label, Input, FormText, Modal, ModalBody } from 'reactstrap';

import { connect } from 'react-redux';
import '../../../../../public/CustomStyles.css';

import swal from 'sweetalert';
import 'spinkit/css/spinkit.css';
import {
    ifscSearchModal, GetStatesList, SaveBeneficiaryInfo, WarningsOnBeneficiaryIPDetails,
    RegisterBeneficiaryInformation, ResetAddBeneForm, CloseBeneForm, VerifyBeneBeforeAdd,
    GetBankByIFSC
} from '../../BankManagementAction';


import Search_IFSC_Modal from '../AllChildComponents/Search_IFSC_Modal';

import { FullNameRegex } from '../../../AllRegexFormats';
import { toTitleCase } from '../../../../GlobalVars'

import Bene_Verification_fail from './Bene_Verification_fail_Modal';
import Bene_Verification_Success from './Bene_Verification_Success_Modal';

let Loading = require('../../../../../public/img/loading.gif')

class AddBeneForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focusedInput: '',
        };
        this.SaveBeneDetails = this.SaveBeneDetails.bind(this);
        this.GetStatesOfAbank = this.GetStatesOfAbank.bind(this, 'Parameter');
        // this.ValidateBeneBank = this.ValidateBeneBank.bind(this);
    }


    componentWillMount() {
        // this.props.SaveBeneficiaryInfo("", 'mobileNo');
        this.props.ResetAddBeneForm();
       
    }
componentDidMount(){
    this.props.MTBeneficiary.BeneDetails.mobileNo="";
}

    GetStatesOfAbank(txt, e) {
        // (txt) => {
        console.log(" GetStatesOfAbank(txt)  in Add BENE FORM Component :  ");
        console.log(txt);
        // console.log(e.target.value);
        console.log(e);
        if (e !== undefined) {
            let accessToken = this.props.LoginDetails.accessToken;
            this.props.GetStatesList(accessToken, e.target.value);
        }

        // }
    }

    render() {
        const BeneDetails = this.props.MTBeneficiary.BeneDetails;
        const BankDetails = this.props.MTBeneficiary.BankDetails;
        const BeneWarnings = this.props.MTBeneficiary.warningsOnBeneDetails;
        console.log("BeneWarnings BeneWarningsBeneWarningsBeneWarnings BeneWarningsr . . . . . ..  .. . ");
        console.log(BeneWarnings);
        return (
            <Col style={{ background: "white", padding: 10 }}>
                <Row style={{ borderBottom: "1px solid #dfdfdf" }}>
                    <div style={{ textAlign: "left" }}>
                        <label class="labelStyleHeadings" >Add Benefeciary </label>
                    </div>
                </Row>

                <Row style={{ marginLeft: "10%", height: 75 }}>
                    <div style={{ textAlign: "left", padding: 20 }}>
                        <Label>Name  {RequireIconForIpFiled()}</Label>
                        <br />
                        <Input
                            value={BeneDetails !== undefined ? BeneDetails.fullName : null}
                            onChange={(txt) => {
                                let Val = toTitleCase(txt.target.value);
                                if (Val.match(FullNameRegex) || Val == '') {
                                    this.props.SaveBeneficiaryInfo(Val, 'fullName');
                                } else this.props.WarningsOnBeneficiaryIPDetails('Enter Only Letters', 'fullName')
                            }}
                            placeholder="Srikanth Reddy Marri"></Input>
                        <FormText color="red">{BeneWarnings !== undefined ? BeneWarnings.fullName : null}</FormText>
                    </div>

                    <Col xs="12" lg="3" style={{ textAlign: "left", padding: 20 }}>
                        <Label>Bank {RequireIconForIpFiled()}</Label>
                        <br />
                        <Input
                            value={BankDetails !== undefined ? BankDetails.selectedBankId : null}
                            onChange={this.GetStatesOfAbank}
                            type="select">
                            <option>Select Bank</option>
                            {BeneDetails !== undefined && BeneDetails !== null ?

                                BeneDetails.bankNames.map((bank, i) => {
                                    return <option value={bank.key}>{bank.value}</option>
                                }) : null}
                        </Input>
                        <FormText color="red"> {BeneWarnings !== undefined ? BeneWarnings.bankName : null} </FormText>
                    </Col>

                    <div style={{ textAlign: "left", padding: 20 }}>
                        <Label>AccountNumber {RequireIconForIpFiled()}</Label>
                        <br />
                        <Input
                            value={BeneDetails !== undefined ? BeneDetails.acccountNo : null}
                            type="password"
                            onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value == '' || re.test(e.target.value)) {
                                    let accountNo = e.target.value;
                                    this.props.SaveBeneficiaryInfo(accountNo, 'acccountNo');
                                } else this.props.WarningsOnBeneficiaryIPDetails('Enter Only Numbers', 'acccountNo')
                            }} placeholder=""></Input>
                        <FormText color="red">  {BeneWarnings !== undefined ? BeneWarnings.acccountNo : null}</FormText>
                    </div>
                </Row>


                <Row style={{ marginLeft: "10%" }}>
                    <div style={{ textAlign: "left", padding: 20 }}>
                        <Label>Mobile Number  {RequireIconForIpFiled()}</Label>
                        <br />
                        <Input placeholder="+91 9735629012"
                            value={BeneDetails !== undefined ? BeneDetails.mobileNo : null}
                            maxLength={10}
                            onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value == '' || re.test(e.target.value)) {
                                    let mobileNo = e.target.value;
                                    this.props.SaveBeneficiaryInfo(mobileNo, 'mobileNo');
                                } else this.props.WarningsOnBeneficiaryIPDetails('Enter Only Numbers', 'mobileNo')
                            }}                        ></Input>
                        <FormText color="red">{BeneWarnings !== undefined ? BeneWarnings.mobileNo : null}</FormText>
                    </div>

                    <Col xs="12" lg="2" style={{ textAlign: "left", padding: 20 }}>
                        <Label disabled>IFSC Code {RequireIconForIpFiled()}</Label>
                        <br />

                        <Input
                            maxLength={12}
                            value={BeneDetails !== undefined ? BeneDetails.ifsc : null}
                            onChange={(e) => {
                                // console.log( "BeneDetails.ifsc.length"+  BeneDetails.ifsc.length)
                                let IFSCcode = e.target.value;
                                this.props.SaveBeneficiaryInfo(IFSCcode, 'IFSCCode');
                                let AccessToken = this.props.LoginDetails.accessToken;
                                BeneDetails.ifsc.length > 9 ? this.props.GetBankByIFSC(AccessToken, BeneDetails.ifsc) : null
                            }}>
                        </Input>

                        <FormText color="red">
                            {BeneWarnings !== undefined ? BeneWarnings.IFSCCode !== undefined && BeneWarnings.IFSCCode !== '' ? BeneWarnings.IFSCCode : null : null}
                        </FormText>
                        <FormText color="red">
                            {BeneDetails.ifsc == "" ? BeneWarnings !== undefined ? BeneWarnings.IFSC !== undefined && BeneWarnings.IFSC !== '' ? BeneWarnings.IFSC : null : null : null}
                        </FormText>
                        <FormText>
                            {BeneDetails.BranchName != undefined ? '( ' + BankDetails.CityName + ',' + BankDetails.SelectedBankBranch + ' )' : null}
                            {console.log(" / / / //  . . .. . .  " + BankDetails.SelectedBankBranch)}
                        </FormText>
                    </Col>

                    <Col xs="12" lg="1" style={{ marginTop: 53, display: "flex", padding: 0 }}>
                        <a style={{ textDecoration: "underline", color: "#36a9e1", cursor: "pointer" }}
                            onClick={() => {
                                var value = true;
                                this.props.ifscSearchModal({ value });
                            }}>Search</a>

                        {this.props.ProgressIndicator.InProgress ?
                            <div className="sk-three-bounce" style={{ margin: 0, width: 35 }}>
                                <div className="sk-child sk-bounce1" style={{ height: 5, width: 5 }}></div>
                                <div className="sk-child sk-bounce2" style={{ height: 5, width: 5 }}></div>
                                <div className="sk-child sk-bounce3" style={{ height: 5, width: 5 }}></div>
                            </div>
                            :
                            null
                        }
                    </Col >



                    <div style={{ textAlign: "left", padding: 20 }}>
                        <Label> Confirm Account Number {RequireIconForIpFiled()}</Label>
                        <br />
                        <Input
                            value={BeneDetails !== undefined ? BeneDetails.ConfirmaccountNo : null}
                            onChange={(e) => {
                                const re = /^[0-9\b]+$/;
                                if (e.target.value == '' || re.test(e.target.value)) {
                                    let ConfirmaccountNo = e.target.value;
                                    this.props.SaveBeneficiaryInfo(ConfirmaccountNo, 'ConfirmaccountNo');
                                } else this.props.WarningsOnBeneficiaryIPDetails('Enter Only Numbers', 'ConfirmaccountNo')
                            }} placeholder=""></Input>
                        <FormText color="red">{BeneWarnings !== undefined ? BeneWarnings.ConfirmaccountNo : null}</FormText>
                    </div>
                </Row>
                <Row style={{ marginLeft: "14%" }}>
                    <div>
                        <Input type="checkbox" style={{ zoom: 2.5 }}
                            // defaultChecked={BeneDetails.bankAccountVerified}
                            disabled={BeneDetails.bankAccountVerified}
                            checked={BeneDetails.bankAccountVerified}
                            onChange={(txt) => {
                                let CheckValue = !BeneDetails.bankAccountVerified;
                                // this.props.SaveBeneficiaryInfo(CheckValue, 'ValidateCheckBox');
                                this.ValidateBeneBank(BeneDetails)
                            }} className="form-check-input" />
                    </div>
                    <div style={{ marginLeft: "3%" }}>
                        <Label style={{ marginBottom: 0 }} >
                            Validate the beneficiary before adding
                    </Label>
                        <FormText style={{ marginTop: 0 }} >
                            (Charges of RS 4/- is applicable)
                    </FormText>
                    </div>
                </Row>
                <Row style={{ marginLeft: "10%" }}>
                    <Col xs="12" lg="2" style={{ padding: 6 }}>
                        < button
                            class="buttonStyle Submit"
                            onClick={this.SaveBeneDetails}
                        >Add Beneficiary </button>
                    </Col>
                    <Col xs="12" lg="1" style={{ padding: 6 }}>
                        < button
                            onClick={() => this.props.ResetAddBeneForm()}
                            class="buttonStyle special"
                        >Reset </button>
                    </Col>
                    {this.props.MTBeneficiary.BeneList.length === 0 ? null :
                        <Col xs="12" lg="1" style={{ padding: 6 }}>
                            < button
                                onClick={() => this.props.CloseBeneForm()}
                                class="buttonStyle special"
                            >Cancel </button>
                        </Col>}
                </Row>
                <Search_IFSC_Modal GetStatesOfAbank={this.GetStatesOfAbank} />
                <Bene_Verification_Success />
                <Bene_Verification_fail />

                <Modal size="sm" isOpen={this.props.MTBeneficiary.VerifyBene.enableLoading} styel={{ margin: "30% 0%  0% 0%" }}>
                    {/* <ModalBody style={{ height: '5vh', width: '5vh' }}  > */}
                    <div style={{ height: '5vh', width: '5vh' }} >
                        <img style={{ height: '5vh', width: '5vh' }} src={Loading} />
                    </div>
                    {/* </ModalBody> */}
                </Modal>
            </Col >
        )
    }

    ValidateBeneBank(BeneDetails) {

        if (this.ValidateBeneDetails()) {

            let Payload = {
                "AccountNumber": BeneDetails.acccountNo,
                "IFSC": BeneDetails.ifsc,
                "MobileNumber": BeneDetails.mobileNo,
                "Name": BeneDetails.fullName
            }
            let accessToken = this.props.LoginDetails.accessToken;
            this.props.VerifyBeneBeforeAdd(accessToken, Payload);

            //    if( Verification.ErrorCode == 409 ){
            //     swal({
            //         title: "Bene already exists",
            //         buttons: true,
            //       })
            //    }

        }



    }


    SaveBeneDetails() {

        if (this.ValidateBeneDetails()) {      // Validate Input Values Before Send To The Server 

            let NewBene = this.props.MTBeneficiary.BeneDetails;             // take customer detailes in to local let
            let CustomermobileNo = this.props.MTcustomer.customerMobile !== undefined && this.props.MTcustomer.customerMobile !== '' ?
                this.props.MTcustomer.customerMobile : this.props.MTcustomer.ExistingCustomer.mobileNo;                     // asign mobile number to the object which gonna send
            let CustomerId = this.props.MTcustomer.customerId !== undefined && this.props.MTcustomer.customerId !== '' ?
                this.props.MTcustomer.customerId :
                this.props.MTcustomer.ExistingCustomer.id !== undefined && this.props.MTcustomer.ExistingCustomer.id !== '' ?
                    this.props.MTcustomer.ExistingCustomer.id : this.props.MTcustomer.customerId;

            let BeneInfoToSend = {
                CustomerId: CustomerId,
                CustomerMobileNo: CustomermobileNo,
                Beneficiary: {
                    FullName: NewBene.fullName,
                    MobileNo: NewBene.mobileNo,
                    BankId: this.props.MTBeneficiary.BankDetails.selectedBankId,
                    AccountNo: NewBene.acccountNo,
                    IFSC: NewBene.ifsc,
                    VerifyBeneficiary: NewBene.bankAccountVerified
                }
            }


            let AccessToken = this.props.LoginDetails.accessToken;

            console.log(" NewBene NewBene NewBene NewBene NewBene NewBene NewBene :");
            console.log(NewBene);

            this.props.RegisterBeneficiaryInformation(AccessToken, BeneInfoToSend);



        }
    }
    ValidateBeneDetails() {
        const Bene = this.props.MTBeneficiary.BeneDetails;
        const CustomerMobileNo = this.props.MTcustomer.customerMobile
        let Warnings = {};
        let ReturnVal = true

        // if (CustomerMobileNo === '' || CustomerMobileNo === undefined || CustomerMobileNo === null) {
        //     Warnings.customerMobile = 'Mobile Number Is Required.';
        //     ReturnVal = false;
        // } else if (CustomerMobileNo.length !== 10) {
        //     Warnings.customerMobile = 'Please Check your mobile Number.';
        //     ReturnVal = false;
        // }

        if (Bene.fullName === '' || Bene.fullName === null || Bene.fullName === undefined) {
            Warnings.fullName = 'Full name is required.';
            ReturnVal = false;
        }
        if (Bene.mobileNo === '' || Bene.mobileNo === null || Bene.mobileNo === undefined || Bene.mobileNo.length !== 10) {
            Warnings.mobileNo = 'mobileNo is required.';
            ReturnVal = false;

        }
        if (Bene.acccountNo === '' || Bene.acccountNo === null || Bene.acccountNo === undefined) {
            Warnings.acccountNo = 'accountNo is required.';
            ReturnVal = false;
        }
        if (this.props.MTBeneficiary.BankDetails.selectedBankId === '' || this.props.MTBeneficiary.BankDetails.selectedBankId === null ||
            this.props.MTBeneficiary.BankDetails.selectedBankId === undefined) {
            Warnings.bankName = 'Select Bank.';
            ReturnVal = false;

        }
        if (Bene.ifsc === '' || Bene.ifsc === null || Bene.ifsc === undefined) {
            Warnings.ifsc = 'IFSC Code is required.';
            Warnings.IFSC = 'IFSC Code is required.';
            ReturnVal = false;
        }
        if (Bene.ConfirmaccountNo === '' || Bene.ConfirmaccountNo === null || Bene.ConfirmaccountNo === undefined || Bene.ConfirmaccountNo !== Bene.acccountNo) {
            console.log(" Bene.ConfirmaccountNo Bene.ConfirmaccountNo Bene.ConfirmaccountNo");
            console.log(Bene.ConfirmaccountNo);
            console.log(Bene.acccountNo);
            Warnings.ConfirmaccountNo = 'Account Number mismatch.';
            ReturnVal = false;
        }

        let WarnsLength = Object.keys(Warnings).length;

        if (WarnsLength != 0) {
            console.log("  if(Warnings!={}){  if(Warnings!={}){ ");
            this.props.WarningsOnBeneficiaryIPDetails(Warnings, 'OnFinalValidation');
        }

        return ReturnVal;
    }


}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer, MTBeneficiary, ProgressIndicator } = bankManagement;
    return { LoginDetails, MTcustomer, MTBeneficiary, ProgressIndicator };
};

export default connect(mapStateToProps, {
    ifscSearchModal, GetStatesList, SaveBeneficiaryInfo, WarningsOnBeneficiaryIPDetails,
    RegisterBeneficiaryInformation, ResetAddBeneForm, CloseBeneForm, VerifyBeneBeforeAdd,
    GetBankByIFSC
})(AddBeneForm);


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 0, font: "bold" }} > *</span>
}