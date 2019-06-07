import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input,
    Card, CardBody, Table, InputGroup, InputGroupText, InputGroupAddon, PopoverBody, Popover
} from 'reactstrap';

import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';
import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
import RateCard_SetValuesModal from './RateCard_SetValuesModal'
import CommissionTableModal from './CommissionTableModal'

import { GetRateCardTemplate, CommissionCalculatorModal, ChangeRateCardValues, SetCommissionCalculatorValues } from '../BankManagementAction';

class CommissionCalculator extends Component {
    constructor() {
        super();
        this.state = {
            popoverOpen: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    shouldComponentUpdate(nextprops, nextstate) {


        console.log(" In / / / / / / /  // / Sould Component Update :  ");

        if (this.props.RateCard.CommissionCalculator.TransactionValue === nextprops.RateCard.CommissionCalculator.TransactionValue) {
            console.log(" Dont Render This Time : - - - - - - - - - -- - - - - ");
            return false;
        } else return true;
        // console.log();


    }

    render() {

        return (
            <div style={{ border: "1px solid lightgray", background: "lightgray" }} >
                <div style={{ justifyContent: "center", padding: "2%", background: "#707070", display: "flex" }}>
                    <div style={{ textAlign: "end", marginRight: "10%" }}>
                        <Label style={{ fontSize: 20, color: "white", }}> Commission Calculator  </Label>
                    </div>
                    <div style={{ textAlign: "end" }}>
                        <div
                            onClick={() => this.props.CommissionCalculatorModal()}
                            style={{ marginTop: "15%", fontStyle: "italic", fontWeight: "bolder", border: "2px solid white", width: 25, height: 25, textAlign: " center", color: "white", borderRadius: "50%", cursor: "pointer" }}  >
                            i
                            </div>
                    </div>
                </div>

                <div style={{ paddingTop: "7%", display: "flex" }}>
                    <div style={{ textAlign: "end", width: "55%", marginRight: "15%" }}>
                        <Label style={{ fontSize: 13, color: "black", textAlign: "center" }}>
                            Transaction Value  </Label>
                    </div>
                    <div style={{ textAlign: "end", width: "25%" }}>
                        <Input
                            disabled={true}
                            value={this.props.RateCard.CommissionCalculator.TransactionValue}
                            placeholder="100.00" style={{ textAlign: "end", background: "white" }} />
                    </div>
                </div>

                {/* <Row style={{ justifyContent: "left", padding: "2%" }}>
                                                        <Col xs="12" lg="10" style={{ padding: 0, textAlign: "center" }}>
                                                            <Label style={{ fontSize: 20, color: "white", }}> Commission Calculator  </Label>
                                                        </Col>
                                                        <Col xs="12" lg="2">
                                                            <div
                                                                onClick={() => this.props.CommissionCalculatorModal()}
                                                                style={{ marginTop: "30%", fontWeight: "bolder", border: "2px solid white", width: 25, height: 25, textAlign: " center", color: "white", borderRadius: "50%" }}  >
                                                                i
                                                            </div>
                                                        </Col>
                                                    </Row> */}

                <div style={{ paddingTop: "3%", display: "flex" }}>
                    <div style={{ textAlign: "end", width: "55%", marginRight: "15%" }}>
                        <Label style={{ fontSize: 13, color: "black", textAlign: "center" }}>
                            Commission Aplicable  </Label>
                    </div>

                    <div style={{ textAlign: "end", width: "25%" }}>
                        <Input
                            disabled={true}
                            value={this.props.RateCard.CommissionCalculator.CommissionAplicable}
                            placeholder="100.00" style={{ textAlign: "end", background: "white" }} />
                    </div>
                </div>
                <div style={{ paddingTop: "7%", display: "flex" }}>
                    <div style={{ textAlign: "end", width: "55%", marginRight: "15%" }}>
                        <Label style={{ fontSize: 13, color: "black", textAlign: "center" }}>
                            Agent's Payout  </Label>
                    </div>
                    <div style={{ textAlign: "end", width: "25%" }}>
                        <Input
                            disabled={true}
                            value={this.props.RateCard.CommissionCalculator.AgentPayout}
                            placeholder="47.50" style={{ textAlign: "end", background: "white" }} />
                    </div>
                </div>
                <div style={{ paddingTop: "3%", display: "flex" }}>
                    <div style={{ textAlign: "end", width: "55%", marginRight: "15%" }}>
                        <Label style={{ fontSize: 13, color: "black", textAlign: "center" }}>
                            TDS from Agent  </Label>
                    </div>
                    <div style={{ textAlign: "end", width: "25%" }}> <Input
                        disabled={true}
                        value={this.props.RateCard.CommissionCalculator.TDSfromAgent}
                        placeholder="2.50" style={{ textAlign: "end", background: "white" }} />
                    </div>
                </div>
                <div style={{ paddingTop: "3%", display: "flex" }}>
                    <div style={{ textAlign: "end", width: "55%", marginRight: "15%" }}>
                        <Label style={{ fontSize: 13, color: "black", textAlign: "center" }}>
                            Agent's Bonus </Label>
                    </div>
                    <div style={{ textAlign: "end", width: "25%" }}> <Input
                        disabled={true}
                        value={this.props.RateCard.CommissionCalculator.AgentBonus}
                        placeholder="5.00" style={{ textAlign: "end", background: "white" }} />
                    </div>
                </div>

                <div style={{ paddingTop: "7%", display: "flex" }}>
                    <div style={{ textAlign: "end", width: "55%", marginRight: "15%" }}>
                        <Label style={{ fontSize: 13, color: "black", textAlign: "center" }}>
                            Service Provider Charges </Label>
                    </div>
                    <div style={{ textAlign: "end", width: "25%" }}> <Input
                        disabled={true}
                        value={this.props.RateCard.CommissionCalculator.ServiceProviderCharges}
                        placeholder="30.00" style={{ textAlign: "end", background: "white" }} /></div>
                </div>
                <div style={{ paddingTop: "3%", display: "flex" }}>
                    <div xs="12" lg="7" style={{ textAlign: "end", width: "55%", marginRight: "15%" }}>
                        <Label style={{ fontSize: 13, color: "black", textAlign: "center" }}>
                            GST for Org </Label>
                    </div>
                    <div style={{ textAlign: "end", width: "25%" }}> <Input
                        disabled={true}
                        value={this.props.RateCard.CommissionCalculator.GSTforOrg}
                        placeholder="2.70" style={{ textAlign: "end", background: "white" }} /></div>
                </div>
                <div style={{ paddingTop: "3%", paddingBottom: "6%", display: "flex" }}>
                    <div xs="12" lg="7" style={{ textAlign: "end", width: "55%", marginRight: "15%" }}>
                        <Label style={{ fontSize: 13, color: "black", textAlign: "center" }}>
                            Final commission </Label>
                    </div>
                    <div style={{ width: "25%" }}> <Input
                        disabled={true}
                        value={this.props.RateCard.CommissionCalculator.Finalcommission}
                        placeholder="12.30" style={{ textAlign: "end", background: "white" }} />
                    </div>
                </div>

            </div>


        )
    }
}
const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { RateCard } = bankManagement;
    const { LoginDetails } = Authentication;
    return { RateCard, LoginDetails };
};

export default connect(mapStateToProps, {
    GetRateCardTemplate, CommissionCalculatorModal, ChangeRateCardValues,
    SetCommissionCalculatorValues
})(CommissionCalculator);


