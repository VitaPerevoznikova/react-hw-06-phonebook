import React from 'react';
import css from './Filter.module.css';
import {  filterContact } from 'redux/contacts/filter.reducer';
import { useDispatch, useSelector } from 'react-redux';

export const Filter = () => {

  const dispatch = useDispatch();
  const filter = useSelector(state => state.filterStore);

  const onChangeFilter = event => {
    const { value } = event;
    dispatch(filterContact(value));
  };

  return (
    <label className={css.label}>
    Find contacts by name
    <input
      className={css.input}
      type="text"
      value={filter}
      onChange={e => onChangeFilter(e.target.value)}
    />
  </label>
);
}
