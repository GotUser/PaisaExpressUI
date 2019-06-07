
import React, { Component } from 'react';
import {
    Col, Card, CardHeader, CardBody, Button,
    Form, FormGroup, FormText, Label, Input,
    // Modal, ModalBody
} from 'reactstrap';

import { connect } from 'react-redux';

import {
    SaveCustomerIPDetails, WarningsOnCustomerIPDetails, SendCustomerInfo, UpdateCustomerInfo, AllowUserTo_EnterCustomer_Details, ResetCustomerDetails, ClearApiResponseOnCust_Details
} from '../BankManagementAction';

import { FullNameRegex,   placeHolderColor } from '../../AllRegexFormats';

import { Labelstyle,} from '../../../GlobalVars';

// First way to import
import { ClipLoader } from 'react-spinners';

import { ModalOnMoneyTransferComp } from '../../GlobalModals';

class MTCustomerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Errors: {},
            date: '',
            loading: true,
            modalIsOpen: false
        }
        this.SaveCustomerDetails = this.SaveCustomerDetails.bind(this);
        // this.afterOpenModal = this.afterOpenModal.bind(this);
        // this.closeModal = this.closeModal.bind(this);

    }

    componentDidUpdate() {


        if (this.props.ApiResponseOnCust_Details.message != '' || this.props.ApiResponseOnCust_Details.Error != '') {

            setTimeout(() => {
                this.props.ClearApiResponseOnCust_Details();
            }, 10000);
        }


    }

    SaveCustomerName(val) {

    }

    focusField(fieldValue) {
        if (fieldValue === undefined) {
            return '';
        }
        else {
            return 'is-invalid'
        }
    }

    render() {

        var field = true;

        return <div style={{ display: 'block' }}> <Card>
            <CardHeader style={{ borderBottomColor: '#ffa500', borderBottomWidth: '2px' }}>
                <strong style={Labelstyle} >Customer Details</strong>
            </CardHeader>
            <span style={{ marginLeft: '2%', marginBottom: '2' }}>  {this.props.ApiResponseOnCust_Details.Error}</span>
            <CardBody>
                <Form  >
                    {/* <fieldset disabled="disabled"> */}

                    <Col xs="12">
                        <Form >
                            <fieldset
                                disabled={!this.props.ApiResponseOnCust_Details.enterCustomerDetails}
                            >
                                <FormGroup row disabled={true}
                                >

                                    <Col md="5"
                                        style={{ marginTop: -15 }}
                                    >
                                        <span style={{ color: placeHolderColor }} class="floating-label" >Customer Name</span>  <i
                                            style={{ marginRight: -5, marginTop: -5, color: 'red' }}
                                        >*</i>
                                        {/* <div class="user-input-wrp"> */}
                                        <Input

                                            placeholder="Enter Customer Full Name"
                                            value={this.props.moneyTransfer.customerDetails.FullName}
                                            onChange={(txt) => {
                                                let Val = txt.target.value;
                                                if (Val.match(FullNameRegex) || Val == '') {
                                                    this.props.SaveCustomerIPDetails(Val, 'FullName');
                                                } else this.props.WarningsOnCustomerIPDetails('Enter Only Letters', 'FullName')
                                            }
                                            }
                                            class="inputText" required

                                        />
                                        {/* <span style={{ color: placeHolderColor }} class="floating-label">Enter Customer Name</span>
                                        </div> */}
                                        <FormText color="red"> {this.props.moneyTransfer.customerDetailsWarning.FullName} </FormText>
                                    </Col>

                                    {/* <Col md="5">
                                        <div class="user-input-wrp">
                                            <Input
                                                value={this.props.moneyTransfer.customerDetails.EmailId}
                                                onChange={(txt) => {
                                                    let Val = txt.target.value;
                                                    if (Val.match(EmailId) || Val == '') {
                                                        this.props.SaveCustomerIPDetails(Val, 'EmailId');
                                                    } else this.props.WarningsOnCustomerIPDetails('Enter Valid Email', 'EmailId')
                                                }
                                                }
                                                class="inputText" required />
                                            <span style={{ color: placeHolderColor }} class="floating-label">Email Id</span>
                                        </div>
                                        <FormText color="red"> {this.props.moneyTransfer.customerDetailsWarning.EmailId} </FormText>
                                    </Col> */}

                                    <Col md="5"
                                        style={{ marginTop: -15 }}
                                    >
                                        <span style={{ color: placeHolderColor }} class="floating-label" >DOB</span>  <i
                                            style={{ marginRight: -5, marginTop: -5, color: 'red' }}
                                        >*</i>
                                        <Input type="date"
                                            value={this.props.moneyTransfer.customerDetails.DOB}
                                            name="date" id="exampleDate"
                                            onChange={
                                                (txt) => {
                                                    console.log(" Date IS : ");
                                                    console.log(txt);
                                                    console.log(txt.target.value);
                                                    let Val = txt.target.value;
                                                    var res = Val.substring(0, 1);
                                                    console.log(res);
                                                    if (res != 0) {
                                                        this.props.SaveCustomerIPDetails(Val, 'DOB');
                                                    } else console.log(" Value is 0");
                                                }
                                            }
                                            placeholder="date placeholder"
                                            title="Date Of Birth"
                                        />
                                        <FormText color="red"> {this.props.moneyTransfer.customerDetailsWarning.DOB} </FormText>
                                    </Col>


                                </FormGroup>

                                <FormGroup row>

                                    {/* <Col md="5" style={{ marginTop: -20 }} >
                                        <span style={{ color: placeHolderColor }} class="floating-label" >DOB</span>
                                        <Input type="date"
                                            value={this.props.moneyTransfer.customerDetails.DOB}
                                            name="date" id="exampleDate"
                                            onChange={
                                                (txt) => {
                                                    console.log(" Date IS : ");
                                                    console.log(txt);
                                                    console.log(txt.target.value);
                                                    let Val = txt.target.value;
                                                    var res = Val.substring(0, 1);
                                                    console.log(res);
                                                    if (res != 0) {
                                                        this.props.SaveCustomerIPDetails(Val, 'DOB');
                                                    } else console.log(" Value is 0");
                                                }
                                            }
                                            placeholder="date placeholder"
                                            title="Date Of Birth"
                                        />
                                    </Col> */}

                                    <Col xs="12" md="7"
                                        style={{ marginTop: -15 }}
                                    >
                                        <span style={{ color: placeHolderColor }} class="floating-label" >Gender</span>  <i
                                            style={{ marginRight: -5, marginTop: -5, color: 'red' }}
                                        >*</i>
                                        <FormGroup check  >
                                            <Label style={{ marginLeft: 25 }} check>
                                                <Input
                                                    checked={this.props.moneyTransfer.customerDetails.gender === 'male'}
                                                    onChange={(gender) => {
                                                        console.log(gender.target.value)
                                                        this.props.SaveCustomerIPDetails('male', 'gender');
                                                    }}
                                                    type="radio" name="gender" />{' '}
                                                Male
                                              </Label>
                                            <Label style={{ marginLeft: 25 }} check>
                                                <Input
                                                    checked={this.props.moneyTransfer.customerDetails.gender === 'female'}
                                                    onChange={(gender) => {
                                                        console.log(gender.target.value)
                                                        this.props.SaveCustomerIPDetails('female', 'gender');
                                                    }}
                                                    type="radio" name="gender" />{' '}
                                                Female
                                              </Label>

                                        </FormGroup>
                                        <FormText color="red"> {this.props.moneyTransfer.customerDetailsWarning.gender} </FormText>
                                    </Col>
                                </FormGroup>

                                <FormGroup row>


                                    <Col xs="12"
                                        style={{ marginTop: -15 }}
                                        md="10">

                                        {/* <div class="user-input-wrp"> */}
                                        <span style={{ color: placeHolderColor }} class="floating-label" >Address</span>   <i
                                            style={{ marginRight: -5, marginTop: -5, color: 'red' }}
                                        >*</i>
                                        <Input
                                            placeholder="Enter customer Address"
                                            value={this.props.moneyTransfer.customerDetails.address}
                                            onChange={(txt) => {
                                                let Val = txt.target.value;
                                                this.props.SaveCustomerIPDetails(Val, 'address');
                                            }
                                            }
                                            class="inputText" required
                                        />
                                        {/* <span style={{ color: placeHolderColor }} class="floating-label">Address</span> */}
                                        {/* </div> */}

                                        <FormText color="red"> {this.props.moneyTransfer.customerDetailsWarning.address} </FormText>

                                    </Col>
                                </FormGroup>


                                <FormGroup row  >

                                    <Col xs="12" md="5"
                                        style={{ marginTop: -15 }}
                                    >
                                        <span style={{ color: placeHolderColor }} class="floating-label" > Kyc Type</span>    <i
                                            style={{ marginRight: -5, marginTop: -5, color: 'red' }}
                                        >*</i>
                                        <Input
                                            type="select" name="selectEKYC" id="selectEKYC"
                                            onChange={(option) => {
                                                let field = 'eKYC'
                                                console.log(option.target.value);
                                                this.props.SaveCustomerIPDetails(option.target.value, 'selectedEKYC');
                                            }}
                                            value={this.props.moneyTransfer.customerDetails.selectedEKYC}
                                            className={this.focusField(this.state.Errors["ekycDDL"])}>
                                            <option
                                                disabled={this.props.moneyTransfer.customerDetails.selectedEKYC !== ''}
                                                value="0"> Select KYC </option>
                                            <option>PAN</option>
                                            <option>AADHAR</option>
                                            <option>DRIVING LICENSE</option>
                                            <option>VOTER ID</option>
                                        </Input>
                                        <FormText color="red"> {this.props.moneyTransfer.customerDetailsWarning.selectedEKYC} </FormText>
                                    </Col>

                                    <Col xs="12" md="5"
                                        style={{ marginTop: -15 }}
                                    >

                                        <span style={{ color: placeHolderColor }} class="floating-label" >EKYC Info</span>    <i
                                            style={{ marginRight: -5, marginTop: -5, color: 'red' }}
                                        >*</i>
                                        {/* <div class="user-input-wrp"> */}
                                        <Input
                                            placeholder={"Enter " + this.props.moneyTransfer.customerDetails.selectedEKYC + " Number"}
                                            disabled={this.props.moneyTransfer.customerDetails.selectedEKYC === '' ||
                                                this.props.moneyTransfer.customerDetails.selectedEKYC === '0'}
                                            value={this.props.moneyTransfer.customerDetails.eKYCInfo}
                                            onChange={(txt) => {
                                                let Val = txt.target.value;
                                                this.props.SaveCustomerIPDetails(Val, 'eKYCInfo');

                                            }
                                            }
                                            class="inputText" required
                                        />
                                        {/* <span style={{ color: placeHolderColor }} class="floating-label">{this.props.moneyTransfer.customerDetails.selectedEKYC + " Number"}</span>
                                        </div> */}
                                        <FormText color="red"> {this.props.moneyTransfer.customerDetailsWarning.eKYCInfo} </FormText>
                                    </Col>
                                </FormGroup>
                            </fieldset>
                        </Form>

                        <FormGroup style={{ marginTop: 10 }} check inline>
                            <FormGroup style={{ marginLeft: 10 }} check inline>
                                <Button
                                    onClick={this.SaveCustomerDetails}
                                    disabled={this.DissableSaveBt() && !this.props.ApiResponseOnCust_Details.enterCustomerDetails}
                                    color="warning">Save</Button>
                            </FormGroup>
                            <FormGroup check inline>
                                <Button
                                    disabled={false}
                                    style={{ backgroundColor: '#e68d4c' }}
                                    onClick={() => this.EditOrResetCustomer()}
                                    color="warning">{this.props.ApiResponseOnCust_Details.getCustomer_Info === 'success' ? "Edit" : "Reset"}</Button>
                            </FormGroup>
                        </FormGroup>
                    </Col>
                </Form>
            </CardBody>
            <span style={{ marginLeft: '2%', marginBottom: '2', color: 'green' }}>  {this.props.ApiResponseOnCust_Details.message}</span>
            {/* <Modal
                isOpen={this.props.ApiResponseOnCust_Details.spinnerOnCustomerInfo}
                style={SpinnerModalStyles}
            >
                <ClipLoader
                    className={SpinnerCss}
                    size={150}
                    color={'#ffa500'}
                    loading={this.props.ApiResponseOnCust_Details.spinnerOnCustomerInfo}
                />

            </Modal> */}
            {ModalOnMoneyTransferComp(this.props.ApiResponseOnCust_Details.spinnerOnCustomerInfo)}
        </Card>
        </div>
    }

    EditOrResetCustomer() {

        if (this.props.ApiResponseOnCust_Details.getCustomer_Info === 'success') {
            this.props.AllowUserTo_EnterCustomer_Details();
        }
        else if (this.props.ApiResponseOnCust_Details.getCustomer_Info === 'fail') {
            this.props.ResetCustomerDetails()
        }

    }
    DissableSaveBt() {
        const Customer = this.props.moneyTransfer.customerDetails;
        if (Customer.FullName !== '' && Customer.DOB !== '' && Customer.gender !== '' &&
            Customer.address !== '' && Customer.selectedEKYC !== '' && Customer.eKYCInfo !== '') {
            return false;
        } else return true;
    }

    SaveCustomerDetails() {

        if (this.ValidateCustomerDetails()) {
            console.log(" Customer Details Are Perfect can store without issues");
            let NewUser = this.props.moneyTransfer.customerDetails;

            const Year = NewUser.DOB.substring(0, 4);
            const Month = NewUser.DOB.substring(5, 7);
            const Date = NewUser.DOB.substring(8, 10);

            const FullDOB = Date + '/' + Month + '/' + Year;

            const CustomerMobileNo = NewUser.mobileNo === '' || NewUser.mobileNo === null || NewUser.mobileNo || undefined ? this.props.moneyTransfer.customerMobileNo : NewUser.mobileNo
            const Customer =
            {
                "FullName": NewUser.FullName,
                "MobileNo": this.props.moneyTransfer.customerMobileNo,
                "DateOfBirth": FullDOB,
                "Gender": NewUser.gender,
                "Address": NewUser.address,
                "EKYC": {
                    "Type": NewUser.selectedEKYC,
                    "Value": NewUser.eKYCInfo
                }
            }

            if (this.props.ApiResponseOnCust_Details.UpdatingCustomer) {
                console.log(" Update Customer Details Is Clicked : ");
                console.log(Customer);
                let AccessToken = this.props.LoginDetails.accessToken;
                this.props.UpdateCustomerInfo(AccessToken, Customer);
            } else {
                console.log(" Adding New Customer SDetails : ");
                console.log(Customer);
                let AccessToken = this.props.LoginDetails.accessToken;
                this.props.SendCustomerInfo(AccessToken, Customer);
            }
        }
    }
    ValidateCustomerDetails() {
        const Customer = this.props.moneyTransfer.customerDetails;
        let Warnings = {};
        let ReturnVal = true
        console.log(" Before Validate customer details :");
        console.log(Customer);
        console.log(Warnings);



        // if (Customer.EmailId != null || Customer.EmailId != '') {

        //     let lastAtPos = Customer.EmailId.lastIndexOf('@');
        //     let lastDotPos = Customer.EmailId.lastIndexOf('.');
        //     var Warnings = {};
        //    
        //     if (!(lastAtPos < lastDotPos && lastAtPos > 0 && Customer.EmailId.indexOf('@@') == -1 && lastDotPos > 2 && (lastDotPos - lastAtPos) > 3 && (Customer.EmailId.length - lastDotPos) > 2)) {
        //         // this.props.WarningsOnCustomerIPDetails('Email Id is not Valid.', 'EmailId')
        //         Warnings.EmailId = 'Email Id is not Valid.';
        //         ReturnVal = false;
        //     }
        // } else {
        //     Warnings.EmailId = 'Email is required.';
        //     ReturnVal = false;
        // }

        if (Customer.FullName === '' || Customer.FullName === null) {
            Warnings.FullName = 'Full name is required.';
            ReturnVal = false;

        }
        if (Customer.gender === '' || Customer.gender === null) {
            Warnings.gender = 'gender is required.';
            ReturnVal = false;

        }
        if (Customer.address === '' || Customer.address === null) {
            Warnings.address = 'Full name is required.';
            ReturnVal = false;
        }
        if (Customer.selectedEKYC === '' || Customer.selectedEKYC === null) {
            Warnings.selectedEKYC = 'EKYC is required.';
            ReturnVal = false;

        }
        if (Customer.eKYCInfo === '' || Customer.eKYCInfo === null) {
            Warnings.eKYCInfo = 'eKYC Info is required.';
            ReturnVal = false;
        }

        console.log(" / / / / / / / / / / / / / / /  //  // / /Warnings at Customer INfo submit:");
        console.log(Warnings);


        if (Warnings != {}) {
            console.log("  if(Warnings!={}){  if(Warnings!={}){ ");
            this.props.WarningsOnCustomerIPDetails(Warnings, 'OnFinalValidation');
        }

        return ReturnVal;
    }
}

const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { moneyTransfer, benificiaryDetails, ApiResponseOnCust_Details

        // enterCustomerDetails: true,
    } = bankManagement;
    const { LoginDetails, userRoleModulePermissions } = Authentication;

    return { moneyTransfer, benificiaryDetails, ApiResponseOnCust_Details, LoginDetails, userRoleModulePermissions };

};

export default connect(mapStateToProps, {
    SaveCustomerIPDetails, WarningsOnCustomerIPDetails,
    SendCustomerInfo, UpdateCustomerInfo, AllowUserTo_EnterCustomer_Details, ResetCustomerDetails, ClearApiResponseOnCust_Details
})(MTCustomerDetails);
