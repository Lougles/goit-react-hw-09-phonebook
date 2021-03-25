import { createSelector } from '@reduxjs/toolkit';
const getContacts = state => state.contact.contacts;
const getFilter = state => state.contact.filter;
const getLoading = state => state.contact.loading;
const getError = state => state.contact.error;
const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
export { getContacts, getFilter, getLoading, getError, getFilteredContacts };

