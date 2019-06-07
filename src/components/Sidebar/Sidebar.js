
import { connect } from 'react-redux';
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Badge, Nav, NavItem, NavLink as RsNavLink } from 'reactstrap';
import classNames from 'classnames';
import nav from './_nav';
import SidebarFooter from './../SidebarFooter';
import SidebarForm from './../SidebarForm';
import SidebarHeader from './../SidebarHeader';
import SidebarMinimizer from './../SidebarMinimizer';

class Sidebar extends Component {

  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.activeRoute = this.activeRoute.bind(this);
    this.hideMobile = this.hideMobile.bind(this);
  }

  // shouldComponentUpdate(nextprops, nextstate) {
  //   return true;
  // }


  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName, props) {
    // return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
    return props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';

  }

  hideMobile() {
    if (document.body.classList.contains('sidebar-mobile-show')) {
      document.body.classList.toggle('sidebar-mobile-show')
    }
  }

  // todo Sidebar nav secondLevel
  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }



  FilterRolePermissions(roleName) {


    let RolesJson = this.props.userRoleModulePermissions.modulePermissions;
  

    // localStorage.getItem("userRoleModulePermissions");

    // let RolesObj = JSON.parse(RolesJson);

    let RolesObj = RolesJson;
    return RolesObj;

  }

  FilterModulePermissions(modulePermissions, moduleName) {

    if (modulePermissions != null) {
      let i = 0;
      let ModulePermission = modulePermissions.filter((e) => {
        i++;
        return e.moduleName == moduleName;
      });
      return ModulePermission;
    }
    return null;
  }

  render() {

    const props = this.props;

    // badge addon to NavItem
    const badge = (badge) => {
      if (badge) {
        const classes = classNames(badge.class);
        return (<Badge className={classes} color={badge.variant}>{badge.text}</Badge>)
      }
    };

    // simple wrapper for nav-title item
    const wrapper = item => { return (item.wrapper && item.wrapper.element ? (React.createElement(item.wrapper.element, item.wrapper.attributes, item.name)) : item.name) };

    // nav list section title
    const title = (title, key) => {
      const classes = classNames('nav-title', title.class);
      return (<li key={key} className={classes}>{wrapper(title)} </li>);
    };

    // nav list divider
    const divider = (divider, key) => {
      const classes = classNames('divider', divider.class);
      return (<li key={key} className={classes}></li>);
    };

    // nav label with nav link
    const navLabel = (item, key) => {
      const classes = {
        item: classNames('hidden-cn', item.class),
        link: classNames('nav-label', item.class ? item.class : ''),
        icon: classNames(
          !item.icon ? 'fa fa-circle' : item.icon,
          item.label.variant ? `text-${item.label.variant}` : '',
          item.label.class ? item.label.class : ''
        )
      };
      return (
        navLink(item, key, classes)
      );
    };




    // nav item with nav link
    // const navItem = (item, key) => {
    //   const classes = {
    //     item: classNames(item.class),
    //     link: classNames('nav-link', item.variant ? `nav-link-${item.variant}` : ''),
    //     icon: classNames(item.icon)
    //   };

    //   let roleName = this.props.LoginDetails.roleName != "" ? this.props.LoginDetails.roleName : localStorage.getItem("UserRole");
    //   let RolesObj = this.FilterRolePermissions(roleName);


    //   let ModulePermission = this.FilterModulePermissions(RolesObj, item.name);

    //   if (ModulePermission != null) {
    //     if (ModulePermission.length != 0) {
    //       // let view = ModulePermission[0].permissions.view;    // As PER OLD Pemission  Patters
    //       let view = ModulePermission[0];
    //       // if (view. === 1 || view === true) {
    //       return (
    //         navLink(item, key, classes)
    //       )

    //     }
    //   }    

    //   // return (
    //   //   navLink(item, key, classes)
    //   // )
    // };

    // nav link
    // const navLink = (item, key, classes) => {
    //   const url = item.url ? item.url : '';
    //   return (
    //     <NavItem key={key} className={classes.item}>
    //       {isExternal(url) ?
    //         <RsNavLink href={url} className={classes.link} active>
    //           <i className={classes.icon}></i>{item.displayName}{badge(item.badge)}
    //         </RsNavLink>
    //         :
    //         <NavLink to={url} className={classes.link} activeClassName="active" onClick={this.hideMobile}>
    //           <i className={classes.icon}></i>{item.displayName}{badge(item.badge)}
    //         </NavLink>
    //       }
    //     </NavItem>
    //   )
    // };

    const navItem = (item, key) => {
      // console.log("Step  2 / / / / / / /  ");
      // console.log(item);
      // console.log(key);
      const classes = {
        item: classNames(item.class),
        link: classNames('nav-link', item.variant ? `nav-link-${item.variant}` : ''),
        icon: classNames(item.icon)
      };


      return (
        navLink(item, key, classes)
      )
      // return (
      //   navLink(item, key, classes)
      // )
    };

    // New Updated  navLink
    const navLink = (item, key, classes) => {
      // console.log("Step  3 / / / / / / /  ");
      // console.log(item);
      // console.log(key);
      // console.log(classes);

      const url = item.url ? item.url : '';
      return (
        <NavItem key={key} className={classes.item}>
          {isExternal(url) ?
            <RsNavLink href={url} className={classes.link} active>
              <i className={classes.icon}></i>{item.menuText}{badge(item.badge)}
            </RsNavLink>
            :
            <NavLink to={url} className={classes.link} activeClassName="active" onClick={this.hideMobile}>
              <i className={classes.icon}></i>{item.menuText}{badge(item.badge)}
            </NavLink>
          }
        </NavItem>
      )
    };

    // nav dropdown
    const navDropdown = (item, key) => {

      var children = item.children;
      let ModulesFromServer = this.props.userRoleModulePermissions.modulePermissions;
      let Dashboard = false, IFSCManagenet = false, Support = false, Business = false, Banking = false, CommissionMeter = false, Management = false;
      return ModulesFromServer.map((Module, inx) => {

        return children.map((childrenFromNavComp, i) => {
          if (childrenFromNavComp.name === Module.moduleName) {
            if (item.name === 'Dashboard' && !Dashboard) {
              Dashboard = true;
              return (
                <li key={key} className={this.activeRoute(item.url, props)}>
                  <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>{item.name}</a>
                  <ul className="nav-dropdown-items">
                    {navList(item.children)}
                  </ul>
                </li>
              )
            } else if (item.name === 'Management' && !Management) {
              Management = true;
              return (
                <li key={key} className={this.activeRoute(item.url, props)}>
                  <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>{item.name}</a>
                  <ul className="nav-dropdown-items">
                    {navList(item.children)}
                  </ul>
                </li>
              )
            } else if (item.name === 'Business' && !Business) {
              Business = true;
              return (
                <li key={key} className={this.activeRoute(item.url, props)}>
                  <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>{item.name}</a>
                  <ul className="nav-dropdown-items">
                    {navList(item.children)}
                  </ul>
                </li>
              )
            } else if (item.name === 'Support' && !Support) {
              Support = true;
              return (
                <li key={key} className={this.activeRoute(item.url, props)}>
                  <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>{item.name}</a>
                  <ul className="nav-dropdown-items">
                    {navList(item.children)}
                  </ul>
                </li>
              )
            } else if (item.name === 'CommissionMeter' && !CommissionMeter) {
              CommissionMeter = true;
              return (
                <li key={key} className={this.activeRoute(item.url, props)}>
                  <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>{item.name}</a>
                  <ul className="nav-dropdown-items">
                    {navList(item.children)}
                  </ul>
                </li>
              )
            } else if (item.name === 'IFSCManagenet' && !IFSCManagenet) {
              IFSCManagenet = true;
              return (
                <li key={key} className={this.activeRoute(item.url, props)}>
                  <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>{item.name}</a>
                  <ul className="nav-dropdown-items">
                    {navList(item.children)}
                  </ul>
                </li>
              )
            } else if (item.name === 'Banking' && !Banking) {
              Banking = true;
              return (
                <li key={key} className={this.activeRoute(item.url, props)}>
                  <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>{item.name}</a>
                  <ul className="nav-dropdown-items">
                    {navList(item.children)}
                  </ul>
                </li>
              )
            }
          }
        })
      })

      // return (
      //   <li key={key} className={this.activeRoute(item.url, props)}>
      //     <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick}><i className={item.icon}></i>{item.name}</a>
      //     <ul className="nav-dropdown-items">
      //       {navList(item.children)}
      //     </ul>
      //   </li>)
    };

    // nav type
    const navType = (item, idx) => navItem(item, idx);
    // item.title ? title(item, idx) :
    //   item.divider ? divider(item, idx) :
    //     item.label ? navLabel(item, idx) :
    //       item.children ? navDropdown(item, idx)
    //         : navItem(item, idx);

    // <NavLink to={item.url} className={classes.link}
    //   activeClassName="active" onClick={this.hideMobile}>
    //   <i className={classes.icon}></i>{item.displayName}{badge(item.badge)}
    // </NavLink>

    const navList = (items) => {
      // console.log("Step  1 / / / / / / /  ");
      // console.log(this.props.userRoleModulePermissions.MyPermissionsMenu);
      items = this.props.userRoleModulePermissions.MyPermissionsMenu;
      return items.map((item, index) => navItem(item, index));
    };

    const isExternal = (url) => {
      const link = url ? url.substring(0, 4) : '';
      return link === 'http';
    };

    // sidebar-nav root
    return (
      <div className="sidebar">
        <SidebarHeader />
        <SidebarForm />
        <nav className="sidebar-nav">
          <Nav>
            {navList(nav.items)}
          </Nav>
        </nav>
        <SidebarFooter />
        <SidebarMinimizer />
      </div>
    )
  }
}

const mapStateToProps = ({ Authentication }) => {

  const { LoginDetails, userRoleModulePermissions } = Authentication;
  return { LoginDetails, userRoleModulePermissions };

}
export default connect(mapStateToProps, {})(Sidebar);
