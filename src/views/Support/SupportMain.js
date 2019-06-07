import React, { Component, h3 } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import {
    Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup,
    Label, Input, Collapse, CardFooter, FormText, ListGroupItem, ListGroup
} from 'reactstrap';

import { ChangeMpin, getBankBasedOnIfsc } from './SupportAction';

import Widget from '../Dashboard/Widgtes';

import CustomerBreadCrumb from './../../components/ViewComponents/CustomBreadcrumb';


const styles = {
    transition: 'all 1s ease-in'
}

class SupportMain extends Component {

    constructor(props) {
        super(props);

        this.state = {
            collapse: false,
            activeoption: '',
            suboption: '',
            mpin: [],
            errors: [],
            val: '',
            frgtMpinScale: 1,
            frgtMpinopacity: 0
        };
    }

    ManageMpinClicked() {
        console.log(" clicked")
        this.setState({ collapse: !this.state.collapse, })
    }


    componentWillMount() {
        console.log(" Will Mount.....");
        // TO PREVENT BACK ARROW PRESS IN BROWSER 

        // window.addEventListener('popstate', function () {
        //     history.pushState(null, null, document.URL);
        // });
    }

    render() {
        return (
            <div className="animated fadeIn" >
                <CustomerBreadCrumb from="Support" />
                <FormGroup row>
                    <Col md="6">
                        <Card>
                            <CardHeader style={{ textAlign: 'center' }}
                                //  onMouseOver={() => this.setState({ collapse: !this.state.collapse })}
                                onClick={() => this.ManageMpinClicked()} >
                                <i className='fa fa-eraser fa-md WidgetIcon'></i>
                                <Label style={{ fontSize: 35, textAlign: 'center' }} > Manage Mpin</Label>
                                <Label>   <span>Forgot,change Mpin and system not accepting Mpin</span></Label>
                            </CardHeader>
                            <Collapse
                                // isOpen={this.state.collapse}
                                isOpen={true}
                            >
                                <CardBody>
                                    <ListGroup>
                                        <ListGroupItem color={this.state.activeoption === '1' ? 'yellow' : ''}
                                            onClick={() => this.setState({ activeoption: '1', suboption: 'mpinchange', })} tag="button" action>
                                            I want to change my mpin
                                        </ListGroupItem>
                                        <ListGroupItem
                                            
                                            color={this.state.activeoption === '2' ? 'yellow' : ''}
                                            onClick={() => this.setState({
                                                activeoption: '2',
                                                suboption: 'forgotmpin', 
                                                frgtMpinopacity: 1
                                            })}
                                            tag="button" action>
                                            I forgot my Mpin
                                         </ListGroupItem>
                                        <ListGroupItem
                                            color={this.state.activeoption === '3' ? 'yellow' : ''}
                                            onClick={() => this.setState({ activeoption: '3', suboption: 'pinisNotGettingAccepted', })}
                                            tag="button" action>
                                            My mpin is not getting accepted while transacting
                                        </ListGroupItem>
                                        <ListGroupItem
                                            color={this.state.activeoption === '4' ? 'yellow' : ''}
                                            onClick={() => this.setState({ activeoption: '4', suboption: 'accountBlocked' })}
                                            tag="button" action>
                                            My account is blocked because of wrong mpin
                                        </ListGroupItem>
                                    </ListGroup>
                                </CardBody>
                            </Collapse>
                        </Card>
                    </Col>
                    <Col md="6">
                        <Collapse
                            isOpen={this.state.suboption != ''}>
                            <Card >
                                {this.SelectedOptionContent()}

                            </Card>
                        </Collapse>
                    </Col>
                </FormGroup>
            </div >
        );
    }
    ChangePin(field, val) {
        let errors = this.state.errors;
        let mpin = this.state.mpin;
        mpin[field] = val;
        this.setState({ mpin });
        if (field === 'confirmpinip1' || field === 'newmpinip1') {
            errors["connMpinNotMatching"] = '';
            this.setState({ errors });
        }
    }

    SelectedOptionContent() {
        console.log(this.props);
        if (this.state.suboption === 'mpinchange') {
            return this.changeMpin();
        }
        else if (this.state.suboption === 'forgotmpin') {
            return this.ForgotMpin();
        }
        else if (this.state.suboption === 'pinisNotGettingAccepted') {
            return <CardBody>
                <Label style={{ fontSize: 20, fontFamily: 'bold' }} >  Please select below options to Regenerate your mpin</Label>
                <FormGroup style={{ marginTop: 15 }} col>
                    <Col md="5">
                        <Button
                            onClick={() => this.setState({ activeoption: '3', suboption: 'forgotmpin', })}
                            style={{ fontSize: 20 }} color="warning">CLICK HERE TO RESET MPIN</Button>
                    </Col>
                    <Col style={{ marginTop: 15 }} md="5">
                        <Button
                            onClick={() => this.setState({ activeoption: '3', suboption: 'mpinchange', })}
                            style={{ fontSize: 20 }} color="warning">CLICK HERE TO CHANGE MPIN</Button>
                    </Col>
                </FormGroup>
            </CardBody>
        }
        else {
            return <CardBody>
                <h3>  Don't worry!</h3>
                <text>
                    For security reasons, your savings account has been temporarily blocked, as you entered wrong mPIN thrice.

                    To unblock your account, just click on the below mentioned link and reset the mPIN.

                    Please note that this service is provided free of cost to all the customers.
                </text>
                <FormGroup style={{ marginTop: 20 }} Col>
                    <Label style={{ fontSize: 20, fontFamily: 'bold' }}  >Click Below Button To Generate mpin</Label>

                    <Col style={{ marginTop: 10 }} md="5">
                        <Button style={{ fontSize: 20 }} color="warning">Generate default Mpin</Button>
                    </Col>
                </FormGroup>
            </CardBody>
        }

    }
    ForgotMpin() {
        return < CardBody style={{ ...styles, }} >
            <Label style={{ fontSize: 20, fontFamily: 'bold' }} >  New mpin will be send to your registered mobile number</Label>
            <FormGroup Col>
                <Col md="5">
                    <Button
                        onClick={() => this.props.getBankBasedOnIfsc()}
                        style={{ fontSize: 20 }} color="warning">Generate default Mpin</Button>
                </Col>
            </FormGroup>
        </CardBody >

    }

    changeMpin() {
        return <CardBody>
            <FormGroup Col>
                <Col md="4">
                    <Label style={{ fontSize: 20 }} htmlFor="selectBranch">old Mpin </Label><span style={{ color: 'red', fontSize: 20 }}> *</span>
                </Col>
                <Col xs="12" md="8">
                    <input
                        maxLength={1} type="password"
                        ref={(input) => { this.mpin1 = input; }}
                        placeholder="m"
                        onChange={(txt) => { this.ChangePin('mpin1', txt.target.value), this.mpin2.focus() }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1} type="password"
                        placeholder="p"
                        onChange={(txt) => { this.ChangePin('mpin2', txt.target.value), this.mpin3.focus() }}
                        ref={(input) => { this.mpin2 = input; }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1} type="password"
                        ref={(input) => { this.mpin3 = input; }}
                        onChange={(txt) => { this.ChangePin('mpin3', txt.target.value), this.mpin4.focus() }}
                        placeholder="i"
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1} type="password"
                        ref={(input) => { this.mpin4 = input; }}
                        onChange={(txt) => { this.ChangePin('mpin4', txt.target.value), this.newmpinip1.focus() }}
                        placeholder="n"
                        style={{ height: 50, width: 50, textAlign: 'center' }} />
                </Col>
            </FormGroup>

            <FormGroup Col>
                <Col md="4">
                    <Label onClick={() => { this.newmpinip1.focus() }} style={{ fontSize: 20 }} htmlFor="selectBranch">new Mpin</Label>
                    <span style={{ color: 'red', fontSize: 20 }}> *</span>
                </Col>
                <Col xs="12" md="8">
                    <input
                        maxLength={1} type="password"
                        onChange={(txt) => { this.ChangePin('newmpinip1', txt.target.value), this.newmpinip2.focus() }}
                        placeholder="m"
                        ref={(ip) => this.newmpinip1 = ip}
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1} type="password"
                        placeholder="p"
                        ref={(input) => { this.newmpinip2 = input }}
                        onChange={(txt) => { this.ChangePin('newmpinip2', txt.target.value), this.newmpinip3.focus() }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1} type="password"
                        placeholder="i"
                        ref={(input) => { this.newmpinip3 = input }}
                        onChange={(txt) => { this.ChangePin('newmpinip3', txt.target.value), this.newmpinip4.focus() }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1} type="password"
                        placeholder="n"
                        ref={(input) => { this.newmpinip4 = input }}
                        onChange={(txt) => { this.ChangePin('newmpinip4', txt.target.value), this.confirmpinip1.focus() }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} />
                    <span style={{ marginLeft: 10 }}>Ex: 1234 </span>
                </Col>
            </FormGroup>

            <FormGroup Col>
                <Col md="5">
                    <Label style={{ fontSize: 20 }} htmlFor="selectBranch">Confirm Mpin</Label>
                    <span style={{ color: 'red', fontSize: 20 }}> *</span>
                </Col>
                <Col xs="12" md="8">
                    <input
                        maxLength={1}
                        placeholder="m"
                        ref={(input) => { this.confirmpinip1 = input }}
                        onChange={(txt) => { this.ChangePin('confirmpinip1', txt.target.value), this.confirmpinip2.focus() }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1}
                        placeholder="p"
                        ref={(input) => { this.confirmpinip2 = input }}
                        onChange={(txt) => { this.ChangePin('confirmpinip2', txt.target.value), this.confirmpinip3.focus() }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1}
                        placeholder="i"
                        ref={(input) => { this.confirmpinip3 = input }}
                        onChange={(txt) => { this.ChangePin('confirmpinip3', txt.target.value), this.confirmpinip4.focus() }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} /> {''}
                    <input
                        maxLength={1}
                        placeholder="n"
                        ref={(input) => { this.confirmpinip4 = input }}
                        onChange={(txt) => { this.ChangePin('confirmpinip4', txt.target.value) }}
                        style={{ height: 50, width: 50, textAlign: 'center' }} />
                </Col>
                <Col md="9">
                    <label style={{ color: 'red' }}>{this.state.errors["connMpinNotMatching"]}</label>
                </Col>

            </FormGroup>

            <FormGroup Col>
                <Col md="5">
                    <Button style={{ fontSize: 20 }} onClick={() => this.OnSubmit()} color="warning">Change Mpin</Button>
                </Col>

            </FormGroup>
        </CardBody>
    }

    OnSubmit() {

        let mpin = this.state.mpin;
        let errors = this.state.errors;
        let CurrentMpin = '';
        CurrentMpin = mpin["mpin1"] + mpin["mpin2"] + mpin["mpin3"] + mpin["mpin4"];
        let Newmpin = mpin["newmpinip1"] + mpin["newmpinip2"] + mpin["newmpinip3"] + mpin["newmpinip4"];
        let confirmMpin = mpin["confirmpinip1"] + mpin["confirmpinip2"] + mpin["confirmpinip3"] + mpin["confirmpinip4"];

        if (Newmpin != confirmMpin) {
            errors["connMpinNotMatching"] = "Confirm mpin is not matching, Please enter again";

        }


        this.newmpinip1.value = "";
        this.newmpinip2.value = "";
        this.newmpinip3.value = "";
        this.newmpinip4.value = "";
        this.confirmpinip1.value = "";
        this.confirmpinip2.value = "";
        this.confirmpinip4.value = "";
        this.confirmpinip3.value = "";


        this.setState({ mpin, errors });
        // this.setState({ errors });
    }
}

const mapStateToProps = ({ userManagementReducer }) => {
    const { Distributor, user } = userManagementReducer;

    return { Distributor, user };
};

export default connect(mapStateToProps, {
    ChangeMpin, getBankBasedOnIfsc

})(SupportMain);
