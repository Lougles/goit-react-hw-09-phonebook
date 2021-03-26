  
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {createContact, fetchContacts} from '../../redux/contact/contact-operation';

const initialState = {
  name: '',
  number: '',
};
const ContactForm = () => {
  const [state, setState] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [])

  const handleInput = e => {
    const { name, value } = e.target;
    setState(prevState => ({...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(createContact(state));
    setState(initialState);
  };

    const { name, number } = state;
    return (
      <form className="Searchbar" onSubmit={handleSubmit}>
        <label>
          Имя:
          <input
            className="SearchForm"
            name="name"
            type="text"
            onChange={handleInput}
            value={name}
          />
        </label>
        <label>
          Номер:
          <input
            className="SearchForm"
            name="number"
            type="number"
            onChange={handleInput}
            value={number}
          />
        </label>
        <button className="Button" type="submit">Сохранить</button>
      </form>
    );
}
export default ContactForm;