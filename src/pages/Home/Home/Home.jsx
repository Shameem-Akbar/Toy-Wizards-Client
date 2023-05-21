import React from 'react';
import Banner from '../Banner/Banner';
import NewsLetter from '../NewsLetter.jsx/NewsLetter';
import Events from '../Events/Events';
import AboutUs from '../AboutUs/AboutUs';
import UpcomingToys from '../UpcomingToys/UpcomingToys';
import ShopNow from '../ShopNow/ShopNow';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <ShopNow></ShopNow>
            <UpcomingToys></UpcomingToys>
            <Events></Events>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;