import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsReducer } from './contactsSlice';
import { contactsApi } from './contactsSlice';


export const store = configureStore({
    reducer: {
        [contactsApi.reducerPath]: contactsApi.reducer,
        contacts: contactsReducer,
    },
    middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
        contactsApi.middleware,
        logger
    ],
});


