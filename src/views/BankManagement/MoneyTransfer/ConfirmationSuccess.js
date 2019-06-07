import React, { Component } from 'react';
import { Row, Label, Input, FormText, Col } from 'reactstrap';
import { connect } from 'react-redux';
const logo = require("../../../../public/img/Success_Payment.png");

class TransactionDescription extends Component {

    render() {

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="4"  > </Col>
                    <Col xs="12" lg="4" style={{ justifyContent: "center" }}>

                        <Row style={{ marginTop: "5%", color: "white", textAlign: "center", background: "linear-gradient(to right, rgba(19, 175, 146, 0.58), rgba(29, 144, 222, 0.58))", padding: "5%", borderRadius: 12, fontWeight: 600 }}>
                            <Col>
                                <Row style={{ justifyContent: "center" }}>
                                    <i>
                                        <img src={logo} style={{}}></img>
                                    </i>
                                    <Label style={{ color: "white", width: "100%" }}>
                                        <FormText color="white" style={{}}>   You have successfully transferred </FormText>
                                        <Label style={{ fontSize: "x-large" }}> &#x20B9; 35,000/- </Label>
                                    </Label>
                                </Row>
                                <Row style={{ textAlign: "start" }}>
                                    <Col xs="12" lg="6" >
                                        <FormText color="white" style={{ color: "white" }} > Payor   </FormText>
                                        <Label style={{}} >Ramesh Kumar</Label> <br />
                                    </Col>

                                    <Col xs="12" lg="6" style={{ textAlign: "end" }}>
                                        <FormText color="white" style={{ color: "white" }} > Payee </FormText>
                                        <Label style={{}} >Vinitha Varma</Label>
                                    </Col>
                                </Row>

                                <Row style={{ textAlign: "start" }}>
                                    <Col xs="12" lg="6" >
                                        <FormText color="white" style={{ color: "white" }} > Transaction ID   </FormText>
                                        <Label style={{}} >PXP985473</Label> <br />
                                    </Col>

                                    <Col xs="12" lg="6" style={{ textAlign: "end" }}>
                                        <FormText color="white" style={{ color: "white" }} > Account Number </FormText>
                                        <Label style={{}} >457128693215</Label>
                                    </Col>
                                </Row>

                                <Row style={{ textAlign: "start" }}>
                                    <Col xs="12" lg="7" >
                                        <FormText color="white" style={{ color: "white" }} > Date & Time   </FormText>
                                        <Label style={{}} >19th Oct' 2018 | 2:10 PM</Label> <br />
                                    </Col>

                                    <Col xs="12" lg="5" style={{ textAlign: "end" }}>
                                        <FormText color="white" style={{ color: "white" }} > IFSC</FormText>
                                        <Label style={{}} >HDFC00377</Label>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>




                        <Row style={{ width: "100%", marginLeft: 1, fontStyle: "italic", textAlign: "center", background: "white", paddingBottom: "3%" }}>
                            <Col>
                                <Row>
                                    <Label style={{ color: "black", width: "100%" }}>
                                        <FormText style={{}}>  <b style={{ color: "rgb(1, 142, 211)", paddingRight: "1%" }} >Note:  </b>  Please keep the Transaction ID for future reference. </FormText>
                                        <FormText style={{ paddingRight: "7%" }}>  You can keep a print of it take a picture. </FormText>
                                    </Label>
                                </Row>

                                <Row style={{ justifyContent: "center" }}>
                                    <div style={{ marginRight: "4%" }}>
                                        <button class="buttonStyle Submit"><i class="fa fa-home"></i></button>
                                    </div>
                                    <div>
                                        <button class="buttonStyle Submit"> Make Another Transfer</button>
                                    </div>
                                </Row>
                            </Col>
                        </Row>

                    </Col>
                    <Col xs="12" lg="4"  > </Col>
                </Row>
            </div>
        )
    }

}

const mapStateToProps = ({ }) => {

    return null
};

export default connect(mapStateToProps, {

})(TransactionDescription);


