import {createReducer} from '@reduxjs/toolkit';

import actions from '../actions/phonebook-actions';

const loadingReducer = createReducer( true, {
    [actions.getContactsRequest]: () => true,
    [actions.getContactsSuccess]: () => false,
    [actions.getContactsError]: () => false,

})

export default loadingReducer;