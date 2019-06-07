export const AUTH_LOGIN = 'api/authentication/token';
export const GET_MODULES_AND_PERMISSIONS = 'api/authorization/GetModulesAndPermissions';
export const ADD_NEW_ROLE_MODULE = 'api/authorization/AddRole';
// export const UPDATE_ROLE_MODULE = 'api/authorization/ModifyRole';

export const GET_ALL_MONEY_TRANSFER_APIS = 'api/paymentapi/GetApis';

// export const GET_ALL_ORGANIZATIONS = 'api/tenant/';
export const GET_ALL_ORGANIZATIONS = 'api/';
export const GET_USER_LIST = 'api/user/users/';
export const USER = 'api/user/';

export const CREATE_USER = 'api/user/CreateUser';
export const CREATE_FSE = 'api/user/fse';
export const ACTIVATE_OR_INACTIVATE_ORG = 'api/retailership/activate';
export const GET_CREATE_ORG_TEMPLATE = 'api/organizations/CreateOrganization';

export const CASH_IN_ORGANIZATION = 'api/organizations/CashInOrganization';
export const GET_ORGANIZATION_MAPPED_BANKS = 'api/bank/';
export const ORG_BASIC_DETAILS_TO_EDIT = 'api/organizations/EditOrganization/';

export const REGISTER_ORG = 'api/organizations/CreateOrganization'
export const GET_BANK_CITIES = 'api/banks/GetBankCities/';
export const GET_BANK_BRANCHES = 'api/banks/GetBankBranches/';

export const UPDATE_ORG_BANK = 'api/banks';
export const UPDATE_TENANT_BANK = 'api/bank';

export const UPDATE_USER_STATUS = 'api/user/';

export const ORG_LIST_TO_APPROVE_BY_ADMIN = 'api/';

export const APPROVE_ORG_URL = 'api/'

export const GET_CUSTOMER_OF_MNY_TRANSFER_COMP = 'api/moneytransfer/customerdetails/';
export const ADD_CUSTOMER_OF_MNY_TRANSFER_COMP = 'api/moneytransfer/AddCustomer';
export const EDIT_CUSTOMER_INFO = 'api/moneytransfer/EditCustomer';
export const ADD_BENE_OF_MNY_TRANSFER_COMP = 'api/moneytransfer/AddBeneficiary';
export const DELETE_BENE = 'api/moneytransfer/RemoveBeneficiary';
export const SEND_MONEY_TRASFER_DETAILS = 'api/moneytransfer/MoneyTransfer';

export const GET_RATE_CARD = 'api/organizations/RateCard';

export const GET_RATE_CARD_TEMPLATE_URL = 'api/organizations/GetRateCardTemplate';

export const GET_TRANSACTION_HISTORY = 'api/tenant/TransactionHistory';


export const Default_Error_msg = 'Server is Down. Please try after sometime.';

export const GET_APIS_LIST = 'api/paymentapi/GetApis';
export const ADD_NEW_API = 'api/paymentapi/AddApi';
export const UPDATE_API = 'api/paymentapi/UpdateApi';
export const ACT_OR_INACT_API = 'api/paymentapi/UpdateApiActiveState';




//#region  Reportas Final

export const REPORTS_ = 'api/reports';

// https://localhost:44396/api/reports/tenenttransactions/0/2

//#endregion 

//#region  AUTHERIZATION Final

export const AUTHERIZATION_ = 'api/authorization';
export const AUTHENTICATION_ = 'api/authentication';


export const MY_PEMISSIONS_MENU_ = 'api/ui/menu/me';


//#endregion 

//#region  ORGANIZATION  Final

export const WALLET_ = 'api/wallet';

// export const ORGANIZATION_ = 'api/tenant';
export const ORGANIZATION_ = 'api';

//#endregion 


//#region  MoneyTrasfer Final

export const CUSTOMER_ = 'api/customer';
export const BENEFICIARY_ = 'api/customer/beneficiary';
export const BANKS_ = 'api/bank';

export const CDM = 'api/cdm';
export const TENANT_DEPOSIT ="api/tenant/deposit";

export const MONEYTRANSFER_ = 'api/moneytransfer/'

export const RATECARD_ = 'api/ratecard'

//#endregion 

// FORGOT PASSWORD API'S
export const FORGOT_PASSWORD_API = 'api/authentication/forgotpassword';
export const RESET_PASSWORD_API = 'api/authentication/resetpassword';
export const RESEND_OTP_API = 'api/authentication/resendotp';


export const DEPOSIT_SLIP  ='api/bankdeposits';


export const PE_API_URL = NODE_ENV === 'development' ? 'https://localhost:44396/'
    : NODE_ENV === 'testing' ? 'http://192.168.0.74/pxptestapi/'
        : NODE_ENV === 'production' ? 'http://production-url/' : '';

// Input Fileds Lable Style 
export const Labelstyle = {
    fontSize: 11.5,
    fontWeight: 'bold'
}
// Input Fileds Lable Style 
export const Labelstyle1 = {
    fontSize: 16,
    fontWeight: 'bold'
}
export const LabelstyleNew1 = {
    width: "100%",
    margin: 10,
    color: "white",
    borderRadius: 21,
    borderColor: "rgb(1, 142, 211)",
    backgroundColor: "rgb(1, 142, 211)",
    fontWeight: 450,
}
export const LabelstyleNew2 = {
    width: "90%",
    margin: 10,
    color: "white",
    borderRadius: 21,
    // borderColor: "rgb(1, 142, 211)",
    backgroundColor: "rgb(1, 142, 211)",
    // fontWeight: 450,
}

export const InputTextStyle = {
    textTransform: 'capitalize'
}

export const SpinnerModalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

export const ApiSuccessOrFailureModalStyles = {
    content: {
        top: '80%',
        left: '20%',
        right: 'auto',
        bottom: '0%',
        // marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    }
};

import { css } from 'react-emotion';
export const SpinnerCss = css`
display: block;
margin: 0 auto;
border-color: red;
`;

console.log(NODE_ENV);
console.log("Current URL");
console.log(PE_API_URL);


export function toTitleCase(str) {
    console.log(" In Function  toTitleCase ");
    console.log(str);
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export const LabelstyleNew = {
    width: "100%",
    fontSize: 20,
    color: "rgb(1, 142, 211)",
    fontWeight: 500,
    paddingLeft: 20
}
export const Labelstyle5 = {
    fontSize: 10,
    color: "#bababa",
    lineHeight: 0
}
export const LabelstyleNew3 = {
    fontSize: 17,
}

export function ReturnCustomerId(MTcustomer) {

    return MTcustomer.customerId !== undefined && MTcustomer.customerId !== '' ?
        MTcustomer.customerId :
        MTcustomer.ExistingCustomer.id !== undefined && MTcustomer.ExistingCustomer.id !== '' ?
            MTcustomer.ExistingCustomer.id : MTcustomer.customerId;
}

export function ReturnCustomerMobileNo(MTcustomer) {
    return MTcustomer.customerMobile !== undefined && MTcustomer.customerMobile !== '' ?
        MTcustomer.customerMobile : MTcustomer.ExistingCustomer.mobileNo;
}

