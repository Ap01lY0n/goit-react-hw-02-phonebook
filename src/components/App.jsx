import React, { Component } from 'react';
import { PhoneBookForm } from './PhoneBookForm/PhoneBookForm';
import { nanoid } from 'nanoid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import { Title } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onFormSubmit = newContact => {
    const hasContact = this.state.contacts.some(
      ({ name }) => name.toLowerCase() === newContact.name.toLowerCase()
    );
  
    const isNumberExists = this.state.contacts.some(
      ({ number }) => number === newContact.number
    );
  
    if (hasContact) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
  
    if (isNumberExists) {
      alert(`${newContact.number} is already in contacts.`);
      return;
    }
  
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
    }));
  };
  
  onDeleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactId
        ),
      };
    });
  };

  onFilterInput = value => {
    this.setState(() => ({
      filter: `${value.toLowerCase().trim()}`,
    }));
  };

  filterVisibleContacts = () => {
    return this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(this.state.filter);
    });
  };

  render() {
    const visibleContacts = this.filterVisibleContacts();
    return (
      <div>
        <Title>Phonebook</Title>
        <PhoneBookForm
          onAddContact={this.onFormSubmit}
        />
        <Filter onChange={this.onFilterInput} />
        <Title>Contacts</Title>
        <Contacts contacts={visibleContacts} onDelete={this.onDeleteContact} />
      </div>
    );
  }
}
export default App;