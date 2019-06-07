import React, { Component } from 'react';
import {
  Container, Row, Col, CardGroup, Card, CardBody, Button,
  Input, InputGroup, FormText,Label
} from 'reactstrap';

import '../../../../public/CustomStyles.css';


import LoginHeader from "./LoginHeader";
import LoginFooter from './LoginFooter';

class PasswordCreatedSuccess extends Component {

  render() {
    return (
      <div style={{background:"white"}} >
        <LoginHeader/>
        <body style={{background:"white",padding:"12% 0% 14% 0%"}} >

            <div style={{padding:"5% 0% 0% 0%",textAlign:"center"}}>            
                        <label class="labelStyleHeadings" style={{fontSize:28,fontWeight:600,color:"#20c997"}} >Congratulations.</label>
                        <Label style={{fontSize:18}}>Your Password Has Been Resetted Successfully </Label> 
                        <br/>
                        <button  class="buttonStyle Submit" style={{fontSize:15}}  onClick={() => {
                       this.props.history.push("")
                      }}>Sign in with new password </button>            
            </div>

        </body>
        <LoginFooter/>
      </div>
    );
  }
}



export default PasswordCreatedSuccess;
