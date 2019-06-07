
// export const GET_ALL_USERS = 'get_all_users';
// export const GET_ALL_USERS_SUCCESS = 'get_all_users_success';
// export const GET_ALL_USERS_ERROR = 'get_all_users_error';

export const SAVE_PROGRESS_INDICATOR_STATUS = 'save_progress_indicator_status';
export const SAVE_PROGRESS_INDICATOR_STATUS_FALSE = 'save_progress_indicator_status_false';


export const RESET_EDIT_ORG_BANK_FORM = 'reset_edit_org_bank_form';
export const RESET_ORG = 'reset_org';

export const RESET = 'reset';
//#region ROLE Related Types.
export const GET_ALL_ROLES = 'get_all_roles';
export const GET_ALL_ROLES_AND_PERMISSIONS_SUCCESS = 'get_all_roles_and_permissions_success';
export const GET_ALL_ROLES_AND_PERMISSIONS_FAIL = 'get_all_roles_and_permissions_fail';
export const GET_ROLES_AND_PERMISSIONS_TEMPLATE_SUCCESS = 'get_roles_and_permissions_template_success';
export const GET_ROLES_AND_PERMISSIONS_TEMPLATE_FAIL = 'get_roles_and_permissions_template_fail';

export const GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_SUCCESS = 'get_role_permissions_to_edit_on_id_success';
export const GET_ROLE_PERMISSIONS_TO_EDIT_ON_ID_FAIL = 'get_role_permissions_to_edit_on_id_fail';



//#endregion



//#region Organization (Retailer And Distributors) Related Types.

export const GET_DISTRIBUTOR_LIST = 'get_distributor_list';
export const GET_DISTRIBUTOR_LIST_SUCCESS = 'get_distributor_list_success';
export const GET_DISTRIBUTOR_LIST_FAIL = 'get_distributor_list_fail';

export const GET_ORGANIZATIONS_LIST = 'get_organizations_list';
export const GET_ORGANIZATIONS_LIST_SUCCESS = 'get_organizations_list_success';
export const GET_ORGANIZATIONS_LIST_FAIL = 'get_organizations_list_fail';


export const GET_CREATE_ORG_INFO_SUCCESS = 'get_create_org_info_success';
export const GET_CREATE_ORG_INFO_FAIL = 'get_create_org_info_fail';


export const GET_BANK_STATES_SUCCESS_IN_ORG = 'get_bank_states_success_in_org';
export const GET_BANK_STATES_FAIL_IN_ORG = 'get_bank_states_fail_in_org';

export const GET_BANK_CITIES_SUCCESS_IN_ORG = 'get_bank_cities_success_in_org';
export const GET_BANK_CITIES_FAIL_IN_ORG = 'get_bank_cities_fail_in_org';

export const GET_BANK_BRANCHES_SUCCESS_IN_ORG = 'get_bank_branches_success_in_org';
export const GET_BANK_BRANCHES_FAIL_IN_ORG = 'get_bank_branches_fail_in_org';

export const GET_BRANCH_IFSC_SUCCESS_IN_ORG = 'get_branch_ifsc_success_in_org';
export const GET_BRANCH_IFSC_FAIL_IN_ORG = 'get_branch_ifsc_fail_in_org';

export const PROCEED_TO_ADD_NEW_ORG = 'proceed_to_add_new_org';



//#endregion


export const ADD_NEW_ORG_BANK_OPTION_TO_ARRAY = 'add_new_org_bank_option_to_array';

export const GET_ORGANIZATIONS_STORE_INFO_SUCCESS = 'get_organizations_store_info_success';
export const GET_ORGANIZATIONS_STORE_INFO_FAIL = 'get_organizations_store_info_fail';

export const DUPLICATE_PERMISSIONS_ROLE_NAME = 'duplicate_permissions_role_name';
export const ADD_NEW_ROLE_MODULE_SUCCESS = 'add_new_role_module_success';
export const ADD_NEW_ROLE_MODULE_FAIL = 'add_new_role_module_fail';

export const EDIT_ROLE_MODULE_PERMISSIONS = 'edit_role_module_permissions';
export const SAVE_ROLE_NAME = 'SAVE_ROLE_NAME';

export const GET_ROLE_MODULE_TEMPLATE_SUCCESS = 'get_role_module_template_success';
export const GET_ROLE_MODULE_TEMPLATE_FAIL = 'get_role_module_template_fail';

export const GET_BANK_STATES_ON_EDIT_ORG_BANKS_SUCCESS = 'get_bank_states_on_edit_org_banks_success';
export const GET_BANK_STATES_ON_EDIT_ORG_BANKS_FAIL = 'get_bank_states_on_edit_org_banks_fail';

export const GET_BANK_CITIES_ON_EDIT_ORG_BANKS_SUCCESS = 'get_bank_cities_on_edit_org_banks_success';
export const GET_BANK_CITIES_ON_EDIT_ORG_BANKS_FAIL = 'get_bank_cities_on_edit_org_banks_fail';

export const GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_SUCCESS = 'get_bank_branches_on_edit_org_banks_success';
export const GET_BANK_BRANCHES_ON_EDIT_ORG_BANKS_FAIL = 'get_bank_branches_on_edit_org_banks_success';

export const GET_BANK_IFSC_ON_EDIT_ORG_BANKS_SUCCESS = 'get_bank_ifsc_on_edit_org_banks_successl'
export const GET_BANK_IFSC_ON_EDIT_ORG_BANKS_FAIL = 'get_bank_ifsc_on_edit_org_banks_fail'

export const ADD_NEW_ORG_BANK = 'add_new_org_bank'

export const SAVE_EDITING_ORG_BASIC_DETAILS = 'save_editing_org_basic_details';

export const SAVE_EDITING_USER_BASIC_DETAILS = 'save_editing_user_basic_details';
export const SAVE_CREATING_USER_BASIC_DETAILS = 'save_creating_user_basic_details'

export const SAVE_CREATING_OR_EDITING_FSE_DETAILS = 'save_creating_or_editing_fse_details'
export const SAVE_CREATING_OR_EDITING_AGENT_DETAILS = 'save_creating_or_editing_agent_details'
export const WARNING_AT_CREATE_OR_EDIT_FSE = 'warning_at_create_or_edit_fse';
export const WARNING_AT_CREATE_OR_EDIT_AGENT = 'warning_at_create_or_edit_agent';

export const SEND_EDITTED_USER_DETAILS = 'send_editted_user_details';
export const SEND_EDITTED_USER_DETAILS_SUCCESS = 'send_editted_user_details_success';
export const SEND_EDITTED_USER_DETAILS_FAIL = 'send_editted_user_details_fail';


export const REGEX_WARNING_AT_EDIT_ORG_BASIC_DETAILS = 'REGEX_WARNING_AT_EDIT_ORG_BASIC_DETAILS';
export const REGEX_WARNING_AT_EDIT_USER_BASIC_DETAILS = 'regex_warning_at_edit_user_basic_details';
export const REGEX_WARNING_AT_CREATING_USER_DETAILS = 'regex_warning_at_creating_user_details'
export const OPEN_OR_CLOSE_EDIT_ROLE_MODULE_MODAL = 'open_or_close_edit_role_module_modal';

export const EDIT_ROLE_MODAL_SUCCESS = 'edit_role_modal_success'

export const OPEN_OR_CLOSE_DELETE_ROLE_MODAL = 'open_or_close_delete_role_modal';

export const UPDATE_ROLE_PERMISSIONS_SUCCESS = 'update_role_permissions_success';

export const OPEN_OR_CLOSE_MODAL_OF_ADDUSERS = 'open_or_close_modal_of_addusers';

// export const UPDATE_RETAILERS = 'update_retailers';
// export const UPDATE_RETAILERS_SUCCESS = 'update_retailers_success';
// export const UPDATE_RETAILERS_FAIL = 'update_retailers_fail';

// export const SAVE_RETAILERS = 'save_retailers';
// export const SAVE_RETAILERS_SUCCESS = 'save_retailers_success';
// export const SAVE_RETAILERS_FAIL = 'save_retailers_fail';

export const GET_ALL_USERS_LIST = 'get_all_users_list';
export const GET_ALL_USERS_LIST_SUCCESS = 'get_all_users_list_success';
export const GET_ALL_USERS_LIST_FAIL = 'get_all_users_list_fail';

export const UPDATE_AGENTS = 'update_agents';
export const UPDATE_AGENTS_SUCCESS = 'update_agents_success';
export const UPDATE_AGENTS_FAIL = 'update_agents_fail';

export const ADD_NEW_USER = 'add_new_user';
export const ADD_NEW_USER_SUCCESS = 'add_new_user_success';
export const ADD_NEW_USER_FAIL = 'add_new_user_fail';



export const ACTIVATE_INACTIVATE_OR_ORGANIZATION = 'activate_inactivate_or_organization';
export const ACTIVATE_INACTIVATE_OR_ORGANIZATION_SUCCESS = 'activate_inactivate_or_organization_success';
export const ACTIVATE_INACTIVATE_OR_ORGANIZATION_FAIL = 'activate_inactivate_or_organization_fail';

export const DISTRIBUTOR_USER_SETTINGS_CHOSEN = 'distributor_user_settings_chosen';

// export const GET_CUSTOMERS_LIST_SUCCESS = 'get_customers_list_success';

// export const ADD_OR_EDIT_CUSTOMERS_MODAL = 'add_or_edit_customers_modal';
// export const STORE_EDITTED_CUSTOMER_DETAILS_IN_DB_SUCCESS = 'store_editted_customer_details_in_db_success';




export const GET_ORG_RETAILERS_LIST_SUCCESS = 'get_org_retailers_list_success';
export const GET_ORG_RETAILERS_LIST_FAIL = 'get_org_retailers_list_fail';

export const GET_DISTRIBUTOR_BASIC_DETAILS_TO_EDIT_SUCCESS = 'get_distributor_basic_details_to_edit_success';
export const GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_SUCCESS = 'get_oraganization_basic_details_to_edit_success';
export const GET_ORAGANIZATION_BASIC_DETAILS_TO_EDIT_FAIL = 'get_oraganization_basic_details_to_edit_fail';

export const GET_TEMPLATE_OF_ORG_DETAILS_SUCCESS = 'get_template_of_org_details_success';
export const GET_TEMPLATE_OF_ORG_DETAILS_FAIL = 'get_template_of_org_details_fail';

export const SEND_CREATE_ORGANIZATION_DETAILS_SUCCESS = 'send_create_organization_details_success';
export const SEND_CREATE_ORGANIZATION_DETAILS_FAIL = 'send_create_organization_details_fail';



export const UPLOAD_ORG_DOCUMENTS = 'upload_org_documents';
export const UPLOAD_ORG_DOCUMENTS_SUCCESS = 'upload_org_documents_success';
export const UPLOAD_ORG_DOCUMENTS_FAIL = 'upload_org_documents_fail';

export const GET_ORG_DOCUMENTS_SUCCESS = 'get_org_documents_success';
export const GET_DOCUMENT_SUCCESS = 'get_document_success';
export const GET_DOCUMENT_FAIL = 'get_document_fail';
export const SEND_ORG_BANK_DETAILS_AT_REGISTRAION = 'send_org_bank_details_at_registraion';
export const SEND_ORG_BANK_DETAILS_AT_REGISTRAION_SUCCESS = 'send_org_bank_details_at_registraion_success';
export const SEND_ORG_BANK_DETAILS_AT_REGISTRAION_FAIL = 'send_org_bank_details_at_registraion_fail';

export const SAVE_ORG_DOCUMENTS = 'save_org_documents';
export const SAVE_ORG_DOCUMENT_WARNINGS = 'save_org_document_warnings';




export const SEND_EDITTED_ORGANIZATION_DETAILS_FAIL = 'send_editted_organization_details_fail';
export const SEND_EDITTED_ORGANIZATION_DETAILS_SUCCESS = 'SEND_EDITTED_ORGANIZATION_DETAILS_SUCCESS';


export const RETAILER_USER_SETTINGS_CLICKED = 'retailer_user_settings_clicked';
export const RETAILER_USER_SETTINGS_CHOSEN = 'retailer_user_settings_chosen';

export const USER_SETTINGS_BUTTON_CLICKED = 'user_settings_button_clicked';

export const USER_SETTINGS_OPTION_CHOSEN = 'user_settings_option_chosen';
export const GET_ALL_AGENTS_FAIL = 'get_all_agents_fail';
export const CLOSE_USER_SETTINGS_MODAL = 'close_user_settings_modal';
export const OPEN_ADD_USER_MODEL_SUCCESS = 'open_add_user_model_success';

export const OPEN_ADD_USER_MODEL_FAIL = 'open_add_user_model_fail';


export const ORGANIZATION_EDIT_MODAL = 'organization_edit_modal';
export const ORGANIZATION_EDIT_MODAL_CLOSE = 'organization_edit_modal_close';

export const SAVE_ORG_REGISTRATION_INPUT_DETAILS = 'save_org_registration_input_details';
export const SAVE_CREATE_NEW_USER_INPUT_DETAILS = 'save_create_new_user_input_details';
export const CREATE_USER_INPUT_WARNINGS = 'create_user_input_warnings';
export const ORG_REGISTRATION_INPUT_WARNINGS = 'org_registration_input_warnings';

export const ADD_NEW_USER_BANK_OPTION_TO_ARRAY = 'add_new_user_bank_option_to_array';
export const REMOVE_NEW_ORG_BANK_OPTION_FROM_ARRAY = 'remove_new_org_bank_option_from_array';
export const SAVE_NEW_ORG_BANK_DETAILS = 'save_new_org_bank_details';
export const SAVE_MOBILE_NUMBER = 'save_mobile_number';

// export const SELECTED_DISTRIBUTOR_BANK_TO_EDIT = 'selected_distributor_bank_to_edit';

// export const SAVE_DISTRIBUTORS_BANK_DETAILS = 'save_distributors_bank_details';
export const GET_DISTRIBUTOR_BANKS_TO_EDIT_SUCCESS = 'get_distributor_banks_to_edit_success';
export const GET_ORAGANIZATION_BANKS_TO_EDIT_SUCCESS = 'get_oraganization_banks_to_edit_success';
export const GET_ORAGANIZATION_BANKS_TO_EDIT_FAIL = 'get_oraganization_banks_to_edit_fail';

export const SAVE_EDITING_ORG_BANK_DETAILS = 'save_editing_org_bank_details';
export const REGEX_WARNINGS_AT_EDIT_ORG_BANK_DETAILS = 'regex_warnings_at_edit_org_bank_details';
export const SEND_ORG_BANK_DETAILS_TO_EDIT_SUCCESS = 'send_org_bank_details_to_edit_success';
export const SEND_ORG_BANK_DETAILS_TO_EDIT_FAIL = 'send_org_bank_details_to_edit_fail';

export const SEND_ORG_BANK_DETAILS_TO_ADD_SUCCESS = 'send_org_bank_details_to_add_success';
export const SEND_ORG_BANK_DETAILS_TO_ADD_FAIL = 'send_org_bank_details_to_add_fail';

export const SAVE_ORG_BANK_TO_EDIT_AND_GET_BANKCITIES_SUCCESS = 'save_org_bank_to_edit_and_get_bankcities_success'

export const STORE_FILTERED_RETAILERS_LIST = 'store_filtered_retailers_list';

export const STORE_FILTERED_USERS_LIST = 'store_filtered_users_list,';



export const ACTIVATE_OR_INACTIVATE_USER = 'activate_or_inactivate_user';
export const ACTIVATE_OR_INACTIVATE_USER_SUCCESS = 'activate_or_inactivate_user_success'
export const ACTIVATE_OR_INACTIVATE_USER_FAIL = 'activate_or_inactivate_user_fail';


// export const EDIT_DISTRIBUTOR_BANK_DETAILS_SUCCESS = 'edit_distributor_bank_details_success';
// export const EDIT_DISTRIBUTOR_BANK_DETAILS_FAIL = 'edit_distributor_bank_details_success'
// export const ADD_DISTRIBUTOR_NEW_BANKS_SUCCESS = 'add_distributor_new_banks_success';
// export const ADD_DISTRIBUTOR_NEW_BANKS_FAIL = 'add_distributor_new_banks_fail';

// export const EDIT_ADMIN_RETAILER_BANK_DETAILS_SUCCESS = 'edit_admin_retailer_bank_details_success';
// export const EDIT_ADMIN_RETAILER_BANK_DETAILS_FAIL = 'edit_admin_retailer_bank_details_fail';

// export const ADD_ADMIN_RETAILER_BANK_DETAILS_SUCCESS = 'add_admin_retailer_bank_details_success';
// export const ADD_ADMIN_RETAILER_BANK_DETAILS_FAIL = 'add_admin_retailer_bank_details_fail';

export const CASH_IN_PROCEED_SUCCESS_FOR_ORG_USER = 'cash_in_proceed_success_for_org_user';
export const CASH_IN_PROCEED_FAIL_FOR_ORG_USER = 'cash_in_proceed_fail_for_org_user';
export const SAVE_CASH_IN_AMOUNT = 'save_cash_in_amount';


export const GET_ALL_BANKS_FROM_DB_SUCCESS = 'get_all_banks_from_db_success';
export const GET_ALL_BANKS_FROM_DB_FAIL = 'get_all_banks_from_db_fail';
export const GET_STATES_OF_SELECTED_BANK_SUCCESS = 'get_states_of_selected_bank_success';
export const GET_STATES_OF_SELECTED_BANK_FAIL = 'get_states_of_selected_bank_fail';
export const GET_BRANCHES_OF_SELECTED_BANK_AND_STATE_SUCCESS = 'get_branches_of_selected_bank_and_state_success';
export const GET_BRANCHES_OF_SELECTED_BANK_AND_STATE_FAIL = 'get_branches_of_selected_bank_and_state_fail';

export const SAVE_ORG_BASIC_DETAILS = 'save_org_basic_details';

export const SET_FILTERED_ORGANIZATION_DATA = 'set_filtered_organization_data';

//#endregion
//#region ADMIN_SUPPORT_USERS

export const GET_ALL_ADMIN_SUPPORT_USERS_SUCCESS = 'get_all_admin_support_users_success';
// export const ADMIN_SUPPORT_USERS_SETTINGS_CLICKED = 'admin_support_users_settings_clicked';
// export const ADMIN_SUPPORT_USERS_SETTINGS_CHOSEN = 'admin_support_users_settings_chosen';
// export const CLOSE_ADMIN_SUPPORT_USERS_SETTINGS_MODAL = 'close_admin_support_users_settings_modal';
// export const ADD_NEW_ADMIN_SUPPORT_USER_MODEL_OPEN = 'add_new_admin_support_user_model_open';
// export const ADD_OR_EDIT_ADMIN_SUPPORT_USER_DETAILS = 'add_or_edit_admin_support_user_details';


export const REMOVE_API_SUCCESS_OR_FAILURE_FOOTER_VIEW = 'remove_api_success_or_failure_footer_view';
export const CLEAR_RESPONSE_ON_ORG_APIS = 'clear_response_on_org_apis';
export const CLEAR_RESPONSE_OF_USER_APIS = 'clear_response_of_user_apis';

export const SAVE_WALLET_BALANCE_TO_UPDATE = 'save_wallet_balance_to_update';

export const ADD_FUNDS_TO_ORG_WALLET = 'add_funds_to_org_wallet';
export const ADD_FUNDS_TO_ORG_WALLET_SUCCESS = 'add_funds_to_org_wallet_success';
export const ADD_FUNDS_TO_ORG_WALLET_FAIL = 'add_funds_to_org_wallet_fail';

export const ADD_FUNDS_TO_USER_WALLET = 'add_funds_to_user_wallet';
export const ADD_FUNDS_TO_USER_WALLET_SUCCESS = 'add_funds_to_user_wallet_success';
export const ADD_FUNDS_TO_USER_WALLET_FAIL = 'add_funds_to_user_wallet_fail';

export const GET_ORG_DOCS = 'get_org_docs'
export const GET_ORG_DOCS_SUCCESS = 'get_org_docs_success';
export const GET_ORG_DOCS_FAIL = 'get_org_docs_fail'

export const GET_UN_APPROVED_ORG_LIST = 'get_un_approved_org_list';
export const GET_UN_APPROVED_ORG_LIST_SUCCESS = 'get_un_approved_org_list_success';
export const GET_UN_APPROVED_ORG_LIST_FAIL = 'get_un_approved_org_list_fail';

export const GET_UN_APPROVED_DISTRIBUTOR_LIST_SUCCESS = 'get_un_approved_distributor_list_success';
export const GET_UN_APPROVED_DISTRIBUTOR_LIST_FAIL = 'get_un_approved_distributor_list_fail';

export const APPROVE_ORGANIZATION = 'approve_organization';
export const APPROVE_ORGANIZATION_SUCCESS = 'approve_organization_success';
export const APPROVE_ORGANIZATION_FAIL = 'approve_organization_fail';

export const OPEN_REJECT_ORG_MODAL = 'open_reject_org_modal';
export const CLOSE_REJECT_ORG_MODAL = 'close_reject_org_modal';
export const SAVE_REJECT_ORG_REASON = 'save_reject_org_reason';

export const REJECT_NEW_ORG = 'reject_new_org';
export const REJECT_NEW_ORG_SUCCESS = 'reject_new_org_success';
export const REJECT_NEW_ORG_FAIL = 'reject_new_org_fail';

export const GET_REJECTED_USERS_SUCCESS = 'get_rejected_users_success';
export const GET_REJECTED_USERS_FAIL = 'get_rejected_users_fail';










    //#endregion