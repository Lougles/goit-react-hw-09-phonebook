import React, { useEffect } from 'react';
import Container from '../Components/Container/Container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contact/contact-operation';

const ContactView = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts);
  }, [])

    return (
      <Container>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    );
}
export default ContactView;