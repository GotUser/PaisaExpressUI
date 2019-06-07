import React, { Component } from 'react';
import {Row, Col,FormGroup, Card, CardHeader,CardFooter, CardBody, Table, Button, Input,ModalBody,Modal,ModalFooter,Label} from 'reactstrap';
import CustomerBreadCrumb from '../../../../components/ViewComponents/CustomBreadcrumb';
class DummyComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
                        isOpenAddAmount:false,
                        isOpen:false,
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
                        <CustomerBreadCrumb from="APIPool"  />
                          <Row>
                            <Col xs="12" lg="12">
                                <Card >
                                    <CardHeader>
                                            <div style={{display:"flex"}}> 
                                               <div style={{width:"50%"}}><h5 className="font-weight-bold">  API Pool List</h5></div>
                                               <div style={{width:"50%", textAlign: "end"}}><Button className="warning" onClick={() => this.props.history.push("/AddApi")}>Add New</Button></div>
                                            </div> 
                                    </CardHeader>
                                    <CardBody>                                       
                                        <Table style={{ overflowX: 'auto' }} responsive>
                                            <thead>
                                                        <tr>
                                                            <th> Name</th>
                                                            <th>Source Bank Name</th>
                                                            <th>Account Number</th>
                                                            <th></th>
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
                                                                            <a style={{ cursor: "pointer" }} onClick={() =>this.props.history.push("/UpdateAPI")}>
                                                                                Edit
                                                                            </a>
                                                                                |
                                                                            <a style={{ cursor: "pointer" }} onClick={() => this.setState({ isOpen:true})} >
                                                                                Decativate
                                                                            </a>
                                                                            |
                                                                            <a style={{ cursor: "pointer" }} onClick={() => this.setState({ isOpenAddAmount:true})} >
                                                                            Add Amount 
                                                                            </a>
                                                                                |
                                                                            <a style={{ cursor: "pointer" }} onClick={() =>this.props.history.push("/APITransactionHistory") }>
                                                                            Tx History
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
                                                        <Label style={{}}>Do you Wish to Deactivate The API?</Label><br/>
                                                 
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



                            <Modal size="lg" style={{ top: "25%" }}
                                        className={'modal-success ' + this.props.className}
                                        isOpen={this.state.isOpenAddAmount} >
                                    <ModalBody >
                                           
                                            <FormGroup row>
                                                    <Col md="2"/>
                                                    <Col md="8">
                                                        <Label style={{}}>Add Amount to API API_Name</Label><br/>
                                                 
                                                    </Col>
                                                  
                                            </FormGroup>
                                            <FormGroup row>
                                                    <Col md="2"/>
                                                    <Col md="4">
                                                        <Label style={{}}> Amount</Label><br/>
                                                    </Col>
                                                    <Col md="4">
                                                        <Input style={{}}></Input><br/>
                                                    </Col>
                                            </FormGroup>
                                    </ModalBody>
                                    <ModalFooter>
                                        <FormGroup row style={{width:"100%"}}>
                                                    <Col md="2"/>
                                                    <Col md="4">
                                                            <Button color="secondary" onClick={() => this.setState({ isOpenAddAmount:false})} >Add Amount</Button>
                                                    </Col>
                                                    <Col xs="12" md="4">
                                                            <Button color="secondary" onClick={() => this.setState({ isOpenAddAmount:false}) }>Cancel</Button>
                                                    </Col>
                                            </FormGroup>
                                    </ModalFooter>
                            </Modal>             
            </div >
        )
    }
}
export default DummyComponent;