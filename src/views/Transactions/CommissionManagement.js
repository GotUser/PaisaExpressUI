import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, CardFooter, Container, ButtonDropdown, DropdownToggle,
    Button, Collapse, Form, FormGroup, FormText, Label, DropdownItem, Input, InputGroup, InputGroupAddon,
    InputGroupButton, DropdownMenu,
} from 'reactstrap';
import { } from './TransactionsAction'
import { connect } from 'react-redux';
import NestedInput from './FieldArrayEx';

class CommissionManagement extends Component {


    constructor(props) {
        super(props);

        this.selectBankdropdownOpentoggle = this.selectBankdropdownOpentoggle.bind(this);
        this.selectBankStatedropdownOpentoggle = this.selectBankStatedropdownOpentoggle.bind(this);
        this.selectBankBranchDropDownOpenToggle = this.selectBankBranchDropDownOpenToggle.bind(this);
        this.SubmitButton = this.SubmitButton.bind(this);

        this.select = this.select.bind(this);
        this.state = {
            selectBankdropdownOpen: false,
            selectedBank: "$",
            rateType: ['$', '%'],

            selectBankStatedropdownOpen: false,
            selectedBankState: "Select State",
            bankStates: ['AP', 'TELANGANA', 'TAMIlNADU'],

            selectBankBranchDropDownOpen: false,
            selectedBankBranch: "Select Branch",
            bankBranches: ['Maredpally', 'Sec', 'kukatpally', 'Jntu', 'Amerpet'],

            buttonLoad: false,
            values: [] 
        };
    }

    //All Toggles Of DROPDOWNS

    selectBankdropdownOpentoggle() {
        this.setState({
            selectBankdropdownOpen: !this.state.selectBankdropdownOpen
        });
    }

    selectBankStatedropdownOpentoggle() {
        this.setState({
            selectBankStatedropdownOpen: !this.state.selectBankStatedropdownOpen
        });
    }
    selectBankBranchDropDownOpenToggle() {
        this.setState({
            selectBankBranchDropDownOpen: !this.state.selectBankBranchDropDownOpen
        });
    }

    // Storing Selected Item From  DROPDOWNS

    select(event) {

        if (this.state.selectBankdropdownOpen) {
            this.setState({
                selectBankdropdownOpen: !this.state.selectBankdropdownOpen,
                selectedBank: event.target.innerText
            });
        }

        if (this.state.selectBankStatedropdownOpen) {
            this.setState({
                selectBankStatedropdownOpen: !this.state.selectBankStatedropdownOpen,
                selectedBankState: event.target.innerText
            });
        }

        if (this.state.selectBankBranchDropDownOpen) {
            this.setState({
                selectBankBranchDropDownOpen: !this.state.selectBankBranchDropDownOpen,
                selectedBankBranch: event.target.innerText
            });

        }
    }


    SubmitButton() {
        console.log(" this.SubmitButton")
        this.setState({
            buttonLoad: true,
            progress: 0.5
        })
    }


    render() {
        console.log('props')
        console.log(this.props)
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12">

                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <FormGroup row>
                                <Col md="2">
                                    <Label htmlFor="text-input">Commission Name</Label>
                                </Col>
                                <Col xs="12" md="4">
                                    <Input type="text" id="text-input" name="text-input" placeholder="text" />
                                    {/* <FormText color="muted">Enter a unique commission name</FormText> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="2">
                                    <NestedInput comValue = {this.state.values}/>
                                </Col>
                            </FormGroup>

                            <FormGroup row>
                                <Col md="2">
                                    <Label htmlFor="text-input">Description</Label>
                                </Col>
                                <Col xs="12" md="4">
                                    <Input type="text" id="text-input" name="text-input" placeholder="text" />
                                    {/* <FormText className="help-block">Please give a description to the slab</FormText> */}
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="2">
                                    <Label htmlFor="text-input">Minimum Value</Label>
                                </Col>
                                <Col xs="12" md="4">
                                    <Input type="text" id="text-input" name="text-input" placeholder="min value" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="2">
                                    <Label htmlFor="text-input">Maximum Value</Label>
                                </Col>
                                <Col xs="12" md="4">
                                    <Input type="text" id="text-input" name="text-input" placeholder="max value" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="2">
                                    <Label htmlFor="text-input">Rate</Label>
                                </Col>
                                <Col xs="12" md="4">
                                    <Input type="text" id="text-input" name="text-input" placeholder="number" />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md="2">
                                    <Label htmlFor="text-input">Rate Type</Label>
                                </Col>
                                <Col xs="12" md="4">
                                    <ButtonDropdown isOpen={this.state.selectBankdropdownOpen} toggle={this.selectBankdropdownOpentoggle}>
                                        <DropdownToggle caret>
                                            {this.state.selectedBank}

                                        </DropdownToggle>
                                        <DropdownMenu>
                                            {this.state.rateType.map((bankName) => <DropdownItem key={bankName} onClick={this.select}>{bankName}</DropdownItem>)}

                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </Col>
                            </FormGroup>
                            <Button color="warning" onClick={() => { this.props.testing() }}>Submit</Button>
                        </Form>

                    </Col>
                </Row>
            </div>
        );
    }
}

//export default CommissionManagement;


const mapStateToProps = ({ transaction }) => {
    const { chatText } = transaction;

    return { chatText };
};

export default connect(mapStateToProps, {
    
})(CommissionManagement);
