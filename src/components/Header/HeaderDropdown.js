import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import {
  Badge,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Dropdown,
  Progress,
  Col,
  Pagination, PaginationItem,
  PaginationLink, NavLink, NavItem
} from 'reactstrap';

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

class HeaderDropdown extends Component {

  constructor(props, context) {
    super(props, context);

    this.toggle = this.toggle.bind(this);
    this.LogOutClicked = this.LogOutClicked.bind(this);
    this.state = {
      dropdownOpen: false,
    };

  }

  componentWillMount() {
    console.log(" ^  ^  ^  ^  ^  ^  ^   HeaderDropdown Component WIll Mount   ^  ^  ^  ^  ^  ^  ^  ");
    console.log(this.props.OperatingUser);
    let AccessToken = this.props.LoginDetails.accessToken;
    // this.props.GetMyDetailsFromDb(AccessToken);
    // console.log(this.props.OperatingUser.firstName);
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  AcSettingsClicked(event) {
    console.log(" This AcSettingsClicked selected" + event.currentTarget.textContent);

    if (event.currentTarget.textContent === 'Logout') {
      console.log(" LOG Out Selected     /Login   : ");
      // this.props.UserLogOut();
      this.props.history.push('/');
      // history.push("/")
      // this.props.history.push('/Login');
      // this.context.router.history.push("/");
    }
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }



  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.AcSettingsClicked.bind(this)}>
        <DropdownToggle nav>
          <img src={'img/avatars/7.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem><i className="fa fa-user"></i>
            {this.props.OperatingUser != undefined && this.props.OperatingUser != null ? this.props.OperatingUser.firstName : 'Profile'} </DropdownItem>
          <DropdownItem><i className="fa fa-wrench"></i>Settings</DropdownItem>
          <DropdownItem divider />
          <DropdownItem><i className="fa fa-shield"></i>Lock Account</DropdownItem>
          <DropdownItem
            // href="#"
            onClick={this.LogOutClicked} ><i className="fa fa-lock"></i>Logout</DropdownItem>
          {/* <Pagination className="d-md-down-none" >
          <PaginationItem >
            <PaginationLink href="#" style={{ backgroundColor: '#ffffff', border: 'none', color: '#ef6f6f', top: 5 }}>
            <i className="fa fa-lock"> </i> Logout
             
            </PaginationLink>
          </PaginationItem>
        </Pagination> */}
        </DropdownMenu>

      </Dropdown >
    );
  }


  LogOutClicked() {

    console.log(" LogOut Clicked Man ");
  }



  render() {
    const { notif, accnt, tasks, mssgs, ...attributes } = this.props;
    return (
      notif ? this.dropNotif() :
        accnt ? this.dropAccnt() :
          tasks ? this.dropTasks() :
            mssgs ? this.dropMssgs() : null
    );
  }
}

HeaderDropdown.propTypes = propTypes;
HeaderDropdown.defaultProps = defaultProps;


const mapStateToProps = ({ Authentication }) => {
  const { LoginDetails, OperatingUser } = Authentication;

  return { LoginDetails, OperatingUser };
};

export default connect(mapStateToProps, {

  GetMyDetailsFromDb, UserLogOut

})(HeaderDropdown);
