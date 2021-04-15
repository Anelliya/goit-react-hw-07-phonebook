import axios from "axios";
import actions from '../auth/auth-actions'
//import generateUniqueId from 'generate-unique-id';

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/"
const setAxiosHeaderToken = (token) => axios.defaults.headers.common.Authorization = `Bearer ${token}`;
const unsetAxiosHeaderToken = () => axios.defaults.headers.common.Authorization = ``;

const registration = (user) =>
    
    async dispatch => {
    
     dispatch(actions.registrationRequest());
     
     try {
        const response = await axios.post('/users/signup', user);
        setAxiosHeaderToken(response.data.token)
        dispatch(actions.registrationSuccess(response.data))
     } catch (error) {
          dispatch(actions.registrationError(error))
     }
    }
     
const login = (user) => 
     
    async dispatch => {
    
     dispatch(actions.loginRequest());
     
     try {
        const response = await axios.post('/users/login', user);
        setAxiosHeaderToken(response.data.token)
        dispatch(actions.loginSuccess(response.data))
     } catch (error) {
          dispatch(actions.loginError(error))
     }
    }

const logout = () =>
    
    async dispatch => {

        dispatch(actions.logoutRequest());
        
        try {
            await axios.post('/users/logout');
            unsetAxiosHeaderToken();
            dispatch(actions.logoutSuccess());  
        } catch (error) {
            dispatch(actions.logoutError(error))
        }
    }


const getUser = () => async(dispatch, getState) => {
    
    const { auth: { token: persistedToken } } = getState();

    if(!persistedToken){
        return;
    }
    setAxiosHeaderToken(persistedToken)

    dispatch(actions.getUserRequest());

    try {
        const response = await axios.get('/users/current');
        dispatch(actions.getUserSuccess(response.data))

    } catch (error) {
        dispatch(actions.getUserError(error.message))
    }
}

 export  default { registration, login, logout,  getUser };

