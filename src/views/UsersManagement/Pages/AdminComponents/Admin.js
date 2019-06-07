import React, { Component } from 'react';
import { Container, Row, Col, CardGroup, Card, CardBody, CardHeader, Button, Input, InputGroup, InputGroupAddon } from 'reactstrap';


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
const iconStyle = {
  margin: 10,
  fontSize: 25,
  color: "black"
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
      <div style={{ marginTop: 60, padding: 30 }}>
        <Card >
          <CardHeader>
            <h5 className="font-weight-bold">  Admin </h5>
          </CardHeader>

          <CardBody>
            <div style={{ display: "flex", textAlign: "center" }}>
              <div style={divStyle} onClick={() => this.props.history.push("/FSE")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />FSE
                            </div>

              <div style={divStyle} onClick={() => this.props.history.push("/RateCardHome")}>
                <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br />Rate Card
                            </div>

              <div style={divStyle2} onClick={() => this.props.history.push("/PendingRetailer")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />Approve  Retailer
                            </div>

              <div style={divStyle} onClick={() => this.props.history.push("/AdminRetailer")}>
                <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br />Retailer
                            </div>

              <div style={divStyle} onClick={() => this.props.history.push("/AdminDepositSlips")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />FSE Deposit Slips
                            </div>

              <div style={divStyle} onClick={() => this.props.history.push("/Deposits")}>
                <i className="fa fa-gift fa-lg mt-4" style={iconStyle}></i><br />Deposits
                            </div>
            </div>
            <div style={{ display: "flex", textAlign: "center" }} >
              <div style={divStyle} onClick={() => this.props.history.push("/CDMStuck")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />CDM Stuck
                            </div>
              <div style={divStyle}onClick={() => this.props.history.push("/Banks")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />Banks
                            </div>
              <div style={divStyle2}onClick={() => this.props.history.push("/BanksTransactionHistory")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />Bank Transaction History
                            </div>
              <div style={divStyle}onClick={() => this.props.history.push("/ApiPool")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />API Pool
                            </div>
              <div style={divStyle}onClick={() => this.props.history.push("/AccountingTransaction")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />Accounting Transaction
                            </div>
              <div style={divStyle}onClick={() => this.props.history.push("/RetailerTransactions")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />Retailer Transaction
                            </div>
            </div>
            <div style={{ display: "flex", textAlign: "center" }} >
              <div style={divStyle} onClick={() => this.props.history.push("/RetailerIncentiveMonitoring")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />Retailer Incentive Monitoring
                            </div>
               <div style={divStyle} onClick={() => this.props.history.push("/RetailerFSECashIn")}>
                <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br />Retailer and FSE CashIns
                            </div>
            </div>
         



          </CardBody>
        </Card>


      </div>

    )
  }
}
export default DummyComponent;

