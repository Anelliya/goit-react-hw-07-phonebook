import axios from "axios";
import actions from './actions/phonebook-actions'
import generateUniqueId from 'generate-unique-id';


 const getContacts = () => (dispatch) => {
    
    dispatch(actions.getContactsRequest());

    axios
        .get('http://localhost:4040/contacts')
        .then(({ data }) => dispatch(actions.getContactsSuccess(data)))
        .catch(err => dispatch(actions.getContactsError(err)))
 }

const addContact = (newContact) => (dispatch) => {
    const id = generateUniqueId();
    const newItem = { id, ...newContact};
    
    dispatch(actions.addContactRequest());

    axios
        .post('http://localhost:4040/contacts', newItem)
        .then(() => dispatch(actions.addContactSuccess(newItem)))
        .catch(err =>  dispatch(actions.addContactError(err)) )
}
 
const deleteContact = (id) => dispatch => {

    dispatch(actions.deleteContactsRequest())

    axios.delete(`http://localhost:4040/contacts/${id}`)
        .then(() => dispatch(actions.deleteContactsSuccess(id)))
        .catch((err) => dispatch(actions.deleteContactsError(err)))
}

export  default { getContacts , addContact, deleteContact };

