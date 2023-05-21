import React, { useContext } from 'react';
import { ScrollRestoration } from 'react-router-dom';
import NavigationBar from '../../pages/shared/NavigationBar/NavigationBar';
import Footer from '../../pages/shared/Footer/Footer';
import PageTitle from '../../components/PageTitle/PageTitle';
import Home from '../../pages/Home/Home/Home';
import { AuthContext } from '../../providers/AuthProvider';
import banner from '../../assets/icons/banner.jpg'

const Main = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center mt-48'><progress className="progress progress-primary w-56"></progress></div>
    }
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: 'no-repeat', height: "100vh", backgroundSize: "100vw" }}>
            <PageTitle title="Home"></PageTitle>
            <NavigationBar></NavigationBar>
            <Home></Home>
            {/* <Footer></Footer> */}
            <ScrollRestoration></ScrollRestoration>
        </div>
    );
};

export default Main;