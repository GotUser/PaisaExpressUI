import React, { Component } from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardHeader, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';


const divStyle={
  padding: "5px 40px 5px 40px",
  width:160,
  fontSize:15,
  color:"rgb(248, 176, 24)"
}
const divStyle1={
  padding: "5px 40px 5px 40px",
  width:180,
  fontSize:15,
  color:"rgb(248, 176, 24)"
}
const divStyle2={
  padding: "5px 40px 5px 40px",
  width:165,
  fontSize:15,
  color:"rgb(248, 176, 24)"
}
const iconStyle={
  margin: 10,
  fontSize:25,
  color:"black"
}


class DummyComponent extends Component {

    constructor(props) {
        super(props);
            this.state = {
                        };
    }


    SubmitDocs() {
          this.props.history.push("/")
    }

    render() {
       
        return (
          <div style={{marginTop:60,padding:30}}>
             <Card >
                  <CardHeader>
                      <h5 className="font-weight-bold">  Frequently Used Services</h5>
                  </CardHeader>

                  <CardBody>
                        <div style={{display:"flex",textAlign:"center"}}>
                            <div style={divStyle}>
                            <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br/>MONEY<br/> TRANSFER
                            </div>

                            <div style={divStyle1}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>COMMISSION<br/> METER
                            </div>

                            <div style={divStyle1}>
                            <i className="fa fa-inr fa-lg mt-4"  style={iconStyle}></i><br/>TRANSACTION <br/> HISTORY
                            </div>

                            <div style={divStyle2}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>MY LEDGER<br/> HISTORY
                            </div>

                            <div style={divStyle}>
                            <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br/>PAY BILLS
                            </div>

                            <div style={divStyle2}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>CASH DROP
                            </div>
                        </div>
                        <div style={{display:"flex",textAlign:"center"}}>
                            <div style={divStyle}>
                            <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br/>MY OFFERS
                            </div>

                            <div style={divStyle1}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>MY TRAINING
                            </div>

                            <div style={divStyle1}>
                            <i className="fa fa-inr fa-lg mt-4"  style={iconStyle}></i><br/>CASH <br/> DEPOSIT
                            </div>

                           
                        </div>       

                                            
                  </CardBody>
              </Card>
              
              
          </div>

        )}}
export default DummyComponent;
                
