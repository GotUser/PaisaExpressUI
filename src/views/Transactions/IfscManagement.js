import React, { Component } from 'react';
import {
    Badge, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink
} from 'reactstrap';
import { connect } from 'react-redux';
import classnames from 'classnames';
import AddBankDetails from './AddBankDetails';
import EditBankDetails from './EditBankDetails';
class IFSCManagement extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" >
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '1' })}
                                    onClick={() => { this.toggle('1'); }}
                                >
                                    Add Bank
                             </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '2' })}
                                    onClick={() => { this.toggle('2'); }}
                                >
                                    Edit Bank
                          </NavLink>
                            </NavItem>
                            {/* <NavItem>
                                <NavLink
                                    className={classnames({ active: this.state.activeTab === '3' })}
                                    onClick={() => { this.toggle('3'); }}
                                >
                                    Messages
                             </NavLink>
                            </NavItem> */}
                        </Nav>
                        <TabContent activeTab={this.state.activeTab}>
                            <TabPane tabId="1">

                                <AddBankDetails />
                            </TabPane>

                            <TabPane tabId="2">
                                <EditBankDetails />>
                            </TabPane>
                            
                            <TabPane tabId="3">

                            </TabPane>
                        </TabContent>
                    </Col>


                </Row>
            </div >
        )
    }
}


const mapStateToProps = ({ transaction }) => {

    return {   };
};

export default connect(mapStateToProps, {

})(IFSCManagement);
