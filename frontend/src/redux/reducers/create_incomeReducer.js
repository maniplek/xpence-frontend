import { CREATE_INCOME_ERROR, CREATE_INCOME_SUCCESS} from '../actions/actionTypes';

const create_incomeReducer = (state = {data: null, error: null}, action) => {
    switch(action.type) {
        case CREATE_INCOME_SUCCESS:
            return {...state, data: action.payload}
        case CREATE_INCOME_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}

export default create_incomeReducer;