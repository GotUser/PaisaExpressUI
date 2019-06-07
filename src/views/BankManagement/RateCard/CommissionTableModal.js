import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, ModalHeader, Label, Input, InputGroup, Table } from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
import "react-toggle/style.css"

// import { ifscSearchModal } from '../../BankManagementAction';
import { CommissionCalculatorModal } from '../BankManagementAction';

class CommissionTableModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
        //   this.boldText = this.boldText.bind(this);
        this.dataSet = [
            { Item: "A", Description: "Transaction Value", Value: 10000 },
            { Item: "B", Description: "Commission Applicable - 1% of A", Value: 100 },
            { Item: "C", Description: "Agent's Share - 50% of B", Value: 50 },
            { Item: "D", Description: "TDS from Agent - 5% of C", Value: 2.50 },
            { Item: "E", Description: "Agent Payout - 95% of C", Value: 47.50 },
            { Item: "F", Description: "Org's Share - 50% of B", Value: 50 },
            { Item: "G", Description: "Service Provider Charges - 60% of F", Value: 30 },
            { Item: "H", Description: "Agent Bonus - 10% of F", Value: 5 },
            { Item: "I", Description: "Org's Commission - 30% of F", Value: 15 },
            { Item: "J", Description: "GST - 18% of I", Value: 2.70 },
            { Item: "K", Description: "Final Commission ", Value: 12.30 },
        ]
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }
    // boldText(){
    // //    var str= <b id="boldtext">A</b>
    // // // document.getElementById("boldtext").innerHTML; 
    // //     return result

    // }
    render() {

        // if (this.props.MTcustomer.searchClicked) {

        return <Modal size="m" isOpen={this.props.RateCard.RateCardNavigation.CommissionCalculatorModal} style={{ top: "15%", borderRadius: 10 }}
            toggle={() => this.props.CommissionCalculatorModal()} >
            <ModalHeader
                toggle={() => this.props.CommissionCalculatorModal()} style={{ borderBottom: 0, padding: 10 }}></ModalHeader>
            <ModalBody style={{ padding: "5%" }}>
                <Col style={{ background: "white", padding: 0, border: "1px solid lightgray", borderRadius: 5 }}>


                    <Table style={{ textAlign: "left", margin: 0 }}>
                        <thead>
                            <tr>
                                {/* borderBottom used to hide border & paddingBottom is used to set avoid bottom padding */}
                                <th style={{ borderBottom: "1px solid lightgray", borderRight: "1px solid lightgray", borderTop: "1px solid transparent" }}>Item</th>
                                <th style={{ borderBottom: "1px solid lightgray", borderTop: "1px solid transparent" }}>Description</th>
                                <th style={{ borderBottom: "1px solid lightgray", borderTop: "1px solid transparent" }}>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.dataSet.map((data, i) => {
                                return (
                                    <tr key={data}>
                                        {/* borderTop used to hide top border  */}
                                        <td style={data.Item == "K" ? { borderRight: "1px solid lightgray" }
                                            :
                                            { borderRight: "1px solid lightgray", borderBottom: "1px solid transparent" }
                                        }>
                                            {<b>{data.Item}</b>}
                                        </td>

                                        <td style={{ borderTop: 0 }}>{data.Description} </td>
                                        <td style={{ borderTop: 0 }}>{<b>{data.Value}</b>} </td>
                                    </tr>
                                )
                            }
                            )}
                        </tbody>
                    </Table>
                </Col>
            </ModalBody>
        </Modal>
        // } else return null;
    }

}

const mapStateToProps = ({ bankManagement }) => {
    const { MTcustomer, RateCard } = bankManagement;
    return { MTcustomer, RateCard };
};

export default connect(mapStateToProps, {
    // ifscSearchModal
    CommissionCalculatorModal
})(CommissionTableModal);

