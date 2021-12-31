import { CREATE_CATEGORY_ERROR, CREATE_CATEGORY_SUCCESS} from '../actions/actionTypes';

const create_categoryReducer = (state = {data: null, error: null}, action) => {
    switch(action.type) {
        case CREATE_CATEGORY_SUCCESS:
            return {...state, data: action.payload}
        case CREATE_CATEGORY_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}

export default create_categoryReducer;