import React, { Component } from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody,CardHeader, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';
import CustomerBreadCrumb from '../../../../components/ViewComponents/CustomBreadcrumb';

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
          <div className="animated fadeIn">
          <CustomerBreadCrumb from="Retailer"  /> 
          <div style={{marginTop:60,padding:30}}>
             <Card >
                  <CardHeader>
                      <h5 className="font-weight-bold">  Retailer </h5>
                  </CardHeader>

                  <CardBody>
                        <div style={{display:"flex",textAlign:"center"}}>
                            <div style={divStyle} onClick={() => this.props.history.push("/Agent")}>
                            <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br/>Agent
                            </div>

                            <div style={divStyle} onClick={() => this.props.history.push("/MoneyTransfer")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>Money Transfer
                            </div>

                            <div style={divStyle2} onClick={() => this.props.history.push("/Deposits")}>
                            <i className="fa fa-inr fa-lg mt-4"  style={iconStyle}></i><br/>Deposits
                            </div>

                            <div style={divStyle} onClick={() => this.props.history.push("/CDMStuck")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>CDM Stuck
                            </div>

                            <div style={divStyle} onClick={() => this.props.history.push("/RetailerLedgerHistory")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>Ledger History
                            </div>

                            <div style={divStyle} onClick={() => this.props.history.push("/RetailerTransactionHistory")}>
                            <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br/>Retailer Transaction History
                            </div>
                        </div>

                        <div style={{display:"flex",textAlign:"center"}}>
                            <div style={divStyle} onClick={() => this.props.history.push("/RetailerCashInHistory")}>
                            <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br/>Retailer Cash-In History
                            </div>
                        </div>
                                          
                  </CardBody>
              </Card>
          </div>
          </div>

        )}}
export default DummyComponent;
                
