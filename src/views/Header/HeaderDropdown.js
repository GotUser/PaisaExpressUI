import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { withRouter } from "react-router";

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

import { OpenNewUsersApprovepage } from '../../views/UsersManagement/UserManagementAction';


import Widget from '../Dashboard/Widgtes';

class HeaderDropdown extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      dropdownOpen: false,
    };
  }

  componentWillMount() {
    let AccessToken = this.props.LoginDetails.accessToken;
    // this.props.GetMyDetailsFromDb(AccessToken);
  }

  NotifOptionsClicked(event) {


    if (event.currentTarget.textContent === 'New user registered') {
      this.props.history.push('/PendingUsers');
    }

    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  AcSettingsClicked(event) {

    if (event.currentTarget.textContent === 'Logout') {
      this.props.UserLogOut();
      this.props.history.push('/');
    }
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  dropAccnt() {
    return (
      <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.AcSettingsClicked.bind(this)}>
        <DropdownToggle nav>
          <img src={'img/avatars/acsettings.jpg'} className="img-avatar" alt="admin@bootstrapmaster.com" />
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem><i className="fa fa-user"></i>
            {/* {this.props.OperatingUser != undefined && this.props.OperatingUser != null ? this.props.OperatingUser.firstName : 'Profile'}  */}

            {this.props.LoginDetails.fullName}
          </DropdownItem>
          <DropdownItem><i className="fa fa-mobile"></i>
            {this.props.LoginDetails.mobileNo}
          </DropdownItem>
          {/* <DropdownItem divider /> */}
          {/* <DropdownItem><i className="fa fa-shield"></i>Lock Account</DropdownItem> */}
          <DropdownItem
          //  href="#"
          ><i className="fa fa-lock"></i>Logout</DropdownItem>
          {/* <Pagination className="d-md-down-none" >
          <PaginationItem >
            <PaginationLink href="#" style={{ backgroundColor: '#ffffff', border: 'none', color: '#ef6f6f', top: 5 }}>
            <i className="fa fa-lock"> </i> Logout
             
            </PaginationLink>
          </PaginationItem>
        </Pagination> */}
        </DropdownMenu>

      </Dropdown>
    );
  }

  dropNotif() {
    const itemsCount = 5;
    return (
      <Dropdown nav className="d-md-down-none" isOpen={this.state.dropdownOpen} toggle={this.NotifOptionsClicked.bind(this)}>
        <DropdownToggle nav>
          <i color="danger" className="icon-bell"></i><Badge pill color="danger">
            {/* {itemsCount} */}
          </Badge>
        </DropdownToggle>
        <DropdownMenu right>
          <DropdownItem header tag="div" className="text-center"><strong>You have {itemsCount} notifications</strong></DropdownItem>
          <DropdownItem ><i className="icon-user-follow text-success"></i>New user registered</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
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
  const { LoginDetails, OperatingUser, logOut } = Authentication;

  return { LoginDetails, OperatingUser, logOut };
};

export default withRouter(connect(mapStateToProps, {

  GetMyDetailsFromDb, UserLogOut, OpenNewUsersApprovepage

})(HeaderDropdown));
