import React, { Component } from 'react';
import { Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import '../../../../../public/CustomStyles.css';
import { EditCustomerInformation, SaveCustomerInfo } from '../../BankManagementAction';
var moment = require('moment');

import { LabelstyleNew3 } from '../../../../GlobalVars';

class DisplayExistingCustomer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: '',
        };
    }
    DisplayCustomerAge() {

        let PresentYear = new Date().getFullYear();
        let PresentMonth = new Date().getMonth() + 1;
        let custDOB = this.props.MTcustomer.ExistingCustomer.dateOfBirth

        let CustomerDOBYear = parseInt(custDOB.substring(0, 4));
        let CustomerDOBMonth = parseInt(custDOB.substring(5, 7));

        console.log("Customer DOB ");
        console.log(PresentYear);
        console.log(PresentMonth);
        console.log(CustomerDOBYear);
        console.log(CustomerDOBMonth);

        var a = moment([PresentYear, PresentMonth]);
        var b = moment([CustomerDOBYear, CustomerDOBMonth]);
        let CustomerAgeInYears = a.diff(b, 'years');
        console.log(a);
        console.log(b);
        console.log(Math.abs(PresentYear - CustomerDOBYear));
        console.log(" AGE DIFFF / / // / //   ");
        console.log(a.diff(b, 'years'));       // 1
        console.log(a.diff(b, 'years', true)); // 1.75
        let Age = Math.abs(PresentYear - CustomerDOBYear);

        return Age;


        // return 31;
    }

    render() {
        console.log(" Display Existing Customer / / / / // / //  / / / / / / / // / / ");
        console.log(this.props.MTcustomer.ExistingCustomer);
        return (
            <Col style={{ background: "white", padding: 10, marginBottom: "2%" }}>
                <Row style={{ height: 15 }}>
                    <div style={{ textAlign: "left" }}>
                        <label class="labelStyleHeadings">Customer Information  </label>
                    </div>
                    <div style={{ margin: 7 }}>
                        <a
                            onClick={() => this.props.EditCustomerInformation()}
                        >
                            <i class="fa fa-edit fa-lg" title="Edit" />
                        </a>
                    </div>
                </Row>
                <Row style={{ height: 70 }} >
                    <div style={{ textAlign: "left", padding: 20 }}>
                        <label class="labelStyleSpecial ">Mobile Number </label>
                        <br />
                        <Label style={LabelstyleNew3}>{this.props.MTcustomer.ExistingCustomer.mobileNo}</Label>
                    </div>

                    <div style={{ textAlign: "left", padding: 20 }}>
                        <label class="labelStyleSpecial">Name </label>
                        <br />
                        <Label style={LabelstyleNew3}> {this.props.MTcustomer.ExistingCustomer.gender === 'male' ? "Mr" : "Ms"} . {this.props.MTcustomer.ExistingCustomer.fullName} </Label>
                    </div>

                    <div style={{ textAlign: "left", padding: 20 }}>
                        <label class="labelStyleSpecial">Age </label>
                        <br />
                        <Label style={LabelstyleNew3}>{this.DisplayCustomerAge()} yrs.</Label>
                    </div>
                    <div style={{ textAlign: "left", padding: 20 }}>
                        <label class="labelStyleSpecial">{this.ReturnEkycName()} Card </label>
                        <br />
                        <Label style={LabelstyleNew3}> {this.props.MTcustomer.ExistingCustomer.ekyc.value} </Label>
                    </div>
                    <div style={{ textAlign: "left", padding: 20 }}>
                        <label class="labelStyleSpecial">Address</label>

                        <br />
                        <Label style={LabelstyleNew3}>{this.props.MTcustomer.ExistingCustomer.address} </Label>
                    </div>
                </Row>
            </Col>
        )
    }
    ReturnEkycName() {

        // let EkycList = this.props.MTcustomer.ExistingCustomer.ekycTypes;
        // let existUserEKycKey = this.props.MTcustomer.ExistingCustomer.ekyc.key;
        // return EkycList === undefined ? 'Ekyc' :
        //     EkycList.map(function (item, index) {
        //         if (item.key == existUserEKycKey) {
        //             return item.value
        //         }
        //     })
        return null;
    }
}

const mapStateToProps = ({ bankManagement }) => {

    const { MTcustomer } = bankManagement;
    return { MTcustomer };
};

export default connect(mapStateToProps, {
    EditCustomerInformation, SaveCustomerInfo
})(DisplayExistingCustomer);

