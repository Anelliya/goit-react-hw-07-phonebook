import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import styles from './styles/PhoneBook.module.css';

function Contacs() {
  
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

export default Contacs;