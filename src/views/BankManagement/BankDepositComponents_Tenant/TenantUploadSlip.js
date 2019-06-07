import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, CardHeader,Label, Input, Button, FormText, FormGroup, Form
} from 'reactstrap';


import LaddaButton, {
    EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP
} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';

var moment = require('moment');
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';
import { NumberRegex, FullNameRegex, UrlRegex } from '../../AllRegexFormats';
import { Labelstyle1, InputTextStyle, toTitleCase } from '../../../GlobalVars';

import {
    Save_DepositSlip_Details_Tenant
    , Save_DepositSlip_Details_Tenant_Warnings
    , ResetDepositSlipComp
    , SendSlipDetailsToDB
    , Get_Deposit_Mode_Lists
    , Approve_Tenant_Deposit_Slip
} from '../BankManagementAction'
class TenantUploadSlip extends Component {

    constructor(props) {
        super(props);
        this.state = {

            focusedInput: '',
            startDate: moment(),
            dateOfDeposit: moment(),
            resetStartDate: false,
        };

        this.SaveDate = this.SaveDate.bind(this);
        this.SaveDateOfDeposit = this.SaveDateOfDeposit.bind(this);
    }
    componentWillMount() {

        if (!this.props.DespositSlipComp.isGetDepositedSlipSuccess) {
            this.props.ResetDepositSlipComp();
            let AccessToken = this.props.LoginDetails.accessToken;
            this.props.Get_Deposit_Mode_Lists(AccessToken);
        }
    }
    componentDidUpdate() {
        if (this.props.DespositSlipComp.isSendDepositSuccess) {
            this.props.history.push("/Deposits")
        }
        if (this.props.DespositSlipComp.isApproveDepositSuccess) {
            this.props.history.push("/Deposits")
        }
    }


    SaveDate(date) {
        console.log(" DOB IS /  /    /  / / / / /  ");
        console.log(date);
        let DOB = date.format("YYYY/MM/DD");
        console.log(" After Conver Date Format On Selection : ");
        console.log(DOB);
        this.setState({
            startDate: DOB
        });
        this.props.Save_DepositSlip_Details_Tenant("date", DOB)
    }


    SaveDateOfDeposit(date) {
        let DOB = date.format("YYYY/MM/DD");
        this.setState({
            dateOfDeposit: DOB
        })
        this.props.Save_DepositSlip_Details_Tenant("dateOfDeposit", DOB)
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        let errors = {};
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                // this.props.UserDetails.UserDataEditWarning.profilePicture = "";

                let Image = reader.result.split(',');
                let Base64 = Image[1];
                this.props.Save_DepositSlip_Details_Tenant("slipImage", Base64);
            }
            reader.readAsDataURL(file)
        } else {
            this.props.Save_DepositSlip_Details_Tenant_Warnings("slipImage", "Image type should be either PNG or JPEG")
        }
    }

    SubmitClicked() {

        if (this.handleValidation()) {
            let AccessToken = this.props.LoginDetails.accessToken;
            let DOB = moment().format("YYYY/MM/DD");
            let SlipDetails = this.props.DespositSlipComp.SlipDetails;
            // slipList.splice(0,SlipDetails)
            this.props.SendSlipDetailsToDB("addToList", SlipDetails, AccessToken, DOB)
        }
        // else{
        //     let warning= this.props.DespositSlipComp.SlipDetailsWarnings;
        //     this.props.Save_DepositSlip_Details_Tenant_Warnings( 'Warnings',warning)
        // }
    }


    handleValidation() {

        let formIsValid = true;
        let SlipDetails = this.props.DespositSlipComp.SlipDetails;

        if (SlipDetails.fromName == '') {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('fromName', " Name  required ")
        }


        if (SlipDetails.amount == "") {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('amount', " Amount  required ")
        }



        if (SlipDetails.modeOfDeposit == "") {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('modeOfDeposit', "Mode of deposit  required ")
        }

        if (SlipDetails.modeOfDeposit == "1" || SlipDetails.modeOfDeposit == "2" || SlipDetails.modeOfDeposit == "3") {
            if (SlipDetails.onlineTransfer == "") {
                formIsValid = false;
                this.props.Save_DepositSlip_Details_Tenant_Warnings('onlineTransfer', "online reference number   required ")
            }
        }


        if (SlipDetails.modeOfDeposit == "5" && SlipDetails.referenceNumber == "") {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('refNumber', "reference number  required ")
        }


        if (SlipDetails.modeOfDeposit == "6" && SlipDetails.chequeDetails.number == "") {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('chequeNumber', "Cheque number  required ")
        }



        if (SlipDetails.toBankAccountNo == "") {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('toBankAccountNo', "To bank account number  required ")
        } else if (SlipDetails.toBankAccountNo.length < 11) {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('toBankAccountNo', "Enter a valid  bank account number")
        }

        if (SlipDetails.modeOfDeposit == "4" || SlipDetails.modeOfDeposit == "5" || SlipDetails.modeOfDeposit == "6") {
            if (SlipDetails.slipImage == "") {
                formIsValid = false;
                this.props.Save_DepositSlip_Details_Tenant_Warnings('slipImage', "Slip image  required ")
            }
        }
        return formIsValid;

    }


    render() {
        let warning = this.props.DespositSlipComp.SlipDetailsWarnings;
        let SlipDetails = this.props.DespositSlipComp.SlipDetails;

        return (
            <div className="animated fadeIn" >
                <CustomerBreadCrumb from="UploadSlip" />

                <Row >
                    <Col xs="12" lg="12">
                        <Card style={{ background: "#ffffff", }}>
                            <CardHeader>
                                <h5 className="font-weight-bold"> {this.props.DespositSlipComp.isGetDepositedSlipSuccess ?"View Deposit Slip":" Tenant Upload Slips"}</h5>
                                {/* <Input style={{ height: 33, width: '15%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                            value={this.state.searchingValue}
                                            onChange={this.onChange} /> */}
                            </CardHeader>
                            <CardBody  >
                                <fieldset disabled={this.props.DespositSlipComp.isGetDepositedSlipSuccess}>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">From Name {RequireIconForIpFiled()}</Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input
                                                style={InputTextStyle}
                                                onChange={(txt) => {
                                                    let Value = txt.target.value
                                                    if (Value === '' || Value.match(FullNameRegex)) {
                                                        this.props.Save_DepositSlip_Details_Tenant("fromName", txt.target.value)
                                                    } else {
                                                        this.props.Save_DepositSlip_Details_Tenant_Warnings('fromName', "Enter letters only")
                                                    }

                                                }}
                                                value={this.props.DespositSlipComp.isGetDepositedSlipSuccess ? SlipDetails.tenantName : SlipDetails.fromName}
                                                placeholder='Enter Full Name'
                                            />
                                            <FormText color="red"> {warning.fromNameWarning} </FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">Amount {RequireIconForIpFiled()}</Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input
                                                style={InputTextStyle}
                                                onChange={(txt) => {
                                                    let Value = txt.target.value
                                                    if (Value === '' || Value.match(NumberRegex)) {
                                                        this.props.Save_DepositSlip_Details_Tenant("amount", txt.target.value)
                                                    } else {
                                                        this.props.Save_DepositSlip_Details_Tenant_Warnings('amount', "Enter numbers only")
                                                    }
                                                }}
                                                value={SlipDetails.amount}
                                                placeholder='Enter Amount'
                                            />
                                            <FormText color="red"> {warning.amountWarning} </FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">Mode {RequireIconForIpFiled()}</Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            {!this.props.DespositSlipComp.isGetDepositedSlipSuccess ?
                                                <Input
                                                    value={SlipDetails.modeOfDeposit}
                                                    onChange={(txt) => {
                                                        this.props.Save_DepositSlip_Details_Tenant("modeOfDeposit", txt.target.value)
                                                    }}
                                                    type="select" >
                                                    <option >Select Mode</option>
                                                    {this.props.DespositSlipComp.tenantDepositMode != undefined ?
                                                        (this.props.DespositSlipComp.tenantDepositMode.map((item, i) =>
                                                            <option key={i} value={item.key} >{item.value}</option>))
                                                        :
                                                        null}
                                                </Input>
                                                :
                                                <Input value={SlipDetails.tenantDepositMode}
                                                    readOnly />
                                            }

                                            <FormText color="red"> {warning.modeOfDepositWarning} </FormText>
                                        </Col>
                                    </FormGroup>

                                    {SlipDetails.modeOfDeposit == "1" || SlipDetails.modeOfDeposit == "2" || SlipDetails.modeOfDeposit == "3" ||
                                        SlipDetails.tenantDepositMode == "IMPS" || SlipDetails.tenantDepositMode == "NEFT" || SlipDetails.tenantDepositMode == "RTGS"
                                        ?

                                        <FormGroup row>
                                            <Col md="2">
                                                <Label style={Labelstyle1} htmlFor="agentfullName">Online  Reference Number{RequireIconForIpFiled()}</Label>
                                            </Col>
                                            <Col xs="12" md="3">
                                                <Input
                                                    style={InputTextStyle}
                                                    onChange={(txt) => {
                                                        this.props.Save_DepositSlip_Details_Tenant("onlineTransfer", txt.target.value)
                                                    }}
                                                    value={SlipDetails.onlineTransfer}
                                                    placeholder='Enter Online Transfer Details'
                                                />
                                                <FormText color="red"> {warning.onlineTransferWarning} </FormText>
                                            </Col>
                                        </FormGroup>
                                        :
                                        null
                                    }
                                    {SlipDetails.modeOfDeposit == "5" || SlipDetails.tenantDepositMode == "CDM Deposit" ?
                                        <FormGroup row>
                                            <Col md="2">
                                                <Label style={Labelstyle1} htmlFor="agentfullName">Reference Number {RequireIconForIpFiled()}</Label>
                                            </Col>
                                            <Col xs="12" md="3">
                                                <Input
                                                    maxLength={9}
                                                    style={InputTextStyle}
                                                    onChange={(txt) => {
                                                        this.props.Save_DepositSlip_Details_Tenant("refNumber", txt.target.value)
                                                    }}
                                                    value={SlipDetails.referenceNumber}
                                                    placeholder='Enter Reference Number'
                                                />
                                                <FormText color="red"> {warning.referenceNumberWarning} </FormText>
                                            </Col>
                                        </FormGroup>
                                        :
                                        null
                                    }


                                    {SlipDetails.modeOfDeposit == "6" || SlipDetails.tenantDepositMode == "Cheque" ?
                                        <FormGroup row>
                                            <Col md="2">
                                                <Label style={Labelstyle1} htmlFor="agentfullName">Cheque Details{RequireIconForIpFiled()}</Label>
                                            </Col>
                                            <div style={{ display: "flex", paddingLeft: 15 }}>
                                                <Input
                                                    style={{ marginRight: 15 }}
                                                    onChange={(txt) => {
                                                        this.props.Save_DepositSlip_Details_Tenant("chequeNumber", txt.target.value)
                                                    }}
                                                    value={SlipDetails.chequeDetails.number}
                                                    placeholder="Number"
                                                />

                                                {th0is.props.DespositSlipComp.isGetDepositedSlipSuccess ?
                                                    <Col xs="12" md="6">
                                                        <Input
                                                            style={InputTextStyle}
                                                            value={SlipDetails.chequeDetails.date}
                                                        />
                                                    </Col>
                                                    :
                                                    <Col xs="12" md="3">
                                                        <DatePicker
                                                            selected={this.props.DespositSlipComp.isGetDepositedSlipSuccess ? moment(SlipDetails.chequeDetails.date) : moment(this.state.startDate)}
                                                            onChange={this.SaveDate}
                                                            peekNextMonth
                                                            showMonthDropdown
                                                            showYearDropdown
                                                            dropdownMode="select"
                                                            maxDate={moment()}
                                                            placeholderText="Pick the date "
                                                        />
                                                    </Col>
                                                }
                                                <FormText color="red"> {warning.numberWarning} </FormText>
                                            </div>
                                        </FormGroup>
                                        :
                                        null
                                    }

                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">To Bank Account No{RequireIconForIpFiled()}</Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input
                                                maxLength={14}
                                                style={InputTextStyle}
                                                onChange={(txt) => {
                                                    if (Value === '' ||  Value.match(/^[0-9A-Z]+$/)) {
                                                        this.props.Save_DepositSlip_Details_Tenant("toBankAccountNo", txt.target.value)
                                                    }
                                                }}
                                                value={SlipDetails.toBankAccountNo}
                                                placeholder='Enter To Bank Account No'
                                            />
                                            <FormText color="red"> {warning.toBankAccountNoWarning} </FormText>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">Date of Deposit{RequireIconForIpFiled()}</Label>
                                        </Col>

                                        {this.props.DespositSlipComp.isGetDepositedSlipSuccess ?
                                            <Col xs="12" md="3">
                                                <Input
                                                    style={InputTextStyle}
                                                    value={SlipDetails.dateOfDeposit}
                                                    readOnly />
                                            </Col>
                                            :
                                            <Col xs="12" md="3">
                                                <DatePicker
                                                    selected={this.props.DespositSlipComp.isGetDepositedSlipSuccess ? moment(SlipDetails.dateOfDeposit) : moment(this.state.dateOfDeposit)}
                                                    onChange={this.SaveDateOfDeposit}
                                                    peekNextMonth
                                                    showMonthDropdown
                                                    showYearDropdown
                                                    dropdownMode="select"
                                                    maxDate={moment()}
                                                    placeholderText="Pick the date "
                                                />
                                            </Col>
                                        }
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">Remarks</Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input
                                                style={{ paddingBottom: 65 }}
                                                onChange={(txt) => {
                                                    this.props.Save_DepositSlip_Details_Tenant("remarks", txt.target.value)
                                                }}
                                                value={SlipDetails.remarks}
                                                placeholder='Enter Remarks'
                                            />
                                        </Col>
                                    </FormGroup>

                                    {
                                        SlipDetails.modeOfDeposit == "4" || SlipDetails.modeOfDeposit == "5" ||
                                            SlipDetails.modeOfDeposit == "6" || SlipDetails.tenantDepositMode == "BankCashDeposit" ||
                                            SlipDetails.tenantDepositMode == "CDMDeposit" || SlipDetails.tenantDepositMode == "Cheque" ?
                                            <FormGroup row>
                                                <Col md="2">
                                                    <Label style={Labelstyle1} htmlFor="file-input">Upload Slip</Label>
                                                </Col>
                                                <Col xs="12" md="3">
                                                    <img
                                                        style={{ height: '20vh', width: '100%' }}
                                                        src={"data:image/jpg;base64," +
                                                            SlipDetails.slipImage}
                                                    />
                                                    <Input type="file"
                                                        onChange={(e) => { this.handleImageChange(e) }}
                                                        id="file-input" name="file-input" />
                                                    <FormText color="red"> {warning.slipImageWarning} </FormText>
                                                </Col>
                                            </FormGroup>
                                            :
                                            null
                                    }


                                    {
                                        !this.props.DespositSlipComp.isGetDepositedSlipSuccess ?
                                            <FormGroup row style={{ marginBottom: 100 }}>
                                                <Col xs="12" md="2"></Col>

                                                <Col xs="12" md="2">
                                                    <LaddaButton
                                                        style={{ borderRadius: 21 }}
                                                        className="buttonStyle Submit"
                                                        loading={this.props.ProgressIndicator.InProgress}
                                                        onClick={() => this.SubmitClicked()}
                                                        data-color="rgb(248, 176, 24)"
                                                        data-style={EXPAND_LEFT}>Submit</LaddaButton>
                                                </Col>
                                            </FormGroup>
                                            :
                                            null
                                    }
                                </fieldset>

                                {this.props.LoginDetails.roleName == "Admin" ?
                                    <FormGroup row style={{ marginBottom: 100 }}>
                                        <Col xs="12" md="2"></Col>
                                        <div style={{ marginTop: 30 }}>
                                            <button className="buttonStyle Submit"
                                                onClick={() => {

                                                    let id = SlipDetails.id;
                                                    let AccessToken = this.props.LoginDetails.accessToken;
                                                    this.props.Approve_Tenant_Deposit_Slip(AccessToken, id)
                                                }}
                                            >Approve</button>
                                        </div>
                                        <div style={{ marginTop: 30 }}>
                                            <button className="buttonStyle special2">Reject</button>
                                        </div>
                                    </FormGroup >
                                    :
                                    null
                                }
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}


const mapStateToProps = ({ userManagementReducer, Authentication, bankManagement }) => {
    const { OrganizationDetails, } = userManagementReducer;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    const { DespositSlipComp, ProgressIndicator } = bankManagement

    return { OrganizationDetails, LoginDetails, userRoleModulePermissions, DespositSlipComp, ProgressIndicator };
};
export default connect(mapStateToProps, {
    Save_DepositSlip_Details_Tenant
    , Save_DepositSlip_Details_Tenant_Warnings
    , ResetDepositSlipComp
    , SendSlipDetailsToDB
    , Get_Deposit_Mode_Lists
    , Approve_Tenant_Deposit_Slip
})(TenantUploadSlip);


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5, font: "bold" }} > *</span>
}