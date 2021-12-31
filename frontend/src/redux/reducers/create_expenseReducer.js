import { CREATE_EXPENSE_ERROR, CREATE_EXPENSE_SUCCESS} from '../actions/actionTypes';

const create_expenseReducer = (state = {data: null, error: null}, action) => {
    switch(action.type) {
        case CREATE_EXPENSE_SUCCESS:
            return {...state, data: action.payload}
        case CREATE_EXPENSE_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}

export default create_expenseReducer;







