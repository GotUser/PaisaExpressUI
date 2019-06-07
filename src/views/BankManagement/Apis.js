import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table, Button, Modal, ModalHeader,
    ModalBody, ModalFooter, Form, FormGroup, FormText, Label, Input, Collapse
} from 'reactstrap';

import { connect } from 'react-redux';

import {
    SaveEditApi, openAddApiModal, OpenAct_Or_InAct_API_Modal,
    GetAllApisList

} from '../BankManagement/BankManagementAction';

import Add_Or_Edit_APIs_Modal from '././Api_Details_Edit_Modals/Add_Or_Edit_APIs_Modal'

import Activate_Or_InActivate from './Api_Details_Edit_Modals/ActivateOrInActivateAPIModal';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

import "react-toggle/style.css"

var Permissions;

const TDstyle = {
    textAlign: 'center', verticalAlign: 'middle'
}

class Apis extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };

    }

    componentWillMount() {

        // Permissions = 

        let AccessToken = this.props.LoginDetails.accessToken;

        this.props.GetAllApisList(AccessToken);

    }


    activateOrInactivate(item) {

        if (item.active) {

            return <a onClick={() => {
                console.log("Inactivate api clicked : ")
                this.props.OpenAct_Or_InAct_API_Modal(item, 'InActivate')
                // this.props.OrganiZationEditModal(item, 'Inactivate')
            }
            }>
                <i className="fa fa-toggle-on fa-lg gridButtons" title="Inactivate"></i> </a>
        } else {
            return <a onClick={() => {
                this.props.OpenAct_Or_InAct_API_Modal(item, 'Activate')
                console.log("ACtivate  api clicked : ")

            }
                //  this.props.OrganiZationEditModal(item, 'Activate')
            }>
                <i className="fa fa-toggle-off fa-lg gridButtons" title="Activate" ></i> </a>
        }
    }

    render() {

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="APIs" />
                <Row>
                    <Col xs="12" lg="12">
                        <Card >
                            <CardHeader>
                                <div style={{ flexDirection: 'column' }} >
                                    <h5 className="font-weight-bold"> All API's</h5>
                                    <Button color="warning"
                                        onClick={() => {
                                            this.props.openAddApiModal();

                                        }
                                        }
                                        style={{ float: 'right' }}>
                                        Add New API
                                    </Button>
                                </div>

                            </CardHeader>
                            <CardBody>
                                {/* <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                                    {this.props.OrganizationDetails.OrgApiResults.Error}</span> */}
                                <Table style={{ overflowX: 'auto' }} responsive>
                                    <thead>
                                        <tr style={TDstyle}>
                                            <th>Name </th>
                                            <th>Bene Verify Cost(Rs/-)  </th>
                                            <th>Transfer Charges </th>
                                            <th>Priority </th>
                                            <th>Wallet Min Amount Trigger</th>
                                            <th>Base Url </th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.APIs.apisList.map((item, i) => (
                                            <tr style={TDstyle} key={i + 1} >
                                                <td >{item.name}</td>
                                                <td>{parseInt(item.beneVerificationCharges)}</td>
                                                <td >{item.moneyTransferCharges}</td>
                                                <td>{item.priority}</td>
                                                <td>{item.walletMinAmountTrigger}</td>
                                                <td><a href={item.baseUrl} target="_blank">{item.baseUrl}</a></td>

                                                <td className="text-center">
                                                    <a onClick={() => {
                                                        this.props.SaveEditApi(item);
                                                    }}
                                                    ><i className="fa fa-edit fa-lg" title="Edit" ></i></a>
                                                    {this.activateOrInactivate(item)}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Add_Or_Edit_APIs_Modal />
                <Activate_Or_InActivate />
            </div >
        )
    }

}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails, userRoleModulePermissions } = Authentication;

    const { APIs } = bankManagement;

    return { LoginDetails, userRoleModulePermissions, APIs };

};

export default connect(mapStateToProps, {
    SaveEditApi, openAddApiModal, OpenAct_Or_InAct_API_Modal,

    GetAllApisList
})(Apis);

