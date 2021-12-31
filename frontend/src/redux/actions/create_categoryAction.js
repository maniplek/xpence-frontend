import { CREATE_CATEGORY_ERROR, CREATE_CATEGORY_SUCCESS} from './actionTypes'
import { create_categoryApi } from '../../API/userApi'

const create_categoryAction = (userDetails) => async (dispatch) => {
    const response = await create_categoryApi(userDetails);
    let err = '';
    try {
        switch(response.status) {
            case 201:
                dispatch({type: CREATE_CATEGORY_SUCCESS, payload: response.data});
                return true
            default:
                err = response;
                dispatch({type: CREATE_CATEGORY_ERROR, payload: response});
        }
    } catch(error) {
        err = error || 'connection error'
        dispatch({type: CREATE_CATEGORY_ERROR, payload: error || 'connection error'});
    }
    return err;
}

export default create_categoryAction;