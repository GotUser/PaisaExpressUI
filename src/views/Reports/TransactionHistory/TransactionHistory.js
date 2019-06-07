import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem, FormGroup,
    PaginationLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input, Breadcrumb, BreadcrumbItem
} from 'reactstrap';

import { connect } from 'react-redux';

import { Route, Link, Switch } from 'react-router-dom';

// import DatePickers from 'react-datepicker';
import moment, { months } from 'moment';
// import 'react-datepicker/dist/react-datepicker.css';

// React DateRangePicker
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

// React select
import states from './data/states';
import Select from 'react-select';
import '../../../../scss/vendors/react-select/react-select.scss';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import { getAllTransactionsOfUser } from '../ReportsAction';
// import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

class TransactionHistory extends Component {

    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            startDates: '',
            endDates: '',
            focusedInput: '',
            startDate: '',
            endDate: '',
            mindate: '03/20/2018',

        };
        this.handleStartDateChange = this.handleStartDateChange.bind(this);
        this.handleEndDateChange = this.handleEndDateChange.bind(this);

    }

    handleStartDateChange(date) {
        this.setState({
            startDate: date
        });
    }

    handleEndDateChange(date) {
        this.setState({
            endDate: date
        });
    }

    options() {

        sortIndicator: true;
        hideSizePerPage: true;
        // paginationSize: 3;
        hidePageListOnlyOnePage: true;
        clearSearch: true;
        alwaysShowAllBtns: false;
        withFirstAndLast: false

    }

    componentWillMount() {

        let Token = this.props.LoginDetails.accessToken;

        let offset = 0;
        let limit = 100;
        let searchText = ''
        this.props.getAllTransactionsOfUser(Token, offset, limit, searchText);
    }

    componentDidMount() {

        console.log(" /  /  /  /  /  /  /  /  /  /   / lpbAdminTransList  lpbAdminTransList  lpbAdminTransList ");
        console.log(this.props.lpbAdminTrans.lpbAdminTransList);
    }
    linkto() {
        const role = 'admin';
        if (role === 'admin') {
            return "/Dashboard"
        } else
            return "/Role";
    }

    render() {

        console.log(" day... :" + moment())

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="TransactionHistory" />
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>

                                <h5 style={{ paddingtop: '10px' }} className="font-weight-bold"> Transaction History</h5>
                                <Label style={{ float: 'right', marginTop: '-30px', marginBottom: '-5px' }} placeholder="Search"
                                >
                                    <DateRangePicker
                                        startDate={this.state.startDates}
                                        startDateId="startDate"
                                        endDate={this.state.endDates}
                                        endDateId="endDate"
                                        isOutsideRange={day => (moment().diff(day) + 1 < 0)}
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDates: startDate, endDates: endDate })}
                                        focusedInput={this.state.focusedInput}
                                        onFocusChange={focusedInput => this.setState({ focusedInput: focusedInput })}
                                        // orientation='vertical'
                                        openDirection='down'
                                    />
                                </Label>

                            </CardHeader>
                            <CardBody>
                                <BootstrapTable data={this.props.lpbAdminTrans.lpbAdminTransList} version="4" striped hover pagination search options={this.options}>
                                    {/* <TableHeaderColumn dataField="id" dataSort>TransactionCode</TableHeaderColumn> */}
                                    {/* <TableHeaderColumn dataField="distributorName">Agent Name</TableHeaderColumn>
                                    <TableHeaderColumn isKey dataField="distributorMobileNo">Agent MNo</TableHeaderColumn>
                                    <TableHeaderColumn dataField="date" dataSort>Date</TableHeaderColumn>
                                    <TableHeaderColumn dataField="amount" dataSort>Amount</TableHeaderColumn> */}
                                     <TableHeaderColumn isKey dataField="transactionCode">Trans Code</TableHeaderColumn>
                                     <TableHeaderColumn dataField="transactionAmount" dataSort>Trans Amount</TableHeaderColumn>
                                     <TableHeaderColumn dataField="initiatorMobileNumber" dataSort>Initiator</TableHeaderColumn>
                                     <TableHeaderColumn dataField="customer" dataSort>Customer</TableHeaderColumn>
                                    <TableHeaderColumn dataField="beneAccountNumber">Bene Account</TableHeaderColumn>
                                    <TableHeaderColumn  dataField="benefeciary">Benefeciary</TableHeaderColumn>
                                    <TableHeaderColumn dataField="transactionTime" dataSort>Trans Time</TableHeaderColumn>
                                    <TableHeaderColumn dataField="transactionStatus">Status</TableHeaderColumn>
                                   
                                     {/*<TableHeaderColumn dataField="TransactionAmount">TransactionAmount</TableHeaderColumn>
                                    <TableHeaderColumn dataField="TransactionType">TransactionType</TableHeaderColumn>
                                    <TableHeaderColumn dataField="TransactionStatus" dataSort>TransactionStatus</TableHeaderColumn>
                                    <TableHeaderColumn dataField="TransactionTime" dataSort>TransactionTime</TableHeaderColumn>
                                    <TableHeaderColumn dataField="SlabMinRate">SlabMinRate</TableHeaderColumn>
                                    <TableHeaderColumn dataField="SlabMaxRate">SlabMaxRate</TableHeaderColumn>
                                    <TableHeaderColumn dataField="UserRate" dataSort>UserRate</TableHeaderColumn>
                                    <TableHeaderColumn dataField="OwnerRate" dataSort>OwnerRate</TableHeaderColumn>
                                    <TableHeaderColumn dataField="NetPayout" dataSort>NetPayout</TableHeaderColumn> */}

                                </BootstrapTable>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }

}

const mapStateToProps = ({ reportReducer, Authentication }) => {
    const { lpbAdminTrans } = reportReducer;
    const { LoginDetails } = Authentication;
    return { lpbAdminTrans, LoginDetails };
};

export default connect(mapStateToProps, {
    getAllTransactionsOfUser,
})(TransactionHistory);


