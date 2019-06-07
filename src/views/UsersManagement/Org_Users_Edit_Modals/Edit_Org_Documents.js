import React, { Component } from 'react';
import {
    Row, Card, CardHeader, CardBody, CardFooter,
    Button, Input
} from 'reactstrap';
import { connect } from 'react-redux';
import "react-toggle/style.css"
import LaddaButton, {
    EXPAND_LEFT
} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';
import {
    GetOrgDocuments, SaveOrgDocuments, SaveOrgDocumentWarnings, UpdateDocuments, clearResponseOnORGApis, GetAllDocuments, ResetOrg
} from '../UserManagementAction';
import '../../../../public/CustomStyles.css';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

class Edit_Org_Documents extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clickedImg: '. .. .. .. .. ..empty',
            expLeft: false,
        };
        this.CancleButtonOrGoBack = this.CancleButtonOrGoBack.bind(this);
    }

    componentWillMount() {
        this.props.ResetOrg();
        let AccessToken = this.props.LoginDetails.accessToken
        let OrgId = this.props.OrganizationDetails.EditOrganizationDetails.EditingUserData.tenantId;
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType;
        this.props.GetAllDocuments(AccessToken, OrgId, PresentCreatingOrgType);
    }

    componentDidUpdate() {
        if (this.props.OrganizationDetails.OrgApiResults.UpdateDocumentsSuccess) {
            let EditOrgDocsFor = this.props.OrganizationDetails.PresentCreatingOrgType;

            EditOrgDocsFor == "AdminRetailer" ? this.props.history.push("/AdminRetailer") :
                EditOrgDocsFor == "Distributor" ? this.props.history.push("/Distributor") :
                    EditOrgDocsFor == "PendingRetailer" ? this.props.history.push("/PendingRetailer") :
                        EditOrgDocsFor == "PendingDistributor" ? this.props.history.push("/PendingDistributor") : null

            this.props.clearResponseOnORGApis();
        }
    }

    handleImageChange(e, field) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                let Image = reader.result.split(',');
                let Base64 = Image[1];
                // console.log(Base64);
                this.props.SaveOrgDocuments(Base64, field);
            }
            reader.readAsDataURL(file)
        } else {
            this.props.SaveOrgDocumentWarnings("Image type should be either PNG or JPEG", 'pictureBase64')
        }
    }



    CancleButtonOrGoBack() {
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType

        if (PresentCreatingOrgType === 'Distributor') {
            this.props.history.push('/Distributor')
        }
        else if (PresentCreatingOrgType === 'AdminRetailer') {
            this.props.history.push('/AdminRetailer')
        }
        else if (PresentCreatingOrgType === 'PendingRetailer') {
            this.props.history.push('/ApproveRetailer')
        }
        if (PresentCreatingOrgType === 'PendingDistributor') {
            this.props.history.push('/PendingDistributor')
        }
        // this.props.history.goBack();
    }

    render() {
        let Documents = this.props.OrganizationDetails.OrgDocuments;
        let OrgDocsList = this.props.OrganizationDetails.OrgApiResults.OrgDocsList;
        let pan = this.props.OrganizationDetails.OrgDocuments.pan;
        let Aadhar = this.props.OrganizationDetails.OrgDocuments.Aadhar;
        let DLicense = this.props.OrganizationDetails.OrgDocuments.DLicense;
        let voterId = this.props.OrganizationDetails.OrgDocuments.voterId;

        console.log(" In MAIN RENDER :  : : : : ::  :   : STATE IS : " + this.state.clickedImg);

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="EditDocuments" contentPath="/ Management / Retailers" />
                <span style={{ color: 'red', fontSize: '20' }}>{this.props.OrganizationDetails.OrgDocuments.Warning}</span>
                <Row>
                    <div style={{ width: "18%" }}>
                        <Card>
                            <CardHeader>
                                Electricity Bill
                            </CardHeader>
                            <CardBody style={{}}>
                                {this.DisplayORGDocs(OrgDocsList, "PAN", pan)}
                            </CardBody>
                            <CardFooter>
                                <Input type="file"
                                    onChange={(e) => this.handleImageChange(e, 'PanCard')}
                                    id="file-input" name="file-input" />
                            </CardFooter>
                        </Card>
                    </div>
                    <div style={{ width: "18%", marginLeft: 10 }}>
                        <Card>
                            <CardHeader>
                                PAN CARD
                            </CardHeader>
                            <CardBody style={{}}>
                                {this.DisplayORGDocs(OrgDocsList, "PAN", pan)}
                            </CardBody>
                            <CardFooter>
                                <Input type="file"
                                    onChange={(e) => this.handleImageChange(e, 'PanCard')}
                                    id="file-input" name="file-input" />
                            </CardFooter>
                        </Card>
                    </div>
                    <div style={{ width: "18%", marginLeft: 10 }}>
                        <Card>
                            <CardHeader>
                                Aadhar
                            </CardHeader>
                            <CardBody style={{}}>
                                {/* {DisplayORGDocs(this.props.OrganizationDetails.OrgDocuments.Aadhar, ' Aadhar', this.state)} */}
                                {this.DisplayORGDocs(OrgDocsList, "AADHAR", Aadhar)}
                            </CardBody>
                            <CardFooter>
                                <Input type="file"
                                    onChange={(e) => this.handleImageChange(e, 'Aadhar')}
                                    id="file-input" name="file-input" />
                            </CardFooter>
                        </Card>
                    </div>

                    <div style={{ width: "18%", marginLeft: 10 }}>
                        <Card>
                            <CardHeader>
                                Voter Id
                            </CardHeader>
                            <CardBody style={{}}>
                                {this.DisplayORGDocs(OrgDocsList, "VOTER ID", voterId)}
                            </CardBody>
                            <CardFooter>
                                <Input type="file"
                                    onChange={(e) => this.handleImageChange(e, 'VoterId')}
                                    id="file-input" name="file-input" />
                            </CardFooter>
                        </Card>
                    </div>
                    <div style={{ width: "18%", marginLeft: 10 }}>
                        <Card>
                            <CardHeader>
                                Driving Licence
                            </CardHeader>
                            <CardBody style={{}}>
                                {this.DisplayORGDocs(OrgDocsList, "DRIVING LICENSE", DLicense)}
                            </CardBody>
                            <CardFooter>
                                <Input type="file"

                                    title="Upload"
                                    onChange={(e) => this.handleImageChange(e, 'DLicense')}
                                    id="file-input" name="file-input" />
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 50 }}>

                    <LaddaButton
                        disabled={
                            Documents.Aadhar == '' && Documents.pan == '' &&
                            Documents.voterId == '' && Documents.DLicense == ''
                        }
                        className="btn btn-warning btn-ladda"
                        loading={this.props.ProgressIndicator.InProgress}
                        onClick={this.SubmitDocs.bind(this)}
                        data-color="warning"
                        data-style={EXPAND_LEFT}    >
                        Submit
                  </LaddaButton>
                    <Button onClick={
                        this.CancleButtonOrGoBack
                    } style={{ marginLeft: 20 }}>Cancel</Button>
                </div>

            </div>
        );
    }

    SubmitDocs() {
        console.log("SubmitDocs")
        let Documents = this.props.OrganizationDetails.OrgDocuments;
        let AccessToken = this.props.LoginDetails.accessToken;
        let PayloadToUpload = {
            "tenantId": this.props.OrganizationDetails.EditOrganizationDetails.EditingUserData.tenantId,
            "MobileNumber": this.props.OrganizationDetails.EditOrganizationDetails.EditingUserData.mobileNo,
            "tenantDocuments": [
                {
                    "Type": "PAN",
                    "Base64picture": Documents.pan === '' || Documents.pan == undefined ? null : Documents.pan
                },
                {
                    "Type": "DRIVING LICENSE",
                    "Base64picture": Documents.DLicense === '' || Documents.pan == undefined ? null : Documents.DLicense
                },
                {
                    "Type": "VOTER ID",
                    "Base64picture": Documents.voterId === '' || Documents.pan == undefined ? null : Documents.voterId
                },
                {
                    "Type": "AADHAR",
                    "Base64picture": Documents.Aadhar === '' || Documents.pan == undefined ? null : Documents.Aadhar
                }
            ]
        }
        let PresentCreatingOrgType = this.props.OrganizationDetails.PresentCreatingOrgType
        this.props.UpdateDocuments(PayloadToUpload, AccessToken, PresentCreatingOrgType);
    }


    DisplayORGDocs(OrgDocsList, field, value) {
        let getDocumentSuccess = this.props.OrganizationDetails.OrgApiResults.getDocumentSuccess;

        if (value == "") {
            if (getDocumentSuccess) {
                return OrgDocsList != "" || OrgDocsList != undefined ?
                    OrgDocsList.map((item, i) => (
                        item.type == field ?
                            <img className="hover-zoom"
                                style={{ height: '20vh', width: '100%' }}
                                src={"data:image/jpg;base64," + item.base64picture}
                                key={i}
                            />
                            : null
                    ))
                    :
                    null
            } else return null;
        } else {
            let OrgDocsList = [
                { typeId: 1, type: "PAN" },
                { typeId: 2, type: "AADHAR" },
                { typeId: 3, type: "VOTER ID" },
                { typeId: 4, type: "DRIVING LICENSE" }
            ]
            return OrgDocsList.map((item, i) => (
                item.type == field ?
                    <img className="hover-zoom"
                        style={{ height: '20vh', width: '100%' }}
                        src={"data:image/jpg;base64," + value}
                        key={i}
                    />
                    : null
            ))
        }
    }
}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { OrganizationDetails, ProgressIndicator } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { OrganizationDetails, LoginDetails, ProgressIndicator };
};

export default connect(mapStateToProps, {
    GetOrgDocuments, SaveOrgDocuments, SaveOrgDocumentWarnings, UpdateDocuments, clearResponseOnORGApis, GetAllDocuments, ResetOrg
})(Edit_Org_Documents);



