import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Layout/Header';

const SignUp = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <div>
                <Header />
                <div className='login-wrapper py-5 home-wrapper-2'>
                    <div className='container-xxl'>
                        <div className='row'>
                            <div className='col-12'>
                                <div className='auth-card p-8 mx-auto max-w-md bg-white border border-gray-300 border-solid'>
                                    <h3 className='text-center mb-5 text-2xl font-bold'>Sign Up</h3>
                                    <form action="" className='text-center'>
                                        <div className='mb-4'>
                                            <input
                                                type='text'
                                                name='name'
                                                placeholder='Name'
                                                className='form-control mx-auto' />
                                        </div>
                                        <div className='mb-4'>
                                            <input
                                                type='email'
                                                name='email'
                                                placeholder='Email'
                                                className='form-control mx-auto' />
                                        </div>
                                        <div className='mb-4'>
                                            <input
                                                type='text'
                                                name='username'
                                                placeholder='Username'
                                                className='form-control mx-auto' />
                                        </div>
                                        <div className='mb-4'>
                                            <input
                                                type='tel'
                                                name='mobile'
                                                placeholder='Mobile Number'
                                                className='form-control mx-auto' />
                                        </div>
                                        <div className='mb-4'>
                                            <input
                                                type='password'
                                                name='password'
                                                placeholder='Password'
                                                className='form-control mx-auto' />
                                        </div>
                                        <div>
                                            <div className='mt-6 flex justify-center'>
                                                <button type="submit" className='button2'>Create Account</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div className='text-center mt-4'>
                                        <p>Already have an account? <Link to="/login" className='text-blue-500'>Log in</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
