import { GET_ALL_TRANSACTION_ERROR, GET_ALL_TRANSACTION_SUCCESS} from '../actions/actionTypes';

const getAlltransactionReducer = (state = {data: null, error: null}, action) => {
    switch(action.type) {
        case GET_ALL_TRANSACTION_SUCCESS:
            return {...state, data: action.payload}
        case GET_ALL_TRANSACTION_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}

export default getAlltransactionReducer;