import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, CardHeader, Label, Input, Button, FormText, FormGroup
} from 'reactstrap';

import LaddaButton, {
    EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP
} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';

import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';
import { AlphNumericRegex } from '../../AllRegexFormats';

import {
    GetOrganizationsList
} from '../../UsersManagement/UserManagementAction';
import {
    Save_DepositSlip_Details, Save_DepositSlip_Details_Warnings, Save_DepositSlip_List_Items, send_BankDeposit_Details_To_DB, ResetDepositSlipComp
} from '../BankManagementAction'
class UploadSlip extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentWillMount() {
        this.props.ResetDepositSlipComp();
        let AccessToken = this.props.LoginDetails.accessToken;
        let OrgTypeId = 3;
        let OrgTypeName = 'AdminRetailer'
        let offset = 0;
        let limit = 100;
        let searchText = '';
        this.props.GetOrganizationsList(AccessToken, OrgTypeId, offset, limit, searchText, OrgTypeName);
    }


    componentDidUpdate() {
        if (this.props.DespositSlipComp.isSubmitDepositSlipSuccess) {
            console.log("isSubmitDepositSlipSuccess: true")
            this.props.history.push("/DepositSlips")
        }
    }

    TenantAndAmountButtonEvent(Type, Index) {
        let Value = this.props.DespositSlipComp.DespositList;
        this.props.Save_DepositSlip_Details(Type, Value, Index);
    }

    UploadSlipsButtonEvent(Type, Index) {
        let Value = this.props.DespositSlipComp.SlipImageList;
        this.props.Save_DepositSlip_Details(Type, Value, Index);
    }

    handleImageChange(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                this.props.Save_DepositSlip_Details('pictureBase64', reader.result, 0);
            }
            reader.readAsDataURL(file)
        } else {
            this.props.Save_DepositSlip_Details_Warnings('pictureBase64', "Image type should be either PNG or JPEG")
        }
    }

    SubmitClicked() {
        if (this.handleValidation()) {
            this.SendBankDepositDetailsToDb();
        }
    }

    SendBankDepositDetailsToDb() {
        let AccessToken = this.props.LoginDetails.accessToken;
        let DepositSlipImage = this.props.DespositSlipComp.DepositSlipImage;
        let DepositSlipImage1 = DepositSlipImage.split(",");
        let UploadData = {
            DepositSlipImage: DepositSlipImage1[1],
            BankSlipTxId: this.props.DespositSlipComp.BankSlipTxId,
            DepositSlipVMTenantAmounts: this.props.DespositSlipComp.DespositList,
        }
        this.props.send_BankDeposit_Details_To_DB(AccessToken, UploadData)
    }
    handleValidation() {
        let formIsValid = true;
        let DespositSlipComp = this.props.DespositSlipComp;

        if (DespositSlipComp.DepositSlipImage == '') {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Warnings('pictureBase64', " Slip  required ")
        } else {
            this.props.Save_DepositSlip_Details_Warnings('pictureBase64', " ")
        }

        if (DespositSlipComp.BankSlipTxId == "") {
            formIsValid = false;
            this.props.Save_DepositSlip_Details_Warnings('TXId', " TxId  required ")
        } else {
            this.props.Save_DepositSlip_Details_Warnings('TXId', " ")
        }

        return formIsValid;

    }

    render() {

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="UploadSlip" />
                <Row >
                    <Col xs="12" lg="12">
                        <Card style={{ background: "#ffffff", }}>
                            <CardHeader>
                                <h5 className="font-weight-bold"> FSE  Upload Slips</h5>
                                {/* <Input style={{ height: 33, width: '15%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                            value={this.state.searchingValue}
                                            onChange={this.onChange} /> */}
                            </CardHeader>
                            <CardBody  >
                                <div style={{ display: "block", margin: "1% 2% 0% 15%" }}>

                                    {this.ReturnUploadSlipView()}

                                    {this.ReturnTenantAndAmountView()}

                                    {/* {this.ReturnTxIdView()}  */}

                                    {this.ReturnDepositModeView()}

                                    <div style={{ marginTop: 30 }}>
                                        <button style={{ borderRadius: 21 }}
                                            className="buttonStyle Submit"
                                            onClick={() => this.SubmitClicked()}
                                        >Submit</button>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }

    ReturnUploadSlipView() {
        let SlipImageList = this.props.DespositSlipComp.SlipImageList;
        return <div style={{ display: "flex" }}>
            <div>
                {SlipImageList.map((item, i) =>
                    <div style={{ display: "flex", marginTop: 40 }}>
                        <div style={{ marginRight: 20, paddingTop: 10 }}>
                            <Label>Upload  {RequireIconForIpFiled()}</Label>
                        </div>
                        <div style={{}}>
                            <Input type="file" style={{ paddingTop: 10 }}
                                onChange={(e) => this.handleImageChange(e)}></Input>
                            <FormText color="red">{this.props.DespositSlipComp.depositSlipWarnings.imageWarnings} </FormText>
                        </div>

                        <div style={{ display: "flex" }}>
                            <div style={{ marginRight: 35, paddingTop: 10 }}>
                                <Label>TxID{RequireIconForIpFiled()}</Label>
                            </div>
                            <div style={{}}>
                                <Input value={this.props.DespositSlipComp.BankSlipTxId}
                                    onChange={(txt) => {
                                        let value = txt.target.value;
                                        if (value === '' || value.match(AlphNumericRegex)) {
                                            this.props.Save_DepositSlip_Details("TXId", txt.target.value, 0)
                                        }
                                    }}
                                    style={{
                                        border: "1px solid transparent", boxShadow: "none",
                                        borderBottom: "1px solid lightgray"
                                    }}>
                                </Input>
                                <FormText color="red">{this.props.DespositSlipComp.depositSlipWarnings.txIDWarnings} </FormText>
                            </div>
                        </div>
                        <div style={{ marginLeft: 60 }}>
                            <Button onClick={() =>
                                i == 0 ?
                                    this.UploadSlipsButtonEvent("AddSlipItem", i)
                                    :
                                    this.UploadSlipsButtonEvent("RemoveSlipItem", item.id)}
                                color={i == 0 ? "success" : "danger"}>
                                {i == 0 ? "+" : <i className="fa fa-times" title="Remove"></i>}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    }



    ReturnTenantAndAmountView() {
        return <div style={{ display: "flex" }}>
            <div >
                {this.ReturnDepositList()}
            </div>
        </div>
    }
    ReturnDepositList() {
        let Amount = this.props.DespositSlipComp.AmountDepositSlip;
        let orgID = this.props.DespositSlipComp.orgID;
        let DespositList = this.props.DespositSlipComp.DespositList;

        return DespositList.map((item, i) =>
            <div style={{ display: "flex", marginTop: 40 }} key={i}>
                <div style={{ marginRight: 20 }}>
                    <Label>Retailer  </Label>
                    <br />
                    <Input
                        onChange={(txt) => {
                            this.props.Save_DepositSlip_List_Items("orgID", txt.target.value, i, Amount)
                        }}
                        type="select" >
                        <option value="select">Select Retailer</option>
                        {(this.props.OrganizationDetails.OrgList.map((org, i) =>
                            <option key={i} value={org.tenantId} >{org.name}</option>))}
                    </Input>
                </div>
                <div style={{}}>
                    <Label>Amount</Label>
                    <br />
                    <Input
                        value={item.Amount}
                        onChange={(txt) => {
                            let Value = txt.target.value;
                            if (Value === '' || Value.match(/^[0-9]+$/)) {
                                this.props.Save_DepositSlip_List_Items("Amount", txt.target.value, i, orgID)
                            } else this.props.Save_DepositSlip_Details_Warnings("Amount", "please enter only numbers")
                        }}>
                    </Input>
                </div>

                <div style={{ marginTop: 30, marginLeft: 52 }}>
                    <Button
                        onClick={() => i == 0 ?
                            this.TenantAndAmountButtonEvent("AddItem", 0)
                            :
                            this.TenantAndAmountButtonEvent("RemoveItem", item.id)
                        }
                        color={i == 0 ? "success" : "danger"}>
                        {i == 0 ? "+" : <i className="fa fa-times" title="Remove"></i>}</Button>
                </div>
            </div>
        )
    }
    ReturnDepositModeView() {
        return <div style={{ marginTop: 40 }}>
            <FormGroup row>
                <Col md="1">
                    <Label  >Mode {RequireIconForIpFiled()}</Label>
                </Col>
                <Col xs="12" md="3">
                    <Input type="select" >
                        <option > Select Mode of Deposit</option>
                        <option > Cash at office</option>
                        <option > Cash in hand</option>
                        <option > Bank Deposit</option>
                        <option > CDM Deposit</option>
                        <option > CDM Stuck</option>
                    </Input>
                </Col>
            </FormGroup>
        </div>
    }
}


const mapStateToProps = ({ userManagementReducer, Authentication, bankManagement }) => {
    const { OrganizationDetails, } = userManagementReducer;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    const { DespositSlipComp, ProgressIndicator } = bankManagement

    return { OrganizationDetails, LoginDetails, userRoleModulePermissions, DespositSlipComp, ProgressIndicator };
};
export default connect(mapStateToProps, {
    GetOrganizationsList, Save_DepositSlip_Details, Save_DepositSlip_Details_Warnings, Save_DepositSlip_List_Items, send_BankDeposit_Details_To_DB, ResetDepositSlipComp
})(UploadSlip);

function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5, font: "bold" }} > *</span>
}