import React, { Component } from 'react';
import {
    Badge, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink, Button, ButtonDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody,
    Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon,
    InputGroupButton, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText
} from 'reactstrap';
import classnames from 'classnames';
import {
    ProcessMoneyTransfer, MoneyTransferAmount_Changed
} from '../BankManagement/BankManagementAction';
import { connect } from 'react-redux';
class MoneyTransfer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNoValidation: ''
        }
    }

    componentWillMount() {
        console.log("Component Will Mount")
        console.log(this.props.location.state)
        // if (this.props.location.state == undefined) {
        //     //this.props.history.push('/MoneyTransfer');
        // } else {
        let beneficiary = this.props.location.state.benificiaryInfo;
        this.props.ProcessMoneyTransfer({ beneficiary })
        //}
    }
    redirectTransferSuccess() {
        let transfAmount = this.props.moneyTransfer.processTransfer.transferAmount;
        if (transfAmount != '') {
            let transfTo = this.props.moneyTransfer.processTransfer.beneficiary.accountHolder;

            this.props.history.push({
                pathname: '/MoneyTransfer',
                state: { isRedirect: true, transferedAmount: transfAmount, transferedTo: transfTo }
            })

        }
    }
    renderTransferContainer() {
        console.log("============== renderTransferContainer ==")
        console.log(this.props.moneyTransfer.processTransfer)
        if (this.props.moneyTransfer.processTransfer.beneficiary != null) {
            let beneficiary = this.props.moneyTransfer.processTransfer.beneficiary; //accountHolder
            return <Form id="mm-create-course-form" action="" method="post" encType="multipart/form-data" className="form-horizontal">
                <FormGroup row style={{ marginTop: '20px' }}>
                    <Col md="5">

                        <Col>
                            <Label style={{ verticalAlign: 'sub' }}>BENEFICIARY FIRST NAME</Label>
                        </Col>

                        <Col>
                            <Label style={{ verticalAlign: 'sub', fontWeight: '600', fontSize: '18px' }}>{beneficiary.accountHolder}</Label>
                        </Col>
                    </Col>
                    <Col md="6">

                        <Col>
                            <Label style={{ verticalAlign: 'sub' }}>ACCOUNT NUMBER</Label>
                        </Col>

                        <Col>
                            <Label style={{ verticalAlign: 'sub', fontWeight: '600', fontSize: '18px' }}>{beneficiary.accountMobile}</Label>
                        </Col>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="5">

                        <Col>
                            <Label style={{ verticalAlign: 'sub' }}>BANK NAME</Label>
                        </Col>

                        <Col>
                            <Label style={{ verticalAlign: 'sub', fontWeight: '600', fontSize: '18px' }}>{beneficiary.bankName}</Label>
                        </Col>
                    </Col>
                    <Col md="6">

                        <Col>
                            <Label style={{ verticalAlign: 'sub' }}>IFSC CODE</Label>
                        </Col>

                        <Col>
                            <Label style={{ verticalAlign: 'sub', fontWeight: '600', fontSize: '18px' }}>{beneficiary.ifsc}</Label>
                        </Col>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="5">

                        <Col>
                            <Label htmlFor="transferAmount" style={{ verticalAlign: 'sub' }}>Enter the Amount To be Transfered</Label>
                        </Col>

                        <Col>
                            <InputGroup>
                                <div className="input-group-prepend">
                                    <span className="input-group-text">
                                        <i className="fa fa-rupee"></i>
                                    </span>
                                </div>
                                <Input ref={el => this.transferAmount = el}
                                    type="text" onChange={(e) => this.props.MoneyTransferAmount_Changed(e.target.value)}
                                    id="transferAmount" maxLength={6} required />
                                <FormText hidden={this.state.mobileNoValidation.length < 1}
                                    color="red"> {this.state.mobileNoValidation} </FormText>

                            </InputGroup>
                        </Col>
                    </Col>
                    <Col md="6">

                        <Col>
                            <Label style={{ verticalAlign: 'sub' }}>Transfer Option</Label>
                        </Col>

                        <Col>
                            <FormGroup check inline>
                                <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1" />
                                <Label className="form-check-label" check htmlFor="inline-radio1"
                                    style={{ fontWeight: '600', fontSize: '18px' }}>IMPS</Label>
                            </FormGroup>
                            <FormGroup check inline>
                                <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2" />
                                <Label className="form-check-label" check htmlFor="inline-radio2"
                                    style={{ fontWeight: '600', fontSize: '18px' }}>NEFT</Label>
                            </FormGroup>
                        </Col>
                    </Col>
                </FormGroup>
                <Col>
                    <FormGroup row>
                        <Col md="1">
                            <Button
                                outline
                                disabled={false}
                                onClick={() => {
                                    this.props.history.push({
                                        pathname: '/MoneyTransfer',
                                        //state: { benificiaryInfo: beneficiary }
                                    })
                                }}
                                color="secondary">Back</Button>

                        </Col>
                        <Col>
                            <Button
                                disabled={false}
                                onClick={() => this.redirectTransferSuccess()}
                                color="warning">Proceed</Button>
                        </Col>
                    </FormGroup>
                </Col>
            </Form>
        }
    }
    render() {
        console.log("Render Process Transfer")
        console.log(this.props)
        return (
            <Row>
                <Col xs="12" >
                    <Card>
                        <CardHeader>
                            <strong>Money Transfer </strong>
                        </CardHeader>
                        <CardBody >
                            {this.renderTransferContainer()}
                        </CardBody>
                    </Card>
                </Col>
            </Row >
        )
    }
}

const mapStateToProps = ({ bankManagement }) => {
    const { moneyTransfer } = bankManagement;

    return { moneyTransfer };
};

export default connect(mapStateToProps, {
    ProcessMoneyTransfer, MoneyTransferAmount_Changed
})(MoneyTransfer);

