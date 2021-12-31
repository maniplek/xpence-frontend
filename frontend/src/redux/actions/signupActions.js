import { SIGNUP_ERROR, SIGNUP_SUCCESS} from './actionTypes'
import { signUpApi } from '../../API/userApi'

const signupAction = (userDetails) => async (dispatch) => {
    const response = await signUpApi(userDetails);
    let err = '';
    try {
        switch(response.status) {
            case 201:
                dispatch({type: SIGNUP_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: SIGNUP_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: SIGNUP_ERROR, payload: error || 'connection error'});
    }
    return err;
}

export default signupAction;