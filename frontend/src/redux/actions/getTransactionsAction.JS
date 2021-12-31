import { GET_ALL_TRANSACTION_ERROR, GET_ALL_TRANSACTION_SUCCESS} from './actionTypes'
import { getAlltransactionApi } from '../../API/userApi'

const getAlltransactionAction = (userDetails) => async (dispatch) => {
    const response = await getAlltransactionApi(userDetails);
    let err = '';
    try {
        switch(response.status) {
            case 201:
                dispatch({type: GET_ALL_TRANSACTION_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: GET_ALL_TRANSACTION_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: GET_ALL_TRANSACTION_ERROR, payload: error || 'connection error'});
    }
    return err;
}

export default getAlltransactionAction;