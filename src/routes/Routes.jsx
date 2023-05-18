import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../layout/LoginLayout/LoginLayout';
import Main from '../layout/Main/Main';
import PageNotFound from '../layout/PageNotFound/PageNotFound';
import Login from '../pages/Login/login';
import Register from '../pages/Register/Register/Register';
import Terms from '../pages/Register/Terms/Terms';
import Blog from '../pages/Blog/Blog';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/home'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/terms',
                element: <Terms></Terms>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
    {
        path: '/home',
        element: <Main></Main>
    },
    {
        path: '*',
        element: <PageNotFound></PageNotFound>
    }
])

export default router;