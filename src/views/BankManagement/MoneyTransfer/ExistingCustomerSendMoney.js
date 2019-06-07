import React, { Component } from 'react';
import {
    Row, Col,
    Label, Input,
} from 'reactstrap';

import { connect } from 'react-redux';


require('react-datepicker/dist/react-datepicker.css');

import '../../../../scss/vendors/react-select/react-select.scss';
import CustomerBreadCrumb from '../../../components/ViewComponents/CustomBreadcrumb';

import { getAllTransactionsOfUser } from '../../Reports/ReportsAction';
// import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb';

export const Labelstyle4 = {
    fontSize: 11,
    marginTop: 5,
    marginBottom: 10,
    padding: 0,
    color: "rgb(171, 171, 171)",
}

const products = [];

function addProducts(quantity) {
    const startId = products.length;
    for (let i = 1; i <= quantity; i++) {
        const id = startId + i;
        products.push({
            id: id,
            distributorName: 'Agent ' + id,
            amount: 2100 + i,
            distributorMobileNo: 2100 + i,
            date: "02-01-2001",
        });
    }
}

addProducts(100);

class Screen4 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focusedInput: '',

        };
        // this.handleChange = this.handleChange.bind(this);

    }





    render() {

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="TransactionHistory" />

                <Row >


                    <Col xs="12" lg="12" style={{ background: "white", padding: 10, marginBottom: "2%" }}>



                        <Row style={{ borderBottom: "1px solid #dfdfdf" }}>
                            <label
                                class="tableTitleStyle"
                            >Transaction Details </label>

                        </Row>
                        <Row   >
                            <Col xs="12" lg="3" style={{ textAlign: "left", padding: 25, background: "lightgray", margin: "4%", borderRadius: 15 }}>
                                <Row style={{ borderBottom: "1px solid #afabab", margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }}  ><Label style={Labelstyle4}>Beneficiary Name  </Label></Col>

                                    <Col xs="12" lg="7" style={{}} ><Label >Vinitha Sharma </Label></Col>
                                </Row>
                                <Row style={{ borderBottom: "1px solid #afabab", margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }} ><Label style={Labelstyle4}>Mobile Number  </Label></Col>

                                    <Col xs="12" lg="7" style={{}}  ><Label >8520134679  </Label></Col>
                                </Row>
                                <Row style={{ borderBottom: "1px solid #afabab", margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }}><Label style={Labelstyle4}>Bank </Label></Col>

                                    <Col xs="12" lg="7" style={{}}  ><Label >HDFC Bank  </Label></Col>
                                </Row>
                                <Row style={{ borderBottom: "1px solid #afabab", margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }}><Label style={Labelstyle4}>IFSC Code  </Label></Col>

                                    <Col xs="12" lg="7" style={{}} ><Label >HDFCIN2010  </Label></Col>
                                </Row>
                                <Row style={{ margin: 6 }}>
                                    <Col xs="12" lg="5" style={{ padding: 0 }}><Label style={Labelstyle4}>Account Number  </Label></Col>

                                    <Col xs="12" lg="7" style={{}}  ><Label >12345123456  </Label></Col>
                                </Row>
                            </Col>

                            <Col xs="12" lg="6" style={{ textAlign: "left", margin: "4%" }}>

                                <Row>
                                    <Col xs="12" lg="4">
                                        <Label > Mode of Transfer </Label>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Label>
                                            <input type="radio" style={{ zoom: 1.2 }} />
                                            <Label style={{ paddingLeft: 9, fontSize: "initial" }}>  NEFT </Label>
                                        </Label>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Label>
                                            <input type="radio" style={{ zoom: 1.2 }} />
                                            <Label style={{ paddingLeft: 9, fontSize: "initial" }}>  IMPS </Label>
                                        </Label>
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: 10 }}>
                                    <Col xs="12" lg="4">
                                        <Label > Transfer Amount</Label>
                                    </Col>
                                    <Col xs="12" lg="4">
                                        <Input placeholder="35,000" />
                                    </Col>
                                </Row>

                                <Row style={{ marginTop: 10 }}>
                                    <Col xs="12" lg="4">
                                        <Label> Additional Charges</Label>
                                    </Col>
                                    <Col xs="12" lg="2">
                                        <Input disabled />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: 10 }}>
                                    <Col xs="12" lg="4">
                                        <Label > Total Amount</Label>
                                    </Col>
                                    <Col xs="12" lg="4">
                                        <Input disabled />
                                    </Col>
                                </Row>
                                <Row style={{ marginTop: "2%", marginLeft: "4%" }}>
                                    <div>
                                        <Input type="checkbox" style={{ zoom: 2.5 }}
                                            className="form-check-input"
                                        />
                                    </div>
                                    <Col xs="12" lg="8" style={{ marginTop: "1%" }}>
                                        <Label style={{}} >
                                            I agree to the
                                                <a style={{ color: "#36a9e1", cursor: "pointer" }}
                                                onClick={() => {
                                                    // var value=true;
                                                    // this.props.ifscSearchModal({value});
                                                }}
                                            >Terms & Conditions.</a>

                                        </Label>
                                    </Col>
                                </Row>


                                <Row style={{ width: "100%" }}>
                                    <Col xs="12" lg="3" style={{ padding: 6 }}>
                                        <button class="buttonStyle" >Transfer </button>
                                    </Col>
                                    <Col xs="12" lg="3" style={{ padding: 6 }}>
                                        <button class="buttonStyle special" >Cancel </button>
                                    </Col>
                                </Row>
                            </Col>

                        </Row>
                        {/* </Col>                           */}
                    </Col>
                </Row>
            </div>
        )
    }

}

const mapStateToProps = ({ reportReducer, Authentication }) => {
    const { lpbAdminTrans } = reportReducer;
    const { LoginDetails } = Authentication;
    return { lpbAdminTrans, LoginDetails };
};

export default connect(mapStateToProps, {
    getAllTransactionsOfUser,
})(Screen4);

function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 0, font: "bold" }} > *</span>
}

