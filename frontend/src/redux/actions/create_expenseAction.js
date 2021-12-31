import { CREATE_EXPENSE_ERROR, CREATE_EXPENSE_SUCCESS} from './actionTypes'
import { create_expenseApi } from '../../API/userApi'

const create_expenseAction = (userDetails) => async (dispatch) => {
    const response = await create_expenseApi(userDetails);
    let err = '';
    try {
        switch(response.status) {
            case 201:
                dispatch({type: CREATE_EXPENSE_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: CREATE_EXPENSE_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: CREATE_EXPENSE_ERROR, payload: error || 'connection error'});
    }
    return err;
}

export default create_expenseAction;