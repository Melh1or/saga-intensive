// Core
import { fromJS, Map } from 'immutable';

// Types
import { types } from "./types";

const initialState = Map();

export const notificationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SHOW_NOTIFICATION:
            return fromJS(action.payload);
            
        case types.HIDE_NOTIFICATION:
            return initialState;
            
        default:
            return state;
    }
};
