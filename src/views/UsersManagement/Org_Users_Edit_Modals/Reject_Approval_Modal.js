import React, { Component } from 'react';
import {
    Button, Modal, ModalBody, ModalFooter, ModalHeader, Row, Col, Input, FormText
} from 'reactstrap';

import { connect } from 'react-redux';

import "react-toggle/style.css"
import {
    ResetOrg, CloseRejectOrgModal, RejectOrgReason, RejectingNewlyCreatedOrg
} from '../UserManagementAction';

import '../../../../public/CustomStyles.css';


class View_Document_Modal extends Component {


    RejectProceedClicked() {
        let AccessToken = this.props.LoginDetails.accessToken;
        let RejectReason = this.props.NewlyAddedOrg.UserRejectReason;
        let organizationId = this.props.NewlyAddedOrg.RejectingUserDetails.organizationId;
        this.props.RejectingNewlyCreatedOrg(AccessToken, organizationId, RejectReason);
    }
    render() {
        return <Modal isOpen={this.props.NewlyAddedOrg.openUserRejectModal}
            className={'modal-warning ' + this.props.className} >
            <ModalHeader >
                Rejecting User: <strong>{this.props.NewlyAddedOrg.RejectingUserDetails.name} </strong>
            </ModalHeader>
            <ModalBody>
                <Row >
                    <Col xs="12" md="5" style={{ alignSelf: 'center' }} >
                        <FormText style={{ color: 'green', fontSize: 13 }} >
                            <strong> Enter Reason to reject.</strong>
                        </FormText>
                        <Input
                            style={{ fontFamily: 'bold', width: '50vh' }}
                            value={this.props.NewlyAddedOrg.UserRejectReason}
                            onChange={(e) => {
                                this.props.RejectOrgReason(e.target.value);
                            }}
                            placeholder="Enter Reason" />
                    </Col>
                </Row>
            </ModalBody>
            <ModalFooter style={{}}>
                <Button
                    onClick={() => this.RejectProceedClicked()}
                    style={{ width: 100 }} color="warning"

                > Proceed</Button>
                <Button style={{ width: 100 }}
                    onClick={() => this.props.CloseRejectOrgModal()}
                >Cancel</Button>
            </ModalFooter>
        </Modal>
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { OrganizationDetails, NewlyAddedOrg } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { OrganizationDetails, NewlyAddedOrg, LoginDetails };
};

export default connect(mapStateToProps, {
    ResetOrg, CloseRejectOrgModal, RejectOrgReason, RejectingNewlyCreatedOrg
})(View_Document_Modal);
