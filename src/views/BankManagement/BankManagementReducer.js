import {
    APPROVE_DEPOSIT_SUCCESS,
    GET_DEPOSITS_DETAILS_FROM_DB_SUCCESS,
    GET_DEPOSIT_MODE_LISTS_SUCCESS,
    GET_ALL_DEPOSITS_FROM_DB_SUCCESS,
    GET_CDM_STUCK_DETAILS_SUCCESS,
    GET_ALL_CDM_STUCK_LIST_SUCCESS,
    SEND_SLIP_DETAILS_TO_DB,
    SEND_SLIP_DETAILS_TO_DB_SUCCESS,
    SEND_SLIP_DETAILS_TO_DB_FAIL,

    GET_BANKS_BY_IFSC_SUCCESS,
    GET_BANKS_BY_IFSC_FAIL,

    SAVE_PROGRESS_INDICATOR_STATUS,
    SAVE_PROGRESS_INDICATOR_STATUS_FALSE,

    RESET_DEPOSIT_SLIP_COMPONENT,
    SEND_DEPOSIT_SLIP_DETAILS_TO_DB_SUCCESS,
    SEND_DEPOSIT_SLIP_DETAILS_TO_DB_FAIL,
    SAVE_DEPOSIT_SLIP_DETAILS_TENANT,
    SAVE_DEPOSIT_SLIP_DETAILS_TENANT_WARNINGS,
    SAVE_DEPOSIT_SLIP_DETAILS,
    SAVE_DEPOSIT_SLIP_DETAILS_WARNINGS,
    SAVE_DEPOSIT_SLIP_LIST_ITEMS,
    GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS,
    GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS_TENANT,
    GET_DEPOSITED_SLIP_SUCCESS,
    APPROVE_DEPOSIT_SLIP_SUCCESS,

    MONEY_TRANSFER_INITIAL_LOAD,
    GET_CUSTOMER_INFO,
    GET_CUSTOMER_INFO_SUCCESS,
    GET_CUSTOMER_INFO_FAIL,
    TEMP_SAVE_BENEFICIARY,
    REMOVE_BENEFICIARY,
    REMOVE_BENEFICIARY_SUCCESS,
    REMOVE_BENEFICIARY_FAIL,
    MONEY_TRANSFER_MOBILE_ONCHANGE,
    MONEY_TRANSFER_CUSTOMER_EDIT_ONCHANGE,

    SEND_MONEY_TRANSFER_DETAILS,
    SEND_MONEY_TRANSFER_DETAILS_SUCCESS,
    SEND_MONEY_TRANSFER_DETAILS_FAIL,

    SAVE_BENE_INFO,
    SAVE_BENE_INFO_SUCCESS,
    SAVE_BENE_INFO_FAIL,

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
    SET_BANK_DETAILS_SUCCESS,
    ON_BENEFICIARY_EDIT,

    CHECK_VALIDATE_BENI_BEFORE_ADD,

    OPEN_MONEY_TRANSFER_OR_SCHEDULE_MODAL,
    OPEN_SCHEDULE_MONEY_TRANSFER_MODAL,
    CACLE_MODALS_IN_DISPLAY_BENI_LIST_COMP,
    CLEAR_API_RESPONSE_IN_MONEY_TRANSFER_COMP,
    GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL,
    GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL_SUCCESS,
    GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL_FAIL,
    OPEN_REMOVE_BENE_MODAL,
    CLOSE_REMOVE_BENE_MODAL,
    CLEAR_API_SUCCESS_IN_MONEY_TRASFER_COMP,
    CLEAR_MONEY_TRASFER_SUCCESS_RESPONSE,
    CLEAR_API_RESPONSE_ON_CUST_DETAILS,
    GET_ALL_MNY_TRANSFER_APIS_SUCCESS,
    // CLEAR_API_RESPONSE_ON_BENE,


    SAVE_API_DETAILS,
    SAVE_API_DETAILS_WARNINGS,
    SAVE_EDIT_API,
    CLOSE_ADD_OR_EDIT_API_MODAL,
    OPEN_ADD_OR_EDIT_API_MODAL,
    EDIT_API_SUCCESS,
    ADD_NEW_API_SUCCESS,
    GET_ALL_API_SUCCESS,
    OPEN_ACT_OR_INACT_API_MODAL,
    CLOSE_ACT_OR_INACT_API_MODAL,
    ACTIVATE_OR_INACTIVATE_API_SUCCESS,
    EDIT_API_FAIL,
    SAVE_CUSTOMER_MOBILE_NUMBER,
    GET_RECENT_TRASACTIONS,
    GET_CUSTOMER_INFORMATION_SUCCESS,
    GET_CUSTOMER_INFORMATION_FAIL,
    GET_RECENT_TRASACTIONS_SUCCESS,
    GET_MT_PAGE_INITIAL_DATA_SUCCESS,
    WARNINGS_ON_SAVE_CUSTOMER_IP_DETAILS,
    WARNING_ON_SAVE_CUSTOMER_MOBILE_NO,
    REGISTER_CUSTOMER_INFO_SUCCESS,
    CUSTOMER_NOT_EXIST,
    GET_CUSTOMER_TEMPLATE_SUCCESS,
    GET_BENEFICIARY_TEMPLATE_SUCCESS,
    OTP_VERIFICATION_ON_ADD_BENE_SUCCESS,
    OTP_VERIFICATION_ON_ADD_BENE_FAIL,
    REGISTER_CUSTOMER_INFO_FAIL,
    CONTINUE_TO_ADD_BENEFICIARY,
    EDIT_CUSTOMER_INFORMATION_CLICKED,
    BACK_TO_DISPLAY_CUSTOMER_INFO,
    UPDATE_CUSTOMER_INFO_SUCCESS,
    SAVE_BENEFICIARY_INFO,
    GET_STATES_LIST_SUCCESS,
    GET_STATES_LIST_FAIL,
    GET_STATES_CITIES_LIST_SUCCESS,
    GET_STATES_CITIES_LIST_FAIL,
    GET_BANK_BRANCHES_LIST_SUCCESS,
    GET_BANK_BRANCHES_LIST_FAIL,
    GET_BANK_IFSC_ON_SEARCH_SUCCESS,
    GET_BANK_IFSC_ON_SEARCH_FAIL,
    IFSC_SEARCH_MODAL,
    SAVE_SELECTED_BRANCH_ID,
    CLEARE_BENE_BANK_DETAILS_IN_SEARCH_MODAL,
    WARNINGS_ON_BENE_IP_DETAILS,
    REGISTER_BENE_INFO_SUCCESS,
    RESET_ADD_BENE_FORM,
    CLOSE_BENE_FORM,
    DELETE_BENEFICIARY_SUCCESS,
    CHANGE_BENE_DELETE_SUCCSS_PARAM_TO_FALSE,
    DISABLE_BENE_NOT_VERIFIED_MODAL,
    ENABLE_BENE_NOT_VERIFIED_MODAL,
    PROCEED_TO_TRASACTION_DETAILS,
    SEARCH_BENE_SUCCESS,
    SEARCH_BENE_FAIL,
    SAVE_MT_TRANS_DETAILS,
    MONEY_TRANSFER_REQUEST_SUCCESS,
    CANCLE_IN_TRANS_DETAILS,
    MONEY_TRANSFER_REQUEST_FAIL,
    SAVE_OTP_AFTER_TRANSFER_REQUEST,
    CANCLE_THE_MT_COMPLETE_TRANSACTION,
    MONEY_TRASFER_OTP_VERIFY_SUCCESS,
    MONEY_TRASFER_OTP_VERIFY_FAIL,
    GET_ALL_RATECARDS_SUCCESS,
    GET_ALL_RATECARDS_FAIL,
    DELETE_RATE_CARD_SUCCESS,
    CHANGE_PAGE_SIZE_IN_RATE_CARD_HOME,
    SEARCH_RATE_CARD_SUCCESS,
    SEARCH_RATE_CARD_FAIL,
    SAVE_CUSTOMER_VERIFY_OTP,
    GET_RATE_CARD_TEMPLATE_SUCCESS,
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
    CONFIRM_FROM_BENE_VALIDATION_SUCCESS

    //#region  MoneyTrasfer Final


    //#endregion  MoneyTrasfer Final

    //#region  Deposit Slip Final


    //#endregion  Deposit Slip Final


} from "./Types";

var moment = require('moment');

import { REHYDRATE } from 'redux-persist'
import { ReturnCustomerId } from "../../GlobalVars";
import { GET_RATE_CARD_FAIL } from "../Transactions/Type";

import { REDUCER_INITIAL } from '../Authentication/types';

const INITIAL_STATE = {

    ProgressIndicator: {
        InProgress: false
    },

    DespositSlipComp: {
        getDepositSlipVMTenantAmounts: [],
        bankSlipTxId: "",
        isGetDepositedSlipSuccess: false,
        isSubmitDepositSlipSuccess: false,
        AmountDepositSlip: "",
        BankSlipTxId: "",
        DepositSlipImage: "",
        itemCount: 1,
        orgID: "",
        DespositList: [{ id: 1, TenantId: '', Amount: '' }],
        SlipImageList: [{ id: 1, SlipImage: '', TxId: '' }],
        depositedSlipsList: [],
        depositDepositListTenant: [],
        depositSlipId: "",
        isApproveDepositSlipSuccess: false,
        depositSlipWarnings: {
            imageWarnings: "",
            amountWarnings: "",
            orgIdWarnings: "",
            txIDWarnings: "",
        },

        SlipDetails: {
            // fromName:"",
            // amount:"",
            // modeOfDeposit:"",
            // onlineTransfer:"",
            // referenceNumber:"",
            // chequeDetails:{
            //     number:"",
            //     date:""
            // },
            // toBankAccountNo:"",
            // dateOfDeposit:"",
            // remarks:"",
            // slipImage:"",
        },
        slipList: [
            {
                tenantDepositMode: []
            }
        ],
        CDMReportList: [],

        isSendDepositSuccess: false,
        SlipDetailsWarnings: {},
    },

    RateCard: {
        Ratecardwarnings: {
            colorwarning: "",
            ratecardTitleWarning: "",
            ratecardDescWarning: "",
            SlabsWarning: "",
            fromWarning: "",
            toWarning: "",
            rateWarning: "",
            dailyPayoutWarning: "",
            monthlyPayoutWarning: "",


        },
        SetValuesModalData: {},
        SetValuesModal: false,
        AllrateCards: [],
        RateCardId: '',
        RateCardColor: '#ff0000',
        RateCardTitle: '',
        RateCardDescription: '',
        RCfilterFrom: '',
        RCfilterTo: '',
        CreateRateCard: [],
        ActualRateCard: [],
        InitialPageSize: 5,
        currentPage: 0,
        RateCardValidations: {
            validateSlabs: false,
            sendRCToServer: false,
            slabsValidationResult: 'Checking',
        },
        ApiResult: {
            ErrorMessage: '',
            RateCardDeleteSuccess: false,
            CreateNewRateCard: '',
        }, RateCardNavigation: {
            AddRateCard: false,
            EditRateCard: false,
            RateCardMode: "",
            CommissionCalculatorModal: false
        },
        CommissionCalculator: {
            TransactionValue: '',
            CommissionAplicable: '',
            AgentPayout: '',
            TDSfromAgent: '',
            AgentBonus: '',
            ServiceProviderCharges: '',
            GSTforOrg: '',
            Finalcommission: ''
        }
    },

    MTcustomer: {
        ApiResult: {
            beneOtpVerifyFail: false,
            ErrorMessage: '',
            OtpMismatch: false,
            OtpmaxAttemptsReached: false
        },
        NavigatePages: {
            displayVerifiedSuccess: false,
            isExistingCustomer: false,
            DisplayAddingBene: false,
            DisplayTrasDetails: false,
            OtpVerifyOnAddBene: false,
            editingCustomerInfo: false,
            DisplayTrasDescriptionNDOtpVerify: false
        },
        displayRegistFormInMThome: false,
        customerId: '',
        customerMobile: '',
        // verifyingCustomerOTP: false,
        SaveCustomerOTP: '',
        customerMobileNoWarning: '',
        // updatingCustomer: false,
        recentTrasactions: [],
        CustomerDetails: {},
        WarnsOnCustomerDetails: {},
        ExistingCustomer: {}
    },
    MTBeneficiary: {
        VerifyBene: {
            enableLoading: false,
            verifySuccess: false,
            verifyFail: false,
            SuccessResponse: {},
            ErrorCode: '',
            //    APIIdUsedForVerification
            //   BankAccountExists            if true account exit , if false bank acc doesnt exist 
            //    BankName
            //  AccountHolderName 
            //   TxnFees 
            //   AmountDeposited
        },

        BeneList: [],
        NewBeneId: '',
        BeneDetails: {},
        warningsOnBeneDetails: {},
        BeneDeleteSuccess: false,
        BeneNotVerifiedModal: false,
        BankDetails: {
            AllBanks: [],
            AllStates: [],
            AllCities: [],
            AllBranches: [],
            selectedBankId: '',
            SelectedStateId: '',
            SelectedCityId: '',
            SelectedBranchId: '',
            IFSCInfoObject: [],
            SelectedBankBranch: ''
        },
        ApiResultOnBene: {
            beneOtpVerifyFail: false,
            ErrorMsg: '',
            OtpMismatch: false,
            OtpmaxAttemptsReached: false,
        },
    },
    MTTransDetails: {
        BeneInfo: {},
        TransMode: '',
        TransAmount: '',
        AdditionalCharges: '',
        TotalAmount: '',
        InternalTransID: '',
        OTPafterTrasRequest: '',
        Get_Additional_Charges: false,
        ApiResult: {
            MTrequesrFail: false,
            OtpVerifyFail: false,
            otpVerifySuccess: false,
            OtpMaxAttemptsReached: false,
            TrasSuccessDateNDtime: '',
            ErrorMessage: ''
        }
    },
    MTMain: {
        banks: [],
        ekycTypes: {}
    },

    SlabRateOnDepositAmount: '',
    APIs: {
        apisList: [],
        AddOrEditAPI: {},
        Warnings: {},
        index: '',
        ActivateOrInActivateModal: false,
        ActivateOrInActivateApi: '',
        // AddApi:{},
        EditOrAddApi: '',
        AddOrEditModal: false,
        apiResults: {
            error: '',
            message: '',
            EditOrAddApiFail: false
        }
    },
    MoneyTrasferSuccessResponse: {
        transactionCode: '',
        Status: '',
        message: '',
    },

    BeneDetailsToRemove: '',
    BeneIndexToRemove: '',
    OpenRemoveBeniModal: false,

    ApiResponseOnCust_Details: {
        enterCustomerDetails: false,
        enterBeniDetails: false,
        spinnerOnCustomerInfo: false,
        getCustomer_Info: '',
        UpdatingCustomer: false,
        FocusBeniFornInput: false,
        Error: '',
        message: ''
    },

    ApiResponseOnBene: {
        AddBeneSuccess: false,
        AddBeneFail: false,
        spinnerOnBeneInfo: false,
        ErrorMsg: '',
        ErrorOnGetSlabRate: false,
        removeBeniFail: false,
        message: ''
    },
    moneyTransfer: {

        MoneyTransferSuccess: false,

        CheckValidateBeniBeforeAdd: false,
        displayTransferOrScheduleModal: false,
        TrasferOrScheduleOption: '',
        displayScheduleMoneyTransferModal: false,
        customerMobileNo: '',
        validCustomerName: '',
        isValidCustomer: false,
        benificiaries: [],
        isEditTrue: undefined,
        selectedBeneficiaryIndex: '9999999',
        recentlyAddedBeneficiary: '',


        customerDetails: {
            FullName: '',
            // EmailId: '',
            DOB: '',
            gender: '',
            address: '',
            selectedEKYC: '',
            eKYCInfo: '',
            isCustomerSaveSuccess: false
        },
        customerDetailsWarning: {
            FullName: '',
            // EmailId: '',
            DOB: '',
            gender: '',
            address: '',
            selectedEKYC: '',
            eKYCInfo: '',
        },
        processTransfer: {
            beneficiary: '',
            SpinnerOnTransferMoney: false
        }
    },

    benificiaryDetails: {

        beneficiaryEdit: {
            acctHolderName: '',
            acctNo: '',
            confAccNo: '',
            acctMobileNo: '',
            bankNames: [],
            bankStates: [],
            bankBranches: [],
            selectedBank: '',
            selectedBankState: '',
            selectedBankBranch: '',
            bankIFSC: '',
            bankAddress: '',
            BeniAddress: ''
        },
        beneficiaryValidations: {
            isBankDefaultVisible: false,
            isBankStateDefaultVisible: false,
            isBankBranchDefaultVisible: false,

        }
    },

}

export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case REHYDRATE:

            return action.payload === undefined ? { ...state } : { ...state, ...action.payload.bankManagement };

        case REDUCER_INITIAL:

            console.log("  BANK MANAGEMENT REDUCER . . . . . . ");


            return {
                ...INITIAL_STATE
            }


        case SAVE_PROGRESS_INDICATOR_STATUS:
            return {
                ...state,
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: true
                }

            }

        case SAVE_PROGRESS_INDICATOR_STATUS_FALSE:
            return {
                ...state,
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }

            }


        case MONEY_TRANSFER_INITIAL_LOAD:

            console.log(" ==================================================== In MONEY_TRANSFER_INITIAL_LOAD Reducer +++++++++ ");
            return {
                ...state,
                ...INITIAL_STATE
            }
        case IFSC_SEARCH_MODAL:

            return {
                ...state,
                MTcustomer: {
                    ...state.MTcustomer,
                    searchClicked: action.payload
                }, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    // BankDetails: {
                    //     ...state.MTBeneficiary.BankDetails,
                    //     AllStates: [],
                    //     AllCities: [],
                    //     AllBranches: [],
                    //     SelectedStateId: '',
                    //     SelectedCityId: '',
                    //     SelectedBranchId: '',
                    //     IFSCInfoObject: {}
                    // }
                }

            }

        case MONEY_TRANSFER_MOBILE_ONCHANGE:
            return {
                ...state,
                moneyTransfer: {
                    ...state.moneyTransfer, customerMobileNo: action.payload
                }
            }

        case MONEY_TRANSFER_CUSTOMER_EDIT_ONCHANGE:

            return UpdateCustomerEditForm(action, state);


        case GET_CUSTOMER_INFO:
            return {
                ...state,
                moneyTransfer: {
                    ...state.moneyTransfer,
                    isValidCustomer: false,
                    //benificiaries: action.payload.benificiaries,
                    isEditTrue: undefined,
                    benificiaries: [],
                    customerDetails: {
                        ...state.moneyTransfer.customerDetails,
                        FullName: '',
                        DOB: '',
                        gender: '',
                        address: '',
                        selectedEKYC: '',
                        eKYCInfo: '',
                    },
                    customerDetailsWarning: {
                        ...state.moneyTransfer.customerDetailsWarning,
                        FullName: '',
                        // EmailId: '',
                        DOB: '',
                        gender: '',
                        address: '',
                        selectedEKYC: '',
                        eKYCInfo: '',
                    },
                },
                ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    enterCustomerDetails: false,
                    enterBeniDetails: false,
                    getCustomer_Info: '',
                }
            }

        case GET_CUSTOMER_INFO_SUCCESS:

            // Statements To Change DOB Format Of A Customer 
            if (action.payload.customer.dateOfBirth != null) {
                const Date = action.payload.customer.dateOfBirth.substring(0, 2);
                const Month = action.payload.customer.dateOfBirth.substring(3, 5);
                const Year = action.payload.customer.dateOfBirth.substring(6, 10);
                const DOB = Year + '-' + Month + '-' + Date;
                action.payload.customer.dateOfBirth = DOB;
            }

            // Code To Add Params To The Benificiary List Which Helps at Money Transfer Action.
            action.payload.customer.beneficiaries !== null ?
                action.payload.customer.beneficiaries.map((beni, i) => {
                    beni.ImpsOrNeft = 'IMPS',
                        beni.Depositing = '',
                        beni.Charges = ''
                }) : null

            return {
                ...state,
                moneyTransfer: {
                    ...state.moneyTransfer, isValidCustomer: action.payload.isValid,
                    //benificiaries: action.payload.benificiaries,
                    isEditTrue: action.payload.isEditTrue,

                    customerDetails: {
                        ...state.moneyTransfer.customerDetails,
                        FullName: action.payload.customer.fullName,
                        DOB: action.payload.customer.dateOfBirth,
                        gender: action.payload.customer.gender,
                        address: action.payload.customer.address,
                        selectedEKYC: action.payload.customer.ekyc != null ? action.payload.customer.ekyc.item1 : null,
                        eKYCInfo: action.payload.customer.ekyc != null ? action.payload.customer.ekyc.item2 : null,
                    },

                    benificiaries: action.payload.customer.beneficiaries
                },
                ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    enterCustomerDetails: false,
                    enterBeniDetails: true,
                    getCustomer_Info: 'success',
                }
            }

        case GET_CUSTOMER_INFO_FAIL:
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    customerDetails: {
                        ...state.moneyTransfer.customerDetails,
                        FullName: '',
                        DOB: '',
                        gender: '',
                        address: '',
                        selectedEKYC: '',
                        eKYCInfo: '',
                    },
                    benificiaries: []
                },
                ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    enterCustomerDetails: true,
                    getCustomer_Info: 'fail',
                    Error: action.payload
                },
            }




        case WARNINGS_ON_CUSTOMER_IP_DETAILS:
            return warningsoncustomeripdetails(action, state);

        case SEND_CUSTOMER_INFORMATIN:
            return {
                ...state, ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    spinnerOnCustomerInfo: true
                }
            }

        case SEND_CUSTOMER_INFORMATIN_SUCCESS:
            return {
                ...state, ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    spinnerOnCustomerInfo: false,
                    enterCustomerDetails: false,
                    enterBeniDetails: true,
                    FocusBeniFornInput: true,
                    message: action.payload.Data.message
                },
            }

        case SEND_CUSTOMER_INFORMATIN_FAIL:
            return {
                ...state, ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    spinnerOnCustomerInfo: false,
                    Error: '',
                }
            }



        case UPDATE_CUSTOMER_INFORMATIN:
            return {
                ...state, ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    spinnerOnCustomerInfo: true
                }
            }

        case UPDATE_CUSTOMER_INFORMATIN_SUCCESS:
            return {
                ...state,

                ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    spinnerOnCustomerInfo: false,
                    UpdatingCustomer: false,
                    enterCustomerDetails: false,
                    enterBeniDetails: true,
                    message: action.payload.Data.message
                },


            }

        case UPDATE_CUSTOMER_INFORMATIN_FAIL:
            return {
                ...state, ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    spinnerOnCustomerInfo: false,
                    // UpdatingCustomer: false,
                }
            }

        case ALLOW_USER_TO_ENTER_CUSTOMER_DETAILS: {
            return {
                ...state, ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    enterCustomerDetails: !state.ApiResponseOnCust_Details.enterCustomerDetails,
                    UpdatingCustomer: true,
                }
            }
        }

        case RESET_CUSTOMER_DETAILS:
            return {
                ...state,
                moneyTransfer: {
                    ...state.moneyTransfer,
                    customerDetails: {
                        ...state.moneyTransfer.customerDetails,
                        FullName: '',
                        // EmailId: '',
                        DOB: '',
                        gender: '',
                        address: '',
                        selectedEKYC: '',
                        eKYCInfo: '',
                        isCustomerSaveSuccess: false,
                        ekyc: {
                            ...state.moneyTransfer.customerDetails,
                            key: ''

                        },
                        fullName: '',
                    },
                    customerMobile: '',
                },

                MTcustomer: {
                    ...state.MTcustomer,
                    CustomerDetails: {
                        ...state.MTcustomer.CustomerDetails,
                        gender: '',
                        address: '',
                        ekyc: {
                            ...state.MTcustomer.CustomerDetails,
                            key: '',
                            value: "",
                            dateOfBirth: moment()

                        },
                        fullName: '',
                    },
                    customerMobile: '',
                }
            }

        case CLEAR_API_RESPONSE_ON_CUST_DETAILS:
            return {
                ...state,
                ApiResponseOnCust_Details: {
                    ...state.ApiResponseOnCust_Details,
                    Error: '',
                    message: ''
                },
            }

        case CUSTOMER_SAVE_SUCCESS:
            return {
                ...state,
                moneyTransfer: {
                    ...state.moneyTransfer, isValidCustomer: true,
                    isEditTrue: false,
                    customerDetails: {
                        ...state.moneyTransfer.customerDetails, isCustomerSaveSuccess: true
                    },
                    validCustomerName: action.payload.FullName
                }
            }

        case SAVE_BENE_INFO:
            return {
                ...state, ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    spinnerOnBeneInfo: true,
                    AddBeneSuccess: false,
                },
            }



        case SAVE_BENE_INFO_SUCCESS:

            console.log(" SAVE SAVE_BENE_INFO_SUCCESS Reducer :  ");
            console.log(action.payload);
            return {
                ...state, ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    AddBeneFail: false,
                    spinnerOnBeneInfo: false,
                    message: action.payload.ResponseData.message
                },
                moneyTransfer: {
                    ...state.moneyTransfer,
                    benificiaries: [action.payload.BeneToAdd, ...state.moneyTransfer.benificiaries]
                },
                benificiaryDetails: {
                    ...state.benificiaryDetails,
                    beneficiaryEdit: {
                        ...state.benificiaryDetails.beneficiaryEdit,
                        acctHolderName: '',
                        acctNo: '',
                        confAccNo: '',
                        acctMobileNo: '',
                        // bankNames: [],
                        // bankStates: [],
                        // bankBranches: [],
                        selectedBank: '',
                        selectedBankState: '',
                        selectedBankBranch: '',
                        bankIFSC: '',
                        bankAddress: '',
                        BeniAddress: ''
                    }
                }
            }
        case SAVE_BENE_INFO_FAIL:
            return {
                ...state, ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    AddBeneSuccess: false,
                    AddBeneFail: true,
                    spinnerOnBeneInfo: false,
                    ErrorMsg: action.payload
                },
            }


        case REMOVE_BENEFICIARY:
            return {
                ...state, ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    spinnerOnBeneInfo: true
                }

            }

        case REMOVE_BENEFICIARY_SUCCESS:
            return {
                ...state,
                BeneDetailsToRemove: '',
                BeneIndexToRemove: '',
                OpenRemoveBeniModal: false,
                ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    spinnerOnBeneInfo: false
                },
                moneyTransfer: {
                    ...state.moneyTransfer,
                    benificiaries: state.moneyTransfer.benificiaries.filter((item, indx) => {
                        return indx !== parseInt(action.payload.index)
                    })

                }
            }
        case REMOVE_BENEFICIARY_FAIL:
            return {
                ...state, ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    spinnerOnBeneInfo: false,
                    ErrorMsg: action.payload,
                    removeBeniFail: true
                }
            }
        case SEND_MONEY_TRANSFER_DETAILS:
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    processTransfer: {
                        ...state.moneyTransfer.processTransfer,
                        SpinnerOnTransferMoney: true,
                        // beneficiary: '',
                        ErrorOnMoneyTransfer: ''
                    }
                },
            }
        case SEND_MONEY_TRANSFER_DETAILS_SUCCESS:

            console.log(" In  SEND_MONEY_TRANSFER_DETAILS_SUCCESS REDUCEr ");
            console.log(action.payload);

            console.log(" BEBE LIST : ");
            console.log(...state.moneyTransfer.benificiaries);

            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    ...state.moneyTransfer.benificiaries.map((benificiary, i) =>
                        benificiary.mobileNo == action.payload.MoneyTransferDetails.BeneficiaryMobileNo ?
                            benificiary.Depositing = '' : benificiary
                    ),
                    MoneyTransferSuccess: true,
                    processTransfer: {
                        ...state.moneyTransfer.processTransfer,
                        SpinnerOnTransferMoney: false,
                        // beneficiary: '',
                    },
                    displayTransferOrScheduleModal: false,
                },
                MoneyTrasferSuccessResponse: {
                    ...state.MoneyTrasferSuccessResponse,
                    transactionCode: action.payload.ResponseData.transactionCode,
                    Status: action.payload.ResponseData.status,
                    message: action.payload.ResponseData.message,
                },
                SlabRateOnDepositAmount: '',
                //     : Beni.acccountNo,
                // 
            }
        case SEND_MONEY_TRANSFER_DETAILS_FAIL:
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    // displayTransferOrScheduleModal: false,
                    // TrasferOrScheduleOption: '',
                    processTransfer: {
                        ...state.moneyTransfer.processTransfer,
                        SpinnerOnTransferMoney: false,
                        // beneficiary: '',
                        ErrorOnMoneyTransfer: action.payload
                    }
                },
            }

        case PROCESS_MONEY_TRANSFER:
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    processTransfer: {
                        ...state.moneyTransfer.processTransfer,
                        beneficiary: action.payload.beneficiary,
                    },
                    selectedBeneficiaryIndex: action.payload.indexValue,
                }
            }

        case CHANGE_BENI_VALUES_ON_TRANSFER:

            return SaveBeniValues_On_Transfer_or_Schedule(action, state);

        case TEMP_SAVE_BENEFICIARY:
            console.log(" IN Reducer Bene Details");
            console.log(action.payload);
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    benificiaries: action.payload,
                    //recentlyAddedBeneficiary : action.payload.accountHolder
                },

                benificiaryDetails: {
                    ...state.benificiaryDetails,
                    beneficiaryEdit: {
                        ...state.benificiaryDetails.beneficiaryEdit,
                        acctHolderName: '',
                        acctNo: '',
                        confAccNo: '',
                        acctMobileNo: '',
                        selectedBank: '',
                        selectedBankState: '',
                        selectedBankBranch: '',
                        bankIFSC: '',
                        bankAddress: '',
                        transferAmount: '',
                        BeniAddress: ''
                    }
                }

            }


        // #region Beneficiary

        case SET_BANK_DETAILS_SUCCESS:
            return {
                ...state, benificiaryDetails: {
                    ...state.benificiaryDetails,
                    beneficiaryEdit: {
                        ...state.benificiaryDetails.beneficiaryEdit,
                        bankNames: action.payload.bankNames,
                        bankStates: action.payload.bankStates,
                        bankBranches: action.payload.bankBranches,
                    }
                }

            }

        case ON_BENEFICIARY_EDIT:

            return OnBeneficiaryEdit(action, state);

        case OPEN_MONEY_TRANSFER_OR_SCHEDULE_MODAL:
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    displayTransferOrScheduleModal: true,
                    TrasferOrScheduleOption: action.payload.ModalFor,
                    processTransfer: {
                        ...state.moneyTransfer.processTransfer,
                        beneficiary: action.payload.beni
                    }
                }
            }

        case OPEN_SCHEDULE_MONEY_TRANSFER_MODAL:
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    displayScheduleMoneyTransferModal: true,
                }
            }

        case CACLE_MODALS_IN_DISPLAY_BENI_LIST_COMP:
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    displayTransferOrScheduleModal: false,
                    displayScheduleMoneyTransferModal: false,
                    TrasferOrScheduleOption: '',
                    processTransfer: {
                        ...state.moneyTransfer.processTransfer,
                        ErrorOnMoneyTransfer: ''
                    }
                }
            }

        case CHECK_VALIDATE_BENI_BEFORE_ADD:
            return {
                ...state, moneyTransfer: {
                    ...state.moneyTransfer,
                    CheckValidateBeniBeforeAdd: !state.moneyTransfer.CheckValidateBeniBeforeAdd
                }
            }
        case OPEN_REMOVE_BENE_MODAL:
            return {
                ...state,
                BeneDetailsToRemove: action.payload.benificiary,
                BeneIndexToRemove: action.payload.i,
                OpenRemoveBeniModal: true
            }

        case CLOSE_REMOVE_BENE_MODAL:
            return {
                ...state,
                BeneDetailsToRemove: '',
                BeneIndexToRemove: '',
                OpenRemoveBeniModal: false
            }


        case CLEAR_API_RESPONSE_IN_MONEY_TRANSFER_COMP:
            return {
                ...state, ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    AddBeneSuccess: false,
                    ErrorOnGetSlabRate: false,
                    ErrorMsg: '',
                    removeBeniFail: false,
                    message: ''
                }
            }

        case GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL:

            return {
                ...state, SlabRateOnDepositAmount: '',
                moneyTransfer: {
                    ...state.moneyTransfer,
                    displayTransferOrScheduleModal: false,

                },

                ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    spinnerOnBeneInfo: true,
                },
            }
        case GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL_SUCCESS:

            return {
                ...state,
                SlabRateOnDepositAmount: action.payload.rate,
                moneyTransfer: {
                    ...state.moneyTransfer,
                    displayTransferOrScheduleModal: true
                },
                ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    spinnerOnBeneInfo: false,
                },
            }

        case GET_SLAB_RATE_FOR_AMOUNT_AND_OPEN_MONEY_TRANSFER_MODAL_FAIL:

            return {
                ...state,
                ApiResponseOnBene: {
                    ...state.ApiResponseOnBene,
                    spinnerOnBeneInfo: false,
                    ErrorMsg: action.payload,
                    ErrorOnGetSlabRate: true,
                },
            }

        case CLEAR_API_SUCCESS_IN_MONEY_TRASFER_COMP:

            return {
                ...state,
                moneyTransfer: {
                    ...state.moneyTransfer,
                    ...state.moneyTransfer,
                    MoneyTransferSuccess: false,

                    processTransfer: {
                        ...state.moneyTransfer.processTransfer,
                        beneficiary: '',
                    },
                }
            }

        case CLEAR_MONEY_TRASFER_SUCCESS_RESPONSE:

            return {
                ...state,
                moneyTransfer: {
                    ...state.moneyTransfer,
                    ...state.moneyTransfer,
                    MoneyTransferSuccess: false,

                    processTransfer: {
                        ...state.moneyTransfer.processTransfer,
                        beneficiary: '',
                    },

                },
                MoneyTrasferSuccessResponse: {
                    ...state.MoneyTrasferSuccessResponse,
                    transactionCode: '',
                    Status: '',
                    message: '',
                },

            }



        case GET_ALL_MNY_TRANSFER_APIS_SUCCESS:

            return {
                ...state, APIs: {
                    ...state.APIs,
                    apisList: action.payload
                }
            }

        case GET_ALL_API_SUCCESS:
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    apisList: action.payload,
                    // AddOrEditModal:false,
                }
            }

        case SAVE_API_DETAILS:
            return SaveAddOrEditApiData(action, state);

        case SAVE_API_DETAILS_WARNINGS:
            return SaveAddOrEditApiDataWarnings(action, state);

        case SAVE_EDIT_API:
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditAPI: action.payload.item,
                    Warnings: {},
                    AddOrEditModal: true,
                    EditOrAddApi: 'Edit',
                }
            }

        case CLOSE_ADD_OR_EDIT_API_MODAL:
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditModal: false,
                    AddOrEditAPI: {},
                    Warnings: {},
                    apiResults: {
                        ...state.APIs.apiResults,
                        error: '',
                        EditOrAddApiFail: false
                    }
                }
            }
        case OPEN_ADD_OR_EDIT_API_MODAL:
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditModal: true,
                    AddOrEditAPI: {},
                    Warnings: {},
                    EditOrAddApi: 'Add',
                }
            }

        case EDIT_API_SUCCESS:
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    apisList: state.APIs.apisList.map(
                        (item) =>
                            item.apiId === action.payload.ApiData.apiId ?
                                action.payload.ApiData : item
                    ),
                    AddOrEditModal: false,
                }
            }
        case EDIT_API_FAIL:

            return {
                ...state, APIs: {
                    ...state.APIs,
                    apiResults: {
                        ...state.APIs.apiResults,
                        error: action.payload,
                        EditOrAddApiFail: true
                    }
                }

            }

        case ADD_NEW_API_SUCCESS:
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    apisList: [...state.APIs.apisList, action.payload.Data],
                    AddOrEditModal: false,
                }
            }


        case OPEN_ACT_OR_INACT_API_MODAL:
            return {
                ...state, APIs: {
                    ...state.APIs,
                    AddOrEditAPI: action.payload.ApiData,
                    ActivateOrInActivateModal: true,
                    ActivateOrInActivateApi: action.payload.status,
                }
            }
        case CLOSE_ACT_OR_INACT_API_MODAL:
            return {
                ...state, APIs: {
                    ...state.APIs,
                    AddOrEditAPI: {},
                    ActivateOrInActivateModal: false,
                    ActivateOrInActivateApi: '',
                }
            }

        case ACTIVATE_OR_INACTIVATE_API_SUCCESS:
            return {
                ...state, APIs: {
                    ...state.APIs,
                    AddOrEditAPI: {},
                    ActivateOrInActivateModal: false,
                    ActivateOrInActivateApi: '',
                    ...state.APIs.apisList.map((api, i) =>
                        api.apiId === action.payload.ApiID ? api.active = action.payload.status : api
                    ),
                    apiResults: {
                        ...state.APIs.apiResults,
                        message: action.payload.message
                    }

                }
            }

        //#endregion


        //#region  MoneyTrasfer Final

        case GET_RECENT_TRASACTIONS:

            return {
                ...state,
                ...INITIAL_STATE
            }

        case GET_MT_PAGE_INITIAL_DATA_SUCCESS:

            return {
                ...state, MTMain: {
                    ...state.MTMain,
                    banks: action.payload.banks,
                    ekycTypes: action.payload.Ekyc
                },

            }

        case SAVE_CUSTOMER_MOBILE_NUMBER:
     
            return {
                ...state,
                MTcustomer: {
                    ...state.MTcustomer,
                    customerMobile: action.payload.value,
                    customerMobileNoWarning: '',
                    WarnsOnCustomerDetails: {
                        ...state.MTcustomer.WarnsOnCustomerDetails,
                        customerMobile: ''
                    }
                }
            }
     
        case WARNING_ON_SAVE_CUSTOMER_MOBILE_NO:
            return {
                ...state,
                MTcustomer: {
                    ...state.MTcustomer,
                    customerMobileNoWarning: action.payload,
                }
            }

        case GET_CUSTOMER_INFORMATION_SUCCESS:
            console.log(" GET CUSTOMER INFO SUCCESS REDUCER CASEE:");
            console.log(action.payload);

            return {
                ...state,
                MTcustomer: {
                    ...state.MTcustomer,
                    // displayRegistFormInMThome: true,
                    ExistingCustomer: action.payload,
                    // customerMobile: action.payload,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        isExistingCustomer: true,
                        DisplayAddingBene: false
                    },
                }, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneList: action.payload.beneficiaries
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case CUSTOMER_NOT_EXIST:
            if (action.payload === 'NewCustomer') {
                return {
                    ...state,
                    MTcustomer: {
                        ...state.MTcustomer,
                        displayRegistFormInMThome: true,
                        NavigatePages: {
                            ...state.MTcustomer.NavigatePages,
                            isExistingCustomer: false,
                        },

                    },
                    ProgressIndicator: {
                        ...state.ProgressIndicator,
                        InProgress: false
                    }
                }
            } else {
                return {
                    ...state,
                    MTcustomer: {
                        ...state.MTcustomer,
                    },
                    ProgressIndicator: {
                        ...state.ProgressIndicator,
                        InProgress: false
                    }
                }
            }

        case EDIT_CUSTOMER_INFORMATION_CLICKED:
            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,

                    CustomerDetails: state.MTcustomer.ExistingCustomer,
                    // ExistingCustomer: action.payload,
                    // customerMobile: action.payload,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        editingCustomerInfo: true
                    },
                },

            }

        case BACK_TO_DISPLAY_CUSTOMER_INFO:

            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    CustomerDetails: {},
                    // ExistingCustomer: action.payload,
                    // customerMobile: action.payload,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        editingCustomerInfo: false
                    },
                },
            }

        case GET_CUSTOMER_INFORMATION_FAIL:

            return {
                ...state
            }

        case GET_RECENT_TRASACTIONS_SUCCESS:

            action.payload.map((item, i) =>
                item.date = item.date.substr(0, item.date.indexOf("."))
            )

            console.log(" After remove .  ");
            console.log(action.payload);



            return {
                ...state,
                MTcustomer: {
                    ...state.MTcustomer,
                    recentTrasactions: action.payload

                }
            }

        case GET_CUSTOMER_TEMPLATE_SUCCESS:
            return {
                ...state,
                MTcustomer: {
                    ...state.MTcustomer,
                    CustomerDetails: action.payload
                }
            }

        case SAVE_CUSTOMER_IP_DETAILS:
            return saveCustomerIPDetails(action, state);

        case WARNINGS_ON_SAVE_CUSTOMER_IP_DETAILS:

            return {
                ...state,
                MTcustomer: {
                    ...state.MTcustomer,
                    WarnsOnCustomerDetails: action.payload
                }
            }

        case REGISTER_CUSTOMER_INFO_SUCCESS:

            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    customerId: action.payload.id,
                    customerMobile: action.payload.mobileNo,
                    // verifyingCustomerOTP: true,

                    displayRegistFormInMThome: false,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        displayVerifiedSuccess: true,
                    }
                }
            }
        case REGISTER_CUSTOMER_INFO_FAIL:

            return {
                ...state,
                ...state,
                MTcustomer: {
                    ...state.MTcustomer,
                    WarnsOnCustomerDetails: {
                        ...state.MTcustomer.WarnsOnCustomerDetails,
                        dateOfBirth: action.payload
                    }
                }
            }

        case SAVE_CUSTOMER_VERIFY_OTP:
            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    SaveCustomerOTP: action.payload,
                }
            }

        case GET_BENEFICIARY_TEMPLATE_SUCCESS:

            // if (action.payload.CustomerDetails === undefined || action.payload.CustomerDetails === null) {
            //     return {
            //         ...state, MTcustomer: {
            //             ...state.MTcustomer,
            //             // customerMobile: action.payload,
            //             NavigatePages: {
            //                 ...state.MTcustomer.NavigatePages,
            //                 DisplayAddingBene: true
            //             },
            //         }, MTBeneficiary: {
            //             ...state.MTBeneficiary,
            //             BeneDetails: action.payload.Template,
            //         }
            //     }
            // } else {
            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    ExistingCustomer: action.payload.CustomerDetails !== undefined && action.payload.CustomerDetails !== null ?
                        action.payload.CustomerDetails : state.MTcustomer.ExistingCustomer,
                    // customerMobile: action.payload,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        isExistingCustomer: action.payload.CustomerDetails !== undefined && action.payload.CustomerDetails !== null ?
                            true : state.MTcustomer.NavigatePages.isExistingCustomer,
                        DisplayAddingBene: true
                    },
                }, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneDetails: action.payload.Template,
                }
            }
        // }


        // return {
        //     ...state, MTBeneficiary: {
        //         ...state.MTBeneficiary,
        //         BeneDetails: action.payload,
        //     }
        // }

        case SEARCH_BENE_SUCCESS:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneList: action.payload
                },
            }
        case SEARCH_BENE_FAIL:
            return {
                ...state
            }

        case OTP_VERIFICATION_ON_ADD_BENE_SUCCESS:
            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        // displayVerifiedSuccess: true,
                        OtpVerifyOnAddBene: !action.payload.otpVerified,
                        // displayVerifiedSuccess: action.payload.otpVerified,
                    },
                    // verifyingCustomerOTP: !action.payload.otpVerified,
                    // ApiResult: {
                    //     ...state.MTcustomer.ApiResult,
                    //     ErrorMessage: '',
                    //     OtpMismatch: !action.payload.otpVerified,
                    //     OtpmaxAttemptsReached: action.payload.maxAttemptsReached
                    // },
                }, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    ApiResultOnBene: {
                        ...state.MTBeneficiary.ApiResultOnBene,
                        beneOtpVerifyFail: true,
                        ErrorMsg: '',
                        OtpMismatch: !action.payload.otpVerified,
                        OtpmaxAttemptsReached: action.payload.maxAttemptsReached
                    },
                }
            }

        case OTP_VERIFICATION_ON_ADD_BENE_FAIL:
            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    ApiResult: {
                        ...state.MTcustomer.ApiResult,
                        beneOtpVerifyFail: false,
                        ErrorMessage: action.payload.data.message,
                    }
                }
            }

        case CANCLE_ON_BENE_OTP_VERIFICATION:
            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        OtpVerifyOnAddBene: false,
                    },
                }
            }




        case CONTINUE_TO_ADD_BENEFICIARY:

            if (action.payload === undefined || action.payload === null) {
                return {
                    ...state, MTcustomer: {
                        ...state.MTcustomer,
                        // customerMobile: action.payload,
                        NavigatePages: {
                            ...state.MTcustomer.NavigatePages,
                            DisplayAddingBene: true
                        },
                    }
                }
            } else {
                return {
                    ...state, MTcustomer: {
                        ...state.MTcustomer,
                        ExistingCustomer: action.payload,
                        // customerMobile: action.payload,
                        NavigatePages: {
                            ...state.MTcustomer.NavigatePages,
                            isExistingCustomer: true,
                            DisplayAddingBene: true
                        },
                    }
                }
            }

        case UPDATE_CUSTOMER_INFO_SUCCESS:

            let Customer = action.payload;
            let DobDate = Customer.dateOfBirth.substring(0, 2);
            let DobMonth = Customer.dateOfBirth.substring(3, 5);
            let DobYear = Customer.dateOfBirth.substring(6, 10);

            Customer.dateOfBirth = DobYear + '-' + DobMonth + '-' + DobDate;

            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    CustomerDetails: {},
                    ExistingCustomer: action.payload,
                    // customerMobile: action.payload,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        editingCustomerInfo: false
                    },
                },
            }

        case SAVE_BENEFICIARY_INFO:
            return SaveBeneInformation(action, state);

        case GET_BANKS_BY_IFSC_SUCCESS:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneDetails: {
                        ...state.MTBeneficiary.BeneDetails,
                        IFSCCode: action.payload.value,
                        ifsc: action.payload.value,
                    },
                    warningsOnBeneDetails: {
                        ...state.MTBeneficiary.warningsOnBeneDetails,
                        IFSCCode: ''
                    }
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }
        case GET_BANKS_BY_IFSC_FAIL:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,

                    warningsOnBeneDetails: {
                        ...state.MTBeneficiary.warningsOnBeneDetails,
                        IFSCCode: action.payload
                    }
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }




        case WARNINGS_ON_BENE_IP_DETAILS:
            return warningsONBeneInformation(action, state);


        case GET_STATES_LIST_SUCCESS:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        AllStates: action.payload.states,
                        selectedBankId: action.payload.bankId
                    }, warningsOnBeneDetails: {
                        ...state.MTBeneficiary.warningsOnBeneDetails,
                        bankName: ''
                    }
                },
            }
        case GET_STATES_LIST_FAIL:
            return {
                ...state
            }

        case GET_STATES_CITIES_LIST_SUCCESS:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        AllCities: action.payload.Cities,
                        SelectedStateId: action.payload.stateId
                    }
                },
            }

        case GET_STATES_CITIES_LIST_FAIL:
            return {
                ...state
            }
        case GET_BANK_BRANCHES_LIST_SUCCESS:

            let CityName;
            state.MTBeneficiary.BankDetails.AllCities.map((state, i) => {
                console.log(action.payload.cityId);
                console.log(state.key);
                if (parseInt(action.payload.cityId) === state.key) {
                    console.log("    /  // / / / / / / // / // / / / // / / / / / / /  Value Is MAtched  : :  ::     ");
                    console.log(state.value);
                    CityName = state.value
                }
            });

            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        AllBranches: action.payload.Branches,
                        SelectedCityId: action.payload.cityId,
                        CityName: CityName
                    }
                },
            }

        case GET_BANK_BRANCHES_LIST_FAIL:

            return {
                ...state
            }
        case SAVE_SELECTED_BRANCH_ID:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        SelectedBranchId: action.payload.BranchId,
                    }, BeneDetails: {
                        ...state.MTBeneficiary.BeneDetails,
                        BranchName: action.payload.BranchName
                    }
                },
            }
        case CLEARE_BENE_BANK_DETAILS_IN_SEARCH_MODAL:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        SelectedStateId: '',
                        SelectedCityId: '',
                        SelectedBranchId: '',
                        IFSCInfoObject: [],
                        AllStates: [],
                        AllCities: [],
                        AllBranches: [],
                    }
                },
            }

        case GET_BANK_IFSC_ON_SEARCH_SUCCESS:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        IFSCInfoObject: [action.payload.IfscandDetails],
                        // SelectedBranchId: action.payload.branchId,
                        // SelectedBranchIfsc: action.payload.IfscandDetails.ifsc
                    }, BeneDetails: {
                        ...state.MTBeneficiary.BeneDetails,
                        // ifsc: action.payload.IfscandDetails.ifsc
                    },
                },
            }
        case GET_BANK_IFSC_ON_SEARCH_FAIL:
            return {
                ...state
            }

        case SELECT_IFSC_ON_SEARCH_RESULT:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        // SelectedBranchId: action.payload.branchId,
                        // SelectedBranchIfsc: action.payload.IfscandDetails.ifsc
                        SelectedBankBranch: action.payload.branch
                    }, BeneDetails: {
                        ...state.MTBeneficiary.BeneDetails,
                        ifsc: action.payload.ifsc,

                    },
                },
                MTcustomer: {
                    ...state.MTcustomer,
                    searchClicked: false
                },
            }

        case VERIFY_BENE_BEFORE_ADD:

            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    VerifyBene: {
                        ...state.MTBeneficiary.VerifyBene,
                        // enableLoading: true,
                    }
                }
            }
        case VERIFY_BENE_BEFORE_ADD_SUCCESS:
            return {
                ...state,
                MTBeneficiary: {
                    ...state.MTBeneficiary,
                    VerifyBene: {
                        ...state.MTBeneficiary.VerifyBene,
                        verifySuccess: true,
                        verifyFail: false,
                        SuccessResponse: action.payload,
                        enableLoading: false


                    },
                    BeneDetails: {
                        ...state.MTBeneficiary.BeneDetails,
                        bankAccountVerified: action.payload.BankAccountExists
                    },
                }
            }
        case VERIFY_BENE_BEFORE_ADD_FAIL:
            return {
                ...state,
                MTBeneficiary: {
                    ...state.MTBeneficiary,
                    VerifyBene: {
                        ...state.MTBeneficiary.VerifyBene,
                        verifyFail: true,
                        verifySuccess: false,
                        enableLoading: false,
                        ErrorCode: action.payload.status
                    },
                }
            }

        case CLOSE_MODAL_OF_VERIFY_BENE_BEFORE_ADD:
            return {
                ...state,
                MTBeneficiary: {
                    ...state.MTBeneficiary,
                    VerifyBene: {
                        ...state.MTBeneficiary.VerifyBene,
                        verifySuccess: false,
                        verifyFail: false,
                        ErrorCode: ''
                    },
                }
            }

        case CONFIRM_FROM_BENE_VALIDATION_SUCCESS:
            return {
                ...state,
                MTBeneficiary: {
                    ...state.MTBeneficiary,
                    VerifyBene: {
                        ...state.MTBeneficiary.VerifyBene,
                        verifySuccess: false,
                        verifyFail: false,
                        ErrorCode: ''
                    },
                    BeneDetails: {
                        ...state.MTBeneficiary.BeneDetails,
                        bankAccountVerified: true
                    }

                }
            }


        case REGISTER_BENE_INFO_SUCCESS:

            console.log(" / / / / / // / In Reducer On Bene Add Success : ");
            console.log(action.payload);

            let Banks = JSON.parse(JSON.stringify(state.MTBeneficiary.BeneDetails.bankNames))
            let Selected_Bene_Bank = {};
            Selected_Bene_Bank = Banks.filter((item) => {
                return item.key == action.payload.BeneInfo.Beneficiary.BankId
            })

            console.log(" Selected_Bene_Bank Selected_Bene_Bank Selected_Bene_Bank IN The Reducer  ");
            console.log(Selected_Bene_Bank);

            let Bene = {
                acccountNo: action.payload.BeneInfo.Beneficiary.AccountNo,
                bankAccountVerified: action.payload.BeneInfo.Beneficiary.VerifyBeneficiary,
                bankName: Selected_Bene_Bank[0].value,
                fullName: action.payload.BeneInfo.Beneficiary.FullName,
                id: action.payload.Data.beneId,
                ifsc: action.payload.BeneInfo.Beneficiary.IFSC,
                mobileNo: action.payload.BeneInfo.Beneficiary.MobileNo
            }

            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        DisplayAddingBene: false,
                        OtpVerifyOnAddBene: true,
                    }

                }, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneList: [...state.MTBeneficiary.BeneList, Bene],
                    NewBeneId: action.payload.Data.beneId
                }
            }

        case RESET_ADD_BENE_FORM:

            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneDetails: {
                        ...state.MTBeneficiary.BeneDetails,
                        ConfirmaccountNo: '',
                        ifsc: '',
                        acccountNo: '',
                        fullName: '',
                        mobileNo: '',

                    }, BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        selectedBankId: '',
                        CityName: '',
                        SelectedBankBranch: ''
                    },
                    warningsOnBeneDetails: {
                        ...state.warningsOnBeneDetails,
                        IFSCCode: ""
                    }
                }
            }

        case CLOSE_BENE_FORM:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneDetails: {},
                    BankDetails: {
                        ...state.MTBeneficiary.BankDetails,
                        selectedBankId: ''
                    }
                }, MTcustomer: {
                    ...state.MTcustomer,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        DisplayAddingBene: false
                    }
                }
            }

        case DELETE_BENEFICIARY_SUCCESS:
            console.log("action.payload IN Delete Success Reducer : ");
            console.log(action.payload);
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneList: state.MTBeneficiary.BeneList.filter(item => item.id !== action.payload.beneid),
                    BeneDeleteSuccess: true
                }
            }
        case CHANGE_BENE_DELETE_SUCCSS_PARAM_TO_FALSE:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneDeleteSuccess: false
                }
            }

        case ENABLE_BENE_NOT_VERIFIED_MODAL:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneNotVerifiedModal: true
                }, MTTransDetails: {
                    ...state.MTTransDetails,
                    BeneInfo: action.payload,

                },
            }

        case DISABLE_BENE_NOT_VERIFIED_MODAL:
            return {
                ...state, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneNotVerifiedModal: false
                }, MTTransDetails: {
                    ...state.MTTransDetails,
                    BeneInfo: {},
                },
            }

        case PROCEED_TO_TRASACTION_DETAILS:
            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        DisplayTrasDetails: true
                    }
                }, MTTransDetails: {
                    ...state.MTTransDetails,
                    BeneInfo: action.payload === undefined ? state.MTTransDetails.BeneInfo : action.payload,

                }, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneNotVerifiedModal: false
                },
            }

        case CANCLE_IN_TRANS_DETAILS:
            return {
                ...state, MTcustomer: {
                    ...state.MTcustomer,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        DisplayTrasDetails: false
                    }
                }, MTTransDetails: {
                    ...state.MTTransDetails,
                    BeneInfo: {},
                    TransMode: '',
                    TransAmount: '',
                    AdditionalCharges: '',
                    TotalAmount: '',
                    Get_Additional_Charges: false,
                    ApiResult: {
                        ...state.MTTransDetails.ApiResult,
                        ErrorMessage: ''
                    }
                }, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneNotVerifiedModal: false
                },
            }

        case SAVE_MT_TRANS_DETAILS:
            return SaveMtTransferDetails(action, state);

        case GET_ADDITIONAL_CHARGES_IN_MT_SUCCESS:

            return {
                ...state, MTTransDetails: {
                    ...state.MTTransDetails,
                    // TransAmount: action.payload.value,
                    AdditionalCharges: action.payload.charges,
                    TotalAmount: action.payload.charges + action.payload.moneyToBeTransfered,
                    Get_Additional_Charges: false
                },
            }

        case GET_ADDITIONAL_CHARGES_IN_MT_FAIL:
            return {
                ...state, MTTransDetails: {
                    ...state.MTTransDetails,
                    Get_Additional_Charges: false
                },
            }

        case MONEY_TRANSFER_REQUEST_SUCCESS:
            return {
                ...state, MTTransDetails: {
                    ...state.MTTransDetails,
                    InternalTransID: action.payload.internalTxId,
                }, MTcustomer: {
                    ...state.MTcustomer,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        DisplayTrasDetails: false,
                        DisplayTrasDescriptionNDOtpVerify: true
                    }
                }
            }

        case MONEY_TRANSFER_REQUEST_FAIL:
            return {
                ...state, MTTransDetails: {
                    ...state.MTTransDetails,
                    ApiResult: {
                        ...state.MTTransDetails.ApiResult,
                        MTrequesrFail: true,
                        ErrorMessage: action.payload
                    }
                },
            }

        case SAVE_OTP_AFTER_TRANSFER_REQUEST:

            return {
                ...state, MTTransDetails: {
                    ...state.MTTransDetails,
                    OTPafterTrasRequest: action.payload
                },
            }

        case CANCLE_THE_MT_COMPLETE_TRANSACTION:
            return {
                ...state,
                MTTransDetails: {
                    ...state.MTTransDetails,
                    BeneInfo: {},
                    TransMode: '',
                    TransAmount: '',
                    AdditionalCharges: '',
                    TotalAmount: '',
                    InternalTransID: '',
                    OTPafterTrasRequest: '',
                    ApiResult: {
                        ...state.MTTransDetails.ApiResult,
                        MTrequesrFail: false,
                        ErrorMessage: '',
                        OtpVerifyFail: false,
                        otpVerifySuccess: false,
                        OtpMaxAttemptsReached: false,
                    }
                }, MTcustomer: {
                    ...state.MTcustomer,
                    NavigatePages: {
                        ...state.MTcustomer.NavigatePages,
                        DisplayTrasDetails: false,
                        DisplayTrasDescriptionNDOtpVerify: false
                    }
                }, MTBeneficiary: {
                    ...state.MTBeneficiary,
                    BeneNotVerifiedModal: false
                },
            }

        case MONEY_TRASFER_OTP_VERIFY_SUCCESS:
            return {
                ...state,
                MTTransDetails: {
                    ...state.MTTransDetails,
                    ApiResult: {
                        ...state.MTTransDetails.ApiResult,
                        OtpVerifyFail: !action.payload.otpVerified,
                        otpVerifySuccess: action.payload.otpVerified,
                        TrasSuccessDateNDtime: action.payload.otpVerified ? moment().format('MMMM Do YYYY, h:mm:ss a') : '',
                        OtpMaxAttemptsReached: action.payload.maxAttemptsReached,
                    }
                }
            }
        case MONEY_TRASFER_OTP_VERIFY_FAIL:
            return {
                ...state
            }

        //#endregion  MoneyTrasfer Final

        //#region  RATECARD Final

        case RATE_CARD_INITIAL:
            return {
                ...state
            }
        // {
        //     ...state, RateCard: {
        //         ...state.RateCard,
        //         CommissionCalculator: {
        //             ...state.RateCard.CommissionCalculator,
        //             TransactionValue: '',
        //             CommissionAplicable: '',
        //             AgentPayout: '',
        //             TDSfromAgent: '',
        //             AgentBonus: '',
        //             ServiceProviderCharges: '',
        //             GSTforOrg: '',
        //             Finalcommission: ''
        //         }
        //     }
        // }


        case GET_ALL_RATECARDS_SUCCESS:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    AllrateCards: action.payload,
                    RateCardNavigation: {
                        ...state.RateCard.RateCardNavigation,
                        // AddRateCard: action.payload.length === 0 ? true : false,
                        AddRateCard: false,
                        EditRateCard: false,
                        ViewRateCard : false
                    },
                    ApiResult: {
                        ...state.RateCard.ApiResult,
                        CreateNewRateCard: ''
                    },
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case GET_ALL_RATECARDS_FAIL:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    ApiResult: {
                        ...state.RateCard.ApiResult,
                        CreateNewRateCard: ''
                    },
                },
            }

        case SEARCH_RATE_CARD_SUCCESS:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    AllrateCards: action.payload
                },
            }
        case SEARCH_RATE_CARD_FAIL:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                },
            }
        case GET_RATE_CARD_TEMPLATE_SUCCESS:

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    CreateRateCard: action.payload,
                    ActualRateCard: action.payload,
                    InitialRateCard: action.payload
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }

            }

        case GET_RATE_CARD_FAIL:
            return {
                ...state,
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case DELETE_RATE_CARD_SUCCESS:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    AllrateCards: state.RateCard.AllrateCards.filter(item => item.id !== action.payload),
                    ApiResult: {
                        ...state.RateCard.ApiResult,
                        RateCardDeleteSuccess: true
                    }
                }
            }
        case CHANGE_PAGE_SIZE_IN_RATE_CARD_HOME:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    InitialPageSize: action.payload,
                }
            }



        case GET_RATE_CARD_SLABS_SUCCESS:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    RateCardId: action.payload.id,
                    RateCardColor: action.payload.colorIndicator,
                    RateCardTitle: action.payload.name,
                    RateCardDescription: action.payload.description,
                    CreateRateCard: action.payload.entries,
                    ActualRateCard: action.payload.entries,
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case GET_RATE_CARD_SLABS_FAIL:
            return {
                ...state, ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case NAVIGATE_TO_RATE_CARD_MAIN:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    RateCardId: action.payload.id,
                    RateCardNavigation: {
                        ...state.RateCard.RateCardNavigation,
                        AddRateCard: action.payload.addOrEdit === 'Add RateCard' ? true : false,
                        EditRateCard: action.payload.addOrEdit === 'Edit RateCard' ? true : false,
                        ViewRateCard: action.payload.addOrEdit === 'View RateCard' ? true : false,
                        RateCardMode: action.payload.addOrEdit
                    }
                },
                // ProgressIndicator:{
                //     ...state.ProgressIndicator,
                //     InProgress:false
                // }            
            }

        case COMMISSION_CALCULATOR_MODAL:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    RateCardNavigation: {
                        ...state.RateCard.RateCardNavigation,
                        CommissionCalculatorModal: !state.RateCard.RateCardNavigation.CommissionCalculatorModal,
                    }
                }
            }

        case CHANGE_RATE_CARD_VALUES:
            return ChangeRateCardValues(action, state);

        case SET_COMMISSION_CALCULATOR_VALUES:

            let TransValue = action.payload.minValue;
            let CommissAplicable = (1 / 100) * TransValue;   // Done. 
            let AgentShare = (50 / 100) * CommissAplicable; //Done.
            let tDSfromAgent = (5 / 100) * AgentShare;  //Done.
            let agentPayout = (95 / 100) * AgentShare; //Done.
            let OrgShare = (50 / 100) * CommissAplicable; //Done. 
            let serviceProviderCharges = (60 / 100) * OrgShare; //Done.
            let agentBonus = (10 / 100) * OrgShare; //Done.
            let orgCommission = (30 / 100) * OrgShare; //Done..
            let gstForORG = (orgCommission / 100) * 18; //Done.
            let finalCommission = orgCommission - gstForORG; //Done.

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    CommissionCalculator: {
                        ...state.RateCard.CommissionCalculator,
                        TransactionValue: TransValue,
                        CommissionAplicable: CommissAplicable,
                        AgentPayout: agentPayout,
                        TDSfromAgent: tDSfromAgent,
                        AgentBonus: agentBonus,
                        ServiceProviderCharges: serviceProviderCharges,
                        GSTforOrg: gstForORG,
                        Finalcommission: finalCommission
                    }
                }
            }

        case SAVE_CREATING_RATE_CARD_DATA:

            return Ratecard_data_on_createRatecard(action, state)

        case SAVE_FILTER_RATE_CARD_FROM_AND_TO_VALUES:
            if (action.payload.field === 'From') {
                return {
                    ...state, RateCard: {
                        ...state.RateCard,
                        RCfilterFrom: action.payload.value,

                    }
                }
            }
            else if (action.payload.field === 'To') {
                return {
                    ...state, RateCard: {
                        ...state.RateCard,
                        RCfilterTo: action.payload.value,
                    }
                }
            }

        case FILTER_RATE_CARD_SLABS:

            // if (action.payload.FromIndx === NaN || action.payload.ToIndx === NaN) {

            //     console.log(" Reloading CreateRateCard With ActualRateCard:")
            //     return {
            //         ...state, RateCard: {
            //             ...state.RateCard,
            //             CreateRateCard: state.RateCard.ActualRateCard
            //         }
            //     }

            // } 
            // else
            {
                return {
                    ...state, RateCard: {
                        ...state.RateCard,
                        CreateRateCard: state.RateCard.ActualRateCard.slice(action.payload.FromIndx - 1, action.payload.ToIndx)
                    }
                }

            }

        case SET_VALUES_MODAL_IN_RATE_CARD:

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    SetValuesModal: action.payload.val,
                    SetValuesModalData: action.payload.item === undefined ? {} : action.payload.item
                }
            }

        case SAVE_RATE_CARD_VALUES_FROM_MODAL:

            return SaveRateCardValues(action, state);

        case SET_VALUES_TO_RATE_CARD_SLABS:

            let ValuesToSet = state.RateCard.SetValuesModalData;
            // let ToVal = state.RateCard.SetValuesModalData.To;

            let FromIndx = Math.floor(parseInt(ValuesToSet.From) / 100) - 1;
            let ToIndx = Math.floor(parseInt(ValuesToSet.To) / 100) - 1;

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    CreateRateCard: state.RateCard.CreateRateCard.map((slab, idx) => {
                        // if (parseInt(slab.minValue) === parseInt(ValuesToSet.From) || parseInt(slab.minValue) > parseInt(ValuesToSet.From) &&
                        //     parseInt(slab.maxValue) === parseInt(ValuesToSet.To) || parseInt(slab.maxValue) < parseInt(ValuesToSet.To)) {
                        if ((FromIndx === idx || FromIndx < idx) && (ToIndx === idx || ToIndx > idx)) {
                            return {
                                ...slab,
                                ...slab.rate = ValuesToSet.rate,
                                ...slab.rateType = ValuesToSet.rateType,
                                ...slab.dailyPayout = ValuesToSet.dailyPayout,
                                ...slab.dailyPayoutType = ValuesToSet.dailyPayoutType,
                                ...slab.monthlyPayout = ValuesToSet.monthlyPayout,
                                ...slab.monthlyPayoutType = ValuesToSet.monthlyPayoutType,
                            }
                        } else return slab
                    }),
                    SetValuesModal: false,
                    RateCardValidations: {
                        ...state.RateCard.RateCardValidations,
                        sendRCToServer: false,
                    },
                }
            }

        case CREATE_NEW_RATE_CARD_SUCCESS:

            delete action.payload.entries;

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    AllrateCards: [...state.RateCard.AllrateCards, action.payload],
                    RCfilterFrom: '',
                    RCfilterTo: '',
                    RateCardColor: '',
                    RateCardDescription: '',
                    RateCardTitle: '',
                    ApiResult: {
                        ...state.RateCard.ApiResult,
                        CreateNewRateCard: 'Success',
                    },
                    RateCardNavigation: {
                        ...state.RateCard.RateCardNavigation,
                        AddRateCard: false,
                        EditRateCard: false
                    },
                    // RCValidationsInitialState()
                    RateCardValidations: {
                        ...state.RateCard.RateCardValidations,
                        validateSlabs: false,
                        slabsValidationResult: 'Checking',
                    },
                }
            }

        case CREATE_NEW_RATE_CARD_FAIL:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    ApiResult: {
                        ...state.RateCard.ApiResult,
                        CreateNewRateCard: 'Fail'
                    },
                    RateCardValidations: {
                        ...state.RateCard.RateCardValidations,
                        validateSlabs: false,
                        slabsValidationResult: 'Checking',
                    },
                    // RCValidationsInitialState()
                }


            }

        case UPDATE_RATE_CARD_SUCCESS:

            delete action.payload.entries;

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    AllrateCards: state.RateCard.AllrateCards.map((item, index) => {
                        if (item.id === action.payload.RateCardPayload.id) {
                            // This isn't the item we care about - keep it as-is
                            return {
                                ...item,
                                ...action.item
                            }
                        }
                        return item;
                        // Otherwise, this is the one we want - return an updated value
                    }),
                    RCfilterFrom: '',
                    RCfilterTo: '',
                    RateCardColor: '',
                    RateCardDescription: '',
                    RateCardTitle: '',
                    RateCardNavigation: {
                        ...state.RateCard.RateCardNavigation,
                        AddRateCard: false,
                        EditRateCard: false
                    },
                    // RCValidationsInitialState()
                    RateCardValidations: {
                        ...state.RateCard.RateCardValidations,
                        validateSlabs: false,
                        slabsValidationResult: 'Checking',
                    },
                }
            }
        case UPDATE_RATE_CARD_FAIL:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    // RCValidationsInitialState()
                    RateCardValidations: {
                        ...state.RateCard.RateCardValidations,
                        validateSlabs: false,
                        slabsValidationResult: 'Checking',
                    },
                }
            }

        case RESET_RATE_CARD_DATA:

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    RCfilterFrom: "",
                    RCfilterTo: "",
                    CreateRateCard: state.RateCard.CreateRateCard.map((item, idx) => {
                        return {
                            ...item,
                            ...item.rate = "",
                            ...item.rateType = "",
                            ...item.dailyPayout = "",
                            ...item.dailyPayoutType = "",
                            ...item.monthlyPayout = "",
                            ...item.monthlyPayoutType = "",
                        }
                    }),
                    RateCardTitle: "",
                    RateCardDescription: '',
                    RateCardColor: '#ff0000',
                    CommissionCalculator: {
                        TransactionValue: '',
                        CommissionAplicable: '',
                        AgentPayout: '',
                        TDSfromAgent: '',
                        AgentBonus: '',
                        ServiceProviderCharges: '',
                        GSTforOrg: '',
                        Finalcommission: ''
                    },
                    SetValuesModalData:
                    {
                        ...state.RateCard.SetValuesModalData,
                        From: "",
                        To: "",
                        rate: "",
                        dailyPayout: "",
                        monthlyPayout: "",
                    },
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        SlabsWarning: "",
                        colorwarning: "",
                        ratecardDescWarning: "",
                        ratecardTitleWarning: "",
                    }
                }
            }

        case VALIDATE_SLABS_BEFORE_SEND_TO_SERVER:
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    RateCardValidations: {
                        ...state.RateCard.RateCardValidations,
                        validateSlabs: true,
                        sendRCToServer: true,
                        // sendRCToServer: true
                    },
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case SLABS_VALIDATION_RESULT:

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    RateCardValidations: {
                        ...state.RateCard.RateCardValidations,
                        slabsValidationResult: action.payload,
                        // validateSlabs: false
                        // sendRCToServer: action.payload
                    },
                }


            }

        case RATE_CARD_WARNINGS:
            return ratecardWarnings(action, state);





        case CANCLE_EVENT_IN_RC_MAIN:

            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    RCfilterFrom: '',
                    RCfilterTo: '',
                    RateCardColor: '',
                    RateCardDescription: '',
                    RateCardTitle: '',

                    RateCardNavigation: {
                        ...state.RateCard.RateCardNavigation,
                        AddRateCard: false,
                        EditRateCard: false,
                        ViewRateCard: false,
                    },
                    // RCValidationsInitialState()
                    RateCardValidations: {
                        ...state.RateCard.RateCardValidations,
                        validateSlabs: false,
                        // sendRCToServer: false,
                        slabsValidationResult: 'Checking',
                    },
                    CreateRateCard: [],
                    ActualRateCard: [],
                }
            }



        // Bank Deposit Slip Actions 
        case RESET_DEPOSIT_SLIP_COMPONENT:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    AmountDepositSlip: "",
                    amount: "",
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        fromNameWarning: "",
                        amountWarning: "",
                        modeOfDepositWarning: "",
                        onlineTransferWarning: "",
                        referenceNumberWarning: "",
                        numberWarning: "",
                        toBankAccountNoWarning: "",
                        slipImageWarning: "",
                    },
                    CDMReportList: [],
                    slipList: [],
                    isGetDepositedSlipSuccess: false,
                    isApproveDepositSlipSuccess: false,
                    isApproveDepositSuccess: false,
                    isSubmitDepositSlipSuccess: false,
                    isSendDepositSuccess: false,
                    DespositList: [{ id: 1, TenantId: '', Amount: '' }],
                    SlipImageList: [{ id: 1, SlipImage: '', TxId: '' }],
                    DepositSlipImage: "",
                    BankSlipTxId: "",
                    depositSlipWarnings: {
                        ...state.DespositSlipComp.depositSlipWarnings,
                        imageWarnings: "",
                        amountWarnings: "",
                        orgIdWarnings: "",
                        txIDWarnings: "",
                    },
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        fromName: "",
                        amount: "",
                        modeOfDeposit: "",
                        onlineTransfer: "",
                        referenceNumber: "",
                        chequeDetails: {
                            number: "",
                            date: ""
                        },
                        toBankAccountNo: "",
                        dateOfDeposit: "",
                        remarks: "",
                        slipImage: "",
                        tenantDepositMode: "",
                        tenantName: "",
                        tenantType: ""
                    }
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }



        case SAVE_DEPOSIT_SLIP_DETAILS:
            return SaveDepositSlipDetails(action, state);

        case SAVE_DEPOSIT_SLIP_DETAILS_WARNINGS:
            return SaveDepositSlipDetailsWarnings(action, state);

        case SAVE_DEPOSIT_SLIP_DETAILS_TENANT:
            return SaveDepositSlipDetailsTenant(action, state);

        case SAVE_DEPOSIT_SLIP_DETAILS_TENANT_WARNINGS:
            return SaveDepositSlipDetailsTenantWarnings(action, state);

        case GET_ALL_DEPOSITS_FROM_DB_SUCCESS:
            console.log("In reducer Values are")
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    slipList: action.payload.data,
                    // isSendDepositSuccess:true
                }
            }
        case GET_DEPOSIT_MODE_LISTS_SUCCESS:
            console.log("In reducer Values are")
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    // SlipDetails:
                    // {
                    //     ...state.DespositSlipComp.SlipDetails,
                    //     tenantDepositMode:"tenantDepositMode"
                    // } ,
                    tenantDepositMode: action.payload.data.tenantDepositMode
                }
            }

        case GET_ALL_CDM_STUCK_LIST_SUCCESS:
            console.log("In reducer Values are")
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    CDMReportList: action.payload.data,
                    // isSendDepositSuccess:true
                }
            }

        case GET_CDM_STUCK_DETAILS_SUCCESS:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: action.payload.data,
                    isGetDepositedSlipSuccess: true,
                }
            }
        case GET_DEPOSITS_DETAILS_FROM_DB_SUCCESS:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    // SlipDetails:action.payload.item,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        slipImage: action.payload.data.base64Image,
                        remarks: action.payload.data.remarks,
                        amount: action.payload.data.amount,
                        dateOfDeposit: action.payload.item.dateOfDeposit,
                        id: action.payload.item.id,
                        tenantDepositMode: action.payload.item.tenantDepositMode,
                        tenantName: action.payload.item.tenantName,
                        tenantType: action.payload.item.tenantType,
                        referenceNumber: action.payload.data.cdmDepositReferenceNo,
                        onlineTransfer: action.payload.data.onlineTransferReferenceNo,
                        toBankAccountNo: action.payload.data.toBankAccountNumber,
                        chequeDetails: {
                            number: action.payload.data.chequeNumber,
                            date: action.payload.data.chequeDate,
                        }
                    },
                    isGetDepositedSlipSuccess: true,
                }
            }
        case SEND_SLIP_DETAILS_TO_DB_SUCCESS:
            if (action.payload.field == "addReportToList") {
                return {
                    ...state, DespositSlipComp: {
                        ...state.DespositSlipComp,
                        CDMReportList: [...state.DespositSlipComp.CDMReportList,
                        action.payload.value],
                        isSendDepositSuccess: true
                    }
                }
            } else {
                return {
                    ...state, DespositSlipComp: {
                        ...state.DespositSlipComp,
                        slipList: [...state.DespositSlipComp.slipList, action.payload.value],
                        isSendDepositSuccess: true
                    }
                }
            }




        case SAVE_DEPOSIT_SLIP_LIST_ITEMS:
            return AddDetailsToListItem(action, state);

        case SEND_DEPOSIT_SLIP_DETAILS_TO_DB_SUCCESS:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    isSubmitDepositSlipSuccess: action.payload.isSubmitDepositSlipSuccess
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case SEND_DEPOSIT_SLIP_DETAILS_TO_DB_FAIL:
            return {
                ...state, ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    depositedSlipsList: action.payload.data
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }
        case GET_DEPOSITED_SLIP_DETAILS_FROM_DB_SUCCESS_TENANT:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    depositDepositListTenant: action.payload.data
                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }
            }

        case GET_DEPOSITED_SLIP_SUCCESS:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    getDepositSlipVMTenantAmounts: action.payload.data.getDepositSlipVMTenantAmounts,
                    BankSlipTxId: action.payload.data.bankSlipTxId,
                    DepositSlipImage: action.payload.data.depositSlipImage,
                    isGetDepositedSlipSuccess: true,
                    depositSlipId: action.payload.data.depositSlipId

                },
                ProgressIndicator: {
                    ...state.ProgressIndicator,
                    InProgress: false
                }

            }
        case APPROVE_DEPOSIT_SLIP_SUCCESS:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    isApproveDepositSlipSuccess: true,
                }
            }

        case APPROVE_DEPOSIT_SUCCESS:
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    isApproveDepositSuccess: true,
                }
            }


        //#endregion  RATECARD Final

        default: {
            return state;
        }
    }

}

// function RCValidationsInitialState() {
//     return {
//         RateCardValidations: {
//             validateSlabs: false,
//             slabsValidationResult: 'Checking',
//         },
//     }
// }

function SaveRateCardValues(action, state) {
    if (action.payload.field === 'From') {
        return {
            ...state, RateCard: {
                ...state.RateCard,
                SetValuesModalData: {
                    ...state.RateCard.SetValuesModalData,
                    From: action.payload.value
                },
                Ratecardwarnings: {
                    fromWarning: "",
                    toWarning: "",
                    dailyPayoutWarning: "",
                    monthlyPayoutWarning: "",
                    rateWarning: "",
                }
            },

        }
    } else if (action.payload.field === 'To') {
        return {
            ...state, RateCard: {
                ...state.RateCard,
                SetValuesModalData: {
                    ...state.RateCard.SetValuesModalData,
                    To: action.payload.value
                }
            }
        }
    } else if (action.payload.field === 'rate') {
        return {
            ...state, RateCard: {
                ...state.RateCard,
                SetValuesModalData: {
                    ...state.RateCard.SetValuesModalData,
                    rate: action.payload.value
                }
            }
        }
    }
    else if (action.payload.field === 'rateType') {
        return {
            ...state, RateCard: {
                ...state.RateCard,
                SetValuesModalData: {
                    ...state.RateCard.SetValuesModalData,
                    rateType: action.payload.value
                }
            }
        }
    } else if (action.payload.field === 'dailyPayout') {
        return {
            ...state, RateCard: {
                ...state.RateCard,
                SetValuesModalData: {
                    ...state.RateCard.SetValuesModalData,
                    dailyPayout: action.payload.value
                }
            }
        }
    }
    else if (action.payload.field === 'dailyPayoutType') {
        return {
            ...state, RateCard: {
                ...state.RateCard,
                SetValuesModalData: {
                    ...state.RateCard.SetValuesModalData,
                    dailyPayoutType: action.payload.value
                }
            }
        }
    } else if (action.payload.field === 'monthlyPayout') {
        return {
            ...state, RateCard: {
                ...state.RateCard,
                SetValuesModalData: {
                    ...state.RateCard.SetValuesModalData,
                    monthlyPayout: action.payload.value
                }
            }
        }
    }
    else if (action.payload.field === 'monthlyPayoutType') {
        return {
            ...state, RateCard: {
                ...state.RateCard,
                SetValuesModalData: {
                    ...state.RateCard.SetValuesModalData,
                    monthlyPayoutType: action.payload.value
                }
            }
        }
    }
}

function Ratecard_data_on_createRatecard(action, state) {

    return action.payload.field === 'RateCardColor' ? 
    {    
        ...state, RateCard: {
            ...state.RateCard,
            RateCardColor: action.payload.value.color
        }
    }: action.payload.field === 'RateCardTitle' ? 
    {         
        ...state, RateCard: {
            ...state.RateCard,
            RateCardTitle: action.payload.value
        }
    }: action.payload.field === 'RateCardDescription' ?
    {  
                ...state, RateCard: {
                    ...state.RateCard,
                    RateCardDescription: action.payload.value
                }
    }
    : action.payload.field ==="CurrentPage"  ?
    {
        ...state, RateCard: {
            ...state.RateCard,
            currentPage: action.payload.value
        }
    }
    :
    null
}

function ChangeRateCardValues(action, state) {

    console.log(" In Function Of Reducer / / / /  ");
    console.log(state.RateCard.CreateRateCard[action.payload.indx]);
    console.log(state.RateCard.CreateRateCard[action.payload.indx].rate);
    // console.log()

    return {
        ...state, RateCard: {
            ...state.RateCard,
            // CreateRateCard: action.payload.field === 'rate' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].rate = action.payload.value]
            //     : action.payload.field === 'rateType' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].rateType = action.payload.value]
            //         : action.payload.field === 'dailyPayout' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].dailyPayout = action.payload.value]
            //             : action.payload.field === 'dailyPayoutType' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].dailyPayoutType = action.payload.value]
            //                 : action.payload.field === 'monthlyPayout' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].monthlyPayout = action.payload.value]
            //                     : action.payload.field === 'monthlyPayoutType' ? [...state.RateCard.CreateRateCard, ...state.RateCard.CreateRateCard[action.payload.indx].monthlyPayoutType = action.payload.value]
            //                         : state.RateCard.CreateRateCard
            CreateRateCard: state.RateCard.CreateRateCard.map((slab, i) => {

                if (slab.slabId === parseInt(action.payload.slabId)) {
                    if (action.payload.field === 'rateType') {
                        return { ...slab, ...slab.rateType = action.payload.value }
                    } else if (action.payload.field === 'dailyPayoutType') {
                        return { ...slab, ...slab.dailyPayoutType = action.payload.value }
                    } else if (action.payload.field === 'monthlyPayoutType') {
                        return { ...slab, ...slab.monthlyPayoutType = action.payload.value }
                    } else if (action.payload.field === 'rate') {
                        return { ...slab, ...slab.rate = action.payload.value }
                    } else if (action.payload.field === 'dailyPayout') {
                        return { ...slab, ...slab.dailyPayout = action.payload.value }
                    } else if (action.payload.field === 'monthlyPayout') {
                        return { ...slab, ...slab.monthlyPayout = action.payload.value }
                    }

                } else return {
                    ...slab
                }
            }
            ),
            RateCardValidations: {
                ...state.RateCard.RateCardValidations,
                sendRCToServer: false,
            },
        }
    }

}

function SaveMtTransferDetails(action, state) {
    if (action.payload.field === 'TransMode') {
        return {
            ...state, MTTransDetails: {
                ...state.MTTransDetails,
                TransMode: action.payload.value,
            },
        }
    } else if (action.payload.field === 'TransAmount') {
        return {
            ...state, MTTransDetails: {
                ...state.MTTransDetails,
                TransAmount: action.payload.value,
                Get_Additional_Charges: true
                // AdditionalCharges: Number(action.payload.value )/100,
                // TotalAmount: Number(action.payload.value) + Number(action.payload.value)/100,
            },
        }
    } else if (action.payload.field === 'AdditionalCharges') {
        return {
            ...state, MTTransDetails: {
                ...state.MTTransDetails,
                AdditionalCharges: Number(action.payload.value) / 100,

            },
        }
    } else if (action.payload.field === 'TotalAmount') {
        return {
            ...state, MTTransDetails: {
                ...state.MTTransDetails,
                TotalAmount: action.payload.value
            },
        }
    }
}


function SaveBeneInformation(action, state) {
    if (action.payload.field === 'fullName') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                BeneDetails: {
                    ...state.MTBeneficiary.BeneDetails,
                    fullName: action.payload.value
                }, warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    fullName: ''
                },
            }
        }
    } else if (action.payload.field === 'mobileNo') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                BeneDetails: {
                    ...state.MTBeneficiary.BeneDetails,
                    mobileNo: action.payload.value
                }, warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    mobileNo: ''
                },
            }
        }
    } else if (action.payload.field === 'acccountNo') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                BeneDetails: {
                    ...state.MTBeneficiary.BeneDetails,
                    acccountNo: action.payload.value
                }, warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    acccountNo: ''
                },

            }
        }
    } else if (action.payload.field === 'ConfirmaccountNo') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                BeneDetails: {
                    ...state.MTBeneficiary.BeneDetails,
                    ConfirmaccountNo: action.payload.value
                }, warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    ConfirmaccountNo: ''
                },
            }
        }
    } else if (action.payload.field === 'IFSCCode') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                BeneDetails: {
                    ...state.MTBeneficiary.BeneDetails,
                    IFSCCode: action.payload.value,
                    ifsc: action.payload.value,
                }, warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    IFSCCode: ''
                },
            }
        }
    } else if (action.payload.field === 'ValidateCheckBox') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                BeneDetails: {
                    ...state.MTBeneficiary.BeneDetails,
                    bankAccountVerified: action.payload.value
                },
            }
        }
    }
}

function warningsONBeneInformation(action, state) {
    if (action.payload.field === 'fullName') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    fullName: action.payload.value
                },
            }
        }
    } else if (action.payload.field === 'mobileNo') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    mobileNo: action.payload.value
                },
            }
        }
    } else if (action.payload.field === 'acccountNo') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    acccountNo: action.payload.value
                },
            }
        }
    } else if (action.payload.field === 'ConfirmaccountNo') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    ConfirmaccountNo: action.payload.value
                },
            }
        }
    } else if (action.payload.field === 'IFSCCode') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                warningsOnBeneDetails: {
                    ...state.MTBeneficiary.warningsOnBeneDetails,
                    IFSCCode: action.payload.value
                },
            }
        }
    } else if (action.payload.field === 'OnFinalValidation') {
        return {
            ...state, MTBeneficiary: {
                ...state.MTBeneficiary,
                warningsOnBeneDetails: action.payload.value
            }
        }
    }
}


function SaveBeniValues_On_Transfer_or_Schedule(action, state) {

    if (action.payload.field === 'Depositing') {
        return {
            ...state, moneyTransfer: {
                ...state.moneyTransfer,
                ...state.moneyTransfer.benificiaries.map(
                    (beni, inx) => inx === action.payload.index ? beni.Depositing = action.payload.value : beni
                )
            }
        }
    } else if (action.payload.field === 'Charges') {
        return {
            ...state, moneyTransfer: {
                ...state.moneyTransfer,
                ...state.moneyTransfer.benificiaries.map(
                    (beni, inx) => inx === action.payload.index ? beni.Charges = action.payload.value : beni
                )
            }
        }
    } else if (action.payload.field === 'ImpsOrNeft') {
        return {
            ...state, moneyTransfer: {
                ...state.moneyTransfer,
                ...state.moneyTransfer.benificiaries.map(
                    (beni, inx) => inx === action.payload.index ? beni.ImpsOrNeft = action.payload.value : beni
                )
            }
        }
    }
}

function saveCustomerIPDetails(action, state) {
    if (action.payload.field === 'fullName') {
        return {
            ...state,
            MTcustomer: {
                ...state.MTcustomer,
                fullName: action.payload.val,
                CustomerDetails: {
                    ...state.MTcustomer.CustomerDetails,
                    fullName: action.payload.val
                },
                WarnsOnCustomerDetails: {
                    ...state.MTcustomer.WarnsOnCustomerDetails,
                    fullName: ''
                }
            }
        }
    } else if (action.payload.field === 'dateOfBirth') {
        return {
            ...state,
            ...state,
            MTcustomer: {
                ...state.MTcustomer,
                CustomerDetails: {
                    ...state.MTcustomer.CustomerDetails,
                    dateOfBirth: action.payload.val
                },
                WarnsOnCustomerDetails: {
                    ...state.MTcustomer.WarnsOnCustomerDetails,
                    dateOfBirth: ''
                }
            }
        }
    } else if (action.payload.field === 'gender') {
        return {
            ...state,
            ...state,
            MTcustomer: {
                ...state.MTcustomer,
                CustomerDetails: {
                    ...state.MTcustomer.CustomerDetails,
                    gender: action.payload.val
                }, WarnsOnCustomerDetails: {
                    ...state.MTcustomer.WarnsOnCustomerDetails,
                    gender: ''
                }
            }
        }
    } else if (action.payload.field === 'kyckey') {
        return {
            ...state,
            ...state,
            MTcustomer: {
                ...state.MTcustomer,
                CustomerDetails: {
                    ...state.MTcustomer.CustomerDetails,
                    ekyc: {
                        ...state.MTcustomer.CustomerDetails.ekyc,
                        key: action.payload.val,
                    },
                }, WarnsOnCustomerDetails: {
                    ...state.MTcustomer.WarnsOnCustomerDetails,
                    kyckey: ''
                }
            }
        }
    } else if (action.payload.field === 'kycvalue') {
        return {
            ...state,
            ...state,
            MTcustomer: {
                ...state.MTcustomer,
                CustomerDetails: {
                    ...state.MTcustomer.CustomerDetails,
                    ekyc: {
                        ...state.MTcustomer.CustomerDetails.ekyc,
                        value: action.payload.val
                    },
                }, WarnsOnCustomerDetails: {
                    ...state.MTcustomer.WarnsOnCustomerDetails,
                    kycvalue: ''
                }
            }
        }
    } else if (action.payload.field === 'address') {
        return {
            ...state,
            ...state,
            MTcustomer: {
                ...state.MTcustomer,
                CustomerDetails: {
                    ...state.MTcustomer.CustomerDetails,
                    address: action.payload.val
                }, WarnsOnCustomerDetails: {
                    ...state.MTcustomer.WarnsOnCustomerDetails,
                    address: ''
                }
            }
        }
    } else if (action.payload.field === 'Age') {
        return {
            ...state,
            ...state,
            MTcustomer: {
                ...state.MTcustomer,
                CustomerDetails: {
                    ...state.MTcustomer.CustomerDetails,
                    age: action.payload.val
                }
            }
        }
    }
}


function warningsoncustomeripdetails(action, state) {

    if (action.payload.field === 'fullName') {
        return {
            ...state,
            MTcustomer: {
                ...state.MTcustomer,

                WarnsOnCustomerDetails: {
                    ...state.MTcustomer.WarnsOnCustomerDetails,
                    fullName: action.payload.val,
                },
            }
        }
    } else if (action.payload.field === 'OnFinalValidation') {
        return {
            ...state,
            MTcustomer: {
                ...state.MTcustomer,
                customerDetailsWarning: action.payload.val
            }
        }
    }


}

function OnBeneficiaryEdit(action, state) {
    let fieldName = action.payload.fieldName;
    let fieldValue = action.payload.fieldValue;
    if (fieldName == 'ACHolder') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    acctHolderName: fieldValue
                }
            },

        };
    }
    else if (fieldName === 'mobileNo') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    acctMobileNo: fieldValue
                }
            },
            ApiResponseOnCust_Details: {
                ...state.ApiResponseOnCust_Details,
                FocusBeniFornInput: false,
            },
        };
    } else if (fieldName === 'BeniAddress') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    BeniAddress: fieldValue
                }
            },
            ApiResponseOnCust_Details: {
                ...state.ApiResponseOnCust_Details,
                FocusBeniFornInput: false,
            },
        };
    }
    else if (fieldName === 'transferAmount') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    transferAmount: fieldValue
                }
            },
            ApiResponseOnCust_Details: {
                ...state.ApiResponseOnCust_Details,
                FocusBeniFornInput: false,
            },
        };
    }
    else if (fieldName === 'acctNo') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    acctNo: fieldValue
                }
            },
            ApiResponseOnCust_Details: {
                ...state.ApiResponseOnCust_Details,
                FocusBeniFornInput: false,
            },
        };
    }
    else if (fieldName === 'confAcctNo') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    confAccNo: fieldValue
                }
            },
            ApiResponseOnCust_Details: {
                ...state.ApiResponseOnCust_Details,
                FocusBeniFornInput: false,
            },
        };
    }
    else if (fieldName === 'IFSC') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    bankIFSC: fieldValue
                }
            },
            ApiResponseOnCust_Details: {
                ...state.ApiResponseOnCust_Details,
                FocusBeniFornInput: false,
            },
        };
    }
    else if (fieldName === 'bankAddress') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    bankAddress: fieldValue
                }
            }
        };
    }

    else if (fieldName === 'bankName') {
        // 'ANDHRA BANK', 'HDFC', 'ICICI', 'SBI'
        let ifscCode = fieldValue == 'ANDHRA BANK' ? 'ANDB0000000' : fieldValue == 'ICICI' ? 'ICIC0000000' :
            fieldValue == 'HDFC' ? 'HDFC0000000' : fieldValue == 'SBI' ? 'SBIN0000000' : '';

        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    selectedBank: fieldValue, bankIFSC: ifscCode
                },
                beneficiaryValidations: {
                    ...state.benificiaryDetails.beneficiaryValidations,
                    isBankDefaultVisible: true
                }
            }
        };

    }
    else if (fieldName === 'bankState') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    selectedBankState: fieldValue
                },
                beneficiaryValidations: {
                    ...state.benificiaryDetails.beneficiaryValidations,
                    isBankStateDefaultVisible: true
                }
            }
        };

    }
    else if (fieldName === 'bankBranch') {
        return {
            ...state, benificiaryDetails: {
                ...state.benificiaryDetails,
                beneficiaryEdit: {
                    ...state.benificiaryDetails.beneficiaryEdit,
                    selectedBankBranch: fieldValue
                },
                beneficiaryValidations: {
                    ...state.benificiaryDetails.beneficiaryValidations,
                    isBankBranchDefaultVisible: true
                }
            }
        };

    }
}
function SaveAddOrEditApiData(action, state) {

    console.log("In Reducer values are");
    console.log("field: " + action.payload.field + " and value: " + action.payload.value);

    switch (action.payload.field) {
        case 'name':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditAPI: {
                        ...state.APIs.AddOrEditAPI,
                        name: action.payload.value
                    },
                    Warnings: {
                        name: '',
                    }
                }
            }
        case 'beniverifycost':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditAPI: {
                        ...state.APIs.AddOrEditAPI,
                        beneVerificationCharges: action.payload.value
                    },
                    Warnings: {
                        beneVerificationCharges: '',
                    }
                }
            }

        case 'moneytrascharges':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditAPI: {
                        ...state.APIs.AddOrEditAPI,
                        moneyTransferCharges: action.payload.value
                    },
                    Warnings: {
                        moneyTransferCharges: '',
                    }
                }
            }
        case 'priority':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditAPI: {
                        ...state.APIs.AddOrEditAPI,
                        priority: action.payload.value,
                    }
                }
            }
        case 'walletminamount':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditAPI: {
                        ...state.APIs.AddOrEditAPI,
                        walletMinAmountTrigger: action.payload.value
                    },
                    Warnings: {
                        walletMinAmountTrigger: '',
                    }
                }
            }
        case 'baseurl':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    AddOrEditAPI: {
                        ...state.APIs.AddOrEditAPI,
                        baseUrl: action.payload.value
                    },
                    Warnings: {
                        baseUrl: '',
                    }
                }
            }
    }
}
function SaveAddOrEditApiDataWarnings(action, state) {

    console.log("In Reducer values are");
    console.log("field: " + action.payload.field + " and value: " + action.payload.value);
    switch (action.payload.field) {
        case 'name':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    Warnings: {
                        ...state.APIs.Warnings,
                        name: action.payload.value,
                    }
                }
            }
        case 'beniverifycost':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    Warnings: {
                        ...state.APIs.Warnings,
                        beneVerificationCharges: action.payload.value,
                    }
                }
            }

        case 'moneytrascharges':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    Warnings: {
                        ...state.APIs.Warnings,
                        moneyTransferCharges: action.payload.value,
                    }
                }
            }

        case 'walletminamount':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    Warnings: {
                        ...state.APIs.Warnings,
                        walletMinAmountTrigger: action.payload.value,
                    }
                }
            }
        case 'baseurl':
            return {
                ...state,
                APIs: {
                    ...state.APIs,
                    Warnings: {
                        ...state.APIs.Warnings,
                        baseUrl: action.payload.value,
                    }
                }
            }
    }
}


function UpdateCustomerEditForm(action, state) {
    let fieldName = action.payload.fieldName;
    let fieldValue = action.payload.fieldValue;

    if (fieldName == 'FirstName') {
        return {
            ...state,
            moneyTransfer: {
                ...state.moneyTransfer,
                customerDetails: {
                    ...state.moneyTransfer.customerDetails,
                    firstName: fieldValue
                }
            }
        }
    }
    if (fieldName == 'LastName') {
        return {
            ...state,
            moneyTransfer: {
                ...state.moneyTransfer,
                customerDetails: {
                    ...state.moneyTransfer.customerDetails,
                    lastName: fieldValue
                }
            }
        }
    }
    if (fieldName == 'eKYC') {
        return {
            ...state,
            moneyTransfer: {
                ...state.moneyTransfer,
                customerDetails: {
                    ...state.moneyTransfer.customerDetails,
                    selectedEKYC: fieldValue,
                    eKYCInfo: ''
                }
            }
        }
    }
    if (fieldName == 'eKYCInfo') {
        return {
            ...state,
            moneyTransfer: {
                ...state.moneyTransfer,
                customerDetails: {
                    ...state.moneyTransfer.customerDetails,
                    eKYCInfo: fieldValue,
                }
            }
        }
    }
    if (fieldName == 'Address') {
        return {
            ...state,
            moneyTransfer: {
                ...state.moneyTransfer,
                customerDetails: {
                    ...state.moneyTransfer.customerDetails,
                    address: fieldValue
                }
            }
        }
    }
}

function ratecardWarnings(action, state) {

    switch (action.payload.field) {
        case 'RateCardColor':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        colorwarning: action.payload.value,
                    },
                }
            }
        case 'RateCardTitle':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        ratecardTitleWarning: action.payload.value
                    },
                }
            }
        case 'RateCardDescription':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        ratecardDescWarning: action.payload.value,
                    },
                }
            }
        case 'resetwarnings':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        ratecardDescWarning: action.payload.value,
                        ratecardTitleWarning: action.payload.value,
                        SlabsWarning: action.payload.value,
                    },
                }
            }
        case 'Slabs':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        SlabsWarning: action.payload.value,
                    },
                }
            }
        case 'from':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        fromWarning: action.payload.value,
                    },
                }
            }

        case 'to':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        toWarning: action.payload.value,
                    },
                }
            }
        case 'rate':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        rateWarning: action.payload.value,
                    },
                }
            }

        case 'dailyPayout':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        dailyPayoutWarning: action.payload.value,

                    },
                }
            }

        case 'monthlyPayout':
            return {
                ...state, RateCard: {
                    ...state.RateCard,
                    Ratecardwarnings: {
                        ...state.RateCard.Ratecardwarnings,
                        monthlyPayoutWarning: action.payload.value,
                    },
                }
            }
    }
}

function SaveDepositSlipDetails(action, state) {
    console.log("Index : " + action.payload.Index);

    switch (action.payload.field) {
        case 'AddItem':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    DespositList: action.payload.value
                }
            }
        case 'RemoveItem':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    DespositList: state.DespositSlipComp.DespositList.filter(item => item.id !== action.payload.Index),
                }
            }
        case 'AddSlipItem':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipImageList: action.payload.value
                }
            }
        case 'RemoveSlipItem':

            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipImageList: state.DespositSlipComp.SlipImageList.filter(item => item.id !== action.payload.Index),
                }
            }
        case 'orgName':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    orgName: action.payload.value
                }
            }
        case 'Amount':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    warningsDeposit: ""
                }
            }
        case 'pictureBase64':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    DepositSlipImage: action.payload.value
                }
            }
        case 'TXId':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    BankSlipTxId: action.payload.value
                }
            }
    }
}

function SaveDepositSlipDetailsWarnings(action, state) {

    switch (action.payload.field) {
        case 'AddItem':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    DespositList: action.payload.value
                }
            }

        case 'orgID':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    depositSlipWarnings: {
                        ...state.DespositSlipComp.depositSlipWarnings,
                        orgIdWarnings: action.payload.value,

                    }
                }
            }
        case 'Amount':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    depositSlipWarnings: {
                        ...state.DespositSlipComp.depositSlipWarnings,
                        amountWarnings: action.payload.value,
                    }
                }
            }

        case 'pictureBase64':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,

                    depositSlipWarnings: {
                        ...state.DespositSlipComp.depositSlipWarnings,
                        imageWarnings: action.payload.value,
                    }
                }
            }
        case 'TXId':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,

                    depositSlipWarnings: {
                        ...state.DespositSlipComp.depositSlipWarnings,

                        txIDWarnings: action.payload.value,
                    }
                }
            }
        case 'AllWranings':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,

                    depositSlipWarnings: {
                        ...state.DespositSlipComp.depositSlipWarnings,
                        txIDWarnings: action.payload.value,
                        imageWarnings: action.payload.value,
                        amountWarnings: action.payload.value,
                        orgIdWarnings: action.payload.value
                    }
                }
            }
    }
}


function AddDetailsToListItem(action, state) {

    switch (action.payload.field) {

        case 'orgID':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    DespositList: state.DespositSlipComp.DespositList.map((item, i) =>
                        i == action.payload.i ? {
                            ...item,
                            TenantId: action.payload.value,
                        }
                            : item
                    ),
                    depositSlipWarnings: {
                        ...state.DespositSlipComp.depositSlipWarnings,
                        amountWarnings: ""
                    }
                }
            }
        case 'Amount':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    DespositList: state.DespositSlipComp.DespositList.map((item, i) =>
                        i == action.payload.i ? {
                            ...item,
                            Amount: action.payload.value,
                        }
                            : item
                    ),
                    AmountDepositSlip: action.payload.value,
                    depositSlipWarnings: {
                        ...state.DespositSlipComp.depositSlipWarnings,
                        amountWarnings: ""
                    }
                }
            }
    }
}

function SaveDepositSlipDetailsTenant(action, state) {

    switch (action.payload.field) {
        case 'fromName':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        fromName: action.payload.value
                    },
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        fromNameWarning: "",
                    }
                }
            }

        case 'amount':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        amount: action.payload.value
                    },
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        amountWarning: "",
                    }
                }
            }
        case 'modeOfDeposit':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        modeOfDeposit: action.payload.value
                    },
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        modeOfDepositWarning: "",
                    }
                }
            }
        case 'onlineTransfer':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        onlineTransfer: action.payload.value
                    },
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        onlineTransferWarning: "",
                    }
                }
            }
        case 'refNumber':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        referenceNumber: action.payload.value
                    },
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        referenceNumberWarning: "",
                    }
                }
            }
        case 'chequeNumber':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        chequeDetails: {
                            ...state.DespositSlipComp.SlipDetails.chequeDetails,
                            number: action.payload.value
                        },
                        SlipDetailsWarnings: {
                            ...state.DespositSlipComp.SlipDetailsWarnings,
                            numberWarning: "",
                        }
                    }
                }
            }
        case 'date':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        chequeDetails: {
                            ...state.DespositSlipComp.SlipDetails.chequeDetails,
                            date: action.payload.value
                        }
                    }
                }
            }
        case 'toBankAccountNo':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        toBankAccountNo: action.payload.value
                    },
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        toBankAccountNoWarning: "",
                    }
                }
            }
        case 'dateOfDeposit':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        dateOfDeposit: action.payload.value
                    }
                }
            }
        case 'remarks':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        remarks: action.payload.value
                    }
                }
            }
        case 'slipImage':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        slipImage: action.payload.value
                    },
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        slipImageWarning: "",
                    }
                }
            }
        case 'retailerName':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: {
                        ...state.DespositSlipComp.SlipDetails,
                        retailerName: action.payload.value
                    },
                }
            }
        case 'view':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetails: action.payload.value,
                    isGetDepositedSlipSuccess: true,
                }
            }

        default:
            {
                return state;
            }
    }
}

function SaveDepositSlipDetailsTenantWarnings(action, state) {
    console.log("In reducer");
    console.log(action.payload.value);
    console.log(action.payload.field)

    switch (action.payload.field) {
        case 'fromName':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        fromNameWarning: action.payload.value
                    }
                }
            }
        case 'amount':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        amountWarning: action.payload.value
                    }
                }
            }
        case 'slipImage':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        slipImageWarning: action.payload.value
                    }

                }
            }
        case 'toBankAccountNo':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        toBankAccountNoWarning: action.payload.value
                    }
                }
            }

        case 'chequeNumber':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        numberWarning: action.payload.value
                    }
                }
            }
        case 'refNumber':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        referenceNumberWarning: action.payload.value
                    }
                }
            }
        case 'onlineTransfer':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        onlineTransferWarning: action.payload.value
                    }
                }
            }
        case 'modeOfDeposit':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: {
                        ...state.DespositSlipComp.SlipDetailsWarnings,
                        modeOfDepositWarning: action.payload.value
                    }
                }
            }
        case 'Warnings':
            return {
                ...state, DespositSlipComp: {
                    ...state.DespositSlipComp,
                    SlipDetailsWarnings: action.payload.value
                }
            }
        default:
            {
                return state;
            }
    }
}