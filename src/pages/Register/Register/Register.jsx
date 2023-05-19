import React, { useContext, useState } from 'react';
import PageTitle from '../../../components/PageTitle/PageTitle';
import { ImGoogle3 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import register from '../../../assets/icons/register.svg'
import { HelmetProvider } from 'react-helmet-async';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { GoogleAuthProvider } from 'firebase/auth';

const Register = () => {
    const [show, setShow] = useState(false);
    const [error, setError] = useState("")

    const { createUser, profileUpdate, handleGoogleLogin, setUser } = useContext(AuthContext);

    const googleProvider = new GoogleAuthProvider();

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        setError("");

        if (password.length < 6) {
            setError('Password must be 6 characters longer')
            return;
        }

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                Swal.fire(
                    {
                        icon: 'success',
                        title: 'User Registered Successfully!',
                        timer: '2000',
                        showConfirmButton: false,
                    }
                )
                profileUpdate(name, photo)
                    .then(() => {
                        // Navigate(from, { replace: true });
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                if (error.message.split(' ')[2]) {
                    setError("Email Already Exists")
                }
            })
    }

    const handleGoogleSignIn = () => {
        handleGoogleLogin(googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                // navigate(from, {replace: true});
                setUser(loggedInUser);
            })
            .catch(error => console.log(error))
    }


    return (
        <HelmetProvider>
            <div className='py-8 md:py-20 bg-slate-50'>
                <PageTitle title='Register'></PageTitle>
                <div className="flex flex-row justify-center">
                    <div className="flex-col hidden md:flex self-center px-10 sm:max-w-5xl md:max-w-xl">
                        <div className="  ">
                            <img width={"490rem"} src={register} />
                        </div>
                    </div>
                    <div className="flex justify-center self-center rounded-2xl border shadow-lg">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="font-semibold text-4xl text-gray-800 text-center">Register</h3>

                            </div>
                            <form onSubmit={handleRegister}>
                                <div className="space-y-2">
                                    <div className="space-y-2">
                                        <label className="text-md font-medium text-gray-700 tracking-wide">Name</label>
                                        <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-gray-400" type="text" name='name' placeholder="Enter your name" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-md font-medium text-gray-700 tracking-wide">Photo URL</label>
                                        <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-gray-400" type="url" name='photo' placeholder="Enter your photo url" required />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-md font-medium text-gray-700 tracking-wide">Email</label>
                                        <input className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-gray-400" type="email" name='email' placeholder="Enter your email" required />
                                    </div>
                                    <div>
                                        <div className='flex justify-between mb-2'>
                                            <label className="text-md font-medium text-gray-700 tracking-wide">
                                                Password
                                            </label>
                                            <div className='flex justify-between'>
                                                <p className='uppercase font-semibold underline text-sm text-primary mr-2 cursor-pointer' onClick={() => setShow(!show)}><small>

                                                    {
                                                        show ? <span>Hide</span> : <span>Show</span>
                                                    }

                                                </small></p>
                                            </div>
                                        </div>
                                        <input className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-gray-400" type={show ? "text" : "password"} name='password' placeholder="Enter your password" required />
                                    </div>
                                    {
                                        error &&
                                        <p className='text-red-600 text-center'>{error}</p>
                                    }
                                    <div>
                                        <button type="submit" className="w-full btn btn-primary rounded-full text-white ">
                                            Register
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <div className='mt-2' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <hr style={{ width: '50%', borderBottom: '1px solid black' }} />
                                <span className='px-2 text-slate-500'>OR</span>
                                <hr style={{ width: '50%', borderBottom: '1px solid black' }} />
                            </div>
                            <button onClick={handleGoogleSignIn} type="submit" className="mt-2 w-full btn btn-info rounded-full text-white">
                                <ImGoogle3 className='mr-2 text-xl'></ImGoogle3> Login with Google
                            </button>
                            <p className='text-center mt-2'><small>Already have an account? <span className='text-primary font-semibold underline'>
                                <Link to='/login'>Login</Link>
                            </span></small></p>
                        </div>
                    </div>
                </div>
            </div >
        </HelmetProvider>
    );
};

export default Register;