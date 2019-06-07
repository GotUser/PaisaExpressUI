import React, { Component } from 'react';
import {
    Button, Modal, ModalBody, ModalFooter
} from 'reactstrap';

import { connect } from 'react-redux';

import "react-toggle/style.css"
import {
    ResetOrg
} from '../UserManagementAction';

import '../../../../public/CustomStyles.css';


class View_Document_Modal extends Component {

    render() {
        let pictureBase64 = this.props.OrganizationDetails.pictureBase64;
        let OpenDoc = this.props.OrganizationDetails.OrgApiResults.getDocumentSuccessFromURL;

        return <Modal size="lg" style={{ width: 365, top: "25%" }}
            className={'modal-success ' + this.props.className}
            isOpen={OpenDoc} >
            <ModalBody >
                <img style={{ width: 330, height: 330 }}
                    src={"data:image/jpg;base64," + pictureBase64} />
            </ModalBody>
            <ModalFooter>
                <Button color="secondary" onClick={() => {
                    this.props.ResetOrg()
                }}>OK</Button>
            </ModalFooter>
        </Modal>
    }
}

const mapStateToProps = ({ userManagementReducer }) => {
    const { OrganizationDetails } = userManagementReducer;

    return { OrganizationDetails };
};

export default connect(mapStateToProps, {
    ResetOrg
})(View_Document_Modal);
