import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, CardHeader, Label, Input, Button, FormText, FormGroup, Form
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
    Save_DepositSlip_Details_Tenant, Save_DepositSlip_Details_Tenant_Warnings, SendDepositSlipDetailsToDB, ResetDepositSlipComp
} from '../BankManagementAction'
class ReportCDMStuck extends Component {

    constructor(props) {
        super(props);
        this.state = {

            focusedInput: '',
            dateOfDeposit: moment(),
            resetStartDate: false,
        };


        this.SaveDateOfDeposit = this.SaveDateOfDeposit.bind(this);
    }
    componentWillMount() {

        if (!this.props.DespositSlipComp.isGetDepositedSlipSuccess) {
            this.props.ResetDepositSlipComp();
        }
        let retailerName = this.props.LoginDetails.fullName
        this.props.Save_DepositSlip_Details_Tenant("retailerName", retailerName)
    }

    componentDidUpdate() {
        if (this.props.DespositSlipComp.isSendDepositSuccess) {
            this.props.history.push("/CDMStuck");
        }
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
            console.log(SlipDetails);
            this.props.SendDepositSlipDetailsToDB("addReportToList", SlipDetails, AccessToken, DOB);
        }
    }

    OkClicked() {
        this.props.history.push("/CDMStuck");
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

        if (SlipDetails.toBankAccountNo == "") {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('toBankAccountNo', "To bank account number  required ")
        }
        else if (SlipDetails.toBankAccountNo.length < 11) {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Tenant_Warnings('toBankAccountNo', "Enter a valid  bank account number")
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
                                <h5 className="font-weight-bold">Tenant  Report CDM Stuck </h5>
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
                                                value={this.props.DespositSlipComp.isGetDepositedSlipSuccess ? this.props.DespositSlipComp.SlipDetails.tenantName : this.props.DespositSlipComp.SlipDetails.fromName}
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
                                                    }
                                                }}
                                                value={this.props.DespositSlipComp.SlipDetails.amount}
                                                placeholder='Enter Amount'
                                            />
                                            <FormText color="red"> {warning.amountWarning} </FormText>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">To Bank Account No{RequireIconForIpFiled()}</Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input
                                            maxLength={14}
                                                style={InputTextStyle}
                                                onChange={(txt) => {
                                                    let Value = txt.target.value
                                                    if (Value === '' || Value.match(/^[0-9A-Z]+$/)) {
                                                        this.props.Save_DepositSlip_Details_Tenant("toBankAccountNo", txt.target.value)
                                                    }
                                                }}
                                                value={this.props.DespositSlipComp.SlipDetails.toBankAccountNo}
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
                                                    value={this.props.DespositSlipComp.SlipDetails.dateOfDeposit}
                                                    readOnly />
                                            </Col>
                                            :
                                            <Col xs="12" md="3">
                                                <DatePicker
                                                    onChange={this.SaveDateOfDeposit}
                                                    selected={this.props.DespositSlipComp.isGetDepositedSlipSuccess ? moment(SlipDetails.dateOfDeposit) : moment(this.state.dateOfDeposit)}
                                                    peekNextMonth
                                                    showMonthDropdown
                                                    showYearDropdown
                                                    dropdownMode="select"
                                                    maxDate={moment()}
                                                    // className="buttonStyle Submit"
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
                                                value={this.props.DespositSlipComp.SlipDetails.remarks}
                                                placeholder='Enter Remarks'
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} >Bank Name</Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input
                                                style={{}}
                                                // onChange={(txt) => {
                                                //     this.props.Save_DepositSlip_Details_Tenant("remarks", txt.target.value)
                                                // }}
                                                // value={this.props.DespositSlipComp.SlipDetails.remarks}
                                                placeholder='Enter bank name'
                                            />
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="file-input">CDM Stuck Slip</Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            {SlipDetails.slipImage != '' ? <img
                                                style={{ height: '20vh', width: '100%' }}
                                                src={"data:image/jpg;base64," +
                                                    SlipDetails.slipImage}
                                            />
                                                :
                                                null
                                            }
                                            <Input type="file"
                                                // onChange={(e) => { this.handleImageChange(e) }}
                                                id="file-input" name="file-input" />
                                            {/* <FormText color="red"> {warning.slipImageWarning} </FormText> */}
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">Machine No </Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input
                                                style={{}}
                                                // onChange={(txt) => {
                                                //     this.props.Save_DepositSlip_Details_Tenant("remarks", txt.target.value)
                                                // }}
                                                // value={this.props.DespositSlipComp.SlipDetails.remarks}
                                                placeholder='Enter machine number'
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="2">
                                            <Label style={Labelstyle1} htmlFor="agentfullName">Machine Location </Label>
                                        </Col>
                                        <Col xs="12" md="3">
                                            <Input
                                                style={{}}
                                                // onChange={(txt) => {
                                                //     this.props.Save_DepositSlip_Details_Tenant("remarks", txt.target.value)
                                                // }}
                                                // value={this.props.DespositSlipComp.SlipDetails.remarks}
                                                placeholder='Enter machine location'
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row style={{ marginBottom: 100 }}>
                                        <Col xs="12" md="2"></Col>

                                        <Col xs="12" md="2">
                                            {!this.props.DespositSlipComp.isGetDepositedSlipSuccess ?
                                                <button style={{ borderRadius: 21 }}
                                                    className="buttonStyle Submit"
                                                    onClick={() => this.SubmitClicked()}
                                                > Submit</button>
                                                :
                                                null
                                            }
                                        </Col>
                                    </FormGroup>
                                </fieldset>

                                <FormGroup row  style={{ marginBottom: 100 }}>
                                    <Col xs="12" md="2"></Col>

                                    <Col xs="12" md="2">
                                        {this.props.DespositSlipComp.isGetDepositedSlipSuccess ?
                                            <button
                                                style={{ borderRadius: 21 }}
                                                className="buttonStyle Submit"
                                                onClick={() => this.OkClicked()}>
                                                Ok
                                                        </button>
                                            :
                                            null
                                        }
                                    </Col>
                                </FormGroup>
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

    Save_DepositSlip_Details_Tenant, Save_DepositSlip_Details_Tenant_Warnings, SendDepositSlipDetailsToDB, ResetDepositSlipComp

})(ReportCDMStuck);


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5, font: "bold" }} > *</span>

}