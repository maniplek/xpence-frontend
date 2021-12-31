import { SIGNUP_ERROR, SIGNUP_SUCCESS} from '../actions/actionTypes';

const signupReducer = (state = {data: null, error: null}, action) => {
    switch(action.type) {
        case SIGNUP_SUCCESS:
            return {...state, data: action.payload}
        case SIGNUP_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}

export default signupReducer;