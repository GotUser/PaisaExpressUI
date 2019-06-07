import React, { Component } from 'react';
import {
    Pagination, PaginationItem, PaginationLink, Row, Col, Label, Input,
    Card, CardBody, Table, InputGroup, InputGroupText, InputGroupAddon, PopoverBody, Popover, FormText
} from 'reactstrap';

import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';
import { connect } from 'react-redux';
import '../../../../public/CustomStyles.css';
import RateCard_SetValuesModal from './RateCard_SetValuesModal';
import CommissionTableModal from './CommissionTableModal';
import CommissionCalculator from './CommissionCalculator';

import {
    GetRateCardTemplate, CommissionCalculatorModal, ChangeRateCardValues, SetCommissionCalculatorValues,
    SaveCreatingRateCardData, FilterRateCardFromAndToValues, SetValuesModal, FilterRateCardSlabs, SendRateCardDetailsToCreate,
    SendEditedRateCardDetails, ResetRateCardData, ValidateSlabsBeforeSendToServer, SlabsValidationResult,
    GetRateCardSlabsOnID, CancleEventInRCMain, RatecardWarnings
} from '../BankManagementAction';

var ValidateslabFail = false;

class RateCardMain extends Component {
    constructor() {
        super();
        this.state = {
            popoverOpen: false,
            name: '',
        };
        this.toggle = this.toggle.bind(this);
        this.changeColorHandler = this.changeColorHandler.bind(this);
        this.SetValuesModalEvent = this.SetValuesModalEvent.bind(this);
        this.FocusOutOnFilter = this.FocusOutOnFilter.bind(this);
        this.SendRateCardToServer = this.SendRateCardToServer.bind(this);
        this.ResetRateCardEvent = this.ResetRateCardEvent.bind(this);

    }

    componentWillMount() {


    
        let Nav = this.props.RateCard.RateCardNavigation;
        let AccessToken = this.props.LoginDetails.accessToken;
        if (Nav.AddRateCard) {
            // this.props.GetRateCardTemplate(AccessToken)
        } else if (Nav.EditRateCard) {
            this.props.GetRateCardSlabsOnID(AccessToken, this.props.RateCard.RateCardId)
        }


    }


    componentDidUpdate() {

        let RateCard = this.props.RateCard
        if (!RateCard.RateCardNavigation.AddRateCard && !RateCard.RateCardNavigation.EditRateCard) {
            this.props.history.goBack();
        }
       

        if (RateCard.RateCardValidations.validateSlabs && RateCard.RateCardValidations.slabsValidationResult === 'success' && RateCard.RateCardValidations.sendRCToServer) {
            let RateCardPayload = {
                "colorIndicator": RateCard.RateCardColor,
                "name": RateCard.RateCardTitle,
                "description": RateCard.RateCardDescription,
                "entries": RateCard.CreateRateCard
            }
            let AccessToken = this.props.LoginDetails.accessToken;
            console.log(" RateCardPayload RateCardPayload RateCardPayload In Main Component:   ");
            console.log(RateCardPayload);
            if (this.props.RateCard.RateCardNavigation.AddRateCard) {
                this.props.SendRateCardDetailsToCreate(AccessToken, RateCardPayload)
            } else if (this.props.RateCard.RateCardNavigation.EditRateCard) {
                // RateCardPayload.indicato = RateCard.RateCardColor;
                RateCardPayload.id = RateCard.RateCardId;
                this.props.SendEditedRateCardDetails(AccessToken, RateCardPayload)
            }
        }
    }

    FocusOutOnFilter() {

        let From = this.props.RateCard.RCfilterFrom;
        let TO = this.props.RateCard.RCfilterTo;
        if (From !== '' && TO !== '') {
            let FromIndx = Math.floor(parseInt(From) / 100);
            let ToIndx = Math.floor(parseInt(TO) / 100)
            FromIndx > 0 && ToIndx > 0 && FromIndx < ToIndx ? this.props.FilterRateCardSlabs(FromIndx, ToIndx) : null
        }
    }

    changeColorHandler(color) {
        console.log(" color is :");
        console.log(color);
        // if(color!=''){
        this.props.SaveCreatingRateCardData(color, 'RateCardColor');
        // }else{
        //     this.props.RatecardWarnings(color, 'please select color');
        // }

    }
    SetValuesModalEvent() {

        var item = JSON.parse(JSON.stringify(this.props.RateCard.CreateRateCard[Math.floor(Math.random() * this.props.RateCard.CreateRateCard.length)]));

        // console.log(" Item ");
        // console.log(item);
        delete item.minValue;
        delete item.maxValue;
        delete item.slabId;
        // delete item.minValue;
        // delete item.maxValue;
        // delete item.slabId;


        this.props.SetValuesModal(item, true)
    }
    toggle() {
        this.setState({
            popoverOpen: !this.state.popoverOpen
        });
    }

    commissionCalculatorEvent(item) {
        if (parseInt(this.props.RateCard.CommissionCalculator.TransactionValue) !== parseInt(item.minValue)) {
            this.props.SetCommissionCalculatorValues(item);
        }
    }

    render() {
        let RateCard = this.props.RateCard.CreateRateCard;
        let CurrentSlabValue = this.props.RateCard.CommissionCalculator.TransactionValue;
        let ValidateSlabs = this.props.RateCard.RateCardValidations.validateSlabs;
        ValidateslabFail = false;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" md="12">
                        <Card>
                            <CardBody>
                                <div >
                                    <Row>
                                        <label className="labelStyleHeadings" style={{ paddingLeft: 15 }}>
                                            {this.props.RateCard.RateCardNavigation.AddRateCard ? 'Add New Rate Card' : 'Edit Rate Card'}</label>
                                    </Row>
                                    <Row>
                                        <Col xs="12" md="1" style={{ paddingRight: 0 }}>
                                            <Label>Indicator {RequireIconForIpFiled()}</Label><br />
                                            <div style={{ display: "inline-flex", width: "50%", height: 35, border: "2px solid lightgray" }}>
                                                <div style={{ paddingTop: 5, paddingLeft: 7 }}>
                                                    <ColorPicker
                                                        animation="slide-up"
                                                        color={this.props.RateCard.RateCardColor}
                                                        padding={10}
                                                        onChange={this.changeColorHandler}
                                                        style={{ padding: 10 }}
                                                    />
                                                    <FormText color="red"> {this.props.RateCard.Ratecardwarnings.colorwarning} </FormText>

                                                </div>
                                            </div>
                                        </Col>
                                        <Col xs="12" md="4" >
                                            <Label>Title {RequireIconForIpFiled()}</Label><br />
                                            <Input
                                                value={this.props.RateCard.RateCardTitle}
                                                onChange={(txt) => {
                                                    this.props.SaveCreatingRateCardData(txt.target.value, 'RateCardTitle');
                                                }}
                                                placeholder="Enter the title"
                                                type="text" />
                                            <FormText color="red"> {this.props.RateCard.RateCardTitle != "" ? "" : this.props.RateCard.Ratecardwarnings.ratecardTitleWarning} </FormText>
                                        </Col>
                                        <Col xs="12" md="7" >
                                            <Label>Description {RequireIconForIpFiled()}</Label><br />
                                            <Input
                                                value={this.props.RateCard.RateCardDescription}
                                                onChange={(txt) => {
                                                    this.props.SaveCreatingRateCardData(txt.target.value, 'RateCardDescription');
                                                }}
                                                placeholder="Enter the description of the Rate card"
                                                type="text" />
                                            <FormText color="red"> {this.props.RateCard.RateCardDescription != "" ? "" : this.props.RateCard.Ratecardwarnings.ratecardDescWarning} </FormText>
                                        </Col>
                                    </Row>

                                    <Row style={{ marginLeft: 1, marginTop: "3%" }}>
                                        <FormText color="red"> {this.props.RateCard.Ratecardwarnings.SlabsWarning} </FormText>
                                    </Row>
                                    <Row style={{ marginLeft: 1 }}>

                                        <div style={{ border: " 1px solid lightgray", borderRadius: 12, width: "45%", marginRight: "6%" }}>


                                            <div style={{ marginBottom: "1%", paddingLeft: 15, background: "#E6E7EC", display: "flex" }}>
                                                <div style={{ display: "flex", width: "50%" }}>
                                                    <Label style={{ marginTop: 15 }}>Show</Label>
                                                    <Input
                                                        value={this.props.RateCard.RCfilterFrom}
                                                        onBlur={this.FocusOutOnFilter}
                                                        onChange={(txt) => {
                                                            let Val = txt.target.value;
                                                            const re = /^[0-9\b]+$/;
                                                            if (Val == '' || re.test(Val)) {
                                                                this.props.FilterRateCardFromAndToValues(Val, 'From');
                                                            }
                                                        }}
                                                        placeholder="100"
                                                        style={{ width: 70, hangingPunctuation: 35, margin: 10 }} />
                                                    <Label style={{ marginTop: 15 }}>-</Label>
                                                    <Input
                                                        value={this.props.RateCard.RCfilterTo}
                                                        onBlur={this.FocusOutOnFilter}
                                                        onChange={(txt) => {
                                                            let Val = txt.target.value;
                                                            const re = /^[0-9\b]+$/;
                                                            if (Val == '' || re.test(Val)) {
                                                                this.props.FilterRateCardFromAndToValues(Val, 'To');
                                                            }
                                                        }}
                                                        placeholder="25000"
                                                        style={{ width: 70, hangingPunctuation: 35, margin: 10 }} />

                                                </div >


                                                <div style={{ display: "flex", width: "50%", justifyContent: "flex-end" }}>
                                                    <button
                                                        onClick={this.SetValuesModalEvent}
                                                        className="buttonStyle Submit"
                                                        style={{}} >Set Values</button>
                                                </div >
                                            </div>
                                            <div >
                                                <Table style={{ textAlign: "end", marginBottom: 0 }}>
                                                    <thead style={{}}>
                                                        <tr>
                                                            {/* borderBottom used to hide border & paddingBottom is used to set avoid bottom padding */}
                                                            <th style={{ border: 0, paddingBottom: 0, width: "15%" }}>Slab</th>
                                                            <th style={{ border: 0, paddingBottom: 0, width: "25%" }}>Rate</th>
                                                            <th style={{ border: 0, paddingBottom: 0, width: "30%" }}>Daily Payout</th>
                                                            <th style={{ border: 0, paddingBottom: 0, width: "30%", textAlign: "center" }}>Monthly Payout</th>
                                                        </tr>
                                                    </thead>
                                                </Table>
                                            </div>
                                            <div>
                                                <Table style={{ textAlign: "center", flex: 1 }}>
                                                    <thead style={{ display: "block", flex: 1 }}>
                                                        <tr>
                                                        </tr>
                                                    </thead>
                                                    <tbody style={{ display: "block", overflowY: "scroll", height: '60vh', flex: 5 }}>
                                                        {RateCard !== undefined || RateCard.length !== 0 ?
                                                            RateCard.map((item, i) => {

                                                                return (
                                                                    <tr
                                                                        onTouchStart={() => console.log("  / / / / // On Touch : ")}
                                                                        onFocus={() => this.commissionCalculatorEvent(item)} key={item.slabId}>


                                                                        <td style={{ borderTop: 0 }}>{<Input value={item.minValue} disabled style={{ textAlign: "center" }} />}</td>
                                                                        <td style={{ borderTop: 0 }}>
                                                                            {<div> <InputGroup style={this.CheckStyles(item.monthlyPayout, ValidateSlabs, CurrentSlabValue === item.minValue, i, 'isLast:no')}>
                                                                                <Input
                                                                                    // style={CheckStyles(item.rate)}
                                                                                    // autoFocus={true}
                                                                                    style={{ width: "35%" }}
                                                                                    value={item.rate}
                                                                                    onChange={(txt) => {
                                                                                        let Val = txt.target.value;
                                                                                        const re = /^[0-9.\b]+$/;
                                                                                        if (Val == '' || re.test(Val)) {
                                                                                            this.props.ChangeRateCardValues(Val, item.slabId, 'rate', i);
                                                                                        }
                                                                                    }}
                                                                                    autofocus />
                                                                                <Input type="select"
                                                                                    // style={{ border: '1 px solid red' }}
                                                                                    style={{ fontSize: 15, background: "#dfdfdf", padding: 0 }}
                                                                                    value={item.rateType}
                                                                                    onChange={(txt) =>
                                                                                        this.props.ChangeRateCardValues(txt.target.value, item.slabId, 'rateType', i)}
                                                                                >
                                                                                    {/* {item.rateTypes.map((item, i) =>
                                                                                    <option value={item.value}>{item.value}</option>
                                                                                )} */}
                                                                                    <option value="%"> %</option>
                                                                                    <option value="Rs"> Rs</option>

                                                                                </Input>
                                                                            </InputGroup>
                                                                            </div>}
                                                                        </td>
                                                                        <td style={{ borderTop: 0 }}>
                                                                            {<div> <InputGroup style={this.CheckStyles(item.dailyPayout, ValidateSlabs, CurrentSlabValue === item.minValue, i, 'isLast:no')}>
                                                                                <Input
                                                                                    style={{ width: "35%" }}
                                                                                    value={item.dailyPayout}
                                                                                    onChange={(txt) => {
                                                                                        let Val = txt.target.value;
                                                                                        const re = /^[0-9.\b]+$/;
                                                                                        if (Val == '' || re.test(Val)) {
                                                                                            this.props.ChangeRateCardValues(Val, item.slabId, 'dailyPayout', i);
                                                                                        }
                                                                                    }}
                                                                                    autofocus />
                                                                                <Input type="select"
                                                                                    value={item.dailyPayoutType}
                                                                                    onChange={(txt) =>
                                                                                        this.props.ChangeRateCardValues(txt.target.value, item.slabId, 'dailyPayoutType', i)}
                                                                                    style={{ fontSize: 15, background: "#dfdfdf", padding: 0 }}>

                                                                                    <option value="%"> %</option>
                                                                                    <option value="Rs"> Rs</option>
                                                                                    {/* {item.dailyPayoutTypes.map((item, i) => {
                                                                                    return <option value={item.value}>{item.value}</option>
                                                                                }
                                                                                )} */}
                                                                                    {/* <option value="10">	&#x20B9;</option>
                                                                                <option value="5">%</option> */}
                                                                                </Input>
                                                                            </InputGroup>
                                                                            </div>}
                                                                        </td>
                                                                        <td style={{ borderTop: 0 }}>
                                                                            {<div> <InputGroup style={this.CheckStyles(item.monthlyPayout, ValidateSlabs, CurrentSlabValue === item.minValue, i, 'isLast:Yes')}>
                                                                                <Input
                                                                                    style={{ width: "35%", textAlign: "center" }}
                                                                                    value={item.monthlyPayout}
                                                                                    onChange={(txt) => {
                                                                                        let Val = txt.target.value;
                                                                                        const re = /^[0-9.\b]+$/;
                                                                                        if (Val == '' || re.test(Val)) {
                                                                                            this.props.ChangeRateCardValues(Val, item.slabId, 'monthlyPayout', i);
                                                                                        }
                                                                                    }}
                                                                                    autofocus />
                                                                                <Input
                                                                                    value={item.monthlyPayoutType}
                                                                                    onChange={(txt) =>
                                                                                        this.props.ChangeRateCardValues(txt.target.value, item.slabId, 'monthlyPayoutType', i)}

                                                                                    type="select" style={{ fontSize: 15, background: "#dfdfdf", padding: 0 }}>
                                                                                    {/* {item.monthlyPayoutTypes.map((item, i) =>
                                                                                    <option value={item.value}>{item.value}</option>
                                                                                )} */}
                                                                                    <option value="%"> %</option>
                                                                                    <option value="Rs"> Rs</option>
                                                                                </Input>
                                                                            </InputGroup>
                                                                            </div>}
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            }
                                                            ) : null}
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </div>
                                        <div style={{ width: "30%" }} >
                                            <CommissionCalculator />
                                        </div>
                                    </Row>

                                    {ValidateSlabs ? this.ValidateSlabsResult() : null}

                                    <Row style={{ paddingLeft: 70 }}>
                                        <div >
                                            <button
                                                onClick={this.SendRateCardToServer}
                                                className="buttonStyle Submit"
                                                style={{}} >Save</button>
                                        </div >
                                        <div >
                                            <button
                                                onClick={this.ResetRateCardEvent}
                                                className="buttonStyle special2"
                                                style={{}} >Reset</button>
                                        </div >

                                        <div >
                                            <button
                                                onClick={() => {
                                                    this.props.CancleEventInRCMain()
                                                    // this.props.history.goBack()
                                                }

                                                }
                                                className="buttonStyle special2"
                                                style={{ width: 100 }}  >Cancel</button>
                                        </div >
                                    </Row>
                                </div>

                                <RateCard_SetValuesModal />
                                <CommissionTableModal />
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div >
        )
    }

    ValidateSlabsResult() {
        let slabsValidationResult = this.props.RateCard.RateCardValidations.slabsValidationResult;

        if ((slabsValidationResult === 'fail' && ValidateslabFail) || (slabsValidationResult === 'success' && !ValidateslabFail)) {
            console.log(" IN if ((this.props.RateCard.CreateRateCard.length - 1) === indx && isLast === 'isLast:Yes') ");
            console.log(ValidateslabFail);
            ValidateslabFail = false;
        } else {
            ValidateslabFail ? this.props.SlabsValidationResult('fail') : this.props.SlabsValidationResult('success');
            ValidateslabFail = false;
        }
    }

    CheckStyles(value, ValidateSlabs, IsCurrentSlab, indx, isLast) {

        if (IsCurrentSlab) {
            if ((value === '' || value === undefined || value === null || value == 0)) {
                ValidateslabFail = true;
                // this.props.RatecardWarnings("Slabs",'Please Fill All Slabs');
                // this.props.RateCard.RateCardValidations.slabsValidationResult === 'fail' ? null : this.props.SlabsValidationResult('fail');
                return {
                    border: '2px solid red',
                    borderRadius: 10,
                    autoFocus: true
                }

            } else return {
                border: '2px solid #fabb3d',
                borderRadius: 10
            }
        }

        if (ValidateSlabs && (value === '' || value === undefined || value === null || value == 0)) {

            ValidateslabFail = true;
            return {
                border: '2px solid red',
                borderRadius: 10,
            }
        } else return null



    }


    ResetRateCardEvent() {
        this.props.ResetRateCardData()
    }


    SendRateCardToServer() {
        console.log("SendRateCardToServer")

        let RateCard = this.props.RateCard;

        if (this.Validate(RateCard)) {

            this.props.ValidateSlabsBeforeSendToServer();

        }

    }
    Validate(RateCard) {
        console.log("SendRateCardToServer  Validate")
        console.log("RateCard" + RateCard)
        let Validate = true;


        // if (RateCard.RateCardColor === '') {
        //     this.props.RatecardWarnings("RateCardColor",'Required RateCardColor ')
        //     Validate = false
        // }
        if (RateCard.RateCardTitle === '') {
            this.props.RatecardWarnings("RateCardTitle", 'Required RateCardTitle ')
            Validate = false
        }

        if (RateCard.RateCardDescription === '') {
            this.props.RatecardWarnings("RateCardDescription", 'Required RateCardDescription ')
            Validate = false
        }

        return Validate;

    }


}
const mapStateToProps = ({ bankManagement, Authentication }) => {
    const { RateCard, RatecardDemo } = bankManagement;
    const { LoginDetails } = Authentication;
    return { RateCard, LoginDetails, RatecardDemo };
};

export default connect(mapStateToProps, {
    GetRateCardTemplate, CommissionCalculatorModal, ChangeRateCardValues,
    SetCommissionCalculatorValues, SaveCreatingRateCardData, FilterRateCardFromAndToValues, SetValuesModal, FilterRateCardSlabs,
    SendRateCardDetailsToCreate, SendEditedRateCardDetails, ResetRateCardData, ValidateSlabsBeforeSendToServer, SlabsValidationResult,
    GetRateCardSlabsOnID, CancleEventInRCMain, RatecardWarnings
})(RateCardMain);



function RequireIconForIpFiled() {
    return <span style={{ color: 'red', marginLeft: 0, font: "bold" }} > *</span>
}