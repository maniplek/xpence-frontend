import { GET_TRANSACTION_BY_RANGE_ERROR, GET_TRANSACTION_BY_RANGE_SUCCESS} from './actionTypes'
import { get_transactions_by_rangeApi } from '../../API/userApi'

const get_transactions_by_rangeAction = (userDetails) => async (dispatch) => {
    const response = await get_transactions_by_rangeApi(userDetails);
    let err = ''
    try {
        switch(response.status){
            case 201:
                dispatch({type: GET_TRANSACTION_BY_RANGE_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: GET_TRANSACTION_BY_RANGE_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: GET_TRANSACTION_BY_RANGE_ERROR, payload: error || 'connection error'});
        
    }
    return err;

}

export default get_transactions_by_rangeAction;