import React, { Component } from 'react';
import {Row, Col,FormGroup, Card, CardHeader,CardFooter, CardBody, Table, Button, Input,ModalBody,Modal,ModalFooter,Label} from 'reactstrap';
import CustomerBreadCrumb from '../../../../components/ViewComponents/CustomBreadcrumb';
class DummyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {isOpen:false,
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
                        <CustomerBreadCrumb from="Banks"  />
                          <Row>
                            <Col xs="12" lg="12">
                                <Card >
                                    <CardHeader>
                                            <div style={{display:"flex"}}> 
                                               <div style={{width:"50%"}}><h5 className="font-weight-bold">  Banks List</h5></div>
                                               <div style={{width:"50%", textAlign: "end"}}><Button className="warning" onClick={() => this.props.history.push("/AddBank")}>Add New</Button></div>
                                            </div> 
                                    </CardHeader>
                                    <CardBody>                                       
                                        <Table style={{ overflowX: 'auto' }} responsive>
                                            <thead>
                                                        <tr>
                                                            <th>Account Name</th>
                                                            <th>Bank Name</th>
                                                            <th>Branch</th>
                                                            <th>Account Number</th>
                                                            <th>Total Amount</th>
                                                            <th >Actions</th> 
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
                                                                        <a style={{ cursor: "pointer" }} onClick={() => this.props.history.push("/UpdateBank")}>
                                                                            Edit
                                                                        </a>
                                                                            |
                                                                        <a style={{ cursor: "pointer" }} onClick={() => this.setState({ isOpen:true})}>
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
                                              <div style={{width:"100%", textAlign: "end"}}><Button className="warning" onClick={() => this.props.history.push("/Admin")}>Cancel</Button></div>
                                            </div> 
                                    </CardFooter>
                                </Card>
                            </Col>
                        </Row>
                    </div>          
                            <Modal size="lg" style={{ top: "25%" }}
                                        className={'modal-success ' + this.props.className}
                                        isOpen={this.state.isOpen} >
                                    <ModalBody >
                                           
                                            <FormGroup row>
                                                    <Col md="2"/>
                                                    <Col md="8">
                                                        <Label style={{}}>Please Specify a substitute Bank Account</Label><br/>
                                                        <Label style={{}}>  For bank account name</Label>
                                                    </Col>
                                                  
                                            </FormGroup>
                                            <FormGroup row>
                                                    <Col md="2"/>
                                                    <Col md="2">
                                                        <Label  htmlFor="agentfullName">Bank</Label>
                                                    </Col>
                                                    <Col xs="12" md="4">
                                                        <Input type="select"  placeholder= 'Enter Full Name'>
                                                                <option>Select Bank</option>
                                                        </Input>
                                                    </Col>
                                            </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <FormGroup row style={{width:"100%"}}>
                                                    <Col md="2"/>
                                                    <Col md="4">
                                                            <Button color="secondary" onClick={() => this.setState({ isOpen:false})} >Deactivate</Button>
                                                    </Col>
                                                    <Col xs="12" md="4">
                                                            <Button color="secondary" onClick={() => this.setState({ isOpen:false}) }>Cancel</Button>
                                                    </Col>
                                            </FormGroup>
                                    </ModalFooter>
                            </Modal>             
            </div >
        )
    }
}
export default DummyComponent;