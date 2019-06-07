
import React, { Component } from 'react';
import {
    Row, Col, Card, CardHeader, CardBody, Table,
    Button, Form, FormGroup,
    FormText, Label, Input, Collapse, Item, Text, Alert,
    Modal, ModalBody, ModalFooter, ModalHeader
} from 'reactstrap';

import 'spinkit/css/spinkit.css';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { connect } from 'react-redux';
// export var ModalAfterApiCall = function () {
//     console.log(" In > > > > >  >> > > > > > > >  ModalAfterApiCall > > > > > > > >   ");
//     console.log(this.props.values);

//     return <Card>
//         <CardHeader>
//             From ModalAfterApiCall
//         </CardHeader>
//     </Card>

// }

import { SpinnerModalStyles, SpinnerCss } from '../GlobalVars';
// import Modal from 'react-modal';
import { ClipLoader } from 'react-spinners';
import Spinner from 'reactjs-simple-spinner'

var emptyList = require('../../public/img/norecordfound.png');
var DefaultProfilePic = require('../../public/img/DefaultProfilePic.jpg');

import { RemoveApiSuccessOrFailureFooterView, clearResponseOnORGApis } from '../views/UsersManagement/UserManagementAction';

import { ResetApiResultProp } from '../views/Transactions/TransactionsAction'

class GlobalModals extends React.Component {


    constructor(props) {
        super(props);

        this.state = {
            Display: true
        };
    }

    render() {
        return this.SuccessORFailView()
    }
    SuccessORFailView() {
        if (this.props.OrganizationDetails.OrgApiResults.SuccessOnSubmitOrgDetail) {

            // return <div style={{
            //     backgroundColor: '#32CD32',
            //     marginLeft: '20%', marginTop: '5%',
            //     //  borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
            //     marginBottom: 0,
            //     textAlign: 'center'
            // }}            >
            //     <span style={{ color: 'white', fontSize: 20 }}> User IS Successfully Registered. &#10003;</span>
            //     {this.TimeInterval()}
            // </div>
            return <Modal size="lg" isOpen={this.props.OrganizationDetails.OrgApiResults.SuccessOnSubmitOrgDetail}
                className={'modal-success ' + this.props.className}>
                <ModalHeader>Success..!</ModalHeader>

                <ModalBody >
                    <span style={{ marginLeft: '5%', fontSize: 16, }} >
                        Added New Organization Successfully. </span>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={() => { this.props.clearResponseOnORGApis() }}>OK</Button>
                </ModalFooter>
            </Modal>
        }
        // else if (this.props.RateCard.ApiResult.UpdateRateCardAPiResult === 'success') {

        //     return <ReactCSSTransitionGroup
        //         transitionName="slide"
        //         transitionAppear={true}
        //         transitionAppearTimeout={500}
        //         transitionEnterTimeout={500}
        //         transitionLeaveTimeout={500}>
        //         <div style={{
        //             // backgroundColor: '#32CD32',
        //             marginLeft: '20%', marginTop: '5%',
        //             //  borderTopLeftRadius: 10, borderBottomLeftRadius: 10,
        //             marginBottom: 0,
        //             textAlign: 'center'
        //         }}            >
        //             <Alert color="success" style={{ font: 25 }}
        //                 isOpen={true} toggle={this.onDismiss}
        //             >
        //                 Rate Card is Success Fully Updated.
        //         </Alert>

        //             {this.RateCardInterval()}
        //         </div>
        //     </ReactCSSTransitionGroup>

        // }
        // else 
        return null

    }

    // RateCardInterval() {
    //     setTimeout(
    //         function () {
    //             this.props.ResetApiResultProp();
    //         }
    //             .bind(this),
    //         15000
    //     );
    // }
    TimeInterval() {
        console.log(" /         /           /           /             /             /   TimeInterval /          /             /            /             /  ");

        setTimeout(console.log(" Hello This is setTimeout"), 10000);
        setTimeout(
            function () {
                this.props.RemoveApiSuccessOrFailureFooterView();
            }
                .bind(this),
            10000
        );
    }
}


const mapStateToProps = ({ userManagementReducer, transaction }) => {
    const {
        UserDetails, OrganizationDetails } = userManagementReducer;
    const { RateCard } = transaction;

    return {

        OrganizationDetails, UserDetails, RateCard
    };

};

export default connect(mapStateToProps, {
    RemoveApiSuccessOrFailureFooterView, ResetApiResultProp, clearResponseOnORGApis
})(GlobalModals);



export function EmptyListImage(OrgApiResults, OrgList) {

    // console.log(" In EmptyListImage Of   GlobalModals  props data is : ");


    if (OrgApiResults) {
        console.log(" if (props.getOrgListSuccess) success ")
        if (OrgList.length === 0) {
            console.log(" if (props.getOrgListSuccess) success ")
            return <img style={{ marginLeft: '20%' }} src={emptyList} />
        } else return null;
    } else return null;

}

export function ModalOnMoneyTransferComp(propVal) {

    return <Modal
        isOpen={propVal}
        style={SpinnerModalStyles}
    >
        {/* <ClipLoader
            className={SpinnerCss}
            size={150}
            color={'#ffa500'}
            loading={propVal}
        /> */} 
         <Spinner size="huge" message="Loading..." />

    </Modal>
}

export function DisplayProfilePic(Base64) {

    return <img style={{ borderRadius: '50%', height: 50, width: 50 }}
        // src={img}
        src={  Base64 ==undefined ? DefaultProfilePic: "data:image/jpg;base64," + Base64  }
    />
}

export function DisplaySpinner() {

    return  <div className="sk-fading-circle">
                <div className="sk-circle1 sk-circle"></div>
                <div className="sk-circle2 sk-circle"></div>
                <div className="sk-circle3 sk-circle"></div>
                <div className="sk-circle4 sk-circle"></div>
                <div className="sk-circle5 sk-circle"></div>
                <div className="sk-circle6 sk-circle"></div>
                <div className="sk-circle7 sk-circle"></div>
                <div className="sk-circle8 sk-circle"></div>
                <div className="sk-circle9 sk-circle"></div>
                <div className="sk-circle10 sk-circle"></div>
                <div className="sk-circle11 sk-circle"></div>
                <div className="sk-circle12 sk-circle"></div>
            </div> 
}



