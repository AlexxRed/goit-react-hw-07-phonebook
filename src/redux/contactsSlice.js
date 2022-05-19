import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// const initialContacts = [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ] 



const initialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: ''
};

export const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        addContact(state, action) {
            state.items.push(action.payload);
        },
        removeContact(state, action) {
            // state.items.filter(contact => contact.id !== action.payload);
            state.items = state.items.filter(
            ({ id }) => id !== action.payload
            );
        },
        filterContacts(state, action) {
            state.filter = action.payload
        }
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
};
export const contactsReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
);

export const { addContact, removeContact, filterContacts } = contactsSlice.actions;
export const getContactsList = ({ contacts }) => contacts.items;
export const getFilteredContacts = ({ contacts }) => contacts.filter;










// const increment = createAction ('clicks/increment');

// const clickReducer = createReducer(0, {
//     [increment]: (state, action) => {
//         // return {value: state.value + action.payload,}
//         state.value += action.payload
//     }
// });
// const initialState = { value: 0 };


// export const clickSlice = createSlice({
//     name: 'clicks',
//     initialState,
//     reducers: {
//         increment(state, action) {
//             state.value += action.payload;
//         },
//         reset(state) {
//             state.value = 0;
//         }
//     }
// });

// export const { increment, reset } = clickSlice.actions;

// export const getClicks = state => state.clicks.value;