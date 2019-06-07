import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table, Button,
    Modal, ModalHeader, Label, FormText,
    ModalBody, ModalFooter, Input,
} from 'reactstrap';
import swal from 'sweetalert';

import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { DisplaySpinner } from '../GlobalModals';

import Org_CashInModal from './Org_Users_Edit_Modals/Org_CashInModal';
import Org_Activate_Or_InActivate_Modal from './Org_Users_Edit_Modals/Org_Activate_Or_InActivate_Modal';
// import Org_Edit_Basic_Details_Modal from './Org_Users_Edit_Modals/Org_Edit_Basic_Details_Modal';
import Update_Wallet_Balance_Modal from './Org_Users_Edit_Modals/Update_Wallet_Balance_Modal';
import View_Document_Modal from './Org_Users_Edit_Modals/View_Document_Modal';
import Reject_Approval_Modal from './Org_Users_Edit_Modals/Reject_Approval_Modal';

import {
    GetCreateOrganizationInfo,
    Get_Organization_Basic_Details_To_Edit,
    GetOraganizationBanksToEdit,
    setFilteredOrganizationUsersData,
    GetOrganizationsList,
    OrganiZationEditModal,
    clearResponseOnORGApis,
    ProceedToAddNewOrg,
    Save_ORG_RegistrationIpDetails,
    GetUnApprovedOrgList,
    ApproveOrganization,
    OpenRejectOrgModal,
    CloseRejectOrgModal,
    RejectOrgReason,
    RejectingNewlyCreatedOrg,
    OrgRegistrationInputWarnings,
    ResetOrg,
    GetDocument
} from './UserManagementAction';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

import { InputTextStyle } from '../../GlobalVars';

import "react-toggle/style.css";

// import { EmptyListImage } from '../GlobalModals';

class ApproveDistributor extends Component {


    constructor(props) {
        super(props);

        this.RejectProceedClicked = this.RejectProceedClicked.bind(this);
    }
    componentWillMount() {
        this.props.ResetOrg()
        let AccessToken = this.props.LoginDetails.accessToken;
        let offset = 0;
        let limit = 100;
        let searchText = '';

        let PresentCreatingOrgType = "Distributor";
        this.props.GetUnApprovedOrgList(AccessToken, offset, limit, searchText, PresentCreatingOrgType);
        this.props.GetCreateOrganizationInfo(AccessToken);

        this.props.OrganizationDetails.RegistrationinputWarning.RateCardId = "";
        this.props.NewlyAddedOrg.ApiResults.approveOrgSuccess = false;
    }


    componentDidUpdate() {

        if (this.props.NewlyAddedOrg.ApiResults.approveOrgSuccess) {
            this.props.NewlyAddedOrg.ApiResults.message = false;
        }

        if (this.props.OrganizationDetails.EditOrganizationDetails.Get_Org_Banks_Success) {
            this.props.OrganizationDetails.EditOrganizationDetails.Get_Org_Banks_Success = false;
            this.props.history.push('/EditDistributorOrRetailerBank');
        }

        if (this.props.OrganizationDetails.EditOrganizationDetails.EditOrgModal) {
            this.props.history.push("/EditOrgBasicDetails")
        }

        if (this.props.OrganizationDetails.OrgApiResults.Error !== '' || this.props.OrganizationDetails.OrgApiResults.getorgBasicDetailsFail) {
            setTimeout(() => {
                this.props.clearResponseOnORGApis()
            }, 15000);
        }

    }
    RejectProceedClicked() {
        let AccessToken = this.props.LoginDetails.accessToken;
        let RejectReason = this.props.NewlyAddedOrg.UserRejectReason;
        let organizationId = this.props.NewlyAddedOrg.RejectingUserDetails.organizationId;

        this.props.RejectingNewlyCreatedOrg(AccessToken, organizationId, RejectReason);
    }

    OnEditBankDetails(item) {
        let AccessToken = this.props.LoginDetails.accessToken;
        let EditBankComponentFor = 'PendingDistributor'
        this.props.GetOraganizationBanksToEdit(AccessToken, EditBankComponentFor, item);
    }


    ReturnDoc(url) {
        let AccessToken = this.props.LoginDetails.accessToken;
        this.props.GetDocument(AccessToken, url);
    }

    ReturnDocLinks(item) {
        return <div>
            {<a onClick={this.ReturnDoc.bind(this, item.panUrl)}>
                <i className="fa fa-id-card fa-lg gridButtons" title="Pan Card" ></i>
            </a>}
            {<a onClick={this.ReturnDoc.bind(this, item.aadharUrl)}>
                <i className="fa fa-id-card fa-lg gridButtons" title="Aadhar Card" ></i>
            </a>}
            {<a onClick={this.ReturnDoc.bind(this, item.voterIdUrl)}>
                <i className="fa fa-id-card fa-lg gridButtons" title="Voter Id" ></i>
            </a>}
            {<a onClick={this.ReturnDoc.bind(this, item.drivingLicenseUrl)}>
                <i className="fa fa-id-card fa-lg gridButtons" title="Driving Licence" ></i>
            </a>}
        </div>
    }

    render() {
        console.log(" In Render : this.props.NewlyAddedOrg.List ");
        console.log(this.props.NewlyAddedOrg.List);
        let RateCardList = this.props.OrganizationDetails.OrganizationStoreInfo.RateCardsList;

        return (
            <div className="animated fadeIn">


                {!this.props.ProgressIndicator.InProgress ?
                    <div>
                        <CustomerBreadCrumb from="ApproveDistributor" />
                        <ToastContainer position="top-right" autoClose={5000} style={{ zIndex: 1999 }} />
                        <Row>
                            <Col xs="12" lg="12">
                                <Card >
                                    <CardHeader>
                                        <h5 className="font-weight-bold"> Pending Distributors </h5>
                                    </CardHeader>
                                    <CardBody>
                                        <FormText color="red" style={{ fontSize: "large", textAlign: "end", fontWeight: "bold" }}>{this.props.OrganizationDetails.RegistrationinputWarning.RateCardId}</FormText>
                                        <Table style={{ overflowX: 'auto' }} responsive>
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Mobile No</th>
                                                    <th>Business Name</th>
                                                    <th>Email Id</th>
                                                    <th>Doc's</th>

                                                    <th className="text-center"> Approve/Reject  </th>
                                                    <th>Edit</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    this.props.NewlyAddedOrg.List == undefined ?
                                                        null
                                                        :
                                                        this.props.NewlyAddedOrg.List.map((item, i) => (
                                                            <tr key={i + 1} >
                                                                <td>{item.name}</td>
                                                                <td>{item.mobileNo}</td>
                                                                <td>{item.businessName}</td>
                                                                <td>{item.emailId}</td>
                                                                <td style={{ padding: "10px 5px 10px 5px" }}>
                                                                    {this.ReturnDocLinks(item)}
                                                                </td>


                                                                <td className="text-center">
                                                                    <Button type='button'
                                                                        onClick={() => {
                                                                            let PresentCreatingOrgType = "Distributor";
                                                                            let AccessToken = this.props.LoginDetails.accessToken;
                                                                            let RateCardId = "";
                                                                            this.props.ApproveOrganization(AccessToken, item.tenantIdentifier, RateCardId, PresentCreatingOrgType)
                                                                        }}
                                                                        color="success" outline >
                                                                        <i className="fa fa-check" title="Approve"></i> </Button>

                                                                    <Button
                                                                        style={{ marginLeft: 10 }}
                                                                        onClick={() => {
                                                                            this.props.OpenRejectOrgModal(item)
                                                                        }}
                                                                        type='button' color="danger" outline >
                                                                        <i className="fa fa-times" title="deny"></i> </Button>

                                                                </td>

                                                                <td>
                                                                    {<a onClick={() => {
                                                                        let AccessTOken = this.props.LoginDetails.accessToken;

                                                                        let PresentCreatingOrgType = "PendingDistributor";
                                                                        this.props.Save_ORG_RegistrationIpDetails("PendingDistributor", "OrgType");
                                                                        this.props.Get_Organization_Basic_Details_To_Edit(AccessTOken, item.tenantId, PresentCreatingOrgType)
                                                                    }}>
                                                                        <i className="fa fa-edit fa-lg" title="Edit" ></i>
                                                                    </a>}
                                                                    {<a onClick={this.OnEditBankDetails.bind(this, item)}>
                                                                        <i className="fa fa-bank fa-lg gridButtons" title="Add/Edit Bank" ></i>
                                                                    </a>}

                                                                    {<a style={{ marginLeft: 8 }} onClick={() => {
                                                                        this.props.Save_ORG_RegistrationIpDetails("PendingDistributor", "OrgType");
                                                                        this.props.OrganiZationEditModal(item, 'UpdateDocuments')

                                                                        this.props.history.push('/EditDocuments');
                                                                    }
                                                                    }>
                                                                        <i className="fa fa-file-image-o fa-lg" title="Update Documents" ></i>
                                                                    </a>}
                                                                </td>
                                                            </tr>
                                                        ))}
                                            </tbody>
                                        </Table>
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
                <View_Document_Modal />
                <Reject_Approval_Modal />
            </div >
        )
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { AdminRetailers, Distributor, NewlyAddedOrg, OrganizationDetails, ProgressIndicator } = userManagementReducer;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    return { Distributor, AdminRetailers, NewlyAddedOrg, LoginDetails, userRoleModulePermissions, OrganizationDetails, ProgressIndicator };
};

export default connect(mapStateToProps, {
    GetCreateOrganizationInfo,
    Save_ORG_RegistrationIpDetails,
    GetUnApprovedOrgList,
    ApproveOrganization,
    OpenRejectOrgModal,
    CloseRejectOrgModal,
    RejectOrgReason,
    RejectingNewlyCreatedOrg,

    Get_Organization_Basic_Details_To_Edit,
    GetOraganizationBanksToEdit,
    setFilteredOrganizationUsersData,
    GetOrganizationsList,
    OrganiZationEditModal,
    clearResponseOnORGApis,

    ProceedToAddNewOrg,
    OrgRegistrationInputWarnings,
    ResetOrg,
    GetDocument
})(ApproveDistributor);

