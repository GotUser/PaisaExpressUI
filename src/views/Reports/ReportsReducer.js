import {

    GET_ALL_TRANSACTIONS_OF_USER_SUCCESS,
    GET_ALL_TRANSACTIONS_OF_USER_FAIL,

    GET_CASHIN_TRANSACTION_HISTORY_SUCCESS,

    GET_ALL_LEDGER_TRANSACTTIONS_OF_USER
} from './Types';

const INITIAL_STATE = {
    cashInHistory: [],
    lpbAdminTrans: {
        lpbAdminTransList: [],
    },

    distributorLedger: {
        distributorLedgerList: []
    },
}

import { REDUCER_INITIAL } from '../Authentication/types';
export default (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case REDUCER_INITIAL:

        console.log("  Report Manage MANAGEMENT REDUCER . . . . . . ");

            return { ...INITIAL_STATE }

        case GET_ALL_TRANSACTIONS_OF_USER_SUCCESS:
            console.log("From GET_ALL_TRANSACTIONS_OF_USER_SUCCESS Reducer");
            console.log(action.payload);
            return {
                ...state,
                lpbAdminTrans: {
                    ...state.lpbAdminTrans,
                    lpbAdminTransList: action.payload,
                }
            }
        case GET_CASHIN_TRANSACTION_HISTORY_SUCCESS:
            console.log(" ........In Reducer Casin ");
            console.log(action.payload.cashInHistory);

            return {
                ...state, cashInHistory: action.payload.cashInHistory
            }

        case GET_ALL_LEDGER_TRANSACTTIONS_OF_USER:
            return {
                ...state, distributorLedger: {
                    ...state.distributorLedger,
                    distributorLedgerList: action.payload
                }
            }


        default:
            return state;
    }
}