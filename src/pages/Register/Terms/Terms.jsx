import React from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { HelmetProvider } from 'react-helmet-async';

const Terms = () => {
    return (
        <HelmetProvider>
            <div>
                <PageTitle title="Terms & Conditions"></PageTitle>
                <h2>Terms</h2>
            </div>
        </HelmetProvider>
    );
};

export default Terms;