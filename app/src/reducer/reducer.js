import {
    FETCH_JOKES_START,
    FETCH_JOKES_SUCCESS,
    FETCH_JOKES_FAILURE
} from '../actions/actions'

const initialState = {
    jokes: [],
    error: '',
    isFetching: false
}

export function reducer(state = initialState, action) {
switch( action.type){
    case FETCH_JOKES_START:
        // console.log('start')
        return {
            ...state,
            jokes: [],
            error: '',
            isFetching: true
        }
    case FETCH_JOKES_SUCCESS:
        // console.log(action.payload)
        return {
            ...state,
            jokes: action.payload,
            error: '',
            isFetching: false
        }
    case FETCH_JOKES_FAILURE:
        return {
            ...state,
            error: action.payload.status,
            isFetching: false
        }
    default:
        return state
}}

