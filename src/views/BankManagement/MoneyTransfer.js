import React, { Component } from 'react';
import {
    Row, Col, Button, Card, CardHeader, CardFooter, CardBody,
    Form, FormGroup, FormText, Label, Input, Alert,
    ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText,
    Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption, Collapse

} from 'reactstrap';
import classnames from 'classnames';
import {
    moneyTransferInitialLoad, onCustomerMobileNoChanged, onCustomerEditChanged,
    getCustomerInfo, newCustomerSave, ProcessMoneyTransfer
} from '../BankManagement/BankManagementAction';
import { connect } from 'react-redux';


// import CustomerBeneficiary from '../BankManagement/CustomerBeneficiary';


import CustomerBreadCrumb from '../../components/ViewComponents/CustomBreadcrumb';

class MoneyTransfer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileNoValidation: '',
            visible: true,
            Errors: {},
            activeIndex: 0,
            disableMobileInput: false,
        }
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.onDismiss = this.onDismiss.bind(this);
    }
    onDismiss() {
        this.setState({ visible: false });
    }
    componentWillMount() {

        // if (this.props.location.state == undefined) {
        //     this.props.moneyTransferInitialLoad();
        // }

    }
    componentDidUpdate() {
        console.log('===== component DidUpdate =======')
        console.log(this.props)
        setTimeout(function () {
            if (this.props.moneyTransfer.customerDetails.isCustomerSaveSuccess) {
                this.props.moneyTransfer.customerDetails.isCustomerSaveSuccess = false;
                this.setState({
                    activeIndex: 1,
                });
            }
        }.bind(this), 3000);

    }
    GetCustomerInfo() {
        // console.log(" GOTO customer INfo Clicked ");
        // let mobileNo = CustomerMobileNumber.value;
        // let errors = {};
        // let disabled = false;
        // if (mobileNo != null) {
        //     if (mobileNo.length < 10) {
        //         errors["CustomerMobNo"] = 'Enter a valid 10 digit Mobile Number';
        //     } else {
        //         disabled = true;
        //         this.props.getCustomerInfo({ mobileNo });
        //     }
        //     this.setState({
        //         disableMobileInput: disabled,
        //         Errors: errors
        //     });
        // }


        console.log("NewCustomerClick");
        let customerInfo = {
            customerMobileNo: "9703949433",
            firstName: "Prashanth",
            lastName: "Yejje",
            eKYCSelected: "PAN",
            eKYCInfo: "523652365222",
            address: "9-85,bc colony"
        }

        this.props.newCustomerSave({ customerInfo });


    }
    onMobileNumberChange(e) {
        console.log("OnChange")
        console.log(this.props.moneyTransfer)
        const re = /^[0-9\b]+$/;
        if (e.target.value == '' || re.test(e.target.value)) {
            // this.setState({ value: e.target.value })
            let mobileNo = e.target.value;
            this.props.onCustomerMobileNoChanged({ mobileNo })
        }
    }
    onCustomerEditChange({ e, field }) {
        let value = e.target.value;

        this.props.onCustomerEditChanged({ field, value })
    }
    // NewBeneficiaryClick() {
    //     this.props.history.push({
    //         pathname: '/BankManagement/CustomerBeneficiary',
    //         state: { customerMMInfo: this.props.moneyTransfer.isValidCustomer }
    //     })
    // }
    SaveNewCustomer_Click() {

        let customerInfo = {
            customerMobileNo: this.props.moneyTransfer.customerDetails.customerMobileNo,
            firstName: this.props.moneyTransfer.customerDetails.firstName,
            lastName: this.props.moneyTransfer.customerDetails.lastName,
            eKYCSelected: this.props.moneyTransfer.customerDetails.selectedEKYC,
            eKYCInfo: this.props.moneyTransfer.customerDetails.eKYCInfo,
            address: this.props.moneyTransfer.customerDetails.address
        }
        if (this.ValidateFields(customerInfo)) {
            this.props.newCustomerSave({ customerInfo });
        }
    }


    Transfer_Beneficiary_Click(benfry) {
        console.log("================= Parent benfry ==================");
    }
    renderCustomerInfo() {

        if (this.props.moneyTransfer.isEditTrue != undefined) {
            if (this.props.moneyTransfer.isEditTrue) {
                return <Card >
                    <CardHeader style={{
                        borderBottomColor: '#ffa500',
                        borderBottomWidth: '2px',
                    }}>
                        <strong>Customer Entry</strong>
                    </CardHeader>
                    <CardBody>
                        <Row>
                            <Col>
                                <FormGroup >
                                    <Label style={{ verticalAlign: 'sub' }}>First Name</Label>
                                    <Input type="text" bsSize="sm" onChange={(e) => {
                                        let field = 'FirstName'
                                        this.onCustomerEditChange({ e, field })
                                    }}
                                        value={this.props.moneyTransfer.customerDetails.firstName}
                                        className={this.focusField(this.state.Errors["firstName"])}
                                        id="NewFirstName" placeholder="First Name" maxLength={30} />
                                    <FormText color="red"> {this.state.Errors["firstName"]} </FormText>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup column>
                                    <Label style={{ verticalAlign: 'sub' }}>Last Name</Label>
                                    <Input type="text" bsSize="sm" onChange={(e) => {
                                        let field = 'LastName'
                                        this.onCustomerEditChange({ e, field })
                                    }}
                                        value={this.props.moneyTransfer.customerDetails.lastName}
                                        className={this.focusField(this.state.Errors["lastName"])}
                                        id="NewLastName" placeholder="Last Name" maxLength={30} />
                                    <FormText color="red"> {this.state.Errors["lastName"]} </FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup column>
                                    <Label htmlFor="selectEKYC"> Select eKYC</Label>
                                    <Input bsSize="sm"
                                        type="select" name="selectEKYC" id="selectEKYC"
                                        onChange={(e) => {
                                            let field = 'eKYC'
                                            this.onCustomerEditChange({ e, field })
                                        }}
                                        value={this.props.moneyTransfer.customerDetails.selectedEKYC}
                                        className={this.focusField(this.state.Errors["ekycDDL"])}>
                                        <option
                                            value="0"> Select Bank </option>
                                        <option>PAN</option>
                                        <option>AADHAR</option>
                                        <option>DRIVING LICENSE</option>
                                        <option>VOTER ID</option>
                                    </Input>
                                    <FormText color="red"> {this.state.Errors["ekycDDL"]} </FormText>
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup column>
                                    <Label style={{ verticalAlign: 'sub' }}>eKYC Details</Label>
                                    <Input type="text" bsSize="sm"
                                        onChange={(e) => {
                                            let field = 'eKYCInfo'
                                            this.onCustomerEditChange({ e, field })
                                        }}
                                        value={this.props.moneyTransfer.customerDetails.eKYCInfo}
                                        className={this.focusField(this.state.Errors["ekycInfo"])}
                                       
                                        id="NewLastName" maxLength={20} />
                                    <FormText color="red"> {this.state.Errors["ekycInfo"]} </FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup column>
                                    <Label style={{ verticalAlign: 'sub' }}>Address</Label>
                                    <Input type="text" bsSize="sm" onChange={(e) => {
                                        let field = 'Address'
                                        this.onCustomerEditChange({ e, field })
                                    }}
                                        value={this.props.moneyTransfer.customerDetails.address}
                                        className={this.focusField(this.state.Errors["address"])}
                                        id="NewAddress" placeholder="Address" maxLength={150} />
                                    <FormText color="red"> {this.state.Errors["address"]} </FormText>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup row>
                                    <Col md="4">
                                        <Button
                                            disabled={false}
                                            onClick={() => this.SaveNewCustomer_Click()}
                                            color="warning">Save</Button>
                                    </Col>
                                    <Col xs="12" md="5">
                                    </Col>
                                </FormGroup>
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            }
            else {
                return <Card >

                    <CardBody>

                    </CardBody>
                </Card>
            }
        }
    }
    toggleSuccessAlert() {
        console.log(" ================ Toggle Success Alert ================ ")
        if (this.props.location.state != undefined) {
            if (this.props.location.state.isRedirect != undefined) {
                console.log(this.props.location.state.transferedAmount)
                if (this.props.location.state.transferedAmount != undefined) {
                    return <Alert style={{ backgroundColor: '#9ccc65' }} isOpen={this.state.visible} toggle={this.onDismiss}>
                        Rs. <strong>{this.props.location.state.transferedAmount}/-</strong>  has been transfered to <strong>{this.props.location.state.transferedTo}</strong>
                    </Alert>
                }
                else if (this.props.location.state.benefAdded != undefined) {
                    return <Alert style={{ backgroundColor: '#9ccc65' }} isOpen={this.state.visible} toggle={this.onDismiss}>
                        <strong>{this.props.location.state.benefAdded}</strong> has been added to your Beneficiary list.
                </Alert>
                }
            }
        }
    }

    //#region Carousel(Slider) Functions
    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {

        this.props.moneyTransfer.isEditTrue = true;
        if (this.animating) return;
        setTimeout(function () {
            this.setState({ activeIndex: newIndex });
        }.bind(this), 3000);

    }

    // showBeneficiary() {
    //     // if (this.state.activeIndex == 1)
    //     return <CustomerBeneficiary Transfer_Beneficiary_Click={this.Transfer_Beneficiary_Click} />
    // }

    //#endregion


    //#region   Storing CustomerDetails At Heder Side :  Coding By Prashanth


    SaveCustomerName(val) {

    }

    // this.props.moneyTransfer.customerDetails.customerMobileNo,
    //    this.props.moneyTransfer.customerDetails.firstName,
    //       this.props.moneyTransfer.customerDetails.lastName,
    //          this.props.moneyTransfer.customerDetails.selectedEKYC,
    //        this.props.moneyTransfer.customerDetails.eKYCInfo,
    //        this.props.moneyTransfer.customerDetails.address


    //#endregion

    render() {

        const { activeIndex } = this.state;
        let validCustomerName = this.props.moneyTransfer.validCustomerName;

        return (

            <Row>
                <Col md="12">
                    <CustomerBreadCrumb from="MoneyTransfer" contentPath="/ Banking / MoneyTransfer" />
                </Col>
                <Col xs="12" md="12" >
                    <div>
                        {this.toggleSuccessAlert()}
                    </div>
                    <Card style={{ border: '1px solid #ffc800', }}>
                        <CardHeader style={{
                            backgroundColor: '#ffffff'
                        }}>
                            <Form action="" inline>
                                <Col xs="12" md="5">
                                    <FormGroup style={{ marginBottom: 0, marginTop: '10px' }} >

                                        <Label htmlFor="CustomerMobileNumber" style={{ paddingRight: '30px' }}>Mobile Number</Label>
                                        <Input ref={el => this.CustomerMobileNumber = el}
                                            style={{ width: '35%' }}
                                            type="text" onChange={(e) => this.onMobileNumberChange(e)}
                                            value={this.props.moneyTransfer.customerMobileNo}
                                            className={this.focusField(this.state.Errors["CustomerMobNo"])}
                                            id="CustomerMobileNumber" placeholder="Mobile Number" maxLength={10}
                                            disabled={this.state.disableMobileInput} />
                                        {/* <FormText color="red"> {this.state.Errors["CustomerMobNo"]} </FormText> */}
                                    </FormGroup>
                                </Col>

                                <Col xs="12" md="5">
                                    {validCustomerName != '' ?
                                        <div>
                                            <span className="h4" style={{ marginRight: 10, color: 'coral' }}>{validCustomerName}</span>
                                            <span>
                                                <i className="fa fa-edit fa-lg mt-3"
                                                    style={{ cursor: 'pointer', color: 'lightslategray' }} onClick={() => this.goToIndex(0)}></i>
                                            </span>
                                        </div>
                                        : null
                                    }
                                </Col>
                                <Col xs="12" md="1" style={{ paddingTop: 15 }}>
                                    <Button
                                        style={{ marginRight: '10px' }}
                                        outline
                                        disabled={false}
                                        onClick={() => this.GetCustomerInfo()}
                                        disabled={this.state.disableMobileInput}
                                        color="warning">Proceed</Button>
                                </Col>
                                <Col xs="12" md="1" style={{ paddingTop: 15 }}>
                                    <Button
                                        //className="pull-right"
                                        outline
                                        disabled={false}
                                        onClick={() => window.location.reload()}
                                        color="danger">Back</Button>
                                </Col>
                            </Form>

                            <Form style={{ marginTop: 10 }}>
                                <Col xs="12">
                                    {/* <Card  >
                                        <CardBody> */}
                                    <Form >
                                        <FormGroup row >
                                            <i
                                                style={{ marginRight: -5, marginTop: -5, color: 'red' }}
                                            >*</i>
                                            <Col md="4">

                                                <FormGroup >
                                                    {/* <Label for="exampleDate"> </Label> */}

                                                    <Input type="text" bsSize="sm"
                                                        onChange={(val) => this.SaveCustomerName(val)}
                                                        id="ACno" placeholder="Enter Customer Name" />
                                                </FormGroup>
                                            </Col>
                                            {/* <i style={{marginRight:-10,marginTop:-5,color:'red'}}>*</i> */}
                                            <Col xs="12" md="3">
                                                <FormGroup>
                                                    <Input type="date" bsSize="sm" name="date" id="exampleDate"
                                                        placeholder="date placeholder"
                                                        title="Date Of Birth"
                                                    />
                                                 
                                                </FormGroup>
                                            </Col>

                                            <Col>
                                                <FormGroup tag="fieldset" >
                                                    <Label check>

                                                    </Label>
                                                    <Label style={{ marginLeft: 25 }} check>
                                                        <Input type="radio" name="Male" />{' '}
                                                        Male
                                                          </Label>
                                                    <Label style={{ marginLeft: 25 }} check>
                                                        <Input type="radio" name="Female" />{' '}
                                                        Female
                                                          </Label>

                                                </FormGroup>

                                            </Col>

                                        </FormGroup>

                                        <FormGroup style={{ marginTop: -15 }} row>
                                            <Col xs="12" md="2">
                                                <Input bsSize="sm"
                                                    type="select" name="selectEKYC" id="selectEKYC"
                                                    onChange={(e) => {
                                                        let field = 'eKYC'
                                                        this.onCustomerEditChange({ e, field })
                                                    }}
                                                    value={this.props.moneyTransfer.customerDetails.selectedEKYC}
                                                    className={this.focusField(this.state.Errors["ekycDDL"])}>
                                                    <option
                                                     
                                                        value="0"> Select KYC </option>
                                                    <option>PAN</option>
                                                    <option>AADHAR</option>
                                                    <option>DRIVING LICENSE</option>
                                                    <option>VOTER ID</option>
                                                </Input>
                                            </Col>
                                            {/* <i hidden={this.props.moneyTransfer.customerDetails.selectedEKYC === ''} style={{marginRight:-10,marginTop:-5,color:'red'}}>*</i> */}
                                            <Col xs="12" md="2">
                                                {/* <Collapse isOpen={this.props.moneyTransfer.customerDetails.selectedEKYC != ''}> */}
                                                <Input disabled={this.props.moneyTransfer.customerDetails.selectedEKYC === ''} bsSize="sm" type="text"
                                                    placeholder={this.props.moneyTransfer.customerDetails.selectedEKYC + " Number"} />

                                                {/* </Collapse> */}
                                            </Col>
                                            {/* <i style={{marginRight:-10,marginTop:-5,color:'red'}}>*</i> */}
                                            <Col xs="12" md="4">
                                                <FormGroup column>

                                                    <Input type="text" bsSize="sm" onChange={(e) => {
                                                        let field = 'Address'
                                                        this.onCustomerEditChange({ e, field })
                                                    }}
                                                        value={this.props.moneyTransfer.customerDetails.address}
                                                        className={this.focusField(this.state.Errors["address"])}
                                                        id="NewAddress" placeholder="Address" maxLength={150} />
                                                    <FormText color="red"> {this.state.Errors["address"]} </FormText>
                                                </FormGroup>
                                            </Col>
                                        </FormGroup>

                                        {/* <FormGroup row style={{ marginTop: -25 }} >

                                            <Col xs="12" md="4">
                                                <Collapse isOpen={this.props.moneyTransfer.customerDetails.selectedEKYC != ''}>
                                                    <Input bsSize="sm" type="text"
                                                        placeholder={" Enter " + this.props.moneyTransfer.customerDetails.selectedEKYC + " Number"} />
                                                 
                                                </Collapse>

                                            </Col>
                                        </FormGroup> */}
                                    </Form>
                                    {/* </CardBody>
                                    </Card> */}
                                </Col>
                            </Form>
                        </CardHeader>
                        <CardBody style={{ borderTop: 0, marginTop: -15, borderBottomWidth: '2px', borderBottomLeftRadius: '5px', borderBottomRightRadius: '5px' }}>
                            {/* <Row>
                                

                                <Col xs="12" md="7" style={{ display: this.props.moneyTransfer.isValidCustomer ? "inline" : "none" }}>
                                    <Button
                                        disabled={!this.props.moneyTransfer.isValidCustomer}
                                        onClick={() => this.NewBeneficiaryClick()}
                                        color="warning">Add Beneficiary</Button>
                                </Col>
                            </Row> */}
                            <Row>
                                <Col>
                                    {/* <Carousel activeIndex={activeIndex}

                                        next={this.next}
                                        previous={this.previous}
                                        autoPlay={false} interval={false} keyboard={false}> */}
                                    {/* {slides} */}
                                    {/* <CarouselItem
                                            onExiting={this.onExiting}
                                            onExited={this.onExited}
                                        >
                                            <Col xs="12" md="8" >
                                                {this.renderCustomerInfo()}
                                            </Col>
                                        </CarouselItem>
                                        <CarouselItem
                                            onExiting={this.onExiting}
                                            onExited={this.onExited}
                                        > */}
                                    {/* {this.showBeneficiary()} */}
                                    {/* </CarouselItem>

                                    </Carousel> */}
                                </Col>
                            </Row>

                        </CardBody>
                    </Card>
                </Col>
            </Row >
        )
    }
    ValidateFields(customerInfo) {
        let errors = {};
        let isValid = true;
        // if (customerInfo.customerMobileNo == '' || customerInfo.customerMobileNo.length < 10) {
        //     errors["MobNo"] = 'Enter a valid 10 digit Mobile Number';
        //     isValid = false;
        // }
        if (customerInfo.eKYCSelected != '') {
            if (customerInfo.eKYCInfo == '') {
                errors["ekycInfo"] = 'Required';
            }
        } else {
            errors["ekycDDL"] = 'Required';
        }

        if (customerInfo.firstName == '') {
            errors["firstName"] = 'Required';
            isValid = false;
        }
        if (customerInfo.lastName == '') {
            errors["lastName"] = 'Required';
            isValid = false;
        }
        if (customerInfo.address == '') {
            errors["address"] = 'Required';
            isValid = false;
        }
        this.setState({
            Errors: errors
        });
        return isValid;
    }
    focusField(fieldValue) {
        if (fieldValue === undefined) {
            return '';
        }
        else {
            return 'is-invalid'
        }
    }
}

const mapStateToProps = ({ bankManagement }) => {
    const { moneyTransfer } = bankManagement;

    return { moneyTransfer };
};


export default connect(mapStateToProps, {
    moneyTransferInitialLoad, onCustomerMobileNoChanged, onCustomerEditChanged,
    getCustomerInfo, newCustomerSave, ProcessMoneyTransfer
})(MoneyTransfer);

