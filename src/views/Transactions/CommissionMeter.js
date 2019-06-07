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
import '../Reports/TransactionHistory/react_dates_overrides.css';

// React select
import states from '../Reports/TransactionHistory/data/states';
import Select from 'react-select';
import '../../../scss/vendors/react-select/react-select.scss';

import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

// import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

class CommissionMeter extends Component {

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

    render() {
        return (
            <div className="animated fadeIn">
                {/* <CustomerBreadCrumb from="TransactionHistory" /> */}
                <Row>
                    <Col xs="12" lg="12">
                        <Card>
                            <CardHeader>

                                <h5 style={{ paddingtop: '10px' }} className="font-weight-bold"> Commission Meter</h5>
                                <Label style={{ float: 'right', marginTop: '-30px', marginBottom: '-5px' }} placeholder="Search"
                                >
                                    <DateRangePicker
                                        startDate={this.state.startDates}
                                        startDateId="startDate"
                                        endDate={this.state.endDates}
                                        endDateId="To Date"
                                        isOutsideRange={day => (moment().diff(day) + 1 < 0)}
                                        onDatesChange={({ startDate, endDate }) => this.setState({ startDates: startDate, endDates: endDate })}
                                        focusedInput={this.state.focusedInput}
                                        onFocusChange={focusedInput => this.setState({ focusedInput: focusedInput })}
                                        // orientation='vertical'
                                        openDirection='down'
                                    />
                                </Label>

                            </CardHeader>
                        
                        </Card>
                    </Col>
                </Row>

            </div>
        )
    }

}

const mapStateToProps = ({ reportReducer }) => {
    const { lpbAdminTrans } = reportReducer;
    return { lpbAdminTrans };
};

export default connect(mapStateToProps, {

})(CommissionMeter);


