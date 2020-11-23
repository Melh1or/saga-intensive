// Core
import { v4 } from 'uuid';
// Types
import { types } from './types';

export const notificationActions = {
    showNotification: (message, type = 'info', source = '') => {
        return {
            type:    types.SHOW_NOTIFICATION,
            payload: {
                id: v4(),
                message,
                type,
                source,
            }
        };
    },
    hideNotification: () => {
        return {
            type: types.HIDE_NOTIFICATION,
        };
    },
};