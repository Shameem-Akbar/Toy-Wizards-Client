import React from 'react';
import logo from '../../../assets/icons/logo.png'
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';

const NavigationBar = () => {

    const handleLogOut = () => {

    }

    return (
        <div className="navbar bg-base-100 px-2 lg:px-20 py-2 md:py-5">
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
                        <li className="hover-bordered uppercase"><ActiveLink to='/blogs'>Blogs</ActiveLink></li>
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
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/blogs'>Blog</ActiveLink></li>
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/about'>About</ActiveLink></li>
                    <li className='font-semibold text-lg uppercase'><ActiveLink to='/contact'>Contact</ActiveLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="mr-1">
                    <div className="form-control relative hidden md:block">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                        <button type="submit" className="absolute top-0 right-0 p-[0.83rem]  text-white bg-primary border-primary hover:bg-red-700 rounded-r-lg border  ">
                            <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </button>
                    </div>
                </div>
                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><Link>Profile</Link></li>
                        <li><Link>Settings</Link></li>
                        <li onClick={handleLogOut}><Link>Logout</Link></li>
                    </ul>
                </div> */}
                <Link to='/login' className="btn btn-primary btn-sm md:btn-md text-white">Login</Link>
            </div>
        </div>
    );
};

export default NavigationBar;