import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';


const PageTitle = ({ title }) => {
    return (
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>
                        {title} | Toys Wizards
                    </title>
                </Helmet>
            </div>
        </HelmetProvider>
    );
};

export default PageTitle;