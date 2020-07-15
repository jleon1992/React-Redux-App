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
        return {
            ...state,
            error: '',
            isFetching: true
        }
} 
 return state
}

// export default reducer