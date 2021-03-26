import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contact/contact-operation';
import {getFilteredContacts, getLoading} from '../../redux/contact/contact-selectors';

const ContactList = () => {

  const dispatch = useDispatch();

  const contacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoading);
  
  const onHandleChange = e => {
    dispatch(deleteContact(e.target.id));
  };
  return (
    <>
    {loading && <h3>..Загрузка..</h3>}
      <ul>
        {contacts.map(({ name, id, number }) => (
          <li key={id}>
            <p>
              {`Имя: ${name} | Номер: ${number}`}
              <button className="Button" id={id} type="button" onClick={onHandleChange}>
                Удалить
              </button>
            </p>
          </li>
        ))}
        </ul>
    </>
  );
};

export default ContactList;