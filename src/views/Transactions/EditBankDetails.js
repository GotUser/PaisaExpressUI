import React, { Component } from 'react';
import {
    Row, Col, Table, Modal, ModalHeader, ModalBody, ModalFooter, Button,
    Badge, TabContent, TabPane, Nav, NavItem, NavLink, ButtonDropdown,
    DropdownToggle, DropdownMenu, DropdownItem, Card, CardHeader, CardFooter, CardBody,
    Collapse, Form, FormGroup, FormText, Label, Input, InputGroup, InputGroupAddon,
    InputGroupButton

} from 'reactstrap';

import {
    OpenOrCloseEditBankDetailsModal, OpenOrCloseDeleteBankDetailsModalAction, storeEditedBankDetails,
    OpenOrCloseDeleteBankModalAction
} from './TransactionsAction'
import { connect } from 'react-redux';


class EditBankDetails extends Component {

    constructor(props) {
        super(props);
        this.DisplayBankDetails = this.DisplayBankDetails.bind(this);

        this.toggleEdit = this.toggleEdit.bind(this);
        this.toggleDanger = this.toggleDanger.bind(this);

        this.EditSubmit = this.EditSubmit.bind(this);

        this.OnOpenDeleteBankModal = this.OnOpenDeleteBankModal.bind(this);

        // this.StoreselectedBank = this.StoreselectedBank.bind(this);
        // this.StoreselectedState = this.StoreselectedState.bind(this);
        // this.StoreselectedDistrict = this.StoreselectedDistrict.bind(this);
        // this.StoreselectedBranch = this.StoreselectedBranch.bind(this);
        this.OnMobileNoEdit = this.OnMobileNoEdit.bind(this);

        this.OnACHolderNameEdit = this.OnACHolderNameEdit.bind(this);
        this.OnIFSCEdit = this.OnIFSCEdit.bind(this);
        this.OnBankAddressEdit = this.OnBankAddressEdit.bind(this);
        this.OnBankNameEdit = this.OnBankNameEdit.bind(this);
        this.OnBankStateEdit = this.OnBankStateEdit.bind(this);
        this.OnBankDistrictEdit = this.OnBankDistrictEdit.bind(this);
        this.OnBankBranchEdit = this.OnBankBranchEdit.bind(this);

        this.state = {

            Edit: false,
            openDeleteModal: false,
        }
    }

    EditSubmit() {

        console.log("clocked On EditSubmit  ");
        console.log(inputACHolderName.defaultValue);
        console.log(inputbankAddress.value);
    }

    OnACHolderNameEdit(acName) {

        console.log(acName.target.value);

        const EditedValue = acName.target.value;
        const Editedfield = 'ACHolderName';

        this.props.storeEditedBankDetails({ EditedValue, Editedfield });

    }

    OnMobileNoEdit(mobleNo) {

        // console.log(" ALL VALUE :" + ev.target.value);

        const EditedValue = mobleNo.target.value;
        const Editedfield = 'MobileNo';

        this.props.storeEditedBankDetails({ EditedValue, Editedfield });

    }

    OnIFSCEdit(ifscCode) {
        const EditedValue = ifscCode.target.value;
        const Editedfield = 'ifscCode';

        this.props.storeEditedBankDetails({ EditedValue, Editedfield });
    }
    OnBankAddressEdit(BankAddress) {
        console.log(" bank address edit :" + BankAddress.target.value);
        const EditedValue = BankAddress.target.value;
        const Editedfield = 'BankAddress';

        this.props.storeEditedBankDetails({ EditedValue, Editedfield });
    }
    OnBankNameEdit(BankName) {
        console.log(" BankName Changed ");
        console.log(BankName.target.value);

        const EditedValue = BankName.target.value;
        const Editedfield = 'BankName';

        this.props.storeEditedBankDetails({ EditedValue, Editedfield });
    }
    OnBankStateEdit(bankState) {

        const EditedValue = bankState.target.value;
        const Editedfield = 'bankState';

        this.props.storeEditedBankDetails({ EditedValue, Editedfield });

    }

    OnBankBranchEdit(BankBranch) {

        const EditedValue = BankBranch.target.value;
        const Editedfield = 'BankBranch';

        this.props.storeEditedBankDetails({ EditedValue, Editedfield });

    }



    OnBankDistrictEdit(BankDistrict) {

        const EditedValue = BankDistrict.target.value;
        const Editedfield = 'BankDistrict';

        this.props.storeEditedBankDetails({ EditedValue, Editedfield })

    }


    OnOpenDeleteBankModal(bank) {

        if (!bank === 'cancleDeleteModal') {

            console.log(" bankDetails" + bank.bankName);
        
            this.props.OpenOrCloseDeleteBankDetailsModalAction();


        }
        else
            this.props.OpenOrCloseDeleteBankDetailsModalAction();

    }

    DisplayBankDetails() {
        console.log("+++++++++++DisplayBankDetails");
        return this.props.editBankDetailsComponent.AllBankAcs.map(bank => (
            <tr key={bank.Sn}>
                <td className="center">{bank.Sn}</td>
                <td className="center">{bank.ACholderNAme}</td>
                <td className="left">{bank.Mobile}</td>
                <td className="left">{bank.IFSC}</td>
                <td className="center">{bank.bankName}</td>
                <td className="right">{bank.BankState}</td>
                <td className="right">{bank.BankDist}</td>
                <td className="right">{bank.Branch}</td>
                <td className="right">{bank.address}</td>
                <td className="center">
                    <a class="btn btn-info" onClick={() => this.toggleEdit(bank)}>
                        <i class="fa fa-edit "></i></a>

                    {/* <i onClick={() => this.toggleEdit(bank)} className="icon-pencil icons font-2xl d-block mt-4" /> */}
                </td>
                <td className="center">
                    {/* <i onClick={() => this.toggleDanger({ bank })} className="icon-trash icons font-2xl d-block mt-4" /> */}

                    <a class="btn btn-danger gridButtons" onClick={() => this.OnOpenDeleteBankModal(bank)}>
                        <i class="fa fa-trash-o "></i></a>
                </td>
            </tr>
        )
        )
    }

    toggleEdit(BankDetails) {

        var closeModal = null;

        if (BankDetails === 'closeModal') {
            closeModal = true;

        } else {
            closeModal = false;
        }
        console.log(BankDetails.ACholderNAme);
        console.log("closeModal :       " + BankDetails);
        // const BankNAme =
        const ACHolderName = BankDetails.ACholderNAme;
        const MobileNO = BankDetails.Mobile;
        const IFSCCode = BankDetails.IFSC;
        const BankName = BankDetails.bankName;
        const BankState = BankDetails.BankState;
        const Sn = BankDetails.Sn;
        const BankBranch = BankDetails.Branch;
        const BankDist = BankDetails.BankDist;
        const BankAddress = BankDetails.address

        this.props.OpenOrCloseEditBankDetailsModal({ ACHolderName, MobileNO, IFSCCode, BankName, BankState, Sn, BankBranch, BankAddress, BankDist, closeModal });

    }

    toggleDanger(AC) {
        this.setState({
            danger: !this.state.danger
        });
    }

    render() {


        console.log(" +++++++++++++++++++++++++++ EDIT BANK DETAILS ..........");

        return (
            <div className="animated fadeIn">
                <Card>
                    <CardHeader>
                    </CardHeader>
                    <CardBody>
                        {/* <scroll>                  */}
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th className="center">S No</th>
                                    <th>A/C Holder Name</th>
                                    <th>Mobile No</th>
                                    <th className="center">IFSC Code</th>
                                    <th className="right">Bank Name</th>
                                    <th className="right">Bank State</th>
                                    <th className="right">Bank District</th>
                                    <th className="right">Bank Branch</th>
                                    <th className="right">Bank Address</th>
                                    {/* <th className="right">Edit/Delete</th> */}

                                </tr>
                            </thead>
                            <tbody>

                                {this.DisplayBankDetails()}
                            </tbody>
                        </Table>
                        {/* </scroll> */}
                        <Modal isOpen={this.props.editBankDetailsComponent.editModal}
                            // toggle={()=>this.toggleEdit('closeModal')}
                            className={'modal-info ' + this.props.className}>
                            <ModalHeader
                                toggle={() => this.toggleEdit('closeModal')}
                            >Modifying Bank Account Details</ModalHeader>
                            <ModalBody>

                                <Form action="" method="post" encType="multipart/form-data" className="form-horizontal">

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="inputACHolderName"> A/C Holder Name</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text"
                                                defaultValue={this.props.editBankDetailsComponent.bankDetailsToedit.ACHolderName}
                                                onChange={this.OnACHolderNameEdit}
                                                style={{ fontWeight: 'bold' }}
                                                id="inputACHolderName" />

                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="inputMobileNo">Mobile NO</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text"
                                                defaultValue={this.props.editBankDetailsComponent.bankDetailsToedit.MobileNO}
                                                onChange={this.OnMobileNoEdit}
                                                style={{ fontWeight: 'bold' }}
                                                id="inputMobileNo"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="inputIFSC">IFSC Code</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text"
                                                defaultValue={this.props.editBankDetailsComponent.bankDetailsToedit.IFSCCode}
                                                onChange={this.OnIFSCEdit}
                                                style={{ fontWeight: 'bold' }}
                                                id="inputIFSC"
                                            />
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectbank">Bank Names</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input
                                                onChange={this.OnBankNameEdit}
                                                style={{ fontWeight: 'bold' }}
                                                type="select" id="selectbank">
                                                <option
                                                    disabled={this.props.addBankDetailsComponent.dissableSelectHintforBank}
                                                    value="0">{this.props.editBankDetailsComponent.bankDetailsToedit.BankName}</option>
                                                {this.props.addBankDetailsComponent.bankList.map((bankName) =>
                                                    <option hidden={this.props.editBankDetailsComponent.bankDetailsToedit.BankName === bankName}  >
                                                        {bankName}</option>)}

                                            </Input>
                                        </Col>
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectState">Bank State</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input
                                                onChange={this.OnBankStateEdit}
                                                style={{ fontWeight: 'bold' }}
                                                type="select" name="selectState" id="selectState">
                                                <option
                                                    disabled={this.props.addBankDetailsComponent.dissableSelectHintforState}
                                                    value="0">{this.props.editBankDetailsComponent.bankDetailsToedit.BankState} </option>
                                                {this.props.addBankDetailsComponent.bankStates.map((bankState) =>
                                                    <option hidden={this.props.editBankDetailsComponent.bankDetailsToedit.BankState === bankState}  >
                                                        {bankState}
                                                        {/* {bankState === this.props.editBankDetailsComponent.bankDetailsToedit.BankState ? '' : bankState} */}
                                                    </option>)}

                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectDistrict">Bank District</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input
                                                onChange={this.OnBankDistrictEdit}
                                                type="select"
                                                style={{ fontWeight: 'bold' }}
                                                name="selectDistrict"
                                                id="selectDistrict">
                                                <option
                                                    disabled={this.props.addBankDetailsComponent.dissableSelectHintforDistrict}
                                                    value="0">{this.props.editBankDetailsComponent.bankDetailsToedit.BankDist}  </option>
                                                {this.props.addBankDetailsComponent.bankDistricts.map((bankDistrict) =>
                                                    <option hidden={this.props.editBankDetailsComponent.bankDetailsToedit.BankDist === bankDistrict}>
                                                        {bankDistrict}
                                                        {/* {bankDistrict === this.props.editBankDetailsComponent.bankDetailsToedit.BankDist ? null : bankDistrict} */}
                                                    </option>)}

                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="selectBranch">Bank Branch</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input
                                                onChange={this.OnBankBranchEdit}
                                                style={{ fontWeight: 'bold' }}
                                                type="select" name="selectBranch" id="selectBranch">
                                                <option disabled={this.props.addBankDetailsComponent.dissableSelectHintforBranch}
                                                    value="0">{this.props.editBankDetailsComponent.bankDetailsToedit.BankBranch}</option>
                                                {this.props.addBankDetailsComponent.bankBranches.map((bankBranch) => <option>
                                                    {bankBranch}</option>)}

                                            </Input>
                                        </Col>
                                    </FormGroup>

                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="inputbankAddress"> Bank Address</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Input type="text"
                                                defaultValue={this.props.editBankDetailsComponent.bankDetailsToedit.BankAddress}
                                                style={{ fontWeight: 'bold' }}
                                                onChange={this.OnBankAddressEdit}
                                                id="inputbankAddress"
                                                placeholder="Enter Bank Addredd" />
                                        </Col>
                                    </FormGroup>

                                </Form>

                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    onClick={() => console.log(" Clicked")}
                                    disabled={!this.props.editBankDetailsComponent.EnableSaveInEditModal}
                                    color="warning" onClick={this.EditSubmit}>
                                    Submit</Button>{' '}
                                <Button color="secondary" onClick={() => this.toggleEdit('closeModal')}>Cancel</Button>
                            </ModalFooter>
                        </Modal>

                        <Modal isOpen={this.props.editBankDetailsComponent.OpendeleteModal} toggle={this.toggleDanger}
                            className={'modal-danger ' + this.props.className}>
                            <ModalHeader toggle={this.toggleDanger}>Deleting Bank Account</ModalHeader>
                            <ModalBody>
                                Are You Sure, You Want To Delete This Bank Account From Data Base.

                             </ModalBody>
                            <ModalFooter>
                                <Button color="danger" onClick={this.toggleDanger}>Delete</Button>{' '}
                                <Button color="secondary" onClick={() => this.OnOpenDeleteBankModal('cancleDeleteModal')}>Cancel</Button>
                            </ModalFooter>
                        </Modal>

                    </CardBody>
                </Card>
            </div>
        )
    }
}


const mapStateToProps = ({ transaction }) => {
    const { editBankDetailsComponent, addBankDetailsComponent } = transaction;

    return { editBankDetailsComponent, addBankDetailsComponent };
};

export default connect(mapStateToProps, {
    OpenOrCloseEditBankDetailsModal, OpenOrCloseDeleteBankDetailsModalAction, storeEditedBankDetails, OpenOrCloseDeleteBankModalAction
})(EditBankDetails);



