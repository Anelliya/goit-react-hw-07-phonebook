import { createAction } from '@reduxjs/toolkit';


const actions = {
    getContactsRequest: createAction("phonebook/get_contacts_request"),
    getContactsSuccess: createAction("phonebook/get_contacts_success"),
    getContactsError: createAction("phonebook/get_contacts_error"),

    addContactRequest: createAction("phonebook/add_contacts_request"),
    addContactSuccess: createAction("phonebook/add_contacts_success"),
    addContactsError: createAction("phonebook/add_contacts_error"),

    deleteContactsRequest: createAction("phonebook/delete_contacts_request"),
    deleteContactsSuccess: createAction("phonebook/delete_contacts_success"),
    deleteContactsError: createAction("phonebook/delete_contacts_error"),
    
    filterContacts: createAction("phonebook/filter_contacts"),
}




export default actions
