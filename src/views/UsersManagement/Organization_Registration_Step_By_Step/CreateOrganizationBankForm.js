import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, Button, CardFooter, Form, FormGroup,
    FormText, Label, Input
} from 'reactstrap';

import { connect } from 'react-redux';

import "react-toggle/style.css"


import {
    Save_Org_Form_Types, AddBankToCreatingOrganization,
    RemoveBankOfCreatingOrg, Save_Creating_Org_Bank_Details,

    Get_States_Of_Selected_Bank, GetCitesOfSelectedBankAndState,
    Get_Branches_OfBankAndCity, Get_IFSC_OfBankBranch,



} from '../UserManagementAction';

import '../../../../public/CustomStyles.css';

import { NumberRegex, FullNameRegex } from '../../AllRegexFormats';

class CreateOrganizationBankForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Bankselected: false,
            Branchselected: false,
            fields: {},
            errors: {},
            cashLimitchecked: false,
            AdditionalInsentives: '',
            commissionMode: '',
            Render: false,
            SelectedState: ''
        };
    }


    DisplayBankStates(bankStates) {
        if (bankStates !== [] || bankStates.length != 0) {
            return bankStates.map((item, i) =>
                <option key={item.key} value={item.key}>{item.value}</option>
            )
        } else return null;
    }

    DisplayBankCities(citiesList) {

        if (citiesList !== [] || citiesList.length != 0) {
            return citiesList.map((item, i) =>
                <option key={item.key} value={item.key}>{item.value}</option>
            )
        } else return null;

    }


    DisplayBankBranches(bankBranches) {

        console.log(" In DisplayBankBranches  :  ")

        if (bankBranches !== [] || bankBranches.length != 0) {
            return bankBranches.map((item, i) =>
                <option key={i} value={item.key}>{item.value}</option>
            )
        } else return null;

    }


    SaveSelectedBankName(BankName, i) {

        let AccessToken = this.props.LoginDetails.accessToken;
        this.props.Get_States_Of_Selected_Bank(AccessToken, BankName, i);

    }




    render() {
        console.log("In CreateOrganizationBankForm ");
        var BankNames = this.props.OrganizationDetails.OrganizationStoreInfo.bankNames;

        return this.props.OrganizationDetails.NewOrgBankDetails.map((bankitem, i) =>
            <div key={i} alignSelf=" center">
                <Row style={{ marginTop: 40, borderWidth: 1, alignContent: 'flex-end', }}>

                    <Col md="10">
                        <Card style={{ marginTop: 10, alignSelf: 'center', backgroundColor: '#D3D3D3' }} >
                            <CardBody>
                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                                    <FormGroup row>
                                        <Col md="4">
                                            <Input class="inputfont"
                                                value={bankitem.AccountHolderName}
                                                maxLength={50}
                                                onChange={
                                                    (val) => {
                                                        let Value = val.target.value;
                                                        if (Value.match(FullNameRegex) || Value === '') {
                                                            this.props.Save_Creating_Org_Bank_Details(Value, i, 'HolderName', null) // Don't Remove These Null PArams
                                                        }
                                                    }
                                                }
                                                type="text" id="bankholderName"
                                                placeholder="Enter Account Holder Name" />
                                        </Col>

                                        <Col md="4">
                                            <Input type="text"
                                                value={bankitem.AccountNo}
                                                maxLength={14}
                                                onChange={
                                                    (val) => {
                                                        let Value = val.target.value;
                                                        if (Value.match(/^[0-9A-Z]+$/) || Value === '') {
                                                            this.props.Save_Creating_Org_Bank_Details(Value, i, 'AccountNo', null) // Don't Remove These Null PArams
                                                        }
                                                    }
                                                }
                                                id="ACno" placeholder="Enter Bank A/C number" />
                                        </Col>
                                        <Col xs="12" md="4">
                                            <Input
                                                value={bankitem.bankId}
                                                onChange={
                                                    (val) => {
                                                        let bankId = val.target.value;
                                                        this.SaveSelectedBankName(bankId, i);
                                                    }
                                                }
                                                type="select" name="select" id="select">
                                                <option disabled={bankitem.bankId !== ''} value="0">Select Bank</option>
                                                {BankNames.map((item, i) =>
                                                    <option key={i} value={item.id}>{item.name}</option>
                                                )}
                                            </Input>
                                        </Col>

                                    </FormGroup>

                                    <FormGroup row>
                                        <Col xs="12" md="4">
                                            <Input
                                                value={bankitem.stateId}
                                                onChange={(txt) => {
                                                    let StateId = txt.target.value;
                                                    let BankId = bankitem.bankId
                                                    let AccessToken = this.props.LoginDetails.accessToken;
                                                    this.props.GetCitesOfSelectedBankAndState(AccessToken, BankId, StateId, i)

                                                }}
                                                type="select" id="inputBranchName">

                                                <option>
                                                    Select State
                                                </option>
                                                {this.DisplayBankStates(bankitem.bankStates)}
                                            </Input>
                                            <FormText
                                                color="red">  </FormText>
                                        </Col>

                                        <Col xs="12" md="4">

                                            <FormGroup>
                                                <Input
                                                    value={bankitem.cityId}
                                                    onChange={(val) => {
                                                        let AccessToken = this.props.LoginDetails.accessToken;
                                                        let cityId = val.target.value;
                                                        let bankId = bankitem.bankId;
                                                        let stateId = bankitem.stateId;
                                                        this.props.Get_Branches_OfBankAndCity(AccessToken, bankId, stateId, cityId, i);
                                                    }}
                                                    type="select"   >
                                                    <option

                                                    >Select City</option>
                                                    {this.DisplayBankCities(bankitem.bankCities)}
                                                </Input>
                                                <FormText style={{ color: 'red' }}>

                                                    {bankitem.cityhasNoBranches ? "City Doesn't have Bank Branches" : null}
                                                </FormText>
                                            </FormGroup>
                                        </Col>

                                        <Col xs="12" md="4">
                                            <Input
                                                value={bankitem.BankBranchId}
                                                onChange={
                                                    (val) => {
                                                        let AccessToken = this.props.LoginDetails.accessToken;
                                                        let bankId = bankitem.bankId;
                                                        let stateId = bankitem.stateId;
                                                        let cityId = bankitem.cityId;
                                                        let branchId = val.target.value;
                                                        this.props.Get_IFSC_OfBankBranch(AccessToken, bankId, stateId, cityId, branchId, i);
                                                    }
                                                }
                                                type="select" name="select" id="select">
                                                <option disabled={bankitem.BankBranchId !== ''} value="0">Select Branch</option>

                                                {this.DisplayBankBranches(bankitem.bankBranches)}

                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col xs="12" md="4">
                                        </Col>

                                        <Col xs="12" md="4">
                                        </Col>

                                        <Col xs="12" md="4">
                                            <Input
                                                disabled={true}
                                                value={bankitem.ifsc}
                                                type="text" id="IfscCode" placeholder="Enter Ifsc Code" />
                                        </Col>
                                    </FormGroup>
                                </Form>
                            </CardBody>

                        </Card>
                    </Col>

                    <Col md="2">
                        <FormGroup cols>
                            <Col>
                                <Label htmlFor="text-input"> </Label>
                            </Col>
                            <Col>
                                <Button type='button' color="danger" outline onClick={() => this.props.RemoveBankOfCreatingOrg(i)}>
                                    <i className="fa fa-times" title="CashIn"></i> </Button>
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
                <FormText style={{ fontSize: 16 }} color="red"> {this.props.OrganizationDetails.RegistrationinputWarning.BankDetails} </FormText>
            </div >
        )
    }


}
const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { UserRegistration, OrganizationDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { UserRegistration, OrganizationDetails, LoginDetails };
};

export default connect(mapStateToProps, {
    Save_Org_Form_Types, AddBankToCreatingOrganization,
    RemoveBankOfCreatingOrg, Save_Creating_Org_Bank_Details,

    Get_States_Of_Selected_Bank, GetCitesOfSelectedBankAndState,
    Get_Branches_OfBankAndCity, Get_IFSC_OfBankBranch,
})(CreateOrganizationBankForm);
