import { createSlice } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://6286216d96bccbf32d6fc4b5.mockapi.io' }),
    endpoints: (builder) => ({
        getContacts: builder.query({
            query: () => `/contacts`,
            providesTags: ['Contacts'],
        }),
        addNewContact: builder.mutation({
            query: (contact) =>({
            url: `/contacts`,
            method: 'POST',
            body: contact,
            }),
            invalidatesTags: ['Contacts'],
        }),
        deleteContact: builder.mutation({
            query: (id) =>({
            url: `/contacts/${id}`,
            method: 'DELETE',
            }),
            invalidatesTags: ['Contacts'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useAddNewContactMutation,
    useDeleteContactMutation,
} = contactsApi;


const initialState = {
    items: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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
    }
});

export const contactsReducer = (
    contactsSlice.reducer
);

export const { addContact, removeContact} = contactsSlice.actions;
export const getContactsList = ({ contacts }) => contacts.items;

export const filterSlice = createSlice({
    name: 'filter',
    initialState: { value: '' },
    reducers: {
        setFilter(state, action) {
            state.value = action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;


