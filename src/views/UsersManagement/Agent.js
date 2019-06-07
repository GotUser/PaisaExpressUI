import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardBody,
    Input, InputGroup, InputGroupAddon,
    DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, CardText,
} from 'reactstrap';

import { connect } from 'react-redux';

import {
    getAllUsers, updateUsersettingsBtnState, update_User_settingsBtn_Chosen,
    openAddUserModel, StoreFilteredUsersList, GetCreateOrganizationInfo, Reset
} from './UserManagementAction';

const AddUser = require('../../../public/img/vendors/AddIcon.png');
const DefaultProfilePic = require('../../../public/img/DefaultProfilePic.jpg');

import { DisplaySpinner } from '../GlobalModals';
import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

const img = require('../../../public/img/avatars/8.jpg');

// import Add_New_User_Details_Modal from './User_Details_Edit_Modals/Add_New_User_Details_Modal';
// import User_Edit_Basic_Details_Modal from './User_Details_Edit_Modals/User_Edit_Basic_Details_Modal';
import User_Activate_Or_InActivate_Modal from './User_Details_Edit_Modals/User_Activate_Or_InActivate_Modal';

var AgentPermissions;

class Agent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchingValue: '',
            fields: {},
            errors: {},
        };
        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        this.props.Reset()
        let AccessToken = this.props.LoginDetails.accessToken
        let roleName = this.props.LoginDetails.roleName;
        let RoleName = 'agent'
        let offset = 0;
        let limit = 100;
        let searchText = '';

        this.props.GetCreateOrganizationInfo(AccessToken);

        this.props.getAllUsers(AccessToken, RoleName, offset, limit, searchText);
        this.FilterPermissions(roleName);
    }

    componentDidUpdate() {
        if (this.props.UserDetails.EditUserClicked) {
            this.props.history.push("/EditUser")
        }
    }

    onChange(event) {
        console.log("+=======================+");
        const searchingValue = event.target.value;
        console.log("searchingValue : " + searchingValue);

        this.setState({ searchingValue }, () => this.filterList());
    }

    filterList() {
        let agents = this.props.UserDetails.actualUsersList;
        let q = this.state.searchingValue.toLowerCase();
        agents = agents.filter(function (user) {
            return (
                user.fullName.toLowerCase().indexOf(q) >= 0 ||
                user.mobileNumber.toLowerCase().indexOf(q) >= 0 ||
                user.emailId.toLowerCase().indexOf(q) >= 0
            )
        });
        this.props.StoreFilteredUsersList(agents);
        return;
    }


    lodDropDownItem(item) {
        if (item.active == true) {
            return <DropdownItem >Inactivate</DropdownItem>
        } else {
            return <DropdownItem >Activate</DropdownItem>
        }
    }

    SettingsClicked(item, i, event) {
        console.log("  event.currentTarget.textContent : " + event.currentTarget.textContent);
        const UserId = item.id;
        const SelectedSettingOption = event.currentTarget.textContent;
        if (SelectedSettingOption === '' || SelectedSettingOption === null) {
            console.log("In updateUsersettingsBtnState ");
            this.props.updateUsersettingsBtnState(i);
        }

        else {
            let EditingUserType = 'Agent'
            this.props.update_User_settingsBtn_Chosen(item, SelectedSettingOption, EditingUserType);
        }
    }



    displayBadge(item) {

        if (item.active == true) {
            return <Badge style={{ marginLeft: 5 }} color="success">Activate</Badge>
        } else {
            return <Badge style={{ marginLeft: 5 }} color="secondary">Inactivate</Badge>
        }
    }

    renderEditSettingsButton(item, i) {


        return (
            <InputGroup>
                <span className="cardHeader" style={{ paddingLeft: '20px', paddingTop: '10px', height: 27, fontWeight: 'bold' }} > {item.fullName + ' '}
                    {this.displayBadge(item)}
                </span>
                <InputGroupAddon >
                    <ButtonDropdown
                        isOpen={item.settingsBtn}
                        toggle={this.SettingsClicked.bind(this, item, i)}>
                        <DropdownToggle >
                            <i type="select" className="icon-settings float-right" />
                        </DropdownToggle>
                        <DropdownMenu right>
                            {/* <DropdownItem >Permissions</DropdownItem> */}
                            {item.active ? <DropdownItem >Edit</DropdownItem> : null}
                            {/* {
                                        (this.props.UserDetails.modulePermissions.actInAct == 1 || this.props.UserDetails.modulePermissions.actInAct == true) ? */}
                            {this.lodDropDownItem(item)}
                            {/* : null
                                    } */}
                        </DropdownMenu>
                    </ButtonDropdown>
                </InputGroupAddon>
            </InputGroup >
        )
        // }
        // }
    }
    render() {

        let CreateUser = {
            "fullName": "",
            "mobileNo": "",
            "emailId": "",
            "walletBalance": "",
            "picture": "",
            "selectedRoleId": "",
            "addressDetails": {
                "addressLine1": "",
                "addressLine2": "",
                "pinCode": "",
                "cityId": ""
            }
        }

        console.log(this.props.UserDetails.CreateUser);
        let icon = "Add"
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="Agent" />

                <Row>
                    <Col sm="12" md="7" className="float-left font-weight-bold">
                        <h5 style={{ paddingTop: '7px' }}>Agents</h5>
                    </Col>

                    <Col sm="12" md="3" > </Col>

                    <div className="float-right">
                        <Input style={{ height: 33, marginBottom: '20px', borderRadius: 30 }} placeholder="Search"
                            value={this.state.searchingValue}
                            onChange={this.onChange} />
                    </div>
                </Row>

                {!this.props.ProgressIndicator.InProgress ?
                    <Row>
                        {this.props.UserDetails.usersList.map((item, i) => (
                            <Col key={i} xs="12" sm="5" md="3">
                                <Card >
                                    {this.renderEditSettingsButton(item, i)}
                                    <CardBody style={{ marginTop: "5%" }}>

                                        <div className="text-right">
                                            <img style={{ borderRadius: '50%', height: 50, width: 50 }}
                                                src={item.pictureBase64 == undefined || item.pictureBase64 == "" ? DefaultProfilePic : "data:image/jpg;base64," + item.pictureBase64}
                                                alt="Add Agent" />
                                        </div>

                                        <div style={{ marginTop: '-50px' }}>
                                            {/* {console.log(" In Agent this.props.UserDetails.usersList.map((item, i)  Item is: ")}
                                            {console.log(item)} */}
                                            <CardText><i className="icon-phone" />     {item.mobileNumber === undefined || item.mobileNumber === null ? item.mobileNo : item.mobileNumber}</CardText>
                                            <CardText><i className="icon-envelope" /> {item.emailId}</CardText>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                        ))}

                    </Row>
                    :
                    <Row style={{ margin: "13%" }}>
                        {DisplaySpinner()}
                    </Row>
                }
                <Row style={{}}>
                    <div className="floating-menu">
                        <i onClick={() => {
                            this.props.history.push("/AddUser")
                            let AccessToken = this.props.LoginDetails.accessToken;
                            let EditingUserType = "Agent";
                            this.props.openAddUserModel(AccessToken, EditingUserType, CreateUser)
                        }}>
                            <img src={AddUser} style={{ width: 80, height: 80 }}
                                alt="Add Agent" />
                        </i>
                    </div>

                </Row>
                <User_Activate_Or_InActivate_Modal />
            </div >
        )
    }

    FilterPermissions(roleName) {
        console.log("=================== " + roleName + " Role ======================");
        let AgentRolesJson = localStorage.getItem("userRoleModulePermissions");
        console.log(AgentRolesJson);
    }
}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { agent, UserDetails, ProgressIndicator } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { agent, LoginDetails, UserDetails, ProgressIndicator };
};

export default connect(mapStateToProps, {
    getAllUsers, updateUsersettingsBtnState, update_User_settingsBtn_Chosen,
    openAddUserModel,
    StoreFilteredUsersList, GetCreateOrganizationInfo,
    Reset
})(Agent);

