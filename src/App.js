import { useState, useEffect } from 'react';
import shortId from 'shortid';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('phonebookContacts')) {
      localStorage.setItem(
        'phonebookContacts',
        JSON.stringify([
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ]),
      );
    }
    setContacts(JSON.parse(localStorage.getItem('phonebookContacts')));
  }, []);

  useEffect(() => {
    localStorage.setItem('phonebookContacts', JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    const allNames = contacts.map(contact => contact.name.toLowerCase());
    if (allNames.includes(data.name.toLowerCase())) {
      alert(`${data.name} is already in contacts.`);
      return;
    }
    const contact = {
      id: shortId.generate(),
      name: data.name,
      number: data.number,
    };
    setContacts(prev => [...prev, contact]);
  };

  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  const deleteContact = contactId => {
    setContacts(prev => prev.filter(contact => contact.id !== contactId));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={setFilter} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </>
  );
}
