import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../../public/CustomStyles.css';
import "react-toggle/style.css"

import {
    ifscSearchModal, GetCitiesList, GetBankBranchesList, SaveSelectedBranchId, GetBankIFSCOnSearch,
    ClearBeneBankDetails, GetStatesList
} from '../../BankManagementAction';

import IFSCCodeTable from './IFSCCodeTable';
class Search_IFSC_Modal extends Component {

    constructor(props) {
        super(props);

    }
    render() {

        if (this.props.MTcustomer.searchClicked) {
            const BeneDetails = this.props.MTBeneficiary.BeneDetails;
            const BankDetails = this.props.MTBeneficiary.BankDetails;
            console.log(" / / // / / / / / / / // / / / // in searchClicked searchClicked component :  ");
            console.log(BeneDetails);

            return <Modal size="lg" isOpen={this.props.MTcustomer.searchClicked}>
                <ModalBody>
                    <Col style={{ background: "white", padding: 10, paddingLeft: "3%" }}>
                        <Row style={{}}>
                            <div style={{ textAlign: "left" }}>
                                <label
                                    class="labelStyleHeadings"
                                >Search the IFSC Code </label>
                            </div>
                        </Row>

                        <Row style={{ height: 75 }}>
                            <Col xs="12" lg="3" style={{ textAlign: "left", padding: 20 }}>
                                <Label>Bank {RequireIconForIpFiled()}</Label>
                                <br />
                                <Input
                                    defaultValue={BankDetails !== undefined ? BankDetails.selectedBankId : null}
                                    onClick={this.props.GetStatesOfAbank
                                        //     (e)=>{
                                        //     console.log("  Bank Bank Bank / / / // ");
                                        //     console.log(e.target.value)
                                        //     let accessToken = this.props.LoginDetails.accessToken;
                                        //     this.props.GetStatesList(accessToken, e.target.value);
                                        // }
                                    }
                                    type="select">
                                    <option>Select Bank</option>
                                    {BeneDetails !== undefined && BeneDetails !== null ?
                                        BeneDetails.bankNames.map((bank, i) => {
                                            return <option value={bank.key}>{bank.value}</option>
                                        }) : null}
                                </Input>
                            </Col>
                            <Col xs="12" lg="3" style={{ textAlign: "left", padding: 20 }}>
                                <Label>State {RequireIconForIpFiled()}</Label>
                                <br />
                                <Input
                                    defaultValue={BankDetails !== undefined ?
                                        parseInt(BankDetails.SelectedStateId) : null
                                    }
                                    onChange={(txt) => {
                                        let accessToken = this.props.LoginDetails.accessToken;
                                        console.log(" state.key state.key is : ");
                                        console.log(txt.target.value);
                                        let BankId = parseInt(BankDetails.selectedBankId)
                                        let StateId = txt.target.value
                                        this.props.GetCitiesList(accessToken, BankId, StateId);
                                    }}
                                    type="select">
                                    <option>Select State </option>
                                    {BankDetails !== undefined && BankDetails !== null ?
                                        BankDetails.AllStates.map((state, i) => {
                                            return <option value={state.key}>{state.value}</option>
                                        }) : null}
                                </Input>
                            </Col>
                            <Col xs="12" lg="3" style={{ textAlign: "left", padding: 20 }}>
                                <Label>City {RequireIconForIpFiled()}</Label>
                                <br />
                                <Input
                                    defaultValue={BankDetails !== undefined ?
                                        parseInt(BankDetails.SelectedCityId) : null
                                    }

                                    onChange={(txt) => {
                                        let accessToken = this.props.LoginDetails.accessToken;
                                        console.log(" state.key state.key is : ");
                                        console.log(txt.target.value);
                                        let BankId = parseInt(BankDetails.selectedBankId)
                                        let StateId = parseInt(BankDetails.SelectedStateId);
                                        let CityId = txt.target.value;
                                        this.props.GetBankBranchesList(accessToken, BankId, StateId, CityId);
                                    }}
                                    type="select">
                                    <option>Select </option>
                                    {BankDetails !== undefined && BankDetails !== null ?
                                        BankDetails.AllCities !== undefined && BankDetails.AllCities !== null ?
                                            BankDetails.AllCities.map((state, i) => {
                                                return <option value={state.key}>{state.value}</option>
                                            }) : null : null}
                                </Input>
                            </Col>

                            <Col xs="12" lg="3" style={{ textAlign: "left", padding: 20 }}>
                                <Label>Branch {RequireIconForIpFiled()}</Label>
                                <br />
                                <Input
                                    defaultValue={BankDetails !== undefined ?
                                        parseInt(BankDetails.SelectedBranchId) : null
                                    }

                                    onChange={(txt) => {
                                        let BranchId = txt.target.value;
                                        let BranchName;
                                        BankDetails.AllBranches.some(function (state, i) {
                                            if (state.key === parseInt(BranchId)) {
                                                BranchName = state.value;
                                                return true; // break
                                            } else {
                                                console.log(state.key);
                                                console.log(BranchId);
                                                console.log(" Loop Continues:")
                                            }
                                        });

                                        console.log(" BranchName BranchName BranchName After Loop finish :  ");
                                        console.log(BranchName);

                                        this.props.SaveSelectedBranchId(BranchId, BranchName);
                                    }}

                                    type="select">
                                    <option>Select </option>
                                    {BankDetails !== undefined && BankDetails !== null ?
                                        BankDetails.AllCities !== undefined && BankDetails.AllCities !== null ?
                                            BankDetails.AllBranches !== undefined && BankDetails.AllBranches !== null ?
                                                BankDetails.AllBranches.map((state, i) => {
                                                    return <option value={state.key}>{state.value}</option>
                                                }) : null : null : null}
                                </Input>
                            </Col>
                        </Row>

                        <Row style={{}}>

                            <Col xs="12" lg="2" style={{ marginTop: "2%" }}>
                                <button
                                    onClick={() => {
                                        let accessToken = this.props.LoginDetails.accessToken;
                                        let BankId = parseInt(BankDetails.selectedBankId)
                                        let StateId = parseInt(BankDetails.SelectedStateId);
                                        let CityId = parseInt(BankDetails.SelectedCityId);
                                        let BranchId = parseInt(BankDetails.SelectedBranchId);
                                        this.props.GetBankIFSCOnSearch(accessToken, BankId, StateId, CityId, BranchId);
                                    }}
                                    class="buttonStyle Submit" >Search </button>
                            </Col>

                            <Col xs="12" lg="2" style={{ marginTop: "2%" }}>
                                <button
                                    onClick={() => this.props.ClearBeneBankDetails()}
                                    class="buttonStyle special2" >Clear </button>
                            </Col>

                            <Col xs="12" lg="2" style={{ marginTop: "2%" }}>
                                <button class="buttonStyle special2"
                                    onClick={() => {
                                        var value = false;
                                        this.props.ifscSearchModal({ value })
                                    }}>Close </button>
                            </Col>
                        </Row>

                        <IFSCCodeTable />
                    </Col>
                </ModalBody>
            </Modal>
        } else return null;
    }

}

const mapStateToProps = ({ bankManagement, Authentication }) => {

    const { MTcustomer, MTBeneficiary } = bankManagement;
    const { LoginDetails } = Authentication;
    return { MTcustomer, MTBeneficiary, LoginDetails };
};

export default connect(mapStateToProps, {
    ifscSearchModal, GetCitiesList, GetBankBranchesList, SaveSelectedBranchId, GetBankIFSCOnSearch,
    ClearBeneBankDetails, GetStatesList
})(Search_IFSC_Modal);

function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 0, font: "bold" }} > *</span>
}