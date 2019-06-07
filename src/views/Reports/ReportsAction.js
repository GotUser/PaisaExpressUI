import {
    GET_ALL_TRANSACTIONS_OF_USER_SUCCESS,
    GET_ALL_TRANSACTIONS_OF_USER_FAIL,

    GET_CASHIN_TRANSACTION_HISTORY_SUCCESS,

    GET_ALL_LEDGER_TRANSACTTIONS_OF_USER,
} from './Types';

import { PE_API_URL, GET_TRANSACTION_HISTORY } from '../../GlobalVars';
import { Interceptor } from '../axiosInterceptor';
import axios from 'axios';

export const getCashInTransactionHistory = () => {

    var cashInHistory = [
        {
            id: '1',
            transId: '78965412336',
            amount: '10,000',
            transType: 'Credited',
            fromOrTo: 'prashanth(7382040877)',
            date: '07/03/2018'
        },
        {
            id: '2',
            transId: '85698563256',
            amount: '20,000',
            transType: 'Debited',
            fromOrTo: 'pavan(9635214785)',
            date: '17/04/2018'
        },
        {
            id: '3',
            transId: '85241478963',
            amount: '130,000',
            transType: 'Credited',
            fromOrTo: 'prashanth(7382040877)',
            date: '27/03/2018'
        },
        {
            id: '4',
            transId: '7895412369',
            amount: '18,000',
            transType: 'Credited',
            fromOrTo: 'Ajay(7382040899)',
            date: '27/03/2018'
        },
    ];
    console.log(" ...... In Action...........");
    console.log(cashInHistory);
    return (dispatch) => {
        dispatch({
            type: GET_CASHIN_TRANSACTION_HISTORY_SUCCESS,
            payload: { cashInHistory }
        })
    }
}

export const getAllTransactionsOfUser = (Token, offset, limit, searchText) => {

    // Interceptor(Token);

    var data = {
        rows: [
            {
                'id': '1',
                'distributorName': 'Wing',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '2,00,000'
            },
            {
                'id': '2',
                'distributorName': 'Whitney',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '2,00,000'

            },
            {
                'id': '3',
                'distributorName': 'Hilel',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '2,00,000'
            },
            {
                'id': '4',
                'distributorName': 'Alea',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '2,00,000'

            },

            {
                'id': '5',
                'distributorName': 'Prashanth',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            },
            {
                'id': '6',
                'distributorName': 'Mahesh',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            },
            {
                'id': '7',
                'distributorName': 'Sreeja',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            },
            {
                'id': '8',
                'distributorName': 'Raj kumar',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            },
            {
                'id': '9',
                'distributorName': 'Avinash',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            },
            {
                'id': '10',
                'distributorName': 'Pavan',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            },
            {
                'id': '11',
                'distributorName': 'rajesh',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            },
            {
                'id': '12',
                'distributorName': 'Aparna',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            },
            {
                'id': '13',
                'distributorName': 'Ajay',
                'distributorMobileNo': '9440556452',
                'date': '27/03/2018 13:08:55',
                'amount': '1,00,000'

            }

        ]

    }

    let URL = PE_API_URL + GET_TRANSACTION_HISTORY + '/' + offset + '/' + limit + '/' + searchText;


    return (dispatch) => {


        const AuthStr = 'Bearer '.concat(Token);

        axios.get(URL, {
            headers: {
                'Authorization': AuthStr
            }
        }).then(response => {

            console.log(" GET_RATE_CARD_SUCCES Response is:  ")
            console.log(response);
            console.log(response.data);
            console.log(response.data.txnHistory);

            dispatch({
                type: GET_ALL_TRANSACTIONS_OF_USER_SUCCESS,
                payload: response.data.txnHistory,
            });
        }).catch((error) => {
            dispatch({
                type: GET_ALL_TRANSACTIONS_OF_USER_FAIL,
                payload: "Login Failed!"
            });
        });

        // dispatch({
        //     type: GET_ALL_TRANSACTIONS_OF_USER_SUCCESS,
        //     payload: data

        // });
    }
}

export const getAllLedgerTransactions = () => {

    var data = [
        {
            'txnCode': '180327AA000AF',
            'txnRefCode': '02541254225421',
            'txnAmount': '100',
            'description': 'Wallet Top up by Pavan Mobile No: 8546235684',
            'type': 'CR',
            'openBalance': '0',
            'closeBalance': '100',
            'Date': '27/03/2018 11:08',

        },
        {
            'txnCode': '180327AA000AK',
            'txnRefCode': '02541254225695',
            'txnAmount': '1',
            'description': 'Bene Verification of Avinash Gade MobileNo. 9704329296',
            'type': 'DR',
            'openBalance': '100',
            'closeBalance': '99',
            'Date': '27/03/2018 11:09',

        },
        {
            'txnCode': '180327AA000AK',
            'txnRefCode': '02541254225695',
            'txnAmount': '1',
            'description': 'Bene Verification of Prashant Yejje MobileNo. 9704329296',
            'type': 'DR',
            'openBalance': '99',
            'closeBalance': '98',
            'Date': '10/04/2018 13:45',

        },
    ];

    return (dispatch) => {

        dispatch({
            type: GET_ALL_LEDGER_TRANSACTTIONS_OF_USER,
            payload: data

        });
    }
}


