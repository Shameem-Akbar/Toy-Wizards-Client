import React from 'react';
import logo from '../../../assets/logo.png'
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';

const NavigationBar = () => {
    return (
        <div className="navbar bg-base-100 px-2 lg:px-20 py-2 md:py-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded w-52">
                        <li className="hover-bordered uppercase"><ActiveLink to='/home'>Home</ActiveLink></li>
                        <li className="hover-bordered uppercase"><ActiveLink to='/all-toys'>All Toys</ActiveLink></li>
                        <li className="hover-bordered uppercase"><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                        <li className="hover-bordered uppercase"><ActiveLink to='/add-a-toy'>Add A Toy</ActiveLink></li>
                        <li className="hover-bordered uppercase"><ActiveLink to='/blog'>Blogs</ActiveLink></li>
                        <li className="hover-bordered uppercase"><ActiveLink to='/about'>About</ActiveLink></li>
                        <li className="hover-bordered uppercase"><ActiveLink to='/contact'>Contact</ActiveLink></li>
                    </ul>
                </div>
                <Link to='/home'><img width={"240rem"} src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/home'>Home</ActiveLink></li>
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/all-toys'>All Toys</ActiveLink></li>
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/add-a-toy'>Add A Toy</ActiveLink></li>
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/about'>About</ActiveLink></li>
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/contact'>Contact</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn btn-primary btn-sm md:btn-md text-white">Login</Link>
            </div>
        </div>
    );
};

export default NavigationBar;