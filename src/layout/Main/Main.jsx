import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar/NavigationBar';
import Footer from '../../pages/shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <h2>Main</h2>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;