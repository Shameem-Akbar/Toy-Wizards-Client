import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <div className='flex justify-center max-h-screen'>
                <img className='md:w-5/12' src="../src/assets/404error.gif" alt="" />
            </div>
            <div className='flex justify-center'>
                <Link to='/home'>
                    <button className='btn btn-primary btn-wide text-white text-lg font-semibold'><FaArrowLeft className='mr-1'></FaArrowLeft>Go To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default PageNotFound;