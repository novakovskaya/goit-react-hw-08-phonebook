import { createSelector } from '@reduxjs/toolkit';

export const getContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getIsLoading = state => state.contacts.loading;

export const getError = state => state.contacts.error;

export const getFilteredContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
