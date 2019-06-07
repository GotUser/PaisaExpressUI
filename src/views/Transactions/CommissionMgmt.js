import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem,
    PaginationLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input
} from 'reactstrap';

import { getAllCommissions, getCommissionById, newCommission } from './TransactionsAction'
import { connect } from 'react-redux';
import CommissionEdit from './CommissionEdit'

class CommissionMgmt extends Component {

    constructor(props) {
        super(props);
        this.state = {
            primary: false,
            danger: false,
            commissionList: []
        };
        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDelete = this.toggleDelete.bind(this);
    }
    componentWillMount() {

        this.props.getAllCommissions();
    }
    toggleEdit({ items, isEditCalled }) {
        console.log('toggleEdit')
        console.log('isEditCalled ' + isEditCalled)
        console.log(items);
        console.log(this.state.primary)
        if (isEditCalled != undefined) {
            if (!this.state.primary && isEditCalled) {
                let commissionData = items;

                this.props.getCommissionById({ commissionData });
            }
            else if (!this.state.primary) {
                this.props.newCommission();
            }

        }
        this.setState({
            primary: !this.state.primary
        });
    }

    toggleDelete() {
        this.setState({
            danger: !this.state.danger
        });
    }
    renderCommisionList() {
        return this.props.commissions.commissionList.map(items => (
            <tr>
                <td>{items.name}</td>
                <td>{items.description}</td>
                <td>
                    <a className="btn btn-info" onClick={() => {
                        let isEditCalled = true;
                        let data = { items, isEditCalled };
                        this.toggleEdit(data)

                    }}><i class="fa fa-edit "></i></a>
                    <a className="btn btn-danger gridButtons" onClick={this.toggleDelete}><i class="fa fa-trash-o "></i></a>
                </td>
            </tr>

        ));
    }
    render() {
        console.log('commission Render')
        console.log(this.props)
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Commissions
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Commission Name</th>
                                            <th>Description</th>
                                            <th><Button color="warning"
                                                onClick={() => {
                                                    let isEditCalled = false;
                                                    let items = null;
                                                    let data = { items, isEditCalled };
                                                    this.toggleEdit(data);
                                                }}>Add Commission</Button></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.renderCommisionList()}
                                    </tbody>
                                </Table>
                                <Pagination>
                                    <PaginationItem>
                                        <PaginationLink previous href="#"></PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem active>
                                        <PaginationLink href="#">1</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">2</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">3</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink href="#">4</PaginationLink>
                                    </PaginationItem>
                                    <PaginationItem>
                                        <PaginationLink next href="#"></PaginationLink>
                                    </PaginationItem>
                                </Pagination>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>

                <Modal isOpen={this.state.primary} size="modal-lg"
                    className={'modal-warning modal-lg ' + this.props.className} >
                    <ModalHeader toggle={this.toggleEdit}>Add/ Edit Commission</ModalHeader>
                    <ModalBody>
                        <Row style={{
                            paddingBottom: 20,
                            borderRadius: '1px',
                            boxShadow: '0 8px 8px -10px black',
                        }}>
                            <Col md="3" style={{ alignSelf: 'center' }}>
                                <Label htmlFor="text-input">Commission Name</Label>
                            </Col>
                            <Col xs="12" md="4" >
                                <Input type="text" id="text-input" name="text-input"
                                    placeholder="text"
                                    value={this.props.commissions.commissionRes.name} />
                                {/* <FormText color="muted">Enter a unique commission name</FormText> */}
                            </Col>
                            <Col md="2" style={{ alignSelf: 'center' }}>
                                <Label htmlFor="text-input">Description</Label>
                            </Col>
                            <Col xs="12" md="3" >
                                <Input type="text" id="text-input" name="text-input"
                                    placeholder="text"
                                    value={this.props.commissions.commissionRes.description} />
                                {/* <FormText className="help-block">Please give a description to the slab</FormText> */}
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalBody style={{
                        maxHeight: 'calc(100vh - 300px)',
                        overflowY: 'auto'
                    }}>
                        <CommissionEdit />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning" onClick={this.toggleEdit}>Save</Button>{' '}
                        <Button color="secondary" onClick={this.toggleEdit}>Cancel</Button>
                    </ModalFooter>
                </Modal>

                <Modal isOpen={this.state.danger} toggle={this.toggleDelete}
                    className={'modal-danger ' + this.props.className}>
                    <ModalHeader toggle={this.toggleDelete}>Delete Commission</ModalHeader>
                    <ModalBody>
                        this Commission will be Deleted Permanently..!
                  </ModalBody>
                    <ModalFooter>
                        <Button className="deleteModelButton" color="danger" onClick={this.toggleDelete}>Delete</Button>{' '}
                    </ModalFooter>
                </Modal>

            </div>
        )
    }
}

const mapStateToProps = ({ transaction }) => {
    const { commissions, addBankDetailsComponent } = transaction;
    return { commissions, addBankDetailsComponent };
};

export default connect(mapStateToProps, {
    getAllCommissions, getCommissionById, newCommission
})(CommissionMgmt);

