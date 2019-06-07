
import React, { Component } from 'react';
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter,
} from 'reactstrap';
import { connect } from 'react-redux';

import {
    inactivateOrActivateUserStatus, CloseUserSettingsModal, clearResponseOfUserApis
} from '../../UsersManagement/UserManagementAction';

class User_Activate_Or_InActivate_Modal extends Component {

    componentDidUpdate() {
        if (this.props.UserDetails.UserApiResults.Error !== '' && this.props.UserDetails.UserApiResults.ActivateOrInactivateFail) {
            setTimeout(() => {
                this.props.clearResponseOfUserApis()
            }, 15000);
        }
    }

    render() {
        return <div className="animated fadeIn">
            <Modal isOpen={this.props.UserDetails.inactiveClicked}
                className={'modal-warning ' + this.props.className}>
                <ModalHeader>InActive  {this.props.UserDetails.UserDetailsToEdit.fullName}</ModalHeader>
                <ModalBody>
                    Are You Sure, You Want To InActive This User..!
                    </ModalBody>
                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                    {this.props.UserDetails.UserApiResults.Error}
                </span>
                <ModalFooter>
                    <Button color="warning" onClick={() => {
                        let AccessToken = this.props.LoginDetails.accessToken
                        this.props.inactivateOrActivateUserStatus(AccessToken, false, this.props.UserDetails.UserDetailsToEdit);
                    }
                    }
                    >Inactive</Button>
                    <Button color="secondary" onClick={() => this.props.CloseUserSettingsModal()}>Cancel</Button>
                </ModalFooter>
            </Modal>

            <Modal isOpen={this.props.UserDetails.activateClicked}
                className={'modal-warning ' + this.props.className}>
                <ModalHeader>Activate  {this.props.UserDetails.UserDetailsToEdit.fullName}</ModalHeader>
                <ModalBody>
                    Are You Sure, You Want To Activate This User..!

                </ModalBody>
                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                    {this.props.UserDetails.UserApiResults.Error}
                </span>
                <ModalFooter>

                    <Button color="warning" onClick={() => {
                        let AccessToken = this.props.LoginDetails.accessToken
                        this.props.inactivateOrActivateUserStatus(AccessToken, true, this.props.UserDetails.UserDetailsToEdit)
                    }
                    }>Activate</Button>
                    <Button color="secondary" onClick={() => this.props.CloseUserSettingsModal()}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>
    }
}


const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { UserDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { UserDetails, LoginDetails };
};

export default connect(mapStateToProps, {
    inactivateOrActivateUserStatus, CloseUserSettingsModal, clearResponseOfUserApis
})(User_Activate_Or_InActivate_Modal);

