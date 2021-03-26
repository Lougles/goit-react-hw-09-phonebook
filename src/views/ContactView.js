import React from 'react';
import Container from '../Components/Container/Container';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import { connect } from 'react-redux';
import { fetchContacts } from '../redux/contact/contact-operation';
import {getLoading} from '../redux/contact/contact-selectors';


const ContactView = () => {

  componentDidMount() {
    this.props.fetchContacts();
  }


  render() {
    return (
      <Container>
        <ContactForm />
        <Filter />
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: getLoading(state),
})

const mapDispatchToProps = {
  fetchContacts: fetchContacts,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactView);