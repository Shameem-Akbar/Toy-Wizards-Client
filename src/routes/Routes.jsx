import React from 'react';
import { Navigate, createBrowserRouter } from 'react-router-dom';
import LoginLayout from '../layout/LoginLayout/LoginLayout';
import Main from '../layout/Main/Main';
import PageNotFound from '../layout/PageNotFound/PageNotFound';
import Register from '../pages/Register/Register/Register';
import Terms from '../pages/Register/Terms/Terms';
import About from '../pages/About/About';
import Contact from '../pages/Contact/Contact';
import Blogs from '../pages/Blogs/Blogs';
import AddToy from '../pages/AddToy/AddToy';
import MyToys from '../pages/MyToys/MyToys';
import AllToys from '../pages/AllToys/AllToys';
import SingleToy from '../pages/SingleToy/SingleToy';
import PrivateRoute from './PrivateRoute';
import Login from '../pages/Login/Login';

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
                path: '/blogs',
                element: <Blogs></Blogs>,
                loader: () => fetch('/blog.json')
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/add-toy',
                element: <AddToy></AddToy>
            },
            {
                path: '/my-toys',
                element: <MyToys></MyToys>
            },
            {
                path: '/all-toys',
                element: <AllToys></AllToys>
            },
            {
                path: '/toy/:id',
                element: <PrivateRoute><SingleToy></SingleToy></PrivateRoute>,
                loader: ({ params }) => fetch(`https://toy-wizards-server.vercel.app/toy/${params.id}`)
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