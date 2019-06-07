import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, Label, Input } from 'reactstrap';
import '../../../../../public/CustomStyles.css';
import "react-toggle/style.css"
import { connect } from 'react-redux';
import { CancleBeneVerifyResponse_Modal } from '../../BankManagementAction';


class Bene_Verification_fail extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        let Verification = this.props.MTBeneficiary.VerifyBene
        return <Modal size="s" isOpen={Verification.verifyFail} style={
            Verification.ErrorCode == 409 ?
                { top: "30%", width: "20%" } : { top: "30%" }
        }>
            <ModalBody style={Verification.ErrorCode == 409 ? { padding: 0 } : {}} >
                <Col style={
                    Verification.ErrorCode == 409 ?
                        { background: "white", padding: 0 }
                        :
                        { background: "white", padding: 25 }
                }>
                    <Row style={{}}>
                        <label class="labelStyleHeadings" style={
                            Verification.ErrorCode == 409 ?
                                { paddingLeft: 0, marginBottom: 0, color: "#ff5454", textAlign: "center" }
                                :
                                { paddingLeft: 0, marginBottom: 0, color: "#ff5454" }
                        }>
                            {
                                Verification.ErrorCode == 409 ?
                                    "Bene already exists"
                                    : "We are sorry"
                            }
                        </label>
                        <br />

                        <Label style={{ fontSize: 14, fontWeight: 600 }}>
                            {
                                Verification.ErrorCode == 409 ?
                                    null
                                    :
                                    Verification.ErrorCode == 503 ?
                                        "Service is currently not available."
                                        :
                                        "Account does not exists.There is no customer with the provided banking details."
                            }
                        </Label>

                    </Row>
                    <Row style={{ justifyContent: "center" }}>

                        <div style={
                            Verification.ErrorCode == 409 ?
                                { marginTop: "10%" }
                                : {}
                        }>
                            <button class="buttonStyle special2"
                                onClick={() =>
                                    this.props.CancleBeneVerifyResponse_Modal()
                                }>
                                {
                                    Verification.ErrorCode == 503 || Verification.ErrorCode == 409 ?
                                        "Ok"
                                        :
                                        "Modify"
                                }
                            </button>
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
    CancleBeneVerifyResponse_Modal
})(Bene_Verification_fail);



