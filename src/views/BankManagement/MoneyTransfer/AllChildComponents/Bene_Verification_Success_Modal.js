import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../../public/CustomStyles.css';
import "react-toggle/style.css"

import { CancleBeneVerifyResponse_Modal, Confirm_From_BeneValidation_Success } from '../../BankManagementAction';

class Bene_Verification_Success extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let Verification = this.props.MTBeneficiary.VerifyBene
        return <Modal size="m" isOpen={Verification.verifySuccess} style={{ top: "30%" }}>
            <ModalBody>
                <Col style={{ background: "white", padding: 25, }}>
                    <Row style={{}}>

                        <label class="labelStyleHeadings" style={{ paddingLeft: 0, marginBottom: 0 }}
                        >Congratulations </label>
                        <br />
                        <Label style={{ fontSize: 14, fontWeight: 600 }}>The account exists.Please confirm if the details are correct. </Label>

                    </Row>

                    <Row style={{ borderBottom: "1px solid lightgray", padding: "2%" }}>
                        <Col style={{ paddingLeft: 0 }}>
                            <Label style={{ color: "#383e4b8a", fontWeight: 700 }}>Account Holder Name</Label>
                        </Col>
                        <Col>
                            <Label style={{ paddingLeft: 0, color: "#000000b8", fontWeight: "600", fontSize: 15 }} >
                                {Verification.SuccessResponse.accountHolderName}
                            </Label>
                        </Col>
                    </Row>

                    <Row style={{ borderBottom: "1px solid lightgray", padding: "2%" }}>
                        <Col style={{ paddingLeft: 0, fontWeight: 700 }}>
                            <Label style={{ color: "#383e4b8a" }}>Bank Name</Label>
                        </Col>

                        <Col>
                            <Label style={{ paddingLeft: 0, color: "#000000b8", fontWeight: "600", fontSize: 15 }} >
                                {/* HDFC West Marredpally */}
                                {Verification.SuccessResponse.bankName}
                            </Label>
                        </Col>
                    </Row>
                    <Row style={{ borderRadius: 15, background: "lightgray", marginTop: "6%", padding: "1%" }}>
                        <Col>
                            <Label style={{ paddingLeft: 0, color: "#00000061", fontWeight: "bold", fontSize: 13, fontStyle: "italic" }} >
                                An amount of Re.1/- will be credited to the beneficiary's account for verification and to be paid by the customer
                                     </Label>
                        </Col>
                    </Row>

                    <Row style={{ justifyContent: "center", marginTop: "2%" }}>

                        <div style={{ margin: "2%" }}>
                            <button
                                onClick={() => this.props.Confirm_From_BeneValidation_Success()
                                }
                                class="buttonStyle Submit" >Confirm </button>
                        </div>

                        <div style={{ margin: "2%" }}>
                            <button
                                onClick={() => this.props.CancleBeneVerifyResponse_Modal()}
                                class="buttonStyle special2" >Modify </button>
                        </div>


                    </Row>
                </Col>
            </ModalBody>
        </Modal>
    }
}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTBeneficiary } = bankManagement;
    return { LoginDetails, MTBeneficiary };
};

export default connect(mapStateToProps, {
    CancleBeneVerifyResponse_Modal, Confirm_From_BeneValidation_Success
})(Bene_Verification_Success);

