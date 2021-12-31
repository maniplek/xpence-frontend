import { LOGIN_ERROR, LOGIN_SUCCESS} from './actionTypes'
import { loginApi } from '../../API/userApi'

const loginAction = (userDetails) => async (dispatch) => {
    const response = await loginApi(userDetails);
    let err = ''
    try {
        switch(response.status){
            case 201:
                dispatch({type: LOGIN_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: LOGIN_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: LOGIN_ERROR, payload: error || 'connection error'});
        
    }
    return err;

}

export default loginAction;