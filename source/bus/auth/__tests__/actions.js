// Actions
import { profileActions } from '../../profile/actions';
import { authActions } from '../actions';

// Types
import { types } from '../types';

describe('auth actions: ', () => {
    test('authenticate', () => {
        expect(authActions.authenticate()).toEqual({
            type: types.AUTHENTICATE,
        });
    });

    test('initialize', () => {
        expect(authActions.initialize()).toEqual({
            type: types.INITIALIZE,
        });
    });

    test('logout', () => {
        expect(authActions.logout()).toEqual({
            type: types.LOGOUT,
        });
    });
  
    test('signupAsync', () => {
        expect(authActions.signupAsync(__.userProfile)).toEqual({
            type:    types.SIGNUP_ASYNC,
            payload: __.userProfile,
        });
    });
  
    test('loginAsync', () => {
        expect(authActions.loginAsync(__.credentials)).toEqual({
            type:    types.LOGIN_ASYNC,
            payload: __.credentials,
        })
    })
});

describe('profile actions', () => {
    test('fillUsers', () => {
        expect(profileActions.fillProfile(__.userProfile)).toMatchSnapshot()
    })
})
