import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, Label, Input, InputGroup, FormText, } from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
import "react-toggle/style.css"

import { ifscSearchModal, SetValuesModal, SaveSetValuesContentFromModal, SetValuesToRateCardSlabs, ResetRateCardData, RatecardWarnings } from '../BankManagementAction';

class RateCard_SetValuesModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {

        if (this.props.RateCard.SetValuesModal) {

            return <Modal size="lg" isOpen={this.props.RateCard.SetValuesModal}
                style={{ top: "35%" }}>
                <ModalBody>
                    <Col style={{ background: "white", padding: 10, paddingLeft: "3%" }}>

                        <Row style={{ height: 75 }}>

                            <Col xs="12" lg="2" style={{ textAlign: "center" }}>
                                <Label>From </Label>
                                <br />
                                <Input
                                    value={this.props.RateCard.SetValuesModalData.From}
                                    onChange={(txt) => {
                                        let Val = txt.target.value;
                                        const re = /^[0-9\b]+$/;

                                        if (Val === '' || Val.match(/^[0-9]+$/) && (parseInt(Val) <= 25000)) {
                                            this.props.SaveSetValuesContentFromModal(Val, 'From')
                                        } else
                                            this.props.RatecardWarnings("from", 'Enter only numbers ');
                                    }}
                                    placeholder="100" />
                                <FormText color="red"> {this.props.RateCard.Ratecardwarnings.fromWarning} </FormText>


                            </Col>
                            <Col xs="12" lg="2" style={{ textAlign: "center" }}>
                                <Label>To </Label>
                                <br />
                                <Input
                                    value={this.props.RateCard.SetValuesModalData.To}
                                    onChange={(txt) => {
                                        let Val = txt.target.value;
                                        const re = /^[0-9\b]+$/;
                                        if (Val == '' || re.test(Val) && (parseInt(Val) <= 25000)) {
                                            this.props.SaveSetValuesContentFromModal(Val, 'To')
                                        } else {
                                            this.props.RatecardWarnings("to", 'Enter only numbers ');
                                        }
                                    }}
                                    placeholder="10,000" />
                                <FormText color="red"> {this.props.RateCard.Ratecardwarnings.toWarning} </FormText>

                            </Col>
                            <Col xs="12" lg="2" style={{ textAlign: "center", padding: 0 }}>
                                <Label>Rate </Label>
                                <br />
                                <InputGroup>
                                    <Input
                                        value={this.props.RateCard.SetValuesModalData.rate}
                                        onChange={(txt) => {
                                            let Val = txt.target.value;
                                            const re = /^[0-9.\b]+$/;
                                            if (Val == '' || re.test(Val)) {
                                                this.props.SaveSetValuesContentFromModal(Val, 'rate');
                                            } else {
                                                this.props.RatecardWarnings("rate", 'Enter only numbers ');
                                            }
                                        }}
                                        style={{ width: "35%", textAlign: "center" }} placeholder="1.8" />
                                    <Input
                                        value={this.props.RateCard.SetValuesModalData.rateType}
                                        onChange={(txt) =>
                                            this.props.SaveSetValuesContentFromModal(txt.target.value, 'rateType')
                                        }
                                        type="select" style={{ fontSize: 15, background: "#dfdfdf", padding: 0 }}>

                                        <option value="%"> %</option>
                                        <option value="Rs"> Rs</option>
                                    </Input>
                                </InputGroup>
                                <FormText color="red"> {this.props.RateCard.Ratecardwarnings.rateWarning} </FormText>
                            </Col>

                            <Col xs="12" lg="3" style={{ textAlign: "center" }}>
                                <Label>Daily Payout </Label>
                                <br />
                                <InputGroup>
                                    <Input
                                        value={this.props.RateCard.SetValuesModalData.dailyPayout}
                                        onChange={(txt) => {
                                            let Val = txt.target.value;
                                            const re = /^[0-9.\b]+$/;
                                            if (Val == '' || re.test(Val)) {
                                                this.props.SaveSetValuesContentFromModal(Val, 'dailyPayout');
                                            } else {
                                                this.props.RatecardWarnings("dailyPayout", 'Enter only numbers ');
                                            }
                                        }}
                                        style={{ width: "35%", textAlign: "center" }} placeholder="30" />
                                    <Input
                                        onChange={(txt) =>
                                            this.props.SaveSetValuesContentFromModal(txt.target.value, 'dailyPayoutType')
                                        }
                                        type="select" style={{ fontSize: 15, background: "#dfdfdf", padding: 0 }}>
                                        <option value="%"> %</option>
                                        <option value="Rs"> Rs</option>

                                    </Input>
                                </InputGroup>
                                <FormText color="red"> {this.props.RateCard.Ratecardwarnings.dailyPayoutWarning} </FormText>

                            </Col>


                            <Col xs="12" lg="3" style={{ textAlign: "center" }}>
                                <Label>Monthly Payout </Label>
                                <br />
                                <InputGroup>
                                    <Input
                                        value={this.props.RateCard.SetValuesModalData.monthlyPayout}
                                        onChange={(txt) => {
                                            let Val = txt.target.value;
                                            const re = /^[0-9.\b]+$/;
                                            if (Val == '' || re.test(Val)) {
                                                this.props.SaveSetValuesContentFromModal(Val, 'monthlyPayout');
                                            } else {
                                                this.props.RatecardWarnings("monthlyPayout", 'Enter only numbers ');
                                            }
                                        }}
                                        style={{ width: "35%", textAlign: "center" }} placeholder="10" />
                                    <Input
                                        onChange={(txt) =>
                                            this.props.SaveSetValuesContentFromModal(txt.target.value, 'monthlyPayoutType')
                                        }
                                        type="select" style={{ fontSize: 15, background: "#dfdfdf", padding: 0 }}>
                                        <option value="%"> %</option>
                                        <option value="Rs"> Rs</option>
                                    </Input>
                                </InputGroup>
                                <FormText color="red"> {this.props.RateCard.Ratecardwarnings.monthlyPayoutWarning} </FormText>

                            </Col>
                        </Row>
                        <Row style={{ justifyContent: "center" }}>
                            <div style={{ marginTop: "2%" }}>
                                <button
                                    disabled={DisableSetValuesButton(this.props.RateCard)}
                                    onClick={() => this.props.SetValuesToRateCardSlabs()}
                                    className="buttonStyle Submit" >Set Values </button>
                            </div>

                            <div style={{ marginTop: "2%" }}>
                                <button
                                    onClick={() => this.props.ResetRateCardData()}
                                    className="buttonStyle  special2" >Reset </button>
                            </div>

                            <div style={{ marginTop: "2%" }}>
                                <button
                                    onClick={() => this.props.SetValuesModal(undefined, false)}
                                    className="buttonStyle special2" >Close </button>
                            </div>
                        </Row>
                    </Col>
                </ModalBody>
            </Modal>
        } else return null;
    }
}

const mapStateToProps = ({ bankManagement }) => {

    const { MTcustomer, RateCard } = bankManagement;
    return { MTcustomer, RateCard };
};

export default connect(mapStateToProps, {
    ResetRateCardData,
    // ifscSearchModal
    SetValuesModal, SaveSetValuesContentFromModal, SetValuesToRateCardSlabs, RatecardWarnings
})(RateCard_SetValuesModal);


function DisableSetValuesButton(RateCard) {
    return RateCard.SetValuesModalData.From === '' || RateCard.SetValuesModalData.From === undefined || RateCard.SetValuesModalData.To === '' || RateCard.SetValuesModalData.To === undefined ?
        true : false;
}