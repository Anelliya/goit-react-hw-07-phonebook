import { createReducer } from "@reduxjs/toolkit";

import actions from '../actions/phonebook-actions';

const errorReducer = createReducer (false, {
    [actions.getContactsRequest]: () => false,
    [actions.getContactsSuccess]: () => false,
    [actions.getContactsError]: () => true,
})

export default errorReducer;