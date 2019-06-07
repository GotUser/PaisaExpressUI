// import React, { Component } from 'react';

// import { connect } from 'react-redux';

// class Footer extends Component {



//   render() {
//     return (
//       <footer className="app-footer" style={{ backgroundColor: '#32CD32',left:'50%' }}>
//         <span><a href="https://genesisui.com">SimpliQ</a> &copy; 2018 creativeLabs.</span>
//         <span className="ml-auto">Powered by <a href="https://genesisui.com">GenesisUI</a></span>

//       </footer>

//     )
//   }


// }

// const mapStateToProps = ({ bankManagement }) => {
//   const { moneyTransfer, benificiaryDetails } = bankManagement;

//   return { moneyTransfer, benificiaryDetails };

// };

// export default connect(mapStateToProps, {

// })(Footer);
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { withRouter } from "react-router";

const propTypes = {
  notif: PropTypes.bool,
  accnt: PropTypes.bool,
  tasks: PropTypes.bool,
  mssgs: PropTypes.bool,
};
const defaultProps = {
  notif: false,
  accnt: false,
  tasks: false,
  mssgs: false,
};

import {
  GetMyDetailsFromDb, UserLogOut
} from '../../views/Authentication/AuthenticationAction';

import { OpenNewUsersApprovepage } from '../../views/UsersManagement/UserManagementAction';
import {Label } from 'reactstrap';

const circle = {
  background: "#ffffff",
  border: "2px solid",
  width: 38,
  height: 38,
  textAlign: "center",
  color: "#f8b018",
  borderRadius: "50%",
  position: " relative",
  fontSize: 30,
  left: 20,
}

const floatMenu ={
  position: "fixed",
  width:"100%",
  right: 35,
  top: "90%",
  background:"white",
  display :"flex",
  height: 85,
  textAlign: "left",
  paddingLeft:"11%",
  paddingBottom:"4%"
}
class Footer extends Component {
  render() {
    return (
      <footer className="app-footer" style={floatMenu}>
     
         
          <div style={{  fontSize: 15, color: "#000000" ,width:"50%"}}>
               <Label style={{fontSize:20}}> Hello! <a href="" style={{ color: "#f8b018" }}>RJ  ONLINE MONEY TRANSFER <i className="fa fa-angle-right fa-lg mt-4"></i> </a> </Label>
              <br/>
              +91 9121949239
         
              <a href="" style={{ color: "#f8b018",margin:"0px 10px" }}> <i class="fa fa-sign-in" ></i> </a>
         
              <a  style={{ color: "#f8b018" }} onClick={() => 
                  {
                    this.props.UserLogOut();
                    this.props.history.push("/");
                  }}> LOG OUT</a>
      
          </div>
           
         <div style={{  fontSize: 15 , color: "#f8b018" ,width:"40%",textAlign:"right",paddingTop:15}}>
              WALLET BALANCE
                          <br />
              <label style={{ fontSize: 30 }} >
                &#8377; 107453.07
                          </label>
          </div>
          
          <div style={{  fontSize: 15 ,textAlign:"right" }}>
              <div style={circle}> 	&#5161; </div>
          </div>
      </footer>
    )
  }
}

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;


const mapStateToProps = ({ Authentication }) => {
  const { LoginDetails, OperatingUser, logOut } = Authentication;
  return { LoginDetails, OperatingUser, logOut };
};

export default withRouter(connect(mapStateToProps, {
  GetMyDetailsFromDb, UserLogOut, OpenNewUsersApprovepage
})(Footer));
