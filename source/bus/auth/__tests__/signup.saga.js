// Core
import { put, apply } from "redux-saga/effects";
import { cloneableGenerator } from 'redux-saga/utils';

// Instruments
import { api } from "../../../REST";
import { uiActions } from "../../ui/actions";
import { authActions } from "../actions";
import { signup } from '../saga/workers';

const signupAction = authActions.signupAsync(__.userProfile);

const saga = cloneableGenerator(signup)(signupAction);
let clone = null;

describe('signup saga: ', () => {
    test('should dispatch "startFetching" action', () => {
        expect(saga.next().value).toEqual(put(uiActions.startFetching()));
    })
})

