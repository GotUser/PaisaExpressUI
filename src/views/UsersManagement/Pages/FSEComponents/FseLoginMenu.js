import React, { Component } from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardHeader, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';


const divStyle = {
  padding: 40,
  width:"16%",
  fontSize: 15,
  color: "rgb(248, 176, 24)"
}

const divStyle2 = {
  padding: 40,
  width: "18%",
  fontSize: 15,
  color: "rgb(248, 176, 24)"
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
                      <h5 className="font-weight-bold">  FSE </h5>
                  </CardHeader>

                  <CardBody>
                        <div style={{display:"flex",textAlign:"center"}} >
                            <div style={divStyle} onClick={() => this.props.history.push("/AdminRetailer")}>
                            <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br/>Retailer
                            </div>

                            <div style={divStyle} onClick={() => this.props.history.push("/DepositSlips")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>Depoist Slips
                            </div>

                            <div style={divStyle2} onClick={() => this.props.history.push("/FSELedgerHistory")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>Ledger History
                            </div>

                            <div style={divStyle2} onClick={() => this.props.history.push("/FSELedgerHistory")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>Ledger History
                            </div>

                            <div style={divStyle2} onClick={() => this.props.history.push("/FSETransactionHistory")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>Transaction History
                            </div>

                            <div style={divStyle2} onClick={() => this.props.history.push("/FSECashInHistory")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>Cash-In History
                            </div>
                        </div>
                      

                                            
                  </CardBody>
              </Card>
              
              
          </div>

        )}}
export default DummyComponent;
                
