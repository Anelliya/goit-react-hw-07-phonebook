import {createReducer} from '@reduxjs/toolkit';

import actions from '../actions/phonebook-actions';

const contactsReducer = createReducer(null, {
    [actions.getContactsSuccess]: (_, { payload }) => [...payload],
    [actions.getContactsError]: (_, { payload }) => console.log('get request error', payload),

    [actions.addContactSuccess]: (state, {payload}) => [...state, payload],
    [actions.addContactError]: (_, { payload }) => console.log('post request error', payload),
    
    [actions.deleteContactsSuccess]: (state, { payload }) => state.filter((item) => item.id !== payload),
    [actions.deleteContactError]: (_, { payload }) =>console.log('delete request error', payload),
    })

export default contactsReducer;