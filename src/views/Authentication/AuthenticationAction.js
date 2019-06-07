import {

    SAVE_PROGRESS_INDICATOR_STATUS,
    RESET_LOGIN,
    REDUCER_INITIAL,
    LOGIN_SUCCESS,
    LOGIN_FAILED,



    GET_USER_ROLE_MD_PERMS,
    GET_USER_ACCESS_PERMISSIONS_SUCCESS,
    GET_USER_ROLE_MD_PERMS_ERROR,

    GET_OPERATING_USER_DETAILS_SUCCESS,
    GET_OPERATING_USER_DETAILS_FAIL,

    USER_LOGOUT,
    GET_USER_ACCESS_PERMISSIONS_FAIL,
    SAVE_LOG_IN_IP_DETAILS,

    FORGOT_PASSWORD_REQUEST_SUCCESS,
    FORGOT_PASSWORD_REQUEST_FAIL,
    RESEND_OTP_SUCCESS,
    RESET_PASSWORD_SUCCESS,

    SAVE_FORGOT_PASS_DETAILS,
    SAVE_FORGOT_PASS_DETAILS_WARNINGS,
    GET_MY_PERMISSIONS_MENU_SUCCESS,
    GET_MY_PERMISSIONS_MENU_FAIL,
    VALIDATE_OTP_SUCCESS,
    VALIDATE_OTP_FAIL,
    RESET_PASSWORD_FAIL,
    RESET_PASS_WORD_MISMATCH
} from './types';

import axios from 'axios';

import { PE_API_URL, AUTH_LOGIN, AUTHERIZATION_, FORGOT_PASSWORD_API, RESET_PASSWORD_API, RESEND_OTP_API, MY_PEMISSIONS_MENU_, AUTHENTICATION_ } from '../../GlobalVars';

// import { Interceptor } from '../axiosInterceptor';



export const ResetLogin = () => {
    console.log('------------RESET LOGIN ---------------------')
    return (dispatch) => {
        dispatch({ type: RESET_LOGIN })
    }
}


export const SaveLogInIpDetails = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_LOG_IN_IP_DETAILS,
            payload: { value, field }
        })

    }
}

export const PaisaExpressLogin = ({ mobileNo, password }) => {
    let url = PE_API_URL + AUTH_LOGIN;

    let data = {
        MobileNumber: mobileNo,
        Password: password
    }

    return (dispatch) => {


      
        // dispatch({ type: REDUCER_INITIAL })
        
        dispatch({ type: SAVE_PROGRESS_INDICATOR_STATUS })
        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // timeout: 5000,
            data: JSON.stringify(data),
            url,
        })
            .then(function (response) {

                let fieldName = 'mobileNo';
                let fieldValue = data.MobileNumber;
                let resp = response;
                resp[fieldName] = fieldValue;

                // console.log(" Success response On LogIn User : ");
                // console.log(response);
                // console.log(response.data);

                dispatch({
                    type: LOGIN_SUCCESS,
                    payload: { response: response.data, mobileNo }
                });
                //Setting the USER MOBILE NUMBER --- LOCAL STORAGE ---
                localStorage.setItem("MobileNo", response.fieldValue);

                //Setting the USER ACCESS TOKEN --- LOCAL STORAGE ---
                localStorage.setItem("AccessToken", response.data.accessToken);

                //Setting the USER ROLE NAME --- LOCAL STORAGE ---
                localStorage.setItem("UserRole", response.data.roleName);
            })
            .catch(function (error) {
                // console.log(" ERROR ON LOGIN  IS:  ");
                // console.log(error.response);
                dispatch({
                    type: LOGIN_FAILED,
                    payload: "Username or password is invalid"
                });

            });
    }
}


export const UserLogOut = () => {
    return (dispatch) => {
        dispatch({ type: USER_LOGOUT })

    }
}

export const GetMyDetailsFromDb = (AccessToken) => {

    let url = PE_API_URL + "/api/UserManagement/GetUserDetails"
    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {

        fetch(url, {
            method: "get",
            headers: {
                'Authorization': Token,
                'Accept': 'application/json',
            }

        })
            .then(response => {
                if (!response.ok) { throw response }
                return response.json();
            })
            .then((response) => {

                dispatch({
                    type: GET_OPERATING_USER_DETAILS_SUCCESS,
                    payload: response
                });

            })
            .catch(function (err) {
                // console.log('Login Error ---------------------')
                // console.error(err);
                dispatch({
                    type: GET_OPERATING_USER_DETAILS_FAIL,
                    payload: ""
                });
            });
    }

}


export const getUserAccessPermissions = (accessToken, userId) => {

    let url = PE_API_URL + AUTHERIZATION_ + '/permissions/me';
    return (dispatch) => {

        axios.get(url, {
            headers: {
                'Authorization': 'Bearer '.concat(accessToken)
            }
        }).then(response => {

            // console.log(" response response response getUserAccessPermissions in   ");
            // console.log(response);

            dispatch({
                type: GET_USER_ACCESS_PERMISSIONS_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {
            dispatch({
                type: GET_USER_ACCESS_PERMISSIONS_FAIL,
                payload: "Login Failed!"
            });
        });
    }
}

export const GetMyPermissionsMenuList = (accessToken) => {

    let url = PE_API_URL + MY_PEMISSIONS_MENU_
    return (dispatch) => {

        axios.get(url, {
            headers: {
                'Authorization': 'Bearer '.concat(accessToken)
            }
        }).then(response => {
            // console.log(" response response response getUserAccessPermissions in   ");
            // console.log(response);
            dispatch({
                type: GET_MY_PERMISSIONS_MENU_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {
            dispatch({
                type: GET_MY_PERMISSIONS_MENU_FAIL,
                payload: "Login Failed!"
            });
        });
    }

}

// FORGOT_PASSWORD  ACTION START
export const SaveForgotPassDetails = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_FORGOT_PASS_DETAILS,
            payload: { value, field }
        })

    }
}

// FORGOT_PASSWORD  ACTION START
export const SaveInputWarnings = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_FORGOT_PASS_DETAILS_WARNINGS,
            payload: { value, field }
        })

    }
}

export const Forgotpassword = ({ mobileNo }) => {
    let url = PE_API_URL + FORGOT_PASSWORD_API;
    console.log("mobileNo: " + mobileNo);
    return (dispatch) => {
        let data = {
            MobileNo: mobileNo
        }

        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            url,
        }).then(function (response) {
            console.log(" Success response On forgotpassword : ");
            console.log(response);
            console.log(response.data);
            let RequestId = response.data.requestId;

            dispatch({
                type: FORGOT_PASSWORD_REQUEST_SUCCESS,
                payload: { RequestId }
            });
        }).catch(function (error) {
                console.log(" ERROR ON LOGIN  IS:  ");
                console.log(error.response);
                dispatch({
                    type: FORGOT_PASSWORD_REQUEST_FAIL,
                    payload:  error.response 
                });
            });
    }
}

export const ValidateResetPassOTP = (DATAtoSend) => {
    let url = PE_API_URL + AUTHENTICATION_ + "/validateotp";

    return (dispatch) => {
        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(DATAtoSend),
            url,
        }).then(function (response) {

            let RequestId = response.data.requestId;
            dispatch({
                type: VALIDATE_OTP_SUCCESS,
            });
        })
            .catch(function (error) {
                console.log(" ERROR ON LOGIN  IS:  ");
                console.log(error.response);
                dispatch({
                    type: VALIDATE_OTP_FAIL,
                    password: error.response.data.message
                });
            });
    }
}


export const ResendOTP = ({ mobileNo, requestId }) => {
    let url = PE_API_URL + RESEND_OTP_API;
    console.log("mobileNo: " + mobileNo);
    return (dispatch) => {
        let data = {
            MobileNo: mobileNo,
            RequestId: requestId
        }
        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            url,
        }).then(function (response) {
            console.log(" Success response On Resend OTP : ");
            console.log(response);
            console.log(response.data);
            let RequestId = response.data.requestId;
            dispatch({
                type: RESEND_OTP_SUCCESS,
                payload: { RequestId }
            });
        })
            .catch(function (error) {
                console.log(" ERROR ON LOGIN  IS:  ");
                console.log(error.response);
            });
    }
}

export const ResetPassword = ({ mobileNo, requestId, CancatOtp, newPassword }) => {
    let url = PE_API_URL + RESET_PASSWORD_API;
    console.log("mobileNo: " + mobileNo);
    return (dispatch) => {
        let data = {
            mobileNo: mobileNo,
            requestId: requestId,
            otp: CancatOtp,
            newPassword: newPassword
        }
        console.log(data)

        axios({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: JSON.stringify(data),
            url,
        }).then(function (response) {
            console.log(" Success response On ResetPassword  : ");
            console.log(response);
            console.log(response.data);

            dispatch({
                type: RESET_PASSWORD_SUCCESS,
                // payload:  {mobileNo}
            });
        })
            .catch(function (error) {
                console.log(" ERROR ON LOGIN  IS:  ");
                console.log(error.response);
                dispatch({
                    type: RESET_PASSWORD_FAIL,
                    payload: error.response.data
                });
            });
    }

}



export const RestPasswordMisMatch = () => {
    return (dispatch) => {
        dispatch({
            type: RESET_PASS_WORD_MISMATCH,
        });
    }
}
