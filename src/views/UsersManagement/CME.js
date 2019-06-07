import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardBody,
    Input, InputGroup, InputGroupAddon,
    DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, CardText,
} from 'reactstrap';

import { connect } from 'react-redux';

import {
    getAllUsers, updateUsersettingsBtnState, update_User_settingsBtn_Chosen,
    openAddUserModel, StoreFilteredUsersList,
} from './UserManagementAction';

const AddUser = require('../../../public/img/vendors/AddAgent.png');

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

import { DisplayProfilePic } from '../GlobalModals';

// const img = require('../../../public/img/avatars/8.jpg');
// import Add_New_User_Details_Modal from './User_Details_Edit_Modals/Add_New_User_Details_Modal';
import User_Edit_Basic_Details_Modal from './User_Details_Edit_Modals/User_Edit_Basic_Details_Modal';
import User_Activate_Or_InActivate_Modal from './User_Details_Edit_Modals/User_Activate_Or_InActivate_Modal';
import Update_Wallet_Balance_Modal from './Org_Users_Edit_Modals/Update_Wallet_Balance_Modal';

var AgentPermissions;

class CME extends Component {

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
        let AccessToken = this.props.LoginDetails.accessToken
        let roleName = this.props.LoginDetails.roleName;
        let RoleName = 'CME'
        let offset = 0;
        let limit = 100;
        let searchText = '';
        this.props.getAllUsers(AccessToken, RoleName, offset, limit, searchText);
        this.FilterPermissions(roleName);
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
        // else if (SelectedSettingOption === 'Edit User') {
        //     // this.props.
        //     let EditingUserType = 'Agent'
        //     this.props.update_User_settingsBtn_Chosen(item, SelectedSettingOption, EditingUserType);
        // }
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
                            {
                                // (this.props.UserDetails.modulePermissions.actInAct == 1 || this.props.UserDetails.modulePermissions.actInAct == true) ?
                                this.lodDropDownItem(item)
                                // : null
                            }
                            {item.active ? <DropdownItem >Update Wallet</DropdownItem> : null}
                        </DropdownMenu>
                    </ButtonDropdown>
                </InputGroupAddon>
            </InputGroup >
        )

    }
    render() {

        console.log(this.props.UserDetails.CreateUser);

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="Agent" />
                <Row>
                    <Col sm="12" md="7" className="float-left font-weight-bold">
                        <h5 style={{ paddingTop: '7px' }}>CME</h5>
                    </Col>
                    <Col sm="12" md="5" className="float-right">
                        <Input style={{ height: 33, marginBottom: '20px', borderRadius: 30 }} placeholder="Search"
                            value={this.state.searchingValue}
                            onChange={this.onChange} />
                    </Col>

                    {this.props.UserDetails.usersList.map((item, i) => (
                        <Col key={i} xs="12" sm="5" md="4">
                            <Card >
                                {this.renderEditSettingsButton(item, i)}
                                <CardBody>
                                    <div className="text-right">

                                        {/* <img style={{ borderRadius: '50%', height: 50, width: 50 }} src={img}
                                            alt="Add Agent" /> */}
                                        {DisplayProfilePic(item.pictureBase64)}
                                    </div>
                                    <div style={{ marginTop: '-50px' }}>
                                        {console.log(" In Agent this.props.UserDetails.usersList.map((item, i)  Item is: ")}
                                        {console.log(item)}
                                        <CardText><i className="icon-phone" /> {item.mobileNumber === undefined || item.mobileNumber === null ? item.mobileNo : item.mobileNumber}</CardText>
                                        <CardText><i className="icon-envelope" /> {item.emailId}</CardText>
                                        <CardText><i className="icon-briefcase" /> {item.walletBalance === '' || item.walletBalance === null ? 0 : item.walletBalance}</CardText>
                                        {/* <CardText><i className="icon-briefcase" /> {item.businessName}</CardText> */}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                    {/* {
                        (this.props.UserDetails.modulePermissions.edit == 1 || this.props.UserDetails.modulePermissions.edit == true) ? */}
                    <Col xs="12" sm="5" md="4">
                        <Card >
                            <CardBody style={{ alignSelf: 'center', cursor: 'pointer' }}>
                                <i onClick={() => {
                                    let AccessToken = this.props.LoginDetails.accessToken;
                                    let EditingUserType = "CME";
                                    this.props.openAddUserModel(AccessToken, EditingUserType)
                                }}>
                                    <img src={AddUser}
                                        alt="Add CME" />
                                </i>
                            </CardBody>
                        </Card>
                    </Col>
                    {/* : null
                    } */}
                </Row>


                <User_Edit_Basic_Details_Modal />
                <User_Activate_Or_InActivate_Modal />
                <Update_Wallet_Balance_Modal />
            </div >
        )
    }

    FilterPermissions(roleName) {

        console.log("=================== " + roleName + " Role ======================");
        let AgentRolesJson = localStorage.getItem("userRoleModulePermissions");
        console.log(AgentRolesJson);
        let permissions = [];


    }
}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { agent, UserDetails } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { agent, LoginDetails, UserDetails };
};

export default connect(mapStateToProps, {
    getAllUsers, updateUsersettingsBtnState, update_User_settingsBtn_Chosen,
    openAddUserModel,
    StoreFilteredUsersList,
})(CME);

