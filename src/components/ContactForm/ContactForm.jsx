import React, { useState } from 'react';
import css from './ContactForm.module.css';

import { nanoid } from '@reduxjs/toolkit';

import { plusContact } from 'redux/contacts/phone-book.reducer';
import { useDispatch, useSelector } from 'react-redux';


export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contactsStore.contacts);

  const handleSubmitAddContact = e => {
    e.preventDefault();
    const data = {
      name,
      number: Number.parseFloat(number),
    };
    const newContact = { ...data, id: nanoid() };

    const isDuplicate = contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`'${newContact.name}': is already in contacts!`);
      return;
    }

    dispatch(plusContact(newContact));
    setName('');
    setNumber('');
  };
  return (
    
    <form className={css.form} onSubmit={handleSubmitAddContact}>
      <label className={css.label}>
        <p className={css.nameLabel}>Name</p>
        <input
          className={css.input}
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          title="Name may contain only letters, apostrophe, dash, and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          required
        />
      </label>
      <label className={css.label}>
        <p className={css.nameLabel}>Number</p>
        <input
          className={css.input}
          onChange={handleChange}
          type="tel"
          name="number"
          value={number}
          placeholder="Enter your number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          required
        />
      </label>
      <button className={css.btnFormAdd} type="submit">
        Add contacts
      </button>
    </form>
    
  );
};
export default ContactForm;
