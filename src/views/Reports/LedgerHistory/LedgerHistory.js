import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem,
    PaginationLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,
} from 'reactstrap';

import { connect } from 'react-redux';

// React DateRangePicker
import 'react-dates/initialize';
import { DateRangePicker, toMomentObject } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
//import './react_dates_overrides.css';
import moment from 'moment';

// React select
import Select from 'react-select';
import '../../../../scss/vendors/react-select/react-select.scss';


import { getAllLedgerTransactions } from '../ReportsAction';

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

class LedgerHistory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDates: '',
            endDates: '',
            focusedInput: ''
        }
    }

    componentWillMount() {

        this.props.getAllLedgerTransactions();
    }

    render() {
        // console.log(this.props);
        console.log(this.state)

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="LedgerHistory" />
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <h5 style={{ paddingtop: '10px' }} className="font-weight-bold">Ledger History </h5>
                                <Label style={{ float: 'right', marginTop: '-30px', marginBottom: '-5px;' }} placeholder="Search"
                                >
                                    <DateRangePicker
                                        startDate={this.state.startDates}
                                        startDateId="startDate"
                                        endDate={this.state.endDates}
                                        endDateId="endDate"
                                        isOutsideRange={day => (moment().diff(day) < 0)}
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDates: startDate, endDates: endDate })}
                                        focusedInput={this.state.focusedInput}
                                        onFocusChange={focusedInput => this.setState({ focusedInput: focusedInput })}
                                        // orientation='vertical'
                                        openDirection='down'
                                    />
                                </Label>
                            </CardHeader>
                            <CardBody>
                                <Table hover bordered striped responsive size="md">
                                    <thead>
                                        <tr>
                                            <th>S.No</th>
                                            <th>Date</th>
                                            <th>TXN Code</th>
                                            <th>TXN Ref Code</th>
                                            <th>Amount</th>
                                            <th>Description</th>
                                            <th>Type</th>
                                            <th style={{ whiteSpace: 'nowrap' }}>Opening Balance</th>
                                            <th style={{ whiteSpace: 'nowrap' }}>Closing Balance</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.distributorLedger.distributorLedgerList.map((item, i) => (
                                            <tr key={'DSTR-LDGR-' + i} >
                                                <td>{i + 1}</td>
                                                <td>{item.Date}</td>
                                                <td>{item.txnCode}</td>
                                                <td>{item.txnRefCode}</td>
                                                <td style={{ textAlign: 'center' }}><i className="fa fa-rupee fa-sm"></i>{" "}{item.txnAmount}</td>
                                                <td>{item.description}</td>
                                                <td style={{ textAlign: 'center' }}>{item.type}</td>
                                                <td style={{ textAlign: 'center' }}><i className="fa fa-rupee fa-sm"></i>{" "}{item.openBalance}</td>
                                                <td style={{ textAlign: 'center' }}><i className="fa fa-rupee fa-sm"></i>{" "}{item.closeBalance}</td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </Table>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }
}

const mapStateToProps = ({ reportReducer }) => {
    const { distributorLedger } = reportReducer;
    return { distributorLedger };
};

export default connect(mapStateToProps, {
    getAllLedgerTransactions
})(LedgerHistory);


