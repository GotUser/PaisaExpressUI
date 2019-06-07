
import React, { Component } from 'react';
import {
    Row, Col, Button, Card, CardHeader, CardFooter, CardBody,
    Form, FormGroup, FormText, Label, Input, Alert, ButtonDropdown,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Collapse,
    DropdownToggle, DropdownMenu, DropdownItem,
    InputGroup, InputGroupAddon, Item, Text,
    InputGroupButton,
    Modal, ModalHeader, ModalBody, ModalFooter

} from 'reactstrap';
import classnames from 'classnames';

import { connect } from 'react-redux';

import {
     onCustomerMobileNoChanged, 
      ProcessMoneyTransfer, getBankDetails, onBeneficiaryEdit,
      
} from '../BankManagement/BankManagementAction';


import { placeHolderColor } from '../AllRegexFormats';

import { SingleDatePicker } from 'react-dates';
// import moment from 'moment';

class MTCustomerDetails extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Errors: {},
            date: '',
        }

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

    render() {

        return <Card>
            <CardHeader style={{ borderBottomColor: '#ffa500', borderBottomWidth: '2px' }}>
                <strong>Customer Details</strong>
            </CardHeader>
            <CardBody>
                <Form >
                    <Col xs="12">
                        <Form >
                            <FormGroup row >
                                <i
                                    style={{ marginRight: -5, marginTop: -5, color: 'red' }}
                                >*</i>
                                <Col md="5">
                                    <Input type="text" bsSize="sm"
                                        onChange={(val) => this.SaveCustomerName(val)}
                                        id="ACno" placeholder="Enter Customer Name" />
                                </Col>

                                <Col md="5">
                                    <div className="user-input-wrp">
                                        <Input
                                            // onChange={this.handleChange.bind(this, "mobileNo")}
                                            // maxLength={10}
                                            style={{ fontWeight: 'bold' }}
                                            className="inputText" required />
                                        <span style={{ color: placeHolderColor }} className="floating-label">Email Id</span>
                                    </div>
                                </Col>

                            </FormGroup>

                            <FormGroup row>

                                <Col md="5">

                                    <Input type="date" bsSize="sm" name="date" id="exampleDate"
                                        placeholder="date placeholder"
                                        title="Date Of Birth"
                                    />
                                </Col>
                                <Col xs="12" md="7">
                                    <FormGroup tag="fieldset" >
                                        <Label check>

                                        </Label>
                                        <Label style={{ marginLeft: 25 }} check>
                                            <Input type="radio" name="Male" />{' '}
                                            Male
                                              </Label>
                                        <Label style={{ marginLeft: 25 }} check>
                                            <Input type="radio" name="Female" />{' '}
                                            Female
                                              </Label>

                                    </FormGroup>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col xs="12" md="5">
                                    <Input bsSize="sm"
                                        type="select" name="selectEKYC" id="selectEKYC"
                                        onChange={(e) => {
                                            let field = 'eKYC'
                                            this.onCustomerEditChange({ e, field })
                                        }}
                                        value={this.props.moneyTransfer.customerDetails.selectedEKYC}
                                        className={this.focusField(this.state.Errors["ekycDDL"])}>
                                        <option
                    
                                            value="0"> Select KYC </option>
                                        <option>PAN</option>
                                        <option>AADHAR</option>
                                        <option>DRIVING LICENSE</option>
                                        <option>VOTER ID</option>
                                    </Input>
                                </Col>
                                <Col xs="12" md="5">
                                    <Input disabled={this.props.moneyTransfer.customerDetails.selectedEKYC === ''} bsSize="sm" type="text"
                                        placeholder={this.props.moneyTransfer.customerDetails.selectedEKYC + " Number"} />
                                </Col>
                            </FormGroup>

                            <FormGroup row>

                                <Col xs="12" md="10">


                                    <Input type="text" bsSize="sm" onChange={(e) => {
                                        let field = 'Address'
                                        this.onCustomerEditChange({ e, field })
                                    }}
                                        value={this.props.moneyTransfer.customerDetails.address}
                                        className={this.focusField(this.state.Errors["address"])}
                                        id="NewAddress" placeholder="Address" maxLength={150} />
                                    <FormText color="red"> </FormText>

                                </Col>
                            </FormGroup>

                        </Form>

                    </Col>
                </Form>
            </CardBody>
        </Card>

    }
}

const mapStateToProps = ({ bankManagement ,Authentication }) => {
    const { moneyTransfer, benificiaryDetails } = bankManagement;

    const { LoginDetails, userRoleModulePermissions } = Authentication;

    return { moneyTransfer, benificiaryDetails ,LoginDetails, userRoleModulePermissions };

};

export default connect(mapStateToProps, {
     onCustomerMobileNoChanged, 
      ProcessMoneyTransfer, getBankDetails, onBeneficiaryEdit,
      
})(MTCustomerDetails);
