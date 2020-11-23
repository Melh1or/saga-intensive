// Core
import { put, apply } from 'redux-saga/effects';
import { replace } from 'react-router-redux';
import { actions } from 'react-redux-form';

// Instrument
import { api } from '../../../../REST';
import { profileActions } from '../../../profile/actions';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../actions';
import { usersActions } from '../../../users/actions'
import { book } from '../../../../navigation/book';

export function* logout () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.logout);
        
        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }
    } catch (error) {
        yield put(uiActions.emitError(error, "logout worker"));
    } finally {
        yield apply(localStorage, localStorage.removeItem, ['token']);
        yield apply(localStorage, localStorage.removeItem, ['remember']);
        yield put(profileActions.clearProfile());
        yield put(usersActions.clearUsers());
        yield put(uiActions.stopFetching());
        yield put(actions.reset('forms.user'));
        yield put(authActions.logout());
        yield put(replace(book.login));
    }
}