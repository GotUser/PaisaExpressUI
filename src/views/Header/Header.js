// import React, { Component } from 'react';
// import {
//   Nav,
//   NavItem, Input,
//   NavbarBrand, Pagination, PaginationItem,
//   PaginationLink, NavLink,
//   NavbarToggler
// } from 'reactstrap';

// const logoStyle = {
//   backgroundColor: '#ffffff',
//   boxShadow: '0 8px 15px -10px black',
// };

// const headerStlye = {
//   // backgroundColor: '#777979' 
//   backgroundColor: '#ffffff'
// }

// const headerToggler = {
//   backgroundColor: '#ffffff'
// }

// import HeaderDropdown from './HeaderDropdown';

// import { Link, Switch, Route, Redirect } from 'react-router-dom';

// import { connect } from 'react-redux';

// const logo = require("../../../public/img/vendors/PaisaExpressLogo.png");

// class Header extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       exitclicked: false
//     }
//   }

//   sidebarToggle(e) {
//     e.preventDefault();
//     console.log(" side bar hidden....");
//     document.body.classList.toggle('sidebar-hidden');
//   }

//   mobileSidebarToggle(e) {
//     e.preventDefault();
//     document.body.classList.toggle('sidebar-mobile-show');
//   }

//   asideToggle(e) {
//     e.preventDefault();
//     document.body.classList.toggle('aside-menu-hidden');
//   }

//   LogOut() {

//     this.props.history.push('/');

//   }

//   render() {

//     return (

//       <header className="app-header navbar"
//         style={logoStyle}      >
//         {/* <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
//           <span className="navbar-toggler-icon"></span>
//         </NavbarToggler> */}


//         <NavbarBrand
//           // className='custom-navbar-brand' 
//           style={logoStyle}
//         ></NavbarBrand>

//         <NavbarToggler
//           // className="d-md-down-none mr-auto"
//           onClick={this.sidebarToggle} style={{ backgroundColor: '#f8b018' }}>
//           <span className="navbar-toggler-icon"></span>
//         </NavbarToggler>


//         {/* <NavbarToggler className="d-md-down-none" >
//           <span className="navbar-toggler-icon" onClick={this.LogOut.bind(this)}  ></span>
//         </NavbarToggler> */}
//         <Nav className="ml-auto"
//           // style={{width:'60%' ,float:'right'}}
//           navbar>
//           {/* <Input
//             style={{ borderRadius: 5, }}
//             placeholder="Search"
//           /> */}
//           <HeaderDropdown notif />
//           <HeaderDropdown accnt />
//         </Nav>


//         {/* <Pagination className="d-md-down-none" >
//           <PaginationItem >
//             <PaginationLink href="#" style={{ backgroundColor: '#ffffff', border: 'none', color: '#ef6f6f', top: 5 }}>
//               Logout
//               <i
//                 //class="fa fa-sign-out fa-lg" 
//                 className="icon-logout icons font-3xl" />
//             </PaginationLink>
//           </PaginationItem>
//         </Pagination> */}

//       </header>
//     );
//   }
// }

// export default Header;


import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Input
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';
import { connect } from 'react-redux';


const logo = require('../../../public/img/logo.png'); 

const logoStyle = {
  backgroundColor: '#ffffff',
  // boxShadow: '0 8px 15px -10px black',
  height:80,
};
const labelStyle = {
  fontSize: 20,
  color:"#000000",
  border:"1px solid transparent",
  height: 50
}

class Header extends Component {

  constructor(props) {
    super(props);
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }
  homeButtonClicked() {
  
    let roleName=this.props.LoginDetails.roleName;
    roleName == "Admin" ? this.props.history.push("Admin")
    : roleName == "FSE" ? this.props.history.push("FsePage")
    : roleName == "Agent" ? this.props.history.push("AgentPage")
    : roleName == "Retailer" ? this.props.history.push("RetailerPage")
    : roleName == "Distributor" ? this.props.history.push("DistributorPage")
    : null;
  }

  render() {
    return (
      <header className="app-header navbar"  style={logoStyle} >
     

        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}
         style={{ backgroundColor: '#f8b018' }}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler>

        {/* <NavbarBrand href="#"    style={{ backgroundColor: '#ffffff', height:100, width:430}}>
        </NavbarBrand> */}
        <img src={logo}  style={{ width: "15%", height: 70 , marginLeft:"5%"}}/>
        {/* <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler> */}
        <Nav className="d-md-down-none" navbar style={{marginTop:"1%"}}>
          <NavItem className="px-3">
              <NavLink href="#" style={{fontSize: 20, color:"#f8b018"}}>
                <i className="fa fa-home fa-lg" title="Edit" onClick={this.homeButtonClicked} ></i>
              </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#" style={labelStyle}>
            <Input type="select"  style={labelStyle}>
              <option> Banking </option>
            </Input>
           </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#" style={labelStyle}>
              <Input type="select" style={labelStyle}>
                <option>  Support </option>
              </Input>
             </NavLink>
          </NavItem>
          <NavItem className="px-3">
            <NavLink href="#">
              <Input type="select"  style={labelStyle}>
                <option>  My Business </option>
              </Input>
            </NavLink>
          </NavItem>
        </Nav>
        {/* <Nav className="ml-auto" navbar>
          <HeaderDropdown notif/>
          <HeaderDropdown tasks/>
          <HeaderDropdown mssgs/>
          <NavItem className="d-md-down-none">
            <NavLink href="#"><i className="icon-location-pin"></i></NavLink>
          </NavItem>
          <HeaderDropdown accnt/>
        </Nav> */}
        {/* <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler> */}
      </header>
    );
  }
}

const mapStateToProps = ({ Authentication }) => {

  const { LoginDetails, userRoleModulePermissions ,ProgressIndicator} = Authentication;
  return { LoginDetails, userRoleModulePermissions ,ProgressIndicator};
}

export default connect(mapStateToProps, {

})(Header);
