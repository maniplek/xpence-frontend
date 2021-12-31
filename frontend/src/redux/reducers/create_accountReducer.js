import { CREATE_ACCOUNT_ERROR, CREATE_ACCOUNT_SUCCESS} from '../actions/actionTypes';

const create_accountReducer = (state = {data: null, error: null}, action) => {
    switch(action.type) {
        case CREATE_ACCOUNT_SUCCESS:
            return {...state, data: action.payload}
        case CREATE_ACCOUNT_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}

export default create_accountReducer;
