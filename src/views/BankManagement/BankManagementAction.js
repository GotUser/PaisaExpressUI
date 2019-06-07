import {
    APPROVE_DEPOSIT_SUCCESS,
    APPROVE_DEPOSIT_FAIL,
    GET_DEPOSITS_DETAILS_FROM_DB_SUCCESS,
    GET_DEPOSITS_DETAILS_FROM_DB_FAIL,
    GET_DEPOSIT_MODE_LISTS_SUCCESS,
    GET_DEPOSIT_MODE_LISTS_FAIL,
    GET_ALL_DEPOSITS_FROM_DB_SUCCESS,
    GET_ALL_DEPOSITS_FROM_DB_FAIL,
    GET_CDM_STUCK_DETAILS_SUCCESS,
    GET_CDM_STUCK_DETAILS_FAIL,
    GET_ALL_CDM_STUCK_LIST_FAIL,
    GET_ALL_CDM_STUCK_LIST_SUCCESS,
    SEND_SLIP_DETAILS_TO_DB,
    SEND_SLIP_DETAILS_TO_DB_SUCCESS,
    SEND_SLIP_DETAILS_TO_DB_FAIL,
    SAVE_PROGRESS_INDICATOR_STATUS,
    SAVE_PROGRESS_INDICATOR_STATUS_FALSE,
    SAVE_DEPOSIT_SLIP_DETAILS_TENANT,
    SAVE_DEPOSIT_SLIP_DETAILS_TENANT_WARNINGS,
    SAVE_DEPOSIT_SLIP_DETAILS,
    SAVE_DEPOSIT_SLIP_DETAILS_WARNINGS,
    RESET_DEPOSIT_SLIP_COMPONENT,
    SAVE_DEPOSIT_SLIP_LIST_ITEMS,
    GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS,
    GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS_TENANT,
    APPROVE_DEPOSIT_SLIP_SUCCESS,
    GET_DEPOSITED_DETAILS_FROM_DB_SUCCESS,
    SEND_DEPOSIT_SLIP_DETAILS_TO_DB_SUCCESS,
    SEND_DEPOSIT_SLIP_DETAILS_TO_DB_FAIL,
    GET_DEPOSITED_SLIP_SUCCESS,
    GET_DEPOSITED_SLIP_TENANT_SUCCESS,


    MONEY_TRANSFER_INITIAL_LOAD,
    GET_CUSTOMER_INFO_SUCCESS,
    GET_CUSTOMER_INFO,
    GET_CUSTOMER_INFO_FAIL,
    SAVE_BENE_INFO,
    SAVE_BENE_INFO_SUCCESS,
    SAVE_BENE_INFO_FAIL,
    REMOVE_BENEFICIARY,
    REMOVE_BENEFICIARY_SUCCESS,
    REMOVE_BENEFICIARY_FAIL,

    SEND_MONEY_TRANSFER_DETAILS,
    SEND_MONEY_TRANSFER_DETAILS_SUCCESS,
    SEND_MONEY_TRANSFER_DETAILS_FAIL,

    MONEY_TRANSFER_MOBILE_ONCHANGE,
    MONEY_TRANSFER_CUSTOMER_EDIT_ONCHANGE,

    SAVE_CUSTOMER_IP_DETAILS,
    WARNINGS_ON_CUSTOMER_IP_DETAILS,

    SEND_CUSTOMER_INFORMATIN,
    SEND_CUSTOMER_INFORMATIN_SUCCESS,
    SEND_CUSTOMER_INFORMATIN_FAIL,

    UPDATE_CUSTOMER_INFORMATIN,
    UPDATE_CUSTOMER_INFORMATIN_SUCCESS,
    UPDATE_CUSTOMER_INFORMATIN_FAIL,





    ALLOW_USER_TO_ENTER_CUSTOMER_DETAILS,
    RESET_CUSTOMER_DETAILS,
    CUSTOMER_SAVE_SUCCESS,
    PROCESS_MONEY_TRANSFER,

    CHANGE_BENI_VALUES_ON_TRANSFER,

    CHECK_VALIDATE_BENI_BEFORE_ADD,

    SET_BANK_DETAILS_SUCCESS,
    ON_BENEFICIARY_EDIT,

    OPEN_MONEY_TRANSFER_OR_SCHEDULE_MODAL,
    OPEN_SCHEDULE_MONEY_TRANSFER_MODAL,
    CACLE_MODALS_IN_DISPLAY_BENI_LIST_COMP,
    CLEAR_API_RESPONSE_IN_MONEY_TRANSFER_COMP,

    GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL,
    GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL_FAIL,
    GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL_SUCCESS,
    OPEN_REMOVE_BENE_MODAL,
    CLOSE_REMOVE_BENE_MODAL,
    CLEAR_API_SUCCESS_IN_MONEY_TRASFER_COMP,
    CLEAR_MONEY_TRASFER_SUCCESS_RESPONSE,
    CLEAR_API_RESPONSE_ON_CUST_DETAILS,
    GET_ALL_MNY_TRANSFER_APIS,
    GET_ALL_MNY_TRANSFER_APIS_SUCCESS,
    GET_ALL_MNY_TRANSFER_APIS_FAIL,
    // CLEAR_API_RESPONSE_ON_BENE,

    //apis
    SAVE_API_DETAILS,
    SAVE_API_DETAILS_WARNINGS,
    SAVE_EDIT_API,
    CLOSE_ADD_OR_EDIT_API_MODAL,
    OPEN_ADD_OR_EDIT_API_MODAL,
    EDIT_API_SUCCESS,
    ADD_NEW_API_SUCCESS,
    GET_ALL_API_SUCCESS,
    ACTIVATE_OR_INACTIVATE_API,
    ACTIVATE_OR_INACTIVATE_API_SUCCESS,
    ACTIVATE_OR_INACTIVATE_API_FAIL,
    OPEN_ACT_OR_INACT_API_MODAL,
    CLOSE_ACT_OR_INACT_API_MODAL,
    EDIT_API_FAIL,
    SAVE_CUSTOMER_MOBILE_NUMBER,
    GET_CUSTOMER_INFORMATION_SUCCESS,
    GET_RECENT_TRASACTIONS,
    GET_CUSTOMER_INFORMATION_FAIL,
    GET_RECENT_TRASACTIONS_SUCCESS,
    GET_RECENT_TRASACTIONS_FAIL,
    SAVE_CUSTOMER_INFO,
    GET_MT_PAGE_INITIAL_DATA_SUCCESS,
    WARNINGS_ON_SAVE_CUSTOMER_IP_DETAILS,
    WARNING_ON_SAVE_CUSTOMER_MOBILE_NO,
    REGISTER_CUSTOMER_INFO_SUCCESS,
    REGISTER_CUSTOMER_INFO_FAIL,
    CUSTOMER_NOT_EXIST,
    GET_CUSTOMER_TEMPLATE_SUCCESS,
    GET_BENEFICIARY_TEMPLATE_SUCCESS,
    GET_BENEFICIARY_TEMPLATE_FAIL,
    OTP_VERIFICATION_ON_ADD_BENE_SUCCESS,
    OTP_VERIFICATION_ON_ADD_BENE_FAIL,
    CONTINUE_TO_ADD_BENEFICIARY,
    EDIT_CUSTOMER_INFORMATION_CLICKED,
    BACK_TO_DISPLAY_CUSTOMER_INFO,
    UPDATE_CUSTOMER_INFO_SUCCESS,
    UPDATE_CUSTOMER_INFO_FAIL,
    SAVE_BENEFICIARY_INFO,
    GET_BANKS_BY_IFSC_SUCCESS,
    GET_BANKS_BY_IFSC_FAIL,
    GET_STATES_LIST_SUCCESS,
    GET_STATES_LIST_FAIL,
    GET_STATES_CITIES_LIST_SUCCESS,
    GET_BANK_BRANCHES_LIST_SUCCESS,
    GET_BANK_BRANCHES_LIST_FAIL,
    GET_BANK_IFSC_ON_SEARCH_SUCCESS,
    GET_BANK_IFSC_ON_SEARCH_FAIL,
    IFSC_SEARCH_MODAL,
    SAVE_SELECTED_BRANCH_ID,
    CLEARE_BENE_BANK_DETAILS_IN_SEARCH_MODAL,
    WARNINGS_ON_BENE_IP_DETAILS,
    REGISTER_BENE_INFO_SUCCESS,
    REGISTER_BENE_INFO_FAIL,
    RESET_ADD_BENE_FORM,
    CLOSE_BENE_FORM,
    DELETE_BENEFICIARY_SUCCESS,
    DELETE_BENEFICIARY_FAIL,
    CHANGE_BENE_DELETE_SUCCSS_PARAM_TO_FALSE,
    ENABLE_BENE_NOT_VERIFIED_MODAL,
    DISABLE_BENE_NOT_VERIFIED_MODAL,
    PROCEED_TO_TRASACTION_DETAILS,
    SEARCH_BENE_SUCCESS,
    SEARCH_BENE_FAIL,
    SAVE_MT_TRANS_DETAILS,
    MONEY_TRANSFER_REQUEST_SUCCESS,
    MONEY_TRANSFER_REQUEST_FAIL,
    CANCLE_IN_TRANS_DETAILS,
    CANCLE_THE_MT_COMPLETE_TRANSACTION,
    SAVE_OTP_AFTER_TRANSFER_REQUEST,
    MONEY_TRASFER_OTP_VERIFY_SUCCESS,
    MONEY_TRASFER_OTP_VERIFY_FAIL,
    GET_ALL_RATECARDS_SUCCESS,
    GET_ALL_RATECARDS_FAIL,
    DELETE_RATE_CARD_SUCCESS,
    DELETE_RATE_CARD_FAIL,
    CHANGE_PAGE_SIZE_IN_RATE_CARD_HOME,
    SEARCH_RATE_CARD_SUCCESS,
    SEARCH_RATE_CARD_FAIL,
    SAVE_CUSTOMER_VERIFY_OTP,
    GET_RATE_CARD_TEMPLATE_SUCCESS,
    GET_RATE_CARD_TEMPLATE_FAIL,
    NAVIGATE_TO_RATE_CARD_MAIN,
    COMMISSION_CALCULATOR_MODAL,
    SELECT_IFSC_ON_SEARCH_RESULT,
    CHANGE_RATE_CARD_VALUES,
    CANCLE_ON_BENE_OTP_VERIFICATION,
    SET_COMMISSION_CALCULATOR_VALUES,
    RATE_CARD_INITIAL,
    SAVE_CREATING_RATE_CARD_DATA,
    SAVE_FILTER_RATE_CARD_FROM_AND_TO_VALUES,
    SET_VALUES_MODAL_IN_RATE_CARD,
    FILTER_RATE_CARD_SLABS,
    SAVE_RATE_CARD_VALUES_FROM_MODAL,
    SET_VALUES_TO_RATE_CARD_SLABS,
    CREATE_NEW_RATE_CARD_SUCCESS,
    CREATE_NEW_RATE_CARD_FAIL,
    GET_RATE_CARD_SLABS_SUCCESS,
    GET_RATE_CARD_SLABS_FAIL,
    UPDATE_RATE_CARD_SUCCESS,
    UPDATE_RATE_CARD_FAIL,
    RESET_RATE_CARD_DATA,
    VALIDATE_SLABS_BEFORE_SEND_TO_SERVER,
    SLABS_VALIDATION_RESULT,
    CANCLE_EVENT_IN_RC_MAIN,

    RATE_CARD_WARNINGS,
    GET_ADDITIONAL_CHARGES_IN_MT_SUCCESS,
    GET_ADDITIONAL_CHARGES_IN_MT_FAIL,
    VERIFY_BENE_BEFORE_ADD,
    VERIFY_BENE_BEFORE_ADD_SUCCESS,
    VERIFY_BENE_BEFORE_ADD_FAIL,
    CLOSE_MODAL_OF_VERIFY_BENE_BEFORE_ADD,
    CONFIRM_FROM_BENE_VALIDATION_SUCCESS,




} from "./Types";

import { Interceptor } from '../axiosInterceptor';
import axios from 'axios';

import {
    PE_API_URL, GET_CUSTOMER_OF_MNY_TRANSFER_COMP, ADD_CUSTOMER_OF_MNY_TRANSFER_COMP, ADD_BENE_OF_MNY_TRANSFER_COMP,
    DELETE_BENE, EDIT_CUSTOMER_INFO, SEND_MONEY_TRASFER_DETAILS, GET_SLAB_RATE_FOR_AMOUNT,
    GET_ALL_MONEY_TRANSFER_APIS, GET_APIS_LIST, ADD_NEW_API, UPDATE_API, ACT_OR_INACT_API,
    // MoneyTrasfer Final
    CUSTOMER_,
    BENEFICIARY_,
    BANKS_,
    MONEYTRANSFER_,
    RATECARD_,
    REPORTS_,
    DEPOSIT_SLIP,
    CDM,
    TENANT_DEPOSIT

} from '../../GlobalVars';
import { GET_STATES_OF_SELECTED_BANK_FAIL } from "../UsersManagement/Types";

export const ifscSearchModal = ({ value }) => {
    return (dispatch) => {
        dispatch({
            type: IFSC_SEARCH_MODAL,
            payload: value
        });
    };
}


export const moneyTransferInitialLoad = () => {
    return (dispatch) => {
        dispatch({
            type: MONEY_TRANSFER_INITIAL_LOAD
        });
    };
}

export const onCustomerMobileNoChanged = ({ mobileNo }) => {
    return (dispatch) => {
        dispatch({
            type: MONEY_TRANSFER_MOBILE_ONCHANGE,
            payload: mobileNo
        });
    };
}

export const onCustomerEditChanged = ({ field, value }) => {
    let data = {
        fieldName: field,
        fieldValue: value
    }
    console.log("onCustomerEditChanged")
    console.log(data)
    return (dispatch) => {
        dispatch({
            type: MONEY_TRANSFER_CUSTOMER_EDIT_ONCHANGE,
            payload: data
        });
    };
}

export const SaveCustomerIPDetails = (val, field) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_CUSTOMER_IP_DETAILS,
            payload: { val, field }
        });
    };
}

export const WarningsOnCustomerIPDetails = (val, field) => {

    return (dispatch) => {
        dispatch({
            type: WARNINGS_ON_CUSTOMER_IP_DETAILS,
            payload: { val, field }
        });
    };

}

export const AllowUserTo_EnterCustomer_Details = () => {
    return (dispatch) => {

        dispatch({ type: ALLOW_USER_TO_ENTER_CUSTOMER_DETAILS });

    };
}

export const ResetCustomerDetails = () => {
    return (dispatch) => {


        dispatch({ type: RESET_CUSTOMER_DETAILS });

    };
}

export const ClearApiResponseOnCust_Details = () => {
    return (dispatch) => {

        dispatch({ type: CLEAR_API_RESPONSE_ON_CUST_DETAILS });

    };
}

export const newCustomerSave = ({ customerInfo }) => {
    console.log("In Action newCustomerClick");
    console.log(customerInfo);
    return (dispatch) => {
        dispatch({
            type: CUSTOMER_SAVE_SUCCESS,
            payload: customerInfo
        });
    };
}

export const GetCustomerInformation = ({ mobileNo, AccessToken }) => {

    console.log("  GET_CUSTOMER_OF_MNY_TRANSFER_COMP is ");
    console.log(GET_CUSTOMER_OF_MNY_TRANSFER_COMP);

    console.log(AccessToken);
    console.log(mobileNo);


    let URL = PE_API_URL + GET_CUSTOMER_OF_MNY_TRANSFER_COMP + mobileNo;

    return (dispatch) => {

        dispatch({
            type: GET_CUSTOMER_INFO,
        });

        axios.get(URL,
            {
                crossdomain: true,
                withCredentials: true,
                credentials: 'same-origin',
                mode: 'no-cors',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer '.concat(AccessToken)
                }
            }
        ).then(response => {

            console.log(" response On GET Customer Details :  ");
            console.log(response);

            const GetSuctomerRes = response.data;

            dispatch({
                type: GET_CUSTOMER_INFO_SUCCESS,
                payload: GetSuctomerRes,
            });
        }).catch((error) => {

            console.log(" Error Response on GET Customer Details:");
            console.log(error.response);

            var GetCust_Error;

            // if (error.response.status === 400) {

            //     if (error.response.data.error === 'Customer not found with the given mobile number.') {

            //         GetCust_Error = 'Please enter customer details to proceed.';
            //     }

            // }

            dispatch({
                type: GET_CUSTOMER_INFO_FAIL,
                payload: GetCust_Error
            });
        });

    };

}

export const SendCustomerInfo = (AccessToken, customerData) => {

    console.log(" Customer Details To SAve IN DB");
    console.log(customerData);

    const url = PE_API_URL + ADD_CUSTOMER_OF_MNY_TRANSFER_COMP;

    return (dispatch) => {
        dispatch({ type: SEND_CUSTOMER_INFORMATIN });

        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: customerData
        }).then(function (response) {
            let Data = response.data;
            console.log(" Send Customer Info Success Response Is :    :  :  : : : ");
            console.log(response);
            dispatch({
                type: SEND_CUSTOMER_INFORMATIN_SUCCESS,
                payload: { customerData, Data }
            });
        }).catch(function (error) {
            console.log(" Error response  In  SendUserDetailsToDB is:  " + error);
            console.log(error);
            console.log(error.response);

            dispatch({
                type: SEND_CUSTOMER_INFORMATIN_FAIL,
                payload: "Login Failed!"
            });
        });

    };

}

export const UpdateCustomerInfo = (AccessToken, customerData) => {

    const url = PE_API_URL + EDIT_CUSTOMER_INFO;

    console.log("Editing Cust Info   customerData customerData ");
    console.log(customerData);

    return (dispatch) => {
        dispatch({ type: UPDATE_CUSTOMER_INFORMATIN });

        axios({
            url,
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: customerData
        }).then(function (response) {
            let Data = response.data;

            console.log(" UPDATE Customer Info Response Is :    :  :  : : : ");
            console.log(response);
            dispatch({
                type: UPDATE_CUSTOMER_INFORMATIN_SUCCESS,
                payload: { customerData, Data }
            });
        }).catch(function (error) {
            console.log(" Error response  In  SendUserDetailsToDB is:  " + error);
            console.log(error);
            dispatch({
                type: UPDATE_CUSTOMER_INFORMATIN_FAIL,
                payload: "Login Failed!"
            });
        });

    };

}

export const SaveBeneficiary = (AccessToken, beneficiaryToStore, BeneBankData) => {

    const url = PE_API_URL + ADD_BENE_OF_MNY_TRANSFER_COMP;
    console.log(" Before Save Bene /  /  /  /  /  /  /  ");
    console.log(beneficiaryToStore);


    return (dispatch) => {

        dispatch({
            type: SAVE_BENE_INFO
        });

        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: beneficiaryToStore
        }).then(function (response) {
            console.log("  Success response  In  Send  Bene Details To DB ");
            console.log(response);

            const BeneToAdd = {
                acccountNo: beneficiaryToStore.AccountNumber,
                bankBranchId: beneficiaryToStore.BankBranchId,
                bankName: BeneBankData.bankName,
                branchName: BeneBankData.branchName,
                fullName: beneficiaryToStore.AccountHolderName,
                ifsc: beneficiaryToStore.IFSC,
                isVerified: beneficiaryToStore.VerifyBeneficiary,
                mobileNo: beneficiaryToStore.BeneMobileNo,
                ImpsOrNeft: 'IMPS',
                Depositing: '',
                Charges: ''
            }

            let ResponseData = response.data

            dispatch({
                type: SAVE_BENE_INFO_SUCCESS,
                payload: { BeneToAdd, ResponseData }
            });
        }).catch(function (error) {
            console.log(" Error response  In  SendUserDetailsToDB is:  " + error);
            console.log(error);

            var Error = 'Beneficiary Save Failed.';

            // if (error.response.status === 400 || error.response.status === 500) {

            if (error.response.data.error != ' ') {

                Error = error.response.data.error;
            }

            // }
            dispatch({
                type: SAVE_BENE_INFO_FAIL,
                payload: Error
            });
        });

    };

}


export const RemoveBeni = (AccessToken, BeneToDel, index) => {

    const url = PE_API_URL + DELETE_BENE;

    console.log("   /  // / /  BeneToDel BeneToDel BeneToDel BeneToDel  BeneToDel ");
    console.log(BeneToDel);

    return (dispatch) => {

        dispatch({
            type: REMOVE_BENEFICIARY
        });

        axios.delete(url, {
            data: BeneToDel,
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
        }).then(function (response) {
            console.log("  Success response  In  RemoveBeni ");
            console.log(response);

            dispatch({
                type: REMOVE_BENEFICIARY_SUCCESS,
                payload: { BeneToDel, index }
            });
        }).catch(function (error) {

            var Error = 'Server Not Found, Please Try After Some Time.'

            if (error.response.status === 400) {

                if (error.response.data.error !== '' || error.response.data.error !== null || error.response.data.error !== undefined) {

                    Error = error.response.data.error;
                }

            }

            dispatch({
                type: REMOVE_BENEFICIARY_FAIL,
                payload: Error
            });
        });
    };
}

export const SendMoneyTransferDetails = (AccessToken, MoneyTransferDetails) => {

    console.log(" >  >  >  >  >  >  >  In MOnety Transfer Action : ");
    console.log(MoneyTransferDetails);

    const url = PE_API_URL + SEND_MONEY_TRASFER_DETAILS;

    return (dispatch) => {

        dispatch({
            type: SEND_MONEY_TRANSFER_DETAILS
        });

        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: MoneyTransferDetails
        }).then(function (response) {
            console.log("  Success response  In  SendUserDetailsToDB ");
            console.log(response);

            const ResponseData = response.data.response;

            dispatch({
                type: SEND_MONEY_TRANSFER_DETAILS_SUCCESS,
                payload: { MoneyTransferDetails, ResponseData }
            });
        }).catch(function (error) {
            console.log(" Error response  In  SendUserDetailsToDB is:  " + error);
            console.log(error);

            console.log(error.response);

            var Error = 'Server is Busy Please Try After Some Time.'

            if (error.response.data.error !== '') {

                Error = error.response.data.error;
            }


            dispatch({
                type: SEND_MONEY_TRANSFER_DETAILS_FAIL,
                payload: Error
            });
        });

    };

}
export const OpenMoneyTransferOrScheduleModal = (ModalFor, beni) => {
    return (dispatch) => {
        dispatch({
            type: OPEN_MONEY_TRANSFER_OR_SCHEDULE_MODAL,
            payload: { ModalFor, beni }
        });
    };
}

export const OpenScheduleMoneyTransferModal = () => {

    return (dispatch) => {
        dispatch({
            type: OPEN_SCHEDULE_MONEY_TRANSFER_MODAL,
        });
    };
}

export const CacleModalsInDisplayBeniList = () => {
    return (dispatch) => {
        dispatch({
            type: CACLE_MODALS_IN_DISPLAY_BENI_LIST_COMP,
        });
    };

}

export const ProcessMoneyTransfer = ({ beneficiary, indx }) => {
    console.log('-========= Process Money Trsnsf')
    console.log(beneficiary)
    let data = {
        beneficiary: beneficiary,
        indexValue: indx
    }
    console.log('========== ProcessMoneyTransfer ===========')
    console.log(data)
    return (dispatch) => {
        dispatch({
            type: PROCESS_MONEY_TRANSFER,
            payload: data
        });

    };

}


export const ChangeBeniValuesOnTransfer = (value, field, index) => {


    return (dispatch) => {
        dispatch({
            type: CHANGE_BENI_VALUES_ON_TRANSFER,
            payload: { value, field, index }
        });

    };
}

export const CheckValidateBeni_BeforeAdd = () => {

    return (dispatch) => {
        dispatch({
            type: CHECK_VALIDATE_BENI_BEFORE_ADD,
        });

    };

}






// #region Beneficiary 

export const getBankDetails = () => {
    var result = {
        bankNames: ['ANDHRA BANK', 'HDFC', 'ICICI', 'SBI', 'PNB'],
        bankStates: ['TELANGANA', 'AP', 'TAMILNADU'],
        bankBranches: ['WEST MARREDPALLY', 'NARAYANGUDA', 'KUKATPALLY', 'MADHAPUR', 'GACHIBOWLI',
            'BASAR', 'KASAPURAM', 'IBRAHIMPATNAM', 'RAMAPURAM', 'VELACHERRY', 'URAPAKKAM']
    }
    return (dispatch) => {
        dispatch({
            type: SET_BANK_DETAILS_SUCCESS,
            payload: result
        })
    }
}

export const onBeneficiaryEdit = ({ field, value }) => {
    var result = {
        fieldName: field,
        fieldValue: value
    }
    return (dispatch) => {
        dispatch({
            type: ON_BENEFICIARY_EDIT,
            payload: result
        })
    }
}
// #endregion


export const ClearApisResponseInMoneyTransferComp = () => {

    return (dispatch) => {
        dispatch({
            type: CLEAR_API_RESPONSE_IN_MONEY_TRANSFER_COMP,
        })
    }

}





export const OpenRemoveBeneficiaryModal = (benificiary, i) => {


    return (dispatch) => {
        dispatch({
            type: OPEN_REMOVE_BENE_MODAL,
            payload: { benificiary, i }
        })
    }
}

export const CloseRemoveBeniModal = (benificiary, i) => {


    return (dispatch) => {
        dispatch({
            type: CLOSE_REMOVE_BENE_MODAL,
        })
    }
}


export const ClearApiSuccessInMoneyTrasfer = () => {

    return (dispatch) => {
        dispatch({
            type: CLEAR_API_SUCCESS_IN_MONEY_TRASFER_COMP,
        })
    }

}


export const ClearMoneyTrasferSuccessResponse = () => {

    return (dispatch) => {
        dispatch({
            type: CLEAR_MONEY_TRASFER_SUCCESS_RESPONSE,
        })
    }

}


export const GetAllApisList = (AccessToken) => {


    let URL = PE_API_URL + GET_APIS_LIST



    return (dispatch) => {


        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }

        }).then(response => {

            console.log(" response   :  ");
            console.log(response);
            let Data = response.data.apis;
            dispatch({
                type: GET_ALL_API_SUCCESS,
                payload: Data,
            });
        }).catch((error) => {
        });
    };

}



export const SaveApiDetails = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_API_DETAILS,
            payload: { value, field }
        });
    };
}

export const SaveApiDetailsWarnings = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_API_DETAILS_WARNINGS,
            payload: { value, field }
        });
    };
}

export const SaveEditApi = (item) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_EDIT_API,
            payload: { item }
        });
    };
}

export const closeApiModal = () => {

    return (dispatch) => {
        dispatch({
            type: CLOSE_ADD_OR_EDIT_API_MODAL,
            // payload:{}
        });
    };
}
export const openAddApiModal = () => {

    return (dispatch) => {
        dispatch({
            type: OPEN_ADD_OR_EDIT_API_MODAL,
            // payload:{}
        });
    };
}


export const ActivareOrInActivateApi = (AccessToken, status, ApiID) => {

    let url = PE_API_URL + ACT_OR_INACT_API;
    let Token = 'Bearer '.concat(AccessToken);

    let Data = {
        ApiId: ApiID,
        State: status
    }

    console.log(" Payload Before Sent : ");
    console.log(Data);

    return (dispatch) => {

        dispatch({
            type: ACTIVATE_OR_INACTIVATE_API
        })

        axios({
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(Data),
            url,
        })
            .then(function (response) {
                console.log("     Success response    ");
                console.log(response);
                let message = response.data.message
                dispatch({
                    type: ACTIVATE_OR_INACTIVATE_API_SUCCESS,
                    payload: { message, ApiID, status }
                });

            })
            .catch(function (error) {

                console.log(" Error Occured ");
                console.log(error);
                dispatch({
                    type: ACTIVATE_OR_INACTIVATE_API_FAIL,
                    payload: { ApiID }
                });

            });

    }
}



export const OpenAct_Or_InAct_API_Modal = (ApiData, status) => {


    return (dispatch) => {
        dispatch({
            type: OPEN_ACT_OR_INACT_API_MODAL,
            payload: { ApiData, status }
        });
    };


}

export const Cancle_API_act_Or_Inact_Modal = () => {

    return (dispatch) => {
        dispatch({
            type: CLOSE_ACT_OR_INACT_API_MODAL,
        });
    };

}



export const EditAPI = (ApiData, AccessToken) => {

    let url = PE_API_URL + UPDATE_API;
    let Token = 'Bearer '.concat(AccessToken);

    console.log("UPDATE API DATA ACTION :");
    console.log(ApiData);

    return (dispatch) => {

        // dispatch({
        //     type: SEND_EDITTED_USER_DETAILS
        // })

        axios({
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(ApiData),
            url,
        })
            .then(function (response) {
                console.log("     Success response On Edit API    ");
                console.log(response);
                dispatch({
                    type: EDIT_API_SUCCESS,
                    payload: { ApiData }
                });

            })
            .catch(function (error) {

                console.log(" Error Occured ");
                console.log(error);
                console.log(error.response);

                let Err_MSG = error.response.data.error
                dispatch({
                    type: EDIT_API_FAIL,
                    payload: Err_MSG
                });

            });

    }


}


export const AddNewAPI = (ApiData, AccessToken) => {
    let url = PE_API_URL + ADD_NEW_API;
    let Token = 'Bearer ' + AccessToken;

    console.log("ApiData")
    console.log(ApiData)
    return (dispatch) => {
        axios({
            url,
            method: 'POST',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(ApiData)
        }).then(function (response) {
            console.log("  Success response  In  AddNewAPI ");
            let Data = response.data;
            Data = ApiData;
            console.log(" In Action Post Data is : ")
            console.log(Data);
            dispatch({
                type: ADD_NEW_API_SUCCESS,
                payload: { Data }
            });
        }).catch(function (error) {
            // let Errormsg = Default_Error_msg;
            console.log(" Error response  In  AddNewAPI is:  ");
            console.log(error);
            console.log(error.response);
        });
    }

}









//#region  MoneyTrasfer Final

export const GetMTPageInitialData = (AccessToken) => {





}


export const GetRecentTrasactions = (AccessToken) => {


    let Tras = [{
        "date": "19-11-18",
        "senderName": "prashanth yejje",
        "senderMobileNo": "7382040877",
        "beneName": "Nag Gowd",
        "beneBank": "HDFC",
        "beneAC": "78945612307894",
        "amount": "3000",
        "trasferMode": "IMPS"
    },
    {
        "date": "15-11-18",
        "senderName": "Bussa",
        "senderMobileNo": "7382040878",
        "beneName": "Prashanth Gowd",
        "beneBank": "HDFC",
        "beneAC": "78945612307898",
        "amount": "8000",
        "trasferMode": "IMPS"
    },
    {
        "date": "19-11-18",
        "senderName": "prashanth yejje",
        "senderMobileNo": "7382040877",
        "beneName": "Vikram Gowd",
        "beneBank": "ICICI",
        "beneAC": "78945612307895",
        "amount": "5000",
        "trasferMode": "NEFT"
    }
    ]
    return (dispatch) => {

        dispatch({
            type: GET_RECENT_TRASACTIONS
        })

        let URL = PE_API_URL + REPORTS_ + '/tenenttransactions/0/5000';

        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }

        }).then(response => {

            console.log(response);

            dispatch({
                type: GET_RECENT_TRASACTIONS_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {
            console.log(" Error Occured :");
            console.log(error);
            dispatch({
                type: GET_RECENT_TRASACTIONS_FAIL
            });
        });
    };
}

export const GetCustomerTemplate = (AccessToken) => {

    let URL = PE_API_URL + CUSTOMER_;
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }
        }).then(response => {
            console.log(" response   :  ");
            console.log(response);
            dispatch({
                type: GET_CUSTOMER_TEMPLATE_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {
            console.log(" Error Occured on GetCustomerTemplate :");
            console.log(error)

            console.log(error.response);
            dispatch({
                type: GET_CUSTOMER_TEMPLATE_FAIL
            });
        });
    };

}

export const SaveCustomerMobileNumber = (value,field) => {

    return (dispatch) => {

        dispatch({
            type: SAVE_CUSTOMER_MOBILE_NUMBER,
            payload: {value,field}
        });
    }

}
export const WarnsOnSaveCustomerMobileNO = (warning) => {
    return (dispatch) => {

        dispatch({
            type: WARNING_ON_SAVE_CUSTOMER_MOBILE_NO,
            payload: warning
        });
    }

}

export const GetCustomerInfo = (AccessToken, MobileNo) => {

    let URL = PE_API_URL + CUSTOMER_ + '/' + 'mobileNo' + '/' + MobileNo
    return (dispatch) => {


        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }

        }).then(response => {
            console.log(" response   :  ");
            console.log(response);
            dispatch({
                type: GET_CUSTOMER_INFORMATION_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {
            console.log(" Error Occured :");
            console.log(error);
            console.log(error.response);
            if (error.response !== '' || error.response !== null || error.response !== undefined) {
                if (error.response.status === 404) {
                    dispatch({
                        type: CUSTOMER_NOT_EXIST,
                        payload: 'NewCustomer'
                    });
                }
            } else {
                dispatch({
                    type: CUSTOMER_NOT_EXIST,
                    payload: null
                });
            }
        });
    };

}

export const EditCustomerInformation = () => {

    return (dispatch) => {
        dispatch({
            type: EDIT_CUSTOMER_INFORMATION_CLICKED
        });
    }
}

export const BackToDisplayCustomer = () => {
    return (dispatch) => {
        dispatch({
            type: BACK_TO_DISPLAY_CUSTOMER_INFO
        });
    }
}

export const SaveCustomerInfo = (val, field) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_CUSTOMER_IP_DETAILS,
            payload: { val, field }
        });
    }
}
export const WarningsOnSaveCustomerInfo = (warnings) => {
    return (dispatch) => {
        dispatch({
            type: WARNINGS_ON_SAVE_CUSTOMER_IP_DETAILS,
            payload: warnings
        })
    }
}

export const RegisterCustomerInformation = (AccessToken, customerInfo) => {
    console.log(" In ACTION METHOD MAN: ");
    console.log(customerInfo);

    let URL = PE_API_URL + CUSTOMER_;
    const AuthStr = 'Bearer '.concat(AccessToken);

    console.log(" URL ON SAVE CUSTOMER : ");
    console.log(URL);
    return (dispatch) => {
        axios({
            url: URL,
            method: 'post',
            headers: {
                'Authorization': AuthStr,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: JSON.stringify(customerInfo)
        }).then(function (response) {
            console.log("Get RegisterCustomerInformation    ");
            console.log(response);
            dispatch({
                type: REGISTER_CUSTOMER_INFO_SUCCESS,
                payload: response.data
            });
        }).catch(function (error) {

            console.log(" Error On  RegisterCustomerInformation  ");
            console.log(error);
            console.log(error.response);

            let Error;
            if (error.response.status === 400) {
                if (error.response.data.DateOfBirth !== '' || error.response.data.DateOfBirth !== undefined) {
                    Error = 'Please Select Date Of Birth.'
                }
            }

            dispatch({
                type: REGISTER_CUSTOMER_INFO_FAIL,
                payload: Error
            });
        });
    }
}

export const OTPVerificationOnAddBenificiary = (AccessToken, OTPDATA) => {

    let URL = PE_API_URL + CUSTOMER_ + '/beneficiary/verifyotp';
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios({
            url: URL,
            method: 'post',
            headers: {
                'Authorization': AuthStr,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: JSON.stringify(OTPDATA)
        }).then(function (response) {
            console.log(" / / / / / //  // /OTP VERIFY SUCCESSS : ");
            console.log(response);
            dispatch({
                type: OTP_VERIFICATION_ON_ADD_BENE_SUCCESS,
                payload: response.data
            });
        }).catch(function (error) {
            console.log(" / / / / / //  // /OTP VERIFY FAIL : ");
            console.log(error);
            console.log(error.response);
            dispatch({
                type: OTP_VERIFICATION_ON_ADD_BENE_FAIL,
                payload: error.response
            });
        });
    }
}

export const CancleOnBeneOtpVerification = () => {
    return (dispatch) => {
        dispatch({
            type: CANCLE_ON_BENE_OTP_VERIFICATION,
        })
    }
}

export const SaveCustomerVerifyOTP = (otp) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_CUSTOMER_VERIFY_OTP,
            payload: otp
        })
    }
}

export const ContinueToAddBeneficiary = (AccessToken, CustomerDetails) => {
    // return (dispatch) => {
    //     dispatch({
    //         type: CONTINUE_TO_ADD_BENEFICIARY,
    //         payload: CustomerDetails
    //     })
    // }
    let URL = PE_API_URL + BENEFICIARY_;
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }
        }).then(response => {
            console.log(" response ON GET_BENEFICIARY_TEMPLATE_SUCCESS   :  ");
            console.log(response);
            let Template = response.data;
            console.log(" Template In Action : ");
            console.log(Template);
            dispatch({
                type: GET_BENEFICIARY_TEMPLATE_SUCCESS,
                payload: { Template, CustomerDetails },
            });
        }).catch((error) => {
            console.log(" Error Occured on GetCustomerTemplate :");
            console.log(error)
            // if (error.response.status === 404) {
            //     dispatch({
            //         type: GET_CUSTOMER_TEMPLATE_FAIL
            //     });
            // }
            console.log(error.response);
            dispatch({
                type: GET_BENEFICIARY_TEMPLATE_FAIL
            });
        });
    };
}

export const UpdateCustomerInformation = (AccessToken, customerInfo) => {
    console.log(" In Action UpdateCustomerInformation: ");
    console.log(customerInfo);

    let URL = PE_API_URL + CUSTOMER_;
    const AuthStr = 'Bearer '.concat(AccessToken);
    return (dispatch) => {
        axios({
            url: URL,
            method: 'PUT',
            headers: {
                'Authorization': AuthStr,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            data: JSON.stringify(customerInfo)
        }).then(function (response) {
            console.log("Get UpdateCustomerInformation    ");
            console.log(response);
            console.log(customerInfo);
            dispatch({
                type: UPDATE_CUSTOMER_INFO_SUCCESS,
                payload: customerInfo
            });
        }).catch(function (error) {

            console.log(" Error On  UpdateCustomerInformation  ");
            console.log(error);
            console.log(error.response);

            let Error;
            if (error.response.status === 400) {
                // if (error.response.data.DateOfBirth !== '' || error.response.data.DateOfBirth !== undefined) {
                //     Error = 'Please Select Date Of Birth.'
                // }
            }

            dispatch({
                type: UPDATE_CUSTOMER_INFO_FAIL,
                payload: Error
            });
        });
    }
}


export const GetBeneTemplate = (AccessToken) => {

    let URL = PE_API_URL + BENEFICIARY_;
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }
        }).then(response => {
            console.log(" response ON GET_BENEFICIARY_TEMPLATE_SUCCESS   :  ");
            console.log(response);
            dispatch({
                type: GET_BENEFICIARY_TEMPLATE_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {
            console.log(" Error Occured on GetCustomerTemplate :");
            console.log(error.response)
            // if (error.response.status === 404) {
            //     dispatch({
            //         type: GET_CUSTOMER_TEMPLATE_FAIL
            //     });
            // }
            console.log(error.response);
            dispatch({
                type: GET_BENEFICIARY_TEMPLATE_FAIL
            });
        });
    };

}

export const SearchBeneficiary = (AccessToken, CustomerId, SearchText) => {
    console.log(" In Seracrt Bene Action : ");
    console.log(CustomerId);
    console.log(SearchText);

    let URL = PE_API_URL + CUSTOMER_ + '/' + CustomerId + '/' + 'beneficiaries' + '/0/10000' + '?SearchText=' + SearchText;
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }
        }).then(response => {
            console.log(" response ON SearchBeneficiary   :  ");
            console.log(response);
            let BeneList = response.data;
            dispatch({
                type: SEARCH_BENE_SUCCESS,
                payload: BeneList,
            });
        }).catch((error) => {
            console.log(" Error Occured on GetCustomerTemplate :");
            console.log(error.response)
            if (error.response.status === 404) {
                dispatch({
                    type: SEARCH_BENE_FAIL
                });
            }

        });
    };

}

export const DeleteBeneficiary = (AccessToken, CustomerId, beneid) => {

    const url = PE_API_URL + CUSTOMER_ + '/' + CustomerId + '/beneficiary/' + beneid;
    console.log(" In Action Methis : ");
    console.log(CustomerId, beneid);

    return (dispatch) => {

        axios.delete(url, {
            data: null,
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
        }).then(function (response) {
            console.log("  Success response  In  DeleteBeneficiary ");
            console.log(response);
            let ResponseData = response.data;

            dispatch({
                type: DELETE_BENEFICIARY_SUCCESS,
                payload: { ResponseData, beneid }
            });
        }).catch(function (error) {

            console.log(" / / / / / /DeleteBeneficiary Fail ");
            console.log(error);
            console.log(error.response);


            var Error = 'Server Not Found, Please Try After Some Time.'

            if (error.response.status === 400) {

                if (error.response.data.error !== '' || error.response.data.error !== null || error.response.data.error !== undefined) {

                    Error = error.response.data.error;
                }
            }

            dispatch({
                type: DELETE_BENEFICIARY_FAIL,
                payload: Error
            });
        });
    };

}

export const ChangeBaneDeleteSuccssParamFalse = () => {

    return (dispatch) => {
        dispatch({
            type: CHANGE_BENE_DELETE_SUCCSS_PARAM_TO_FALSE,
        })
    }
}

export const EnableBeneNotVerifiedModal = (bene) => {
    return (dispatch) => {
        dispatch({
            type: ENABLE_BENE_NOT_VERIFIED_MODAL,
            payload: bene
        })
    }
}
export const DisableBeneNotVerifiedModal = () => {
    return (dispatch) => {
        dispatch({
            type: DISABLE_BENE_NOT_VERIFIED_MODAL,
        })
    }
}
export const ProccedToTransDetails = (bene) => {
    return (dispatch) => {
        dispatch({
            type: PROCEED_TO_TRASACTION_DETAILS,
            payload: bene
        })
    }
}

export const SaveBeneficiaryInfo = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_BENEFICIARY_INFO,
            payload: { value, field }
        })
    }
}


export const GetBankByIFSC = (accessToken, ifscCode) => {
    let URL = PE_API_URL + BANKS_ + "/ifsc/" + ifscCode
    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(accessToken)
            }
        }).then(response => {
            console.log(" response ON GetIFSCBySuccess   :  ");
            console.log(response);
            let data = response.data;
            dispatch({
                type: GET_BANKS_BY_IFSC_SUCCESS,
                payload: data
            });
        }).catch((error) => {
            console.log(" Error Occured on GetIFSCBySuccess :");
            console.log(error.response)

            dispatch({
                type: GET_BANKS_BY_IFSC_FAIL,
                payload: error.response.status == 404 ? "Bank not found!" : ""
            });


        });
    };
}


export const WarningsOnBeneficiaryIPDetails = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: WARNINGS_ON_BENE_IP_DETAILS,
            payload: { value, field }
        })
    }
}

export const GetStatesList = (accessToken, bankId) => {
    let URL = PE_API_URL + BANKS_ + '/' + bankId + '/state';
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(accessToken)
            }
        }).then(response => {
            console.log(" response ON GetStatesList   :  ");
            console.log(response);
            let states = response.data.states;
            dispatch({
                type: GET_STATES_LIST_SUCCESS,
                payload: { states, bankId },
            });
        }).catch((error) => {
            console.log(" Error Occured on GetStatesList :");
            console.log(error.response)
            if (error.response.status === 404) {
                dispatch({
                    type: GET_STATES_LIST_FAIL
                });
            }
        });
    };
}


export const GetCitiesList = (accessToken, bankId, stateId) => {
    let URL = PE_API_URL + BANKS_ + '/' + bankId + '/state/' + stateId + '/city';
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(accessToken)
            }
        }).then(response => {

            console.log(" / / / // / / response GetCitiesList ");
            console.log(response.data);
            let Cities = response.data.cities;

            dispatch({
                type: GET_STATES_CITIES_LIST_SUCCESS,
                payload: { Cities, stateId },
            });
        }).catch((error) => {
            if (error.response.status === 404) {
                dispatch({
                    type: GET_STATES_OF_SELECTED_BANK_FAIL
                });
            }

        });
    };
}

export const GetBankBranchesList = (accessToken, bankId, stateId, cityId) => {
    let URL = PE_API_URL + BANKS_ + '/' + bankId + '/state/' + stateId + '/city/' + cityId + '/branch';
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(accessToken)
            }
        }).then(response => {
            console.log(" / / / // / / response GetCitiesList ");
            console.log(response.data);
            let Branches = response.data.branches;
            dispatch({
                type: GET_BANK_BRANCHES_LIST_SUCCESS,
                payload: { Branches, cityId },
            });
        }).catch((error) => {
            if (error.response.status === 404) {
                dispatch({
                    type: GET_BANK_BRANCHES_LIST_FAIL
                });
            }

        });
    };
}

export const SaveSelectedBranchId = (BranchId, BranchName) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_SELECTED_BRANCH_ID,
            payload: { BranchId, BranchName }
        })
    }
}

export const GetBankIFSCOnSearch = (accessToken, bankId, stateId, cityId, branchId) => {
    let URL = PE_API_URL + BANKS_ + '/' + bankId + '/state/' + stateId + '/city/' + cityId + '/branch/' + branchId;
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(accessToken)
            }
        }).then(response => {
            let IfscandDetails = response.data;
            console.log(" / / / // / / response GetCitiesList ");
            console.log(response.data);
            dispatch({
                type: GET_BANK_IFSC_ON_SEARCH_SUCCESS,
                payload: { IfscandDetails, branchId },
            });
        }).catch((error) => {
            if (error.response.status === 404) {
                dispatch({
                    type: GET_BANK_IFSC_ON_SEARCH_FAIL
                });
            }

        });
    };
}

export const SelectIFSConSearchResult = (ifscDetails) => {
    return (dispatch) => {
        dispatch({
            type: SELECT_IFSC_ON_SEARCH_RESULT,
            payload: ifscDetails
        })
    }
}

export const ClearBeneBankDetails = () => {
    return (dispatch) => {
        dispatch({
            type: CLEARE_BENE_BANK_DETAILS_IN_SEARCH_MODAL,
        })
    }
}


export const RegisterBeneficiaryInformation = (AccessToken, BeneInfo) => {


    console.log(" BENE Details To SAve IN DB");
    console.log(BeneInfo);

    const url = PE_API_URL + BENEFICIARY_;

    return (dispatch) => {

        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: BeneInfo
        }).then(function (response) {
            let Data = response.data;
            // let BeneInfo = BeneInfo.Beneficiary;
            console.log(" RegisterBeneficiaryInformation Success Response Is :    :  :  : : : ");
            console.log(response);

            dispatch({
                type: REGISTER_BENE_INFO_SUCCESS,
                payload: { BeneInfo, Data }
            });
        }).catch(function (error) {
            console.log(" Error response  In  RegisterBeneficiaryInformation is:  " + error);
            console.log(error);
            console.log(error.response);

            dispatch({
                type: REGISTER_BENE_INFO_FAIL,
                payload: ''
            });
        });

    };

}


export const ResetAddBeneForm = () => {


    return (dispatch) => {

        dispatch({
            type: RESET_ADD_BENE_FORM,
        });
    };

}

export const CloseBeneForm = () => {


    return (dispatch) => {

        dispatch({
            type: CLOSE_BENE_FORM,
        });
    };

}

export const VerifyBeneBeforeAdd = (AccessToken, Payload) => {

    const url = PE_API_URL + CUSTOMER_ + '/verifybeneficiarybankaccount';

    return (dispatch) => {

        dispatch({
            type: VERIFY_BENE_BEFORE_ADD,
            // payload: response
        });

        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: Payload
        }).then(function (response) {
            let Data = response.data;
            // let BeneInfo = BeneInfo.Beneficiary;
            console.log(" VerifyBeneBeforeAddSuccess Response Is :    :  :  : : : ");
            console.log(response);

            dispatch({
                type: VERIFY_BENE_BEFORE_ADD_SUCCESS,
                payload: response.data
            });
        }).catch(function (error) {
            console.log(" Error response  In  VerifyBeneBeforeAdd is:  " + error);
            console.log(error);
            console.log(error.response);

            dispatch({
                type: VERIFY_BENE_BEFORE_ADD_FAIL,
                payload: error.response
            });
        });

    };

}

export const CancleBeneVerifyResponse_Modal = () => {
    return (dispatch) => {

        dispatch({
            type: CLOSE_MODAL_OF_VERIFY_BENE_BEFORE_ADD,
        });
    }
}

export const Confirm_From_BeneValidation_Success = () => {
    return (dispatch) => {

        dispatch({
            type: CONFIRM_FROM_BENE_VALIDATION_SUCCESS,
        });
    }
}



export const SaveMtTrasDetails = (value, field) => {
    return (dispatch) => {

        dispatch({
            type: SAVE_MT_TRANS_DETAILS,
            payload: { value, field }
        });
    };
}

export const Get_Additional_Charges_Of_MT = (AccessToken, amount, field) => {

    let URL = PE_API_URL + MONEYTRANSFER_ + 'charges';
    let AdditionalCharges = {
        "MoneyToBeTransfered": amount
    }


    return (dispatch) => {

        fetch(URL, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            body: JSON.stringify(AdditionalCharges)
        })
            .then(response => {
                if (!response.ok) { throw response }
                return response.json()
            })
            .then((response) => {

                console.log(" Send  Get_Additional_Charges_Of_MT :    :  :  : : : ");
                console.log(response)

                dispatch({
                    type: GET_ADDITIONAL_CHARGES_IN_MT_SUCCESS,
                    payload: response
                });

            })
            .catch(function (err) {

                console.log(" Error In   Get_Additional_Charges_Of_MT :    :  :  : : : ");
                console.log(err)

                dispatch({
                    type: GET_ADDITIONAL_CHARGES_IN_MT_FAIL,
                    // payload: err.response
                });
            });


    }
}


export const MoneyTransferRequest = (AccessToken, MTRequestInfo) => {


    const url = PE_API_URL + MONEYTRANSFER_ + 'requesttransfer';

    console.log(MTRequestInfo);

    return (dispatch) => {
        // dispatch({ type: SEND_CUSTOMER_INFORMATIN });

        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: MTRequestInfo
        }).then(function (response) {
            let Data = response.data;
            console.log(" Send  IMoneyTransferRequest :    :  :  : : : ");
            console.log(response);
            dispatch({
                type: MONEY_TRANSFER_REQUEST_SUCCESS,
                payload: Data
            });
        }).catch(function (error) {
            console.log(" Error MoneyTransferRequest:  " + error);
            console.log(error);
            console.log(error.response);
            let Error;
            if (error.response != undefined) {
                if (error.response.status === 400) {
                    Error = error.response.data.message
                }
            }

            dispatch({
                type: MONEY_TRANSFER_REQUEST_FAIL,
                payload: Error
            });
        });

    };

}

export const CancleInTransdetails = () => {
    return (dispatch) => {
        dispatch({
            type: CANCLE_IN_TRANS_DETAILS,
        });
    }
}

export const SaveOTPafterTrasRequest = (value) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_OTP_AFTER_TRANSFER_REQUEST,
            payload: value
        });
    }

}

export const CancleTheTrasaction = () => {
    return (dispatch) => {
        dispatch({
            type: CANCLE_THE_MT_COMPLETE_TRANSACTION,
        });
    }
}

export const ValidateMoneyTrasferOtp = (AccessToken, OtpInfo) => {

    const url = PE_API_URL + MONEYTRANSFER_ + 'requesttransfer' + '/validateotp';

    return (dispatch) => {
        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: OtpInfo
        }).then(function (response) {
            let Data = response.data;
            console.log(" Send  IMoneyTransferRequest :    :  :  : : : ");
            console.log(response);
            dispatch({
                type: MONEY_TRASFER_OTP_VERIFY_SUCCESS,
                payload: Data
            });
        }).catch(function (error) {
            console.log(" Error MoneyTransferRequest:  " + error);
            console.log(error);
            console.log(error.response);
            let Error;
            if (error.response.status === 400) {
                Error = error.response.data.message
            }
            dispatch({
                type: MONEY_TRASFER_OTP_VERIFY_FAIL,
                payload: Error
            });
        });

    };
}


//#endregion



// #region RateCard

export const GetAllRateCards = (AccessToken) => {

    let URL = PE_API_URL + RATECARD_ + '/0/100';

    return (dispatch) => {

        dispatch({
            type: RATE_CARD_INITIAL
        })



        axios.get(URL,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer '.concat(AccessToken)
                }
            }
        ).then(response => {
            console.log(" response On GetAllRateCards :  ");
            console.log(response);
            const GetSuctomerRes = response.data;
            dispatch({
                type: GET_ALL_RATECARDS_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {

            console.log(" Error Response on GetAllRateCards:");
            console.log(error.response);

            var GetCust_Error;
            dispatch({
                type: GET_ALL_RATECARDS_FAIL,
                payload: GetCust_Error
            });
        });

    };
}




export const DeleteRateCard = (AccessToken, RateCardid) => {

    const url = PE_API_URL + RATECARD_ + '/' + RateCardid;

    console.log("   /  // / /  DeleteRateCard DeleteRateCard DeleteRateCard DeleteRateCard  ");
    console.log(RateCardid);

    return (dispatch) => {

        dispatch({
            type: REMOVE_BENEFICIARY
        });

        axios.delete(url, {
            data: null,
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
        }).then(function (response) {
            console.log("  Success response  In  DeleteRateCard ");
            console.log(response);

            dispatch({
                type: DELETE_RATE_CARD_SUCCESS,
                payload: RateCardid
            });
        }).catch(function (error) {

            var Error = 'Server Not Found, Please Try After Some Time.'

            if (error.response.status === 400) {

                if (error.response.data.error !== '' || error.response.data.error !== null || error.response.data.error !== undefined) {

                    Error = error.response.data.error;
                }

            }

            dispatch({
                type: DELETE_RATE_CARD_FAIL,
                payload: Error
            });
        });
    };
}


export const GetRateCardSlabsOnID = (AccessToken, RateCardId) => {

    let URL = PE_API_URL + RATECARD_ + '/' + RateCardId;

    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios.get(URL,
            {
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': 'Bearer '.concat(AccessToken)
                }
            }
        ).then(response => {
            console.log(" response On GetRateCardSlabsOnID :  ");
            console.log(response);
            dispatch({
                type: GET_RATE_CARD_SLABS_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {

            console.log(" Error Response on GetRateCardSlabsOnID:");
            console.log(error.response);

            var GetCust_Error;
            dispatch({
                type: GET_RATE_CARD_SLABS_FAIL,
                payload: GetCust_Error
            });
        });

    };
}

export const CancleEventInRCMain = () => {
    return (dispatch) => {
        dispatch({
            type: CANCLE_EVENT_IN_RC_MAIN,
        }
        )
    }
}




export const ChangePageSizeInRateCardHome = (value) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_PAGE_SIZE_IN_RATE_CARD_HOME,
            payload: value
        }
        )
    }
}
export const NavigateToCreateOrUpdate_RateCard = (addOrEdit, id) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })
        dispatch({
            type: NAVIGATE_TO_RATE_CARD_MAIN,
            payload: { addOrEdit, id }
        })
    }
}


export const SearchRateCards = (AccessToken, SearchText) => {

    let URL = PE_API_URL + RATECARD_ + '/0/100' + '?SearchText=' + SearchText;
    return (dispatch) => {
        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }
        }).then(response => {
            console.log(" response ON SearchBeneficiary   :  ");
            console.log(response);
            let RateCardList = response.data;
            dispatch({
                type: SEARCH_RATE_CARD_SUCCESS,
                payload: RateCardList,
            });
        }).catch((error) => {
            console.log(" Error Occured on GetCustomerTemplate :");
            console.log(error.response)
            dispatch({
                type: SEARCH_RATE_CARD_FAIL
            });

        });
    };

}
export const GetRateCardTemplate = (AccessToken) => {

    let URL = PE_API_URL + RATECARD_;
    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })

        axios.get(URL, {
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            }
        }).then(response => {
            console.log(" response ON GetRateCardTemplate   :  ");
            console.log(response);
            let template = response.data;
            dispatch({
                type: GET_RATE_CARD_TEMPLATE_SUCCESS,
                payload: template,
            });
        }).catch((error) => {
            console.log(" Error Occured on GetRateCardTemplate :");
            console.log(error.response)
            dispatch({
                type: GET_RATE_CARD_TEMPLATE_FAIL
            });

        });
    };
}


export const CommissionCalculatorModal = () => {

    return (dispatch) => {
        dispatch({
            type: COMMISSION_CALCULATOR_MODAL,
        });

    }
}


export const ChangeRateCardValues = (value, slabId, field, indx) => {
    return (dispatch) => {
        dispatch({
            type: CHANGE_RATE_CARD_VALUES,
            payload: { value, slabId, field, indx }
        });

    }
}

export const SetCommissionCalculatorValues = (Slab) => {
    console.log(" . . .. . . . .  // / / . . . . .  SetCommissionCalculatorValues SetCommissionCalculatorValues ACTION :  :  ");
    console.log(Slab);
    return (dispatch) => {
        dispatch({
            type: SET_COMMISSION_CALCULATOR_VALUES,
            payload: Slab
        });
    }
}

export const SaveCreatingRateCardData = (value, field) => {
    console.log(" . . .. . . . .  // / / . . . . .  SaveCreatingRateCardData SaveCreatingRateCardData ACTION :  :  ");
    return (dispatch) => {
        dispatch({
            type: SAVE_CREATING_RATE_CARD_DATA,
            payload: { value, field }
        });
    }
}
export const FilterRateCardFromAndToValues = (value, field) => {
    console.log(" . . .. . . . .  // / / . . . . .  SaveCreatingRateCardData SaveCreatingRateCardData ACTION :  :  ");
    return (dispatch) => {
        dispatch({
            type: SAVE_FILTER_RATE_CARD_FROM_AND_TO_VALUES,
            payload: { value, field }
        });
    }
}


export const FilterRateCardSlabs = (FromIndx, ToIndx) => {

    return (dispatch) => {
        dispatch({
            type: FILTER_RATE_CARD_SLABS,
            payload: { FromIndx, ToIndx }
        });
    }
}


export const SetValuesModal = (item, val) => {

    return (dispatch) => {
        dispatch({
            type: SET_VALUES_MODAL_IN_RATE_CARD,
            payload: { item, val }
        });
    }
}

export const SaveSetValuesContentFromModal = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_RATE_CARD_VALUES_FROM_MODAL,
            payload: { value, field }
        });
    }
}
export const SetValuesToRateCardSlabs = () => {
    return (dispatch) => {
        dispatch({
            type: SET_VALUES_TO_RATE_CARD_SLABS,
        });
    }
}

export const SendRateCardDetailsToCreate = (AccessToken, RateCardPayload) => {

    console.log(" CreateNewRateCard CreateNewRateCard Action ");
    console.log(RateCardPayload);

    const url = PE_API_URL + RATECARD_;

    return (dispatch) => {

        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: RateCardPayload
        }).then(function (response) {
            let Data = response.data;
            RateCardPayload.id = response.data.rateCardId
            console.log(" Send CreateNewRateCard Info Success Response Is :    :  :  : : : ");
            console.log(response);
            dispatch({
                type: CREATE_NEW_RATE_CARD_SUCCESS,
                payload: RateCardPayload
            });
        }).catch(function (error) {
            console.log(" Error response  In  CreateNewRateCard is:  " + error);
            console.log(error);
            console.log(error.response);

            dispatch({
                type: CREATE_NEW_RATE_CARD_FAIL,
                // payload: ""
            });
        });

    };


}

export const SendEditedRateCardDetails = (AccessToken, RateCardPayload) => {

    const url = PE_API_URL + RATECARD_;

    console.log("SendEditedRateCardDetails aCTION :  ");
    console.log(RateCardPayload);

    return (dispatch) => {

        axios({
            url,
            method: 'PUT',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: RateCardPayload
        }).then(function (response) {
            let Data = response.data;

            console.log(" SendEditedRateCardDetails Response Is :    :  :  : : : ");
            console.log(response);
            dispatch({
                type: UPDATE_RATE_CARD_SUCCESS,
                payload: { RateCardPayload, Data }
            });
        }).catch(function (error) {
            console.log(" Error response  In  SendUserDetailsToDB is:  " + error);
            console.log(error);
            console.log(error.response);
            dispatch({
                type: UPDATE_RATE_CARD_FAIL,
                payload: "Login Failed!"
            });
        });

    };
}

export const ResetRateCardData = () => {

    return (dispatch) => {
        dispatch({
            type: RESET_RATE_CARD_DATA,
        });
    };
}
export const ValidateSlabsBeforeSendToServer = () => {

    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });
        dispatch({
            type: VALIDATE_SLABS_BEFORE_SEND_TO_SERVER,
        });
    };
}

export const SlabsValidationResult = (result) => {

    return (dispatch) => {
        dispatch({
            type: SLABS_VALIDATION_RESULT,
            payload: result
        });

    };

}

export const RatecardWarnings = (field, value) => {

    return (dispatch) => {
        dispatch({
            type: RATE_CARD_WARNINGS,
            payload: { field, value }
        });

    };

}
//#endregion


//#region DepositSlip Component

export const ResetDepositSlipComp = () => {
    return (dispatch) => {
        dispatch({
            type: RESET_DEPOSIT_SLIP_COMPONENT,
        });

    };
}


export const Save_DepositSlip_Details_Warnings = (field, value) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_DEPOSIT_SLIP_DETAILS_WARNINGS,
            payload: { field, value }
        });

    };
}


export const Save_DepositSlip_Details = (field, value, Index) => {
    console.log("Index : " + Index)
    if (field == "AddItem") {
        let item = { id: value.length + 1, TenantId: '', Amount: '' };
        value.push(item);
        return (dispatch) => {
            dispatch({
                type: SAVE_DEPOSIT_SLIP_DETAILS,
                payload: { field, value }
            });
        };
    } else if (field == "RemoveItem") {

        return (dispatch) => {
            dispatch({
                type: SAVE_DEPOSIT_SLIP_DETAILS,
                payload: { field, value, Index }
            });
        };
    } else if (field == "AddSlipItem") {
        let item = { id: value.length + 1, SlipImage: '', TxId: '' };
        value.push(item);
        return (dispatch) => {
            dispatch({
                type: SAVE_DEPOSIT_SLIP_DETAILS,
                payload: { field, value }
            });
        };
    } else if (field == "RemoveSlipItem") {

        return (dispatch) => {
            dispatch({
                type: SAVE_DEPOSIT_SLIP_DETAILS,
                payload: { field, value, Index }
            });
        };
    } else if (field == "orgId") {
        return (dispatch) => {
            dispatch({
                type: SAVE_DEPOSIT_SLIP_DETAILS,
                payload: { field, value }
            });

        };
    } else return (dispatch) => {
        dispatch({
            type: SAVE_DEPOSIT_SLIP_DETAILS,
            payload: { field, value }
        });

    };
}

export const Get_All_Deposits_From_DB = (AccessToken) => {
    let url = PE_API_URL + TENANT_DEPOSIT + "/" + 0 + "/" + 100;
    let Token = 'Bearer ' + AccessToken


    return (dispatch) => {

        // dispatch({
        //     type: SAVE_PROGRESS_INDICATOR_STATUS,
        // });

        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {

            console.log("success response in Get_All_Deposits_From_DB ")
            console.log(response)

            let data = response.data;
            dispatch({
                type: GET_ALL_DEPOSITS_FROM_DB_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {
            dispatch({
                type: GET_ALL_DEPOSITS_FROM_DB_FAIL,
                payload: { error }
            });

        });
    }

}


export const Get_Deposit_Mode_Lists = (AccessToken) => {
    let url = PE_API_URL + TENANT_DEPOSIT;
    let Token = 'Bearer ' + AccessToken


    return (dispatch) => {

        // dispatch({
        //     type: SAVE_PROGRESS_INDICATOR_STATUS,
        // });

        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {

            console.log("success response in Get_All_Deposits_From_DB ")
            console.log(response)

            let data = response.data;
            dispatch({
                type: GET_DEPOSIT_MODE_LISTS_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {
            dispatch({
                type: GET_DEPOSIT_MODE_LISTS_FAIL,
                payload: { error }
            });

        });
    }

}



export const SendSlipDetailsToDB = (field, value, AccessToken, DOB) => {

    const url = PE_API_URL + TENANT_DEPOSIT + '/submit';

    let Data = {
        "amount": value.amount,
        "toBankAccountNumber": value.toBankAccountNo,
        "dateOfDeposit": value.dateOfDeposit == "" ? DOB : value.dateOfDeposit,
        "remarks": value.remarks,
        "tenantDepositModeId": value.modeOfDeposit,
        "depositSlipImage": value.slipImage,
        "onlineTransferReferenceNo": value.onlineTransfer,
        "chequeNumber": value.chequeDetails.number,
        "chequeDate": value.chequeDetails.date == "" ? DOB : value.chequeDetails.date,
        "cdmDepositReferenceNo": value.referenceNumber
    }
    console.log(Data)
    return (dispatch) => {
        // dispatch({
        //     type: SEND_SLIP_DETAILS_TO_DB,
        //     payload: { field, value }
        // });
        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: Data
        }).then(function (response) {
            console.log(response)
            dispatch({
                type: SEND_SLIP_DETAILS_TO_DB_SUCCESS,
                payload: { field, value }
            });
        }).catch(function (error) {
            dispatch({
                type: SEND_SLIP_DETAILS_TO_DB_FAIL,

            });
        });

    };
}


export const Get_All_CDM_Slips_From_DB = (AccessToken) => {
    let url = PE_API_URL + CDM + "/stuck/" + 0 + "/" + 100;
    let Token = 'Bearer ' + AccessToken


    return (dispatch) => {

        // dispatch({
        //     type: SAVE_PROGRESS_INDICATOR_STATUS,
        // });

        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {

            console.log("success response in Get_All_CDM_Slips_From_DB ")
            console.log(response)

            let data = response.data;
            dispatch({
                type: GET_ALL_CDM_STUCK_LIST_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {
            dispatch({
                type: GET_ALL_CDM_STUCK_LIST_FAIL,
                payload: { error }
            });

        });
    }

}


export const GetCDMStuckDetails = (AccessToken, id) => {
    let url = PE_API_URL + CDM + "/stuck/" + id;
    let Token = 'Bearer ' + AccessToken


    return (dispatch) => {

        // dispatch({
        //     type: SAVE_PROGRESS_INDICATOR_STATUS,
        // });

        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {

            console.log("success response in GetCDMStuckDetails ")
            console.log(response)

            let data = response.data;
            dispatch({
                type: GET_CDM_STUCK_DETAILS_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {
            dispatch({
                type: GET_CDM_STUCK_DETAILS_FAIL,
                payload: { error }
            });
        });
    }

}


export const SendDepositSlipDetailsToDB = (field, value, AccessToken, DOB) => {

    const url = PE_API_URL + CDM + '/report/stuck';

    let Data = {
        "amount": value.amount,
        "toBankAccountNo": value.toBankAccountNo,
        "dateOfDeposit": value.dateOfDeposit == "" ? DOB : value.dateOfDeposit,
        "remarks": value.remarks,
    }
    console.log(Data)
    return (dispatch) => {
        // dispatch({
        //     type: SEND_SLIP_DETAILS_TO_DB,
        //     payload: { field, value }
        // });
        axios({
            url,
            method: 'POST',
            headers: {
                'Authorization': 'Bearer '.concat(AccessToken)
            },
            data: Data
        }).then(function (response) {
            console.log(response)
            dispatch({
                type: SEND_SLIP_DETAILS_TO_DB_SUCCESS,
                payload: { field, value }
            });
        }).catch(function (error) {
            dispatch({
                type: SEND_SLIP_DETAILS_TO_DB_FAIL,

            });
        });

    };
}

export const Approve_Tenant_Deposit_Slip = (AccessToken, id) => {
    let url = PE_API_URL + TENANT_DEPOSIT + "/approve";
    let Token = 'Bearer ' + AccessToken

    let UploadData = {
        "tenantDepositId": id
    }



    return (dispatch) => {

        // dispatch({
        //     type: SAVE_PROGRESS_INDICATOR_STATUS,
        // });


        axios({
            url,
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(UploadData)
        }).then(function (response) {

            console.log("success response in Approve_Tenant_Deposit_Slip ")
            console.log(response)

            let data = response.data;
            dispatch({
                type: APPROVE_DEPOSIT_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {
            dispatch({
                type: APPROVE_DEPOSIT_FAIL,
                payload: { error }
            });
        });
    }

}


export const Get_Deposit_Details = (AccessToken, id, item) => {
    let url = PE_API_URL + TENANT_DEPOSIT + "/" + id;
    let Token = 'Bearer ' + AccessToken;

    console.log(url)
    return (dispatch) => {

        // dispatch({
        //     type: SAVE_PROGRESS_INDICATOR_STATUS,
        // });

        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {

            console.log("success response in Get_Deposit_Details ")
            console.log(response)

            let data = response.data;
            dispatch({
                type: GET_DEPOSITS_DETAILS_FROM_DB_SUCCESS,
                payload: { data, item }
            });
        }).catch(function (error) {
            dispatch({
                type: GET_DEPOSITS_DETAILS_FROM_DB_FAIL,
                payload: { error }
            });
        });
    }

}

export const Save_DepositSlip_Details_Tenant = (field, value) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_DEPOSIT_SLIP_DETAILS_TENANT,
            payload: { field, value }
        });
    };
}

export const Save_DepositSlip_Details_Tenant_Warnings = (field, value) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_DEPOSIT_SLIP_DETAILS_TENANT_WARNINGS,
            payload: { field, value }
        });
    };
}

export const Save_DepositSlip_List_Items = (field, value, i, amount_Or_orgID) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_DEPOSIT_SLIP_LIST_ITEMS,
            payload: { field, value, i, amount_Or_orgID }
        });

    };
}

export const send_BankDeposit_Details_To_DB = (AccessToken, UploadData) => {
    let url = PE_API_URL + DEPOSIT_SLIP + "/submit";
    let Token = 'Bearer ' + AccessToken

    console.log("data to send")
    console.log(UploadData)
    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })
        axios({
            url,
            method: 'POST',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(UploadData)
        }).then(function (response) {

            console.log("success response in send_BankDeposit_Details_To_DB ")
            console.log(response)
            let isSubmitDepositSlipSuccess = true;
            dispatch({
                type: SEND_DEPOSIT_SLIP_DETAILS_TO_DB_SUCCESS,
                payload: { isSubmitDepositSlipSuccess }
            });
        }).catch(function (error) {
            dispatch({
                type: SEND_DEPOSIT_SLIP_DETAILS_TO_DB_FAIL,
                payload: { error }
            });
        });
    }
}

export const Get_Deposited_Slips_From_Db_Submitter = (AccessToken) => {
    let url = PE_API_URL + DEPOSIT_SLIP + "/submitter/depositslips/" + 0 + "/" + 100;
    let Token = 'Bearer ' + AccessToken


    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            // data: JSON.stringify(UploadData)
        }).then(function (response) {

            console.log("success response in Get_Deposited_Slips_From_Db_Submitter ")
            console.log(response)
            //  let isSubmitDepositSlipSuccess=true
            let data = response.data;
            dispatch({
                type: GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {

        });
    }
}

export const Get_Deposited_Slips_From_Db_Tenant = (AccessToken) => {
    let url = PE_API_URL + DEPOSIT_SLIP + "/tenant/depositslips/" + 0 + "/" + 100;
    let Token = 'Bearer ' + AccessToken


    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            // data: JSON.stringify(UploadData)
        }).then(function (response) {

            console.log("success response in Get_Deposited_Slips_From_Db_Tenant ")
            console.log(response)
            //  let isSubmitDepositSlipSuccess=true
            let data = response.data;
            dispatch({
                type: GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS_TENANT,
                payload: { data }
            });
        }).catch(function (error) {

        });
    }
}


export const Get_Deposited_Slip_Submitter = (AccessToken, slipId) => {
    let url = PE_API_URL + DEPOSIT_SLIP + "/submitter/depositslips/" + slipId
    let Token = 'Bearer ' + AccessToken


    return (dispatch) => {
        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS
        });

        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },

        }).then(function (response) {

            console.log("success response in Get_Deposited_Slip_Submitter ")
            console.log(response)
            //  let isSubmitDepositSlipSuccess=true
            let data = response.data;
            dispatch({
                type: GET_DEPOSITED_SLIP_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {
            dispatch({
                type: GET_DEPOSITED_SLIP_SUCCESS,
                payload: { error }
            });
        });
    }

}





export const Get_Deposited_Slip_Tenant = (AccessToken, slipId) => {
    let url = PE_API_URL + DEPOSIT_SLIP + "/tenant/depositslips/" + slipId
    let Token = 'Bearer ' + AccessToken


    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })


        axios({
            url,
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },

        }).then(function (response) {

            console.log("success response in Get_Deposited_Slip_Tenant ")
            console.log(response)
            //  let isSubmitDepositSlipSuccess=true
            let data = response.data;
            dispatch({

                type: GET_DEPOSITED_SLIP_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {

        });
    }

}

export const Approve_Deposit_Slip = (AccessToken, DepositSlipId) => {
    let url = PE_API_URL + DEPOSIT_SLIP + "/depositslip/approve"
    let Token = 'Bearer ' + AccessToken
    let Data = {
        depositSlipId: DepositSlipId
    }

    console.log(Data)
    return (dispatch) => {
        axios({
            url,
            method: 'POST',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: Data

        }).then(function (response) {

            console.log("success response in Approve_Deposit_Slip ")
            console.log(response)
            //  let isSubmitDepositSlipSuccess=true
            let data = response.data;
            dispatch({
                type: APPROVE_DEPOSIT_SLIP_SUCCESS,
                payload: { data }
            });
        }).catch(function (error) {

        });
    }

}


//#endregion





