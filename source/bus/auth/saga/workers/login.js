// Core
import { put, apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

// Instrument
import { api } from '../../../../REST';
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../actions';
import { profileActions } from '../../../profile/actions';
import { notificationActions } from '../../../notification/actions';

export function* login ({ payload: credentials }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.login, [credentials]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        if (credentials.remember) {
            yield apply(localStorage, localStorage.setItem, ['remember', true]);
        }

        yield apply(localStorage, localStorage.setItem, ['token', profile.token]);
        yield put(profileActions.fillProfile(profile));
        yield put(actions.change('forms.user.profile.firstName', profile.firstName));
        yield put(actions.change('forms.user.profile.lastName', profile.lastName));
        yield put(authActions.authenticate());
        yield put(notificationActions.showNotification('Welcome'));
    } catch (error) {
        yield put(uiActions.emitError(error, "login worker"));
        yield put(notificationActions.showNotification('Incorrect credentials', 'error', 'loginWorker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}