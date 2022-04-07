import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        'https://connections-api.herokuapp.com/contacts'
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (userContact, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'https://connections-api.herokuapp.com/contacts',
        userContact
      );

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactiId, { rejectWithValue }) => {
    try {
      await axios.delete(
        `https://connections-api.herokuapp.com/contacts/${contactiId}`
      );

      return contactiId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateContact = createAsyncThunk(
  'contacts/updateContact',
  async (contactiId, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(
        `https://connections-api.herokuapp.com/contacts/${contactiId}`
      );

      return data.contactiId;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
