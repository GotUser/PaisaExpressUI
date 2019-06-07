import { REHYDRATE } from 'redux-persist'
import { REDUCER_INITIAL } from '../Authentication/types';

import {
  SAVE_PROGRESS_INDICATOR_STATUS,
  SAVE_PROGRESS_INDICATOR_STATUS_FALSE,
  RESET,
  RESET_ORG,
  RESET_EDIT_ORG_BANK_FORM,
  GET_ALL_ROLES_AND_PERMISSIONS_SUCCESS,
  GET_ALL_ROLES_AND_PERMISSIONS_FAIL,

  GET_DISTRIBUTOR_LIST_SUCCESS,
  GET_DISTRIBUTOR_LIST_FAIL,
  GET_DISTRIBUTOR_LIST,

  GET_ORGANIZATIONS_LIST,
  GET_ORGANIZATIONS_LIST_SUCCESS,
  GET_ORGANIZATIONS_LIST_FAIL,

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
  PROCEED_TO_ADD_NEW_ORG,

  GET_ORG_RETAILERS_LIST_SUCCESS,
  GET_ORG_RETAILERS_LIST_FAIL,
  GET_DISTRIBUTOR_BASIC_DETAILS_TO_EDIT_SUCCESS,
  GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_SUCCESS,
  GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_FAIL,

  GET_TEMPLATE_OF_ORG_DETAILS_SUCCESS,
  GET_TEMPLATE_OF_ORG_DETAILS_FAIL,

  SEND_CREATE_ORGANIZATION_DETAILS_SUCCESS,
  SEND_CREATE_ORGANIZATION_DETAILS_FAIL,

  SAVE_ORG_DOCUMENTS,
  SAVE_ORG_DOCUMENT_WARNINGS,

  UPLOAD_ORG_DOCUMENTS,
  UPLOAD_ORG_DOCUMENTS_SUCCESS,
  UPLOAD_ORG_DOCUMENTS_FAIL,
  GET_DOCUMENT_SUCCESS,
  GET_ORG_DOCUMENTS_SUCCESS,

  SEND_ORG_BANK_DETAILS_AT_REGISTRAION,
  SEND_ORG_BANK_DETAILS_AT_REGISTRAION_SUCCESS,
  SEND_ORG_BANK_DETAILS_AT_REGISTRAION_FAIL,

  SEND_EDITTED_USER_DETAILS,
  SEND_EDITTED_USER_DETAILS_SUCCESS,
  SEND_EDITTED_USER_DETAILS_FAIL,

  DUPLICATE_PERMISSIONS_ROLE_NAME,
  ADD_NEW_ROLE_MODULE_SUCCESS,
  ADD_NEW_ROLE_MODULE_FAIL,

  EDIT_ROLE_MODULE_PERMISSIONS,
  SAVE_ROLE_NAME,
  GET_ROLE_MODULE_TEMPLATE_SUCCESS,
  GET_ROLE_MODULE_TEMPLATE_FAIL,

  GET_BANK_STATES_ON_EDIT_ORG_BANKS_SUCCESS,
  GET_BANK_STATES_ON_EDIT_ORG_BANKS_FAIL,

  GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_SUCCESS,
  GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_FAIL,

  GET_BANK_IFSC_ON_EDIT_ORG_BANKS_SUCCESS,
  GET_BANK_IFSC_ON_EDIT_ORG_BANKS_FAIL,

  ADD_NEW_ORG_BANK,

  OPEN_OR_CLOSE_EDIT_ROLE_MODULE_MODAL,
  EDIT_ROLE_MODAL_SUCCESS,

  OPEN_OR_CLOSE_DELETE_ROLE_MODAL,

  UPDATE_ROLE_PERMISSIONS_SUCCESS,

  OPEN_OR_CLOSE_MODAL_OF_ADDUSERS,
  DISTRIBUTOR_USER_SETTINGS_CLICKED,

  UPDATE_RETAILERS_SUCCESS,

  GET_ALL_USERS_LIST,
  GET_ALL_USERS_LIST_SUCCESS,
  GET_ALL_USERS_LIST_FAIL,

  ADD_NEW_USER,
  ADD_NEW_USER_SUCCESS,
  ADD_NEW_USER_FAIL,

  UPDATE_AGENTS_SUCCESS,
  UPDATE_AGENTS_FAIL,

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

  SAVE_EDITING_ORG_BANK_DETAILS,

  RETAILER_USER_SETTINGS_CLICKED,
  RETAILER_USER_SETTINGS_CHOSEN,

  USER_SETTINGS_BUTTON_CLICKED,
  USER_SETTINGS_OPTION_CHOSEN,
  CLOSE_USER_SETTINGS_MODAL,
  OPEN_ADD_USER_MODEL_SUCCESS,
  OPEN_ADD_USER_MODEL_FAIL,

  ORGANIZATION_EDIT_MODAL,
  ORGANIZATION_EDIT_MODAL_CLOSE,
  SET_CUSTOMER_PERMISSONS,
  SET_RETAILER_PERMISSONS,
  STORE_FILTERED_USER_LIST,
  STORE_FILTERED_RETAILERS_LIST,
  STORE_FILTERED_USERS_LIST,

  SAVE_ORG_REGISTRATION_INPUT_DETAILS,
  SAVE_CREATE_NEW_USER_INPUT_DETAILS,
  ORG_REGISTRATION_INPUT_WARNINGS,
  CREATE_USER_INPUT_WARNINGS,

  ADD_NEW_ORG_BANK_OPTION_TO_ARRAY,
  SAVE_NEW_ORG_BANK_DETAILS,
  SAVE_MOBILE_NUMBER,

  REMOVE_NEW_ORG_BANK_OPTION_FROM_ARRAY,
  GET_DISTRIBUTOR_BANKS_TO_EDIT_SUCCESS,
  GET_ORAGANIZATION_BANKS_TO_EDIT_SUCCESS,
  GET_ORAGANIZATION_BANKS_TO_EDIT_FAIL,

  REGEX_WARNINGS_AT_EDIT_ORG_BANK_DETAILS,

  SEND_ORG_BANK_DETAILS_TO_EDIT_SUCCESS,
  SEND_ORG_BANK_DETAILS_TO_EDIT_FAIL,


  SAVE_ORG_BANK_TO_EDIT_AND_GET_BANKCITIES_SUCCESS,

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

  // .....................................  ADMIN RETAILER TYPES ............................//

  SET_FILTERED_ORGANIZATION_DATA,

  REMOVE_API_SUCCESS_OR_FAILURE_FOOTER_VIEW,
  CLEAR_RESPONSE_ON_ORG_APIS,
  CLEAR_RESPONSE_OF_USER_APIS,

  SAVE_WALLET_BALANCE_TO_UPDATE,

  ADD_FUNDS_TO_ORG_WALLET,
  ADD_FUNDS_TO_ORG_WALLET_SUCCESS,
  ADD_FUNDS_TO_ORG_WALLET_FAIL,
  ADD_FUNDS_TO_USER_WALLET,
  ADD_FUNDS_TO_USER_WALLET_SUCCESS,
  ADD_FUNDS_TO_USER_WALLET_FAIL,

  GET_UN_APPROVED_DISTRIBUTOR_LIST_SUCCESS,
  GET_UN_APPROVED_DISTRIBUTOR_LIST_FAIL,
  GET_UN_APPROVED_ORG_LIST,
  GET_UN_APPROVED_ORG_LIST_SUCCESS,
  GET_UN_APPROVED_ORG_LIST_FAIL,
  APPROVE_ORGANIZATION,
  APPROVE_ORGANIZATION_SUCCESS,

  OPEN_REJECT_ORG_MODAL,
  CLOSE_REJECT_ORG_MODAL,
  SAVE_REJECT_ORG_REASON,
  REJECT_NEW_ORG_SUCCESS,
  GET_REJECTED_USERS_SUCCESS,
  GET_ORG_DOCS_SUCCESS,
  GET_BANK_CITIES_ON_EDIT_ORG_BANKS_SUCCESS,
  SEND_ORG_BANK_DETAILS_TO_ADD_SUCCESS,
  SEND_ORG_BANK_DETAILS_TO_ADD_FAIL,
  GET_ROLES_AND_PERMISSIONS_TEMPLATE_SUCCESS,
  GET_ROLES_AND_PERMISSIONS_TEMPLATE_FAIL,
  GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_SUCCESS,
  GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_FAIL,

} from './Types';

const INITIAL_STATE = {

  ProgressIndicator: {
    InProgress: false,
  },

  NewlyAddedOrg: {
    List: [],
    PendingDistributorList: [],
    openUserRejectModal: false,
    UserRejectReason: '',
    RejectingUserDetails: {},
    ApiResults: {
      Error: '',
      message: '',
      GetUnapprovedListSuccess: false,
      approveOrgSuccess: false
    }
  },

  RejectedUsers: {
    RejectedUserList: [],
    ApiResults: {
      getRejectedUsersSuccess: false
    }
  },

  OrganizationDetails: {

    OrgNavigations: {
      AddNewOrg: ''
    },

    WalletBalanceToAdd: '',
    walletUpdateisFor: '',
    updateWalletClicked: false,
    CreatingOrganizationId: '',
    formType: 1,
    enableNextButtonInOrgBasicDetails: false,
    enableNextButtonInOrgDocs: false,
    mobileNo: '',
    EditOrgDocsFor: '',
    OrgDocuments: {
      Aadhar: '',
      pan: '',
      DLicense: '',
      voterId: '',
      Warning: '',
      enableSubmit: true,
      disableSubmit: false,

    },
    OrgApiResults: {
      getOrgListSuccess: false,
      SuccessOnSubmitOrgDetail: false,
      getOrgListFail: false,
      Error: '',
      getorgBasicDetailsFail: false,
      ActivateOrInactivateOrgFail: false,
      RegisteringOrgFail: false,
      updateOrgBankFail: false,
      updateOrgBankSuccess: false,
      UpdateWalletFail: false,
      updateOrgStatusSuccess: false,
      OrgCashInSuccess: false,
      UpdateOrgOrUserWallet: false,
      EditOrgBasicDetailsSuccess: false,
      UpdateDocumentsSuccess: false,
      getDocumentSuccess: false,
      getDocumentSuccessFromURL: false,
    },

    CashInAmount: '',
    PresentOrgTypeId: '',
    PresentCreatingOrgType: '',
    OrganizationStoreInfo: {
      bankNames: [],
      organizationTypes: [],
      roleModules: [],
      statesAndCities: [],
      RateCardsList: [],
    },
    actualOrgList: [],

    OrgList: [],
    DistibutorList: [],

    RegisteringOrg: {},
    OrgAddressIp: {
      addressLine1: null,
      addressLine2: null,
      pinCode: null,
      cityId: 0
    },
    NewOrgBankDetails: [],
    RegistrationinputWarning: {},

    FailOnSubmitOrgDetail: false,

    EditOrganizationDetails: {
      EditingUserData: {},
      EditUserDataWarning: {},
      activateClicked: false,
      inactiveClicked: false,
      CashInClicked: false,
      EditOrgModal: false,

      Get_Org_Banks_Success: false,

      Modifying_Org_Banks: {
        BankStates: [],
        BankCities: [],
        StateCities: [],
        BankBranches: [],
        Org_BanksList: [],
        Editing_Org_Bank_Details: {},
        Regex_at_Editing_Org_Bank_Details: {},
        ShowBankDetailsForm: false,
        AddOrEditBank: ''
      },
      EditBankComponentFor: ''
    }
  },



  DistributorDetails: {
    actualOrgList: [],
    OrgList: [],

  },

  UserRegistration: {
    fullName: '',
    mobileNo: '',
    emailId: '',
    businessName: '',
    address: {
      houseDetails: '',
      street: '',
      CityId: '',
      pinCode: ''
    },
    selectedRole: '',
    selectedOrganization: '',
    commissionModel: 1,
    picture: '',
    creditEligible: false,
    creditLimit: 0,
    incentives: false,
    bank: [],

    inputWarning: {
      fullName: '',
      mobileNo: '',
      creditLimit: '',
      emailId: '',
      businessName: '',
      commissionModel: '',
      selectedRole: '',
      houseDetails: '',
      street: '',
      CityId: '',
      pinCode: '',
    }
  },

  allBankDetails: {
    banks: [],
    states: [],
    locations: [],
    branches: []
  },
  userNameToCashIn: '',
  userNumberToCashIn: '',
  CashInAmount: '',
  user: {
    usersList: [],
    actualUserList: []
  },

  AdminRetailers: {
    activateClicked: false,
    inactiveClicked: false,

    actualAdminRetailersList: [],
    AdminRetailersList: [],
    EditModalFor: '',
    RetailerDetailsToEdit: '',
    EditBankComponentFor: '',
    RegexWarning: [],
  },

  UserDetails: {

    UserApiResults: {
      Error: '',
      RegisterUserFail: false,
      updateUserDetailsFail: false,
      ActivateOrInactivateFail: false,
      EditUserSuccess: false,
      UserStatusChangedSuccess: false
    },

    spinnerOnGetUserList: false,

    CreateUser: {},
    CreateUserDataWarning: {},
    UserDetailsToEdit: {},
    UserDataEditWarning: {},

    CreateOrEditFSE: {},
    CreateOrEditFSEWarnings: {},
    CreateOrEditAgent: {},
    CreateOrEditAgentWarnings: {},


    EditingUserType: '',
    usersList: [],
    actualUsersList: [],
    UserDetailsToEdit: {},
    PresentAgentRoleName: '',
    PresentCreatingAgentRoleName: {},
    AddUserClicked: false,
    EditUserClicked: false,
    activateClicked: false,
    inactiveClicked: false,
    settingsBtn: null,
    modulePermissions: {}
  },



  customers:
  {
    customersList: [],
    AddOrEditModal: false,
    EditingCustomerDetails: [],
    modulePermissions: []
  },

  role: {
    isLoginRolesLoaded: false,
    ModalIsTo: '',
    rolesList: [],
    AddNewRole: [],
    moduleName: '',
    rolePermission: [],
    ActualPemissionsTemplate: [],
    PemissionsTemplate: [],

    SelectedModuleIds: [],

    EditRoleModule: {
      DuplicateRoleNameMessage: '',
      roleName: '',
      roleDescription: '',
      roleModules: [],
      EditingRoleId: ''
    },

    AddOrEditRoleModalOpen: false,
    OpenDeleteRoleModal: false,
    RoleToDelete: {
      Name: '',
      Description: '',
    },
    isAddNewRole: false
  },
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {


    case REDUCER_INITIAL:

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

    case RESET:
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          EditUserClicked: false,
          AddUserClicked: false,
        }

      }

    case RESET_ORG:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgList: [],
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            SuccessOnSubmitOrgDetail: false,
            getDocumentSuccess: false,
            getDocumentSuccessFromURL: false,
            updateOrgBankSuccess: false,
            Error: ''
          },
          OrgDocuments: {
            ...state.OrganizationDetails.OrgDocuments,
            Aadhar: '',
            pan: '',
            DLicense: '',
            voterId: '',
            Warning: '',
            disableSubmit: false,
          },

          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            RateCardId: "",
          },
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditOrgModal: false
          }
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }

      }
    case RESET_EDIT_ORG_BANK_FORM:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              Editing_Org_Bank_Details: {},
              ShowBankDetailsForm: false,
            }

          }

        }
      }


    //#region  Organization Related Cases


    case REHYDRATE:
      // console.log(" In User Management Reducer Rehydrate Case:");
      // console.log(action);
      // console.log(action.payload);

      return action.payload === undefined ? { ...state } : { ...state, ...action.payload.userManagementReducer }


    //#region ROLE Related Cases.

    case GET_ALL_ROLES_AND_PERMISSIONS_SUCCESS:
      // console.log(" IN Reducer Payload Is:");
      // console.log(action.payload);
      return {
        ...state,
        role: {
          ...state.role,
          rolesList: action.payload,
          isLoginRolesLoaded: true

        }
      }
    case GET_ALL_ROLES_AND_PERMISSIONS_FAIL:
      return {
        ...state
      }

    case GET_ROLES_AND_PERMISSIONS_TEMPLATE_SUCCESS:
      return {
        ...state,
        role: {
          ...state.role,
          PemissionsTemplate: action.payload,
          ActualPemissionsTemplate: action.payload,
          // isLoginRolesLoaded: true

        }
      }

    case GET_ROLES_AND_PERMISSIONS_TEMPLATE_FAIL:
      return {
        ...state,
        role: {
          ...state.role,

        }
      }

    case DUPLICATE_PERMISSIONS_ROLE_NAME:
      return {
        ...state, role: {
          ...state.role,
          EditRoleModule: {
            ...state.role.EditRoleModule,
            DuplicateRoleNameMessage: action.payload
          }
        }
      }

    case ADD_NEW_ROLE_MODULE_SUCCESS:
      return {
        ...state, role: {
          ...state.role,
          AddOrEditRoleModalOpen: false,
          ModalIsTo: '',
          SelectedModuleIds: [],
          rolesList: [...state.role.rolesList, action.payload]
        }
      }
    case ADD_NEW_ROLE_MODULE_FAIL:
      return {
        ...state
      }

    case GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_SUCCESS:
      let Combined_Perm_Modules = Combine_2_Role_Permissions(JSON.parse(JSON.stringify(state.role.PemissionsTemplate)), JSON.parse(JSON.stringify(action.payload.ResponseData)))
      // console.log(Combined_Perm_Modules);
      return {
        ...state,
        role: {
          ...state.role,
          AddOrEditRoleModalOpen: true,
          ModalIsTo: 'Edit',
          SelectedModuleIds: Combined_Perm_Modules.SelectedPerms,
          EditRoleModule: {
            ...state.role.EditRoleModule,
            roleModules: Combined_Perm_Modules.template,
            EditingRoleId: action.payload.Role.id,
            roleName: action.payload.Role.name,
          }
        }
      }
    case GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_FAIL:
      return {
        ...state,
        role: {
          ...state.role,

        }
      }


    case EDIT_ROLE_MODULE_PERMISSIONS:

      // console.log(" In The Reducer : ");
      // console.log(action.payload);

      let IsCheck = action.payload.checkValue;
      let SelectedModuleIdsArray = JSON.parse(JSON.stringify(state.role.SelectedModuleIds))

      if (!IsCheck) {
        var index = SelectedModuleIdsArray.indexOf(action.payload.item.id);
        if (index > -1) {
          SelectedModuleIdsArray.splice(index, 1);
        }
      } else {
        SelectedModuleIdsArray = [...SelectedModuleIdsArray, action.payload.item.id]
      }

      return {
        ...state,
        role: {
          ...state.role,
          EditRoleModule: {
            ...state.role.EditRoleModule,
            ...state.role.EditRoleModule.roleModules.map((module, i) => {
              module.moduleName === action.payload.moduleName ?
                // { ...module, CheckOrUnCheckRoleModules(module,action) }
                module.permissions.map((item) => item.id === action.payload.item.id ? item.check = action.payload.checkValue : item
                )
                : module
            })
          },
          SelectedModuleIds: SelectedModuleIdsArray
        }
      }
    case SAVE_ROLE_NAME:
      return {
        ...state,
        role: {
          ...state.role,
          EditRoleModule: {
            ...state.role.EditRoleModule,
            roleName: action.payload,
            DuplicateRoleNameMessage: ''
          }
        }
      }

    case GET_ROLE_MODULE_TEMPLATE_SUCCESS:

      return {
        ...state,
        role: {
          ...state.role,
          AddOrEditRoleModalOpen: true,
          ModalIsTo: 'ADD',
          EditRoleModule: {
            ...state.role.EditRoleModule,
            roleName: '',
            roleDescription: '',
            roleModules: JSON.parse(JSON.stringify(state.role.PemissionsTemplate)),
          }
        }
      }

    case GET_ROLE_MODULE_TEMPLATE_FAIL:
      return {
        ...state
      }

    case OPEN_OR_CLOSE_EDIT_ROLE_MODULE_MODAL:

      if (action.payload.AddRoleModalOpen) {
        return {
          ...state,
          role: {
            ...state.role,
            ModalIsTo: 'EDIT',
            AddOrEditRoleModalOpen: true,
            EditRoleModule: {
              ...state.role.EditRoleModule,
              roleName: action.payload.Role.RoleName,
              roleDescription: action.payload.Role.RoleDescription,
              roleModules: action.payload.Role.Modules
            }

          }
        }
      } else {
        return {
          ...state,
          role: {
            ...state.role,
            AddOrEditRoleModalOpen: false,
            ModalIsTo: '',
            EditRoleModule: {
              ...state.role.EditRoleModule,
              DuplicateRoleNameMessage: '',
              roleName: '',
              roleDescription: '',
              roleModules: ''
            }
          }
        }
      }
    case EDIT_ROLE_MODAL_SUCCESS:
      // console.log('Edit Reducer')
      // console.log(action.payload)
      if (action.payload.AddRoleModalOpenOrClose) {
        return {
          ...state,
          role: {
            ...state.role,
            AddOrEditUserRoleModal: !state.role.AddOrEditUserRoleModal,
            roleId: '',
            roleName: '',
            roleDescription: '',
            roleModules: action.payload.Role.Modules,
          }
        }
      }
    case OPEN_OR_CLOSE_DELETE_ROLE_MODAL:
      if (action.payload.CancleDeleteModal) {
        return {
          ...state,
          role: {
            ...state.role,
            OpenDeleteRoleModal: false,
          }
        }
      }

      return {
        ...state,
        role: {
          ...state.role,
          OpenDeleteRoleModal: true,
          RoleToDelete: {
            ...state.role.RoleToDelete,
            Name: action.payload.RoleName,
            Description: action.payload.RoleDescription,

          }
        }
      }


    case UPDATE_ROLE_PERMISSIONS_SUCCESS:

      let RolesList = JSON.parse(JSON.stringify(state.role.rolesList));
      RolesList.map((role, i) => {
        if (role.id == action.payload.RoleId) {
          RolesList[i].name = action.payload.roleName
        }
      })

      return {
        ...state, role: {
          ...state.role,
          AddOrEditRoleModalOpen: !state.role.AddOrEditRoleModalOpen,
          rolesList: RolesList,
          AddOrEditRoleModalOpen: false,
          ModalIsTo: '',
          SelectedModuleIds: [],

        }
      }


    case GET_ORGANIZATIONS_LIST:
      // return INITIAL_STATE

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          // SuccessOnSubmitOrgDetail: false,

          OrgNavigations: {
            ...state.OrganizationDetails.OrgNavigations,
            AddNewOrg: ''
          },
          enableNextButtonInOrgBasicDetails: false,
          enableNextButtonInOrgDocs: false,
          EditOrgDocsFor: '',

          CreatingOrganizationId: '',
          formType: 1,
          NewOrgBankDetails: [],
          RegistrationinputWarning: {},

          OrgAddressIp: {
            addressLine1: null,
            addressLine2: null,
            pinCode: null,
            cityId: 0
          },
          OrgDocuments: {
            ...state.OrganizationDetails.OrgDocuments,
            Aadhar: '',
            pan: '',
            DLicense: '',
            voterId: '',
            Warning: '',
            enableSubmit: false
          },
          RegisteringOrg: {},
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            getOrgListSuccess: false,
            getOrgListFail: false,
            OrgDocsList: [],
          },
          OrgList: [],
          actualOrgList: [],
          PresentOrgTypeId: action.payload.orgTypeId,
          PresentCreatingOrgType: action.payload.orgTypeName,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditBankComponentFor: false
          }
        }
      }

    case GET_ORGANIZATIONS_LIST_SUCCESS:
      // console.log(" Payload IN Reducer IS : ");
      // console.log(action.payload);
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            getOrgListSuccess: true,
            getOrgListFail: false
          },
          OrgList: action.payload.Data,
          actualOrgList: action.payload.Data,
          PresentOrgTypeId: action.payload.orgTypeId,
          PresentCreatingOrgType: action.payload.orgTypeName,

        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }
    case GET_DISTRIBUTOR_LIST_SUCCESS:
      // console.log(" Payload IN Reducer IS : ");
      // console.log(action.payload);
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            getOrgListSuccess: true,
            getOrgListFail: false,
            Error: ""
          },
          OrgList: action.payload.Data,
          actualOrgList: action.payload.Data,
          PresentOrgTypeId: action.payload.orgTypeId,
          PresentCreatingOrgType: action.payload.orgTypeName,

        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }
    case GET_ORGANIZATIONS_LIST_FAIL:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            getOrgListSuccess: false,
            getOrgListFail: true,
            Error: "Get  List Fail"
          },
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }
    case GET_DISTRIBUTOR_LIST_FAIL:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            getOrgListSuccess: false,
            getOrgListFail: true
          },
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }



    case GET_CREATE_ORG_INFO_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          OrganizationStoreInfo: {
            ...state.OrganizationDetails.OrganizationStoreInfo,
            bankNames: action.payload.bankNames,
            // organizationTypes: action.payload.organizationTypes,
            RateCardsList: action.payload.rateCards,
            statesAndCities: action.payload.statesAndCities
          },
        }
      }


    case GET_CREATE_ORG_INFO_FAIL:




    case ADD_NEW_ORG_BANK_OPTION_TO_ARRAY:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          NewOrgBankDetails: [
            ...state.OrganizationDetails.NewOrgBankDetails,
            {
              AccountHolderName: '', AccountNo: '', bankId: '', stateId: '', cityId: '', BankBranchId: '', ifsc: '', bankCities: [], bankStates: [],
              bankBranches: []
            }
          ]
        }
      }



    case REMOVE_NEW_ORG_BANK_OPTION_FROM_ARRAY:
      return {
        ...state,
        OrganizationDetails: {
          ...state.OrganizationDetails,
          NewOrgBankDetails: state.OrganizationDetails.NewOrgBankDetails.filter((item, index) => index != action.payload)
        }
      }



    case GET_BANK_STATES_SUCCESS_IN_ORG:
      // if(state.OrganizationDetails.PresentCreatingOrgType == "AdminRetailer"){

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) => {
            if (i === parseInt(action.payload.index)) {
              item.bankId = action.payload.bankId;
              // item.bankCities = action.payload.BankCitiesArray;
              item.bankStates = action.payload.BankStates;
              item.stateId = '';
              item.ifsc = '';
              item.BankBranchId = '';
              item.cityId = ''
            }
            // i === action.payload.index ? item.bankName = action.payload.BankName
            //   : item
          }
          ),
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            BankDetails: ''
          }
        }
      }

    case GET_BANK_STATES_FAIL_IN_ORG:

      return {
        ...state
      }



    case GET_BANK_CITIES_SUCCESS_IN_ORG:
      // if(state.OrganizationDetails.PresentCreatingOrgType == "AdminRetailer"){
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) => {
            if (i === parseInt(action.payload.index)) {
              item.stateId = action.payload.StateId;
              item.bankCities = action.payload.BankCities;
              item.bankBranches = [];
              item.cityId = '';
              item.ifsc = '';
              item.BankBranchId = '';

            }
            // i === action.payload.index ? item.bankName = action.payload.BankName
            //   : item
          }
          ),
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            BankDetails: ''
          }
        }
      }



    case GET_BANK_CITIES_FAIL_IN_ORG:
      return {
        ...state
      }

    case GET_BANK_BRANCHES_SUCCESS_IN_ORG:
      // if(state.OrganizationDetails.PresentCreatingOrgType == "AdminRetailer"){
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) => {
            if (i === parseInt(action.payload.index)) {
              item.cityId = action.payload.cityId;
              item.bankBranches = action.payload.BankBranches;
              item.cityhasNoBranches = action.payload.BankBranches.length === 0 ? true : false;
              item.ifsc = '';
              item.BankBranchId = '';
            }
            // i === action.payload.index ? item.bankName = action.payload.BankName
            //   : item
          }
            // ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) =>
            //   i === action.payload.index ? item.City = action.payload.cityName
            //     : item
          ),
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            BankDetails: ''
          }
        }
      }



    case GET_BRANCH_IFSC_SUCCESS_IN_ORG:
      // if(state.OrganizationDetails.PresentCreatingOrgType == "AdminRetailer"){
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) => {
            if (i === parseInt(action.payload.index)) {
              item.ifsc = action.payload.IFSCdetails.ifsc;
              item.BankBranchId = action.payload.branchId;
            }
            // i === action.payload.index ? item.bankName = action.payload.BankName
            //   : item
          }


            // ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) =>
            //   i === action.payload.index ? item.City = action.payload.cityName
            //     : item
          ),
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            BankDetails: ''
          }
        }
      }




    case PROCEED_TO_ADD_NEW_ORG:
      // if(state.OrganizationDetails.PresentCreatingOrgType == "AdminRetailer"){
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgNavigations: {
            ...state.OrganizationDetails.OrgNavigations,
            AddNewOrg: action.payload
          },
        }
      }



    case SET_FILTERED_ORGANIZATION_DATA:
      // if(state.OrganizationDetails.PresentCreatingOrgType == "AdminRetailer"){
      return {
        ...state,
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgList: action.payload,
        }
      }





    case GET_ORG_RETAILERS_LIST_SUCCESS:

      action.payload.Data.organizations.map((item, i) =>
        item.settingsBtn = false
      );

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgList: action.payload.Data.organizations,
          actualOrgList: action.payload.Data.organizations,
          PresentOrgTypeId: action.payload.orgTypeId,
          PresentCreatingOrgType: action.payload.orgTypeName,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditBankComponentFor: false
          }
        }
      }

    case GET_TEMPLATE_OF_ORG_DETAILS_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegisteringOrg: action.payload
        }
      }

    case GET_TEMPLATE_OF_ORG_DETAILS_FAIL:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

        }
      }


    case SAVE_ORG_REGISTRATION_INPUT_DETAILS:
      return SAVE_ORG_REGISTRATION_INPUT(state, action);


    case SAVE_MOBILE_NUMBER:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          mobileNo: action.payload.value,
        }
      }

    case SAVE_NEW_ORG_BANK_DETAILS:
      // if(state.OrganizationDetails.PresentCreatingOrgType == "AdminRetailer"){
      if (action.payload.field === 'HolderName') {

        return {
          ...state, OrganizationDetails: {
            ...state.OrganizationDetails,
            ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) =>
              i === action.payload.i ? item.AccountHolderName = action.payload.value
                : item
            ),
            RegistrationinputWarning: {
              ...state.OrganizationDetails.RegistrationinputWarning,
              BankDetails: ''
            }
          }
        }
      } else if (action.payload.field === 'AccountNo') {
        return {
          ...state, OrganizationDetails: {
            ...state.OrganizationDetails,
            ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) =>
              i === action.payload.i ? item.AccountNo = action.payload.value
                : item
            ),
            RegistrationinputWarning: {
              ...state.OrganizationDetails.RegistrationinputWarning,
              BankDetails: ''
            }
          }
        }
      }
      else if (action.payload.field === 'BankBranchId') {
        return {
          ...state, OrganizationDetails: {
            ...state.OrganizationDetails,
            ...state.OrganizationDetails.NewOrgBankDetails.map((item, i) => {
              if (i === action.payload.i) {
                item.BankBranchId = action.payload.value;
                item.ifsc = action.payload.Ifsc
              }
            }
            ),
            RegistrationinputWarning: {
              ...state.OrganizationDetails.RegistrationinputWarning,
              BankDetails: ''
            }
          }
        }
      }



    case SEND_CREATE_ORGANIZATION_DETAILS_SUCCESS:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          CreatingOrganizationId: action.payload.tenantId,
          formType: action.payload.registrationStage,
          CreatingOrgMobileNo: state.OrganizationDetails.RegisteringOrg.mobileNo,
          enableNextButtonInOrgBasicDetails: true
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false,
        }
      }


    case SEND_CREATE_ORGANIZATION_DETAILS_FAIL:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          FailOnSubmitOrgDetail: true,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: action.payload,
            RegisteringOrgFail: true,
          },

        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false,
        }
      }

    case SAVE_ORG_DOCUMENTS:

      return SaveOrgDocumentPics(state, action)

    case GET_ORG_DOCS_SUCCESS:

      // console.log(" ? ? ? ? ? ?? ? ? ? ? ?  GET_ORG_DOCS_SUCCESS GET_ORG_DOCS_SUCCESS  ");
      // console.log(action.payload);
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgDocuments: {
            ...state.OrganizationDetails.OrgDocuments,
            Aadhar: action.payload.Aadhar,
            pan: action.payload.pan,
            DLicense: action.payload.DLicense,
            voterId: action.payload.voterId,
          },
        }
      }

    case SAVE_ORG_DOCUMENT_WARNINGS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgDocuments: {
            ...state.OrganizationDetails.OrgDocuments,
            Warning: action.payload,

          },
        }
      }


    case UPLOAD_ORG_DOCUMENTS:
      return {
        ...state,
        OrganizationDetails: {
          ...state.OrganizationDetails
        }
      }

    case UPLOAD_ORG_DOCUMENTS_SUCCESS:

      let PresentCreatingOrgType = state.OrganizationDetails.PresentCreatingOrgType;

      // if(PresentCreatingOrgType=="AdminRetailer"){
      return {
        ...state,
        OrganizationDetails: {
          ...state.OrganizationDetails,
          CreatingOrganizationId: action.payload.tenantId,
          formType: action.payload.registrationStage,
          enableNextButtonInOrgDocs: true,

          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            UpdateDocumentsSuccess: true
          },

        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case UPLOAD_ORG_DOCUMENTS_FAIL:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          FailOnSubmitOrgDetail: true,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            // Error: action.payload,
            Error: "",
          },
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case GET_DOCUMENT_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          pictureBase64: action.payload,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            getDocumentSuccessFromURL: true

          },

        }
      }

    case GET_ORG_DOCUMENTS_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            OrgDocsList: [{}],
            OrgDocsList: action.payload,
            getDocumentSuccess: true

          },


        }
      }

    case SEND_ORG_BANK_DETAILS_AT_REGISTRAION:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
        }
      }
    case SEND_ORG_BANK_DETAILS_AT_REGISTRAION_SUCCESS:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          CreatingOrganizationId: action.payload.organizationId,
          formType: action.payload.registrationStage,
          NewOrgBankDetails: [],
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            SuccessOnSubmitOrgDetail: true,
          }
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case SEND_ORG_BANK_DETAILS_AT_REGISTRAION_FAIL:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          // FailOnSubmitOrgDetail: true,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: action.payload,
          },
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }


    case REMOVE_API_SUCCESS_OR_FAILURE_FOOTER_VIEW:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
        },
        UserDetails: {
          ...state.UserDetails,
        }
      }

    case CLEAR_RESPONSE_ON_ORG_APIS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          updateWalletClicked: false,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: '',
            getorgBasicDetailsFail: false,
            ActivateOrInactivateOrgFail: false,
            RegisteringOrgFail: false,
            updateOrgBankFail: false,
            updateOrgStatusSuccess: false,
            OrgCashInSuccess: false,
            UpdateOrgOrUserWallet: false,
            updateOrgBankSuccess: false,
            EditOrgBasicDetailsSuccess: false,
            SuccessOnSubmitOrgDetail: false,
            UpdateDocumentsSuccess: false
          }
        }
      }
    case GET_DISTRIBUTOR_BASIC_DETAILS_TO_EDIT_SUCCESS:
      return {
        ...state,
        OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditingUserData: action.payload.Data,
            EditOrgModal: true,
          },
          PresentCreatingOrgType: action.payload.PresentCreatingOrgType
        }
      }


    case GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_SUCCESS:
      return {
        ...state,
        OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditingUserData: action.payload.Data,
            EditOrgModal: true,
          },
          PresentCreatingOrgType: action.payload.PresentCreatingOrgType
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false,
        }
      }

    case GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_FAIL:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: action.payload,
            getorgBasicDetailsFail: true
          },
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false,
        }
      }



    case ORGANIZATION_EDIT_MODAL:
      // console.log(" in ORGANIZATION_EDIT_MODAL reducer :" + action.payload.editType, action.payload.Distributor);
      return distributorUserEditModal(action, state);

    case ORGANIZATION_EDIT_MODAL_CLOSE:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          updateWalletClicked: false,
          walletUpdateisFor: '',
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            // EditingUserData: {},
            activateClicked: false,
            inactiveClicked: false,
            EditOrgModal: false,
            CashInClicked: false,
          },
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResultsm,
            Error: '',
          }
        }, UserDetails: {
          ...state.UserDetails,
          UserDetailsToEdit: {},
        },

      }

    case ACTIVATE_INACTIVATE_OR_ORGANIZATION:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: '',
            ActivateOrInactivateOrgFail: false,
          },
        }
      }

    case ACTIVATE_INACTIVATE_OR_ORGANIZATION_SUCCESS:
      // console.log("From ACTIVATE_INACTIVATE_OR_ORGANIZATION_SUCCESS Reducer")
      // console.log(action.payload);
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          CreatingOrganizationId: action.payload.organizationId,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditingUserData: {},
            activateClicked: false,
            inactiveClicked: false,
          },
          ...state.OrganizationDetails.OrgList.map((item, i) =>
            item.organizationId === action.payload.organizationId ? item.active = action.payload.status : item
          ),
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            updateOrgStatusSuccess: true,
          },

        },
      }

    case ACTIVATE_INACTIVATE_OR_ORGANIZATION_FAIL:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: action.payload,
            ActivateOrInactivateOrgFail: true,
          },
        }
      }


    case SAVE_CASH_IN_AMOUNT:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          CashInAmount: action.payload
        }
      }


    case CASH_IN_PROCEED_SUCCESS_FOR_ORG_USER:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          CashInAmount: '',
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditingUserData: {},
            activateClicked: false,
            inactiveClicked: false,
            CashInClicked: false,
            TypeOfOrgUserEdit: ''
          },
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            OrgCashInSuccess: true
          }
        }

      }

    case CASH_IN_PROCEED_FAIL_FOR_ORG_USER:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          CashInAmount: '',
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditingUserData: {},
            activateClicked: false,
            inactiveClicked: false,
            TypeOfOrgUserEdit: ''
          }
        }

      }

    case GET_DISTRIBUTOR_BANKS_TO_EDIT_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              Org_BanksList: action.payload.BankList
            },
            EditBankComponentFor: action.payload.EditBankComponentFor,
            EditingUserData: action.payload.item,
            Get_Org_Banks_Success: true,
          }
        }
      }

    case GET_ORAGANIZATION_BANKS_TO_EDIT_SUCCESS:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          PresentCreatingOrgType: action.payload.PresentCreatingOrgType,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              Org_BanksList: action.payload.BankDetails.map((bank, i) => (bank)),
            },
            EditBankComponentFor: action.payload.PresentCreatingOrgType,
            EditingUserData: action.payload.item,
            Get_Org_Banks_Success: true,
          }
        }
      }





    case GET_ORAGANIZATION_BANKS_TO_EDIT_FAIL:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
          }
        }
      }

    case GET_BANK_STATES_ON_EDIT_ORG_BANKS_SUCCESS:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              BankStates: action.payload.States,
              Editing_Org_Bank_Details: {
                ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details,
                organizationBankId: action.payload.bankId
              }
            },
            Get_Org_Banks_Success: false,
          }
        }
      }


    case GET_BANK_CITIES_ON_EDIT_ORG_BANKS_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              BankCities: action.payload.BankCities,
              Editing_Org_Bank_Details: {
                ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details,
                bankStateId: action.payload.StateId
              }
            },
            Get_Org_Banks_Success: false,
          }
        }
      }



    case GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              BankBranches: action.payload.Branches,
              Editing_Org_Bank_Details: {
                ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details,
                bankCityId: action.payload.cityId
              },
            },
          }
        }
      }

    case GET_BANK_IFSC_ON_EDIT_ORG_BANKS_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              Editing_Org_Bank_Details: {
                ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details,
                bankIFSCCode: action.payload.ifsc,
                branchId: action.payload.branchId,
                ifscCode: action.payload.ifsc,



              },
            },
          }
        }
      }

    case GET_BANK_IFSC_ON_EDIT_ORG_BANKS_FAIL:
      return {
        ...state,
      }



    case SAVE_ORG_BANK_TO_EDIT_AND_GET_BANKCITIES_SUCCESS:
      // console.log(" In Reducer  . . . . . . . . . . . . . . .. . . . . . . ");
      // console.log(action.payload);
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              Editing_Org_Bank_Details: action.payload.bankdetails,
              // BankCities: action.payload.BankCitiesArray,
              StateCities: action.payload.StateCitiesArray,
              ShowBankDetailsForm: true,
              AddOrEditBank: 'Edit',
            },
          }
        }
      }

    case SAVE_EDITING_ORG_BASIC_DETAILS:
      return Edit_Org_Basic_Details(state, action);

    case REGEX_WARNING_AT_EDIT_ORG_BASIC_DETAILS:
      return Regex_Warning_at_edit_org_basic_details(state, action);

    case SAVE_EDITING_USER_BASIC_DETAILS:
      return Save_editing_user_basic_details(state, action);

    case SAVE_CREATING_USER_BASIC_DETAILS:
      return Creating_User_Basic_Details(state, action);


    case SAVE_CREATING_OR_EDITING_FSE_DETAILS:
      return Creating_Or_Editing_FSE_Details(state, action);
    case SAVE_CREATING_OR_EDITING_AGENT_DETAILS:
      return Creating_Or_Editing_Agent_Details(state, action);
    case WARNING_AT_CREATE_OR_EDIT_FSE:
      return Warning_For_Create_Or_Edit_FSE(state, action);
    case WARNING_AT_CREATE_OR_EDIT_AGENT:
      return Warning_For_Create_Or_Edit_Agent(state, action);


    case REGEX_WARNING_AT_CREATING_USER_DETAILS:
      return Regex_Warning_at_create_user(state, action);

    case REGEX_WARNING_AT_EDIT_USER_BASIC_DETAILS:
      return Regex_warning_at_edit_user_basic_details(state, action);

    case SAVE_EDITING_ORG_BANK_DETAILS:
      return Save_editing_org_bank_details(state, action);

    case REGEX_WARNINGS_AT_EDIT_ORG_BANK_DETAILS:

      if (action.payload.field === 'accountHolderName') {
        return {
          ...state, OrganizationDetails: {
            ...state.OrganizationDetails,
            EditOrganizationDetails: {
              ...state.OrganizationDetails.EditOrganizationDetails,
              Modifying_Org_Banks: {
                ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
                Regex_at_Editing_Org_Bank_Details: {
                  ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Regex_at_Editing_Org_Bank_Details,
                  accountHolderName: action.payload.value
                }
              }
            }
          }
        }
      } else if (action.payload.field === 'accountNumber') {
        return {
          ...state, OrganizationDetails: {
            ...state.OrganizationDetails,
            EditOrganizationDetails: {
              ...state.OrganizationDetails.EditOrganizationDetails,
              Modifying_Org_Banks: {
                ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
                Regex_at_Editing_Org_Bank_Details: {
                  ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Regex_at_Editing_Org_Bank_Details,
                  accountNumber: action.payload.value
                }
              }
            }
          }
        }
      } else if (action.payload.field === 'AllRegexWarnings') {
        return {
          ...state, OrganizationDetails: {
            ...state.OrganizationDetails,
            EditOrganizationDetails: {
              ...state.OrganizationDetails.EditOrganizationDetails,
              Modifying_Org_Banks: {
                ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
                Regex_at_Editing_Org_Bank_Details: action.payload.value
              }
            }
          }
        }
      }

    case SEND_ORG_BANK_DETAILS_TO_EDIT_SUCCESS:

      // console.log(" In Reduce of  SEND_ORG_BANK_DETAILS_TO_EDIT_SUCCESS");

      return {
        ...state,
        OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              ShowBankDetailsForm: false,
              AddOrEditBank: ''
            }
          },
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: '',
            updateOrgBankSuccess: true
          },
        }
      }

    case SEND_ORG_BANK_DETAILS_TO_ADD_SUCCESS:

      return {
        ...state,
        OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              ShowBankDetailsForm: false,
              AddOrEditBank: ''
            }
          },
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: '',
            updateOrgBankSuccess: true
          },
        }
      }
    case SEND_ORG_BANK_DETAILS_TO_ADD_FAIL:

      return {
        ...state,
      }


    case SEND_ORG_BANK_DETAILS_TO_EDIT_FAIL:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: action.payload,
            updateOrgBankFail: true
          },
        }
      }

    case SEND_EDITTED_ORGANIZATION_DETAILS_SUCCESS:

      return {

        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditOrgModal: false
          },
          OrgApiResults: {
            ...state.OrganizationDetails.EditOrganizationDetails.OrgApiResults,
            EditOrgBasicDetailsSuccess: true
          }
        }
      }

    case SEND_EDITTED_ORGANIZATION_DETAILS_FAIL:


      return {
        ...state, Distributor: {
          ...state.Distributor,
          settingsModalOpen: false,
          settingsType: '',
          TypeOfDistributorUserEdit: ''
        }
      }


    case ADD_NEW_ORG_BANK:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            Modifying_Org_Banks: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
              Editing_Org_Bank_Details: action.payload,
              Regex_at_Editing_Org_Bank_Details: {},
              BankCities: [],
              BankBranches: [],
              ShowBankDetailsForm: true,
              AddOrEditBank: 'Add'
            }
          }
        }
      }




    case SEND_EDITTED_USER_DETAILS:

      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          UserApiResults: {
            ...state.UserDetails.UserApiResults,
            Error: '',
            RegisterUserFail: false,
            updateUserDetailsFail: false
          },
        }

      }

    case SEND_EDITTED_USER_DETAILS_SUCCESS:

      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          EditUserClicked: false,
          usersList: state.UserDetails.usersList.map(
            (User, i) =>
              User.mobileNumber === action.payload.mobileNumber ?
                action.payload : User
          ),
          actualUsersList: state.UserDetails.actualUsersList.map(
            (User, i) =>
              User.mobileNumber === action.payload.mobileNumber ?
                action.payload : User
          ),

          UserApiResults: {
            ...state.UserDetails.UserApiResults,
            EditUserSuccess: true,
          }
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case SEND_EDITTED_USER_DETAILS_FAIL:
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          UserApiResults: {
            ...state.UserDetails.UserApiResults,
            Error: action.payload,
            updateUserDetailsFail: true
          },
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }

      }


    //#endregion




    //#region  Getting Bank Details(bankname,bankstate and branches) From DB

    case GET_ALL_BANKS_FROM_DB_SUCCESS:
      return {
        ...state, allBankDetails: {
          ...state.allBankDetails,
          banks: action.payload

        },
      }

    case GET_ALL_BANKS_FROM_DB_FAIL:
      return {
        ...state, allBankDetails: {
          ...state.allBankDetails
        },
      }

    case GET_STATES_OF_SELECTED_BANK_SUCCESS:

      return {
        ...state, allBankDetails: {
          ...state.allBankDetails,
          states: action.payload
        },
      }

    case GET_STATES_OF_SELECTED_BANK_FAIL:
      return {
        ...state, allBankDetails: {
          ...state.allBankDetails
        },
      }

    case GET_BRANCHES_OF_SELECTED_BANK_AND_STATE_SUCCESS:
      return {
        ...state, allBankDetails: {
          ...state.allBankDetails,
          branches: action.payload
        },
      }

    case GET_BRANCHES_OF_SELECTED_BANK_AND_STATE_FAIL:
      return {
        ...state, allBankDetails: {
          ...state.allBankDetails
        },
      }


    //#endregion



    // #region  Distributor

    case OPEN_OR_CLOSE_MODAL_OF_ADDUSERS:
      return {
        ...state,
        Distributor: {
          ...state.Distributor,
          ModalOfAddUsers: !state.Distributor.ModalOfAddUsers
        }
      }



    case SAVE_CREATE_NEW_USER_INPUT_DETAILS:
      return save_Create_New_User_Input_Details(state, action);



    case ORG_REGISTRATION_INPUT_WARNINGS:
      return org_registration_input_warnings(state, action);

    case CREATE_USER_INPUT_WARNINGS:
      return create_user_input_warnings(state, action);


    // return AddNewRetailerOrDistributor(action, state);





    //#region Retailer

    case RETAILER_USER_SETTINGS_CLICKED:
      // console.log(" .  .  .  .  .  .  .  .  .  .  .  .  /  .  /  .  / In The Reducer Of RETAILER_USER_SETTINGS_CLICKED   ");
      // console.log(action.payload);

      return {
        ...state,
        OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgList: state.OrganizationDetails.OrgList.map(
            (retailer, i) => i === action.payload ? { ...retailer, ...retailer.settingsBtn = !retailer.settingsBtn } : retailer
          ),
        }

      }

    case RETAILER_USER_SETTINGS_CHOSEN:
      return retailerUserSettingsChoosen(action, state);



    //#region Agent


    case GET_ALL_USERS_LIST:

      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,

          usersList: [],
          actualUsersList: [],
        }
      }

    case GET_ALL_USERS_LIST_SUCCESS:

      action.payload.map((item, i) =>
        item.settingsBtn = false
      );

      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,
          usersList: action.payload,
          actualUsersList: action.payload,

        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case GET_ALL_USERS_LIST_FAIL:

      return {
        ...state, UserDetails: {
          ...state.UserDetails,

        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case USER_SETTINGS_BUTTON_CLICKED:
      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,
          usersList: state.UserDetails.usersList.map(
            (UserDetails, i) => i === action.payload ? {
              ...UserDetails,
              ...UserDetails.settingsBtn = !UserDetails.settingsBtn
            } : UserDetails
          ),
        }
      }

    case USER_SETTINGS_OPTION_CHOSEN:
      return UserSettingsChosen(action, state);


    case CLOSE_USER_SETTINGS_MODAL:
      // console.log("From CLOSE_agent_SETTINGS_MODAL");
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          CreateUserDataWarning: {},
          AddUserClicked: false,
          EditUserClicked: false,
          activateClicked: false,
          inactiveClicked: false,
        }
      }

    case UPDATE_AGENTS_SUCCESS:
      return agentUserUpdate(action, state);

    case UPDATE_AGENTS_FAIL:
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
        }
      }

    case ADD_NEW_USER_SUCCESS:
      action.payload.Data.pictureBase64 = action.payload.Data.picture;
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          usersList: [...state.UserDetails.usersList, action.payload.Data],
          actualUsersList: [...state.UserDetails.usersList, action.payload.Data],
          AddUserClicked: false,
          // AddNewUserSuccess: true
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case ADD_NEW_USER_FAIL:
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          UserApiResults: {
            ...state.UserDetails.UserApiResults,
            Error: action.payload,
            RegisterUserFail: true
          },
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case CLEAR_RESPONSE_OF_USER_APIS:
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          UserApiResults: {
            ...state.UserDetails.UserApiResults,
            Error: '',
            RegisterUserFail: false,
            ActivateOrInactivateFail: false,
            EditUserSuccess: false,
            UserStatusChangedSuccess: false
          },
        }
      }

    case SAVE_WALLET_BALANCE_TO_UPDATE:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          WalletBalanceToAdd: action.payload,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            Error: ''
          }
        }

      }

    case ADD_FUNDS_TO_ORG_WALLET:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            UpdateWalletFail: false,
            Error: ''
          }
        }

      }
    case ADD_FUNDS_TO_ORG_WALLET_SUCCESS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          WalletBalanceToAdd: '',
          updateWalletClicked: false,

          actualOrgList: state.OrganizationDetails.actualOrgList.map(
            (item, i) =>
              item.tenantId === action.payload.OrgId ?
                { ...item, walletBalance: parseInt(item.walletBalance) + parseInt(action.payload.WalletBal) } : item
            //  item.walletBalance = parseInt(item.walletBalance)+parseInt(action.payload.WalletBal) : item
          ),
          OrgList: state.OrganizationDetails.OrgList.map(
            (item, i) =>
              item.tenantId === action.payload.OrgId ?
                { ...item, walletBalance: parseInt(item.walletBalance) + parseInt(action.payload.WalletBal) } : item
            //  item.walletBalance = parseInt(item.walletBalance)+parseInt(action.payload.WalletBal) : item
          ),

          // OrgList: state.OrganizationDetails.actualOrgList,

          walletUpdateisFor: '',
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditingUserData: {},
          },
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            UpdateOrgOrUserWallet: true
          }

        },
        UserDetails: {
          ...state.UserDetails,
          UserDetailsToEdit: {},
        }
      }
    case ADD_FUNDS_TO_ORG_WALLET_FAIL:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          WalletBalanceToAdd: '',
          OrgApiResults: {
            UpdateWalletFail: true,
            Error: action.payload
          }

        }
      }

    case ADD_FUNDS_TO_USER_WALLET:

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            UpdateWalletFail: false,
            Error: ''
          }
        }
      }
    case ADD_FUNDS_TO_USER_WALLET_SUCCESS:

      // console.log("In reduce r: , , , , ,,  ,,  , ");
      // console.log(action.payload);

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          WalletBalanceToAdd: '',
          updateWalletClicked: false,
          walletUpdateisFor: '',
          EditOrganizationDetails: {
            ...state.OrganizationDetails.EditOrganizationDetails,
            EditingUserData: {},
          },
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            UpdateOrgOrUserWallet: true
          }
        },
        UserDetails: {
          ...state.UserDetails,
          usersList: state.UserDetails.usersList.map(
            (User, i) =>
              User.userId == action.payload.userId ?
                { ...User, walletBalance: parseInt(User.walletBalance) + parseInt(action.payload.Amount) } : User
          ),

          actualUsersList: state.UserDetails.actualUsersList.map(
            (User, i) =>
              User.userId == action.payload.userId ?
                { ...User, walletBalance: parseInt(User.walletBalance) + parseInt(action.payload.Amount) } : User
          ),
          // actualUsersList: state.UserDetails.usersList,
          UserDetailsToEdit: {},
        }
      }

    case ADD_FUNDS_TO_USER_WALLET_FAIL:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          WalletBalanceToAdd: '',
          OrgApiResults: {
            UpdateWalletFail: true,
            Error: action.payload
          }

        }
      }

    case OPEN_ADD_USER_MODEL_SUCCESS:
      return {

        ...state, UserDetails: {
          ...state.UserDetails,
          CreateUser: action.payload.CreateUser,
          AddUserClicked: true,
          EditUserClicked: false,
          activateClicked: false,
          inactiveClicked: false,
          UserDetailsToEdit: {},
          EditingUserType: action.payload.EditingUserType
        }
      }

    case OPEN_ADD_USER_MODEL_FAIL:
      return {
        ...state,
      }

    case STORE_FILTERED_USERS_LIST:
      // console.log("In STORE_FILTERED_USERS_LIST filtered userList");
      // console.log(action.payload);
      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,
          usersList: action.payload,
        }
      }



    case ACTIVATE_OR_INACTIVATE_USER:
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          UserApiResults: {
            ...state.UserDetails.UserApiResults,
            Error: '',
            ActivateOrInactivateFail: false
          }
        }
      }

    case ACTIVATE_OR_INACTIVATE_USER_SUCCESS:
      return {
        ...state,
        UserDetails: {
          ...state.UserDetails,
          usersList: state.UserDetails.usersList.map(
            (User, i) =>
              User.mobileNumber === action.payload.mobileNumber ?
                action.payload : User
          ),
          actualUsersList: state.UserDetails.actualUsersList.map(
            (User, i) =>
              User.mobileNumber === action.payload.mobileNumber ?
                action.payload : User
          ),
          activateClicked: false,
          inactiveClicked: false,
          UserApiResults: {
            ...state.UserDetails.UserApiResults,
            UserStatusChangedSuccess: true,
          }
        }
      }

    case ACTIVATE_OR_INACTIVATE_USER_FAIL:
      return {
        ...state, UserDetails: {
          ...state.UserDetails,
          UserApiResults: {
            ...state.UserDetails.UserApiResults,
            Error: action.payload,
            ActivateOrInactivateFail: true
          },
        }
      }//#endregion

    case SAVE_ORG_BASIC_DETAILS:
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          formType: action.payload.formType,
        }
      }

      return AddOrEditAdminSupportUserDetails(action, state);

    //#endregion
    case GET_UN_APPROVED_DISTRIBUTOR_LIST_SUCCESS:

      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          List: action.payload,
          ApiResults: {
            ...state.NewlyAddedOrg.ApiResults,
            GetUnapprovedListSuccess: true
          }
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }
    case GET_UN_APPROVED_DISTRIBUTOR_LIST_FAIL:
      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          ApiResults: {
            ...state.NewlyAddedOrg.ApiResults,
            Error: ''
          }
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }


    case GET_UN_APPROVED_ORG_LIST:
      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          ApiResults: {
            ...state.NewlyAddedOrg.ApiResults,
            GetUnapprovedListSuccess: false,
            approveOrgSuccess: false,
          }
        }
      }



    case GET_UN_APPROVED_ORG_LIST_SUCCESS:

      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          List: action.payload,
          ApiResults: {
            ...state.NewlyAddedOrg.ApiResults,
            GetUnapprovedListSuccess: true
          }
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case GET_UN_APPROVED_ORG_LIST_FAIL:
      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          ApiResults: {
            ...state.NewlyAddedOrg.ApiResults,
            Error: ''
          }
        },
        ProgressIndicator: {
          ...state.ProgressIndicator,
          InProgress: false
        }
      }

    case APPROVE_ORGANIZATION:

      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          ApiResults: {
            ...state.NewlyAddedOrg.ApiResults,
            approveOrgSuccess: false
          }
        }
      }
    case APPROVE_ORGANIZATION_SUCCESS:
      return {
        ...state,
        NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          List: state.NewlyAddedOrg.List.filter(function (user, i) {
            return user.tenantIdentifier != action.payload.OrgId
          }),
          ApiResults: {
            ...state.NewlyAddedOrg.ApiResults,
            approveOrgSuccess: true,
            message: action.payload.Msg
          }
        },
        OrganizationDetails: {
          ...state.OrganizationDetails,

          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            RateCardId: "",
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            RateCardId: ''
          }
        }
      }
    case OPEN_REJECT_ORG_MODAL:
      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          openUserRejectModal: true,
          RejectingUserDetails: action.payload,
          ApiResults: {
            ...state.NewlyAddedOrg.ApiResults,
            approveOrgSuccess: false
          }
        }
      }

    case CLOSE_REJECT_ORG_MODAL:
      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          openUserRejectModal: false,
          RejectingUserDetails: {}

        }
      }

    case SAVE_REJECT_ORG_REASON:
      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          UserRejectReason: action.payload

        }
      }

    case REJECT_NEW_ORG_SUCCESS:
      return {
        ...state, NewlyAddedOrg: {
          ...state.NewlyAddedOrg,
          UserRejectReason: '',
          openUserRejectModal: false,
          RejectingUserDetails: {}

        }
      }


    case GET_REJECTED_USERS_SUCCESS:
      return {
        ...state, RejectedUsers: {
          ...state.RejectedUsers,
          RejectedUserList: action.payload,
          ApiResults: {
            ...state.RejectedUsers.ApiResults,
            getRejectedUsersSuccess: true
          }
        },
      }

    default:
      return {
        ...state,
      }
  }
};


function SaveOrgDocumentPics(state, action) {

  let PresentCreatingOrgType = state.OrganizationDetails.PresentCreatingOrgType;


  if (action.payload.field === 'Aadhar') {

    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        OrgDocuments: {
          ...state.OrganizationDetails.OrgDocuments,
          Aadhar: action.payload.value,
          Warning: ''
        },
      }
    }
  } else if (action.payload.field === 'PanCard') {

    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        OrgDocuments: {
          ...state.OrganizationDetails.OrgDocuments,
          pan: action.payload.value,
          Warning: ''
        },

      }
    }
  } else if (action.payload.field === 'VoterId') {

    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        OrgDocuments: {
          ...state.OrganizationDetails.OrgDocuments,
          voterId: action.payload.value,
          Warning: ''
        },

      }
    }
  } else if (action.payload.field === 'DLicense') {

    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        OrgDocuments: {
          ...state.OrganizationDetails.OrgDocuments,
          DLicense: action.payload.value,
          Warning: ''
        },
      }
    }
  } else if (action.payload.field === 'disableSubmit') {

    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        OrgDocuments: {
          ...state.OrganizationDetails.OrgDocuments,
          disableSubmit: action.payload.value,
        },
      }
    }
  }
}
function distributorUserEditModal(action, state) {

  // Is From DIstributor Component

  if (action.payload.editType === 'Activate') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: action.payload.OrgData,
          activateClicked: true
        }
      },
    }
  }
  else if (action.payload.editType === 'Inactivate') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: action.payload.OrgData,
          inactiveClicked: true
        }
      },
    }
  } else if (action.payload.editType === 'editUser') {

    return {
      ...state,
      Distributor: {
        ...state.Distributor,
        EditBasicDetails: {
          ...state.Distributor.EditBasicDetails,
          id: action.payload.Distributor.id,
          fullName: action.payload.Distributor.fullName,
          mobileNo: action.payload.Distributor.mobileNo,
          businessName: action.payload.Distributor.businessName,
          emailId: action.payload.Distributor.emailId,
          address: action.payload.Distributor.address,
          isActive: action.payload.Distributor.isActive,
          bank: action.payload.Distributor.bank,
          profilePicBase64: '',
          commissionModel: action.payload.Distributor.commissionModel,
          creditEligible: action.payload.Distributor.creditEligible,
          cLimit: action.payload.Distributor.cLimit,
          incentives: '',
          settingsBtn: null
        },
        TypeOfOrgUserEdit: action.payload.editType
      }
    }
  } else if (action.payload.editType === 'CashIn') {

    return {
      ...state,
      OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: action.payload.OrgData,
          CashInClicked: true
        }
      },

    }
  } else if (action.payload.editType === 'UpdateWallet') {

    return {
      ...state,
      OrganizationDetails: {
        ...state.OrganizationDetails,
        updateWalletClicked: true,
        walletUpdateisFor: 'Org',
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: action.payload.OrgData,
        }
      },

    }
  } else if (action.payload.editType === 'UpdateDocuments') {
    return {
      ...state,
      OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: action.payload.OrgData,
        }
      },
    }
  }

}

function retailerUserSettingsChoosen(action, state) {

  if (action.payload.SelectedSettingOption === 'Add/Edit Bank') {

    return {
      ...state,
      Distributor: {
        ...state.Distributor,
        EditBasicDetails: {
          ...state.Distributor.EditBasicDetails,
          id: action.payload.retailer.id,
          fullName: action.payload.retailer.fullName,
          mobileNo: action.payload.retailer.mobileNo,
          businessName: action.payload.retailer.businessName,
          emailId: action.payload.retailer.emailId,
          address: action.payload.retailer.address,
          isActive: action.payload.retailer.isActive,
          bank: action.payload.retailer.bank,
          settingsBtn: null
        },
      },
      AdminRetailers: {
        ...state.AdminRetailers,
        EditBankComponentFor: 'Retailer'
      }
    }
  }
  else if (action.payload.SelectedSettingOption === 'CashIn') {
    return {
      ...state, userNameToCashIn: action.payload.retailer.fullName,
      userNumberToCashIn: action.payload.retailer.mobileNo,
    }
  }

  else if (action.payload.SelectedSettingOption === 'Edit Retailer') {
    return {
      ...state,
    }
  }

  else if (action.payload.SelectedSettingOption === 'Inactive') {
    return {
      ...state,
    }
  }
  else if (action.payload.SelectedSettingOption === 'Activate') {
    return {
      ...state,
    }
  }
}
function agentUserUpdate(action, state) {
  return {
    ...state, UserDetails: {
      ...state.UserDetails,
      usersList: state.UserDetails.usersList.map(
        (UserDetails, i) => UserDetails.id === action.payload.id ? { ...UserDetails, ...action.payload } : UserDetails
      ),
      actualUsersList: state.UserDetails.usersList.map(
        (UserDetails, i) => UserDetails.id === action.payload.id ? { ...UserDetails, ...action.payload } : UserDetails
      ),
      AddUserClicked: false,
      EditUserClicked: true,
      settingsBtn: null,

    }
  }
}

function UserSettingsChosen(action, state) {

  if (action.payload.SelectedSettingOption === 'Edit') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        EditUserClicked: true,
        EditingUserType: action.payload.EditingUserType,
        UserDetailsToEdit: action.payload.User,

      }
    }
  } else if (action.payload.SelectedSettingOption === 'Inactivate') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: action.payload.User,
        inactiveClicked: true,
      }
    }
  } else if (action.payload.SelectedSettingOption === 'Activate') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: action.payload.User,
        activateClicked: true,
      }
    }
  } else if (action.payload.SelectedSettingOption === 'Update Wallet') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: action.payload.User,
      },
      OrganizationDetails: {
        ...state.OrganizationDetails,
        walletUpdateisFor: 'User',
        updateWalletClicked: true,
      }
    }
  }

}

function Edit_Org_Basic_Details(state, action) {
  if (action.payload.field === 'name') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            name: action.payload.value
          },
          EditUserDataWarning: {
            name: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'mobileNo') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            mobileNo: action.payload.value
          },
          EditUserDataWarning: {
            mobileNo: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'businessName') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            businessName: action.payload.value
          },
          EditUserDataWarning: {
            businessName: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'emailId') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            emailId: action.payload.value
          },
          EditUserDataWarning: {
            emailId: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'addressLine1') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            address: {
              ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData.address,
              addressLine1: action.payload.value
            }
          },
          EditUserDataWarning: {
            addressLine1: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'addressLine2') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            address: {
              ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData.address,
              addressLine2: action.payload.value
            }
          },
          EditUserDataWarning: {
            addressLine2: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'pinCode') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            address: {
              ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData.address,
              pinCode: action.payload.value
            }
          },
          EditUserDataWarning: {
            pinCode: ''
          }
        },
      }
    }
  }
  else if (action.payload.field === 'cityId') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            address: {
              ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData.address,
              cityId: action.payload.value
            }
          },
          EditUserDataWarning: {
            cityId: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'profilePicture') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            profilePicture: action.payload.value

          },
          EditUserDataWarning: {
            profilePicture: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'creditEligible') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            creditEligible: action.payload.value

          },
          EditUserDataWarning: {
            creditEligible: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'creditLimit') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            creditLimit: action.payload.value

          },
          EditUserDataWarning: {
            creditLimit: ''
          }
        },
      }
    }
  }
  else if (action.payload.field === 'elegibleForIncentives') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            elegibleForIncentives: action.payload.value

          },
          EditUserDataWarning: {
            elegibleForIncentives: ''
          }
        },
      }
    }
  } else if (action.payload.field === 'rateCardId') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditingUserData: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditingUserData,
            rateCardId: action.payload.value

          },
          EditUserDataWarning: {
            rateCardId: ''
          }
        },
      }
    }
  }
}



function Regex_Warning_at_edit_org_basic_details(state, action) {

  // console.log(" IN Reducer /  /  /  /  /  /  /  /  /  /  /  ");
  // console.log(action.payload);

  if (action.payload.field === 'name') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditUserDataWarning: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditUserDataWarning,
            name: action.payload.value
          }
        }
      }
    }
  }
  else if (action.payload.field === 'mobileNo') {
    return {

      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditUserDataWarning: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditUserDataWarning,
            mobileNo: action.payload.value
          }
        }
      }
    }
  } else if (action.payload.field === 'emailId') {
    return {

      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditUserDataWarning: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditUserDataWarning,
            emailId: action.payload.value
          }
        }
      }
    }
  }
  else if (action.payload.field === 'profilePicture') {
    return {

      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditUserDataWarning: {
            ...state.OrganizationDetails.EditOrganizationDetails.EditUserDataWarning,
            profilePicture: action.payload.value
          }
        }
      }
    }
  } else if (action.payload.field === 'AllErrorsAfterValidation') {
    return {

      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          EditUserDataWarning: action.payload.value
        }
      }
    }
  }
}


//Agent Edit Modal
function Save_editing_user_basic_details(state, action) {

  if (action.payload.field === 'fullName') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: {
          ...state.UserDetails.UserDetailsToEdit,
          fullName: action.payload.value,
        },
        UserDataEditWarning: {
          fullName: ''
        },

      }
    }
  }

  else if (action.payload.field === 'mobileNumber') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: {
          ...state.UserDetails.UserDetailsToEdit,
          mobileNumber: action.payload.value,
        },
        UserDataEditWarning: {
          mobileNumber: ''
        },

      }
    }
  }
  else if (action.payload.field === 'emailId') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: {
          ...state.UserDetails.UserDetailsToEdit,
          emailId: action.payload.value,
        },
        UserDataEditWarning: {
          emailId: ''
        },

      }
    }
  }
  else if (action.payload.field === 'addressLine1') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: {
          ...state.UserDetails.UserDetailsToEdit,
          addressLine1: action.payload.value,
        },
        UserDataEditWarning: {
          addressLine1: ''
        },

      }
    }
  }
  else if (action.payload.field === 'addressLine2') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: {
          ...state.UserDetails.UserDetailsToEdit,
          addressLine2: action.payload.value,
        },
        UserDataEditWarning: {
          addressLine2: ''
        },

      }
    }
  } else if (action.payload.field === 'profilePicture') {

    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDetailsToEdit: {
          ...state.UserDetails.UserDetailsToEdit,
          profilePicture: action.payload.value,
          pictureBase64: action.payload.value,
        },
        UserDataEditWarning: {
          profilePicture: ''
        },

      }
    }
  }

}

//Agent Edit Modal warning 
function Regex_Warning_at_create_user(state, action) {

  if (action.payload.field === 'fullName') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUserDataWarning: {
          ...state.UserDetails.CreateUser.CreateUserDataWarning,
          fullName: action.payload.value
        }
      }
    }
  } else if (action.payload.field === 'emailId') {
    return {

      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUserDataWarning: {
          ...state.UserDetails.CreateUser.CreateUserDataWarning,
          emailId: action.payload.value
        }
      }
    }
  } else if (action.payload.field === 'mobileNo') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUserDataWarning: {
          ...state.UserDetails.CreateUser.CreateUserDataWarning,
          mobileNo: action.payload.value
        }
      }
    }
  }
  else if (action.payload.field === 'addressLine1') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,

        CreateUserDataWarning: {
          ...state.UserDetails.CreateUser.CreateUserDataWarning,
          addressLine1: action.payload.value
        }
      }
    }
  }
  else if (action.payload.field === 'addressLine2') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUserDataWarning: {
          ...state.UserDetails.CreateUser.CreateUserDataWarning,
          addressLine2: action.payload.value
        }
      }
    }
  }
  else if (action.payload.field === 'pinCode') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUserDataWarning: {
          ...state.UserDetails.CreateUser.CreateUserDataWarning,
          pinCode: action.payload.value
        }
      }
    }
  }
  else if (action.payload.field === 'picture') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUserDataWarning: {
          ...state.UserDetails.CreateUser.CreateUserDataWarning,
          picture: action.payload.value
        }
      }
    }
  } else if (action.payload.field === 'AllErrorsAfterValidation') {
    return {

      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUserDataWarning: action.payload.value
      }
    }
  }
}


function Creating_User_Basic_Details(state, action) {
  // console.log("In reducer Values are")
  // console.log(action.payload.field + " : " + action.payload.value)
  if (action.payload.field === 'fullName') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          fullName: action.payload.value,
        },
        CreateUserDataWarning: {
          fullName: ''
        },

        UserApiResults: {
          ...state.UserDetails.UserApiResults,
          Error: '',
          RegisterUserFail: false,
        },
      }
    }
  }

  else if (action.payload.field === 'mobileNo') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          mobileNo: action.payload.value,

        },
        CreateUserDataWarning: {
          mobileNo: ''
        },
        UserApiResults: {
          ...state.UserDetails.UserApiResults,
          Error: '',
          RegisterUserFail: false
        },

      }
    }
  }
  else if (action.payload.field === 'emailId') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          emailId: action.payload.value,
        },
        CreateUserDataWarning: {
          emailId: ''
        },
        UserApiResults: {
          ...state.UserDetails.UserApiResults,
          Error: '',
          RegisterUserFail: false
        },

      }
    }
  } else if (action.payload.field === 'RolePerms') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          RolePermName: action.payload.value,
        },
        UserApiResults: {
          ...state.UserDetails.UserApiResults,
          Error: '',
          RegisterUserFail: false
        },

      }
    }
  }
  else if (action.payload.field === 'addressLine1') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          addressDetails: {
            ...state.UserDetails.CreateUser.addressDetails,
            addressLine1: action.payload.value
          },
        },
        CreateUserDataWarning: {
          addressLine1: ''
        }

      }
    }
  }
  else if (action.payload.field === 'addressLine2') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          addressDetails: {
            ...state.UserDetails.CreateUser.addressDetails,
            addressLine2: action.payload.value
          },
        },
        CreateUserDataWarning: {
          addressLine2: ''
        }

      }
    }
  } else if (action.payload.field === 'pinCode') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          addressDetails: {
            ...state.UserDetails.CreateUser.addressDetails,
            pinCode: action.payload.value
          },
        },
        CreateUserDataWarning: {
          pinCode: ''
        }
      }
    }
  } else if (action.payload.field === 'picture') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          picture: action.payload.value
        },
        CreateUserDataWarning: {
          picture: ''
        }
      }
    }
  } else if (action.payload.field === 'cityId') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        CreateUser: {
          ...state.UserDetails.CreateUser,
          addressDetails: {
            ...state.UserDetails.CreateUser.addressDetails,
            cityId: action.payload.value
          },
        },
      }
    }
  }

}



function Regex_warning_at_edit_user_basic_details(state, action) {

  if (action.payload.field === 'fullName') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDataEditWarning: {
          ...state.UserDetails.UserDataEditWarning,
          fullName: action.payload.value
        }
      }
    }
  }
  else if (action.payload.field === 'mobileNo') {
    return {

      ...state, UserDetails: {
        ...state.UserDetails,
        UserDataEditWarning: {
          ...state.UserDetails.UserDataEditWarning,
          mobileNumber: action.payload.value
        }
      }

    }
  }
  else if (action.payload.field === 'emailId') {
    return {
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDataEditWarning: {
          ...state.UserDetails.UserDataEditWarning,
          emailId: action.payload.value
        }
      }

    }
  }
  else if (action.payload.field === 'addressLine1') {
    return {

      ...state, UserDetails: {
        ...state.UserDetails,
        UserDataEditWarning: {
          ...state.UserDetails.UserDataEditWarning,
          addressLine1: action.payload.value
        }
      }

    }
  }
  else if (action.payload.field === 'addressLine2') {
    return {

      ...state, UserDetails: {
        ...state.UserDetails,
        UserDataEditWarning: {
          ...state.UserDetails.UserDataEditWarning,
          addressLine2: action.payload.value
        }
      }

    }
  }

  else if (action.payload.field === 'profilePicture') {
    return {

      ...state, UserDetails: {
        ...state.UserDetails,
        UserDataEditWarning: {
          ...state.UserDetails.UserDataEditWarning,
          profilePicture: action.payload.value
        }
      }

    }
  } else if (action.payload.field === 'AllErrorsAfterValidation') {
    return {
      ...state,
      ...state, UserDetails: {
        ...state.UserDetails,
        UserDataEditWarning: action.payload.value,

      }
    }
  }

}

function Save_editing_org_bank_details(state, action) {


  // console.log(" IN Reducer Out SIde Of The  Condition Enterd ");
  // console.log(action.payload);

  if (action.payload.field === 'accountHolderName') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          Modifying_Org_Banks: {
            ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
            Editing_Org_Bank_Details: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details,
              accountHolderName: action.payload.value
            },
            Regex_at_Editing_Org_Bank_Details: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Regex_at_Editing_Org_Bank_Details,
              accountHolderName: ''
            }
          }
        }
      }
    }

  } else if (action.payload.field === 'accountNumber') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          Modifying_Org_Banks: {
            ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
            Editing_Org_Bank_Details: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details,
              accountNumber: action.payload.value
            },
            Regex_at_Editing_Org_Bank_Details: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Regex_at_Editing_Org_Bank_Details,
              accountNumber: ''
            }
          }
        }
      }
    }

  } else if (action.payload.field === 'bankStateName') {
    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          Modifying_Org_Banks: {
            ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
            StateCities: action.payload.StateCitiesOrIfsc,
            Editing_Org_Bank_Details: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details,
              bankStateName: action.payload.value,
              bankCityId: '',
              bankBranchName: '',
              branchId: '',
              bankIFSCCode: ''
            },
            Regex_at_Editing_Org_Bank_Details: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Regex_at_Editing_Org_Bank_Details,
              bankStateName: ''
            }
          }
        }
      }
    }
  } else if (action.payload.field === 'BranchIdAndfIfsc') {

    // console.log(" IN Reducer Condition Enterd ");
    // console.log(action.payload);

    return {
      ...state, OrganizationDetails: {
        ...state.OrganizationDetails,
        EditOrganizationDetails: {
          ...state.OrganizationDetails.EditOrganizationDetails,
          Modifying_Org_Banks: {
            ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks,
            Editing_Org_Bank_Details: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Editing_Org_Bank_Details,
              bankBranchName: action.payload.value,
              branchId: action.payload.value,
              bankIFSCCode: action.payload.StateCitiesOrIfsc
            },
            Regex_at_Editing_Org_Bank_Details: {
              ...state.OrganizationDetails.EditOrganizationDetails.Modifying_Org_Banks.Regex_at_Editing_Org_Bank_Details,
              bankBranchName: ''
            }
          }
        }
      }
    }
  }
}





// this function saves the input data
function SAVE_ORG_REGISTRATION_INPUT(state, action) {

  console.log(" In AdminRetailer ");


  switch (action.payload.field) {

    case 'fullName':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            fullName: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            fullName: ''
          }
        }
      }

    case 'mobileNo':
      return {

        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            mobileNo: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            mobileNo: ''
          }
        }
      }

    case 'businessName':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            businessName: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            businessName: ''
          }
        }
      }
    case 'emailId':
      return {

        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            emailId: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            emailId: ''
          }

        }
      }

    case 'pictureBase64':

      let Image = action.payload.value.split(',');
      let Base64 = Image[1];
      // console.log(Base64);

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            picture: Base64,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            picture: ''
          }
        }
      }

    case 'creditLimit':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            creditLimit: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            creditLimit: ''
          }
        }
      }

    case 'creditEligible':
      return {

        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            creditEligible: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            creditEligible: ''
          }
        }
      }


    case 'commissionModel':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            commissionModel: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            commissionModel: ''
          }
        }
      }

    case 'elegibleForIncentives':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            elegibleForIncentives: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            elegibleForIncentives: ''
          }
        }
      }



    case 'selectedRole':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            selectedRoleId: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            selectedRoleId: ''
          }
        }
      }
    case 'RateCardId':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegisteringOrg: {
            ...state.OrganizationDetails.RegisteringOrg,
            RateCardId: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            RateCardId: ''
          }
        }
      }

    case 'addressLine1':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          OrgAddressIp: {
            ...state.OrganizationDetails.OrgAddressIp,

            addressLine1: action.payload.value,

          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            addressLine1: ''
          }
        }
      }

    case 'addressLine2':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgAddressIp: {
            ...state.OrganizationDetails.OrgAddressIp,
            addressLine2: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            addressLine2: ''
          }
        }
      }

    case 'cityId':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgAddressIp: {
            ...state.OrganizationDetails.OrgAddressIp,
            cityId: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            cityId: ''
          }
        }
      }


    case 'pinCode':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgAddressIp: {
            ...state.OrganizationDetails.OrgAddressIp,
            pinCode: action.payload.value,
          },
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            pinCode: ''
          }
        }
      }

    case 'OrgType':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          PresentCreatingOrgType: action.payload.value
        }
      }
    case 'OpenDoc':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          OrgApiResults: {
            ...state.OrganizationDetails.OrgApiResults,
            OpenDoc: action.payload.value
          }
        }
      }

  }
}




function org_registration_input_warnings(state, action) {


  switch (action.payload.field) {

    case 'fullName':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            fullName: action.payload.value
          }
        }
      }

    case 'mobileNo':
      return {

        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            mobileNo: action.payload.value
          }
        }
      }

    case 'businessName':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            businessName: action.payload.value
          }
        }
      }
    case 'emailId':
      return {

        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            emailId: action.payload.value0
          }

        }
      }

    case 'pictureBase64':

      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            picture: action.payload.value
          }
        }
      }

    case 'creditLimit':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            creditLimit: action.payload.value
          }
        }
      }

    case 'creditEligible':
      return {

        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            creditEligible: action.payload.value
          }
        }
      }


    case 'commissionModel':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            commissionModel: action.payload.value
          }
        }
      }

    case 'elegibleForIncentives':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            elegibleForIncentives: action.payload.value
          }
        }
      }



    case 'selectedRole':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            selectedRoleId: action.payload.value
          }
        }
      }

    case 'addressLine1':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            addressLine1: action.payload.value
          }
        }
      }

    case 'addressLine2':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            addressLine2: action.payload.value
          }
        }
      }

    case 'cityId':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            cityId: action.payload.value
          }
        }
      }


    case 'pinCode':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            pinCode: action.payload.value
          }
        }
      }

    case 'BankDetails':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,

          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            BankDetails: action.payload.value
          }
        }
      }

    case 'RateCardId':
      return {
        ...state, OrganizationDetails: {
          ...state.OrganizationDetails,
          RegistrationinputWarning: {
            ...state.OrganizationDetails.RegistrationinputWarning,
            RateCardId: action.payload.value
          }
        }
      }

  }
}


// this function saves the input data
function save_Create_New_User_Input_Details(state, action) {

  switch (action.payload.field) {

    case 'fullName':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          fullName: action.payload.value,
          inputWarning: {
            fullName: ''
          }
        }
      }

    case 'mobileNo':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          mobileNo: action.payload.value,
          inputWarning: {
            mobileNo: ''
          }
        }
      }

    case 'emailId':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          emailId: action.payload.value,
          inputWarning: {
            emailId: ''
          }
        }
      }



    case 'selectedRole':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          selectedRole: action.payload.value,
          inputWarning: {
            selectedRole: ''
          }
        }
      }


    case 'addressline1':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          address: {
            ...state.CreateUser.address,
            addressline1: action.payload.value
          },
          inputWarning: {
            houseDetails: ''
          }
        }
      }

    case 'addressline2':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          address: {
            ...state.CreateUser.address,
            addressline2: action.payload.value
          },
          inputWarning: {
            street: ''
          }
        }
      }

    case 'pinCode':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          address: {
            ...state.CreateUser.address,
            pinCode: action.payload.value
          },
          inputWarning: {
            pinCode: ''
          }
        }
      }

  }//switch ends 
}// function SAVE_ORG_REGISTRATION_INPUT_DETAILS ends





function create_user_input_warnings(state, action) {

  switch (action.payload.field) {

    case 'fullName':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          inputWarning: {
            fullName: action.payload.value
          }
        }
      }

    case 'mobileNo':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          inputWarning: {
            mobileNo: action.payload.value
          }
        }
      }


    case 'emailId':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          inputWarning: {
            emailId: action.payload.value
          }
        }
      }


    case 'addressline1':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          inputWarning: {
            addressline1: action.payload.value
          }
        }
      }

    case 'addressline2':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          inputWarning: {
            addressline2: action.payload.value
          }
        }
      }

    case 'pinCode':
      return {
        ...state, CreateUser: {
          ...state.CreateUser,
          inputWarning: {
            pinCode: action.payload.value
          }
        }
      }
  }//switch ends  
}//function ends

export function CheckOrUnCheckRoleModules(Module, action) {

  return Module.permissions.map((item) => item.id === action.payload.item.id ? { ...item, check: action.payload.checkValue } : item
  )
}

function Combine_2_Role_Permissions(template, payload) {
  let SelectedPerms = []
  payload.map((p_Module, i) => {

    p_Module.permissions.map((p_permissions, i) => {

      template.map((Temp_module, i) => {

        if (Temp_module.moduleName == p_Module.moduleName) {

          Temp_module.permissions.map((Temp_permissions, i) => {
            if (p_permissions.id == Temp_permissions.id) {
              Temp_permissions.check = true;
              SelectedPerms = [...SelectedPerms, p_permissions.id]
            }
          })              //    Temp_module.permissions.map Ends
        }
      })                 //    Temp_module.permissions.map Ends
    })                   //     template.map((Temp_module, i)  Ends 
  })                     //   p_Module.permissions.map  Ends 


  return { SelectedPerms, template }
}