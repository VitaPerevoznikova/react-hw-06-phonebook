import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/phone-book.reducer";
import { filterReducer } from "./contacts/filter.reducer";

export const store = configureStore({
  reducer:{
    contactsStore: contactsReducer,
    filter: filterReducer,
}
});