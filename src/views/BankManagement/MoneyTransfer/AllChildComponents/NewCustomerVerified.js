import React, { Component } from 'react';
import { Row, Col, Button, Label } from 'reactstrap';
import { connect } from 'react-redux';
import { ContinueToAddBeneficiary } from '../../BankManagementAction';
const logo = require("../../../../../public/img/Verify.png");

class NewCustomerVerified extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Col style={{ background: "lightgray", border: "1px solid gary", padding: 10, borderRadius: 20, margin: 10 }}>
                <div style={{ textAlign: "center", padding: 20, height: 70 }}>
                    <i>
                        <img src={logo} style={{ width: "4%" }}></img>
                    </i>
                    <br />

                    <Label>
                        <Label style={{ fontSize: 15, fontWeight: "bold" }}>Good Job.</Label>
                        <br />
                        Customer is added. Go ahead and add beneficiaries for the customer.
                        </Label>
                </div>
                <Row style={{ paddingLeft: "46%", marginTop: "4%" }}>
                    <div>
                        <Button
                            onClick={this.ContinueToAddBene.bind(this)}
                            style={{ width: "100%", margin: 9, borderRadius: 21, background: "rgb(1, 142, 211)", borderColor: "rgb(1, 142, 211)", color: "white" }}
                        >Continue </Button>
                    </div>
                </Row>
            </Col>
        )
    }
    ContinueToAddBene() {
        let Customer = this.props.MTcustomer.CustomerDetails;
        let DobDate = Customer.dateOfBirth.substring(0, 2);
        let DobMonth = Customer.dateOfBirth.substring(3, 5);
        let DobYear = Customer.dateOfBirth.substring(6, 10);

        Customer.dateOfBirth = DobYear + '-' + DobMonth + '-' + DobDate;
        let AccessToken = this.props.LoginDetails.accessToken;

        this.props.ContinueToAddBeneficiary(AccessToken, Customer);
    }
}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer } = bankManagement;
    return { LoginDetails, MTcustomer };
};

export default connect(mapStateToProps, {
    ContinueToAddBeneficiary
})(NewCustomerVerified);

