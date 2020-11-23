// Core
import { combineReducers, createStore } from 'redux';
import { routerReducer } from 'react-router-redux';
// Reducers
import { postsReducer } from '../../bus/posts/reducer';
import { uiReducer } from '../../bus/ui/reducer';
import { authReducer } from '../../bus/auth/reducer';
import { profileReducer } from '../../bus/profile/reducer';
import { usersReducer } from '../../bus/users/reducer';
import { formsReducer } from '../../bus/forms/reducer';
import { notificationReducer } from '../../bus/notification/reducer';

import { store } from '../store';

const referenceRootReducer = combineReducers({
    posts:        postsReducer,
    ui:           uiReducer,
    auth:         authReducer,
    profile:      profileReducer,
    users:        usersReducer,
    router:       routerReducer,
    forms:        formsReducer,
    notification: notificationReducer,
});

const referenceStore = createStore(referenceRootReducer);

describe('store: ', () => {
    test('should have valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    })
})
