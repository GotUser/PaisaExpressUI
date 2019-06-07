import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Button, Form, FormGroup,
    FormText, Label, Input, CardFooter, Collapse, Table
} from 'reactstrap';

import { connect } from 'react-redux';
import "react-toggle/style.css"
import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';
import {
    GetBankDetailsOfDepositCash, SaveDepositCompIpDetails, GenerateOTPtoFSE, OptionToResentOTP
} from '../Transactions/TransactionsAction';

import '../../../public/CustomStyles.css';
import { Labelstyle1 } from '../../GlobalVars';

class CashDeposit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10
        };
        this.ResetBt = this.ResetBt.bind(this);
    }

    componentWillMount() {

        this.props.GetBankDetailsOfDepositCash();

    }

    handleImageChange(e, field) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            reader.onloadend = () => {
                let Image = reader.result.split(',');
                let Base64 = Image[1];
                // console.log(Base64);
                this.props.SaveDepositCompIpDetails(Base64, field);
            }
            reader.readAsDataURL(file)
        }
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }
    componentDidUpdate() {

        // clearInterval(this.timer)
        if (this.props.CashDeposit.ApiResults.OTPsentSuccess) {
            clearInterval(this.timer)
            this.timer = setInterval(this.tick.bind(this), 1000)
        }
    }

    tick() {

        if (this.state.count === 0) {
            console.log(" COUNT IS ZERO NOW / / / // ")
            this.props.OptionToResentOTP();
            clearInterval(this.timer)

        } else this.setState({ count: (this.state.count - 1) })
    }

    render() {

        return (
            <div className="animated fadeIn">
                <CustomerBreadCrumb from="CashDeposit" />
                <Row>
                    {/* <Col xs="12" md="1"></Col> */}
                    <Col xs="12" md="12">
                        <Card>
                            <CardHeader color="warning">
                                <strong style={{ fontSize: 20 }}  > Cash Deposit </strong>
                            </CardHeader>
                            <CardBody>
                                <FormGroup row >
                                    <Col md="3" style={{ marginLeft: 40 }}>
                                        <Row>
                                            <Label style={Labelstyle1} >Select your transaction type {RequireIconForIpFiled()}  </Label>
                                        </Row>
                                        <Row>
                                            <Input
                                                disabled={this.props.CashDeposit.ApiResults.OTPsentSuccess}
                                                onChange={(txt) =>
                                                    this.props.SaveDepositCompIpDetails(txt.target.value, 'TrasType')
                                                }
                                                value={this.props.CashDeposit.IpDetails.TrasType}
                                                type="select">
                                                <option value="select">Select your transaction type</option>
                                                <option value="cash">Cash Deposit</option>
                                                <option value="fse">Paid To FSE</option>
                                            </Input>
                                        </Row>
                                    </Col>
                                    <Col md="3" style={{ marginLeft: 30 }}>
                                        <Row>
                                            <Label style={Labelstyle1} >Enter Amount {RequireIconForIpFiled()}  </Label>
                                        </Row>
                                        <Row>
                                            <Input
                                                disabled={this.props.CashDeposit.ApiResults.OTPsentSuccess}
                                                value={this.props.CashDeposit.IpDetails.amount}
                                                onChange={(txt) => {
                                                    let re = /^[0-9\b]+$/;
                                                    if (txt.target.value == '' || re.test(txt.target.value)) {
                                                        this.props.SaveDepositCompIpDetails(txt.target.value, 'amount')
                                                    }
                                                }
                                                }
                                                placeholder="Enter Amount" />
                                        </Row>
                                    </Col>
                                    {this.props.CashDeposit.IpDetails.TrasType === "fse" ?
                                        <Col md="3" style={{ marginLeft: 30 }}>

                                            <Row>
                                                <Label style={Labelstyle1} >OTP will be sent to your FSE  </Label>
                                            </Row>
                                            <Row                                             >
                                                <Button
                                                    disabled={this.props.CashDeposit.IpDetails.amount === '' || this.props.CashDeposit.IpDetails.amount.length === 0}
                                                    onClick={() => this.props.GenerateOTPtoFSE(this.props.CashDeposit.IpDetails.amount)}
                                                    color="success">
                                                    GENERATE OTP
                                                </Button>

                                            </Row>
                                        </Col> : <Col md="3" style={{ marginLeft: 30 }}>
                                            <Row>
                                                <Label style={Labelstyle1} >NEFT/IMPS/RTGS transaction id{RequireIconForIpFiled()}  </Label>
                                            </Row>
                                            <Row>
                                                <Input
                                                    value={this.props.CashDeposit.IpDetails.trasactionId}
                                                    onChange={(txt) =>
                                                        this.props.SaveDepositCompIpDetails(txt.target.value, 'trasactionId')
                                                    }
                                                    placeholder="Trasaction Id"
                                                />
                                            </Row>
                                        </Col>}
                                </FormGroup >

                                {this.props.CashDeposit.IpDetails.TrasType === 'fse' ?
                                    this.props.CashDeposit.ApiResults.OTPsentSuccess ?
                                        <FormGroup row style={{ marginTop: 30 }} >
                                            <Col md="3" style={{ marginLeft: 40 }} >
                                                <Row>
                                                    <Label style={Labelstyle1} >Enter OTP which sent to your FSE {RequireIconForIpFiled()}  </Label>
                                                </Row>
                                                <Row>
                                                    <Input
                                                        value={this.props.CashDeposit.IpDetails.otp}
                                                        onChange={(txt) =>
                                                            this.props.SaveDepositCompIpDetails(txt.target.value, 'otp')
                                                        }
                                                        placeholder="Enter OTP" />
                                                </Row>

                                            </Col>
                                            {/* {setTimeout(function () { this.props.OptionToResentOTP() }, 1000 * 100)} */}
                                            <Col md="3" >
                                                <Row>
                                                    <Label style={Labelstyle1} > Sec Left </Label>
                                                </Row>
                                                <Row>

                                                    <h3 style={{ color: 'red' }} color="success">{this.state.count}</h3>
                                                </Row>

                                            </Col>
                                        </FormGroup>
                                        : null
                                    : <FormGroup row style={{ marginTop: 30 }}>
                                        <Col md="3" style={{ marginLeft: 40 }}>
                                            <Row>
                                                <Label style={Labelstyle1} >Select your Bank {RequireIconForIpFiled()}  </Label>
                                            </Row>
                                            <Row>
                                                <Input
                                                    value={this.props.CashDeposit.IpDetails.bankName}
                                                    onChange={(txt) =>
                                                        this.props.SaveDepositCompIpDetails(txt.target.value, 'bankName')
                                                    }
                                                    type="select">
                                                    <option value="select">Select your Bank</option>
                                                    {this.props.CashDeposit.CashDepositBanks.map((item, i) => (
                                                        <option value={item.bankName}>{item.bankName}</option>

                                                    ))}
                                                </Input>
                                            </Row>
                                        </Col>
                                        <Col md="3" style={{ marginLeft: 30 }}>
                                            <Row>
                                                <Label style={Labelstyle1} >Enter Branch Name {RequireIconForIpFiled()}  </Label>
                                            </Row>
                                            <Row>
                                                <Input
                                                    value={this.props.CashDeposit.IpDetails.branchName}
                                                    onChange={(txt) =>
                                                        this.props.SaveDepositCompIpDetails(txt.target.value, 'branchName')
                                                    }
                                                    placeholder="Enter Branch" />
                                            </Row>
                                        </Col>

                                        {this.props.CashDeposit.IpDetails.TrasType === 'cash' ? <Col md="3" style={{ marginLeft: 40 }}>
                                            <Row>
                                                <Label style={Labelstyle1} >Upload Slip {RequireIconForIpFiled()}  </Label>
                                            </Row>
                                            <Row>
                                                <Input
                                                    onChange={(e) => this.handleImageChange(e, 'slipBase64')}
                                                    // value={this.props.CashDeposit.IpDetails.slipBase64}
                                                    type="file" />
                                            </Row>
                                        </Col> : null}


                                    </FormGroup>}




                                <FormGroup row style={{ marginTop: 30 }}>

                                    <Col md="5" style={{ marginLeft: 40 }}>

                                        <Button type="button" style={{ width: 100 }} color="warning">Submit</Button>
                                        <Button style={{ marginLeft: 10, width: 100 }}
                                            onClick={this.ResetBt} >Reset</Button>

                                    </Col>

                                </FormGroup>

                                {this.props.CashDeposit.IpDetails.TrasType === 'fse' ? null : <FormGroup row style={{ marginTop: 30 }}>
                                    <Table>
                                        <thead>
                                            <tr>
                                                <th>Bank Name</th>
                                                <th>IFSC Code</th>
                                                <th>Account Number</th>
                                                <th>Bank Branch</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.CashDeposit.CashDepositBanks.map((item, i) => (
                                                <tr key={i}>
                                                    <td>{item.bankName}</td>
                                                    <td>{item.ifsc}</td>
                                                    <td>{parseInt(item.acNo)}</td>
                                                    <td>{item.bankBranch}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </FormGroup>}
                            </CardBody>
                            {/* <CardFooter>
                                <Button type="button" style={{ width: 100 }} color="warning">Submit</Button>
                                <Button style={{ marginLeft: 10, width: 100 }} >Reset</Button>
                            </CardFooter> */}
                        </Card>
                    </Col>
                    <Col xs="12" md="1"></Col>
                </Row>
            </div>
        )
    }

    ResetBt(event) {
        console.log(" Reset  Button Clicked")
        navigator.geolocation.getCurrentPosition(function (position) {
            // do_something(position.coords.latitude, position.coords.longitude);

            console.log(position.coords.latitude);
            console.log(position.coords.longitude);
        });
    }

}

const mapStateToProps = ({ transaction }) => {
    const { CashDeposit, } = transaction;
    return { CashDeposit };
};

export default connect(mapStateToProps, {
    GetBankDetailsOfDepositCash, SaveDepositCompIpDetails, GenerateOTPtoFSE, OptionToResentOTP
})(CashDeposit);


function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 1, font: "bold" }} > *</span>

}

