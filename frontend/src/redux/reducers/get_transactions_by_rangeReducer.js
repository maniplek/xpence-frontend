import { GET_TRANSACTION_BY_RANGE_ERROR, GET_TRANSACTION_BY_RANGE_SUCCESS} from '../actions/actionTypes';

const get_transactions_by_rangeReducer = (state = {data: null, error: null}, action) => {
    switch(action.type) {
        case GET_TRANSACTION_BY_RANGE_SUCCESS:
            return {...state, data: action.payload}
        case GET_TRANSACTION_BY_RANGE_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}

export default get_transactions_by_rangeReducer;













