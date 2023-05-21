import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';
import { HelmetProvider } from 'react-helmet-async';

const About = () => {
    return (
        <HelmetProvider>
            <div>
                <PageTitle title='About'></PageTitle>
                <div className='px-2 lg:px-16 bg-gray-200 py-2 md:py-5' >
                    <h2 className='text-center text-5xl font-semibold py-5'>About</h2>
                </div>
            </div>
        </HelmetProvider>
    );
};

export default About;