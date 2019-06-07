import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, CardFooter, Container, ButtonDropdown, DropdownToggle,
    Button, Collapse, Form, FormGroup, FormText, Label, DropdownItem, Input, InputGroup, InputGroupAddon,
    InputGroupButton, DropdownMenu
} from 'reactstrap';

import { getCommissionById } from './TransactionsAction'
import { connect } from 'react-redux';


class CreateCommission extends Component {
    constructor(props) {
        super(props);
        this.selectRateTypedropdownOpentoggle = this.selectRateTypedropdownOpentoggle.bind(this);
        // this.select = this.select.bind(this);
        this.state = {
            values: [],
            slabs: [],
            selectRateTypedropdownOpen: false,
            selectedRateType: "$",
            rateType: ['$', '%'],


        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(i, event) {
        console.log('handleChange')
        let slabs = [...this.state.slabs];
        console.log(slabs);
        slabs[i].min = event.target.value;
        this.setState({ slabs });
    }
    handleChange1(i, event) {
        let slabs = [...this.state.slabs];
        slabs[i].max = event.target.value;
        this.setState({ slabs });
    }
    handleChange2(i, event) {
        let slabs = [...this.state.slabs];
        slabs[i].rate = event.target.value;
        this.setState({ slabs });
    }

    handleChange3(i, event) {
        console.log('handle3')
        console.log(event)
        let slabs = [...this.state.slabs];
        slabs[i].rateType = event.target.value;
        this.setState({ slabs });
    }
    selectRateTypedropdownOpentoggle() {
        this.setState({
            selectRateTypedropdownOpen: !this.state.selectRateTypedropdownOpen
        });
    }
    select(i, event) {
        console.log(i);
        console.log(event.target.innerText);
        console.log(this.state)

        if (this.state.selectRateTypedropdownOpen) {
            let slabs = [...this.state.slabs];
            slabs[i].rateType = event.target.innerText;
            this.setState({
                selectRateTypedropdownOpen: !this.state.selectRateTypedropdownOpen,
                selectedRateType: event.target.innerText,
                slabs
            });
        }
    }
    createUI() {
        // return this.state.slabs.map((el, i) =>
        return this.state.slabs.map((el, i) =>
            <div key={i}>
                <Row style={{ marginTop: 5, borderBottomStyle: 'solid', borderWidth: 1 }}>
                    <Col xs="12" md="3" cellPadding={0}>
                        <FormGroup cols onChange={this.handleChange.bind(this, i)}>
                            <Label htmlFor="text-input">Minimum Value</Label>
                            <Input type="text" id="text-input" name="text-input" placeholder="min value" value={el.min || ''} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="3">
                        <FormGroup cols onChange={this.handleChange1.bind(this, i)}>
                            <Label htmlFor="text-input">Maximum Value</Label>
                            <Input type="text" id="text-input" name="text-input" placeholder="max value" value={el.max || ''} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="2">
                        <FormGroup cols onChange={this.handleChange2.bind(this, i)}>
                            <Label htmlFor="text-input">Rate</Label>
                            <Input type="text" id="text-input" name="text-input" placeholder="number" value={el.rate || ''} />
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="2">
                        <FormGroup cols>
                            <Label htmlFor="text-input">Rate Type</Label>
                            <Col>
                                <select value={el.rateType} onChange={this.handleChange3.bind(this, i)} style={{ marginTop: 10 }}>
                                    <option value="$">$</option>
                                    <option value="%">%</option>
                                </select>
                            </Col>
                        </FormGroup>
                    </Col>
                    <Col xs="12" md="2">
                        <FormGroup cols>
                            <Col>
                                <Label htmlFor="text-input">Action</Label>
                            </Col>
                            <Col>
                                <Button type='button' color="danger" size="sm" outline onClick={this.removeClick.bind(this, i)}>Remove</Button>
                            </Col>
                        </FormGroup>
                    </Col>
                </Row>
            </div >
        )
    }


    addClick() {
        this.setState(prevState => ({
            slabs: [...prevState.slabs, { "min": '', "max": '', "rate": '', "rateType": '' }]
        }))

    }

    removeClick(i) {
        let slabs = [...this.state.slabs];
        slabs.splice(i, 1);
        this.setState({ slabs });
    }

    handleSubmit(event) {
        //alert('A name was submitted: ' + this.state.values.join(', '));
        this.state.slabs.map((el, i) =>
            console.log("Min: " + el.min + " Max: " + el.max + " Rate: " + el.rate)
        )
        event.preventDefault();
    }


    render() {
        console.log('Commissiont Create State')
        console.log(this.state)
        console.log('Commission Props')
        console.log(this.props)
        return (
            <Form onSubmit={this.handleSubmit}>
                {/* <form onSubmit={this.handleSubmit}> */}
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
                        <Label htmlFor="text-input">Description</Label>
                    </Col>
                    <Col xs="12" md="4">
                        <Input type="text" id="text-input" name="text-input" placeholder="text" />
                        {/* <FormText className="help-block">Please give a description to the slab</FormText> */}
                    </Col>
                </FormGroup>
                {this.createUI()}

                <FormGroup row>
                    <Col md="5" style={{ marginTop: 20 }}>
                        <Button type='button' color="warning" outline size="sm" onClick={this.addClick.bind(this)}>Add Slab</Button>
                    </Col>
                    <Col xs="12" md="7">

                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md="5" style={{ marginTop: 20 }}>
                        <Button type='button' color="warning">Submit</Button>
                    </Col>
                    <Col xs="12" md="7">

                    </Col>
                </FormGroup>
                {/* </form> */}
            </Form>
        );
    }
}

const mapStateToProps = ({ transaction }) => {
    const { commissions } = transaction;
    return { commissions };
};

export default connect(mapStateToProps, {
    getCommissionById
})(CreateCommission);

