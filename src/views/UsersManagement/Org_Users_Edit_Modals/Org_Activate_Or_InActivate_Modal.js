import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table,
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,
    FormText, Label, Input, Collapse, Item, Text
} from 'reactstrap';

import { connect } from 'react-redux';

import "react-toggle/style.css"
import {
    inactivateOrActivateOrganizationUser, Cancle_Organization_Edit_Modal, clearResponseOnORGApis
} from '../UserManagementAction';

import '../../../../public/CustomStyles.css';
import { NumberRegex, FullNameRegex } from '../../AllRegexFormats';

class Org_Activate_Or_InActivate_Modal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidUpdate() {
        if (this.props.OrganizationDetails.OrgApiResults.Error !== '' && this.props.OrganizationDetails.OrgApiResults.ActivateOrInactivateOrgFail) {
            setTimeout(() => {
                this.props.clearResponseOnORGApis();
            }, 15000);
        }
    }

    render() {

        let OrgDetails = this.props.OrganizationDetails.EditOrganizationDetails;
        if (OrgDetails.inactiveClicked) {

            return <Modal isOpen={OrgDetails.inactiveClicked}
                className={'modal-danger ' + this.props.className}>
                <ModalHeader>Inactivate {' '} {OrgDetails.EditingUserData.name}
                    ( {OrgDetails.EditingUserData.mobileNo}  )
            </ModalHeader>
                <ModalBody>
                    Are you sure want to Inactivate this Distributor..!
            </ModalBody>
                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                    {this.props.OrganizationDetails.OrgApiResults.Error}
                </span>
                <ModalFooter>
                    <Button style={{ width: 100 }} color="danger" onClick={() => {
                        var AccessToken = this.props.LoginDetails.accessToken;
                        this.props.inactivateOrActivateOrganizationUser(AccessToken, false,
                            OrgDetails.EditingUserData.organizationId)
                    }}
                    >Inactivate</Button>
                    <Button style={{ width: 100 }} onClick={() => this.props.Cancle_Organization_Edit_Modal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        } else if (OrgDetails.activateClicked) {

            return <Modal
                isOpen={OrgDetails.activateClicked}
                className={'modal-warning ' + this.props.className}>
                <ModalHeader>Activate {OrgDetails.EditingUserData.name}
                    ( {OrgDetails.EditingUserData.mobileNo}  ) </ModalHeader>
                <ModalBody>
                    Are you sure want to Activate this Distributor..!
                </ModalBody>
                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                    {this.props.OrganizationDetails.OrgApiResults.Error}
                </span>
                <ModalFooter>
                    <Button style={{ width: 100 }} color="warning" onClick={() => {
                        var AccessToken = this.props.LoginDetails.accessToken;
                        this.props.inactivateOrActivateOrganizationUser(AccessToken, true,
                            OrgDetails.EditingUserData.organizationId)
                    }
                    } >Activate</Button>
                    <Button style={{ width: 100 }} onClick={() => this.props.Cancle_Organization_Edit_Modal()}>Cancel</Button>
                </ModalFooter>
            </Modal>
        }
        else if (this.props.OrganizationDetails.OrgApiResults.updateOrgStatusSuccess) {

            return <Modal size="lg" isOpen={this.props.OrganizationDetails.OrgApiResults.updateOrgStatusSuccess}
                className={'modal-success ' + this.props.className}>
                <ModalHeader>Success..!</ModalHeader>

                <ModalBody >
                    <span style={{ marginLeft: '5%', fontSize: 16, }} >
                        Organization Status is Updated Successfully. </span>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => { this.props.clearResponseOnORGApis() }}>OK</Button>
                </ModalFooter>
            </Modal>
        } else return null;
    }
}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { OrganizationDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { OrganizationDetails, LoginDetails };
};

export default connect(mapStateToProps, {
    inactivateOrActivateOrganizationUser, Cancle_Organization_Edit_Modal, clearResponseOnORGApis
})(Org_Activate_Or_InActivate_Modal);
