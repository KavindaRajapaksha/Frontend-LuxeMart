import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../components/Layout/Header';

const Login = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <Header />
            <div className='login-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='auth-card p-8 mx-auto max-w-md bg-white border border-gray-300 border-solid'>
                                <h3 className='text-center mb-5 text-2xl font-bold'>Sign In</h3>
                                <form action="" className='text-center'>
                                    <div className='mb-4'>
                                        <input
                                            type='email'
                                            name='email'
                                            placeholder='Email'
                                            className='form-control mx-auto' />
                                    </div>
                                    <div className='mb-4'>
                                        <input
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            className='form-control mx-auto' />
                                    </div>
                                    {/* <div className='d-flex align-items-center mt-2'>
                                        <input
                                            type='checkbox'
                                            name='rememberMe'
                                            className='form-check-input'
                                        />
                                        <label className='form-check-label ms-2'>Remember Me</label>

                                        <Link to="/forgot-password" className='auth-card-link d-flex'>Forgot Password?</Link>
                                    </div> */}
                                    <div className='d-flex justify-content-center mt-4'>
                                        <Link to="/signIn" className='button2'>Login</Link>
                                    </div>
                                    <div>
                                        <h9>Don't have an account?</h9>
                                        <Link to="/signup" className='auth-card-signup' >Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
