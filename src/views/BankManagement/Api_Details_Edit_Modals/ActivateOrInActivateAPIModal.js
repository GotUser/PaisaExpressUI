import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table,
    Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup,
    FormText, Label, Input, Collapse, Item, Text
} from 'reactstrap';

import { connect } from 'react-redux';

import "react-toggle/style.css"
import {
    ActivareOrInActivateApi, Cancle_API_act_Or_Inact_Modal, clearResponseOnORGApis
} from '../BankManagementAction';

import '../../../../public/CustomStyles.css';
import { NumberRegex, FullNameRegex } from '../../AllRegexFormats';

class ActivateOrInActivateAPIModal extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {

        let APIRedux = this.props.APIs;
        if (APIRedux.ActivateOrInActivateApi==='InActivate') {

            return <Modal isOpen={APIRedux.ActivateOrInActivateModal}
                className={'modal-danger ' + this.props.className}>
                <ModalHeader>Inactivate {' '} {APIRedux.AddOrEditAPI.name}
                    ( {APIRedux.AddOrEditAPI.baseUrl}  )
            </ModalHeader>
                <ModalBody>
                    Are you sure want to Inactivate this API..!
            </ModalBody>
                {/* <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                    {this.props.OrganizationDetails.OrgApiResults.Error}
                </span> */}
                <ModalFooter>
                    <Button style={{ width: 100 }} color="danger" onClick={() => {
                        var AccessToken = this.props.LoginDetails.accessToken;
                        this.props.ActivareOrInActivateApi(AccessToken, false,
                            APIRedux.AddOrEditAPI.apiId)
                    }}
                    >Inactivate</Button>
                    <Button style={{ width: 100 }} onClick={() => this.props.Cancle_API_act_Or_Inact_Modal()}>Cancel</Button>
                </ModalFooter>
            </Modal>


        } else if (APIRedux.ActivateOrInActivateApi==='Activate') {

            return <Modal
                isOpen={APIRedux.ActivateOrInActivateModal}
                className={'modal-warning ' + this.props.className}>
                <ModalHeader>Activate  {APIRedux.AddOrEditAPI.name}
                    ( {APIRedux.AddOrEditAPI.baseUrl}  ) </ModalHeader>
                <ModalBody>
                    Are you sure want to Activate this API..!
                </ModalBody>
                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                    {this.props.OrganizationDetails.OrgApiResults.Error}
                </span>
                <ModalFooter>
                    <Button style={{ width: 100 }} color="warning" onClick={() => {
                        var AccessToken = this.props.LoginDetails.accessToken;
                        this.props.ActivareOrInActivateApi(AccessToken, true,
                            APIRedux.AddOrEditAPI.apiId)
                    }
                    } >Activate</Button>
                    <Button style={{ width: 100 }} onClick={() => this.props.Cancle_API_act_Or_Inact_Modal()}>Cancel</Button>
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

const mapStateToProps = ({ userManagementReducer, Authentication, bankManagement }) => {
    const { OrganizationDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;
    const { APIs } = bankManagement;
    return { OrganizationDetails, LoginDetails, APIs };
};

export default connect(mapStateToProps, {

    ActivareOrInActivateApi, Cancle_API_act_Or_Inact_Modal, clearResponseOnORGApis


})(ActivateOrInActivateAPIModal);
