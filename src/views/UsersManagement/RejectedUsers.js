import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table
} from 'reactstrap';

import { connect } from 'react-redux';

import {
    Get_Organization_Basic_Details_To_Edit,
    OrganiZationEditModal, getRejectedUsersList,

} from './UserManagementAction';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';
import "react-toggle/style.css"
import Org_CashInModal from './Org_Users_Edit_Modals/Org_CashInModal';
// import Org_Edit_Basic_Details_Modal from './Org_Users_Edit_Modals/Org_Edit_Basic_Details_Modal';

import { EmptyListImage } from '../GlobalModals';


class RejectedUsers extends Component {

    constructor(props) {
        super(props);

        this.state = {

        };
    }


    componentWillMount() {
        this.props.getRejectedUsersList();

    }

    componentDidUpdate() {

    }


    render() {
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="RejectedUsers" />
                <Row>
                    <Col xs="12" lg="12">
                        <Card >
                            <CardHeader>
                                <h5 className="font-weight-bold">  Rejected Users</h5>

                            </CardHeader>
                            <CardBody>
                                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                                    {/* Display Error here On API FAil   */}
                                </span>
                                <Table style={{ overflowX: 'auto' }} responsive>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Mobile No</th>
                                            <th>Business Name</th>
                                            <th>Email Id</th>
                                            <th>Rejected Reason</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.RejectedUsers.RejectedUserList.map((user, i) => (
                                            <tr key={i + 1} >

                                                <td>{user.name}</td>
                                                <td>{parseInt(user.mobileNo)}</td>
                                                <td>{user.businessName}</td>
                                                <td>{user.emailId}</td>
                                                <td>{user.rejectReason}</td>

                                                <td className="text-center">
                                                    <a onClick={() => {
                                                        // let AccessTOken = this.props.LoginDetails.accessToken;
                                                        // let organizationTypeId = 3
                                                        // this.props.Get_Organization_Basic_Details_To_Edit(AccessTOken, user.organizationId, organizationTypeId)
                                                    }}>
                                                        <i className="fa fa-edit fa-lg" title="Edit" ></i>
                                                    </a>

                                                    <a style={{ marginLeft: 2 }} onClick={() => {
                                                        // this.props.OrganizationDetails.EditOrgDocsFor = 'AdminRetailer';
                                                        // this.props.OrganiZationEditModal(user, 'UpdateDocuments')
                                                        // this.props.history.push('/EditDocuments');
                                                    }

                                                    }>
                                                        <i class="fa fa-file-image-o fa-lg" title="Update Documents" ></i>
                                                    </a>

                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                {this.EmptyUserListImage()}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Org_CashInModal />
                {/* <Org_Edit_Basic_Details_Modal EditModalFrom="Retailer" /> */}

            </div >
        )
    }

    EmptyUserListImage() {

        return EmptyListImage(this.props.RejectedUsers.ApiResults.getRejectedUsersSuccess, this.props.RejectedUsers.RejectedUserList)
    }
}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { RejectedUsers } = userManagementReducer;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    return { RejectedUsers, LoginDetails, userRoleModulePermissions };
};

export default connect(mapStateToProps, {
    Get_Organization_Basic_Details_To_Edit,
    OrganiZationEditModal, getRejectedUsersList
})(RejectedUsers);

