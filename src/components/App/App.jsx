import { useState, useMemo } from "react";
import { useLS } from '../../hooks/useLS';
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";

import "./App.css";

function App() {
  const [contacts, setContacts] = useLS('allContacts', []);
  const [filter, setFilter] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    name === "filter" && setFilter(value);
  };

  const addNewContact = (newContact) => {
    const isExists = contacts.some(
      (contact) => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    isExists
      ? alert(`${newContact.name} is already in contacts`)
      : setContacts((prev) => [...prev, newContact]);
  };

  const removeContact = (id) => setContacts(contacts.filter((contact) => contact.id !== id));

  const filteredContacts = useMemo(() => {
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  },[contacts, filter])

    
    return (
      <div className="App">
        <h1>Phonebook</h1>
        <ContactForm cbAddNewContact={addNewContact} />
        <h2>Contacts</h2>
        <div className="Contacts">
        <Filter filteringName={filter} cbInputChange={handleChange} />
        <ContactList
          filteredContacts={filteredContacts}
          cbRemoveContact={removeContact}
          />
          </div>
      </div>
    );
  }

export default App;
