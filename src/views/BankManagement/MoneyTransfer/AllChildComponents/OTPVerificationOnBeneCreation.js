import React, { Component } from 'react';
import { Row, Col, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { SaveCustomerVerifyOTP, OTPVerificationOnAddBenificiary, CancleOnBeneOtpVerification } from '../../BankManagementAction';
import { ReturnCustomerId, ReturnCustomerMobileNo } from '../../../../GlobalVars';
class OTPVerificationOnBeneCreation extends Component {
    constructor(props) {
        super(props);
        this.SaveOTP = this.SaveOTP.bind(this);
        this.ProccedToToVerification = this.ProccedToToVerification.bind(this);
    }
    componentWillMount() {
        this.props.MTcustomer.SaveCustomerOTP = "";
    }
    SaveOTP(e) {
        this.props.SaveCustomerVerifyOTP(e.target.value);
    }
    render() {
        return (
            <Col style={{ background: "lightgray", border: "1px solid gary", padding: 10, borderRadius: 20, margin: 10 }}>

                <div style={{ textAlign: "center", padding: 20, height: 75 }}>
                    <Label>
                        An OTP is sent to the mobile number +91 {this.props.MTcustomer.ExistingCustomer.mobileNo}
                        <br />
                        Validate the customer by entering the OTP below.
                    </Label>
                </div>
                <Row style={{ justifyContent: "center" }}>
                    <Input style={{ width: "20%" }}
                        placeholder="enter OTP"
                        value={this.props.MTcustomer.SaveCustomerOTP}
                        maxLength={6}
                        onChange={this.SaveOTP}
                    >
                    </Input>
                </Row>
                {this.props.MTBeneficiary.ApiResultOnBene.OtpMismatch ? <div style={{ textAlign: "center" }}>
                    <span style={{ justifyContent: "center", fontSize: '15', color: 'red' }}> 'OTP mismatch, Please Try again.' </span>
                </div> : null}
                <Row style={{ justifyContent: "center" }}>
                    <div style={{ marginRight: 20 }}>
                        <button
                            class="buttonStyle Submit"
                            disabled={this.props.MTcustomer.SaveCustomerOTP === ''}
                            onClick={this.ProccedToToVerification}
                        >Confirm </button>
                    </div>

                    <div>
                        <button
                            class="buttonStyle special"
                            title="check Mobile No To Proccedd"
                            onClick={() => this.props.CancleOnBeneOtpVerification()}
                        >Cancel </button>
                    </div>
                </Row>
            </Col>
        )
    }
    ProccedToToVerification() {
        let accessToken = this.props.LoginDetails.accessToken;

        let OTPDATA = {
            CustomerId: ReturnCustomerId(this.props.MTcustomer),
            beneficiaryId: this.props.MTBeneficiary.NewBeneId,
            ReceivedOTP: this.props.MTcustomer.SaveCustomerOTP
        }
        this.props.OTPVerificationOnAddBenificiary(accessToken, OTPDATA)
    }

}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer, MTBeneficiary } = bankManagement;
    return { LoginDetails, MTcustomer, MTBeneficiary };
};

export default connect(mapStateToProps, {
    SaveCustomerVerifyOTP, OTPVerificationOnAddBenificiary, CancleOnBeneOtpVerification
})(OTPVerificationOnBeneCreation);

