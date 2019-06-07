import { REHYDRATE } from 'redux-persist'
import { SaveForgotPassDetails } from './AuthenticationAction';
// import { stat } from 'fs';

import {


    SAVE_PROGRESS_INDICATOR_STATUS,

    RESET_LOGIN,
    REDUCER_INITIAL,
    LOGIN_SUCCESS,
    LOGIN_FAILED,




    GET_OPERATING_USER_DETAILS_SUCCESS,
    GET_OPERATING_USER_DETAILS_FAIL,

    GET_USER_ROLE_MD_PERMS,
    GET_USER_ACCESS_PERMISSIONS_SUCCESS,
    GET_USER_ROLE_MD_PERMS_ERROR,

    GET_DASHBOARD_WALLET_DETAILS_SUCCESS,
    GET_DASHBOARD_WALLET_DETAILS_FAIL,

    USER_LOGOUT,
    SAVE_LOG_IN_IP_DETAILS,

    FORGOT_PASSWORD_REQUEST_SUCCESS,
    FORGOT_PASSWORD_REQUEST_FAIL,
    RESEND_OTP_SUCCESS,
    RESET_PASSWORD_SUCCESS,
    SAVE_FORGOT_PASS_DETAILS,
    SAVE_FORGOT_PASS_DETAILS_WARNINGS,
    GET_MY_PERMISSIONS_MENU_SUCCESS,
    VALIDATE_OTP_SUCCESS,
    VALIDATE_OTP_FAIL,
    RESET_PASSWORD_FAIL,
    RESET_PASS_WORD_MISMATCH
} from './Types';

import rootReducer from '../../allreducers';
const INITIAL_STATE = {
    ProgressIndicator:{
        InProgress:false,
    },

    logOut: false,
    OperatingUser: '',
    walletBalance: '',
    
 
    LoginDetails: {
        mobileNo: '',
        password: '',
        roleName: '',
        fullName: '',
        accessToken: '',
        isLoginSuccess: false,
        loginError: '',
        UserId: '',
        forgotPasswordMobileNo: "",
        requestId: '',
        ForgotPass_Request_Success: false,
        OtpValidation_Success: false,
        OtpValidation_Fail: false,
        Reset_pass_Process_Error: '',
        ResetPassMisMatch: false,
        otp: '',
        OTP: {
            field1: '',
            field2: '',
            field3: '',
            field4: '',
            field5: '',
            field6: '',
        },
        newPassword: '',
        newpasswordConfirm: '',
        resetPassword_Success: false,
        InputWarnings:{
            mobileNoWarning:"",    
        }
    },
    userRoleModulePermissions: {
        MyPermissionsMenu: [],
        modulePermissions: {},
        isLoginRolesLoaded: false
    },
   
};



export default (state = INITIAL_STATE, action) => {

    switch (action.type) {


        case SAVE_PROGRESS_INDICATOR_STATUS:
            return { ...state, 
            ProgressIndicator:{
                ...state.ProgressIndicator,
                InProgress:true
            } }


        case RESET_LOGIN:
            return { ...state, ...INITIAL_STATE }



        case REHYDRATE:

            return action.payload === undefined ? { ...state } : { ...state, ...action.payload.Authentication }

        case REDUCER_INITIAL:

            console.log("  AUTHE MANAGEMENT REDUCER . . . . . . ");
            return {
                ...INITIAL_STATE
            }

        case SAVE_LOG_IN_IP_DETAILS:
            return {
                ...state, 
                logOut: true,

                LoginDetails: {
                    ...state.LoginDetails,
                    mobileNo: action.payload.field === 'mobileNo' ? action.payload.value : state.LoginDetails.mobileNo,
                    password: action.payload.field === 'password' ? action.payload.value : state.LoginDetails.password,
                },
            }

        case LOGIN_SUCCESS:
            console.log(" Response On LogIN In Reducer Component : ");
            console.log(action.payload);
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    mobileNo: action.payload.mobileNo,
                    roleName: action.payload.response.roleName,
                    fullName: action.payload.response.fullName,
                    accessToken: action.payload.response.acessToken,
                    isLoginSuccess: true,
                    UserId: action.payload.response.userId,
                    loginError: ""

                },
                ProgressIndicator:{
                    ...state.ProgressIndicator,
                    InProgress:false
                }
            }

        case LOGIN_FAILED:
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails, isLoginSuccess: false,
                    loginError: action.payload
                },
                ProgressIndicator:{
                    ...state.ProgressIndicator,
                    InProgress:false
                }
            }

        case USER_LOGOUT:
            return {
                ...state, logOut: true,

                LoginDetails: {
                    ...state.LoginDetails,
                    mobileNo: '',
                    password: '',
                    roleName: '',
                    fullName: '',
                    accessToken: '',
                    isLoginSuccess: false,
                    loginError: '',

                },
                userRoleModulePermissions: {
                    ...state.userRoleModulePermissions,
                    modulePermissions: {},
                    isLoginRolesLoaded: false
                },
            }

        case GET_OPERATING_USER_DETAILS_SUCCESS:
            return {
                ...state, OperatingUser: action.payload
            }
        case GET_OPERATING_USER_DETAILS_FAIL:
            return {
                ...state
            }

        case GET_USER_ROLE_MD_PERMS:
            return {
                ...state, userRoleModulePermissions: {
                    ...state.userRoleModulePermissions,
                    ...INITIAL_STATE.userRoleModulePermissions
                }
            }

        case GET_USER_ACCESS_PERMISSIONS_SUCCESS:
            // create array object module name should be PendingUsers and give permissions 


            let PendingUsers = {
                moduleName: "PendingRetailer",
                permissions: [
                    { id: 200, name: "View PendingRetailer " },
                    { id: 300, name: "Add PendingRetailer" },
                    { id: 400, name: "Update PendingRetailer " },
                    { id: 500, name: "Delete PendingRetailer" },
                    { id: 600, name: "Verify PendingRetailer" },
                ]
            }

            action.payload.push(PendingUsers)

            return {
                ...state, userRoleModulePermissions: {
                    ...state.userRoleModulePermissions,
                    modulePermissions: action.payload,
                    isLoginRolesLoaded: true
                }
            }

        case GET_USER_ROLE_MD_PERMS_ERROR:
            return {
                ...state, userRoleModulePermissions: {
                    ...state.userRoleModulePermissions,
                    isLoginRolesLoaded: false
                }
            }

        case GET_DASHBOARD_WALLET_DETAILS_SUCCESS:

            console.log(" In Authentication Reduce : ");
            console.log(action.payload);

            return {
                ...state, walletBalance: action.payload.item1
            }



        case SAVE_FORGOT_PASS_DETAILS:
            return saveForgotPassdetails(state, action);

        case SAVE_FORGOT_PASS_DETAILS_WARNINGS:
            return saveInputWarnings(state, action);

            console.log(" IN REDUCER : ");
            console.log(action.payload);

        case FORGOT_PASSWORD_REQUEST_SUCCESS:
            console.log(" IN REDUCER : ");
            console.log(action.payload);
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    requestId: action.payload.RequestId,
                    ForgotPass_Request_Success: true
                }
            }
        case FORGOT_PASSWORD_REQUEST_FAIL:
            console.log(" IN REDUCER : ");
            console.log(action.payload);
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    InputWarnings:{
                        ...state.LoginDetails.InputWarnings,
                        mobileNoWarning:"Please enter registered mobile number"
                    }
                  
                }
            }

        case VALIDATE_OTP_SUCCESS:
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    OtpValidation_Success: true,
                },
                ProgressIndicator:{
                    ...state.ProgressIndicator,
                    InProgress:false
                }
            }

        case VALIDATE_OTP_FAIL:
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    OtpValidation_Fail: true,
                    Reset_pass_Process_Error: action.payload === undefined ? "OTP Mismatch. please try again." : "action.payload",
                    OTP: {
                        ...state.LoginDetails.OTP,
                        field1: '',
                        field2: '',
                        field3: '',
                        field4: '',
                        field5: '',
                        field6: '',
                    },
                },
                ProgressIndicator:{
                    ...state.ProgressIndicator,
                    InProgress:false
                }
            }

        case RESEND_OTP_SUCCESS:
            console.log(" IN REDUCER : ");
            console.log(action.payload);
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    requestId: action.payload.RequestId,
                }
            }
        case RESET_PASSWORD_SUCCESS:
            console.log(" IN REDUCER : ");
            console.log(action.payload);
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    resetPassword_Success: true,
                }
            }

     
                
        case RESET_PASSWORD_FAIL:
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    resetPassword_fail: true,
                    newPassword: '',
                    newpasswordConfirm: ''

                }
            }

        case RESET_PASS_WORD_MISMATCH:
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    newPassword: '',
                    newpasswordConfirm: '',
                    ResetPassMisMatch: true
                }
            }

        case GET_MY_PERMISSIONS_MENU_SUCCESS:

            // let AdminRetailers =   {moduleId: 0, menuId: 11, menuText: "Retailer", 
            //                             url: "/AdminRetailer", icon: "icon-"}


            // action.payload.push(AdminRetailers)

            return {
                ...state, userRoleModulePermissions: {
                    ...state.userRoleModulePermissions,
                    MyPermissionsMenu: action.payload,
                    isLoginRolesLoaded: true
                }
            }

        default:
            return {
                ...state,
            }
    }
};

function saveForgotPassdetails(state, action) {
    switch (action.payload.field) {

        case 'mobileNo':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    forgotPasswordMobileNo: action.payload.value,
                    InputWarnings:{
                        ...state.LoginDetails.InputWarnings,
                        mobileNoWarning:""
                    }
                }
            }

        case 'newpassword':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    newPassword: action.payload.value,
                    ResetPassMisMatch: false,
                    InputWarnings:{
                        ...state.LoginDetails.InputWarnings,
                        mobileNoWarning:""
                    }
                }
            }
        case 'newpasswordConfirm':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    newpasswordConfirm: action.payload.value,
                    ResetPassMisMatch: false,
                    InputWarnings:{
                        ...state.LoginDetails.InputWarnings,
                        mobileNoWarning:""
                    }
                }
            }

        case 'otpfield1':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    // otp: action.payload.value,
                    OtpValidation_Fail: false,
                    Reset_pass_Process_Error: '',
                    OTP: {
                        ...state.LoginDetails.OTP,
                        field1: action.payload.value,
                    },
                }
            }
        case 'otpfield2':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    // otp: this.state.LoginDetails.otp + action.payload.value,
                    OTP: {
                        ...state.LoginDetails.OTP,
                        field2: action.payload.value,
                    },
                    OtpValidation_Fail: false,
                    Reset_pass_Process_Error: '',
                }
            }
        case 'otpfield3':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    // otp: this.state.LoginDetails.otp + action.payload.value,
                    OTP: {
                        ...state.LoginDetails.OTP,
                        field3: action.payload.value,
                    },
                    OtpValidation_Fail: false,
                    Reset_pass_Process_Error: '',
                }
            }

        case 'otpfield4':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    // otp: this.state.LoginDetails.otp + action.payload.value,
                    OTP: {
                        ...state.LoginDetails.OTP,
                        field4: action.payload.value,
                    },
                    OtpValidation_Fail: false,
                    Reset_pass_Process_Error: '',
                }
            }

        case 'otpfield5':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    // otp: this.state.LoginDetails.otp + action.payload.value,
                    OTP: {
                        ...state.LoginDetails.OTP,
                        field5: action.payload.value,
                    },
                    OtpValidation_Fail: false,
                    Reset_pass_Process_Error: '',
                }
            }

        case 'otpfield6':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    // otp: this.state.LoginDetails.otp + action.payload.value,
                    OTP: {
                        ...state.LoginDetails.OTP,
                        field6: action.payload.value,
                    },
                    OtpValidation_Fail: false,
                    Reset_pass_Process_Error: '',
                }
            }
    }

}


function saveInputWarnings(state, action) {
    switch (action.payload.field) {

        case 'mobileNo':
            return {
                ...state, LoginDetails: {
                    ...state.LoginDetails,
                    InputWarnings:{
                        ...state.LoginDetails.InputWarnings,
                        mobileNoWarning:action.payload.value,
                    } 
                }
            }
        }

}