import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Input,
    Table,
} from 'reactstrap';

import { getCommissionById } from './TransactionsAction'
import { connect } from 'react-redux';


class CutAndPayModal extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="6">
                        <Card>
                            <CardHeader>
                                <i className="fa fa-align-justify"></i> Rate Card
                                  </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Charges</th>
                                            <th>Edit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>100</td>
                                            <td><Input style={{ textAlign: 'center', width: 150 }} value='102' disabled={true} /></td>

                                        </tr>
                                        <tr>
                                            <td>10000</td>
                                            <td><Input style={{ textAlign: 'center', width: 150 }} value='102' disabled={true} /></td>

                                        </tr>
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

const mapStateToProps = ({ transaction }) => {
    const { commissions } = transaction;
    return { commissions };
};

export default connect(mapStateToProps, {
    getCommissionById
})(CutAndPayModal);

