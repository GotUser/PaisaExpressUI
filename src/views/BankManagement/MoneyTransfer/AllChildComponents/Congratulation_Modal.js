import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../../public/CustomStyles.css';
import "react-toggle/style.css"


class Congratulation_Modal extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <Modal size="m" isOpen={true} style={{ top: "30%" }}>
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
                                Marri Srikanth Reddy
                                     </Label>
                        </Col>
                    </Row>

                    <Row style={{ borderBottom: "1px solid lightgray", padding: "2%" }}>
                        <Col style={{ paddingLeft: 0, fontWeight: 700 }}>
                            <Label style={{ color: "#383e4b8a" }}>Bank Name</Label>
                        </Col>

                        <Col>
                            <Label style={{ paddingLeft: 0, color: "#000000b8", fontWeight: "600", fontSize: 15 }} >
                                HDFC West Marredpally
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
                                onClick={() => {
                                }}
                                class="buttonStyle Submit" >Confirm </button>
                        </div>

                        <div style={{ margin: "2%" }}>
                            <button
                                class="buttonStyle special2" >Modify </button>
                        </div>


                    </Row>
                </Col>
            </ModalBody>
        </Modal>

    }

}



export default Congratulation_Modal;

