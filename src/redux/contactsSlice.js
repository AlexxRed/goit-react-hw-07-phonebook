import { createSlice } from '@reduxjs/toolkit';
// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'




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
            state.items = state.items.filter(
            ({ id }) => id !== action.payload
            );
        },
        filterContacts(state, action) {
            state.filter = action.payload
        }
    }
});

export const contactsReducer = (
    contactsSlice.reducer
);

export const { addContact, removeContact, filterContacts } = contactsSlice.actions;
export const getContactsList = ({ contacts }) => contacts.items;
export const getFilteredContacts = ({ contacts }) => contacts.filter;


