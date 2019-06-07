import React, { Component } from 'react';
import {Row, Col, Card, CardHeader,CardFooter, CardBody, Table, Button, Input,} from 'reactstrap';
import CustomerBreadCrumb from '../../../../components/ViewComponents/CustomBreadcrumb';
class BanksTransactionHistory extends Component {

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
                    <CustomerBreadCrumb from="BanksTransactionHistory"  />
                          <Row>
                            <Col xs="12" lg="12">
                                <Card >
                                    <CardHeader>
                                            <div style={{display:"flex"}}> 
                                               <div style={{width:"50%"}}><h5 className="font-weight-bold">  Banks Transaction History </h5></div>
                                               <div style={{width:"50%", textAlign: "end"}}><Button className="warning" >Add New</Button></div>
                                            </div> 
                                    </CardHeader>
                                    <CardBody>                                       
                                        <Table style={{ overflowX: 'auto' }} responsive>
                                            <thead>
                                                        <tr>
                                                            <th>Account Name</th>
                                                            <th>Opening Balance</th>
                                                            <th>CR</th>
                                                            <th>DR</th>
                                                            <th>Closing Balance</th>
                                                            <th >Actions By User</th> 
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
                                                                        <div style={{display:"flex"}}>
                                                                        <a style={{ cursor: "pointer" }}>
                                                                            Edit
                                                                        </a>
                                                                            |
                                                                        <a style={{ cursor: "pointer" }}>
                                                                            Decativate
                                                                        </a>
                                                                        </div>
                                                                       
                                                                    </td>
                                                        </tr>
                                                        ))
                                                        :
                                                        null
                                                }                                                                            
                                            </tbody>
                                        </Table>
                                    </CardBody>
                                    <CardFooter>
                                            <div style={{display:"flex"}}> 
                                              <div style={{width:"100%", textAlign: "end"}}><Button className="warning"onClick={() => this.props.history.push("/Admin")} >Cancel</Button></div>
                                            </div> 
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </div>          
                              
            </div >
        )
    }
}
export default BanksTransactionHistory;