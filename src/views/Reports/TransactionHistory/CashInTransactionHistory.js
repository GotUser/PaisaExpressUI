import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Pagination, PaginationItem,
    PaginationLink, Button, Modal, ModalHeader, ModalBody, ModalFooter, Label,
} from 'reactstrap';

import { connect } from 'react-redux';

// React DateRangePicker
import 'react-dates/initialize';
import { DateRangePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
import './react_dates_overrides.css';

// React select
import states from './data/states';
import Select from 'react-select';
import '../../../../scss/vendors/react-select/react-select.scss';


import { getAllTransactionsByAgentAction, getCashInTransactionHistory } from '../ReportsAction';

import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

class CashInTransactionHistory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            startDates: '',
            endDates: '',
            focusedInput: ''

        }
    }

    componentWillMount() {

        // this.props.getAllTransactionsByAgentAction();
        this.props.getCashInTransactionHistory();

    }

    render() {
        console.log(this.props);
        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="CashInHistory" />
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>
                                <h5 style={{ paddingtop: '10px' }} className="font-weight-bold">CashIn History </h5>
                                <Label style={{ float: 'right', marginTop: '-30px', marginBottom: '-5px;' }} placeholder="Search"
                                >
                                    <DateRangePicker

                                        startDate={this.state.startDates}
                                        startDateId="startDate"
                                        endDate={this.state.endDates}
                                        endDateId="endDate"
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
                                            <th>Transaction Id</th>
                                            <th>Amount</th>
                                            <th>Transaction Type</th>
                                            <th>From/To
                                                 User</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.cashInHistory.map((item, i) => (
                                            <tr key={item.id} >
                                                <td>{i + 1}</td>
                                                <td>{item.transId}</td>
                                                <td>{item.amount}</td>
                                                <td>{item.transType}</td>
                                                <td>{item.fromOrTo}</td>
                                                <td>{item.date}</td>
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
    const {  cashInHistory } = reportReducer;
    return {  cashInHistory };
};

export default connect(mapStateToProps, {
    getAllTransactionsByAgentAction, getCashInTransactionHistory
})(CashInTransactionHistory);


