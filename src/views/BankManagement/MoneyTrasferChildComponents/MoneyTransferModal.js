import React, { Component } from 'react';
import {
    Row, Col, Button, Card, CardHeader, CardBody,
    Form, FormGroup, FormText, Label, Input, Alert,
    ListGroup, ListGroupItem, ListGroupItemText,
    InputGroup, Modal, ModalHeader, ModalBody, ModalFooter

} from 'reactstrap';

import {
    CacleModalsInDisplayBeniList, SendMoneyTransferDetails
} from '../BankManagementAction';
import { connect } from 'react-redux';

import { SingleDatePicker } from 'react-dates';

import { Labelstyle1 } from '../../../GlobalVars';


import Spinner from 'reactjs-simple-spinner'

class MoneyTransferModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

            focused: false,
            date: '',
        }
        // this.next = this.next.bind(this);
        // this.previous = this.previous.bind(this);
        // this.goToIndex = this.goToIndex.bind(this);
        // this.onExiting = this.onExiting.bind(this);
        // this.onExited = this.onExited.bind(this);
        // this.onDismiss = this.onDismiss.bind(this);
        this.TransferAmount = this.TransferAmount.bind(this);
    }


    renderConfirmTransactionDetails() {
        if (this.props.moneyTransfer.processTransfer.beneficiary != null) {
            const details = <Col>
                < FormGroup row>
                    <Col>
                        <Label style={Labelstyle1}>Bene. Name</Label>
                    </Col>
                    <Col>
                        <Label>{this.props.moneyTransfer.processTransfer.beneficiary.fullName}</Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label style={Labelstyle1}>Bene. Bank</Label>
                    </Col>
                    <Col>
                        <Label>{this.props.moneyTransfer.processTransfer.beneficiary.bankName}</Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label style={Labelstyle1}>Bene. Bank IFSC</Label>
                    </Col>
                    <Col>
                        <Label>{this.props.moneyTransfer.processTransfer.beneficiary.ifsc} </Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label style={Labelstyle1}>Bene. Account number</Label>
                    </Col>
                    <Col>
                        <Label>{this.props.moneyTransfer.processTransfer.beneficiary.acccountNo} </Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label style={Labelstyle1}>Transfer Amount</Label>
                    </Col>
                    <Col>
                        <Label>{this.props.moneyTransfer.processTransfer.beneficiary.Depositing}</Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label style={Labelstyle1}>Additional Charges</Label>
                    </Col>
                    <Col>
                        <Label>{this.props.SlabRateOnDepositAmount}</Label>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label style={Labelstyle1}>Total Amount</Label>
                    </Col>
                    <Col>
                        <Label>{parseFloat(this.props.SlabRateOnDepositAmount) + parseFloat(this.props.moneyTransfer.processTransfer.beneficiary.Depositing)}</Label>
                    </Col>
                </FormGroup>
                {/* {this.props.moneyTransfer.processTransfer.beneficiary.isVerified ? null :
                    <FormGroup row>
                        <body>
                            <span style={{ fontSize: 14, color: 'red' }}>Note:</span> <span style={{ fontSize: 11, color: 'red' }}>This Benificiary is Not Validated till now. If You Want To Validate Before Money Transfer, Click YES.</span>

                        </body>
                    </FormGroup>} */}
            </Col>
            if (this.props.moneyTransfer.TrasferOrScheduleOption === 'Schedule') {
                return <div>
                    {details}
                    <Col>
                        {/* <FormGroup row>
                            <Col>
                                <Label><strong>Transfer Scheduled Date</strong></Label>
                            </Col>
                            <Col>
                                <Label>{this.state.date}</Label>
                            </Col>
                        </FormGroup> */}
                        <FormGroup row>
                            <Col >
                                <Label style={Labelstyle1}>Schedule Date</Label>
                            </Col>
                            <Col >
                                <SingleDatePicker
                                    numberOfMonths={1}
                                    date={this.state.date} // momentPropTypes.momentObj or null

                                    onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
                                    focused={this.state.focused} // PropTypes.bool
                                    onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
                                />
                            </Col>
                        </FormGroup>
                    </Col>

                </div>
            } else {
                return <div>
                    {details}
                </div>
            }
        }
    }

    TransferAmount() {

        const Beni = this.props.moneyTransfer.processTransfer.beneficiary
        let Customer = this.props.moneyTransfer.customerDetails;

        console.log("Customer.mobileNo and  this.props.moneyTransfer.customerMobileNo");
        console.log(Customer.mobileNo);
        console.log(this.props.moneyTransfer.customerMobileNo);


        const CustomerNo = Customer.mobileNo === '' || Customer.mobileNo === null || Customer.mobileNo === undefined ? this.props.moneyTransfer.customerMobileNo : Customer.mobileNo
        const MoneyTransferDetails = {
            CustomerMobileNo: CustomerNo,
            AccountHolderName: Beni.fullName,
            BeneficiaryAccountNumber: Beni.acccountNo,
            BeneficiaryMobileNo: Beni.mobileNo,
            BankBranchId: Beni.bankBranchId,
            IFSC: Beni.ifsc,
            TransferAmount: Beni.Depositing,
            shouldValidate: true
        }

        console.log(this.props.moneyTransfer.processTransfer.beneficiary);
        console.log("Customer Mobile Number Is :" + Customer);
        console.log(CustomerNo);
        console.log(MoneyTransferDetails);
        let AccessToken = this.props.LoginDetails.accessToken;
        this.props.SendMoneyTransferDetails(AccessToken, MoneyTransferDetails);
        console.log(" Transfer Money Button Clicked :");
    }

    render() {
        return <div className="animated fadeIn">
            <Modal
                isOpen={this.props.moneyTransfer.displayTransferOrScheduleModal}
                className={'modal-warning ' + this.props.className}
            // className="modal-content bg-light"
            >
                <ModalHeader>
                    {/* {this.props.moneyTransfer.TrasferOrScheduleOption === 'Transfer' ? 'Transaction Details' : 'Schedule Your Transaction'} */}
                    Transaction Details
                    </ModalHeader>

                <ModalBody>
                    {this.renderConfirmTransactionDetails()}
                    {/* <hr /> */}
                    {this.props.moneyTransfer.processTransfer.SpinnerOnTransferMoney ?
                        <Spinner lineFgColor="#009900" lineBgColor="#555555" message="Don't Press Back Button. Wait..." /> : null
                    }
                </ModalBody>
                <span style={{ fontSize: 15, marginLeft: 20, color: 'red' }}>{this.props.moneyTransfer.processTransfer.ErrorOnMoneyTransfer}</span>
                < ModalFooter hidden={this.props.moneyTransfer.processTransfer.SpinnerOnTransferMoney} >
                    {/* {this.props.moneyTransfer.processTransfer.ErrorOnMoneyTransfer === '' ? */}
                    <Button color="success" onClick={this.TransferAmount}>
                        {/* {this.props.moneyTransfer.TrasferOrScheduleOption === 'Transfer' ? 'YES' : 'Schedule'} */}
                        Transfer
                        </Button>
                    {/* : null} */}
                    {/* {this.props.moneyTransfer.processTransfer.ErrorOnMoneyTransfer === '' ? */}
                    <Button color="danger" onClick={() => this.props.CacleModalsInDisplayBeniList()}>Cancle</Button>
                    {/* : null} */}
                    {/* <Button color="danger" 
                    onClick={() => this.props.CacleModalsInDisplayBeniList()}>
                        {this.props.moneyTransfer.processTransfer.ErrorOnMoneyTransfer === '' ? 'Cancle' : 'Ok'}
                    </Button> */}
                </ModalFooter>
            </Modal>
        </div>
    }
}


const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { moneyTransfer, benificiaryDetails, SlabRateOnDepositAmount } = bankManagement;

    const { LoginDetails, userRoleModulePermissions } = Authentication;

    return { moneyTransfer, benificiaryDetails, LoginDetails, userRoleModulePermissions, SlabRateOnDepositAmount };

};
export default connect(mapStateToProps, {
    CacleModalsInDisplayBeniList, SendMoneyTransferDetails
})(MoneyTransferModal);

