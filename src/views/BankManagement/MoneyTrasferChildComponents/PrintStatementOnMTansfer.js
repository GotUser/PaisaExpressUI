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

import { Labelstyle1 } from '../../../GlobalVars'

class PrintStatementOnMTansfer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false,
            date: '',
        }

        this.PrintClicked = this.PrintClicked.bind(this);
        this.CanclePrint = this.CanclePrint.bind(this);

    }

    render() {
        return <div style={{margin:'3%'}} id="printableArea" className="animated fadeIn">
            <Row  >
                <Col xs="12" sm="12" md="9" style={{ backgroundColor: '#DCDCDC' }}>
                    <Card style={{ margin: '2%' }}>
                        <CardBody>
                            {/* <Form > */}
                            <Col xs="12">
                                <Form >
                                    <FormGroup row >
                                        <FormText style={Labelstyle1}>
                                            Beneficiary Information
                                               </FormText>

                                    </FormGroup>
                                    <FormGroup row>

                                        <Col md="5">
                                            <span>Bene Name </span>

                                        </Col>
                                        <Col xs="12" md="7">
                                            <span>Prashanth yejje </span>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col xs="12" md="5">
                                            Beneficiary MobileNo
                                        </Col>
                                        <Col xs="12" md="7">
                                            7382040877
                                        </Col>
                                    </FormGroup>

                                    {/* <FormGroup row>

                                        <Col xs="12" md="10">

                                            <FormText color="red"> </FormText>

                                        </Col>
                                    </FormGroup> */}

                                </Form>

                            </Col>
                            {/* </Form> */}
                        </CardBody>
                    </Card>



                    <Card style={{ margin: '2%' }}>
                        <CardBody>
                            {/* <Form > */}
                            <Col xs="12">
                                <Form >
                                    <FormGroup row >
                                        <FormText style={Labelstyle1}>
                                            Customer Information
                                               </FormText>

                                    </FormGroup>
                                    <FormGroup row>

                                        <Col md="5">
                                            <span>Customer Name </span>

                                        </Col>
                                        <Col xs="12" md="7">
                                            <span>{this.props.moneyTransfer.customerDetails.FullName} </span>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col xs="12" md="5">
                                            Customer MobileNo
                                        </Col>
                                        <Col xs="12" md="5">
                                            {this.props.moneyTransfer.customerMobileNo}
                                        </Col>
                                    </FormGroup>

                                    {/* <FormGroup row>

                                        <Col xs="12" md="10">

                                            <FormText color="red"> </FormText>

                                        </Col>
                                    </FormGroup> */}

                                </Form>

                            </Col>
                            {/* </Form> */}
                        </CardBody>
                    </Card>


                    <Card style={{ margin: '2%' }}>
                        <CardBody>
                            {/* <Form > */}
                            <Col xs="12">
                                <Form >
                                    <FormGroup row >
                                        <FormText style={Labelstyle1}>
                                            Deposit Information
                                               </FormText>

                                    </FormGroup>
                                    <FormGroup row>

                                        <Col md="5">
                                            <span>Deposit Account </span>

                                        </Col>
                                        <Col xs="12" md="7">
                                            <span>{this.props.moneyTransfer.processTransfer.beneficiary.acccountNo} </span>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col xs="12" md="5">
                                            Deposit Amount
                                        </Col>
                                        <Col xs="12" md="5">
                                            {this.props.moneyTransfer.processTransfer.beneficiary.Depositing}
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col xs="12" md="5">
                                            Amount Charged
                                        </Col>
                                        <Col xs="12" md="5">
                                            {this.props.SlabRateOnDepositAmount}
                                        </Col>

                                    </FormGroup>

                                    <FormGroup row>
                                        <Col xs="12" md="5">
                                            Transaction Code
                                        </Col>
                                        <Col xs="12" md="5">
                                            Txn12312
                                        </Col>

                                    </FormGroup>

                                </Form>

                            </Col>
                            {/* </Form> */}
                        </CardBody>
                    </Card>

                    <FormGroup style={{ paddingRight: '50', float: 'right' }} row>

                        <InputGroup>
                            <input type="button" onClick={this.PrintClicked} value="Print" />

                            <input type="button" onClick={this.CanclePrint} value="Cancle" />

                        </InputGroup>
                    </FormGroup>

                    <input type="button" onClick={() => printDiv('printableArea')} value="Print !!!1" />

                </Col>
            </Row>
        </div>
    }

    PrintClicked() {
        console.log(" PRINT CLICKED ")
        window.print();
    }

    CanclePrint() {
        // console.log(" CanclePrint  PRint Clickrd ")
        // var win = window.close('/#/PrintStatementOnMTansfer', '_blank');
        // win.focus();
        console.log("this.   CanclePrint() CanclePrint() ");
        console.log(this.props);

        this.props.history.push('/Dashboard');
    }
}

function printDiv(divName) {

    // console.log(" clicked  function printDiv(divName) function printDiv(divName) ")
    // var printContents = document.getElementById(divName).innerHTML;
    // var originalContents = document.body.innerHTML;

    // document.body.innerHTML = printContents;

    // window.print();

    // document.body.innerHTML = originalContents;
    window.open('/#/PrintStatementOnMTansfer', 'sharer', 'toolbar=0,status=0,width=548,height=325');
}

const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { moneyTransfer, benificiaryDetails, SlabRateOnDepositAmount } = bankManagement;

    const { LoginDetails, userRoleModulePermissions } = Authentication;

    return { moneyTransfer, benificiaryDetails, LoginDetails, userRoleModulePermissions, SlabRateOnDepositAmount };

};
export default connect(mapStateToProps, {
    CacleModalsInDisplayBeniList, SendMoneyTransferDetails
})(PrintStatementOnMTansfer);

