

import {
    // STORE_SELECTED_BANK,
    // STORE_SELECTED_BANK_STATE,
    // STORE_SELECTED_BANK_DISTRICT,
    // STORE_SELECTED_BANK_BRANCH,

    // ACHOLDER_NAME_FIELD_EMPTY,
    // MOBILENO_FIELD_EMPTY,
    // IFSC_FIELD_EMPTY,
    // BANKADDRESS_FIELD_EMPTY,

    // SAVE_BANK_DETAILS_SUCCESSFULLY,
    // SAVE_BANK_DETAILS_FAILURE,

    OPEN_OR_CLOSE_EDIT_BANKDETAILS_MODAL,
    OPEN_OR_CLOSE_DELETE_BANKDETAILS_MODAL,

    STORE_EDITED_BANK_DETAILS_SUCCESSFYLLY,
    STORE_EDITED_BANK_DETAILS_FAILURE,

    GET_ALL_COMMISSIONS,
    GET_ALL_COMMISSIONS_SUCCESS,
    GET_ALL_COMMISSIONS_FAIL,

    GET_COMMISSION_BY_ID,
    GET_COMMISSION_BY_ID_SUCCESS,
    GET_COMMISSION_BY_ID_FAIL,
    DELETE_COMMISSION,
    DELETE_COMMISSION_SUCCESS,
    DELETE_COMMISSION_FAIL,
    ADD_COMMISSION,
    ADD_COMMISSION_SUCCESS,
    ADD_COMMISSION_FAIL,
    NEW_COMMISSION,

    // OTHER_BANK_DETAILS_BUTTON_FROM_ADD_BANK_DETAILS_COMPONENT,

    // STORE_OTHER_BANK_DETAILS_FROM_BANK_DETAILS_COMPONENT,


    GET_RATE_CARD,
    GET_RATE_CARD_SUCCES,
    GET_RATE_CARD_FAIL,

    UPLOAD_CHANGED_RATE_CARD,
    UPLOAD_CHANGED_RATE_CARD_SUCCESS,
    UPLOAD_CHANGED_RATE_CARD_FAIL,

    RESET_API_RESULT_PROP,

    Add_NEW_ROW_TO_RATE_CARD,
    EDIT_RATE_CARD_AMOUNT,
    EDITING_RATE_CARD_CHARGES_AND_INCENTIVE,
    REMOVE_RATE_CARD_ROW,
    RATE_CARD_AMOUNT_ERRORS_TO_DISPLAY,
    GET_BANK_DETAILS_OF_CASHDEPOSIT_SUCCESS,
    GET_RATE_CARDS_LIST_SUCCESS,
    GET_RATE_CARDS_LIST_FAIL,
    OPEN_RATE_CARD_COMP,
    SAVE_RATE_CARD_NAME,
    GET_RATE_CARD_TEMP,
    GET_RATE_CARD_TEMP_SUCCES,
    GET_RATE_CARD_TEMP_FAIL,
    SAVE_DEPOSIT_COMP_IP_DETAILS,
    GET_PENDING_DEPOSITS_LIST,
    GET_PENDING_DEPOSITS_LIST_SUCCESS,
    GET_PENDING_DEPOSITS_LIST_FAIL,
    ACCEPT_PENDING_DEPOSIT_SUCCESS,
    GENERATE_OTP_ON_FSE_DEPOSIT_FAIL,
    GENERATE_OTP_ON_FSE_DEPOSIT_SUCCESS,
    SHOW_RESENT_OTP_OPTION,
    RESET_RATECARD_DATA

} from './Type';

import {
    PE_API_URL, GET_RATE_CARD_URL, ADD_RATECARD, GET_RATE_CARD_TEMPLATE_URL,
} from '../../GlobalVars';
import axios from 'axios';

import { Default_Error_msg } from '../../GlobalVars';


export const OpenOrCloseEditBankDetailsModal = ({ ACHolderName, MobileNO, IFSCCode, BankName, BankState, Sn, BankBranch, BankAddress, BankDist, closeModal }) => {

    console.log(" EditingBankDetails: " + ACHolderName, MobileNO, IFSCCode, BankName, BankState, Sn, BankBranch, BankAddress, BankDist);

    return (dispatch) => {

        dispatch({

            type: OPEN_OR_CLOSE_EDIT_BANKDETAILS_MODAL,
            payload: { ACHolderName, MobileNO, IFSCCode, BankName, BankState, Sn, BankBranch, BankAddress, BankDist, closeModal }

        });
    };
};


export const OpenOrCloseDeleteBankDetailsModalAction = () => {

    return (dispatch) => {
        dispatch({
            type: OPEN_OR_CLOSE_DELETE_BANKDETAILS_MODAL,

        });
    };
};
export const storeEditedBankDetails = ({ EditedValue, Editedfield }) => {
    return (dispatch) => {

        console.log(" IN ACtion:" + EditedValue, Editedfield);

        dispatch({
            type: STORE_EDITED_BANK_DETAILS_SUCCESSFYLLY, payload: { EditedValue, Editedfield }

        });

    }
}

export const getAllCommissions = () => {

    var data = [
        {
            'name': 'Retailer Commission',
            'description': 'Retailers Commission',
        },
        {
            'name': 'FSE Commission',
            'description': 'FSEs Commission',
        },
        {
            'name': 'Example1 Commission',
            'description': 'Example1s Commission',
        },
        {
            'name': 'Example2 Commission',
            'description': 'Example2s Commission',
        },
        {
            'name': 'Example3 Commission',
            'description': 'Example3s Commission',
        },
    ]

    return (dispatch) => {
        dispatch({ type: GET_ALL_COMMISSIONS });

        //try {
        // Axios API Call
        dispatch({
            type: GET_ALL_COMMISSIONS_SUCCESS,
            payload: data

        });
        //}
        // catch{
        //     let errorMsg = "Something went wrong"
        //     dispatch({
        //         type: GET_ALL_COMMISSIONS_FAIL,
        //         payload: errorMsg
        //     });
        // }
    };

};

export const getCommissionById = ({ commissionData }) => {
    console.log('getCommissionById');
    console.log(commissionData);
    var data = { 'commID': '1001', }

    return (dispatch) => {
        dispatch({ type: GET_COMMISSION_BY_ID });

        //try {
        // Axios API Call

        var response =
        {
            'name': 'Retailer Commission',
            'description': 'Retailers Commission',
            'slabs': [
                { 'min': '1000', 'max': '5000', 'rate': '5', 'rateType': '%' },
                { 'min': '5001', 'max': '1000', 'rate': '50', 'rateType': '$' },
                { 'min': '20001', 'max': '3000', 'rate': '10', 'rateType': '%' },
                { 'min': '70001', 'max': '10000', 'rate': '100', 'rateType': '$' }
            ]

        }
        dispatch({
            type: GET_COMMISSION_BY_ID_SUCCESS,
            payload: response

        });
        //}
        // catch{
        //     let errorMsg = "Something went wrong"
        //     dispatch({
        //         type: GET_COMMISSION_BY_ID_FAIL,
        //         payload: errorMsg
        //     });
        // }
    };
}

export const newCommission = () => {

    return (dispatch) => {
        dispatch({ type: NEW_COMMISSION });
    };
}


export const addCommission = () => {

    return (dispatch) => {
        dispatch({ type: ADD_COMMISSION });

        //try {
        // Axios API Call

        var response = "";
        dispatch({
            type: ADD_COMMISSION_SUCCESS,
            payload: response

        });

        //}
        // catch{
        //     let errorMsg = "Something went wrong"
        //     dispatch({
        //         type: ADD_COMMISSION_FAIL,
        //         payload: errorMsg
        //     });
        // }
    };
}

export const deleteCommission = ({ commissionData }) => {
    console.log('getCommissionById');
    console.log(commissionData);
    var data = { 'commID': '1001', }


    return (dispatch) => {
        dispatch({ type: DELETE_COMMISSION });

        //try {
        // Axios API Call

        var response = "";
        dispatch({
            type: DELETE_COMMISSION_SUCCESS,
            payload: response

        });

        //}
        // catch{
        //     let errorMsg = "Something went wrong"
        //     dispatch({
        //         type: DELETE_COMMISSION_FAIL,
        //         payload: errorMsg
        //     });
        // }
    };
}

// export const GetRateCardsList = (Token) => {

//     let URL = PE_API_URL + GET_RATE_CARD_URL;
//     const AuthStr = 'Bearer '.concat(Token);

//     return (dispatch) => {

//         axios.get(URL, {
//             headers: {
//                 'Authorization': AuthStr
//             }
//         }).then(response => {
//             dispatch({
//                 type: GET_RATE_CARDS_LIST_SUCCESS,
//                 payload: response.data.rateCard,
//             });
//         }).catch((error) => {

//             let Errormsg = Default_Error_msg;

//             if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
//                 Errormsg = error.response.data.error;
//             }
//             dispatch({
//                 type: GET_RATE_CARDS_LIST_FAIL,
//                 payload: Errormsg
//             });
//         });

//     };
// }



export const AddOrViewRateCard = (RateCardDetails, AddOrView) => {

    return (dispatch) => {
        dispatch({
            type: OPEN_RATE_CARD_COMP,
            payload: { RateCardDetails, AddOrView }
        });
    }
}



export const GetRateCardData = (Token) => {
    console.log(" TOKEN ON GetRateCardData ACTION : ");
    console.log(Token);
    // Interceptor(Token);

    let URL = PE_API_URL + GET_RATE_CARD_URL;

    return (dispatch) => {

        dispatch({
            type: GET_RATE_CARD,
        });
        const AuthStr = 'Bearer '.concat(Token);

        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(response => {
            console.log(" GET_RATE_CARD_SUCCES Response is:  ")
            console.log(response);
            console.log(response.data);
            dispatch({
                type: GET_RATE_CARD_SUCCES,
                payload: response.data,
            });
        }).catch((error) => {
            let Errormsg = Default_Error_msg;
            if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                Errormsg = error.response.data.error;
            }
            console.log(" error : is :  Errormsg ");
            console.log(Errormsg);
            console.log(error.response);
            dispatch({
                type: GET_RATE_CARD_FAIL,
                payload: Errormsg
            });
        });

    };
}


export const GetRateCardTemplate = (Token) => {

    let URL = PE_API_URL + GET_RATE_CARD_TEMPLATE_URL;

    return (dispatch) => {

        dispatch({
            type: GET_RATE_CARD_TEMP,
        });
        const AuthStr = 'Bearer '.concat(Token);

        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(response => {
            console.log(" Response ON Get RateCard TEmplate : ");
            console.log(response);
            dispatch({
                type: GET_RATE_CARD_TEMP_SUCCES,
                payload: response.data,
            });
        }).catch((error) => {

            let Errormsg = Default_Error_msg;
            if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                Errormsg = error.response.data.error;
            }

            dispatch({
                type: GET_RATE_CARD_TEMP_FAIL,
                payload: Errormsg
            });
        });

    };
}

export const AddNewRowToRateCard = (ItemToAdd) => {

    // item.isaddedNow = true;

    return (dispatch) => {
        dispatch({
            type: Add_NEW_ROW_TO_RATE_CARD,
            payload: ItemToAdd

        });
    }
}

export const EditingRateCardAmount = (value, ind, field) => {

    console.log(" VAlues IN Action :" + value, ind, field);

    return (dispatch) => {
        dispatch({
            type: EDIT_RATE_CARD_AMOUNT,
            payload: { value, indx: ind, field }

        });
    }
}

export const EditingRateCardChargesAndInCentive = (value, indx, field, chargesType) => {

    return (dispatch) => {
        dispatch({
            type: EDITING_RATE_CARD_CHARGES_AND_INCENTIVE,
            payload: { value, indx, field, chargesType }

        });
    }
}

export const RemoveRateCardRow = (indx) => {
    console.log(" Index value in Action Is:" + indx);
    return (dispatch) => {
        dispatch({
            type: REMOVE_RATE_CARD_ROW,
            payload: indx
        })
    }
}

export const RateCardAmountsError_To_Display = (ErrorsArray) => {
    console.log(" In Action Displaying Errors :");
    console.log(ErrorsArray);

    return (dispatch) => {
        dispatch({
            type: RATE_CARD_AMOUNT_ERRORS_TO_DISPLAY,
            payload: ErrorsArray
        })
    }
}

export const AddNewRateCardDetails = (AccessToken, RatecardData) => {

    const AuthStr = 'Bearer '.concat(AccessToken);
    const url = PE_API_URL + ADD_RATECARD

    console.log(" JSON.stringify(RatecardData)");
    console.log(JSON.stringify(RatecardData));
    console.log(RatecardData);

    return (dispatch) => {

        dispatch({
            type: UPLOAD_CHANGED_RATE_CARD,

        });

        axios({
            method: 'POST',
            headers: {
                'Authorization': AuthStr,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(RatecardData),
            url,
        })
            .then(function (response) {

                console.log(" On Success Upload .");
                console.log(response);

                dispatch({
                    type: UPLOAD_CHANGED_RATE_CARD_SUCCESS,
                    // payload: { response: response.data, mobileNo }
                });

            })
            .catch(function (error) {

                let Errormsg = Default_Error_msg;
                if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                    Errormsg = error.response.data.error;
                }

                console.log("On reate card upload fail :");
                console.log(error.response);

                dispatch({
                    type: UPLOAD_CHANGED_RATE_CARD_FAIL,
                    payload: Errormsg
                });

            });

    }
}







export const UploadChangedRateCard = (AccessToken, NewRateCard) => {

    const AuthStr = 'Bearer '.concat(AccessToken);
    console.log(" UploadChangedRateCard UploadChangedRateCard Action  ");
    console.log(AccessToken);
    console.log(NewRateCard);

    const url = PE_API_URL + ADD_RATECARD

    return (dispatch) => {

        dispatch({
            type: UPLOAD_CHANGED_RATE_CARD,

        });


        axios({
            method: 'POST',
            headers: {
                'Authorization': AuthStr,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(NewRateCard),
            url,
        })
            .then(function (response) {

                dispatch({
                    type: UPLOAD_CHANGED_RATE_CARD_SUCCESS,
                    // payload: { response: response.data, mobileNo }
                });

            })
            .catch(function (error) {

                let Errormsg = Default_Error_msg;
                if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                    Errormsg = error.response.data.error;
                }

                console.log("On reate card upload fail :");
                console.log(error.response);

                dispatch({
                    type: UPLOAD_CHANGED_RATE_CARD_FAIL,
                    payload: Errormsg
                });

            });

    }
}

export const ResetApiResultProp = () => {
    return (dispatch) => {
        dispatch({
            type: RESET_API_RESULT_PROP

        })
    }
}

export const SaveRateCardName = (Name) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_RATE_CARD_NAME,
            payload: Name
        })
    }
}

export const GetBankDetailsOfDepositCash = () => {


    var BankS = [{
        bankName: 'HDFC',
        ifsc: 'HDFC10023',
        acNo: '96325874123211',
        bankBranch: 'Kukatpally,Hyderabad,Telangana'
    },
    {
        bankName: 'HDFC',
        ifsc: 'HDFC10023',
        acNo: '96325874155555',
        bankBranch: 'Kukatpally,Hyderabad,Telangana'
    },
    {
        bankName: 'ICICI',
        ifsc: 'ICICI10088',
        acNo: '8523697412365',
        bankBranch: 'Dharmavaram,Anantapur,AP(515101)'
    },
    {
        bankName: 'YES Bank',
        ifsc: 'YES10023',
        acNo: '74125896325412',
        bankBranch: 'Bhavani Nagar,Tirupathi,AP(561203)'
    },
    {
        bankName: 'Panjab National Bank Corporation.',
        ifsc: 'PNB010023',
        acNo: '74125896325412',
        bankBranch: 'Sarur Nagar Street,Panjab ,Panjab(561203)'
    }
    ]

    return (dispatch) => {
        dispatch({
            type: GET_BANK_DETAILS_OF_CASHDEPOSIT_SUCCESS,
            payload: BankS

        })
    }
}

export const SaveDepositCompIpDetails = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_DEPOSIT_COMP_IP_DETAILS,
            payload: { value, field }

        })
    }
}

export const GetPendingDeposits = (AccessToken, offset, limit, searchText) => {
    let OrgType_Id = 2;

    let url = PE_API_URL + "" + OrgType_Id + '/' + offset + '/' + limit + '/' + searchText;
    let Token = 'Bearer ' + AccessToken

    const DATA = [{
        trasId: 'APV4521252',
        depType: 'CashDeposit',
        amount: '10000',
        bank: 'HDFC',
        branch: 'Weat Maredpally',
        fseName: null,
        depositslip: null
    }, {
        trasId: null,
        depType: 'fse',
        amount: '10000',
        bank: null,
        branch: null,
        fseName: 'Prashanth Yejje',
        depositslip: null
    }, {
        trasId: 'APV4521251',
        depType: 'CashDeposit',
        amount: '25000',
        bank: 'ICICI',
        branch: 'panjagutta',
        fseName: null,
        depositslip: null
    },
    ];

    return (dispatch) => {

        // dispatch({
        //     type: GET_PENDING_DEPOSITS_LIST
        // });

        // axios({
        //     url,
        //     method: 'POST',
        //     headers: {
        //         'Authorization': Token,
        //         'Content-Type': 'application/json'
        //     },
        // }).then(function (response) {

        // let Data = response.data.unapprovedOrganizations
        dispatch({
            type: GET_PENDING_DEPOSITS_LIST_SUCCESS,
            payload: DATA
        });
        // }).catch(function (error) {

        //     dispatch({
        //         type: GET_PENDING_DEPOSITS_LIST_FAIL,
        //         payload: "Login Failed!"
        //     });
        // });
    }
}


export const AcceptDepositRequest = (AccessToken, trasId) => {

    return (dispatch) => {

        let MSG = 'Deposit Accepted Successfully.'
        dispatch({
            type: ACCEPT_PENDING_DEPOSIT_SUCCESS,
            payload: MSG
        })
    }

}


export const GenerateOTPtoFSE = (amount) => {


    return (dispatch) => {
        dispatch({
            type: GENERATE_OTP_ON_FSE_DEPOSIT_SUCCESS
        })
    }
}



export const OptionToResentOTP = () => {

    return (dispatch) => {
        dispatch({
            type: SHOW_RESENT_OTP_OPTION
        })
    }

}