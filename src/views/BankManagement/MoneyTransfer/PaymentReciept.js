import React, { Component } from 'react';
import {
    Row, Col, Card, CardBody, Label, Input, Button
} from 'reactstrap';
import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';
import { getAllTransactionsOfUser, } from '../../Reports/ReportsAction';
import { ContinueToAddBeneficiary } from '../BankManagementAction';


class customerHome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: '',
        };
    }




    render() {

        return (
            <div className="animated fadeIn">
                {/* <CustomerBreadCrumb from="MTcustomer" /> */}
                <Row >
                    <Col xs="12" lg="12">
                        <Card style={{ background: "#ffffff", }}>
                            <CardBody  >

                                <div style={{ display: "flex", justifyContent: "left", fontSize: 20, borderBottom: "1px solid lightgray" }}>
                                    <div style={{ marginRight: 35 }}>
                                        <Label style={{}}>Payment</Label>
                                    </div>
                                    <div>
                                        <Label>Reciept</Label>
                                    </div>
                                </div>

                                <div style={{ display: "flex", justifyContent: "left", padding: "3% 1% 3% 3% ", borderBottom: "1px solid lightgray" }}>
                                    <div>
                                        <Label style={{ marginRight: 20 }}>Select Payee {RequireIconForIpFiled()} </Label>

                                    </div>
                                    <div style={{ width: "25%" }}>
                                        <Input type="select">Select</Input>
                                    </div>
                                </div>

                                <div style={{ display: "flex", justifyContent: "left", padding: "30px 0px 4px 35px" }}>
                                    <div style={{ display: "block", marginRight: 200 }}>

                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div style={{ width: "100%", marginRight: 20 }}>
                                                <Label>Invoice Reference Number {RequireIconForIpFiled()}</Label>
                                            </div>

                                            <div>
                                                <Input style={{ width: 100 }}></Input>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div style={{ width: "100%", marginRight: 20 }}>
                                                <Label>Bill Amount {RequireIconForIpFiled()}</Label>
                                            </div>

                                            <div  >
                                                <Input style={{ width: 100 }}></Input>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div style={{ width: "100%", marginRight: 20 }}>
                                                <Label>Discount {RequireIconForIpFiled()}</Label>
                                            </div>

                                            <div  >
                                                <Input style={{ width: 100 }}></Input>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div style={{ width: "100%", marginRight: 20 }}>
                                                <Label>Final Payable Amount </Label>
                                            </div>

                                            <div  >
                                                <Input style={{ width: 100 }}></Input>
                                            </div>
                                        </div>
                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div style={{}}>
                                                <button class="buttonStyle Submit">Save</button>
                                            </div>

                                            <div style={{}}>
                                                <button class="buttonStyle  special2">Cancel</button>
                                            </div>
                                        </div>
                                    </div>


                                    <div style={{ display: "block" }}>

                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div style={{ width: "100%", marginRight: 20 }}>
                                                <Label>Mode {RequireIconForIpFiled()}</Label>
                                            </div>

                                            <div  >
                                                <Input style={{ width: 100 }}></Input>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div style={{ width: "100%", marginRight: 20 }}>
                                                <Label>Select Account {RequireIconForIpFiled()}</Label>
                                            </div>

                                            <div  >
                                                <Input style={{ width: 100 }}></Input>
                                            </div>
                                        </div>

                                        <div style={{ display: "flex", marginTop: 20 }}>
                                            <div style={{ width: "100%", marginRight: 20 }}>
                                                <Label>Remarks {RequireIconForIpFiled()}</Label>
                                            </div>

                                            <div  >
                                                <Input style={{ width: 100 }}></Input>
                                            </div>
                                        </div>
                                    </div>
                                </div>

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


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 5, font: "bold" }} > *</span>
}
