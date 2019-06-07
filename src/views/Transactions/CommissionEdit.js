import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, CardFooter, Container, ButtonDropdown, DropdownToggle,
    Button, Collapse, Form, FormGroup, FormText, Label, DropdownItem, Input, InputGroup, InputGroupAddon,
    InputGroupButton, DropdownMenu,
    Dropdown, UncontrolledDropdown
} from 'reactstrap';

import { getCommissionById } from './TransactionsAction'
import { connect } from 'react-redux';


class CommissionEdit extends Component {
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
            slabModified: false

        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(i, event) {
        //let slabs = [...this.state.slabs];
        // slabs[i].min = event.target.value;
        console.log('-------------handleChange1-----------------')
        let slabs = this.props.commissions.commissionRes.slabs;
        console.log(slabs);
        this.props.commissions.commissionRes.slabs[i].min = event.target.value;
        console.log(this.props.commissions.commissionRes.slabs);
        console.log('------------------------------')
        this.setState({ slabModified: true });
    }
    handleChange1(i, event) {
        // let slabs = [...this.state.slabs];
        // slabs[i].max = event.target.value;

        console.log('---------------handleChange1---------------')
        let slabs = this.props.commissions.commissionRes.slabs;
        console.log(slabs);
        this.props.commissions.commissionRes.slabs[i].max = event.target.value;
        console.log(this.props.commissions.commissionRes.slabs);
        console.log('------------------------------')

        this.setState({ slabModified: true });
    }
    handleChange2(i, event) {
        // let slabs = [...this.state.slabs];
        // slabs[i].rate = event.target.value;

        console.log('--------------handleChange2----------------')
        let slabs = this.props.commissions.commissionRes.slabs;
        console.log(slabs);
        this.props.commissions.commissionRes.slabs[i].rate = event.target.value;
        console.log(this.props.commissions.commissionRes.slabs);
        console.log('------------------------------')

        this.setState({ slabModified: true });
    }

    handleChange3(i, event) {

        // let slabs = [...this.state.slabs];
        // slabs[i].rateType = event.target.value;
        console.log('--------------handleChange3----------------')
        let slabs = this.props.commissions.commissionRes.slabs;
        console.log(slabs);
        this.props.commissions.commissionRes.slabs[i].rateType = event.target.value;
        console.log(this.props.commissions.commissionRes.slabs);
        console.log('------------------------------')

        this.setState({ slabModified: true });
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
        return this.props.commissions.commissionRes.slabs.map((el, i) =>

            <Row key={i} style={{
                paddingTop: 5,
                borderBottomStyle: 'solid',
                borderWidth: 1,
                borderBottomColor: '#d1d1d1'
            }} >
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
                        <Input type="text" id="text-input" name="text-input" placeholder="text" value={el.rate || ''} />
                    </FormGroup>
                </Col>
                <Col xs="12" md="2">
                    <FormGroup cols>
                        <Col>
                            <Label htmlFor="text-input">Rate Type</Label>
                            <select value={el.rateType} onChange={this.handleChange3.bind(this, i)} className="form-control"> 
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

        )
    }


    addClick() {
        // this.setState(prevState => ({
        //     slabs: [...prevState.slabs, { "min": '', "max": '', "rate": '', "rateType": '' }]
        // }))
        console.log('---------------- Add Slab -------------------')
        var newArray = this.props.commissions.commissionRes.slabs.slice();
        newArray.push({ "min": '', "max": '', "rate": '', "rateType": '' });
        this.props.commissions.commissionRes.slabs = newArray;
        console.log(this.props.commissions.commissionRes.slabs);

        this.setState(prevState => ({
            slabModified: true
        }))
    }

    removeClick(i) {
        console.log('---------------- Remove Slab -------------------')
        // let slabs = [...this.state.slabs];
        let slabs = this.props.commissions.commissionRes.slabs;
        slabs.splice(i, 1);
        // this.setState({ slabs });
        this.setState({ slabModified: true });
        this.props.commissions.commissionRes.slabs = slabs;

        console.log(this.props.commissions.commissionRes.slabs);
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
                {/* <Row style={{
                    paddingBottom: 20,
                    borderRadius: '1px',
                    boxShadow: '0 8px 8px -10px black'
                }}>
                    <Col md="3" style={{ alignSelf: 'center' }}>
                        <Label htmlFor="text-input">Commission Name</Label>
                    </Col>
                    <Col xs="12" md="4" >
                        <Input type="text" id="text-input" name="text-input" placeholder="text" value={this.props.commissions.commissionRes.name} />
                    </Col>
                    <Col md="2" style={{ alignSelf: 'center' }}>
                        <Label htmlFor="text-input">Description</Label>
                    </Col>
                    <Col xs="12" md="3" >
                        <Input type="text" id="text-input" name="text-input" placeholder="text" />
                    </Col>
                </Row> */}
                <div>
                    {this.createUI()}
                </div>
                <Row>
                    <Col md="5" style={{ marginTop: 20 }}>
                        <Button type='button' color="warning" outline size="sm" onClick={this.addClick.bind(this)}>Add Slab</Button>
                    </Col>
                </Row>

                {/* <FormGroup row>
                    <Col md="5" style={{ marginTop: 20 }}>
                        <Button type='button' color="warning">Submit</Button>
                    </Col>
                    <Col xs="12" md="7">

                    </Col>
                </FormGroup> */}
                {/* </form> */}
            </Form >
        );
    }
}

const mapStateToProps = ({ transaction }) => {
    const { commissions } = transaction;
    return { commissions };
};

export default connect(mapStateToProps, {
    getCommissionById
})(CommissionEdit);

