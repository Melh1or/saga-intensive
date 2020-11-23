//Core
import { put, apply, select } from 'redux-saga/effects';

import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { uiActions } from '../../../ui/actions';

export function* likePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            throw new Error({ 'remove': response.ok });
        }

        const liker = yield select(
            (state) => state.profile.removeAll(['avatar', 'token'])
        );

        yield put(postsActions.likePost({ liker, postId }));

    } catch (error) {
        yield put(uiActions.emitError(error, 'likePost worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}