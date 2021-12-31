import { CHANGE_PASSWORD_ERROR, CHANGE_PASSWORD_SUCCESS} from './actionTypes'
import { change_passwordApi } from '../../API/userApi'

const change_password = (userDetails) => async (dispatch) => {
    const response = await change_passwordApi(userDetails);
    let err = '';
    try {
        switch(response.status) {
            case 201:
                dispatch({type: CHANGE_PASSWORD_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: CHANGE_PASSWORD_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: CHANGE_PASSWORD_ERROR, payload: error || 'connection error'});
    }
    return err;
}

export default change_password;