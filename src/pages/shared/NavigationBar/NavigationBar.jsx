import React, { useContext } from 'react';
import logo from '../../../assets/icons/logo.png'
import { Link } from 'react-router-dom';
import ActiveLink from './ActiveLink/ActiveLink';
import { AuthContext } from '../../../providers/AuthProvider';
import { Tooltip } from 'react-tooltip';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut();
    }

    return (
        <div className='px-2 md:px-12 py-2'>
            <div className="navbar bg-transparent px-2 lg:px-8 py-2 md:py-5 border border-gray-600 shadow-md shadow-slate-600">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 shadow bg-base-100 rounded w-52">
                            <li className="hover-bordered uppercase"><ActiveLink to='/home'>Home</ActiveLink></li>
                            <li className="hover-bordered uppercase"><ActiveLink to='/all-toys'>All Toys</ActiveLink></li>
                            {
                                user &&
                                <li className="hover-bordered uppercase"><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                            }
                            {
                                user &&
                                <li className="hover-bordered uppercase"><ActiveLink to='/add-toy'>Add A Toy</ActiveLink></li>
                            }
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
                        {
                            user &&
                            <li className='font-semibold text-lg uppercase'><ActiveLink to='/my-toys'>My Toys</ActiveLink></li>
                        }
                        {
                            user &&
                            <li className='font-semibold text-lg uppercase'><ActiveLink to='/add-toy'>Add A Toy</ActiveLink></li>
                        }
                        <li className='font-semibold text-lg uppercase'><ActiveLink to='/blogs'>Blogs</ActiveLink></li>
                        <li className='font-semibold text-lg uppercase'><ActiveLink to='/about'>About</ActiveLink></li>
                        <li className='font-semibold text-lg uppercase'><ActiveLink to='/contact'>Contact</ActiveLink></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ?
                            <div className="flex gap-1">
                                <label className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full" data-tooltip-id="my-tooltip"
                                        data-tooltip-content={user.displayName}>
                                        <img src={user.photoURL} />
                                        <Tooltip
                                            id="my-tooltip"
                                            style={{ backgroundColor: "black", color: "white" }} />
                                    </div>
                                </label>
                                <button onClick={handleLogOut} className="btn btn-primary btn-sm md:btn-md text-white">Log Out</button>
                            </div> :
                            <Link to='/login' className="btn btn-primary btn-sm md:btn-md text-white">Login</Link>}
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;