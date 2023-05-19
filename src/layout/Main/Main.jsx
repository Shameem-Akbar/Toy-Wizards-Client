import React, { useContext } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar/NavigationBar';
import Footer from '../../pages/shared/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Home from '../../pages/Home/Home/Home';
import { AuthContext } from '../../providers/AuthProvider';

const Main = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center mt-48'><progress className="progress progress-primary w-56"></progress></div>
    }
    return (
        <div>
            <PageTitle title="Home"></PageTitle>
            <NavigationBar></NavigationBar>
            <Home></Home>
            {/* <Footer></Footer> */}
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;