import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import {Helmet} from "react-helmet";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data  =>{
        console.log(data);
    }

    return (
        <>
        <Helmet>
            <title>MindFulness || Login</title>
        </Helmet>
        <div className='my-10 mx-auto w-2/3 md:w-1/3 bg-gray-200 p-10 shadow-2xl rounded-lg flex flex-col' >
            <p className='text-4xl font-bold text-center mb-5'>Login</p>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-xl font-semibold mb-3'>Email</label>
                <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email')} />
                <label className='text-xl font-semibold mb-3'>Password</label>
                <input placeholder='Password' className='mb-5 p-3 focus:outline-none' type='password' {...register('password', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <p className='mb-3'>Have not any account ? <Link to='/sign-up'><span className='underline'>Cerate Account</span></Link></p>
                <button type='submit' className='btn  btn-primary font-bold'>Login</button>
            </form>
                <div className='divider'>Or</div>
                <div className='flex items-center justify-evenly w-full py-3 px-2 md:px-10 mx-auto border-2 mt-3 border-gray-500 rounded-full'><FcGoogle className='w-7 h-7'/> <p className='font-bold md:text-xl text-center'>Sign in with Google</p></div>
        </div>
        </>
    );
};

export default Login;