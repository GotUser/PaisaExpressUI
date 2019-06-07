import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table, Button,
    // Modal,
    ModalBody, ModalFooter, Input
} from 'reactstrap';

import { connect } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';

import {
    GetPendingDeposits, AcceptDepositRequest
} from './TransactionsAction';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

import "react-toggle/style.css"

import { EmptyListImage } from '../GlobalModals';

import EmptyRecordImg from '../../../public/img/norecordfound.png';

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};


class PendingDeposits extends Component {


    constructor(props) {
        super(props);

        this.state = {

            modalIsOpen: false

        };
        // this.openModal = this.openModal.bind(this);
        // this.closeModal = this.closeModal.bind(this);

    }
    componentWillMount() {

        let AccessToken = this.props.LoginDetails.accessToken;
        let offset = 0;
        let limit = 100;
        let searchText = '';
        this.props.GetPendingDeposits(AccessToken, offset, limit, searchText);
    }

    componentDidUpdate() {
        console.log("Component DID Update : " + this.props.CashDeposit.ApiResults.AcceptDepositSuccess);
        if (this.props.CashDeposit.ApiResults.AcceptDepositSuccess) {

            console.log("In Component di9d mount Registered User To Approve component : 0");
            // toast.success(this.props.CashDeposit.ApiResults.message);
        }
    }

    render() {
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="pendingDeposits" />
                <ToastContainer position="top-right" autoClose={5000} style={{ zIndex: 1999 }} />
                <Row>
                    <Col xs="12" lg="12">
                        <Card >
                            <CardHeader>
                                <h5 className="font-weight-bold"> Pending Deposits </h5>
                                <Input style={{ height: 33, width: '33%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                // value={this.state.searchingValue}
                                // onChange={this.onChange}
                                />
                            </CardHeader>
                            <CardBody>
                                {/* <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                                    {this.props.NewlyAddedOrg.ApiResults.Error}</span> */}
                                <Table style={{ overflowX: 'auto' }} responsive>
                                    <thead>
                                        <tr>
                                            <th> NEFT/RTGS trans id</th>
                                            <th>Deposit Type</th>
                                            <th>Amount</th>
                                            <th>Bank</th>
                                            <th>Branch</th>
                                            <th>FSE name</th>
                                            <th>Deposit Slip</th>
                                            <th className="text-center"> Accept/Reject  </th>
                                            {/* <th>Address</th> */}
                                            {/* <th></th> */}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.CashDeposit.PendingDepositList.map((user, i) => (
                                            <tr key={i + 1} >
                                                {user.trasId === null ? <td> - </td> : <td>{user.trasId}</td>}
                                                <td>{user.depType}</td>
                                                <td>{parseInt(user.amount)}</td>
                                                {user.bank == null ? <td>-</td> : <td>{user.bank}</td>}
                                                {user.branch == null ? <td>-</td> : <td>{user.branch}</td>}
                                                {user.fseName == null ? <td>-</td> : <td>{user.fseName}</td>}
                                                <td>
                                                    {user.depositslip == '' || user.depositslip == null || user.depositslip == undefined ?
                                                        " -"
                                                        : <img
                                                            style={{ height: '5vh', width: '5vh' }}
                                                            // src={img}
                                                            class="zoom"
                                                            onClick={() => this.setState({
                                                                OpenDoc: true,
                                                                docsBase64: user.documents
                                                            })}
                                                            src={"data:image/jpg;base64," + user.documents
                                                            }
                                                        />}
                                                </td>
                                                <td className="text-center">
                                                    <Button type='button'
                                                        onClick={() => {
                                                            let AccessToken = this.props.LoginDetails.accessToken
                                                            this.props.AcceptDepositRequest(AccessToken, user.trasId);
                                                        }}
                                                        color="success" outline >
                                                        <i className="fa fa-check" title="Accept"></i> </Button>

                                                    <Button
                                                        style={{ marginLeft: 10 }}
                                                        onClick={() => {
                                                            let AccessToken = this.props.LoginDetails.accessToken;
                                                            this.setState({ modalIsOpen: true })
                                                        }}
                                                        type='button' color="danger" outline >
                                                        <i className="fa fa-times" title="deny"></i> </Button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>

                                {this.EmptyUserListImage()}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={() => this.setState({ modalIsOpen: false })}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    {/* <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
                    <button onClick={() => this.setState({ modalIsOpen: false })}>close</button>
                    <div>I am a modal</div>
                    <form>
                        <input />
                        <button>tab navigation</button>
                        <button>stays</button>
                        <button>inside</button>
                        <button>the modal</button>
                    </form> */}

                    <img src={EmptyRecordImg} >
                    
                    </img>
                </Modal>

                <Modal size="lg"
                    className={'modal-success ' + this.props.className}
                    isOpen={this.state.OpenDoc} >
                    <ModalBody >
                        <img
                            class="zoom"
                            style={{ height: '100vh', width: '80vh' }}
                            // src={img}
                            src={"data:image/jpg;base64," + this.state.docsBase64
                            }
                        />
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={() => this.setState({ docsBase64: '', OpenDoc: false })}>OK</Button>
                    </ModalFooter>
                </Modal>
            </div >
        )
    }

    EmptyUserListImage() {
        return EmptyListImage(this.props.CashDeposit.ApiResults.getPendingDepositSuccess, this.props.CashDeposit.PendingDepositList)
    }

}

const mapStateToProps = ({ userManagementReducer, Authentication, transaction }) => {
    const { NewlyAddedOrg } = userManagementReducer;
    const { CashDeposit } = transaction;
    const { LoginDetails, userRoleModulePermissions } = Authentication;
    return { NewlyAddedOrg, LoginDetails, userRoleModulePermissions, CashDeposit };
};

export default connect(mapStateToProps, {
    GetPendingDeposits, AcceptDepositRequest

})(PendingDeposits);

