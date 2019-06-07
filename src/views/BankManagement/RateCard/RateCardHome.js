import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input,
    Card, CardBody, Table, Modal, ModalFooter, ModalHeader, Button

} from 'reactstrap';



import LaddaButton, {
    EXPAND_LEFT, EXPAND_RIGHT, EXPAND_UP
} from 'react-ladda';

import 'ladda/dist/ladda-themeless.min.css';

import '../../../../public/CustomStyles.css';

import { connect } from 'react-redux';

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';
import swal from 'sweetalert';

import { GetRateCardTemplate, GetAllRateCards, DeleteRateCard, ChangePageSizeInRateCardHome,SaveCreatingRateCardData, SearchRateCards, NavigateToCreateOrUpdate_RateCard, GetRateCardSlabsOnID, ResetRateCardData } from '../BankManagementAction';

class RateCardHome extends Component {

    constructor() {
        super();
        this.state = {
            dropdownOpen: false,
            openDeleteRateCardModal: false,
            RateCardId: ''
        };
        this.toggle = this.toggle.bind(this);
        this.deleteRatecard = this.deleteRatecard.bind(this);
        this.viewRatecard = this.viewRatecard.bind(this);

    }

    componentWillMount() {
        let AccessToken = this.props.LoginDetails.accessToken;
        this.props.GetAllRateCards(AccessToken);
    }

    componentDidUpdate() {
        let RateCardNavigation = this.props.RateCard.RateCardNavigation;
        if (RateCardNavigation.AddRateCard || RateCardNavigation.EditRateCard || RateCardNavigation.ViewRateCard) {
            this.props.history.push('/RateCardMain')
        }
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    handleClick(e, index) {
        e.preventDefault();
        this.props.SaveCreatingRateCardData(index, 'CurrentPage');
    }

    //Used to assign values to links 
    renderLinks(i) {
        return i + 1;
    }

    editRatecard(item) {
        this.props.NavigateToCreateOrUpdate_RateCard('Edit RateCard', item.id)
    }
    viewRatecard(item) {
        this.props.NavigateToCreateOrUpdate_RateCard('View RateCard', item.id)
    }

    deleteRatecard(item) {
        // swal({
        //     title: "Are you sure?",
        //     text: "Once deleted, you will not be able to recover this ratecard!",
        //     icon: "warning",
        //     buttons: true,
        //     dangerMode: true,
        // }).then((willDelete) => {
        //         if (willDelete) {
                    let AccessToken = this.props.LoginDetails.accessToken;
                    this.props.DeleteRateCard(AccessToken, item.id)
        //         swal("Ratecard  has been deleted!", {
        //             icon: "success",
        //         });
        //     }
        //    else {
        //     }
        // });
    }



    render() {
        let RateCardList = this.props.RateCard.AllrateCards;
        let PageSize = this.props.RateCard.InitialPageSize;
        let CurrentPage = this.props.RateCard.currentPage;
        let pagesCount = Math.ceil(RateCardList.length / PageSize);

        let from = (Number(CurrentPage) * Number(PageSize)) + 1;
        let to = Number(CurrentPage) * Number(PageSize) + Number(PageSize);
        let total = Number(pagesCount) * Number(PageSize);

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="RateCardHome" />
                <Row>
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <React.Fragment>

                                    <Row style={{ marginBottom: "1%" }}>

                                        <Col xs="12" lg="3" >
                                            <label style={{}} className="labelStyleHeadings">Rate Cards  </label>
                                        </Col>

                                        <div >
                                            <LaddaButton
                                                style={{ color: "black" }}
                                                className="btn btn-warning btn-ladda"
                                                loading={this.props.ProgressIndicator.InProgress}
                                                onClick={() => {
                                                    this.props.NavigateToCreateOrUpdate_RateCard('Add RateCard', null)
                                                }}
                                                data-color="rgb(248, 176, 24)"
                                                data-style={EXPAND_LEFT}>  &#x2b; New Rate Card  </LaddaButton>
                                        </div >
                                        <Col xs="12" md="5" ></Col>

                                        <Col xs="12" md="2"  >
                                            <Input type="search"
                                                onChange={(txt) => {
                                                    let AccessToken = this.props.LoginDetails.accessToken;
                                                    this.props.SearchRateCards(AccessToken, txt.target.value)
                                                }}
                                                placeholder="Search RateCard"
                                                style={{ borderRadius: 20, fontSize: 10 }}></Input>
                                        </Col >
                                    </Row>

                                    <div>
                                        <Table style={{ borderBottom: "1px solid lightgray" }}>
                                            <thead>
                                                <tr style={{ background: "#f1f1f1" }}>
                                                    <th></th>
                                                    <th>Title</th>
                                                    <th>Description</th>
                                                    <th>Date Created</th>
                                                    <th>Date Modified</th>
                                                    <th>Edit</th>
                                                    <th>View</th>
                                                    <th>Delete</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {RateCardList.slice(
                                                    CurrentPage * PageSize,
                                                    (CurrentPage + 1) * PageSize
                                                ).map((item, i) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td>{<div style={{ background: item.colorIndicator, width: 30, height: 25, border: "1px solid lightgray" }} ></div>}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.description}</td>
                                                            <td>{item.createdDate}</td>
                                                            <td>{item.lastModifiedDate === null ? item.createdDate : item.lastModifiedDate}</td>
                                                            <td>{
                                                                <a onClick={() => {
                                                                    this.editRatecard(item);
                                                                }}>
                                                                    <i className="fa fa-edit fa-lg gridButtons" title="View" ></i>
                                                                </a>}</td>
                                                            <td>{
                                                                <a onClick={() => {
                                                                    this.viewRatecard(item);
                                                                }}>
                                                                    <i className="fa fa-eye fa-lg gridButtons" title="View" ></i>
                                                                </a>}</td>
                                                            <td>{<a
                                                                onClick={() => {
                                                                    this.deleteRatecard(item);

                                                                }}>
                                                                <i className="fa fa-trash fa-lg gridButtons" title="Delete Bene" ></i>
                                                            </a>}</td>
                                                        </tr>
                                                    )
                                                }
                                                )}
                                            </tbody>
                                        </Table>
                                    </div>
                                    <Row >
                                        <div>
                                            <Input style={{ width: '100%' }}
                                                onClick={(txt) => {
                                                    // console.log(txt.target.value);
                                                    // console.log(this.props.RateCard.InitialPageSize)
                                                    if (txt.target.value !== this.props.RateCard.InitialPageSize) {
                                                        this.props.ChangePageSizeInRateCardHome(txt.target.value);
                                                    }
                                                }}
                                                type="select">
                                                <option value="5">5</option>
                                                <option value="10">10</option>
                                                <option value="20">20</option>
                                            </Input>`

                                        </div>

                                        <Col style={{ paddingTop: 5 }}>
                                            <Label >Per page</Label>
                                        </Col>

                                        <Col xs="12" md="8" >

                                            <span style={{ color: 'black', marginTop: 6, }}>
                                                Showing results  {from} - {to} of {total}
                                            </span>

                                            <div className="pull-right" style={{ marginLeft: "2%" }}>
                                                <Pagination aria-label="Page navigation example">
                                                    <PaginationItem disabled={CurrentPage <= 0}>
                                                        {pagesCount > 1 ? <PaginationLink
                                                            onClick={e => {
                                                                this.handleClick(e, CurrentPage - 1)
                                                            }}
                                                            next
                                                            href="#"> &#xab;</PaginationLink>
                                                            :
                                                            null
                                                        }
                                                    </PaginationItem>

                                                    {/* [...Array(this.pagesCount)] is used to create Array of size pagesCount */}
                                                    {[...Array(pagesCount)].map((page, i) =>
                                                        <PaginationItem active={i === CurrentPage} key={i + 1}>
                                                            {
                                                                i >= CurrentPage && i <= CurrentPage + 2 ?
                                                                    <PaginationLink onClick={e =>
                                                                        this.handleClick(e, i)} href="#">
                                                                        {this.renderLinks(i)}
                                                                    </PaginationLink>
                                                                    :
                                                                    null
                                                            }

                                                        </PaginationItem>
                                                    )}

                                                    <PaginationItem disabled={CurrentPage >= pagesCount - 1}>
                                                        {pagesCount > 1 ? <PaginationLink
                                                            onClick={e => {
                                                                this.handleClick(e, CurrentPage + 1)
                                                            }
                                                            }
                                                            next
                                                            href="#"> &#xbb;</PaginationLink>
                                                            :
                                                            null
                                                        }
                                                    </PaginationItem>

                                                </Pagination>
                                            </div>
                                        </Col>
                                    </Row>


                                    {/* 
                                                <Modal
                                                    isOpen={this.state.openDeleteRateCardModal}
                                                    className={'modal-warning ' + this.props.className} >

                                                    <ModalHeader >
                                                        Are you sure  want to delete !
                                                    </ModalHeader>
                                                    
                                                    <ModalFooter>
                                                        <Button
                                                            onClick={() => {
                                                                let AccessToken = this.props.LoginDetails.accessToken;
                                                                let RateCardId=this.state.RateCardId;
                                                                this.props.DeleteRateCard(AccessToken, RateCardId)
                                                                this.setState({
                                                                    openDeleteRateCardModal:false,
                                                                })
                                                            } }
                                                            style={{ width: 100 }} color="warning"
                                                        > Delete</Button>
                                                        
                                                        <Button style={{ width: 100 }}
                                                            onClick={() =>  this.setState({
                                                                openDeleteRateCardModal:false,
                                                            })}
                                                        >Cancel</Button>
                                                    </ModalFooter>
                                                </Modal> */}

                                </React.Fragment>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="1"></Col>
                </Row>
            </div>
        )
    }
}
const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { RateCard, ProgressIndicator } = bankManagement;
    const { LoginDetails } = Authentication;
    return { RateCard, LoginDetails, ProgressIndicator };
};

export default connect(mapStateToProps, {
    GetRateCardTemplate,
    GetAllRateCards, DeleteRateCard, ChangePageSizeInRateCardHome,SaveCreatingRateCardData, SearchRateCards,
    NavigateToCreateOrUpdate_RateCard, GetRateCardSlabsOnID, ResetRateCardData
})(RateCardHome);



