import { connect } from 'react-redux'
import styles from './styles/PhoneBook.module.css';
import actions from '../../redux/contacts/actions/phonebook-actions'
import selectors from '../../redux/contacts/contactsSelectors'


const Filter = ({ contacts, filter, handleFilterValue }) => {
  
  return (
   (contacts?.length > 1)  &&
    <label className={styles.findField}>
      Find contacts by name:{' '}
      <input
        type="text"
        name=""
         value={filter}
        onChange={handleFilterValue}
        className={styles.findInput}
      />
    </label>
  );
};

const mapStateToProps = (state) => {
  return {
    contacts: selectors.getItems(state),
    filter: selectors.getFilter(state),
  }
}

const mapDispathcToProps = dispatch => {
  return {
    handleFilterValue: (event) => dispatch(actions.filterContacts(event.target.value))
          }
}
export default connect(mapStateToProps, mapDispathcToProps)(Filter);

