import initialContacts from 'data/contacts.json';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  contacts: JSON.parse(localStorage.getItem('contacts')) ?? initialContacts,
};

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState,
  // Об'єкт редюсерів
  reducers: {
    plusContact(state, { payload }) {
      // N 1
      // state.contacts = [...state.contacts, action.payload]
      // N 2
      state.contacts.push(payload);
    },
    deleteContact(state, { payload }) {
      state.contacts = state.contacts.filter(contact => contact.id !== payload);
    },
  },
});

// Генератори екшенів
export const { plusContact, deleteContact } = contactsSlice.actions;
// Редюсер слайсу
export const contactsReducer = contactsSlice.reducer;

//Reducer

// export const contactsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'contacts/addContacts': {
//       // state.contacts = [...state.contacts,action.payload] X
//       return {
//         ...state,
//         contacts: [...state.contacts, action.payload],
//       };
//     }
//     case 'contacts/deleteContacts': {
//       return {
//         ...state,
//         contacts: state.contacts.filter(
//           contact => contact.id !== action.payload
//         ),
//       };
//     }
//     default:
//       return state;
//   }
// };
// export const deleteContact = (payload) => {
//   return{
//     type: 'contacts/deleteContacts',
//     payload,
//   }
// }

// export const plusContact = (payload) => {
//   return{
//     type: 'contacts/addContacts',
//     payload,
//   }
// }
