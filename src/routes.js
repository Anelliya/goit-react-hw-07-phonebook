import { lazy } from 'react';

const Registration = lazy(() => {
    return import('./pages/Registration' /* webpackChunkName: "registration" */);
})

const Login = lazy(() => {
    return import('./pages/Login' /* webpackChunkName: "login" */);
})

const Contacts = lazy(() => {
    return import('./pages/Contacts'  /* webpackChunkName: "contacts" */)
})

const MainPage = lazy(() => {
    return import('./pages/MainPage' /* webpackChunkName: "main page" */)
})


const routes = [
    {
        key: 1,
        path: '/registration',
        private: false,
        redirect: '/contacts',
        component: Registration,
        exact: true
    },
    {
        key: 2,
        path: '/login',
        private: false,
        redirect: '/contacts',
        component: Login,
        exact: true
    },
    {
        key: 3,
        path: '/contacts',
        redirect: '/login',
        private: true,
        component: Contacts,
        exact: true
    },
    {
        key: 4,
        path: '/',
        redirect: '/contacts',
        private: false,
        component: MainPage,
        exact: false
    }
]

export default routes;