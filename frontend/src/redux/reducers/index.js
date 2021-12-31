import { combineReducers } from "redux";
import signupReducer from "./signupReducer";
import loginReducer from "./loginRedurer";
import create_accountReducer from './create_accountReducer';
import create_categoryReducer from './create_categoryReducer';
import create_expenseReducer from './create_expenseReducer';
import change_passwordReducer from './change_passwordReducer';
import get_transactions_by_rangeReducer from './get_transactions_by_rangeReducer';
import create_incomeReducer from './create_incomeReducer';
import getAlltransactionReducer from './getAlltransactionReducer';

export default combineReducers({
    signupReducer,
    loginReducer,
    create_accountReducer,
    create_categoryReducer,
    create_expenseReducer,
    change_passwordReducer,
    get_transactions_by_rangeReducer,
    create_incomeReducer,
    getAlltransactionReducer

})