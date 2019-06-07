import React, { Component } from 'react';
import { Row, Col, Modal, ModalBody, Label, Input } from 'reactstrap';
import '../../../../../public/CustomStyles.css';
import "react-toggle/style.css"


class Sorry_Modal extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return <Modal size="m" isOpen={true} style={{ top: "30%" }}>
            <ModalBody>
                <Col style={{ background: "white", padding: 25, }}>
                    <Row style={{}}>
                        <label class="labelStyleHeadings" style={{ paddingLeft: 0, marginBottom: 0, color: "#ff5454" }}
                        >We are sorry </label>
                        <br />

                        <Label style={{ fontSize: 14, fontWeight: 600 }}>Account does not exists.There is no customer with the provided banking details. </Label>

                    </Row>




                    <Row style={{ justifyContent: "center" }}>

                        <div style={{}}>
                            <button class="buttonStyle special2" >Modify </button>
                        </div>


                    </Row>
                </Col>
            </ModalBody>
        </Modal>

    }

}



export default Sorry_Modal;

