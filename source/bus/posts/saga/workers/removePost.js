// Core
import { put, apply } from 'redux-saga/effects';

// Instruments
import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* removePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching())

        const response = yield apply(api, api.posts.remove, [postId]);

        if (response.status !== 204) {
            throw new Error('Remove post failed');
        }
    
        yield put(postsActions.removePost(postId));
    } catch (err) {
        yield put(uiActions.emitError(err, 'removePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
};
 