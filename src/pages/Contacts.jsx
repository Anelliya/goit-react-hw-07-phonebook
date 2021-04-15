import ContactForm from '../components/contacts/ContactForm'
import Filter from '../components/contacts/Filter'
import ContactList from '../components/contacts/ContactList'

import styles from '../components/contacts/styles/PhoneBook.module.css'


const Contacts = () => {
    return (
           <div className={styles.container}>
                <ContactForm />
                <h2>Contacts: </h2>
                <Filter  />
                <ContactList />
            </div>
        )
}
export default Contacts;