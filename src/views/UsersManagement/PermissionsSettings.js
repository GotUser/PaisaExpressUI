import React, { Component } from 'react';
import {
    Container, CardGroup, Badge, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem,
    PaginationLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, CardImg,
    FormText, Label, Input, InputGroup, InputGroupAddon, InputGroupButton, Dropdown, InputGroupText,
    CardFooter, Nav, DropdownToggle, DropdownMenu, DropdownItem, Progress, ButtonDropdown, CardText, Collapse

} from 'reactstrap';

import { connect } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

import {

    CloseDealerSettingsModal
} from './UserManagementAction';

class PermissionsSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.SavePermissionSettings = this.SavePermissionSettings.bind(this);
        this.CheckBoxClicked = this.CheckBoxClicked.bind(this);
    }


    SavePermissionSettings() {

        console.log(" Distributor component's SavePermissionSettings Clicked () ");
        console.log(" All Permissions After Save :" + this.props.AllDealersPermissions);

        // this.props.Distributor.AllDealersPermissions.map((value) =>
        //     // console.log(" In First Lopp Values Are :" + value.id, value.permissions)
        //     value.permissions.map((secondloop) =>
        //         console.log(" Second Loop " + secondloop.Distributor.V, secondloop.Agent.V)
        //         // secondloop.Distributor.map((third) => console.log(" third Loop : " + third.V, third.E,third.A,third.IA)
        //         // )
        //     )
        // )

    }

    CheckBoxClicked(v, field) {

        console.log(" IN PERMISSIONS SETTINGS COMPONENT ======= CheckBoxClicked ===========" + v.target.checked, field);
        console.log(" Distributor Details For Settings :" + this.props.Distributor.DistributorDetailsForSettings.id);

        // this.props.Distributor.AllDealersPermissions.map((value) =>
        //     value.id === this.props.Distributor.DealerDetailsForSettings.id ?
        //         value.permissions.map((secondloop) => {
        //             if (field === 'Distributor-V') {
        //                 secondloop.Distributor.V = v.target.checked
        //                 // console.log(" Id :" + this.props.Distributor.DealerDetailsForSettings.id, value.id + " Second Loop "
        //                 //     + secondloop.Distributor.V, secondloop.Agent.V)
        //             }
        //             else if (field === 'Distributor-E') {
        //                 secondloop.Distributor.E = v.target.checked
        //             } else if (field === 'Distributor-A') {
        //                 secondloop.Distributor.A = v.target.checked
        //             }
        //             else if (field === 'Distributor-IA') {
        //                 secondloop.Distributor.IA = v.target.checked
        //             }
        //         }
        //         ) : null
        // )

        this.props.Distributor.SpecificDistributorPermissions.map((settings) =>
            console.log(" Values Of SpecificDealerPermissions  " + settings.Distributor.V)
        )

    }

    render() {

        return (
            <div>
                <ModalHeader >permission Settings</ModalHeader>
                <ModalBody>
                    <Table responsive>
                        <thead>
                            <tr>
                                <th>ModuleName</th>
                                <th >permissions</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr>
                                <td>
                                    <Col >
                                        <Label>Distributor</Label>
                                    </Col>
                                </td>

                                <td>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" onClick={e => this.CheckBoxClicked(e, 'Distributor-V')} type="checkbox" id="Distributor-V" name="Distributor-V" value="option1" />
                                        <Label className="form-check-label" check htmlFor="Distributor-V">View</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" onClick={e => this.CheckBoxClicked(e, 'Distributor-E')} type="checkbox" id="Distributor-E" name="Distributor-E" value="option2" />
                                        <Label className="form-check-label" check htmlFor="Distributor-E">Edit</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" onClick={e => this.CheckBoxClicked(e, 'Distributor-A')} type="checkbox" id="Distributor-A" name="Distributor-A" value="option3" />
                                        <Label className="form-check-label" check htmlFor="Distributor-A">Add</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" onClick={e => this.CheckBoxClicked(e, 'Distributor-IA')} type="checkbox" id="Distributor-IA" name="Distributor-IA" value="option3" />
                                        <Label className="form-check-label" check htmlFor="Distributor-IA">InActive</Label>
                                    </FormGroup>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Col >
                                        <Label>Retailer</Label>
                                    </Col>
                                </td>
                                <td>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="checkbox" id="retailer-V" name="retailer-V" value="option1" />
                                        <Label className="form-check-label" check htmlFor="retailer-V">View</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="checkbox" id="retailer-E" name="retailer-E" value="option2" />
                                        <Label className="form-check-label" check htmlFor="retailer-E">Edit</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="checkbox" id="retailer-A" name="retailer-A" value="option3" />
                                        <Label className="form-check-label" check htmlFor="retailer-A">Add</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="checkbox" id="retailer-IA" name="retailer-IA" value="option3" />
                                        <Label className="form-check-label" check htmlFor="retailer-IA">InActive</Label>
                                    </FormGroup>

                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <Col >
                                        <Label>Agent</Label>
                                    </Col>
                                </td>
                                <td>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="checkbox" id="Agent-V" name="Agent-V" value="option1" />
                                        <Label className="form-check-label" check htmlFor="Agent-V">View</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input defaultChecked={true} className="form-check-input" type="checkbox" id="Agent-E" name="Agent-E" value="option2" />
                                        <Label className="form-check-label" check htmlFor="Agent-E">Edit</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="checkbox" id="Agent-A" name="Agent-A" value="option3" />
                                        <Label className="form-check-label" check htmlFor="Agent-A">Add</Label>
                                    </FormGroup>
                                    <FormGroup check inline>
                                        <Input className="form-check-input" type="checkbox" id="Agent-IA" name="Agent-IA" value="option3" />
                                        <Label className="form-check-label" check htmlFor="Agent-IA">InActive</Label>
                                    </FormGroup>

                                </td>
                            </tr>
                        </tbody>

                    </Table>
                </ModalBody>
                <ModalFooter>
                    <Button color="warning" onClick={this.SavePermissionSettings()}>SAVE</Button>{' '}
                    {/* <Button color="secondary" onClick={() => this.props.CloseDealerSettingsModal()}>CANCLE</Button> */}
                </ModalFooter>
            </div>
        )
    }
}

const mapStateToProps = ({ userManagementReducer, transaction }) => {
    const { Distributor, user } = userManagementReducer;
    const { editBankDetailsComponent, addBankDetailsComponent } = transaction;

    return { Distributor, user, addBankDetailsComponent };
}

export default connect(mapStateToProps, {
    CloseDealerSettingsModal,
})(PermissionsSettings);

