import { CREATE_ACCOUNT_ERROR, CREATE_ACCOUNT_SUCCESS} from './actionTypes'
import { create_accountApi } from '../../API/userApi'

const create_accountAction = (userDetails) => async (dispatch) => {
    const response = await create_accountApi(userDetails);
    let err = ''
    try {
        switch(response.status){
            case 201:
                dispatch({type: CREATE_ACCOUNT_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: CREATE_ACCOUNT_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: CREATE_ACCOUNT_ERROR, payload: error || 'connection error'});
        
    }
    return err;

}

export default create_accountAction;