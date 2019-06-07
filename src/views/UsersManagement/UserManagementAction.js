
import {

    SAVE_PROGRESS_INDICATOR_STATUS,
    SAVE_PROGRESS_INDICATOR_STATUS_FALSE,
    RESET_ORG,
    RESET,
    RESET_EDIT_ORG_BANK_FORM,

    //#region ROLE Related Actions.
    GET_ALL_ROLES_AND_PERMISSIONS_SUCCESS,
    GET_ALL_ROLES_AND_PERMISSIONS_FAIL,

    //#endregion



    //#region ORAGANIZATION(RETAILER and DISTRIBUTORS) Related Actions.

    GET_CREATE_ORG_INFO_SUCCESS,
    GET_CREATE_ORG_INFO_FAIL,

    GET_BANK_STATES_SUCCESS_IN_ORG,
    GET_BANK_STATES_FAIL_IN_ORG,

    GET_BANK_CITIES_SUCCESS_IN_ORG,
    GET_BANK_CITIES_FAIL_IN_ORG,

    GET_BANK_BRANCHES_SUCCESS_IN_ORG,
    GET_BANK_BRANCHES_FAIL_IN_ORG,

    GET_BRANCH_IFSC_SUCCESS_IN_ORG,
    GET_BRANCH_IFSC_FAIL_IN_ORG,

    GET_ORGANIZATIONS_LIST,
    GET_ORGANIZATIONS_LIST_SUCCESS,
    GET_ORGANIZATIONS_LIST_FAIL,

    GET_DISTRIBUTOR_LIST_SUCCESS,
    GET_DISTRIBUTOR_LIST_FAIL,
    GET_DISTRIBUTOR_LIST,

    //#endregion



    // GET_ORGANIZATIONS_STORE_INFO_SUCCESS,
    // GET_ORGANIZATIONS_STORE_INFO_FAIL,

    GET_DISTRIBUTOR_BASIC_DETAILS_TO_EDIT_SUCCESS,

    GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_SUCCESS,
    GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_FAIL,



    GET_TEMPLATE_OF_ORG_DETAILS_SUCCESS,
    GET_TEMPLATE_OF_ORG_DETAILS_FAIL,

    SEND_CREATE_ORGANIZATION_DETAILS_SUCCESS,
    SEND_CREATE_ORGANIZATION_DETAILS_FAIL,

    SAVE_ORG_DOCUMENTS,
    SAVE_ORG_DOCUMENT_WARNINGS,
    GET_DOCUMENT_SUCCESS,
    GET_DOCUMENT_FAIL,
    GET_ORG_DOCUMENTS_SUCCESS,
    UPLOAD_ORG_DOCUMENTS,
    UPLOAD_ORG_DOCUMENTS_SUCCESS,
    UPLOAD_ORG_DOCUMENTS_FAIL,

    SEND_ORG_BANK_DETAILS_AT_REGISTRAION,
    SEND_ORG_BANK_DETAILS_AT_REGISTRAION_SUCCESS,
    SEND_ORG_BANK_DETAILS_AT_REGISTRAION_FAIL,

    GET_BANK_STATES_ON_EDIT_ORG_BANKS_SUCCESS,
    GET_BANK_STATES_ON_EDIT_ORG_BANKS_FAIL,

    GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_SUCCESS,
    GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_FAIL,

    GET_BANK_IFSC_ON_EDIT_ORG_BANKS_SUCCESS,
    GET_BANK_IFSC_ON_EDIT_ORG_BANKS_FAIL,

    ADD_NEW_ORG_BANK,
    GET_ALL_ROLES,



    DUPLICATE_PERMISSIONS_ROLE_NAME,
    ADD_NEW_ROLE_MODULE_SUCCESS,
    ADD_NEW_ROLE_MODULE_FAIL,

    EDIT_ROLE_MODULE_PERMISSIONS,
    SAVE_ROLE_NAME,
    GET_ROLE_MODULE_TEMPLATE_SUCCESS,
    GET_ROLE_MODULE_TEMPLATE_FAIL,

    OPEN_OR_CLOSE_EDIT_ROLE_MODULE_MODAL,


    OPEN_OR_CLOSE_DELETE_ROLE_MODAL,

    UPDATE_ROLE_PERMISSIONS_SUCCESS,

    OPEN_OR_CLOSE_MODAL_OF_ADDUSERS,


    GET_ALL_USERS_LIST,
    GET_ALL_USERS_LIST_SUCCESS,
    GET_ALL_USERS_LIST_FAIL,

    ADD_NEW_USER,
    ADD_NEW_USER_SUCCESS,
    ADD_NEW_USER_FAIL,




    SEND_EDITTED_ORGANIZATION_DETAILS_FAIL,
    SEND_EDITTED_ORGANIZATION_DETAILS_SUCCESS,

    SAVE_EDITING_ORG_BASIC_DETAILS,
    REGEX_WARNING_AT_EDIT_ORG_BASIC_DETAILS,

    SAVE_EDITING_USER_BASIC_DETAILS,
    SAVE_CREATING_USER_BASIC_DETAILS,

    SAVE_CREATING_OR_EDITING_FSE_DETAILS,
    SAVE_CREATING_OR_EDITING_AGENT_DETAILS,
    WARNING_AT_CREATE_OR_EDIT_FSE,
    WARNING_AT_CREATE_OR_EDIT_AGENT,

    REGEX_WARNING_AT_CREATING_USER_DETAILS,
    REGEX_WARNING_AT_EDIT_USER_BASIC_DETAILS,

    RETAILER_USER_SETTINGS_CLICKED,
    RETAILER_USER_SETTINGS_CHOSEN,


    USER_SETTINGS_BUTTON_CLICKED,
    USER_SETTINGS_OPTION_CHOSEN,
    CLOSE_USER_SETTINGS_MODAL,
    OPEN_ADD_USER_MODEL_SUCCESS,
    OPEN_ADD_USER_MODEL_FAIL,

    ORGANIZATION_EDIT_MODAL,
    ORGANIZATION_EDIT_MODAL_CLOSE,


    SAVE_ORG_REGISTRATION_INPUT_DETAILS,
    SAVE_CREATE_NEW_USER_INPUT_DETAILS,

    ORG_REGISTRATION_INPUT_WARNINGS,
    CREATE_USER_INPUT_WARNINGS,
    ADD_NEW_ORG_BANK_OPTION_TO_ARRAY,
    REMOVE_NEW_ORG_BANK_OPTION_FROM_ARRAY,
    SAVE_NEW_ORG_BANK_DETAILS,
    SAVE_MOBILE_NUMBER,

    GET_DISTRIBUTOR_BANKS_TO_EDIT_SUCCESS,
    GET_ORAGANIZATION_BANKS_TO_EDIT_SUCCESS,
    GET_ORAGANIZATION_BANKS_TO_EDIT_FAIL,
    SAVE_EDITING_ORG_BANK_DETAILS,
    REGEX_WARNINGS_AT_EDIT_ORG_BANK_DETAILS,

    SEND_ORG_BANK_DETAILS_TO_EDIT_SUCCESS,
    SEND_ORG_BANK_DETAILS_TO_EDIT_FAIL,

    SAVE_ORG_BANK_TO_EDIT_AND_GET_BANKCITIES_SUCCESS,

    STORE_FILTERED_RETAILERS_LIST,
    STORE_FILTERED_USERS_LIST,

    ACTIVATE_OR_INACTIVATE_USER,
    ACTIVATE_OR_INACTIVATE_USER_SUCCESS,
    ACTIVATE_OR_INACTIVATE_USER_FAIL,

    ACTIVATE_INACTIVATE_OR_ORGANIZATION,
    ACTIVATE_INACTIVATE_OR_ORGANIZATION_SUCCESS,
    ACTIVATE_INACTIVATE_OR_ORGANIZATION_FAIL,



    CASH_IN_PROCEED_SUCCESS_FOR_ORG_USER,
    CASH_IN_PROCEED_FAIL_FOR_ORG_USER,
    SAVE_CASH_IN_AMOUNT,

    GET_ALL_BANKS_FROM_DB_SUCCESS,
    GET_ALL_BANKS_FROM_DB_FAIL,
    GET_STATES_OF_SELECTED_BANK_SUCCESS,
    GET_STATES_OF_SELECTED_BANK_FAIL,
    GET_BRANCHES_OF_SELECTED_BANK_AND_STATE_SUCCESS,
    GET_BRANCHES_OF_SELECTED_BANK_AND_STATE_FAIL,


    SAVE_ORG_BASIC_DETAILS,
    // ...................................... ADMIN RETAILER TYPES ..............................//


    SET_FILTERED_ORGANIZATION_DATA,




    REMOVE_API_SUCCESS_OR_FAILURE_FOOTER_VIEW,

    SEND_EDITTED_USER_DETAILS,
    SEND_EDITTED_USER_DETAILS_SUCCESS,
    SEND_EDITTED_USER_DETAILS_FAIL,





    GET_ORG_RETAILERS_LIST_SUCCESS,
    GET_ORG_RETAILERS_LIST_FAIL,

    CLEAR_RESPONSE_ON_ORG_APIS,
    CLEAR_RESPONSE_OF_USER_APIS,

    SAVE_WALLET_BALANCE_TO_UPDATE,

    ADD_FUNDS_TO_ORG_WALLET,
    ADD_FUNDS_TO_ORG_WALLET_SUCCESS,
    ADD_FUNDS_TO_ORG_WALLET_FAIL,
    ADD_FUNDS_TO_USER_WALLET,
    ADD_FUNDS_TO_USER_WALLET_SUCCESS,
    ADD_FUNDS_TO_USER_WALLET_FAIL,
    GET_ORG_DOCS_SUCCESS,
    GET_UN_APPROVED_DISTRIBUTOR_LIST_SUCCESS,
    GET_UN_APPROVED_DISTRIBUTOR_LIST_FAIL,
    GET_UN_APPROVED_ORG_LIST,
    GET_UN_APPROVED_ORG_LIST_SUCCESS,
    GET_UN_APPROVED_ORG_LIST_FAIL,
    APPROVE_ORGANIZATION_FAIL,
    APPROVE_ORGANIZATION_SUCCESS,
    APPROVE_ORGANIZATION,
    OPEN_REJECT_ORG_MODAL,
    CLOSE_REJECT_ORG_MODAL,
    SAVE_REJECT_ORG_REASON,
    REJECT_NEW_ORG_SUCCESS,
    GET_REJECTED_USERS_SUCCESS,
    PROCEED_TO_ADD_NEW_ORG,
    GET_BANK_CITIES_ON_EDIT_ORG_BANKS_SUCCESS,
    GET_BANK_CITIES_ON_EDIT_ORG_BANKS_FAIL,
    SEND_ORG_BANK_DETAILS_TO_ADD_SUCCESS,
    SEND_ORG_BANK_DETAILS_TO_ADD_FAIL,
    GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_SUCCESS,
    GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_FAIL,
    GET_ROLES_AND_PERMISSIONS_TEMPLATE_SUCCESS,
    GET_ROLES_AND_PERMISSIONS_TEMPLATE_FAIL,
    //#endregion

} from './Types';

import {
    GET_DASHBOARD_WALLET_DETAILS_SUCCESS,
    GET_DASHBOARD_WALLET_DETAILS_FAIL
} from '../Authentication/types';

import axios from 'axios';

import {
    PE_API_URL, GET_MODULES_AND_PERMISSIONS,
    ADD_NEW_ROLE_MODULE, GET_ALL_ORGANIZATIONS, CREATE_USER, GET_CREATE_ORG_TEMPLATE, CREATE_FSE,
    REGISTER_ORG, GET_BANK_CITIES, GET_BANK_BRANCHES, ACTIVATE_OR_INACTIVATE_ORG, CASH_IN_ORGANIZATION,
    GET_ORGANIZATION_MAPPED_BANKS, ORG_BASIC_DETAILS_TO_EDIT, UPDATE_ORG_BANK, UPDATE_TENANT_BANK, GET_USER_LIST, UPDATE_USER_STATUS,
    USER, DASHBOARD_API_ON_WALLET_BALS, UPDATE_ORG_DOCUMENTS, UPDATE_ORG_WALLET, ORG_LIST_TO_APPROVE_BY_ADMIN, APPROVE_ORG_URL, ORGANIZATION_, AUTHERIZATION_, BANKS_, WALLET_

} from '../../GlobalVars';
import { conditionallyUpdateScrollbar } from 'reactstrap/lib/utils';

import { Default_Error_msg } from '../../GlobalVars';

import { Interceptor } from '../axiosInterceptor';






//#region ROLE Related Actions.

export const SetProgressIndicatorFalse = () => {

    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS_FALSE,
        });
    };
}


export const ResetOrg = () => {

    return (dispatch) => {

        dispatch({
            type: RESET_ORG,
        });
    };
}

export const Reset = () => {

    return (dispatch) => {

        dispatch({
            type: RESET,
        });
    };
}




export const ResetForm = () => {

    return (dispatch) => {

        dispatch({
            type: RESET_EDIT_ORG_BANK_FORM,
        });
    };
}
export const GetAllRolesAndPermissions = ({ AccessToken }) => {

    let URL = PE_API_URL + AUTHERIZATION_ + '/role';

    return (dispatch) => {

        const AuthStr = 'Bearer '.concat(AccessToken);
        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(response => {
            dispatch({
                type: GET_ALL_ROLES_AND_PERMISSIONS_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {
            dispatch({
                type: GET_ALL_ROLES_AND_PERMISSIONS_FAIL,
                payload: "Login Failed!"
            });
        });

    };

};

export const Get_Template_Of_AllRolesAndPermissions = (AccessToken) => {

    let URL = PE_API_URL + AUTHERIZATION_ + '/permissions';

    return (dispatch) => {

        const AuthStr = 'Bearer '.concat(AccessToken);
        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(response => {
            dispatch({
                type: GET_ROLES_AND_PERMISSIONS_TEMPLATE_SUCCESS,
                payload: response.data,
            });
        }).catch((error) => {
            dispatch({
                type: GET_ROLES_AND_PERMISSIONS_TEMPLATE_FAIL,
                payload: "Login Failed!"
            });
        });

    };
}

export const GetRolePermissionsToEdit_ON_ID = (AccessToken, Role) => {

    let URL = PE_API_URL + AUTHERIZATION_ + '/permissions/role/' + Role.id;
    return (dispatch) => {

        const AuthStr = 'Bearer '.concat(AccessToken);
        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(response => {
            console.log(" Response On  GetRolePermissionsToEdit");
            console.log(response);
            let ResponseData = response.data;
            dispatch({
                type: GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_SUCCESS,
                payload: { ResponseData, Role }
            });
        }).catch((error) => {
            console.log(" error On  GetRolePermissionsToEdit");
            console.log(error);
            console.log(error.response);
            dispatch({
                type: GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_FAIL,
                payload: "Login Failed!"
            });
        });

    };

}
//#endregion
//#region Organization (Retailer And Distributors) Related Actions.
export const GetOrganizationsList = (AccessToken, orgTypeId, offset, limit, searchText, orgTypeName) => {
    let TENANT_TYPE = orgTypeName == "Distributor" ? "distributorship" : "retailership";

    let url = PE_API_URL + GET_ALL_ORGANIZATIONS + TENANT_TYPE + '/' + offset + '/' + limit + '/' + searchText;
    console.log(url);
    let Token = 'Bearer ' + AccessToken
    return (dispatch) => {

        dispatch({
            type: GET_ORGANIZATIONS_LIST,
            payload: { orgTypeId, orgTypeName }
        });

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios.get(url, {
            headers: {
                'Authorization': Token
            }
        }).then(function (response) {
            console.log(response)

            let Data = response.data
            dispatch({
                type: GET_ORGANIZATIONS_LIST_SUCCESS,
                payload: { Data, orgTypeId, orgTypeName }
            });
        }).catch(function (error) {
            dispatch({
                type: GET_ORGANIZATIONS_LIST_FAIL,
                // payload: {error}
            });
        });
    }
}






export const GetCreateOrganizationInfo = (AccessToken) => {

    let url = PE_API_URL + ORGANIZATION_ + "/retailership";

    return (dispatch) => {

        const AuthStr = 'Bearer '.concat(AccessToken);

        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {
                dispatch({
                    type: GET_CREATE_ORG_INFO_SUCCESS,
                    payload: response.data,
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_CREATE_ORG_INFO_FAIL,
                    payload: error
                });

            });
    };
};


export const Get_States_Of_Selected_Bank = (AccessToken, bankId, index) => {


    let url = PE_API_URL + BANKS_ + '/ ' + bankId + '/state';
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {

                const BankStates = response.data.states;
                dispatch({
                    type: GET_BANK_STATES_SUCCESS_IN_ORG,
                    payload: { BankStates, bankId, index }
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_BANK_STATES_FAIL_IN_ORG,
                    payload: error
                });

            });
    }
}

export const GetCitesOfSelectedBankAndState = (AccessToken, bankId, StateId, index) => {

    let url = PE_API_URL + BANKS_ + '/ ' + bankId + '/state/' + StateId + '/city';
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {

                const BankCities = response.data.cities;
                dispatch({
                    type: GET_BANK_CITIES_SUCCESS_IN_ORG,
                    payload: { BankCities, StateId, index }
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_BANK_CITIES_FAIL_IN_ORG,
                    payload: error
                });
            });
    }
}


export const Get_Branches_OfBankAndCity = (AccessToken, bankId, stateId, cityId, index) => {


    let url = PE_API_URL + BANKS_ + '/' + bankId + '/state/' + stateId + '/city/' + cityId + '/branch';
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {
                const BankBranches = response.data.branches;
                dispatch({
                    type: GET_BANK_BRANCHES_SUCCESS_IN_ORG,
                    payload: { BankBranches, cityId, index }
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_BANK_BRANCHES_FAIL_IN_ORG,
                    payload: error
                });
            });
    }
}


export const Get_IFSC_OfBankBranch = (AccessToken, bankId, stateId, cityId, branchId, index) => {
    let url = PE_API_URL + BANKS_ + '/' + bankId + '/state/' + stateId + '/city/' + cityId + '/branch/' + branchId;
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {

                const IFSCdetails = response.data;
                dispatch({
                    type: GET_BRANCH_IFSC_SUCCESS_IN_ORG,
                    payload: { IFSCdetails, branchId, index }
                });
            })
            .catch(function (error) {

                dispatch({
                    type: GET_BRANCH_IFSC_FAIL_IN_ORG,
                    payload: error
                });
            });
    }
}


export const ProceedToAddNewOrg = (orgType) => {

    return (dispatch) => {

        dispatch({
            type: PROCEED_TO_ADD_NEW_ORG,
            payload: orgType,
        });
    };
}

//#endregion



export const StoreFilteredRetailersList = (filteredRetailerList) => {

    return (dispatch) => {

        dispatch({
            type: STORE_FILTERED_RETAILERS_LIST,
            payload: filteredRetailerList,
        });
    };
}

export const setFilteredOrganizationUsersData = (filteredOrgList) => {

    return (dispatch) => {

        dispatch({
            type: SET_FILTERED_ORGANIZATION_DATA,
            payload: filteredOrgList,
        });
    };
}

export const EditRoleModulePermissions = (moduleName, item, checkValue) => {
    return (dispatch) => {
        dispatch({
            type: EDIT_ROLE_MODULE_PERMISSIONS,
            payload: { moduleName, item, checkValue }
        })
    }
}

export const SaveRoleName = (value) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_ROLE_NAME,
            payload: value
        })
    }
}

export const GetRoleModuleTemplateToAddNewRole = (AccessToken) => {

    let URL = PE_API_URL + GET_MODULES_AND_PERMISSIONS;

    return (dispatch) => {
        dispatch({
            type: GET_ROLE_MODULE_TEMPLATE_SUCCESS,
            // payload: response.data,
        });
    };
}


export const updateRetailersettingsBtnState = (UserArrayLocation) => {

    return (dispatch) => {
        dispatch({
            type: RETAILER_USER_SETTINGS_CLICKED,
            payload: UserArrayLocation
        })
    }
}

export const updateRetailersettingsBtnStateChosenAction = (retailer, SelectedSettingOption) => {

    retailer.settingsBtn = false;

    return (dispatch) => {
        dispatch({
            type: RETAILER_USER_SETTINGS_CHOSEN,
            payload: { SelectedSettingOption, retailer }
        })
    }
}

//#region AGENT ACTIONS  

export const getAllUsers = (AccessToken, RoleName, offset, limit, searchText) => {
    const URL = PE_API_URL + GET_USER_LIST + RoleName + '/' + offset + '/' + limit + '/' + searchText;

    const AuthStr = 'Bearer '.concat(AccessToken);
    return (dispatch) => {

        dispatch({
            type: GET_ALL_USERS_LIST,
        });

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });


        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(response => {

            let UsersList = response.data;

            dispatch({
                type: GET_ALL_USERS_LIST_SUCCESS,
                payload: UsersList
            });
        }).catch((error) => {
            dispatch({
                type: GET_ALL_USERS_LIST_FAIL,
                payload: error
            });
        });
    };
}

export const CloseUserSettingsModal = (AccessToken) => {
    return (dispatch) => {
        dispatch({
            type: CLOSE_USER_SETTINGS_MODAL,
        })
    }
}

export const SubmitEdittedUserDetails = (AccessToken, UserDataToSend, usertoUpdateReducer, EditingUserType) => {

    let url = PE_API_URL + USER + EditingUserType;
    console.log(url)
    let Token = 'Bearer '.concat(AccessToken);

    UserDataToSend.picture = UserDataToSend.picture !== '' && UserDataToSend.picture !== undefined ?
        UserDataToSend.picture.substr(UserDataToSend.picture.indexOf(",") + 1) : null;

    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS
        })
        dispatch({
            type: SEND_EDITTED_USER_DETAILS
        })

        axios({
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(UserDataToSend),
            url,
        })
            .then(function (response) {

                let Data = response.data
                console.log(Data)
                dispatch({
                    type: SEND_EDITTED_USER_DETAILS_SUCCESS,
                    payload: usertoUpdateReducer
                });

            })
            .catch(function (error) {


                let Errormsg = Default_Error_msg;
                if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                    Errormsg = error.response.data.error;
                }

                dispatch({
                    type: SEND_EDITTED_USER_DETAILS_FAIL,
                    payload: Errormsg
                });
            });
    }
}


export const SendUserDetailsToDB = ({ User, AccessToken, EditingUserType }) => {

    let CreateUser_URL = EditingUserType == 'Agent' ? "Agent" : EditingUserType == 'FSE' ? "FSE" : null;

    let url = PE_API_URL + USER + CreateUser_URL

    let Token = 'Bearer ' + AccessToken
    console.log(User);
    User.active = true;
    User.mobileNumber = User.mobileNo;

    let Data = {
        addressDetails: {
            addressLine1: User.addressLine1,
            addressLine2: User.addressLine2,
            pinCode: User.pinCode,
            cityId: User.cityId
        },
        emailId: User.emailId,
        fullName: User.fullName,
        mobileNo: User.mobileNo,
        picture: User.picture
    }

    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios({
            url,
            method: 'POST',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(Data)
        }).then(function (response) {
            console.log(Data);
            let Data = User;
            Data.userId = response.data.userId
            dispatch({
                type: ADD_NEW_USER_SUCCESS,
                payload: { Data }
            });
        }).catch(function (error) {
            let Errormsg = Default_Error_msg;
            if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                Errormsg = error.response.data.error;
            }
            dispatch({
                type: ADD_NEW_USER_FAIL,
                payload: Errormsg
            });
        });
    }
}
export const openAddUserModel = (AccessToken, EditingUserType, CreateUser) => {

    return (dispatch) => {
        dispatch({
            type: OPEN_ADD_USER_MODEL_SUCCESS,
            payload: { EditingUserType, CreateUser }
        });
    }
}


export const updateUsersettingsBtnState = (indx) => {

    return (dispatch) => {
        dispatch({
            type: USER_SETTINGS_BUTTON_CLICKED,
            payload: indx
        })
    }
}

export const update_User_settingsBtn_Chosen = (User, SelectedSettingOption, EditingUserType) => {
    return (dispatch) => {
        dispatch({
            type: USER_SETTINGS_OPTION_CHOSEN,
            payload: { SelectedSettingOption, User, EditingUserType }
        })
    }
}


export const inactivateOrActivateUserStatus = (AccessToken, status, User) => {

    if (User != null) {
        User.active = status;
    }
    let ACTIVATE_OR_DEACTIVATE = status ? "activate" : "deactivate";

    let url = PE_API_URL + UPDATE_USER_STATUS + User.userId + '/' + ACTIVATE_OR_DEACTIVATE;
    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {

        dispatch({
            type: ACTIVATE_OR_INACTIVATE_USER
        })
        axios({
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            url,
        })
            .then(function (response) {

                let Data = response.data
                console.log(Data)
                dispatch({
                    type: ACTIVATE_OR_INACTIVATE_USER_SUCCESS,
                    payload: User
                });

            })
            .catch(function (error) {
                let Errormsg = Default_Error_msg;
                if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                    Errormsg = error.response.data.error;
                }

                dispatch({
                    type: ACTIVATE_OR_INACTIVATE_USER_FAIL,
                    payload: Errormsg
                });

            });
    }
}

export const StoreFilteredUsersList = (filteredAgentList) => {

    return (dispatch) => {
        dispatch({
            type: STORE_FILTERED_USERS_LIST,
            payload: filteredAgentList,
        });
    };
}

//#endregion


export const OpenOrCloseEditUserRoleModalAction = ({ AddRoleModalOpen, Role }) => {
    return (dispatch) => {

        dispatch({
            type: OPEN_OR_CLOSE_EDIT_ROLE_MODULE_MODAL,
            payload: { AddRoleModalOpen, Role },
        });
    };
}

export const OpenOrCloseDeleteRoleModalAction = ({ CancleDeleteModal, RoleName, RoleDescription }) => {

    return (dispatch) => {
        dispatch({
            type: OPEN_OR_CLOSE_DELETE_ROLE_MODAL,
            payload: { CancleDeleteModal, RoleName, RoleDescription }
        })
    }
}



export const DuplicatePermissionsRoleName = (message) => {
    return (dispatch) => {

        dispatch({
            type: DUPLICATE_PERMISSIONS_ROLE_NAME,
            payload: message
        })
    }
}

export const AddNewRoleModule = ({ Role, AccessToken }) => {

    let url = PE_API_URL + AUTHERIZATION_ + '/permission';
    const AuthStr = 'Bearer '.concat(AccessToken);
    const options = {
        method: 'POST',
        headers: {
            'Authorization': AuthStr,
            'content-type': 'application/json'
        },
        data: JSON.stringify(Role),
        url,
    };
    console.log(" .  .  .  .  .  .   AddNewRoleModule ");
    console.log(Role);

    return (dispatch) => {
        axios(options).then(response => {
            console.log(response)
            let NewRole = { id: response.data.roleId, name: Role.roleName }
            dispatch({
                type: ADD_NEW_ROLE_MODULE_SUCCESS,
                payload: NewRole,
            });
        }).catch((error) => {
            console.log(error.response);
            dispatch({
                type: ADD_NEW_ROLE_MODULE_FAIL,
                payload: "Login Failed!"
            });
        });
    }
}

export const ModifyRolePermissions = ({ Role, AccessToken }) => {

    let url = PE_API_URL + AUTHERIZATION_ + '/permission';;
    const AuthStr = 'Bearer '.concat(AccessToken);
    return (dispatch) => {

        axios({
            method: 'PUT',
            headers: {
                Authorization: AuthStr,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(Role),
            url,
        })
            .then(function (response) {
                console.log(" .  .   .   .   .   .  ModifyRolePermissions Success   ");
                console.log(response);
                // let Data = response.data
                dispatch({
                    type: UPDATE_ROLE_PERMISSIONS_SUCCESS,
                    payload: Role
                });
            })
            .catch(function (error) {
                console.log(" .  .   .   .   .   .  ModifyRolePermissions Fail   ");
                console.log(error);
                console.log(error.response);
                dispatch({
                    type: SEND_EDITTED_USER_DETAILS_FAIL,
                    payload: agent
                });

            });
    }
}




export const OpenOrCloseModalOfAddUsersAction = () => {
    return (dispatch) => {
        dispatch({
            type: OPEN_OR_CLOSE_MODAL_OF_ADDUSERS
        })
    }
}



export const Save_Editing_Org_Basic_Details = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_EDITING_ORG_BASIC_DETAILS,
            payload: { value, field }
        })
    }

}
export const Save_Editing_User_Basic_Details = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_EDITING_USER_BASIC_DETAILS,
            payload: { value, field }
        })
    }

}
export const Save_Creating_User_Details = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_CREATING_USER_BASIC_DETAILS,
            payload: { value, field }
        })
    }
}


export const IpWarnings_At_Edit_Org_Basic_Details = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: REGEX_WARNING_AT_EDIT_ORG_BASIC_DETAILS,
            payload: { value, field }
        })
    }

}
export const IpWarnings_At_Edit_User_Basic_Details = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: REGEX_WARNING_AT_EDIT_USER_BASIC_DETAILS,
            payload: { value, field }
        })
    }
}
export const IpWarnings_At_Creating_User_Details = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: REGEX_WARNING_AT_CREATING_USER_DETAILS,
            payload: { value, field }
        })
    }
}

export const SendChanged_Organization_Basic_Details = (AccessToken, orgChangedData, PresentCreatingOrgType) => {

    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "/distributorship" : "/retailership";
    let url = PE_API_URL + ORGANIZATION_ + TENANT_TYPE;
    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {

        axios({
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(orgChangedData),
            url,
        })
            .then(function (response) {

                dispatch({
                    type: SEND_EDITTED_ORGANIZATION_DETAILS_SUCCESS,
                    payload: orgChangedData
                });
            })
            .catch(function (error) {

                dispatch({
                    type: SEND_EDITTED_ORGANIZATION_DETAILS_FAIL,
                    payload: "Login Failed!"
                });

            });
    }
}


//#region ORGANIZATIONS_RELATED ACTIONS

export const GetDashBoardCardDetails = (AccessToken) => {

    let url = PE_API_URL + DASHBOARD_API_ON_WALLET_BALS
    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {

        axios.get(url,
            {
                headers: { 'Authorization': Token }
            }
        )
            .then(function (response) {

                dispatch({
                    type: GET_DASHBOARD_WALLET_DETAILS_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_DASHBOARD_WALLET_DETAILS_FAIL,
                });
            });
    }
}


export const GetRetailersList = (AccessToken, orgTypeId, offset, limit, searchText, orgTypeName) => {

    let url = PE_API_URL + GET_ALL_ORGANIZATIONS + "retailership" + '/' + offset + '/' + limit + '/' + searchText
    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {

        axios({
            method: 'POST',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            url,
        })
            .then(function (response) {
                let Data = response.data
                dispatch({
                    type: GET_ORG_RETAILERS_LIST_SUCCESS,
                    payload: { Data, orgTypeId, orgTypeName }
                });

            })
            .catch(function (error) {
                dispatch({
                    type: GET_ORG_RETAILERS_LIST_FAIL,
                    payload: "Login Failed!"
                });

            });
    }
}

export const GetCreateOrgTemplate = (AccessToken, PresentOrgTypeId) => {
    let url = PE_API_URL + GET_CREATE_ORG_TEMPLATE
    let Token = 'Bearer ' + AccessToken
    return (dispatch) => {
        axios.get(url,
            { headers: { Authorization: Token } }
        )
            .then(function (response) {

                let Data = response.data;
                Data.selectedOrganizationId = PresentOrgTypeId;  // Storing Current Registering Organization Id   

                dispatch({
                    type: GET_TEMPLATE_OF_ORG_DETAILS_SUCCESS,
                    payload: Data
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_TEMPLATE_OF_ORG_DETAILS_FAIL,
                });
            });
    }
}

export const Save_ORG_RegistrationIpDetails = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_ORG_REGISTRATION_INPUT_DETAILS,
            payload: { field, value }
        })
    }
}

export const SendCreateOrganizationDetails = (Data, AccessToken, PresentCreatingOrgType) => {
    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "/distributorship" : '/retailership';
    let url = PE_API_URL + ORGANIZATION_ + TENANT_TYPE
    let Token = 'Bearer ' + AccessToken
    console.log(url)
    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })

        axios({
            method: 'POST',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(Data),
            url,
        })
            .then(function (response) {

                let ResponseData = response.data;

                dispatch({
                    type: SEND_CREATE_ORGANIZATION_DETAILS_SUCCESS,
                    payload: ResponseData
                })
            })
            .catch(function (error) {

                let Errormsg = Default_Error_msg;

                if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {

                    if (error.response.data.error === "Organization already exists on this user's mobile no") {
                        Errormsg = " User Is Already Exist With This Mobile Number.";
                    } else Errormsg = error.response.data.error;
                }

                dispatch({
                    type: SEND_CREATE_ORGANIZATION_DETAILS_FAIL,
                    payload: Errormsg
                });
            });
    }
}

export const UpdateCreatingOrgBasicDetails = (AccessToken, OrgDetails, OrgId_RegStage) => {

    let url = PE_API_URL + ORGANIZATION_ + "/retailership";
    let Token = 'Bearer ' + AccessToken

    OrgDetails.Name = OrgDetails.fullName;
    return (dispatch) => {

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })

        axios({
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(OrgDetails),
            url,
        })
            .then(function (response) {
                dispatch({
                    type: SEND_CREATE_ORGANIZATION_DETAILS_SUCCESS,
                    payload: OrgId_RegStage
                });
            })
            .catch(function (error) {

                let Errormsg = Default_Error_msg;
                dispatch({
                    type: SEND_CREATE_ORGANIZATION_DETAILS_FAIL,
                    payload: Errormsg
                });

            });
    }
}


export const SaveOrgDocuments = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_ORG_DOCUMENTS,
            payload: { value, field }
        })
    }

}

export const GetDocument = (AccessToken, link) => {

    let url = PE_API_URL + ORGANIZATION_ + '/document/' + link;
    let Token = 'Bearer ' + AccessToken;

    return (dispatch) => {

        axios({
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            url,
        })
            .then(function (response) {

                let Data = response.data
                dispatch({
                    type: GET_DOCUMENT_SUCCESS,
                    payload: Data
                });

            })
            .catch(function (error) {
                dispatch({
                    type: GET_DOCUMENT_FAIL,

                    payload: error
                });

            });
    }

}

export const AddDocuments = (PayloadToUpload, AccessToken, PresentCreatingOrgType) => {
    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "/distributorship" : '/retailership';
    let url = PE_API_URL + ORGANIZATION_ + '/document' + TENANT_TYPE;
    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {
        dispatch({
            type: UPLOAD_ORG_DOCUMENTS,
        })

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })

        axios({
            method: 'POST',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: PayloadToUpload,
            url,
        })
            .then(function (response) {


                let Data = response.data

                dispatch({
                    type: UPLOAD_ORG_DOCUMENTS_SUCCESS,
                    payload: Data
                });

            })
            .catch(function (error) {

                dispatch({
                    type: UPLOAD_ORG_DOCUMENTS_FAIL,
                    payload: error
                });
            });

    }

}

//1.Update Documents
export const UpdateDocuments = (PayloadToUpload, AccessToken, PresentCreatingOrgType) => {
    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "/distributorship" : '/retailership';
    let url = PE_API_URL + ORGANIZATION_ + '/document' + TENANT_TYPE;
    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {

        dispatch({
            type: UPLOAD_ORG_DOCUMENTS,
        })

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })

        axios({
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: PayloadToUpload,
            url,
        })
            .then(function (response) {

                let Data = response.data

                dispatch({
                    type: UPLOAD_ORG_DOCUMENTS_SUCCESS,
                    payload: Data
                });

            })
            .catch(function (error) {
                let Errormsg = Default_Error_msg;
                if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                    Errormsg = error.response.data.error;
                }
                dispatch({
                    type: UPLOAD_ORG_DOCUMENTS_FAIL,
                    payload: Errormsg
                });
            });

    }

}


export const GetAllDocuments = (AccessToken, OrgId, PresentCreatingOrgType) => {

    let TENANT_TYPE = PresentCreatingOrgType ==
        "Distributor" ? "/distributorship/" + OrgId + "/documents" :
        '/retailership/' + OrgId + "/documents";

    let url = PE_API_URL + ORGANIZATION_ + '/document' + TENANT_TYPE;
    let Token = 'Bearer ' + AccessToken;
    var Data = {
        TenantId: OrgId,
    }
    console.log(url)

    return (dispatch) => {
        dispatch({
            type: UPLOAD_ORG_DOCUMENTS,
        })

        axios({
            method: 'GET',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(Data),
            url,
        })
            .then(function (response) {


                let Data = response.data
                console.log(response)

                dispatch({
                    type: GET_ORG_DOCUMENTS_SUCCESS,
                    payload: Data
                });

            })
            .catch(function (error) {
            });
    }
}
export const SendOrgBankDetails_At_Registraion = (AccessToken, CreatingOrganizationId, BankDetails, PresentCreatingOrgType) => {
    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "/distributorship" : '/retailership';
    const url = PE_API_URL + UPDATE_TENANT_BANK + TENANT_TYPE + '/banks';

    var Data = {
        tenantId: CreatingOrganizationId,
        banks: BankDetails,
    }
    let Token = 'Bearer ' + AccessToken
    return (dispatch) => {


        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        })

        axios({
            method: 'POST',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(Data),
            url,
        })
            .then(function (response) {

                let Data = response.data

                dispatch({
                    type: SEND_ORG_BANK_DETAILS_AT_REGISTRAION_SUCCESS,
                    payload: Data
                });

            })
            .catch(function (error) {

                let Errormsg = Default_Error_msg;

                if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                    Errormsg = error.response.data.error;
                }

                dispatch({
                    type: SEND_ORG_BANK_DETAILS_AT_REGISTRAION_FAIL,
                    payload: Errormsg
                });
            });
    }
}

export const SaveOrgDocumentWarnings = (message) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_ORG_DOCUMENT_WARNINGS,
            payload: message
        })
    }
}


export const Save_Org_Form_Types = (formType) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_ORG_BASIC_DETAILS,
            payload: { formType }
        })
    }
}


//#endregion
export const OrganiZationEditModal = (OrgData, editType) => {

    return (dispatch) => {
        dispatch({
            type: ORGANIZATION_EDIT_MODAL,
            payload: { OrgData, editType }
        })
    }
}

export const Cancle_Organization_Edit_Modal = () => {
    return (dispatch) => {
        dispatch({
            type: ORGANIZATION_EDIT_MODAL_CLOSE,

        })
    }
}

export const inactivateOrActivateOrganizationUser = (AccessToken, status, organizationId) => {

    let url = PE_API_URL + ACTIVATE_OR_INACTIVATE_ORG;

    let Data = {
        tenantId: organizationId,
        Active: status
    }
    const AuthStr = 'Bearer '.concat(AccessToken);

    const options = {
        method: 'PUT',
        headers: {
            'Authorization': AuthStr,
            'content-type': 'application/json'
        },
        data: JSON.stringify(Data),
        url,
    };
    return (dispatch) => {
        dispatch({
            type: ACTIVATE_INACTIVATE_OR_ORGANIZATION
        })

        axios(options).then(response => {


            dispatch({
                type: ACTIVATE_INACTIVATE_OR_ORGANIZATION_SUCCESS,
                payload: { status, organizationId },
            });
        }).catch((error) => {

            let Errormsg = Default_Error_msg;

            if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                Errormsg = error.response.data.error;
            }

            dispatch({
                type: ACTIVATE_INACTIVATE_OR_ORGANIZATION_FAIL,
                payload: Errormsg
            });
        });
    }
}


export const CashInProceedForOrganizationUser = (AccessToken, userNo, amount) => {

    let url = PE_API_URL + CASH_IN_ORGANIZATION;

    let Data = {
        MobileNumber: userNo,
        CashInAmount: amount
    }

    const AuthStr = 'Bearer '.concat(AccessToken);

    const options = {
        method: 'PUT',
        headers: {
            'Authorization': AuthStr,
            'content-type': 'application/json'
        },
        data: JSON.stringify(Data),
        url,
    };
    return (dispatch) => {
        axios(options).then(response => {

            dispatch({
                type: CASH_IN_PROCEED_SUCCESS_FOR_ORG_USER,
            });
        }).catch((error) => {

            dispatch({
                type: CASH_IN_PROCEED_FAIL_FOR_ORG_USER,
                payload: "Login Failed!"
            });
        });
    }

}


export const SaveCashInAmount = (val) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_CASH_IN_AMOUNT,
            payload: val
        })
    }
}


export const SaveCreateNewUserIpDetails = (value, field) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_CREATE_NEW_USER_INPUT_DETAILS,
            payload: { field, value }
        })
    }
}

export const OrgRegistrationInputWarnings = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: ORG_REGISTRATION_INPUT_WARNINGS,
            payload: { value, field }
        })
    }
}




export const CreateUserInputWarnings = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: CREATE_USER_INPUT_WARNINGS,
            payload: { value, field }
        })
    }
}



export const AddBankToCreatingOrganization = () => {
    return (dispatch) => {
        dispatch({
            type: ADD_NEW_ORG_BANK_OPTION_TO_ARRAY
        })
    }
}

export const RemoveBankOfCreatingOrg = (i) => {

    return (dispatch) => {
        dispatch({
            type: REMOVE_NEW_ORG_BANK_OPTION_FROM_ARRAY,
            payload: i
        })
    }
}

export const Save_Mobile_Number = (value) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_MOBILE_NUMBER,
            payload: { value }
        })
    }
}

export const Save_Creating_Org_Bank_Details = (value, i, field, Ifsc) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_NEW_ORG_BANK_DETAILS,
            payload: { value, i, field, Ifsc }
        })
    }
}

export const Get_Bank_States_On_Edit_Org_Banks = (AccessToken, bankId) => {

    let url = PE_API_URL + BANKS_ + '/ ' + bankId + '/state';
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {

                let States = response.data.states;
                dispatch({
                    type: GET_BANK_STATES_ON_EDIT_ORG_BANKS_SUCCESS,
                    payload: { States, bankId }
                });
            })
            .catch(function (error) {

                dispatch({
                    type: GET_BANK_STATES_ON_EDIT_ORG_BANKS_FAIL,
                    payload: error
                });

            });
    }
}

export const Get_Bank_Cities_On_Edit_Org_Banks = (AccessToken, bankId, StateId) => {
    let url = PE_API_URL + BANKS_ + '/ ' + bankId + '/state/' + StateId + '/city';
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {
                const BankCities = response.data.cities;
                dispatch({
                    type: GET_BANK_CITIES_ON_EDIT_ORG_BANKS_SUCCESS,
                    payload: { BankCities, StateId }
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_BANK_CITIES_ON_EDIT_ORG_BANKS_FAIL,
                    payload: error
                });
            });
    }
}

export const GetBankBranches_On_Edit_Org_Bank = (AccessToken, bankId, stateId, cityId) => {
    let url = PE_API_URL + BANKS_ + '/' + bankId + '/state/' + stateId + '/city/' + cityId + '/branch';
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {
                const Branches = response.data.branches;
                dispatch({
                    type: GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_SUCCESS,
                    payload: { Branches, cityId }
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_FAIL,
                    payload: error
                });
            });
    }
}

export const GetBankIFSC_On_Edit_Org_Bank = (AccessToken, bankId, stateId, cityId, branchId) => {

    let url = PE_API_URL + BANKS_ + '/' + bankId + '/state/' + stateId + '/city/' + cityId + '/branch/' + branchId;
    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {
        axios.get(url,
            {
                headers: {
                    'Authorization': AuthStr
                }
            }
        )
            .then(function (response) {

                const ifsc = response.data.ifsc;
                dispatch({
                    type: GET_BANK_IFSC_ON_EDIT_ORG_BANKS_SUCCESS,
                    payload: { ifsc, branchId }
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_BANK_IFSC_ON_EDIT_ORG_BANKS_FAIL,
                    payload: error
                });
            });
    }

}

export const Add_New_Org_Bank = (bankTemplate) => {
    return (dispatch) => {
        dispatch({
            type: ADD_NEW_ORG_BANK,
            payload: bankTemplate
        })
    }
}


export const RemoveApiSuccessOrFailureFooterView = () => {
    return (dispatch) => {
        dispatch({
            type: REMOVE_API_SUCCESS_OR_FAILURE_FOOTER_VIEW,
        });
    };
}




export const Get_Organization_Basic_Details_To_Edit = (AccessToken, orgId, PresentCreatingOrgType) => {
    let TENANT_TYPE = PresentCreatingOrgType == "PendingDistributor" || PresentCreatingOrgType == "Distributor" ? "/distributorship/" : "/retailership/"
    let URL = PE_API_URL + ORGANIZATION_ + TENANT_TYPE + orgId;

    return (dispatch) => {

        const AuthStr = 'Bearer '.concat(AccessToken);

        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS,
        });

        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(function (response) {

            var Data = response.data;
            dispatch({
                type: GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_SUCCESS,
                payload: { Data, PresentCreatingOrgType }
            });
        }).catch((error) => {
            let Errormsg = Default_Error_msg;
            if (error.response.data.error !== '' && error.response.data.error !== null && error.response.data.error !== undefined) {
                Errormsg = error.response.data.error;
            }
            dispatch({
                type: GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_FAIL,
                payload: Errormsg
            });
        });
    };
}



export const GetOraganizationBanksToEdit = (AccessToken, PresentCreatingOrgType, item) => {

    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "distributorship/" : 'retailership/';

    let URL = PE_API_URL + GET_ORGANIZATION_MAPPED_BANKS + TENANT_TYPE + item.tenantId + "/banks";

    return (dispatch) => {

        const AuthStr = 'Bearer '.concat(AccessToken);

        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(function (response) {
            var BankDetails = response.data;

            dispatch({
                type: GET_ORAGANIZATION_BANKS_TO_EDIT_SUCCESS,
                payload: { BankDetails, PresentCreatingOrgType, item }
            });
        }).catch((error) => {

            dispatch({
                type: GET_ORAGANIZATION_BANKS_TO_EDIT_FAIL,
                payload: ''
            });
        });
    };
}

export const Ip_Warnings_At_Edit_Org_Bank_Details = (value, field) => {
    return (dispatch) => {
        dispatch({
            type: REGEX_WARNINGS_AT_EDIT_ORG_BANK_DETAILS,
            payload: { value, field }
        })
    }
}

export const SendOrgBankDetails_TO_Edit = (AccessToken, UpdateBankData, PresentCreatingOrgType) => {
    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "/distributorship" : '/retailership';
    const url = PE_API_URL + UPDATE_TENANT_BANK + TENANT_TYPE + "/bank";

    var DataToSend = {
        TenantId: UpdateBankData.TenantId,
        AccountNo: UpdateBankData.AccountNo,
        AccountHolderName: UpdateBankData.AccountHolderName,
        BankBranchId: UpdateBankData.BankBranchId,
        bankdetailsId: UpdateBankData.bankDetailsId
    }
    console.log(DataToSend)

    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {

        axios({
            method: 'PUT',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(DataToSend),
            url,
        })
            .then(function (response) {
                // let Data = response.data
                dispatch({
                    type: SEND_ORG_BANK_DETAILS_TO_EDIT_SUCCESS,
                    // payload: Data
                });
            })
            .catch(function (error) {
                let Errormsg = Default_Error_msg;

                dispatch({
                    type: SEND_ORG_BANK_DETAILS_TO_EDIT_FAIL,
                    payload: Errormsg
                });

            });
    }
}


export const SendOrgBankDetails_TO_ADD = (AccessToken, UpdateBankData, PresentCreatingOrgType) => {
    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "/distributorship" : '/retailership';
    const url = PE_API_URL + UPDATE_TENANT_BANK + TENANT_TYPE + "/bank";

    var DataToSend = {
        TenantId: UpdateBankData.TenantId,
        AccountNo: UpdateBankData.AccountNo,
        AccountHolderName: UpdateBankData.AccountHolderName,
        BankBranchId: UpdateBankData.BankBranchId,
        BankId: UpdateBankData.bankDetailsId
    }
    console.log(DataToSend)
    let Token = 'Bearer ' + AccessToken

    return (dispatch) => {

        axios({
            method: 'post',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(DataToSend),
            url,
        })
            .then(function (response) {

                dispatch({
                    type: SEND_ORG_BANK_DETAILS_TO_ADD_SUCCESS,
                });

            })
            .catch(function (error) {
                let Errormsg = Default_Error_msg;

                dispatch({
                    type: SEND_ORG_BANK_DETAILS_TO_ADD_FAIL,
                    payload: Errormsg
                });

            });
    }
}


export const Save_Editing_Org_Bank_Details = (value, field, StateCitiesOrIfsc) => {
    return (dispatch) => {

        dispatch({
            type: SAVE_EDITING_ORG_BANK_DETAILS,
            payload: { value, field, StateCitiesOrIfsc }
        })
    }
}

export const Save_Org_Bank_TO_Edit_And_Get_BankCities = (AccessToken, bankdetails, StateCitiesArray) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_ORG_BANK_TO_EDIT_AND_GET_BANKCITIES_SUCCESS,
            payload: { bankdetails, StateCitiesArray }
        });
    }
}

//#region Getting Bank Details From DB

export const GetAllBanksFromDB = (AccessToken) => {

    let url = PE_API_URL + "/api/IdentityAccess/GetAllBanks";

    const AuthStr = 'Bearer '.concat(AccessToken);

    return (dispatch) => {

        axios.get(url,
            { headers: { Authorization: AuthStr } }
        )
            .then(function (response) {

                dispatch({
                    type: GET_ALL_BANKS_FROM_DB_SUCCESS,
                    payload: response.data
                });
            })
            .catch(function (error) {
                dispatch({
                    type: GET_ALL_BANKS_FROM_DB_FAIL,
                    payload: error
                });

            });
    }
}

export const GetStatesOfSelectedBank = (selectedBankid) => {

    let url = PE_API_URL + "/api/IdentityAccess/Getbankstates";
    let data = {
        bankid: selectedBankid
    }
    return (dispatch) => {

        fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)

        })
            .then(response => {
                if (!response.ok) { throw response }
                return response.json()
            })
            .then((response) => {



                dispatch({
                    type: GET_STATES_OF_SELECTED_BANK_SUCCESS,
                    payload: response
                });

            })
            .catch(function (err) {

                dispatch({
                    type: GET_STATES_OF_SELECTED_BANK_FAIL,
                    payload: ""
                });
            });

    }
}

export const GetBranchesOfSelectedBankandState = (selectedBankid, selectedStateid) => {

    let url = PE_API_URL + "/api/IdentityAccess/Getbankbranches";
    let data = {
        bankid: selectedStateid
    }
    return (dispatch) => {

        fetch(url, {
            method: "post",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify(data)

        })
            .then(response => {
                if (!response.ok) { throw response }
                return response.json();
            })
            .then((response) => {


                dispatch({
                    type: GET_BRANCHES_OF_SELECTED_BANK_AND_STATE_SUCCESS,
                    payload: response
                });

            })
            .catch(function (err) {
                dispatch({
                    type: GET_BRANCHES_OF_SELECTED_BANK_AND_STATE_FAIL,
                    payload: ""
                });
            });
    }
}

export const clearResponseOnORGApis = () => {

    return (dispatch) => {
        dispatch({
            type: CLEAR_RESPONSE_ON_ORG_APIS,
        })
    }
}

export const clearResponseOfUserApis = () => {
    return (dispatch) => {
        dispatch({
            type: CLEAR_RESPONSE_OF_USER_APIS,
        })
    }
}

export const SaveWalletBalancetoUpdate = (totalBalance) => {
    return (dispatch) => {
        dispatch({
            type: SAVE_WALLET_BALANCE_TO_UPDATE,
            payload: totalBalance
        })
    }
}
export const AddFundsToOrgWallet = (AccessToken, OperatingUserId, OrgId, Amount) => {

    let UserDataToSend = {
        FromUserId: OperatingUserId,
        toReatilerId: OrgId,
        Amount: Amount
    }
    console.log("Data to  Send")
    console.log(UserDataToSend)

    let url = PE_API_URL + WALLET_ + '/retailership/addamount';
    let Token = 'Bearer '.concat(AccessToken);

    return (dispatch) => {

        axios({
            method: 'post',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(UserDataToSend),
            url,
        })
            .then(function (response) {
                console.log("success response")
                console.log(response)
                let WalletBal = response.data.walletBalance !== undefined ? response.data.walletBalance : Amount
                dispatch({
                    type: ADD_FUNDS_TO_ORG_WALLET_SUCCESS,
                    payload: { WalletBal, OrgId }
                });

            })
            .catch(function (error) {

                console.log(" Error On Add FUndes TO Wallet : ");
                console.log(error);
                console.log(error.response)

                let Errormsg = Default_Error_msg;
                if (error.response.data.message !== '' && error.response.data.message !== null && error.response.data.message !== undefined) {
                    Errormsg = error.response.data.message;
                }

                dispatch({
                    type: ADD_FUNDS_TO_ORG_WALLET_FAIL,
                    payload: Errormsg
                });
            });

    }
}

export const AddFundsToUserWallet = (AccessToken, OperatingUserId, userId, Amount) => {

    let url = PE_API_URL + WALLET_ + "/fse/addamount";
    let Token = 'Bearer '.concat(AccessToken);

    let UserDataToSend = {
        FromUserId: OperatingUserId,
        ToUserId: userId,
        Amount: Amount,
    }

    return (dispatch) => {

        dispatch({
            type: ADD_FUNDS_TO_USER_WALLET
        })

        axios({
            method: 'post',
            headers: {
                Authorization: Token,
                'Content-Type': 'application/json'
            },
            data: JSON.stringify(UserDataToSend),
            url,
        })
            .then(function (response) {
                console.log(" Response Is: ");
                console.log(response)
                dispatch({
                    type: ADD_FUNDS_TO_USER_WALLET_SUCCESS,
                    payload: { Amount, userId }
                });

            })
            .catch(function (error) {

                let Errormsg = Default_Error_msg;
                if (error.response.data.message !== '' && error.response.data.message !== null && error.response.data.message !== undefined) {
                    Errormsg = error.response.data.message;
                }

                dispatch({
                    type: ADD_FUNDS_TO_USER_WALLET_FAIL,
                    payload: Errormsg
                });
            });
    }
}

// var Docs;

export const GetOrgDocuments = (AccessToken, OrgId) => {

    // let url = PE_API_URL + UPDATE_ORG_WALLET;
    // let Token = 'Bearer '.concat(AccessToken);


    return (dispatch) => {

        dispatch({
            type: GET_ORG_DOCS_SUCCESS,
            payload: 'Docs'
        });
    }
}

export const GetUnApprovedDistributorList = (AccessToken, offset, limit, searchText) => {

    // let OrgType_Id = 2;

    let url = PE_API_URL + ORG_LIST_TO_APPROVE_BY_ADMIN + "distributorship/" + offset + '/' + limit;
    let Token = 'Bearer ' + AccessToken;


    return (dispatch) => {

        dispatch({
            type: GET_UN_APPROVED_ORG_LIST
        });
        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS
        });

        axios({
            url,
            method: 'GET',
            headers: {
                'Authorization': Token,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {

            let Data = response.data.unapprovedOrganizations
            dispatch({
                type: GET_UN_APPROVED_DISTRIBUTOR_LIST_SUCCESS,
                payload: Data
            });
        }).catch(function (error) {
            dispatch({
                type: GET_UN_APPROVED_DISTRIBUTOR_LIST_FAIL,
                payload: "Login Failed!"
            });
        });
    }

}

export const GetUnApprovedOrgList = (AccessToken, offset, limit, searchText, PresentCreatingOrgType) => {

    // let OrgType_Id = 2;
    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "distributorship/" : "retailership/";
    let url = PE_API_URL + ORG_LIST_TO_APPROVE_BY_ADMIN + TENANT_TYPE + "unapproved/" + offset + '/' + limit;
    let Token = 'Bearer ' + AccessToken

    console.log(url)
    return (dispatch) => {

        dispatch({
            type: GET_UN_APPROVED_ORG_LIST
        });
        dispatch({
            type: SAVE_PROGRESS_INDICATOR_STATUS
        });

        axios({
            url,
            method: 'GET',
            headers: {
                'Authorization': Token,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {

            let Data = response.data
            console.log(response.data)
            dispatch({
                type: GET_UN_APPROVED_ORG_LIST_SUCCESS,
                payload: Data
            });
        }).catch(function (error) {
            dispatch({
                type: GET_UN_APPROVED_ORG_LIST_FAIL,
                payload: "Login Failed!"
            });
        });
    }

}

export const ApproveOrganization = (AccessToken, OrgId, RateCardId, PresentCreatingOrgType) => {
    let TENANT_TYPE = PresentCreatingOrgType == "Distributor" ? "distributorship/" : "retailership/";
    let url = PE_API_URL + APPROVE_ORG_URL + TENANT_TYPE + "approve";
    let Token = 'Bearer ' + AccessToken;

    // pass json
    let DataForRetailer = {
        TenantId: OrgId,
        RateCardId: RateCardId
    }
    let DataForDistributor = {
        TenantId: OrgId,
    }

    return (dispatch) => {

        dispatch({
            type: APPROVE_ORGANIZATION
        });

        axios({
            url,
            data: PresentCreatingOrgType == "Distributor" ? JSON.stringify(DataForDistributor) : JSON.stringify(DataForRetailer),
            method: 'PUT',
            headers: {
                'Authorization': Token,
                'Content-Type': 'application/json'
            },
        }).then(function (response) {

            let Msg = response.data.message

            dispatch({
                type: APPROVE_ORGANIZATION_SUCCESS,
                payload: { OrgId, Msg }
            });
        }).catch(function (error) {

            dispatch({
                type: APPROVE_ORGANIZATION_FAIL,
                payload: "get approve list  fail!"
            });
        });
    }

}

export const OpenRejectOrgModal = (user) => {

    return (dispatch) => {
        dispatch({
            type: OPEN_REJECT_ORG_MODAL,
            payload: user
        })
    }
}


export const CloseRejectOrgModal = () => {

    return (dispatch) => {
        dispatch({
            type: CLOSE_REJECT_ORG_MODAL
        })
    }
}

export const RejectOrgReason = (RejectReason) => {

    return (dispatch) => {
        dispatch({
            type: SAVE_REJECT_ORG_REASON,
            payload: RejectReason
        })
    }
}

export const RejectingNewlyCreatedOrg = (AccessToken, organizationId, RejectReason) => {


    return (dispatch) => {
        dispatch({
            type: REJECT_NEW_ORG_SUCCESS,

        })
    }



}

export const getRejectedUsersList = (AccessToken) => {

    let Data = [
        {
            name: 'Prashanth Yejje',
            mobileNo: '7382040877',
            businessName: 'Prashanth pv ltd',
            emailId: 'prashanthyejje@gail.com',
            rejectReason: 'Email Is Not Valid Here.'
        },
        {
            name: 'Yejje',
            mobileNo: '7382040876',
            businessName: 'Prashanth pv ltd',
            emailId: 'prashanthyejje@gmail.com',
            rejectReason: "Doc's Not Perfect. please upload More Documents With More clarity."
        },
        {
            name: 'Prashanth',
            mobileNo: '7382040875',
            businessName: 'Prashanth pv ltd',
            emailId: 'prashanthyejje@gail.com',
            rejectReason: 'Email Is Not Valid Here.'
        }
    ]


    return (dispatch) => {
        dispatch({
            type: GET_REJECTED_USERS_SUCCESS,
            payload: Data

        })
    }
}