import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody,
    Input, InputGroup, InputGroupAddon,
    DropdownToggle, DropdownMenu, DropdownItem, ButtonDropdown, CardText,
} from 'reactstrap';

import { connect } from 'react-redux';

import {
    getAllUsers, updateAgentsettingsBtnState, updateAgentsettingsBtnStateChosenAction,
    openAddOrEditAgentModel,
    StoreFilteredUsersList, inactivateOrActivateAgentAction, updateUsersettingsBtnState
} from './UserManagementAction';

const AddUser = require('../../../public/img/vendors/AddAgent.png');

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

const img = require('../../../public/img/avatars/8.jpg');
import User_Edit_Basic_Details_Modal from './User_Details_Edit_Modals/User_Edit_Basic_Details_Modal';

import User_Activate_Or_InActivate_Modal from './User_Details_Edit_Modals/User_Activate_Or_InActivate_Modal';



class SupportUser extends Component {

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
        let RoleName = 'Support'

        this.props.getAllUsers(AccessToken, RoleName);
        let roleName = this.props.LoginDetails.roleName;
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
                user.mobileNo.toLowerCase().indexOf(q) >= 0 ||
                user.emailId.toLowerCase().indexOf(q) >= 0
            )
        });
        this.props.StoreFilteredUsersList(agents);
        return;
    }


    lodDropDownItem(item) {
        if (item.isActive == true) {
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
            this.props.updateUsersettingsBtnState(i)
        }
        else {
            let EditingUserType = 'SupportUser'
            this.props.updateAgentsettingsBtnStateChosenAction(item, SelectedSettingOption, EditingUserType);
        }
    }

    displayBadge(item) {
        if (item.isActive == true) {
            return <Badge style={{ marginLeft: 5 }} color="success">Active</Badge>
        } else {
            return <Badge style={{ marginLeft: 5 }} color="secondary">Inactive</Badge>
        }
    }

    renderEditSettingsButton(item, i) {

        if (this.props.UserDetails.modulePermissions.length != 0) {
            // console.log('renderEditSettingsButton')
            // console.log('Edit: ' + this.props.agent.modulePermissions[1]);
            if (this.props.UserDetails.modulePermissions.add == 1 || this.props.UserDetails.modulePermissions.add == true) {
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
                                    <DropdownItem >Edit User</DropdownItem>
                                    {
                                        (this.props.UserDetails.modulePermissions.actInAct == 1 || this.props.UserDetails.modulePermissions.actInAct == true) ?
                                            this.lodDropDownItem(item)
                                            : null
                                    }
                                </DropdownMenu>
                            </ButtonDropdown>
                        </InputGroupAddon>
                    </InputGroup >
                )
            }
        }
    }
    render() {

        console.log(this.props.UserDetails.CreateUser);
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="SupportUser" />
                <Row>
                    <Col sm="12" md="7" className="float-left font-weight-bold">
                        <h5 style={{ paddingTop: '7px' }}>Support Users</h5>
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
                                        {/* <i className='icon-user'
                                            style={{ color: '#f8b018' }}
                                        ></i> */}
                                        <img style={{ borderRadius: '50%', height: 50, width: 50 }} src={img}
                                            alt="Add Agent" />
                                    </div>
                                    <div style={{ marginTop: '-50px' }}>
                                        <CardText><i className="icon-phone" /> {item.mobileNumber}</CardText>
                                        <CardText><i className="icon-envelope" /> {item.emailId}</CardText>
                                        {/* <CardText><i className="icon-briefcase" /> {item.businessName}</CardText> */}
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                    {
                        (this.props.UserDetails.modulePermissions.edit == 1 || this.props.UserDetails.modulePermissions.edit == true) ?
                            <Col xs="12" sm="5" md="4">
                                <Card >
                                    <CardBody style={{ alignSelf: 'center', cursor: 'pointer' }}>
                                        <i onClick={() => {
                                            let AccessToken = this.props.LoginDetails.accessToken;
                                            let EditingUserType = 'SupportUser'
                                            this.props.openAddOrEditAgentModel(AccessToken, EditingUserType)
                                        }
                                        }>
                                            <img src={AddUser}
                                                alt="Add SupportUser" />
                                        </i>
                                    </CardBody>
                                </Card>
                            </Col>
                            : null
                    }
                </Row>
                <User_Edit_Basic_Details_Modal />
                <User_Activate_Or_InActivate_Modal />
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
    getAllUsers, updateAgentsettingsBtnState, updateAgentsettingsBtnStateChosenAction,
    openAddOrEditAgentModel,
    StoreFilteredUsersList, inactivateOrActivateAgentAction, updateUsersettingsBtnState,
})(SupportUser);

