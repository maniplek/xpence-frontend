import { CREATE_INCOME_ERROR, CREATE_INCOME_SUCCESS} from './actionTypes'
import { create_incomeApi } from '../../API/userApi'

const create_incomeAction = (userDetails) => async (dispatch) => {
    const response = await create_incomeApi(userDetails);
    let err = '';
    try {
        switch(response.status) {
            case 201:
                dispatch({type: CREATE_INCOME_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: CREATE_INCOME_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: CREATE_INCOME_ERROR, payload: error || 'connection error'});
    }
    return err;
}

export default create_incomeAction;