// import React, { Component } from 'react';
// import { Row, Col, Button, Label, Input } from 'reactstrap';

// import { connect } from 'react-redux';

// import { ContinueToAddBeneficiary } from '../../BankManagementAction';

// const logo = require("../../../../../public/img/Verify.png");

// const products = [];

// function addProducts(quantity) {
//     const startId = products.length;
//     for (let i = 1; i <= quantity; i++) {
//         const id = startId + i;
//         products.push({
//             id: id,
//             distributorName: 'Agent ' + id,
//             amount: 2100 + i,
//             distributorMobileNo: 2100 + i,
//             date: "02-01-2001",
//         });
//     }
// }

// addProducts(100);

// class DisplayBeneList extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             focusedInput: '',
//         };
//     }

//     render() {
//         const BeneList = this.props.MTBeneficiary.BeneList;
//         const options = {
//             page: 1,  //  page you want to show as default
//             sizePerPageList: [{
//                 text: '5', value: 5
//             }, {
//                 text: '20', value: 20
//             }, {
//                 text: '30', value: 30
//             }], // you can change the dropdown list for size per page
//             sizePerPage: 5,  // max number of records to be displayed in a page
//             pageStartIndex: 1, // where to start counting the pages
//             paginationSize: 5,  // max Links displayed at  a time 
//             prePage: '<<', // Previous page button text
//             nextPage: '>>', // Next page button text
//             paginationPosition: 'bottom', // default is bottom, top and both is all available
//             paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
//             withFirstAndLast: false, // Hide the going to First and Last page button      
//             searchField: this.createCustomSearchField,
//             sizePerPageDropUp: true,
//             insertBtn: this.createCustomInsertButton,

//         };
//         return (
//             <div >
//                 <Row style={{ background: "white", marginLeft: 0, marginRight: 0 }}>
//                     <Col xs="12" lg="3" >
//                         <label style={{ marginTop: "5%" }} class="tableTitleStyle">List of Beneficiaries  </label>
//                     </Col>
//                     <Col xs="12" lg="2">
//                         <button class="buttonStyle"
//                             onClick={() => {

//                                 // this.setState({
//                                 //     addBeneShow: true
//                                 // })
//                                 let AccessToken = this.props.LoginDetails.accessToken;
//                                 this.props.ContinueToAddBeneficiary(AccessToken, undefined);
//                             }}
//                         >Add New</button>
//                     </Col>
//                     <Col xs="12" lg="7">
//                         <Input type="search"
//                             style={{ borderRadius: 20, fontSize: 10, width: "50%", marginLeft: "50%", marginTop: "2%" }}

//                         // style={{ height: 33, width: '33%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
//                         // value={this.state.searchingValue}
//                         // onChange={this.onChange} 
//                         />
//                     </Col>
//                 </Row>

//                 {/* <AddBeneForm /> */}

//                 <BootstrapTable version="4" data={BeneList}
//                     headerStyle={{ background: 'rgb(231, 230, 230)', height: 45, }}
//                     containerStyle={{ background: 'white', padding: 10 }}
//                     bodyStyle={{ borderBottom: '1px solid #dfdfdf' }}
//                     bordered={false}
//                     pagination
//                     options={options}>
//                     <TableHeaderColumn isKey dataField="mobileNo">Mobile No.</TableHeaderColumn>
//                     <TableHeaderColumn dataField="fullName">Name</TableHeaderColumn>
//                     <TableHeaderColumn dataField="bankName" >Bank</TableHeaderColumn>
//                     <TableHeaderColumn dataField="ifsc" >IFSC Code</TableHeaderColumn>
//                     <TableHeaderColumn dataField="acccountNo" >Account Number</TableHeaderColumn>
//                     <TableHeaderColumn dataField="bankAccountVerified" >Status</TableHeaderColumn>
//                     <TableHeaderColumn onClick={() => console.log(" Clicked ON Delete : ")} dataField="id" >Delete</TableHeaderColumn>
//                     <TableHeaderColumn dataField="mobileNo" >Send Money</TableHeaderColumn>

//                 </BootstrapTable>
//             </div>
//         )
//     }
//     // ContinueToAddBene() {
//     //     let Customer = this.props.MTcustomer.CustomerDetails;
//     //     let DobDate = Customer.dateOfBirth.substring(0, 2);
//     //     let DobMonth = Customer.dateOfBirth.substring(3, 5);
//     //     let DobYear = Customer.dateOfBirth.substring(6, 10);

//     //     Customer.dateOfBirth = DobYear + '-' + DobMonth + '-' + DobDate;

//     //     this.props.ContinueToAddBeneficiary(Customer);
//     // }
// }

// const mapStateToProps = ({ Authentication, bankManagement }) => {
//     const { LoginDetails } = Authentication;
//     const { MTcustomer, MTBeneficiary } = bankManagement;
//     return { LoginDetails, MTcustomer, MTBeneficiary };
// };

// export default connect(mapStateToProps, {
//     ContinueToAddBeneficiary
// })(DisplayBeneList);

import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input, Modal, ModalBody,
    Card, CardBody, Table, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';

import { connect } from 'react-redux';
import '../../../../../public/CustomStyles.css';
import { ToastContainer, toast } from 'react-toastify';

import { toTitleCase } from '../../../../GlobalVars';

import {
    ContinueToAddBeneficiary, SearchBeneficiary, DeleteBeneficiary, ChangeBaneDeleteSuccssParamFalse,
    EnableBeneNotVerifiedModal, DisableBeneNotVerifiedModal, ProccedToTransDetails
} from '../../BankManagementAction';

class DisplayBeneList extends Component {

    constructor() {
        super();
        // create dataSet of random length
        this.dataSet = [];
        this.pageSize = 5;
        this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);
        this.state = {
            currentPage: 0,
            dropdownOpen: false,
            addBeneShow: false,
            value: false
        };
        this.SearchBeneEvent = this.SearchBeneEvent.bind(this);
        this.DleteBaneEvent = this.DleteBaneEvent.bind(this);

    }
    componentWillMount() {
        this.UpdateDataSet()
    }

    componentDidUpdate() {

        if (this.props.MTBeneficiary.BeneDeleteSuccess) {

            console.log("In Component di9d mount Registered User To Approve component : 0");
            // toast.success(" Beneficiary Deleted Successfully ");
            this.UpdateDataSet()
            this.props.ChangeBaneDeleteSuccssParamFalse()
        }
    }

    UpdateDataSet() {
        console.log(" Update Data Set called  : ");
        this.dataSet = this.props.MTBeneficiary.BeneList;
        this.pagesCount = Math.ceil(this.dataSet.length / this.pageSize);

    }

    // componentDidMount() {

    // }

    //On click  assigns index of the clickedLink to currentPage
    handleClick(e, index) {
        console.log(this.pagesCount + "Index :" + index)
        e.preventDefault();
        this.setState({
            currentPage: index
        });
    }

    //Used to assign values to links 
    renderLinks(i) {
        const { currentPage } = this.state;
        return i <= currentPage + 2 ? i + 1 : '.';
    }

    SearchBeneEvent(event) {
        console.log(" SearchBeneficiary In BENE LIST : ");
        let AccessToken = this.props.LoginDetails.accessToken;
        let CustomerId = this.props.MTcustomer.customerId !== undefined && this.props.MTcustomer.customerId !== '' ?
            this.props.MTcustomer.customerId :
            this.props.MTcustomer.ExistingCustomer.id !== undefined && this.props.MTcustomer.ExistingCustomer.id !== '' ?
                this.props.MTcustomer.ExistingCustomer.id : this.props.MTcustomer.customerId
        let SearchVal = toTitleCase(event.target.value);
        this.props.SearchBeneficiary(AccessToken, CustomerId, SearchVal)
    }
    DleteBaneEvent(bene) {
        console.log(" / / / / // / // / Delete Bene Event ");
        console.log(bene);
        let AccessToken = this.props.LoginDetails.accessToken;
        let CustomerId = this.props.MTcustomer.customerId !== undefined && this.props.MTcustomer.customerId !== '' ?
            this.props.MTcustomer.customerId :
            this.props.MTcustomer.ExistingCustomer.id !== undefined && this.props.MTcustomer.ExistingCustomer.id !== '' ?
                this.props.MTcustomer.ExistingCustomer.id : this.props.MTcustomer.customerId;
        let Baneid = bene.id;

        this.props.DeleteBeneficiary(AccessToken, CustomerId, Baneid);
    }

    SendMoneyEvent(bene) {

        if (bene.bankAccountVerified) {
            this.props.ProccedToTransDetails(bene)
        } else {
            this.props.EnableBeneNotVerifiedModal(bene)
        }
    }

    render() {
        const { currentPage, products } = this.state;
        const BENELIST = this.props.MTBeneficiary.BeneList;
        const pagesCount = Math.ceil(BENELIST.length / this.pageSize);

        let from = (Number(currentPage) * Number(this.pageSize)) + 1;
        let to = (Number(currentPage) * Number(this.pageSize)) + Number(this.pageSize)
        let total = Number(pagesCount) * Number(this.pageSize);

        return (
            <div className="animated fadeIn">
                <ToastContainer position="top-right" autoClose={5000} style={{ zIndex: 1999 }} />
                <Row>
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <React.Fragment>

                                    <Row style={{ marginBottom: "1%" }}>

                                        <Col xs="12" lg="3" >
                                            <label style={{}} class="labelStyleHeadings">List of Beneficiaries  </label>
                                        </Col>
                                        <div >
                                            <button class="buttonStyle Submit"
                                                style={{ borderRadius: 10, marginTop: "1%" }}
                                                onClick={() => {
                                                    let AccessToken = this.props.LoginDetails.accessToken;
                                                    this.props.ContinueToAddBeneficiary(AccessToken, undefined);
                                                }}
                                            >Add New</button>

                                        </div >

                                        <Col xs="12" md="3" style={{ marginLeft: "24%" }} >
                                            <Input type="search"
                                                onChange={this.SearchBeneEvent}
                                                style={{ borderRadius: 20, fontSize: 10, width: "100%", marginLeft: "26%" }}></Input>
                                        </Col >
                                    </Row>
                                    <div>
                                        <Table style={{ borderBottom: "1px solid lightgray" }}>
                                            <thead>
                                                <tr>
                                                    <th>Mobile No.</th>
                                                    <th>Name</th>
                                                    <th>Bank</th>
                                                    <th>IFSC Code</th>
                                                    <th>Account Number</th>
                                                    <th>Status</th>
                                                    <th>Delete</th>
                                                    <th>Send Money</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {BENELIST.slice(
                                                    currentPage * this.pageSize,
                                                    (currentPage + 1) * this.pageSize
                                                )
                                                    .map((item, i) => {
                                                        return (

                                                            <tr key={item.id}>
                                                                <td>{item.mobileNo}</td>
                                                                <td>{item.fullName}</td>
                                                                <td>{item.bankName}</td>
                                                                <td>{item.ifsc}</td>
                                                                <td>{item.acccountNo}</td>
                                                                <td>{item.bankAccountVerified ?

                                                                    <a>
                                                                        <i className="fa fa-check-circle fa-lg gridButtons" title="verified" ></i>
                                                                    </a>
                                                                    :
                                                                    <i class="fas fa-exclamation-triangle" title="Not Verified" ></i>
                                                                }
                                                                </td>
                                                                <td>
                                                                    <a>
                                                                        <i onClick={() => this.DleteBaneEvent(item)} className="fa fa-trash fa-lg gridButtons" title="Delete Bene" ></i>
                                                                    </a>
                                                                </td>
                                                                <td>  <a
                                                                    onClick={() => this.SendMoneyEvent(item)}
                                                                ><i color="#FFA500" class="fa fa-paper-plane fa-lg gridButtons" aria-hidden="true"></i> </a></td>
                                                            </tr>

                                                        )
                                                    }
                                                    )}
                                            </tbody>
                                        </Table>
                                    </div>

                                    <div >

                                        <Input style={{ width: '5%' }}
                                            onClick={(txt) => {
                                                this.pageSize = txt.target.value
                                                this.setState({ value: !this.state.value })
                                            }}
                                            type="select">
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                        </Input>
                                        <Label style={{}}>Per page</Label>

                                        <span style={{ color: 'black', marginTop: 6, marginLeft: "30%" }}>
                                            Showing results  {from} - {to} of {total}
                                        </span>

                                        <div class="pull-right" style={{ marginLeft: "2%" }}>
                                            <Pagination aria-label="Page navigation example">
                                                <PaginationItem disabled={currentPage <= 0}>
                                                    {pagesCount > 1 ? <PaginationLink
                                                        onClick={e => {
                                                            // if (parseInt(currentPage) !== 1) {
                                                            this.handleClick(e, currentPage - 1)
                                                            // } else console.log(" Console.log(current page is 1 or below)")
                                                        }
                                                        }
                                                        next
                                                        href="#"> &#xab;
                                                    </PaginationLink>
                                                        :
                                                        null
                                                    }
                                                </PaginationItem>

                                                {/* [...Array(this.pagesCount)] is used to create Array of size pagesCount */}
                                                {[...Array(pagesCount)].map((page, i) =>
                                                    <PaginationItem active={i === currentPage} key={i}>
                                                        {
                                                            i >= currentPage && i <= currentPage + 2 ?
                                                                <PaginationLink onClick={e =>
                                                                    this.handleClick(e, i)} href="#">
                                                                    {this.renderLinks(i)}
                                                                </PaginationLink>
                                                                :
                                                                null
                                                        }

                                                    </PaginationItem>
                                                )}

                                                <PaginationItem disabled={currentPage >= pagesCount - 1}>
                                                    {pagesCount > 1 ? <PaginationLink
                                                        onClick={e => {
                                                            this.handleClick(e, currentPage + 1)
                                                        }
                                                        }
                                                        next
                                                        href="#"> &#xbb;
                                                    </PaginationLink>
                                                        :
                                                        null
                                                    }
                                                </PaginationItem>

                                            </Pagination>
                                        </div>
                                    </div>
                                </React.Fragment>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="1"></Col>
                </Row>
                <Modal size="sm" isOpen={this.props.MTBeneficiary.BeneNotVerifiedModal}>
                    <ModalBody>
                        <div
                        //  style={{ textAlign: "center", display: 'flex', justifyContent: 'center' }}
                        >
                            <text> The benificiary is not verified. </text>
                            <text> Would you still like to make a trasfer? </text>
                        </div>
                        <Row style={{ justifyContent: "space-evenly" }}>
                            <div style={{ textAlign: "center" }}>
                                < button style={{}}
                                    onClick={() => this.props.ProccedToTransDetails(undefined)}
                                    class="buttonStyle Submit " >Yes </button>
                            </div>
                            <div style={{ textAlign: "center" }}>
                                <button
                                    onClick={() => this.props.DisableBeneNotVerifiedModal()}
                                    class="buttonStyle special2"
                                >No </button>
                            </div>
                        </Row>
                    </ModalBody>
                </Modal>
            </div >
        )
    }
}
const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer, MTBeneficiary } = bankManagement;
    return { LoginDetails, MTcustomer, MTBeneficiary };
};

export default connect(mapStateToProps, {
    ContinueToAddBeneficiary, SearchBeneficiary, DeleteBeneficiary, ChangeBaneDeleteSuccssParamFalse,
    EnableBeneNotVerifiedModal, DisableBeneNotVerifiedModal, ProccedToTransDetails
})(DisplayBeneList);



