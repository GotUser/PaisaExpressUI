import React, { Component } from 'react';
import {
 Label
} from 'reactstrap';

import Logo from '../../../../public/img/logo_login.png';
import Locator from '../../../../public/img/Locator.png';
import Support from '../../../../public/img/Support.png';

class LoginHeader extends Component {
  
 


  render() {
    return (
  
      <header style={{borderBottom:"1px solid lightgray",borderTop:"5px solid  #fabb3d"}} >

        <div style={{display:"flex",fontSize:18,fontWeight:500,padding:"1% 0% 0% 2%"}}>
            <div style={{width:"55%"}}>
              <img src={Logo}></img>
            </div>
            <div style={{width:"40%",display:"flex",justifyContent:"flex-end",marginTop:20 }}> 
                <div style={{marginRight:10 }}>
                  {/* <img src={Locator}></img> */}
                </div>

                {/* <Label style={{marginRight:"10%" }}>Store Locator</Label> */}

                <div style={{marginRight:10 }}>
                  <img src={Support}></img>
                </div>

                <Label style={{fontSize:14,lineHeight:"16px"}}>Support
                      <br/>
                   <Label style={{fontSize:18}}>040-27777777</Label>
                </Label>                   
            </div>
        </div>
      </header>
    );
  }
  

  
}


export default LoginHeader;
