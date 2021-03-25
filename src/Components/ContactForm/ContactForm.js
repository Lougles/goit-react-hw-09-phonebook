  
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {createContact, fetchContacts} from '../../redux/contact/contact-operation';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  componentDidMount (){
    this.props.fetchContacts();
  }

  handleInput = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onCreateContact(this.state);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="Searchbar" onSubmit={this.handleSubmit}>
        <label>
          Имя:
          <input
            className="SearchForm"
            name="name"
            type="text"
            onChange={this.handleInput}
            value={name}
          />
        </label>
        <label>
          Номер:
          <input
            className="SearchForm"
            name="number"
            type="number"
            onChange={this.handleInput}
            value={number}
          />
        </label>
        <button className="Button" type="submit">Сохранить</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onCreateContact: ({ name, number }) =>
    dispatch(createContact({ name, number })),
  fetchContacts: () => dispatch(fetchContacts())
  });

export default connect(null, mapDispatchToProps)(ContactForm);