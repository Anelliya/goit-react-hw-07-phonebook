import { createAction } from '@reduxjs/toolkit';

const actions = {
    registrationRequest: createAction("auth/registration_request"),
    registrationSuccess: createAction("auth/registration_success"),
    registrationError: createAction("auth/registration_error"),

    loginRequest: createAction("auth/login_request"),
    loginSuccess: createAction("auth/login_success"),
    loginError: createAction("auth/login_error"),

    logoutRequest: createAction("auth/logout_request"),
    logoutSuccess: createAction("auth/logout_success"),
    logoutError: createAction("auth/logout_error"),

    getUserRequest: createAction("auth/getUser_request"),
    getUserSuccess: createAction("auth/getUser_success"),
    getUserError: createAction("auth/getUser_error"),

}

export default actions;





