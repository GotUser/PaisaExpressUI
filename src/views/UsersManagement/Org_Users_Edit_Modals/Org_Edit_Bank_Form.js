import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table,
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,
    FormText, Label, Input, Item, Text
} from 'reactstrap';

import { connect } from 'react-redux';

import "react-toggle/style.css"

import { Labelstyle } from '../../../GlobalVars';


import {
    Get_Bank_States_On_Edit_Org_Banks, Get_Bank_Cities_On_Edit_Org_Banks, GetBankIFSC_On_Edit_Org_Bank,
    GetBankBranches_On_Edit_Org_Bank,
    Save_Editing_Org_Bank_Details, Ip_Warnings_At_Edit_Org_Bank_Details
} from '../UserManagementAction';

import '../../../../public/CustomStyles.css';

import { NumberRegex, FullNameRegex } from '../../AllRegexFormats';


class Org_Edit_Bank_Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentWillMount() {
        console.log(" IN Org_Edit_Bank_Form Component Will MOunt ");
        // this.props.ResetForm();
        let BankDetailsTOEdit = this.props.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks;

        if (BankDetailsTOEdit.Editing_Org_Bank_Details.bankName !== '') {

            console.log(" Bank Name IS NOt NUll : ");

            let AccessToken = this.props.LoginDetails.accessToken;
            let BankName = BankDetailsTOEdit.Editing_Org_Bank_Details.bankName;
            console.log(BankName);
            // this.props.Get_Bank_States_On_Edit_Org_Banks(AccessToken, )
        } else {
            console.log(" Bank Name IS  NUll : ");
        }

    }


    changeHolderName(txt) {

        const re = /^[a-zA-Z ]+$/;
        if (txt.target.value == '' || re.test(txt.target.value)) {
            this.setState({ HolderName: txt.target.value });
        }
    }
    changeAccNo(txt) {
        const re = /^[0-9\b]+$/;
        if (txt.target.value == '' || re.test(txt.target.value)) {
            this.setState({ AccNo: txt.target.value });
        }

    }
    changeIfsc(txt) {
        this.setState({ Ifsc: txt.target.value });
    }
    changeBranch(txt) {

    }
    changeBankname(txt) {

        this.props.allBankDetails.banks.map((bank) => {
            console.log(bank);
            console.log(txt.target.value);
            bank.banknameid == txt.target.value ? this.setState({ Bankname: bank.bankname, selectedBankid: txt.target.value }) : console.log(" false")
        });
        this.props.GetStatesOfSelectedBank(txt.target.value);
    }
    changeBranchname(txt) {

        console.log(" changeBranchname ... called  ");

        this.props.allBankDetails.branches.map((branch) => {

            branch.branchId == txt.target.value ? this.setState({ Branch: branch.branchname, selectedBranchid: txt.target.value, Ifsc: branch.ifsccode }) : console.log(" false")
        });
        this.props.GetStatesOfSelectedBank(txt.target.value);
    }

    changeStatename(txt) {

        console.log(" Select States .  .  .  .  .  .  .  .  .  .  :" + this.props.allBankDetails.states);
        this.props.allBankDetails.states.map((states) => {
            states.bankstateid == txt.target.value ? this.setState({ State: states.bankstate }) : console.log(" false")
        });
        this.props.GetBranchesOfSelectedBankandState(this.state.selectedBankid, txt.target.value);
    }


    SaveState(StateName) {

        let AllStatesAndCities = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;

        var StateCities;
        Object.keys(AllStatesAndCities).map((state, i) => {
            if (state === StateName) {
                StateCities = AllStatesAndCities[state];
                console.log("  State Name IN  SaveSelectedStateInLocal ");
                console.log(state);
                console.log(AllStatesAndCities[state])
            }
        }
        )
        console.log(" Selected State IS And Cities are  :");
        console.log(StateName);
        console.log(StateCities);

        this.props.Save_Editing_Org_Bank_Details(StateName, "bankStateName", StateCities);
    }


    DisplayBankCities(BankDetailsTOEdit) {


        console.log(" /  /  /  /  /   / / / / / / / / / // /  //    DisplayBankCities(BankDetailsTOEdit)   ");
        console.log(BankDetailsTOEdit.CitiesOfSelectedState)

        // if (BankDetailsTOEdit.CitiesOfSelectedState.length === 0) {
        return


        // } else {
        //     return <Col xs="12" md="6">

        //     <Input
        //         disabled={BankDetailsTOEdit.Editing_Org_Bank_Details.bankName === ''}
        //         value={BankDetailsTOEdit.Editing_Org_Bank_Details.bankCityId}
        //         onChange={(e) => {
        //             let cityId = e.target.value;
        //             let AccessToken = this.props.LoginDetails.accessToken;
        //             let BankName = BankDetailsTOEdit.Editing_Org_Bank_Details.bankName;
        //             this.props.GetBankBranches_On_Edit_Org_Bank(AccessToken, BankName, cityId)
        //         }}
        //         type="select" id="inputBranchName">

        //         <option disabled={BankDetailsTOEdit.Editing_Org_Bank_Details.bankCityId !== '' ||
        //             BankDetailsTOEdit.Editing_Org_Bank_Details.bankCityId !== 0 ||
        //             BankDetailsTOEdit.Editing_Org_Bank_Details.bankCityId !== null} defaultValue='Select State'>Select State</option>

        //         {
        //             // Object.keys(BankDetailsTOEdit.BankCities).map((city, i) =>
        //             //     <option
        //             //         value={city}>
        //             //         {BankDetailsTOEdit.BankCities[city]}
        //             //     </option>
        //             // )
        //                 BankDetailsTOEdit.CitiesOfSelectedState.map((city) =>
        //                 <option
        //                     value={city.cityId}>
        //                     {city.cityName}
        //                 </option>
        //             )
        //         }
        //     </Input>
        //     <FormText
        //         color="red">  </FormText>
        // </Col>
        // }
    }



    SaveBankBranchIdAndIFSC(BranchId, BankBranches) {

        var Ifsc;
        BankBranches.map((item, i) => {
            console.log(" Item Is :  ");
            console.log(item);
            if (item.branchId === parseInt(BranchId)) {
                Ifsc = item.ifsc;
            }
        }
        )

        // this.props.Save_Creating_Org_Bank_Details(BranchId, i, 'BankBranchId', Ifsc);
        this.props.Save_Editing_Org_Bank_Details(BranchId, "BranchIdAndfIfsc", Ifsc)
    }


    ReturnBankSelectionView(BankDetailsTOEdit, BankNames) {
        if (BankDetailsTOEdit.AddOrEditBank === 'Edit') {
            return (
                <Input disabled={true}
                    value={BankDetailsTOEdit.Editing_Org_Bank_Details.bankName}
                    type="select" id="inputBankName">
                    <option >
                        {BankDetailsTOEdit.Editing_Org_Bank_Details.bankName}
                    </option>
                </Input>
            )
        } else if (BankDetailsTOEdit.AddOrEditBank === 'Add') {
            return (
                <Input
                    value={BankDetailsTOEdit.Editing_Org_Bank_Details.organizationBankId}
                    onChange={(txt) => {
                        let BankId = txt.target.value;
                        let AccessToken = this.props.LoginDetails.accessToken;
                        this.props.Get_Bank_States_On_Edit_Org_Banks(AccessToken, BankId)
                    }}
                    type="select" id="inputBankName">
                    <option >
                        Select Bank Name
                    </option>
                    {BankNames.map((item, i) =>
                        <option value={item.id}>{item.name}</option>
                    )}
                </Input>
            )
        }
    }

    ReturnStatesSelectionView(BankDetailsTOEdit) {
        let States = BankDetailsTOEdit.BankStates;
        let disable = BankDetailsTOEdit.AddOrEditBank === 'Edit' ? true : States.length == 0 ? true : false;
        if (BankDetailsTOEdit.AddOrEditBank == 'Edit') {
            console.log("Edit----------------------------------------------------")
            return (
                <Input disabled
                    value={BankDetailsTOEdit.Editing_Org_Bank_Details.stateName}
                    type="select" id="inputBranchName">
                    <option disabled>
                        {BankDetailsTOEdit.Editing_Org_Bank_Details.stateName}
                    </option>
                </Input>
            )
        } else if (BankDetailsTOEdit.AddOrEditBank == 'Add') {
            return (
                <Input
                    // value={BankDetailsTOEdit.Editing_Org_Bank_Details.bankStateName }
                    onChange={(txt) => {
                        let AccessToken = this.props.LoginDetails.accessToken;
                        let BankId = BankDetailsTOEdit.Editing_Org_Bank_Details.organizationBankId;
                        let StateId = txt.target.value;

                        this.props.Get_Bank_Cities_On_Edit_Org_Banks(AccessToken, BankId, StateId);
                    }}
                    type="select" id="inputBranchName">
                    <option >
                        Select State
                                </option>
                    {States.map((item, i) => {
                        return <option key={i} value={item.key}>
                            {item.value}
                        </option>

                    })}
                </Input>
            )
        }
    }

    ReturnCitiesSelectionView(BankDetailsTOEdit) {
        let cities = BankDetailsTOEdit.BankCities;
        let Details = BankDetailsTOEdit.Editing_Org_Bank_Details;
        let disable = BankDetailsTOEdit.AddOrEditBank === 'Edit' ? true : cities.length == 0 ? true : false;
        return (
            <Input
                // disabled={BankDetailsTOEdit.Editing_Org_Bank_Details.bankName === ''}
                disabled={disable}
                value={disable ? Details.city : Details.bankCityId}
                onChange={(e) => {
                    let AccessToken = this.props.LoginDetails.accessToken;
                    let BankId = Details.organizationBankId;
                    let StateId = Details.bankStateId;
                    let cityId = e.target.value;
                    this.props.GetBankBranches_On_Edit_Org_Bank(AccessToken, BankId, StateId, cityId)
                }}
                type="select" id="inputBranchName">

                <option  >
                    {Details.city == "" || Details.city == undefined
                        ? "Select State" : BankDetailsTOEdit.Editing_Org_Bank_Details.city}
                </option>
                {disable ? null :
                    cities.map((item, i) => {
                        return <option key={i} value={item.key}>
                            {item.value}
                        </option>
                    })
                }
            </Input>
        )
    }


    DisplayBankBranches(BankDetailsTOEdit) {

        console.log(" / // / / / / / / / / / / / / / / / / / / / / / / / / / / /  BankDetailsTOEdit.BankBranches > > >  > >>  > >> > > > > > > >> > > >  ");
        console.log(BankDetailsTOEdit.BankBranches);

        let Branches = BankDetailsTOEdit.BankBranches;
        let Details = BankDetailsTOEdit.Editing_Org_Bank_Details;
        let disable = BankDetailsTOEdit.AddOrEditBank === 'Edit' ? true : Branches.length == 0 ? true : false;

        return <Input
            disabled={disable}
            value={disable ? Details.bankBranchName : Details.branchId}
            onChange={(txt) => {
                let AccessToken = this.props.LoginDetails.accessToken;
                let BankId = Details.organizationBankId;
                let StateId = Details.bankStateId;
                let cityId = Details.bankCityId;
                let branchId = txt.target.value;
                this.props.GetBankIFSC_On_Edit_Org_Bank(AccessToken, BankId, StateId, cityId, branchId)
            }}
            type="select" id="inputBranchName">
            <option >
                {Details.bankBranchName == "" || Details.bankBranchName == undefined
                    ? "Select Branch" : BankDetailsTOEdit.Editing_Org_Bank_Details.bankBranchName} </option>
            {disable ? null :
                Branches.map((item, i) => {
                    return <option key={i} value={item.key}>
                        {item.value}
                    </option>
                })
            }
        </Input>
    }

    render() {

        let BankDetailsTOEdit = this.props.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks;
        var BankNames = this.props.OrganizationDetails.OrganizationStoreInfo.bankNames;
        var StatesObj = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;
        let Regex = this.props.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Regex_at_Editing_Org_Bank_Details
        return <CardBody>
            <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                <FormGroup row>
                    <Col md="2">
                        <Label style={Labelstyle} htmlFor="inputHolderName"> Holder Name</Label>
                    </Col>
                    <Col xs="12" md="6">
                        <Input type="text"
                            value={BankDetailsTOEdit.Editing_Org_Bank_Details.accountHolderName}
                            placeholder={BankDetailsTOEdit.Editing_Org_Bank_Details.accountHolderName === '' ? 'Enter Account Holder Name' : null}
                            onChange={(txt) => {
                                let value = txt.target.value;
                                if (value === '' || value.match(FullNameRegex)) {
                                    this.props.Save_Editing_Org_Bank_Details(value, "accountHolderName", null);
                                } else this.props.Ip_Warnings_At_Edit_Org_Bank_Details(" Please Enter Only letters", "accountHolderName");
                            }}
                            id="inputHolderName"
                            ref={el => this.inputHolderName = el}
                        />
                        <FormText
                            color="red"> {Regex.accountHolderName}  </FormText>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="2">
                        <Label style={Labelstyle} htmlFor="inputACNo">A/c NO</Label>
                    </Col>
                    <Col xs="12" md="6">
                        <Input type="text"
                            maxLength={14}
                            // maxLength={14}
                            value={BankDetailsTOEdit.Editing_Org_Bank_Details.accountNumber}
                            placeholder={BankDetailsTOEdit.Editing_Org_Bank_Details.accountNumber === '' ? 'Enter Account Number' : null}
                            // selectTextOnFocus={false}
                            onChange={(txt) => {
                                let value = txt.target.value;
                                if (value === '' || value.match(/^[0-9A-Z]+$/)) {
                                    this.props.Save_Editing_Org_Bank_Details(value, "accountNumber", null);
                                } else this.props.Ip_Warnings_At_Edit_Org_Bank_Details(" Please Enter Only letters", "accountNumber");
                            }}
                            id="inputACNo"
                        />
                        <FormText
                            color="red">  {Regex.accountNumber}  </FormText>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="2">
                        <Label style={Labelstyle} htmlFor="inputBankName">Bank Name</Label>
                    </Col>
                    <Col xs="12" md="6">
                        {this.ReturnBankSelectionView(BankDetailsTOEdit, BankNames)}
                        <FormText
                            color="red">   </FormText>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md="2">
                        <Label style={Labelstyle} htmlFor="inputBranchName"> Bank State</Label>
                    </Col>
                    <Col xs="12" md="6">

                        {this.ReturnStatesSelectionView(BankDetailsTOEdit)}

                        <FormText
                            color="red">  </FormText>
                    </Col>
                </FormGroup>

                <FormGroup row>
                    <Col md="2">
                        <Label style={Labelstyle} htmlFor="inputBranchName"> Bank City</Label>
                    </Col>

                    <Col xs="12" md="6">
                        {this.ReturnCitiesSelectionView(BankDetailsTOEdit)}

                        <FormText
                            color="red">  </FormText>
                    </Col>

                </FormGroup>

                <FormGroup row>
                    <Col md="2">
                        <Label style={Labelstyle} htmlFor="inputBranchName"> Bank Branch</Label>
                    </Col>
                    <Col xs="12" md="6">
                        {this.DisplayBankBranches(BankDetailsTOEdit)}
                        <FormText
                            color="red">  </FormText>
                    </Col>

                </FormGroup>
                <FormGroup row>
                    <Col md="2">
                        <Label style={Labelstyle} htmlFor="inputIFSC">IFSC Code</Label>
                    </Col>
                    <Col xs="12" md="6">
                        <Input type="text"
                            onChange={this.changeIfsc.bind(this)}
                            disabled={true}
                            placeholder="Select Bank Branch"
                            value={BankDetailsTOEdit.Editing_Org_Bank_Details.bankIFSCCode === '' ? null :
                                BankDetailsTOEdit.Editing_Org_Bank_Details.ifscCode}
                            id="inputIFSC"
                        />
                        <FormText
                            color="red">  </FormText>
                    </Col>
                </FormGroup>
            </Form>
        </CardBody>;
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { OrganizationDetails, allBankDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { OrganizationDetails, allBankDetails, LoginDetails };
};

export default connect(mapStateToProps, {
    Get_Bank_States_On_Edit_Org_Banks, Get_Bank_Cities_On_Edit_Org_Banks, GetBankIFSC_On_Edit_Org_Bank,
    GetBankBranches_On_Edit_Org_Bank,
    Save_Editing_Org_Bank_Details, Ip_Warnings_At_Edit_Org_Bank_Details
})(Org_Edit_Bank_Form);
