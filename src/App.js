import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

import styles from './components/styles/PhoneBook.module.css';
import './App.css';

function App() {
  
  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts: </h2>
      <Filter  />
      <ContactList />
    </div>
  )
}

export default App;
