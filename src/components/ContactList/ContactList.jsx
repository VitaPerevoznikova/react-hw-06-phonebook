import React from 'react';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/phone-book.reducer';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contactsStore.contacts);
  const filter = useSelector(state => state.filterStore);

  const normalizedFilter = filter.toLowerCase();

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul className={css.list}>
      {visibleContacts.map(({ name, number, id }) => (
        <li className={css.item} key={id}>
          <p className={css.info}>{name + ' : ' + number}</p>
          <button
            className={css.btnList}
            onClick={() =>  dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
