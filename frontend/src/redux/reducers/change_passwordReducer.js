import { CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_SUCCESS} from '../actions/actionTypes';

const change_passwordReducer = (state = {data: null, error: null}, action) => {
    switch(action.type) {
        case CHANGE_PASSWORD_SUCCESS:
            return {...state, data: action.payload}
        case CHANGE_PASSWORD_ERROR:
            return {...state, error: action.payload};
        default:
            return state
    }
}

export default change_passwordReducer;