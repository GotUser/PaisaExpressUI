import React, { Component } from 'react';
import { Row, Col, Button, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
var moment = require('moment');
import '../../../../../public/CustomStyles.css';
// var Datetime=require('react-datetime');
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import {
    SaveCustomerMobileNumber, SaveCustomerInfo, WarningsOnSaveCustomerInfo, RegisterCustomerInformation, UpdateCustomerInformation, WarningsOnCustomerIPDetails,
    GetCustomerTemplate, BackToDisplayCustomer, ResetCustomerDetails
} from '../../BankManagementAction';
import { ButtonStyle, ButtonStyle2, toTitleCase } from '../../../../GlobalVars';
import { FullNameRegex } from '../../../AllRegexFormats';

class CustomerRegForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: '',
            startDate: moment(),
            resetStartDate: false,
        };
        this.SaveCustomerDetails = this.SaveCustomerDetails.bind(this);
        this.SaveDOB = this.SaveDOB.bind(this);
    }
    componentWillMount() {
        this.props.MTcustomer.CustomerDetails.fullName="";
        let accessToken = this.props.LoginDetails.accessToken;
        // this.props.GetCustomerTemplate(accessToken);
    }



    SaveDOB(date) {
        console.log(" DOB IS /  /    /  / / / / /  ");
        console.log(date);
        let DOB = date.format("YYYY/MM/DD");
        console.log(" After Conver Date Format On Selection : ");
        console.log(DOB);
        this.setState({
            startDate: DOB,
            resetStartDate: false
        });
        this.props.SaveCustomerInfo(DOB, 'dateOfBirth');
    }

    returnDOBFormatForDatePicker(DOB) {
        if (DOB !== undefined && DOB != "") {
            console.log(" returnDOBFormatForDatePicker IN Component Render. . . . . . . . .. . .. . ..  .. . ");
            console.log(DOB);
            const str = DOB;
            const splitted = str.split("T");   // Initial DOB Contains Extraaa String Also (When its from Server)
            const SplitResult = splitted[0];
            let newstr = SplitResult.replace('-', "/");
            newstr = newstr.replace('-', "/");                      // Replace Has to DOne Twice 
            console.log(" DATA BEFORE SEND TO NEW STRNG ");
            console.log(newstr);
            return newstr;
        } else return moment();
    }

    render() {
        let EkycList = this.props.MTcustomer.CustomerDetails.ekycTypes;
       
        // const DOBis = this.returnDOBFormatForDatePicker(this.props.MTcustomer.CustomerDetails.dateOfBirth)     // Set DOB As react-datepicker Understandable Format. 
        return (
            <Col style={
                this.props.MTcustomer.NavigatePages.editingCustomerInfo ? { background: "white", padding: 10, marginBottom: 10 }
                    :
                    { background: "lightgray", border: "1px solid lightgray", padding: 10, borderRadius: 20, margin: 10 }}>
                <Row style={{}}>
                    <Col>
                        <Row style={{ height: 75 }}>
                            <Col xs="12" lg="4" style={{ textAlign: "left", padding: 20 }}>
                                <Label>Mobile Number  {RequireIconForIpFiled()}</Label>
                                <br />
                                <Input placeholder="+91 9735629012"
                                    value={this.props.MTcustomer.customerMobile}
                                    maxLength={10}
                                    onChange={(e) => {
                                        const re = /^[0-9\b]+$/;
                                        if (e.target.value == '' || re.test(e.target.value)) {
                                            let mobileNo = e.target.value;
                                            this.props.SaveCustomerMobileNumber(mobileNo, "mobileNo");
                                        }
                                    }
                                    }></Input>
                                <FormText color="red">{this.props.MTcustomer.WarnsOnCustomerDetails.customerMobile}</FormText>
                            </Col>

                            <Col xs="12" lg="3" style={{ textAlign: "left", padding: 20 }}>

                                <Label>Date of Birth  </Label>
                                <br />
                                <DatePicker
                                    selected={this.props.MTcustomer.NavigatePages.editingCustomerInfo ?
                                        moment(this.props.MTcustomer.CustomerDetails.dateOfBirth)
                                        :
                                        this.state.resetStartDate ? moment() : moment(this.state.startDate)
                                    }
                                    // selected={moment(DOBis)}
                                    onChange={this.SaveDOB}
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    // openToDate={moment("1993/09/28")}
                                    dropdownMode="select"
                                    maxDate={moment()}
                                    placeholderText="Pick the date "
                                />
                                <FormText color="red">{this.props.MTcustomer.WarnsOnCustomerDetails.age}</FormText>
                            </Col>

                            <Col xs="12" lg="4" style={{ textAlign: "left", padding: 20 }}>
                                <Label>KYC Type  </Label>
                                <br />
                                <Input
                                    value={this.props.MTcustomer.CustomerDetails.ekyc === undefined ? null :
                                        this.props.MTcustomer.CustomerDetails.ekyc.key}
                                    onChange={(txt) => {
                                        console.log(txt.target.value);
                                        this.props.SaveCustomerInfo(txt.target.value, 'kyckey');
                                    }}
                                    type="select">
                                    <option>Select KYC type</option>
                                    {EkycList === undefined ? null :
                                        EkycList.map(function (item, i) {
                                            return <option key={i} value={item.key}>{item.value}</option>
                                        })}

                                </Input>
                                <FormText color="red">{this.props.MTcustomer.WarnsOnCustomerDetails.kyckey}</FormText>
                            </Col>
                        </Row>

                        <Row style={{ height: 75 }}>
                            <Col xs="12" lg="4" style={{ textAlign: "left", padding: 20 }}>

                                <Label>Name of the Customer {RequireIconForIpFiled()}</Label>
                                <br />
                                <Input placeholder="Enter full name "
                                    value={this.props.MTcustomer.CustomerDetails.fullName}
                                    onChange={(txt) => {
                                        let Val = txt.target.value;
                                        if (Val === '' || Val.match(FullNameRegex)) {
                                            this.props.SaveCustomerInfo(Val, 'fullName');
                                        } else this.props.WarningsOnCustomerIPDetails('Enter Only Letters', 'fullName')
                                    }}
                                ></Input>
                                <FormText color="red">{this.props.MTcustomer.WarnsOnCustomerDetails.fullName}</FormText>
                            </Col>

                            <Col xs="12" lg="3" style={{ textAlign: "left", padding: 20 }}>

                                <Label>Gender  </Label>
                                <br />
                                <ButtonGroup size="lg">
                                    <Button style={{ height: 35, width: 65, marginRight: 20 }}
                                        onClick={() => this.props.SaveCustomerInfo('male', 'gender')}
                                        color={this.props.MTcustomer.CustomerDetails.gender === 'male' ? 'blue' : null}
                                    >Male </Button>

                                    <Button style={{ height: 35, width: 65 }}
                                        onClick={() => this.props.SaveCustomerInfo('female', 'gender')}
                                        color={this.props.MTcustomer.CustomerDetails.gender === 'female' ? 'blue' : null}
                                    >Female</Button>
                                </ButtonGroup>
                                <FormText color="red">{this.props.MTcustomer.WarnsOnCustomerDetails.gender}</FormText>
                            </Col>

                            <Col xs="12" lg="4" style={{ textAlign: "left", padding: 20 }}>

                                <Label>
                                    {/* {                                    this.props.MTcustomer.CustomerDetails.kycType !== undefined ?
                                    EkycList.map(function (item, index) {
                                        if (item.key == this.props.MTcustomer.CustomerDetails.kycType) {
                                            return item.value + " Number"
                                        }
                                    })
                                    : "Reference Number"}  */}
                                    Ekyc Reference Number </Label>
                                <br />
                                <Input
                                    placeholder="Enter number"
                                    value={this.props.MTcustomer.CustomerDetails.ekyc === undefined ? null :
                                        this.props.MTcustomer.CustomerDetails.ekyc.value}
                                    // disabled={this.props.MTcustomer.CustomerDetails.kycType === undefined}
                                    onChange={(txt) => {
                                        this.props.SaveCustomerInfo(txt.target.value, 'kycvalue');
                                    }}
                                ></Input>
                                <FormText color="red">{this.props.MTcustomer.WarnsOnCustomerDetails.kycvalue}</FormText>
                            </Col>
                        </Row>
                    </Col>

                    <Col xs="12" lg="3" style={{ marginTop: 19 }} >
                        <Label>Address</Label>
                        <br />
                        <Input placeholder="Enter address "
                            type="textarea"
                            value={this.props.MTcustomer.CustomerDetails.address}
                            onChange={(txt) => {
                                let Val = txt.target.value;
                                this.props.SaveCustomerInfo(Val, 'address');
                            }}
                            style={{ height: "100%" }}
                        ></Input>
                        <FormText color="red">{this.props.MTcustomer.WarnsOnCustomerDetails.address}</FormText>
                    </Col>
                </Row>

                <Row style={{ justifyContent: "center", padding: 30 }}>

                    <div style={{}}>
                        <button
                            class="buttonStyle Submit"
                            onClick={this.SaveCustomerDetails}
                        >Save </button>
                    </div>

                    <div style={{}}>
                        {this.props.MTcustomer.NavigatePages.editingCustomerInfo ?
                            <button
                                class="buttonStyle special"
                                onClick={() => this.props.BackToDisplayCustomer()}
                            >Back </button>
                            :
                            <button class="buttonStyle special"
                                onClick={() => this.resetButtonClicked()}
                            >Reset </button>
                        }
                    </div>

                </Row>

            </Col >
        )
    }


    resetButtonClicked() {

        this.setState({ resetStartDate: true });
        this.props.ResetCustomerDetails()


    }
    SaveCustomerDetails() {

        if (this.ValidateCustomerDetails()) {      // Validate Input Values Before Send To The Server 

            let NewUser = this.props.MTcustomer.CustomerDetails;             // take customer detailes in to local let 
            NewUser.mobileNo = this.props.MTcustomer.customerMobile;         // asign mobile number to the object which gonna send

            let AccessToken = this.props.LoginDetails.accessToken;

            NewUser.ekyc.key = parseInt(NewUser.ekyc.key);  // Parsing Ekyc key To Integer Type.

            let DobYear = NewUser.dateOfBirth.substring(0, 4);
            let DobMonth = NewUser.dateOfBirth.substring(5, 7);
            let DobDate = NewUser.dateOfBirth.substring(8, 10);

            NewUser.dateOfBirth = DobDate + '/' + DobMonth + '/' + DobYear; // Setting DOB Format as server required.

            if (this.props.MTcustomer.NavigatePages.editingCustomerInfo) {

                console.log("  NewUser NewUser NewUser NewUser NewUser");
                console.log(NewUser);

                console.log(NewUser.id);
                console.log(NewUser.id === '');
                console.log(NewUser.id === null);
                console.log(NewUser.id === undefined);

                if (NewUser.id === '' || NewUser.id === null || NewUser.id === undefined || NewUser.id == 0) {
                    console.log("  NewUser.idwUser NewUser");
                    console.log(NewUser.id);
                    console.log(this.props.MTcustomer.customerId);

                    NewUser.id = this.props.MTcustomer.customerId;
                }

                console.log(" before send to action menthods . . ..  ");
                console.log(NewUser);

                this.props.UpdateCustomerInformation(AccessToken, NewUser);
            } else {
                this.props.RegisterCustomerInformation(AccessToken, NewUser);
            }
        }
    }
    ValidateCustomerDetails() {
        const Customer = this.props.MTcustomer.CustomerDetails;
        const CustomerMobileNo = this.props.MTcustomer.customerMobile
        let Warnings = {};
        let ReturnVal = true


        let PresentYear = new Date().getFullYear();
        let PresentMonth = new Date().getMonth() + 1;
        let custDOB = this.props.MTcustomer.CustomerDetails.dateOfBirth

        let CustomerDOBYear = parseInt(custDOB.substring(0, 4));
        let CustomerDOBMonth = parseInt(custDOB.substring(5, 7));

        console.log("Customer DOB ");
        console.log(PresentYear);
        console.log(PresentMonth);
        console.log(CustomerDOBYear);
        console.log(CustomerDOBMonth);

        var a = moment([PresentYear, PresentMonth]);
        var b = moment([CustomerDOBYear, CustomerDOBMonth]);
        let CustomerAgeInYears = a.diff(b, 'years');
        console.log(a);
        console.log(b);
        console.log(Math.abs(PresentYear - CustomerDOBYear));
        console.log(" AGE DIFFF / / // / //   ");
        console.log(a.diff(b, 'years'));       // 1
        console.log(a.diff(b, 'years', true)); // 1.75
        let Age = Math.abs(PresentYear - CustomerDOBYear);



        if (Age < 18 || Age > 110) {
            Warnings.age = 'Age  must be greater than 18.';
            ReturnVal = false;
        } else
            if (CustomerMobileNo === '' || CustomerMobileNo === undefined || CustomerMobileNo === null) {
                Warnings.customerMobile = 'Mobile Number Is Required.';
                ReturnVal = false;
            } else if (CustomerMobileNo.length !== 10) {
                Warnings.customerMobile = 'Please Check your mobile Number.';
                ReturnVal = false;
            }

        if (Customer.fullName === '' || Customer.fullName === null || Customer.fullName === undefined) {
            Warnings.fullName = 'Full name is required.';
            ReturnVal = false;
        }
        if (Customer.gender === '' || Customer.gender === null || Customer.gender === undefined) {
            Warnings.gender = 'gender is required.';
            ReturnVal = false;

        }
        if (Customer.address === '' || Customer.address === null || Customer.address === undefined) {
            Warnings.address = 'Full name is required.';
            ReturnVal = false;
        }
        // if (Customer.ekyc.key === '' || Customer.ekyc.key === null || Customer.ekyc.key === undefined) {
        //     Warnings.ekyckey = 'EKYC is required.';
        //     ReturnVal = false;
        // }
        // if (Customer.ekyc.value === '' || Customer.ekyc.value === null || Customer.ekyc.value === undefined) {
        //     Warnings.kycvalue = 'eKYC Info is required.';
        //     ReturnVal = false;
        // }
        if (Customer.dateOfBirth === '' || Customer.dateOfBirth === null || Customer.dateOfBirth === undefined) {
            Warnings.dateOfBirth = 'Please Select Date Of Birth.';
            ReturnVal = false;
        }

        if (Warnings != {}) {
            console.log("  if(Warnings!={}){  if(Warnings!={}){ ");
            this.props.WarningsOnSaveCustomerInfo(Warnings, 'OnFinalValidation');
        }

        return ReturnVal;
    }

}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer } = bankManagement;
    return { LoginDetails, MTcustomer };
};

export default connect(mapStateToProps, {
    ResetCustomerDetails,
    SaveCustomerMobileNumber, SaveCustomerInfo, WarningsOnSaveCustomerInfo, RegisterCustomerInformation, UpdateCustomerInformation, WarningsOnCustomerIPDetails,
    GetCustomerTemplate, BackToDisplayCustomer
})(CustomerRegForm);


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 0, font: "bold" }} > *</span>
}