import {createReducer} from '@reduxjs/toolkit';

import actions from '../actions/phonebook-actions';


const filterReducer = createReducer('', {
    [actions.filterContacts]: (_, {payload}) => payload
})

export default filterReducer;