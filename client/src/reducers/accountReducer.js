/*
The file will do two things: 
1) Define initial state
2) Define state change based on which actions called
*/

import {
    ADD_ACCOUNT,
    DELETE_ACCOUNT,
    GET_ACCOUNT, 
    ACCOUNTS_LOADING,
    GET_TRANSACTIONS, 
    TRANSACTIONS_LOADING
} from "../actions/types";

const initialState = {
    accounts: [],
    transactions: [],
    accountsLoading: false,
    transactionsLoading: false
};

export default function(state = initialState, action) {
    switch (action.type) {
        case ACCOUNTS_LOADING:
            return {
                ...state,
                accountsLoading: true
            };
    }
}