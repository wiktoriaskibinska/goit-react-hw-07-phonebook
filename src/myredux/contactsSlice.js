import { createSlice } from '@reduxjs/toolkit';
const savedContacts = JSON.parse(localStorage.getItem('contacts')) || [];

const contactsInitailState = {
  contacts: savedContacts,
  items: [],
  isLoading: false,
  error: null,
};
export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitailState,
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
    },

    deleteContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
