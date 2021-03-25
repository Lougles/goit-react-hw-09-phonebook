import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  addFilterValue,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  createContactRequest,
  createContactSuccess,
  createContactError,
  deleteContactRequest,
  deleteContactSuccess,   
  deleteContactError,
} from './contact-actions';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [createContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(item => item.id !== Number(payload)),
  ],
  // [logoutSucces] : () => [],
});
const filter = createReducer('', {
  [addFilterValue]: (_, { payload }) => payload,
});
const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [createContactRequest]: () => true,
  [createContactSuccess]: () => false,
  [createContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});
const hendleError = (_, { payload }) => payload.response.data;
const clearError = () => null;
const error = createReducer(null, {
  [fetchContactRequest]: clearError,
  [fetchContactError]: hendleError,
  [createContactRequest]: clearError,
  [createContactError]: hendleError,
  [deleteContactRequest]: clearError,
  [deleteContactError]: hendleError,
});
export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});