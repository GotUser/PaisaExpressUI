import React, { Component } from 'react';
import {
    Row, Col,
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
    FormText, Label, Input,
} from 'reactstrap';

import { connect } from 'react-redux';

import "react-toggle/style.css"

import { NumberRegex, FullNameRegex } from '../../AllRegexFormats';

import {
    SaveWalletBalancetoUpdate,
    Cancle_Organization_Edit_Modal, AddFundsToOrgWallet, AddFundsToUserWallet, clearResponseOnORGApis
} from '../UserManagementAction';
import '../../../../public/CustomStyles.css';

class Update_Wallet_Balance extends Component {

    constructor(props) {
        super(props);
        this.state = {

        },
            this.SaveBalance = this.SaveBalance.bind(this);

    }

    SaveBalance() {

        let AccessToken = this.props.LoginDetails.accessToken
        let OperatingUserId = this.props.LoginDetails.UserId;
        let Amount = this.props.OrganizationDetails.WalletBalanceToAdd;
        if (this.props.OrganizationDetails.walletUpdateisFor === 'Org') {

            let OrgId = this.props.OrganizationDetails.EditOrganizationDetails.EditingUserData.tenantId;
            this.props.AddFundsToOrgWallet(AccessToken, OperatingUserId, OrgId, Amount);

        } else if (this.props.OrganizationDetails.walletUpdateisFor === 'User') {

            let userId = this.props.UserDetails.UserDetailsToEdit.userId;
            // let Amount = this.props.OrganizationDetails.WalletBalanceToAdd;

            this.props.AddFundsToUserWallet(AccessToken, OperatingUserId, userId, Amount);
        }


    }

    render() {
        // console.log("currentBal:" + this.props.OrganizationDetails.currentBalance);
        let OrgDetails = this.props.OrganizationDetails;
        if (OrgDetails.updateWalletClicked && !OrgDetails.OrgApiResults.SuccessOnSubmitOrgDetail) {

            return <Modal
                isOpen={OrgDetails.updateWalletClicked}
                className={'modal-warning ' + this.props.className} >

                <ModalHeader >
                    Update Wallet Balance
                 </ModalHeader>
                <ModalBody>

                    <Row >
                        <Col xs="12" md="6" style={{ borderRight: '1px solid orange' }} >

                            <Col xs="12" style={{ fontFamily: 'bold', fontSize: 20 }} >
                                <Label htmlFor="name">Wallet Balance </Label>
                            </Col>
                            <Col xs="12" style={{ fontFamily: 'bold', fontSize: 20 }} >
                                <Label htmlFor="mobileNo">
                                    {this.props.OrganizationDetails.walletUpdateisFor === 'Org' ? OrgDetails.EditOrganizationDetails.EditingUserData.walletBalance
                                        : this.props.UserDetails.UserDetailsToEdit.walletBalance
                                    }

                                </Label>
                            </Col>
                        </Col>

                        <Col xs="12" md="6" style={{ alignSelf: 'center' }} >

                            <FormText style={{ color: 'green', fontSize: 13 }} > Add Money To Wallet </FormText>

                            <Input style={{ fontFamily: 'bold', fontSize: 20 }}
                                value={this.props.OrganizationDetails.WalletBalanceToAdd}
                                maxLength={7}
                                onChange={(e) => {
                                    let Value = e.target.value;
                                    if (Value === '' || Value.match(NumberRegex)) {

                                        this.props.SaveWalletBalancetoUpdate(Value);
                                    }
                                }}
                                placeholder="Enter Amount" />
                        </Col>
                    </Row>
                </ModalBody>
                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                    {this.props.OrganizationDetails.OrgApiResults.Error}</span>
                <ModalFooter style={{ textAlign: 'center', alignContent: 'center', alignSelf: 'center' }}>

                    <Button style={{ width: 100 }} color="warning"
                        onClick={this.SaveBalance}
                        disabled={this.props.OrganizationDetails.WalletBalanceToAdd === "" ||
                            parseInt(this.props.OrganizationDetails.WalletBalanceToAdd) === 0}
                    > Submit</Button>
                    <Button style={{ width: 100 }} onClick={() => this.props.Cancle_Organization_Edit_Modal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        } else if (this.props.OrganizationDetails.OrgApiResults.UpdateOrgOrUserWallet) {

            // return <Modal size="lg" isOpen={this.props.OrganizationDetails.OrgApiResults.UpdateOrgOrUserWallet}
            //     className={'modal-success ' + this.props.className}>
            //     <ModalHeader>Success..!</ModalHeader>

            //     <ModalBody >
            //         <span style={{ marginLeft: '5%', fontSize: 16, }} >
            //             Organization Wallet is Updated Successfully. </span>
            //     </ModalBody>
            //     <ModalFooter>
            //         <Button color="secondary" onClick={() => { this.props.clearResponseOnORGApis() }}>OK</Button>
            //     </ModalFooter>
            // </Modal>

            return null
        }

        else return null;
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { OrganizationDetails, UserDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { OrganizationDetails, LoginDetails, UserDetails };
};

export default connect(mapStateToProps, {
    Cancle_Organization_Edit_Modal, SaveWalletBalancetoUpdate, AddFundsToOrgWallet, AddFundsToUserWallet, clearResponseOnORGApis
})(Update_Wallet_Balance);
