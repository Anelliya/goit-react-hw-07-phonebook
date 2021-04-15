const isAuthentificated = (state) => state.auth.isAuthenticated;
const getUser = (state) => state.auth.user;
const getToken = (state) => state.auth.token;

export default { isAuthentificated, getUser, getToken }