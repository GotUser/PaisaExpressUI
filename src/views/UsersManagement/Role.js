import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table, Button, Modal, ModalHeader,
    ModalBody, ModalFooter, Form, FormGroup, FormText, Label, Input
} from 'reactstrap';

import { connect } from 'react-redux';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

var Permissions;

import {
    GetAllRolesAndPermissions, OpenOrCloseEditUserRoleModalAction, SaveRoleName,
    OpenOrCloseDeleteRoleModalAction, ModifyRolePermissions, EditRoleModulePermissions,
    GetRoleModuleTemplateToAddNewRole, AddNewRoleModule, GetRolePermissionsToEdit_ON_ID,
    DuplicatePermissionsRoleName, Get_Template_Of_AllRolesAndPermissions
} from './UserManagementAction';

class Roles extends Component {

    constructor(props) {
        super(props);
        this.state = {
            primary: false,
            danger: false,
            permissionChanged: '',
            tooltipEdit: false,
            tooltipInactive: false,
            tooltipOpen: [false, false, false],
        };
        this.OpenOrCloseEditUserRoleModal = this.OpenOrCloseEditUserRoleModal.bind(this);

        // this.toggleDanger = this.toggleDanger.bind(this);
        this.DeleteRoleConfirm = this.DeleteRoleConfirm.bind(this);

        this.OpenOrCloseDeleteRoleModal = this.OpenOrCloseDeleteRoleModal.bind(this);
    }

    componentWillMount() {

        // this.props.userRoleModulePermissions.modulePermissions.map((item, i) => {
        //     if (item.moduleName === 'Authorization') {
        //         Permissions = item.permissions;
        //     }
        // }
        // );

        // if (Permissions === undefined) {
        //     this.props.history.push("/Dashboard");
        // } else {
        let AccessToken = this.props.LoginDetails.accessToken;

        this.props.GetAllRolesAndPermissions({ AccessToken });

        // }
    }

    componentDidMount() {

        let AccessToken = this.props.LoginDetails.accessToken;
        this.props.Get_Template_Of_AllRolesAndPermissions(AccessToken);

    }

    OpenOrCloseEditUserRoleModal(item) {
        let RoleDetails = JSON.parse(JSON.stringify(item))

        let Role = {
            'RoleName': '',
            'RoleDescription': '',
            'Modules': ''
        }

        let AddRoleModalOpen;
        if (item === 'Close') {
            AddRoleModalOpen = false;
        } else {

            AddRoleModalOpen = true;

            Role = {
                'RoleName': RoleDetails.roleName,
                'RoleDescription': RoleDetails.description,
                'Modules': RoleDetails.modulePermissions
            }
        }

        this.props.OpenOrCloseEditUserRoleModalAction({ AddRoleModalOpen, Role });
    }

    OpenOrCloseDeleteRoleModal(RoleDetails) {

        var CancleDeleteModal = false;
        var RoleName = null;
        var RoleDescription = null;

        if (RoleDetails === 'CancleDeleteModal') {
            CancleDeleteModal = true;
        } else {
            RoleName = RoleDetails.name;
            RoleDescription = RoleDetails.description;
        }
        this.props.OpenOrCloseDeleteRoleModalAction({ CancleDeleteModal, RoleName, RoleDescription })
    }

    RoleNameChange(evt) {
        let roleName = evt.target.value;
        this.props.role.roleName = roleName;
        this.setState({ permissionChanged: roleName })
    }
    RoleDescriptionChange(evt) {
        let roleDescription = evt.target.value;
        this.props.role.roleDescription = roleDescription;
        this.setState({ permissionChanged: roleDescription })
    }

    DeleteRoleConfirm() {
        // const RoleToDelete
    }
    renderModules() {
        if (this.props.role.AddOrEditRoleModalOpen) {
            return < Col xs="12" lg="12" >
                <Card>
                    <CardHeader>
                        <b>Module Permissions</b>
                    </CardHeader>
                    <CardBody>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Module Name</th>
                                    <th>Permissions</th>
                                    {/* <th><Button color="warning" onClick={() => this.OpenOrCloseEditUserRoleModal('AddRole')}>Add Role</Button></th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.role.EditRoleModule.roleModules.map((module, i) => (
                                    <tr key={i}>
                                        <td>{module.moduleName}</td>
                                        <td>
                                            {this.RenderPermissionNames(module, i)}

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </Col >

        }
    }

    RenderPermissionNames(module, inx) {
        var permission = module.permissions

        return permission.map((item, i) =>
            <FormGroup key={i} check
                onClick={() => {
                    let checkValue = item.check === undefined ? true : !item.check
                    this.props.EditRoleModulePermissions(module.moduleName, item, checkValue);
                }}>
                <Input className="form-check-input" type="checkbox"
                    //  id="inline-checkbox1" 
                    name="inline-checkbox1"
                    value="option1"
                    checked={item.check}
                />
                <Label className="form-check-label" check htmlFor="inline-checkbox1" >{item.name}</Label>
            </FormGroup>
        );
    }

    render() {
        this.SaveToLocalStore();
        let RolesJson = localStorage.getItem("AdminRoles");
        let RolesObj = JSON.parse(RolesJson);
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="Role" contentPath="/ Management / Role" />
                <Row>

                    <Col xs="12" lg="8">
                        <Card>
                            <CardHeader>
                                <h5 className="font-weight-bold">Roles </h5>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr >
                                            <th style={{ borderTopWidth: 0 }}>Role Name</th>
                                            <th style={{ borderTopWidth: 0 }} className="text-center">
                                                <Button color="warning"
                                                    onClick={() => this.props.GetRoleModuleTemplateToAddNewRole(this.props.LoginDetails.accessToken)} >
                                                    Add Role</Button>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.role.rolesList.map((item, i) => (
                                            <tr key={i}>

                                                <td>{item.name}</td>
                                                <td className="text-center">
                                                    <a onClick={() => {
                                                        let AccessToken = this.props.LoginDetails.accessToken;
                                                        this.props.GetRolePermissionsToEdit_ON_ID(AccessToken, item);
                                                        //  this.OpenOrCloseEditUserRoleModal(item)
                                                    }}>
                                                        <i className="fa fa-edit fa-lg" title="Edit" />
                                                    </a>

                                                    {/* <a onClick={() => this.OpenOrCloseDeleteRoleModal(item)}>
                                                        <i class="fa fa-trash-o fa-lg gridButtons" title="Delete" /> </a> */}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Modal isOpen={this.props.role.AddOrEditRoleModalOpen}
                    className={'modal-warning modal-lg ' + this.props.className} size="modal-lg">
                    <ModalHeader>
                        {this.props.role.ModalIsTo == "ADD" ? "Add " : "Edit "}
                        Role</ModalHeader>
                    <ModalBody>
                        <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">
                            <FormGroup row>
                                <Col md="3">
                                    <Label htmlFor="inputACHolderName"> Role Name</Label>
                                </Col>
                                <Col xs="12" md="4">
                                    <FormGroup check inline>
                                        <Input type="text"
                                            placeholder="Enter Role Name"
                                            // defaultValue={this.props.role.roleName}
                                            value={this.props.role.EditRoleModule.roleName}
                                            id='roleNameInput'
                                            onChange={(txt) => this.props.SaveRoleName(txt.target.value)}
                                        />
                                    </FormGroup >
                                    <FormText
                                        color="red"> {this.props.role.EditRoleModule.DuplicateRoleNameMessage} </FormText>
                                </Col>
                            </FormGroup>

                            {this.renderModules()}

                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button
                            disabled={Disable_Save_Role_Button(this.props.role)} style={{ width: 100 }}
                            color="warning" onClick={() => this.saveRole()}>Save</Button>{' '}
                        <Button style={{ width: 100 }} onClick={() => this.OpenOrCloseEditUserRoleModal('Close')}>Cancel</Button>
                    </ModalFooter>
                </Modal>
                <Modal isOpen={this.props.role.OpenDeleteRoleModal} className={'modal-danger ' + this.props.className} >
                    <ModalHeader toggle={() => this.OpenOrCloseDeleteRoleModal('CancleDeleteModal')}>Delete Role</ModalHeader>
                    <ModalBody>
                        Role will be Deleted Permanently..!
                    </ModalBody>
                    <ModalFooter>
                        <Button style={{ width: 100 }} className="deleteModelButton" color="danger" onClick={() => this.DeleteRoleConfirm}>Delete</Button>{' '}
                        <Button style={{ width: 100 }} onClick={() => this.OpenOrCloseDeleteRoleModal('CancleDeleteModal')}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }

    saveRole() {
        let AccessToken = this.props.LoginDetails.accessToken;

        let Role = {
            "roleName": this.props.role.EditRoleModule.roleName,
            "permissions": this.props.role.SelectedModuleIds
        };
        let isAddNewRole = this.props.role.isAddNewRole

        if (this.props.role.ModalIsTo === 'ADD') {
            let DuplicateRoleName = false;

            if (this.props.role.rolesList.length !== 0) {
                this.props.role.rolesList.map((item, inx) => {
                    if (item.roleName === Role.roleName) {
                        DuplicateRoleName = true;
                    }
                })
            }
            if (DuplicateRoleName) {
                let message = 'This Role Name Is Already Exist Please Enter Another Name.'
                this.props.DuplicatePermissionsRoleName(message);
            } else { this.props.AddNewRoleModule({ Role, AccessToken }); }
        } else {
            Role.RoleId = this.props.role.EditRoleModule.EditingRoleId
            this.props.ModifyRolePermissions({ Role, AccessToken });
        }
    }
    SaveToLocalStore() {
        let roles = this.props.role.rolesList;
        localStorage.setItem('AdminRoles', JSON.stringify(roles));
        localStorage.setItem('DistributorRoles', JSON.stringify(roles[0]));
        localStorage.setItem('RetailerRoles', JSON.stringify(roles[1]));
        localStorage.setItem('AgentRoles', JSON.stringify(roles[2]));
    }
}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { role } = userManagementReducer;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    return { role, LoginDetails, userRoleModulePermissions };
};

export default connect(mapStateToProps, {
    GetAllRolesAndPermissions, OpenOrCloseEditUserRoleModalAction, EditRoleModulePermissions, GetRoleModuleTemplateToAddNewRole,
    OpenOrCloseDeleteRoleModalAction, ModifyRolePermissions, SaveRoleName, AddNewRoleModule,
    DuplicatePermissionsRoleName, GetRolePermissionsToEdit_ON_ID, Get_Template_Of_AllRolesAndPermissions
})(Roles);


function Disable_Save_Role_Button(role) {




    return role.EditRoleModule.roleName === '' || role.SelectedModuleIds.length === 0 ? true : false
}