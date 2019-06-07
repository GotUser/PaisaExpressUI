import React, { Component } from 'react';
import {
    Row, Col, Button, Card, CardHeader, CardBody,
    FormGroup, FormText, Label, Input, Alert,
    ListGroup, ListGroupItem, ListGroupItemText,
    Modal, ModalBody, ModalFooter, ModalHeader,
    InputGroup,
} from 'reactstrap';
import { connect } from 'react-redux';

import {
    ProcessMoneyTransfer, RemoveBeni, OpenMoneyTransferOrScheduleModal, OpenScheduleMoneyTransferModal,
    ChangeBeniValuesOnTransfer, GetSlabRateForDepositingAmount, OpenRemoveBeneficiaryModal, CloseRemoveBeniModal
} from '../BankManagementAction';
import { placeHolderColor } from '../../AllRegexFormats';

import PrintStatementOnMTansfer from './PrintStatementOnMTansfer';

// import moment from 'moment';

class DisplayBeniList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Errors: {},
            date: '',
            sampletext: ' '
        }
        // this.TransferAmount = this.TransferAmount.bind(this, 'beni');
    }
    SaveCustomerName(val) {

    }
    focusField(fieldValue) {
        if (fieldValue === undefined) {
            return '';
        }
        else {
            return 'is-invalid'
        }
    }

    TrasferModeUI(beni, indx) {

        if (this.props.moneyTransfer.processTransfer.beneficiary != null) {
            if (this.props.moneyTransfer.processTransfer.beneficiary.accountNo === beni.accountNo && this.props.moneyTransfer.selectedBeneficiaryIndex === indx) {
                console.log(" beni.ImpsOrNeft beni.ImpsOrNeft beni.ImpsOrNeft  " + beni.ImpsOrNeft);
                return <FormGroup >

                    <Col>
                        <Row>
                            <FormGroup check inline>
                                <Input
                                    checked={beni.ImpsOrNeft === 'IMPS'}
                                    onChange={(val) =>
                                        this.props.ChangeBeniValuesOnTransfer('IMPS', 'ImpsOrNeft', indx)
                                    }
                                    className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                <Label className="form-check-label" check htmlFor="inline-radio1"
                                    style={{ fontWeight: '200', fontSize: '18px' }}>IMPS</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input
                                    checked={beni.ImpsOrNeft === 'NEFT'}
                                    onChange={(val) =>
                                        this.props.ChangeBeniValuesOnTransfer('NEFT', 'ImpsOrNeft', indx)
                                    }
                                    className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                <Label className="form-check-label" check htmlFor="inline-radio2"
                                    style={{ fontWeight: '200', fontSize: '18px' }}>NEFT</Label>
                            </FormGroup>
                        </Row>
                        <Row>
                            {/* <FormGroup style={{ marginLeft: 0, alignSelf: 'flex-start' }} check inline> */}
                            <div style={{ marginLeft: 0, alignSelf: 'flex-start' }} check >
                                <FormText
                                    //  hidden={false}
                                    color="white"> Depositing </FormText>
                                <InputGroup>
                                    <div style={{ tabSize: 10 }} className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-rupee"></i>
                                        </span>
                                    </div>

                                    <Input
                                        type="text"
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            const re = /^[0-9\b]+$/;
                                            if (value == '' || re.test(value)) {
                                                this.props.ChangeBeniValuesOnTransfer(e.target.value, 'Depositing', indx)
                                            }
                                        }}
                                        id="transferAmount"
                                        maxLength={7}
                                        value={beni.Depositing}
                                        placeholder="eg: 15000" />

                                </InputGroup>
                            </div>
                            <div style={{ marginLeft: 10 }} check >
                                <FormText
                                    //  hidden={false}
                                    color="white"> {this.state.sampletext}  </FormText>
                                <InputGroup style={{ marginTop: '28%' }} >
                                    <Button
                                        disabled={beni.Depositing === ''}
                                        onClick={() => {
                                            let AccessToken = this.props.LoginDetails.accessToken;
                                            this.props.GetSlabRateForDepositingAmount(AccessToken, beni.Depositing)
                                        }

                                            // this.TransferAmount.bind(this, beni)
                                        }
                                        color="warning">Transfer</Button>

                                </InputGroup>
                            </div>

                            {/* </FormGroup> */}

                            {/* <FormGroup check inline>
                            <FormGroup style={{ marginLeft: 0 }} check >
                                <FormText hidden={false}
                                    color="white"> Depositing </FormText>
                                <InputGroup>
                                    <div style={{ tabSize: 10 }} className="input-group-prepend">
                                        <span className="input-group-text">
                                            <i className="fa fa-rupee"></i>
                                        </span>
                                    </div>

                                    <Input
                                        type="text"
                                        onChange={(e) => {
                                            let value = e.target.value;
                                            const re = /^[0-9\b]+$/;
                                            if (value == '' || re.test(value)) {
                                                this.props.ChangeBeniValuesOnTransfer(e.target.value, 'Depositing', indx)
                                            }
                                        }}
                                        id="transferAmount"
                                        maxLength={7}
                                        value={beni.Depositing}
                                        placeholder="eg: 15000" />

                                </InputGroup>
                            </FormGroup>                            
                        </FormGroup> */}
                            <span style={{ fontSize: 16, marginLeft: '5%', color: 'black' }}> {this.props.ApiResponseOnBene.ErrorOnGetSlabRate ? this.props.ApiResponseOnBene.ErrorMsg : null} </span>
                        </Row>
                        <span> On failure transaction amount will be refund with in 72 hours. </span>
                        {/* <FormGroup style={{ marginTop: 10 }}
                            check inline
                        >
                            <FormGroup style={{ marginLeft: 0 }} check >
                                <Button
                                    disabled={beni.Depositing === ''}
                                    onClick={() => {
                                        let AccessToken = this.props.LoginDetails.accessToken;
                                        this.props.GetSlabRateForDepositingAmount(AccessToken, beni.Depositing)
                                    }

                                        // this.TransferAmount.bind(this, beni)
                                    }
                                    color="warning">Transfer</Button>
                                <span> On failure transaction amount will be refund with in 72 hours. </span>

                            </FormGroup>

                            <FormGroup check inline>
                                <Button
                                    style={{ backgroundColor: '#e68d4c' }}
                                    onClick={() =>
                                        // this.ScheduleMoneyTransfer()
                                        this.props.OpenMoneyTransferOrScheduleModal("Schedule")
                                    }
                                    color="warning">Schedule</Button>
                            </FormGroup>
                        </FormGroup> */}
                    </Col>
                </FormGroup >
            } else return null;
        } else return null
    }
    TransferAmount(beni) {
        console.log(" Transfer Money Clicked:");
        console.log(beni);

        this.props.OpenMoneyTransferOrScheduleModal("Transfer", beni);
    }

    ScheduleMoneyTransfer() {
        let val = !this.state.displaySchedulerModal;
        this.props.OpenScheduleMoneyTransferModal();
    }

    Child_Transfer_Benef_Click(benfry, indx) {
        let beneficiary = benfry;
        if (this.props.moneyTransfer.processTransfer.beneficiary.acccountNo === benfry.acccountNo && this.props.moneyTransfer.selectedBeneficiaryIndex === indx) {
            console.log(" #   #    #    #    #    #    #    #   #   #    #   #   # You are alreday in the same beni details    #  # ");
        } else this.props.ProcessMoneyTransfer({ beneficiary, indx })
    }
    render() {

        return (
            <Row
                style={{ height: '100%' }}
            >
                <Col xs="12" style={{
                    borderLeft: '1px solid orange'
                }}>

                    <Card>
                        <CardHeader style={{ borderBottomColor: '#ffa500', borderBottomWidth: '2px' }}>
                            <strong>{this.props.moneyTransfer.customerMobileNo}'s</strong>
                            <small> <i>Saved Beneficiaries</i></small>
                        </CardHeader>
                        <CardBody>
                            <ListGroup style={{
                                // maxHeight: 'calc(100vh - 50px)',
                                overflowY: 'auto',
                                margin: -10

                            }}>

                                {console.log(" > > >>>>> >>>>>>>>>>>>>>>>>>> >>>>>>>>>>>>>this.props.moneyTransfer.benificiaries In BENI LISt COMP >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>")}
                                {console.log(this.props.moneyTransfer.benificiaries)}
                                {
                                    this.props.moneyTransfer.benificiaries !== {} && this.props.moneyTransfer.benificiaries !== '' && this.props.moneyTransfer.benificiaries !== null ?
                                        // this.props.moneyTransfer.benificiaries.length > 0 ?

                                        this.props.moneyTransfer.benificiaries.map((benificiary, i) => (

                                            <ListGroupItem key={i} style={{ marginBottom: 5, paddingBottom: 0, fontSize: '14px' }}
                                                active={this.props.moneyTransfer.selectedBeneficiaryIndex == i ? true : false}
                                                onClick={() => {
                                                    this.Child_Transfer_Benef_Click(benificiary, i);
                                                }}
                                                action >

                                                <ListGroupItemText>
                                                    <span
                                                    // onClick={() => {
                                                    //     this.Child_Transfer_Benef_Click(benificiary, i);
                                                    // }} 
                                                    >
                                                        <strong>{benificiary.fullName}</strong>  {benificiary.acccountNo} | {benificiary.bankName}  | {benificiary.mobileNo} </span>
                                                    <strong style={{ marginTop: -20 }} className="d-flex justify-content-end" ><i onClick={() =>
                                                        // this.RemoveBenificiary(benificiary, i)


                                                        this.props.OpenRemoveBeneficiaryModal(benificiary, i)

                                                    } bsSize style={{ alignSelf: 'flex-end', }} className="fa fa-trash-o"></i>
                                                    </strong>

                                                    {this.TrasferModeUI(benificiary, i)}
                                                </ListGroupItemText>
                                            </ListGroupItem>
                                        ))
                                        : <ListGroupItem style={{ paddingBottom: 0, fontSize: '14px' }} disabled={true}>
                                            <ListGroupItemText>
                                                <strong>No Beneficiaries found</strong>
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                }
                            </ListGroup>
                        </CardBody>
                    </Card >
                </Col>
                {/* <PrintStatementOnMTansfer /> */}
            </Row>
        )
    }
}

const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { moneyTransfer, benificiaryDetails, ApiResponseOnBene, BeneDetailsToRemove, BeneIndexToRemove, OpenRemoveBeniModal
    } = bankManagement;

    const { LoginDetails, userRoleModulePermissions } = Authentication;

    return {
        moneyTransfer, benificiaryDetails, LoginDetails, userRoleModulePermissions, ApiResponseOnBene,
        BeneDetailsToRemove, BeneIndexToRemove, OpenRemoveBeniModal
    };
};

export default connect(mapStateToProps, {

    ProcessMoneyTransfer, RemoveBeni, OpenMoneyTransferOrScheduleModal, OpenScheduleMoneyTransferModal,
    ChangeBeniValuesOnTransfer, GetSlabRateForDepositingAmount, OpenRemoveBeneficiaryModal, CloseRemoveBeniModal
})(DisplayBeniList);
