import { combineReducers, createReducer } from '@reduxjs/toolkit';
import actions from './auth-actions'

const initialUserState = {
    name: null,
    password: null
}

const user = createReducer(initialUserState, {
    [actions.registrationSuccess]: (_, { payload }) => payload.user,
    [actions.loginSuccess]: (_, { payload }) => payload.user,
    [actions.logoutSuccess]: () => initialUserState,
    [actions.getUserSuccess]: (_, { payload }) => payload,

    
});

const token = createReducer(null, {
    [actions.registrationSuccess]: (_, { payload }) => payload.token,
    [actions.loginSuccess]: (_, { payload }) => payload.token,
    [actions.logoutSuccess]: () => null,
});

 const error = createReducer(null, {
    [actions.registrationError]: (_, { payload }) => console.log('hello', payload),
    [actions.loginError]: (_, { payload }) => console.log('hello', payload),
    [actions.logoutError]: (_, { payload }) => payload,
    [actions.getUserError]: (_, { payload }) =>  payload
    
 })

const isAuthenticated = createReducer(false, {
    [actions.registrationSuccess]: () => true,
    [actions.registrationError]: () => false,
    [actions.loginSuccess]: () => true,
    [actions.logoutSuccess]: () => false,
    [actions.loginError]: () => false,
    [actions.getUserError]: () => false,
    [actions.getUserSuccess]: () => true,
})


export default combineReducers({
    user, token, error, isAuthenticated
})