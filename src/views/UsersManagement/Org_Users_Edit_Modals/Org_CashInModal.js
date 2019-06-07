import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table,
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,
    FormText, Label, Input, Collapse, Item, Text
} from 'reactstrap';

import { connect } from 'react-redux';

import "react-toggle/style.css"


import {
    Cancle_Organization_Edit_Modal, CashInProceedForOrganizationUser, SaveCashInAmount
} from '../UserManagementAction';


import '../../../../public/CustomStyles.css';

import { NumberRegex, FullNameRegex } from '../../AllRegexFormats';


class Org_CashInModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        let OrgDetails = this.props.OrganizationDetails.EditOrganizationDetails;
        if (OrgDetails.CashInClicked) {

            return <Modal
                isOpen={OrgDetails.CashInClicked}
                className={'modal-warning ' + this.props.className} >

                <ModalHeader >
                    CashIn
                 </ModalHeader>
                <ModalBody>

                    <Row >
                        <Col xs="12" md="6" style={{ borderRight: '1px solid orange' }} >

                            <Col xs="12" style={{ fontFamily: 'bold', fontSize: 20 }} >
                                <Label htmlFor="name">
                                    {OrgDetails.EditingUserData.name}  </Label>
                            </Col>

                            <Col xs="12" style={{ fontFamily: 'bold', fontSize: 20 }} >
                                <Label htmlFor="mobileNo">
                                    {OrgDetails.EditingUserData.mobileNo}  </Label>
                            </Col>

                        </Col>
                        <Col xs="12" md="5" style={{ alignSelf: 'center' }} >

                            <FormText style={{ color: 'green', fontSize: 13 }} > Current Wallet :  <strong> {OrgDetails.EditingUserData.walletBalance} </strong>
                            </FormText>

                            <Input style={{ fontFamily: 'bold', fontSize: 20 }}
                                value={this.props.OrganizationDetails.CashInAmount}
                                maxLength={7}
                                onChange={(e) => {
                                    let re = /^[0-9\b]+$/;
                                    if (e.target.value == '' || re.test(e.target.value)) {

                                        // this.setState({ CashInAmount: e.target.value })
                                        this.props.SaveCashInAmount(e.target.value);
                                    }
                                }
                                }
                                placeholder="Enter Amount" />
                        </Col>
                    </Row>
                </ModalBody>
                <ModalFooter style={{ textAlign: 'center', alignContent: 'center', alignSelf: 'center' }}>

                    <Button style={{ width: 100 }} color="warning"
                        onClick={() => this.SaveEdditedDistributorDetails()}
                        disabled={this.props.OrganizationDetails.CashInAmount.length === 0 ? true : false}
                        onClick={() => {
                            var AccessToken = this.props.LoginDetails.accessToken;
                            this.props.CashInProceedForOrganizationUser(AccessToken, OrgDetails.EditingUserData.mobileNo,
                                this.props.OrganizationDetails.CashInAmount)
                        }}
                    > Proceed</Button>
                    <Button style={{ width: 100 }} onClick={() => { this.props.Cancle_Organization_Edit_Modal() }}>Cancel</Button>
                </ModalFooter>
            </Modal>
        } else if (this.props.OrganizationDetails.OrgApiResults.OrgCashInSuccess) {

            return <Modal size="lg" isOpen={this.props.OrganizationDetails.OrgApiResults.OrgCashInSuccess}
                className={'modal-success ' + this.props.className}>
                <ModalHeader>Success..!</ModalHeader>

                <ModalBody >
                    <span style={{ marginLeft: '5%', fontSize: 16, }} >
                        Organization Cash In is Success. </span>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => { this.props.clearResponseOnORGApis() }}>OK</Button>
                </ModalFooter>
            </Modal>
        }
        else return null;
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { OrganizationDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { OrganizationDetails, LoginDetails };
};

export default connect(mapStateToProps, {
    Cancle_Organization_Edit_Modal, CashInProceedForOrganizationUser, SaveCashInAmount
})(Org_CashInModal);
