import React, { Component } from 'react';
import {
    Col,
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,
    FormText, Label, Input
} from 'reactstrap';



import { connect } from 'react-redux';


import { Labelstyle1, InputTextStyle, toTitleCase } from '../../../GlobalVars';

import { NumberRegex, UrlRegex, FullNameRegex, AlphNumericRegex, CustomRegex } from '../../AllRegexFormats';
import {
    SaveApiDetailsWarnings, SaveApiDetails, closeApiModal, EditAPI, AddNewAPI
} from '../BankManagementAction'



class Add_Or_Edit_APIs_Modal extends Component {


    contactSubmit(e) {
        e.preventDefault();

        if (this.handleValidation()) {
            let Data = this.props.APIs.AddOrEditAPI
            //    let i=this.props.APIs.index
            let AccessToken = this.props.LoginDetails.accessToken;
            if (this.props.APIs.EditOrAddApi == "Edit") {
                this.props.EditAPI(Data, AccessToken);

            } else this.props.AddNewAPI(Data, AccessToken);
        }
    }

    handleValidation() {
        let fields = this.props.APIs.AddOrEditAPI;

        let formIsValid = true;

        //Full  Name
        if (!fields.name || fields.name == '') {
            formIsValid = false;
            this.props.SaveApiDetailsWarnings("Required Full Name", 'name');
        }


        // Beneficiery Cost
        if (fields.beneVerificationCharges == '' || fields.beneVerificationCharges == null) {

            formIsValid = false;
            this.props.SaveApiDetailsWarnings(" Bene Cost Required", 'beniverifycost');
        }
        // transfer Charges
        if (fields.moneyTransferCharges == '' || fields.moneyTransferCharges == null) {
            formIsValid = false;
            this.props.SaveApiDetailsWarnings(" Transfer Charges Required", 'moneytrascharges');
        }
        // wallet 
        if (fields.walletMinAmountTrigger == '' || fields.walletMinAmountTrigger == null) {
            formIsValid = false;
            this.props.SaveApiDetailsWarnings(" Wallet Min Amount  Required", 'walletminamount');
        }

        return formIsValid;
    }



    render() {

        if (this.props.APIs.AddOrEditModal) {
            return <Modal size="lg" isOpen={this.props.APIs.AddOrEditModal}
                className={'modal-warning ' + this.props.className} >

                <ModalHeader style={{ fontWeight: "bold" }} >
                    {this.props.APIs.EditOrAddApi} API
            </ModalHeader>
                <ModalBody>
                    <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                        <FormGroup row >
                            <Col md="3">
                                <Label style={Labelstyle1} >Name   </Label>
                            </Col>
                            <Col xs="12" md="3">
                                <Input
                                    value={this.props.APIs.AddOrEditAPI.name != null ?
                                        this.props.APIs.AddOrEditAPI.name : ''}
                                    onChange={(val) => {
                                        let value = val.target.value;
                                        if (value === '' || value.match(FullNameRegex)) {
                                            this.props.SaveApiDetails(value, "name");
                                        } else this.props.SaveApiDetailsWarnings(" Please Enter Only letters", "name")
                                    }}
                                    style={InputTextStyle}
                                    placeholder="Enter  Name"
                                    class="inputText" required />
                                <FormText color="red"> {this.props.APIs.Warnings.name} </FormText>
                            </Col>
                            <Col md="3">
                                <Label style={Labelstyle1} >Bene Verify Cost(Rs/-)  </Label>
                            </Col>
                            <Col xs="12" md="3">
                                <Input
                                    // value={this.props.APIs.AddOrEditAPI.beneCost}
                                    value={this.props.APIs.AddOrEditAPI.beneVerificationCharges != null ?
                                        this.props.APIs.AddOrEditAPI.beneVerificationCharges : ''}
                                    onChange={(val) => {
                                        let value = val.target.value;
                                        if (value === '' || value.match(CustomRegex)) {
                                            this.props.SaveApiDetails(value, "beniverifycost");
                                        } else this.props.SaveApiDetailsWarnings(" Please Enter Only Numbers", "beniverifycost")
                                    }}
                                    style={InputTextStyle}
                                    placeholder="Enter Amount"
                                    class="inputText" required />
                                <FormText color="red"> {this.props.APIs.Warnings.beneVerificationCharges} </FormText>
                            </Col>

                        </FormGroup>

                        <FormGroup row >
                            <Col md="3">
                                <Label style={Labelstyle1} >Transfer Charges   </Label>
                            </Col>
                            <Col xs="12" md="3">
                                <Input
                                    // value={this.props.APIs.AddOrEditAPI.transferCharges }
                                    value={this.props.APIs.AddOrEditAPI.moneyTransferCharges != null ?
                                        this.props.APIs.AddOrEditAPI.moneyTransferCharges : ''}
                                    onChange={(val) => {
                                        let value = val.target.value;
                                        if (value === '' || value.match(AlphNumericRegex)) {
                                            this.props.SaveApiDetails(value, "moneytrascharges");
                                        } else this.props.SaveApiDetailsWarnings(" Please Enter Only Numbers", "moneytrascharges")
                                    }}
                                    placeholder="Enter Charges"
                                    class="inputText" required />
                                <FormText color="red"> {this.props.APIs.Warnings.moneyTransferCharges} </FormText>
                            </Col>
                            <Col md="3">
                                <Label style={Labelstyle1} >Priority   </Label>
                            </Col>
                            <Col xs="12" md="3">
                                <Input type="select"
                                    // placeholder="Enter Priority"
                                    onChange={(e) =>
                                        this.props.SaveApiDetails(e.target.value, 'priority')
                                    }
                                    class="inputText" required >
                                    <option>Select Priority</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </Input>
                            </Col>
                        </FormGroup>
                        <FormGroup row >
                            <Col md="3">
                                <Label style={Labelstyle1} >Wallet Min Amount Trigger  </Label>
                            </Col>
                            <Col xs="12" md="3">
                                <Input
                                    // value={this.props.APIs.AddOrEditAPI.walletMinAmount }
                                    value={this.props.APIs.AddOrEditAPI.walletMinAmountTrigger != null ?
                                        this.props.APIs.AddOrEditAPI.walletMinAmountTrigger : ''}
                                    onChange={(val) => {
                                        let value = val.target.value;
                                        if (value === '' || value.match(NumberRegex)) {
                                            this.props.SaveApiDetails(value, "walletminamount");
                                        } else this.props.SaveApiDetailsWarnings(" Please Enter Only Numbers", "walletminamount")
                                    }}
                                    placeholder="Enter  Min Amount"
                                    class="inputText" required />
                                <FormText color="red"> {this.props.APIs.Warnings.walletMinAmountTrigger} </FormText>
                            </Col>
                            <Col md="3">
                                <Label style={Labelstyle1} >Base Url    </Label>
                            </Col>
                            <Col xs="12" md="3">
                                <Input
                                    value={this.props.APIs.AddOrEditAPI.baseUrl}
                                    //    value={this.props.APIs.AddOrEditAPI.baseUrl ?
                                    //     this.props.APIs.AddOrEditAPI.baseUrl : ''}
                                    onChange={(val) => {
                                        let value = val.target.value;
                                        if (value === '' || value.match(UrlRegex)) {
                                            this.props.SaveApiDetails(value, "baseurl");
                                        }
                                        else this.props.SaveApiDetailsWarnings(" Please Enter Valid Url", "baseurl")
                                    }}
                                    placeholder="ex:www.google.com"
                                    class="inputText" required />
                                <FormText color="red"> {this.props.APIs.Warnings.baseUrl} </FormText>
                            </Col>
                        </FormGroup>
                    </Form>
                    {this.props.APIs.apiResults.EditOrAddApiFail ? <FormText color="red"> {this.props.APIs.apiResults.error} </FormText> : null}
                </ModalBody>
                <ModalFooter>
                    <Button style={{ width: 100 }} onClick={this.contactSubmit.bind(this)} color="warning" >Submit</Button>
                    <Button type="button" style={{ marginLeft: 10, width: 100 }}
                        onClick={() => {
                            this.props.closeApiModal();
                        }}
                    >Cancel</Button>
                </ModalFooter>

            </Modal>

        } else return null;
    }
}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails, userRoleModulePermissions } = Authentication;

    const { APIs } = bankManagement;

    return { LoginDetails, userRoleModulePermissions, APIs };

};

export default connect(mapStateToProps, {
    SaveApiDetails, SaveApiDetailsWarnings, closeApiModal, EditAPI, AddNewAPI


})(Add_Or_Edit_APIs_Modal);
