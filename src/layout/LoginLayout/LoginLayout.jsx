import React, { useContext } from 'react';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar/NavigationBar';
import Footer from '../../pages/shared/Footer/Footer';
import { AuthContext } from '../../providers/AuthProvider';
import banner from '../../assets/icons/banner.jpg'

const LoginLayout = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center mt-48'><progress className="progress progress-primary w-56"></progress></div>
    }

    return (
        <div style={{ backgroundColor: '#0B1320' }}>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default LoginLayout;