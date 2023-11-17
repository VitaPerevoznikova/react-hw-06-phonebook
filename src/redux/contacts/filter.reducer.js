import initialContacts from 'data/contacts.json';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? initialContacts,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter(_, action) {
        return action.payload;
      },
  },
});

// Генератори екшенів
export const setFilter = filterSlice.actions;
// Редюсер слайсу
export const filterReducer = filterSlice.reducer;

export const getFilter = state => state.filter;