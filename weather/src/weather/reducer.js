import {FETCH_STARTED, FETCH_SUCCESS, FETCH_FAILURE} from './actionTypes';
import * as requestStatus from './requestStatus';

export default (state = {status: requestStatus.LOADING}, action) => {
    switch(action.type) {
        case FETCH_STARTED: {
            return {status: requestStatus.LOADING}
        }
        case FETCH_SUCCESS: {
            return {...state, status: requestStatus.SUCCESS, ...action.result};
        }
        case FETCH_FAILURE: {
            return {status: requestStatus.FAILURE};
        }
        default: {
            return state;
        }
    }
}