import axios from "axios";
import actions from './actions/phonebook-actions'


 const getContacts = () => (dispatch) => {
    
    dispatch(actions.getContactsRequest());

    axios
        .get('/contacts')
        .then(({ data }) => dispatch(actions.getContactsSuccess(data)))
        .catch(err => dispatch(actions.getContactsError(err)))
 }

const addContact = (newContact) => (dispatch) => {
   // const id = generateUniqueId();
  //  const newItem = { id, ...newContact};
    
    dispatch(actions.addContactRequest());
    
    axios
        .post("/contacts", newContact)
        .then(({data}) => dispatch(actions.addContactSuccess(data)))
        .catch(err =>  dispatch(actions.addContactsError(err)) )
}
 
const deleteContact = (id) => dispatch => {

    dispatch(actions.deleteContactsRequest())

    axios.delete(`/contacts/${id}`)
        .then(() => dispatch(actions.deleteContactsSuccess(id)))
        .catch((err) => dispatch(actions.deleteContactsError(err)))
}


export  default { getContacts , addContact, deleteContact };

