import React, { Component } from 'react';
import { Row, Col, Button, Label, Input, FormText } from 'reactstrap';




import LaddaButton, {
    EXPAND_LEFT,
} from 'react-ladda';
import 'ladda/dist/ladda-themeless.min.css';


import { connect } from 'react-redux';
import '../../../../../public/CustomStyles.css';

import { SaveCustomerMobileNumber, WarnsOnSaveCustomerMobileNO, GetCustomerInfo } from '../../BankManagementAction';

class CustomerMobileNoForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: '',
        };
        this.onMobileNumberChange = this.onMobileNumberChange.bind(this);
        this.ProccedToGetCustomerInfo = this.ProccedToGetCustomerInfo.bind(this);

    }
    onMobileNumberChange(e) {
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)) {
            let mobileNo = e.target.value;
            this.props.SaveCustomerMobileNumber(mobileNo,"mobileNo");
        }
    }
    render() {
        return (
            <Row style={{ background: "lightgray", border: "1px solid gary", padding: 10, borderRadius: 20, margin: 10 }}>
                <div style={{ textAlign: "end", padding: 28 }}>
                    <Label>Enter the customer mobile number</Label>
                </div>

                <div style={{ textAlign: "end", padding: 25 }}>
                    <Input
                        // placeholder="ex:1234567890"
                        value={this.props.MTcustomer.customerMobile}
                        maxLength={10}
                        onChange={this.onMobileNumberChange}
                    ></Input                    >
                    <FormText color="red">{this.props.MTcustomer.customerMobileNoWarning}</FormText>
                </div>

                <div style={{ padding: 15 }}>
                    {/* 
                    < button
                    class=" buttonStyle Submit"
                        title="check Mobile No To Proccedd"
                        disabled={this.props.MTcustomer.customerMobile.length !== 10}
                        onClick={this.ProccedToGetCustomerInfo}
                    >Proceed </button> */}
                    <LaddaButton
                        disabled={this.props.MTcustomer.customerMobile.length !== 10}
                        className="buttonStyle Submit"
                        loading={this.props.ProgressIndicator.InProgress}
                        onClick={this.ProccedToGetCustomerInfo}
                        data-color="rgb(248, 176, 24)"
                        data-style={EXPAND_LEFT}   >  Proceed  </LaddaButton>


                </div>
            </Row>
        )
    }
    ProccedToGetCustomerInfo() {
        let MobileNo = this.props.MTcustomer.customerMobile;
        let accessToken = this.props.LoginDetails.accessToken;
        if (MobileNo === '' || MobileNo === undefined || MobileNo === 'null') {
            this.props.WarnsOnSaveCustomerMobileNO('Please enter mobile number to procced.');
        } else if (MobileNo.length !== 10) {
            this.props.WarnsOnSaveCustomerMobileNO('Please check entered mobile number.');
        } else this.props.GetCustomerInfo(accessToken, MobileNo)
    }

}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer, ProgressIndicator } = bankManagement;
    return { LoginDetails, MTcustomer, ProgressIndicator };
};

export default connect(mapStateToProps, {
    SaveCustomerMobileNumber, WarnsOnSaveCustomerMobileNO, GetCustomerInfo
})(CustomerMobileNoForm);

