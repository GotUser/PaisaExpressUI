
import React, { Component } from 'react';
import {
    Col, Button,  Form, FormGroup,Card,CardBody,CardFooter,CardHeader,
    FormText, Label, Input,Row
} from 'reactstrap';

import { connect } from 'react-redux';


class Add_Bank extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchingValue: '',
            fields: {},
            errors: {},
            CitiesOfState: {}
        };
    }
    render() {
        // let StatesObj = this.props.OrganizationDetails.OrganizationStoreInfo.statesAndCities;
        return (
            <div className="animated fadeIn">  
            
                       
                       <Row>
                      
                       <Col xs="12" md="12">
                           <Card>

                               <CardHeader> Retailer E-Cash Pullback</CardHeader>

                               <CardBody>

                               
                                       <FormGroup row>
                                           <Col md="2"/>
                                           <Col md="2">
                                               <Label  htmlFor="agentfullName">Retailer Name {RequireIconForIpFiled()}</Label>
                                           </Col>
                                           <Col xs="12" md="3">
                                               <Input  placeholder= 'Enter Full Name'/>
                                           </Col>
                                       </FormGroup>
                                       <FormGroup row>
                                            <Col md="2"/>
                                           <Col md="2">
                                               <Label  htmlFor="agentfullName">Retailer Login ID{RequireIconForIpFiled()}</Label>
                                           </Col>
                                           <Col xs="12" md="3">
                                               <Input type="select"   placeholder= 'Enter Full Name'>
                                                   <option>Select Bank</option>
                                               </Input>
                                           </Col>
                                       </FormGroup>
                                       <FormGroup row>
                                            <Col md="2"/>
                                           <Col md="2">
                                               <Label  htmlFor="agentfullName">Current Amount {RequireIconForIpFiled()}</Label>
                                           </Col>
                                           <Col xs="12" md="3">
                                               <Input type="select"  placeholder= 'Enter Full Name'>
                                                    <option>Select Branch</option>
                                               </Input>
                                           </Col>
                                       </FormGroup>
                                      
                                       <FormGroup row>
                                           <Col md="2"/>
                                           <Col md="2">
                                               <Label  htmlFor="agentfullName">Pullback Amount {RequireIconForIpFiled()}</Label>
                                           </Col>
                                           <Col xs="12" md="3">
                                               <Input  placeholder= 'Enter Full Name'/>
                                           </Col>
                                       </FormGroup>
                                      
                                       <FormGroup row>
                                           <Col md="2"/>
                                           <Col md="2">
                                               <Label  htmlFor="agentfullName">Reason {RequireIconForIpFiled()}</Label>
                                           </Col>
                                           <Col xs="12" md="3">
                                               <Input  placeholder= 'Enter Full Name'/>
                                           </Col>
                                       </FormGroup>
                                      
                               </CardBody>

                               <CardFooter>
                                            <div style={{display:"flex"}}> 
                                               <div style={{width:"50%",textAlign: "center"}}><Button className="warning" onClick={() => this.props.history.push("/Banks")}>Cancel</Button></div>
                                               <div style={{width:"50%", textAlign: "left"}}><Button className="warning" onClick={() => this.props.history.push("/Banks")}>Pullback</Button></div>
                                            </div>    </CardFooter>

                           </Card>
                       </Col>
                   </Row>
                    

                      
            </div>                   
            ) 
        }  


}

const mapStateToProps = ({ userManagementReducer, Authentication }) => {
    const { UserDetails, OrganizationDetails, role,ProgressIndicator } = userManagementReducer;
    const { LoginDetails } = Authentication;
    return { UserDetails, OrganizationDetails, LoginDetails, role ,ProgressIndicator};
};

export default connect(mapStateToProps, {
   

})(Add_Bank);



function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5 }} > *</span>
}
