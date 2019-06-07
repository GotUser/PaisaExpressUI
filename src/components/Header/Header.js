import React, { Component } from 'react';
import {
  Nav,
  NavItem,
  NavbarBrand, Pagination, PaginationItem,
  PaginationLink, NavLink,
} from 'reactstrap';

import backgr from '../../../public/img/walle.png'
const logoStyle = {
  // backgroundColor: '#6b6d6d',
  backgroundColor: '#ffffff',
  //backgroundImage : backgr,
  boxShadow: '0 8px 15px -10px black',

};

const headerStlye = {
  // backgroundColor: '#777979' 
  backgroundColor: '#ffffff'
}

const headerToggler = {
  backgroundColor: '#ffffff'
}

import HeaderDropdown from './HeaderDropdown';

import { Link, Switch, Route, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

const logo = require("../../../public/img/vendors/PaisaExpressLogo.png");

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      exitclicked: false
    }
  }

  sidebarToggle(e) {
    e.preventDefault();
    console.log(" side bar hidden....");
    document.body.classList.toggle('sidebar-hidden');
  }

  // sidebarMinimize(e) {
  //   e.preventDefault();
  //   document.body.classList.toggle('sidebar-minimized');
  // }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
  }

  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  LogOut() {

    this.props.history.push('/');

  }

  render() {

    return (

      <header className="app-header navbar" style={logoStyle}>
        {/* <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler> */}

        <NavbarBrand className='custom-navbar-brand' style={logoStyle}></NavbarBrand>

        {/* <img src={logo}/> */}
        {/* <NavbarToggler className="d-md-down-none mr-auto" onClick={this.sidebarToggle} style={{ backgroundColor: '#f8b018' }}>
          <span className="navbar-toggler-icon"></span>
        </NavbarToggler> */}

        {/* <NavbarToggler className="d-md-down-none" >
          <span className="navbar-toggler-icon" onClick={this.LogOut.bind(this)}  ></span>
        </NavbarToggler> */}
        <Nav style={{marginRight:20}} className="ml-auto" navbar>
          <HeaderDropdown accnt />
        </Nav>
     

        {/* <Pagination className="d-md-down-none" >
          <PaginationItem >
            <PaginationLink href="#" style={{ backgroundColor: '#ffffff', border: 'none', color: '#ef6f6f', top: 5 }}>
              Logout
              <i
                //class="fa fa-sign-out fa-lg" 
                className="icon-logout icons font-3xl" />
            </PaginationLink>
          </PaginationItem>
        </Pagination> */}

      </header>
    );
  }
}

export default Header;
