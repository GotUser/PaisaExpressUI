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
                      <h5 className="font-weight-bold">  Agent </h5>
                  </CardHeader>

                  <CardBody>
                        <div style={{display:"flex",textAlign:"center"}}>

                            <div style={divStyle}  onClick={() => this.props.history.push("/MoneyTransfer")}>
                            <i className="fa fa-inr fa-lg mt-4" style={iconStyle}></i><br/>Money Transfer
                            </div>

                        </div>
                                          
                  </CardBody>
              </Card>
              
              
          </div>

        )}}
export default DummyComponent;
                
