import React, { Component } from 'react';
import {
    Badge, Row, Col, Card, CardHeader, CardBody, Table, Input, FormGroup, FormText,
    Button, Item, Text, H1, Label, Alert, Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import { connect } from 'react-redux';

import {
    GetRateCardData, AddNewRowToRateCard, EditingRateCardAmount,
    EditingRateCardChargesAndInCentive, RemoveRateCardRow, RateCardAmountsError_To_Display, UploadChangedRateCard, ResetApiResultProp
} from '../Transactions/TransactionsAction';


var RateCards = ['Rate1', 'RateCard2', 'RateCard3'];

import { Labelstyle1, InputTextStyle, toTitleCase } from '../../GlobalVars';

class RateCard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AddNewRateCard: false
        }

        this.SaveRateCard = this.SaveRateCard.bind(this);
        this.AddNewRow = this.AddNewRow.bind(this);
        this.AddNewRowToRateCard = this.AddNewRowToRateCard.bind(this);
    }

    componentWillMount() {
        console.log(" IN Component Will Mount Of Rate Card Component Received Props Are   :");
        console.log(this.props.location);
        let Token = this.props.LoginDetails.accessToken;
        this.props.GetRateCardData(Token);
    }

    componentDidUpdate() {
        // if (this.props.RateCard.ApiResult.UpdateRateCardAPiResult === 'success') {
        //     this.props.history.push('/Dashboard');
        //     this.props.ResetApiResultProp();
        // }
        console.log("/ / / / // In    componentDidUpdate  componentDidUpdate   ");
        console.log(this.props.RateCard);

    }

    RateCardTableBody() {
        return this.props.RateCard.RateCardData.map((item, idx) =>
            <tr key={idx} >

                <td  >
                    <div className="input-group"  >
                        <Input
                            maxLength={7}
                            // disabled={this.props.LoginDetails.roleName !== 'Admin'}
                            disabled={true}
                            style={{ textAlign: 'center', marginRight: 5 }}
                            onChange={(e) => this.props.EditingRateCardAmount(e.target.value, idx, 'ownerMinValue')}
                            value={item.ownerMinValue} /> {' TO '}
                        <Input
                            maxLength={7}
                            // disabled={this.props.LoginDetails.roleName !== 'Admin'}
                            disabled={true}
                            style={{ textAlign: 'center', marginLeft: 5 }}
                            onChange={(e) => this.props.EditingRateCardAmount(e.target.value, idx, 'ownerMaxValue')}
                            value={item.ownerMaxValue}
                        />
                    </div>
                </td>

                <td >
                    <div className="input-group">
                        <Input
                            style={{ textAlign: 'right' }}
                            maxLength={5}
                            disabled={this.props.LoginDetails.roleName !== 'Admin'}

                            value={item.ownerFixedRate}
                            onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'ownerFixedRate', item.ownerFixedRateType)}
                        />

                        <Input
                            style={{ height: 40, width: 10, textAlign: 'left', marginRight: 2 }}
                            value={item.ownerFixedRateType}
                            disabled={true}
                            name="selectName" id="selectName">

                        </Input>

                        {' + '}

                        <Input
                            style={{ textAlign: 'right', marginLeft: 2 }}
                            maxLength={5}
                            disabled={this.props.LoginDetails.roleName !== 'Admin'}
                            value={item.ownerVariableRate}
                            onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'ownerVariableRate', item.ownerVariableRateType)}
                        />

                        <Input
                            style={{ height: 40, width: 10, textAlign: 'left' }}
                            value={item.ownerVariableRateType}
                            disabled={true}
                            name="selectName" id="selectName">

                        </Input>

                        {/* <Input
                            style={{ textAlign: 'center', marginLeft: 5 }}
                            maxLength={5}
                            value={item.charges2}
                            onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'charges2', item.chargesType2)}
                        />
                        <div className="input-group-append">

                            <Input bsSize="sm"
                                style={{ height: 40 }}
                                value={item.chargesType2}
                              
                                name="selectName" id="selectName">

                            </Input>
                        </div> */}
                    </div>
                </td>
                {this.props.LoginDetails.roleName === 'Admin' ? <td >
                    <div className="input-group">
                        <Input
                            style={{ textAlign: 'right' }}
                            maxLength={5}
                            value={item.ownerAdditionalFixedIncentive}
                            onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'ownerAdditionalFixedIncentive', item.ownerAdditionalFixedIncentiveType)}
                        />

                        <Input
                            style={{ height: 40, width: 10, textAlign: 'left', marginRight: 2 }}
                            value={item.ownerAdditionalFixedIncentiveType}
                            disabled={true}
                            name="selectName" id="selectName"></Input>

                        {' + '}

                        <Input
                            style={{ textAlign: 'right', marginLeft: 2 }}
                            maxLength={5}
                            value={item.ownerAdditionalVariableIncentive}
                            onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'ownerAdditionalVariableIncentive', item.ownerAdditionalVariableIncentiveType)}
                        />

                        <Input
                            style={{ height: 40, width: 10, textAlign: 'left' }}
                            value={item.ownerAdditionalVariableIncentiveType}
                            disabled={true}
                            name="selectName" id="selectName"> </Input>
                    </div>
                </td> : null}

                {this.props.LoginDetails.roleName !== 'Admin' ?
                    <td >
                        <div className="input-group">
                            <Input
                                style={{ textAlign: 'right' }}
                                maxLength={5}
                                value={item.orgFixedRate}
                                onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'orgFixedRate', 'rs')}
                            />

                            <Input
                                style={{ height: 40, width: 10, textAlign: 'left', marginRight: 2 }}
                                value={item.orgFixedRateType === null || item.orgFixedRateType === undefined ? 'rs' : item.orgFixedRateType}
                                disabled={true}
                                name="selectName" id="selectName"> </Input>

                            {' + '}

                            <Input
                                style={{ textAlign: 'right', marginLeft: 2 }}
                                maxLength={5}
                                value={item.orgVariableRate}
                                onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'orgVariableRate', '%')}
                            />

                            <Input
                                style={{ height: 40, width: 10, textAlign: 'left' }}
                                // value={item.orgVariableRateType}
                                value={item.orgVariableRateType === null || item.orgVariableRateType === undefined ? '%' : item.orgVariableRateType}
                                disabled={true}
                                name="selectName" id="selectName"> </Input>
                        </div>
                    </td> : null}

                {/* <td  >
                    <div className="input-group">
                        <Input style={{ textAlign: 'center', }}
                            maxLength={5}
                            disabled={!this.state.AddNewRateCard}
                            value={item.AdditionalIncentive1}
                            onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'AdditionalIncentive1', item.AdditionalIncentiveType1)}

                        />
                        <div className="input-group-append" style={{ marginRight: 5 }} >

                            <Input bsSize="sm"
                                style={{ height: 40 }}
                                disabled={!this.state.AddNewRateCard}
                                value={item.AdditionalIncentiveType1}
                             
                                name="selectName"
                                id="selectName">

                            </Input>
                        </div> {' + '}
                        <Input style={{ textAlign: 'center', marginLeft: 5 }}
                            maxLength={5}
                            disabled={!this.state.AddNewRateCard}
                            value={item.AdditionalIncentive2}
                            onChange={(e) => this.props.EditingRateCardChargesAndInCentive(e.target.value, idx, 'AdditionalIncentive2', item.AdditionalIncentiveType2)}
                        />
                        <div className="input-group-append">

                            <Input bsSize="sm"
                                style={{ height: 40 }}
                                disabled={!this.state.AddNewRateCard}
                                value={item.AdditionalIncentiveType2}
                               
                                name="selectName" id="selectName">
                            </Input>
                        </div>
                    </div>
                </td> */}
                {/* {this.props.LoginDetails.roleName === 'Admin' ? <td style={{ borderBottom: 0, borderRight: 0 }} >
                    <Button type='button' color="danger" outline
                        onClick={() => this.props.RemoveRateCardRow(idx)}>
                        <i className="fa fa-times" title="CashIn" ></i> </Button>
                </td> : null} */}
            </tr>
        )
    }

    DisplayAmountInputErrors() {
        if (this.props.RateCard.ErrorsInInputAmounts) {
            return this.props.RateCard.AmountInpurErrors.map((item, indx) =>
                <FormText key={indx} color="red">
                    {item}
                </FormText>
            )
        } else return null
    }

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" lg="1" />

                    <Col xs="12" lg="10">
                        <Card>
                            <CardHeader style={{ fontSize: 20 }} >
                                <i className="fa fa-align-justify"></i> Add New Rate Card
                                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <Input type="text"
                                        style={{ width: 250 }}
                                        placeholder="Enter Rate Card Name."
                                        onChange={(txt) =>
                                            console.log(txt.target.value)
                                        } />
                                </div>
                            </CardHeader>
                            <CardBody>
                                {/* <FormText style={{ marginLeft: 20, fontSize: 18 }}
                                > Customer Cost = Amount + Retailer Rate.</FormText> */}
                                <FormText style={{ marginLeft: 20, fontSize: 15 }}
                                    color="red"> {this.props.RateCard.RegexMsg}</FormText>
                                <Table bordered>
                                    <thead>
                                        <tr>
                                            <th>Amount</th>
                                            <th>Charges</th>
                                            {this.props.LoginDetails.roleName === 'Admin' ? <th>Incentives</th> : null}
                                            {this.props.LoginDetails.roleName !== 'Admin' ? <th>Retailer Rate</th> : null}

                                            {/* {this.props.location.state.detail === 'FromAdmin' ?
                                                <th>
                                                    Add New Row
                                                </th> : null} */}

                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* {this.RateCardTableBody()} */}
                                    </tbody>
                                </Table>
                                <FormGroup>

                                    <Row>
                                        <Col md="7">
                                            <FormGroup>
                                                {this.DisplayAmountInputErrors()}
                                                <span style={{ marginLeft: '5%', fontSize: 16, color: 'red' }} >
                                                    {this.props.RateCard.ApiResult.Error}</span>
                                            </FormGroup>
                                        </Col>

                                        {this.props.RateCard.ApiResult.getRateCardFail ? <Button
                                            // style={{ width: 100 }}
                                            onClick={() => {
                                                let Token = this.props.LoginDetails.accessToken;
                                                this.props.GetRateCardData(Token);
                                            }}
                                        > Retry </Button> : <Col md="5">
                                                <Button
                                                    // style={{ width: 100 }}
                                                    onClick={() => {
                                                        let Token = this.props.LoginDetails.accessToken;
                                                        this.props.GetRateCardData(Token);

                                                    }}
                                                > Reset </Button>
                                                <Button
                                                    style={{ marginLeft: 10 }}
                                                    onClick={() => this.CancelClicked()}
                                                >     Cancel     </Button>
                                                <Button
                                                    // hidden={!this.state.AddNewRateCard && this.props.location.state.detail === 'FromRetailer'}
                                                    style={{ marginLeft: 10 }}
                                                    onClick={this.SaveRateCard}
                                                    color="success"> Save Change </Button>
                                            </Col>
                                        }
                                    </Row>

                                </FormGroup>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>



                {this.SuccessModal()}
            </div>
        )
    }

    SuccessModal() {

        return <Modal isOpen={this.props.RateCard.ApiResult.UpdateRateCardAPiResult}
            className={'modal-warning ' + this.props.className}>
            <ModalHeader>SUCCESS..!</ModalHeader>
            <ModalBody>
                <span style={{ fontSize: 20 }} >       Rate Card is Successfully Updated. </span>
            </ModalBody>

            <ModalFooter>

                <Button color="secondary" onClick={() => {
                    this.props.ResetApiResultProp();
                    this.props.history.push('/Dashboard');
                }
                }>OK</Button>
            </ModalFooter>
        </Modal >
    }
    AddNewRowToRateCard() {
        // this.setState(function (state, props) {
        //     return {
        //         AddNewRateCard: !state.AddNewRateCard
        //     }
        // });
        var array = this.props.RateCard.RateCardData;
        var val = array.slice(-1)[0];

        console.log(" Rate Card Last Row IS : ");
        val.ownerMinValue = parseInt(val.ownerMaxValue) + 1;
        val.ownerMaxValue = parseInt(val.ownerMinValue) + 1;
        val.slabId = parseInt(val.slabId) + 1;
        console.log(val);

        this.props.AddNewRowToRateCard(val);
    }

    AddNewRow() {

        console.log(" #  #  #  #  #  #  #  ADD NEw Rate Card :");
        console.log(this.props.RateCard.RateCardData);

        const ArrayLength = this.props.RateCard.RateCardData.length - 1;

        var ItemToAdd = {
            'minAmount': 0,
            'maxAmount': 0,
            'charges1': null,
            'chargesType1': 'P%',
            'charges2': null,
            'chargesType2': 'Rs',
            'AdditionalIncentive1': null,
            'AdditionalIncentiveType1': 'Rs',
            'AdditionalIncentive2': null,
            'AdditionalIncentiveType2': 'Rs',
        }
        this.props.RateCard.RateCardData.map((item, i) => {
            if (i === ArrayLength) {
                ItemToAdd.minAmount = parseInt(item.maxAmount) + 1;
                ItemToAdd.maxAmount = parseInt(item.maxAmount) + 2
            }
        });

        this.props.AddNewRowToRateCard(ItemToAdd)
    }

    CancelClicked() {

        this.props.history.push('/RatecardHome');

    }

    SaveRateCard() {
        var PrevMax;
        var AmountsNotInOrder_Error = [];
        var MaxAmountError = false;

        this.props.RateCard.RateCardData.map((item, idx) => {

            console.log("Min Amount at Row Location : {idx}:" + item.ownerMinValue);
            console.log(item.ownerMinValue)
            console.log("Min Amount at parse int Row Location : {idx}:" + parseInt(item.ownerMinValue));
            console.log(parseInt(item.ownerMinValue))
            console.log("MAX Amount at Row Location : {idx}:" + item.ownerMaxValue);
            console.log(item.ownerMaxValue)
            console.log("MAX Amount at parse int Row Location : {idx}:" + parseInt(item.ownerMaxValue));
            console.log(parseInt(item.ownerMaxValue))


            var Row = idx + 1
            if (idx === 0) {
                PrevMax = item.ownerMaxValue;

                if (!item.ownerMaxValue > item.ownerMinValue) {
                    AmountsNotInOrder_Error.push(' Max Amount Is Less Than Minimum Amount At Row ' + Row);
                    MaxAmountError = true;
                }
            } else {

                if (MaxAmountError) {
                    // console.log(" MaxAmountError Error Occured :" + MaxAmountError);
                }
                else {
                    if (parseInt(item.ownerMinValue) > parseInt(PrevMax)) {
                        var minAmountShouldBe = parseInt(PrevMax) + 1
                        if (minAmountShouldBe !== parseInt(item.ownerMinValue)) {
                            AmountsNotInOrder_Error.push(' Min Amount Should Be ' + minAmountShouldBe + ' At Row' + Row);

                        }

                        if (parseInt(item.ownerMinValue) > parseInt(item.ownerMaxValue)) {
                            AmountsNotInOrder_Error.push(' Max Amount Is Less Than Minimum Amount At Row ' + Row);
                            MaxAmountError = true;
                        }

                    }
                    else {
                        AmountsNotInOrder_Error.push(' Min Amount Is Less Than Previous Row Maximum Amount At Row ' + Row);
                    }

                    PrevMax = item.ownerMaxValue;
                }
            }
        })

        if (AmountsNotInOrder_Error.length === 0) {
            // console.log(" No Errors Amounts Are PErfect In Rate Card: :");
            this.setState(function (state, props) {
                return {
                    AddNewRateCard: !state.AddNewRateCard
                }
            });

            let AccessToken = this.props.LoginDetails.accessToken;

            this.props.UploadChangedRateCard(AccessToken, this.props.RateCard.RateCardData);

        } else {

            this.props.RateCardAmountsError_To_Display(AmountsNotInOrder_Error);
        }
    }
}


const mapStateToProps = ({ Authentication, transaction }) => {
    const { LoginDetails } = Authentication;
    const { RateCard } = transaction;
    return { LoginDetails, RateCard };
};

export default connect(mapStateToProps, {
    AddNewRowToRateCard, EditingRateCardAmount, EditingRateCardChargesAndInCentive,
    GetRateCardData, RemoveRateCardRow, RateCardAmountsError_To_Display, UploadChangedRateCard, ResetApiResultProp
})(RateCard);
