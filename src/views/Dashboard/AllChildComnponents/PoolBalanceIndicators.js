



import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input, Button,
    Card, CardBody, Table, ButtonGroup
} from 'reactstrap';

import '../../../../public/CustomStyles.css';


const AirtelPaymentsBank = require("../../../../public/img/AirtelPaymentsBank.png");
const Cashfree = require("../../../../public/img/Cashfree.png");
const Eco = require("../../../../public/img/Eco.png");


class PoolBalanceIndicators extends Component {

    constructor() {
        super();


        this.state = {
        };
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="1"></Col>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <React.Fragment>
                             
                                <Row style={{}}>
                            
                                    <Col style={{padding:0}}  >
                                        <label  style={{paddingLeft:0,fontSize:15}} class="labelStyleForMTHeadings">Pool Balance Indicators </label> 
                                    </Col>                          
                                </Row>
                                <Row  style={{margin:1,borderBottom:"1px solid lightgray",paddingTop:"5%",paddingBottom:"5%"}}>
                            
                                    <div style={{width:"35%"}}>
                                         <i>
                                            <img src={AirtelPaymentsBank} style={{}}></img>
                                        </i>
                                    </div>   
                                    <div style={{width:"35%",paddingTop:"2%"}} >
                                        <label  style={{color:"black",fontWeight:"normal",paddingLeft:0,fontSize:15}} class="labelStyleForMTHeadings">Airtel <br/>Payments </label> 
                                    </div> 
                                    <div style={{width:"30%",paddingTop:"2%"}} >
                                        <label   style={{color:"black",fontWeight:"normal",paddingLeft:0,fontSize:15}}  class="labelStyleForMTHeadings">25,00,000 </label> 
                                    </div>                        
                                </Row>
                                <Row  style={{margin:1,borderBottom:"1px solid lightgray",paddingTop:"5%",paddingBottom:"5%"}}>
                                    <div style={{width:"35%"}}>
                                         <i>
                                            <img src={Cashfree} style={{}}></img>
                                        </i>
                                    </div>   
                                    <div style={{width:"35%",paddingTop:"1%"}}>
                                        <label  style={{color:"black",fontWeight:"normal",paddingLeft:0,fontSize:15}} class="labelStyleForMTHeadings">Cash Free </label> 
                                    </div> 
                                    <div style={{width:"30%",paddingTop:"1%"}}>
                                        <label   style={{color:"black",fontWeight:"normal",paddingLeft:0,fontSize:15}} class="labelStyleForMTHeadings">2,75,000 </label> 
                                    </div>                        
                                </Row>
                                <Row  style={{margin:1,borderBottom:"1px solid lightgray",paddingTop:"5%",paddingBottom:"5%"}}>
                                    
                                    <div style={{width:"35%"}}>
                                         <i>
                                            <img src={Eco} style={{}}></img>
                                        </i>
                                    </div>    
                                    <div style={{width:"35%",paddingTop:"4%"}}  >
                                        <label   style={{color:"black",fontWeight:"normal",paddingLeft:0,fontSize:15}}  class="labelStyleForMTHeadings">Eco India</label> 
                                    </div> 
                                    <div style={{width:"30%",paddingTop:"4%"}} >
                                        <label style={{color:"black",fontWeight:"normal",paddingLeft:0,fontSize:15}}   class="labelStyleForMTHeadings">8,58,250 </label> 
                                    </div>                        
                                </Row>

                                </React.Fragment>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" md="1"></Col>
                </Row>
            </div>
        )
    }
}


export default PoolBalanceIndicators;



