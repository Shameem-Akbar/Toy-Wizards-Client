import React from 'react';
import PageTitle from '../../components/PageTitle/PageTitle';

const About = () => {
    return (
        <div>
            <PageTitle title='About'></PageTitle>
            <div className='px-2 lg:px-16 py-2 md:py-8 text-white bg-primary' >
                <h2 className='text-center text-5xl font-semibold py-5'>About</h2>
            </div>
        </div>
    );
};

export default About;