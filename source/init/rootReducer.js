// Core
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// Reducers
import { postsReducer } from '../bus/posts/reducer';
import { uiReducer } from '../bus/ui/reducer';
import { authReducer } from '../bus/auth/reducer';
import { profileReducer } from '../bus/profile/reducer';
import { usersReducer } from '../bus/users/reducer';
import { formsReducer } from '../bus/forms/reducer';
import { notificationReducer } from '../bus/notification/reducer';

export const rootReducer = combineReducers({
    posts:        postsReducer,
    ui:           uiReducer,
    auth:         authReducer,
    profile:      profileReducer,
    users:        usersReducer,
    router:       routerReducer,
    forms:        formsReducer,
    notification: notificationReducer,
});
