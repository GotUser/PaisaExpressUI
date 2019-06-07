import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody,
} from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';
import { getAllTransactionsOfUser, } from '../../Reports/ReportsAction';
import { ContinueToAddBeneficiary } from '../BankManagementAction';
import DisplayExistingCustomer from './AllChildComponents/DisplayExistingCustomer';
import AddBeneForm from './AllChildComponents/AddBeneForm';
import CustomerRegForm from './AllChildComponents/CustomerRegForm';
import DisplayBeneList from './AllChildComponents/DisplayBeneList';
import TrasactionDetails from './AllChildComponents/TransactionDetails';
import TransactionDescriptionNdOtpVerify from './TransactionDescription';

import OTPVerificationOnBeneCreation from './AllChildComponents/OTPVerificationOnBeneCreation';

class customerHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: '',
        };
    }

    componentWillMount() {
        console.log(" / / / / / / / / / / / / / / / / / / / / / /componentWillMount in Customer HOME COmponent / / / / /  ");
        console.log(this.props.MTBeneficiary.BeneList);
        console.log(this.props.MTBeneficiary.BeneList.length);

        if (this.props.MTBeneficiary.BeneList.length === 0) {
            let AccessToken = this.props.LoginDetails.accessToken;
            this.props.ContinueToAddBeneficiary(AccessToken, undefined);
        }
    }


    ReturnView() {

        if (this.props.MTcustomer.NavigatePages.editingCustomerInfo) {
            return <CustomerRegForm />;
        } else {
            return <DisplayExistingCustomer />;
        }
    }
    componentDidUpdate() {
        if (this.props.MTcustomer.NavigatePages.DisplayTrasDescriptionNDOtpVerify) {
            this.props.history.push('/MoneyTransferOtpVerification');
        }
    }

    ReturnViewOfSecondSection() {
        if (this.props.MTcustomer.NavigatePages.DisplayAddingBene) {
            return <AddBeneForm />
        } else if (this.props.MTcustomer.NavigatePages.OtpVerifyOnAddBene) {
            return <OTPVerificationOnBeneCreation />
        }
        else if (this.props.MTcustomer.NavigatePages.DisplayTrasDetails) {
            return <TrasactionDetails />
        }
        else if (this.props.MTcustomer.NavigatePages.DisplayTrasDescriptionNDOtpVerify) {
            return <TransactionDescriptionNdOtpVerify />
        }
        else {
            return <DisplayBeneList />
        }
    }
    render() {

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="MTcustomer" />
                <Row >
                    <Col xs="12" lg="12">
                        <Card style={{ background: "#dfdfdf", }}>
                            <CardBody  >

                                {this.ReturnView()}
                                {/* <AddBeneForm /> */}

                                {this.ReturnViewOfSecondSection()}

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

const mapStateToProps = ({ Authentication, bankManagement }) => {
    const { LoginDetails } = Authentication;
    const { MTcustomer, MTBeneficiary } = bankManagement;
    return { LoginDetails, MTcustomer, MTBeneficiary };
};
export default connect(mapStateToProps, {
    getAllTransactionsOfUser, ContinueToAddBeneficiary
})(customerHome);


