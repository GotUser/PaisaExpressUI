import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table, Button, Input,
} from 'reactstrap';

import { connect } from 'react-redux';

import { DisplaySpinner } from '../GlobalModals';

import {
    Get_Organization_Basic_Details_To_Edit,
    GetOraganizationBanksToEdit, setFilteredOrganizationUsersData,
    GetOrganizationsList,
    OrganiZationEditModal, clearResponseOnORGApis,
    GetCreateOrganizationInfo,
    ProceedToAddNewOrg, ResetOrg,
    Save_ORG_RegistrationIpDetails
} from './UserManagementAction';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

import "react-toggle/style.css"

import Org_CashInModal from './Org_Users_Edit_Modals/Org_CashInModal';
import Org_Activate_Or_InActivate_Modal from './Org_Users_Edit_Modals/Org_Activate_Or_InActivate_Modal';
// import Org_Edit_Basic_Details_Modal from './Org_Users_Edit_Modals/Org_Edit_Basic_Details_Modal';
import Update_Wallet_Balance_Modal from './Org_Users_Edit_Modals/Update_Wallet_Balance_Modal';
// import Loading_Spinner_Modal from './Org_Users_Edit_Modals/Loading_Spinner_Modal';


import { EmptyListImage } from '../GlobalModals';

class AdminRetailer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchingValue: '',
        };

        this.onChange = this.onChange.bind(this);
    }


    componentWillMount() {
        this.props.ResetOrg()
        let OrgTypes = this.props.OrganizationDetails.OrganizationStoreInfo.organizationTypes;

        let AccessToken = this.props.LoginDetails.accessToken;
        let OrgTypeId = 3;
        let OrgTypeName = 'AdminRetailer'
        let offset = 0;
        let limit = 100;
        let searchText = '';
        this.props.GetCreateOrganizationInfo(AccessToken);
        this.props.GetOrganizationsList(AccessToken, OrgTypeId, offset, limit, searchText, OrgTypeName);
    }

    componentDidUpdate() {
        if (this.props.OrganizationDetails.EditOrganizationDetails.Get_Org_Banks_Success) {
            this.props.OrganizationDetails.EditOrganizationDetails.Get_Org_Banks_Success = false;
            this.props.history.push('/EditDistributorOrRetailerBank');
        }

        if (this.props.OrganizationDetails.EditOrganizationDetails.EditOrgModal) {
            this.props.history.push("/EditOrgBasicDetails")
        }

        if (this.props.OrganizationDetails.OrgApiResults.getorgBasicDetailsFail) {
            setTimeout(() => {
                this.props.clearResponseOnORGApis()
            }, 15000);
        }
    }

    OnEditBankDetails(item) {
        let AccessToken = this.props.LoginDetails.accessToken;
        let EditBankComponentFor = 'AdminRetailer'
        this.props.OrganizationDetails.EditOrganizationDetails.EditBankComponentFor = 'AdminRetailer';
        this.props.GetOraganizationBanksToEdit(AccessToken, EditBankComponentFor, item);
    }

    AddRetailersClicked() {
        this.props.history.push('/CreateOrganization');
    }

    onChange(event) {
        const searchingValue = event.target.value;
        this.setState({ searchingValue }, () => this.filterList());
    }

    filterList() {
        let UsersList = this.props.OrganizationDetails.actualOrgList;
        let q = this.state.searchingValue.toLowerCase();
        UsersList = UsersList.filter(function (user) {
            return (
                user.name.toLowerCase().indexOf(q) >= 0 ||
                user.businessName.toLowerCase().indexOf(q) >= 0 ||
                user.mobileNo.toLowerCase().indexOf(q) >= 0 ||
                user.emailId.toLowerCase().indexOf(q) >= 0
            )
        });
        this.props.setFilteredOrganizationUsersData(UsersList);
        return;
    }

    activateOrInactivate(item) {
        if (item.active) {
            return <a onClick={() => this.props.OrganiZationEditModal(item, 'Inactivate')}>
                <i className="fa fa-toggle-on fa-lg gridButtons" title="Inactivate"></i> </a>
        } else {
            return <a onClick={() => this.props.OrganiZationEditModal(item, 'Activate')}>
                <i className="fa fa-toggle-off fa-lg gridButtons" title="Activate" ></i> </a>
        }
    }


    toggle(name) {
        this.setState({
            [name]: !this.state[name],
            progress: 0.5
        })
    }

    render() {
        let OrgDetails = this.props.OrganizationDetails.EditOrganizationDetails;
        return (
            <div className="animated fadeIn">


                {!this.props.ProgressIndicator.InProgress ?
                    <div>
                        <CustomerBreadCrumb from="AdminRetailer" contentPath="/ Management / Retailers" />
                        <Row>
                            <Col xs="12" lg="12">
                                <Card >
                                    <CardHeader>
                                        <h5 className="font-weight-bold">  Retailers</h5>
                                        <Input style={{ height: 33, width: '15%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                            value={this.state.searchingValue}
                                            onChange={this.onChange} />
                                    </CardHeader>
                                    <CardBody>
                                        <span style={{ marginleft: '5%', fontSize: 16, color: 'red' }} >
                                            {this.props.OrganizationDetails.OrgApiResults.Error}</span>
                                        <Table style={{ overflowX: 'auto' }} responsive>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Mobile No</th>
                                                    <th>Business Name</th>
                                                    <th>Email Id</th>
                                                    <th>Wallet Balance</th>
                                                    {this.props.LoginDetails.roleName !== "Admin" ?
                                                        <th className="text-center">
                                                            <Button
                                                                color="warning" onClick={() => this.AddRetailersClicked()}>
                                                                Add Retailers
                                                            </Button>
                                                        </th>
                                                        :
                                                        null}
                                                    <th></th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    this.props.OrganizationDetails.OrgList != undefined ?
                                                        this.props.OrganizationDetails.OrgList.map((user, i) => (
                                                            <tr key={i + 1} >
                                                                <td>{user.name}</td>
                                                                <td>{user.mobileNo}</td>
                                                                <td>{user.businessName}</td>
                                                                <td>{user.emailId}</td>
                                                                <td>{user.walletBalance}</td>
                                                                <td className="text-center">
                                                                    {user.active ?

                                                                        <a onClick={() => {
                                                                            let AccessTOken = this.props.LoginDetails.accessToken;
                                                                            let PresentCreatingOrgType = "AdminRetailer"
                                                                            this.props.Get_Organization_Basic_Details_To_Edit(AccessTOken, user.tenantId, PresentCreatingOrgType);
                                                                        }}
                                                                            style={{ cursor: "pointer" }}>
                                                                            <i className="fa fa-edit fa-lg" title="Edit" ></i>
                                                                        </a> : null}

                                                                    {user.active ? <a onClick={this.OnEditBankDetails.bind(this, user)}
                                                                        style={{ cursor: "pointer" }}>
                                                                        <i className="fa fa-bank fa-lg gridButtons" title="Add/Edit Bank" ></i>
                                                                    </a> : null}

                                                                    {user.active && this.props.LoginDetails.roleName !== "Admin" && this.props.LoginDetails.roleName !== "Distributor" ?
                                                                        <a onClick={() =>
                                                                            this.props.OrganiZationEditModal(user, 'UpdateWallet')}
                                                                            style={{ cursor: "pointer", margin: 5 }} >
                                                                            <i className="fa fa-credit-card fa-lg" title="CashIn" ></i>
                                                                        </a>
                                                                        : null}

                                                                    {user.active ? <a onClick={() => {
                                                                        // this.props.OrganizationDetails.EditOrgDocsFor = 'AdminRetailer';
                                                                        this.props.Save_ORG_RegistrationIpDetails("AdminRetailer", "OrgType");
                                                                        this.props.OrganiZationEditModal(user, 'UpdateDocuments')
                                                                        this.props.history.push('/EditDocuments');
                                                                    }}
                                                                        style={{ cursor: "pointer", margin: 12 }}>
                                                                        <i className="fa fa-file-image-o fa-lg" title="Update Documents" ></i>
                                                                    </a> : null}
                                                                </td>
                                                            </tr>
                                                        ))
                                                        :
                                                        null}
                                            </tbody>
                                        </Table>
                                        {/* {this.EmptyUserListImage()} */}
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    :
                    <Row style={{ margin: "18%" }}>
                        {DisplaySpinner()}
                    </Row>
                }
                <Org_CashInModal />
                <Org_Activate_Or_InActivate_Modal />
                <Update_Wallet_Balance_Modal />
            </div >
        )
    }

    EmptyUserListImage() {
        return EmptyListImage(this.props.OrganizationDetails.OrgApiResults.getOrgListSuccess, this.props.OrganizationDetails.OrgList)
    }
}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { OrganizationDetails, ProgressIndicator } = userManagementReducer;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    return { OrganizationDetails, LoginDetails, userRoleModulePermissions, ProgressIndicator };
};

export default connect(mapStateToProps, {
    GetOraganizationBanksToEdit,

    setFilteredOrganizationUsersData, Get_Organization_Basic_Details_To_Edit,
    GetOrganizationsList, OrganiZationEditModal, clearResponseOnORGApis,
    GetCreateOrganizationInfo,
    ProceedToAddNewOrg,
    ResetOrg,
    Save_ORG_RegistrationIpDetails
})(AdminRetailer);

