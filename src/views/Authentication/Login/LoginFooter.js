import React, { Component } from 'react';
import {
  FormText
} from 'reactstrap';


class LoginHeader extends Component {
  
  render() {
    return (
  
        <footer style={{background:"white",fontSize:20}}>  

        <div style={{display:"flex",margin:"8% 0% 0% 0%",borderTop:"1px solid lightgray",padding:5}}>
                  <div style={{display:"flex",width:"75%"}}>
                        <FormText style={{margin:"5px 0px 5px 15px"}}> 
                                Copyrights reserved.
                      </FormText> 
                   </div>
                   <div style={{display:"flex",width:"25%"}}>
                        <FormText style={{margin:"5px 0px 5px 15px"}}> 
                                  Policy
                        </FormText> 
                        <FormText style={{margin:"5px 0px 5px 15px"}}> 
                                  Disclaimer
                        </FormText> 
                        <FormText style={{margin:"5px 0px 5px 15px"}}> 
                                  Terms & Conditions
                        </FormText> 
                        <FormText style={{margin:"5px 0px 5px 15px"}}> 
                                  Feedback
                        </FormText> 
                   </div>

        </div>
  
  </footer>
    );
  }
  

  
}


export default LoginHeader;
