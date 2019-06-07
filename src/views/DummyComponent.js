import React, { Component } from 'react';
import {Row, Col, Card, CardHeader, CardBody, Table, Button, Input,} from 'reactstrap';
import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';
class DummyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
                        List:[
                                {
                                    amount: 600,
                                    dateOfDeposit: "2019-01-27T00:00:00",
                                    tenantDepositMode: "RTGS",
                                    tenantName: "Retailership Business",
                                    tenantType: "Retailership"
                                }
                            ]
                           };  
    }

    render() {
        
        return (
            <div className="animated fadeIn">
                    <div>
                        <CustomerBreadCrumb from="AdminRetailer" contentPath="/ Management / Retailers" />
                          <Row>
                            <Col xs="12" lg="12">
                                <Card >
                                    <CardHeader>
                                        <h5 className="font-weight-bold">  Retailers</h5>
                                        <Input style={{ height: 33, width: '15%', borderRadius: 30, float: 'right', marginTop: '-30px' }} placeholder="Search"
                                        />
                                    </CardHeader>
                                    <CardBody>                                       
                                        <Table style={{ overflowX: 'auto' }} responsive>
                                            <thead>
                                                        <tr>
                                                            <th>Date</th>
                                                            <th>Type</th>
                                                            <th>Retailer</th>
                                                            <th>Amount</th>
                                                            <th>Mode Balance</th>
                                                            <th >View</th> 
                                                        </tr>
                                            </thead>
                                            <tbody> 
                                                {this.state.List !=undefined ?
                                                    this.state.List.map((item, i) => (
                                                        <tr key={i} >
                                                                    <td> {item.dateOfDeposit} </td>
                                                                    <td> {item.tenantType}</td>
                                                                    <td> {item.tenantName}</td>
                                                                    <td> {item.amount}</td>
                                                                    <td> {item.tenantDepositMode}</td>
                                                                    <td>
                                                                        <Button color="success" >View</Button>
                                                                    </td>
                                                        </tr>
                                                        ))
                                                        :
                                                        null
                                                }                                                                            
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </div>          
                }               
            </div >
        )
    }
}
export default DummyComponent;

