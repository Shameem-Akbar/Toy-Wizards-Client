import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar/NavigationBar';
import Footer from '../../pages/shared/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Home from '../../pages/Home/Home/Home';

const Main = () => {
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <NavigationBar></NavigationBar>
            <Home></Home>
            {/* <Footer></Footer> */}
        </div>
    );
};

export default Main;