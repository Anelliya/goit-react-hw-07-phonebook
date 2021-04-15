import { connect, useDispatch } from 'react-redux'
import { useEffect, useState} from 'react';
import operations from '../../redux/contacts/contactsOperetions';
import Loader from 'react-loader-spinner';
import generateUniqueId from 'generate-unique-id';

import selectors from '../../redux/contacts/contactsSelectors'

import styles from './styles/PhoneBook.module.css';


const ContactList = ({ filteredContacts, error, loading, contacts, handleDeleteContact }) => {
  const dispatch = useDispatch();
  const [empty, setEmpty] = useState(false);
  
  useEffect(() =>  dispatch(operations.getContacts()), [])
  useEffect(() => contacts?.length===0 ? setEmpty(true) : setEmpty(false), [contacts])

  const handleClickBtn = (ev) => handleDeleteContact(ev.target.id);
 

  return (
    <div className={styles.contactList}>
      
      { loading && <Loader type="ThreeDots" color="#212121" height={50} width={50} className="Loader" />}
      { error && <p>Sorry, we can't display data in this moment, please try again later.</p>}

      <ul>
        {filteredContacts?.length > 0 &&
          filteredContacts?.map((item) => (
            <li key={generateUniqueId()} className={styles.contactsItem} width="70px">
              {item.name}: {item.number }
              <button id={item.id} onClick={handleClickBtn } className={styles.listBtn}>
                X
              </button>
            </li>
          ))
        }
        {empty && <p>Oh no! Your contact list is empty.</p>}
      </ul>
      
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filteredContacts: selectors.getFilterdContacts(state),
    contacts: selectors.getItems(state),
    loading: selectors.getLoading(state),
    error: selectors.getError(state)
  }
}

const mapDispathcToProps = dispatch => {
  return {
    handleDeleteContact: (id) => dispatch(operations.deleteContact(id)),
  }
}

export default connect(mapStateToProps, mapDispathcToProps) (ContactList);
