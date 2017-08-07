// reducer.js
import {SET_TOKEN, SET_ERROR} from '../actions';

import update from 'immutability-helper';

const initialState = {
    token: null,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_ERROR:  
            return update(state, {
                error: {
                    $set: action.payload
                }
            })
        case SET_TOKEN:
            return update(state, {
                token: {
                    $set: action.payload
                }
            });
        default:
            return state;
    }
}

export default reducer;