import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { useAuth } from '../../Hooks/useAuth';
import Loader from '../Shared/Loader/Loader';

const Login = () => {
    const [show, setShow] = useState(true)
    const [error, setError] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { setUser, loading, setLoading, signInUser, googleSignInUser, updateUserProfile} = useAuth()
    const onSubmit = data => {
        
        setError('')

        signInUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            setLoading(false)
        })
        .catch(err =>{
            const errorMessage = err.message
            if (errorMessage === 'Firebase: Error (auth/invalid-email).') {
                setError('Please Input a valid email address')
                setLoading(false)
            } else if (errorMessage === 'Firebase: Error (auth/wrong-password).'){
                setError('wrong password. Please try again')
                setLoading(false)
            }

            console.log(errorMessage)
        })
        // console.log(data.photo[0].name);
    }
    const handleGoogleSignIn = () =>{
        googleSignInUser()
        .then(result =>{
            setUser(result.user)
            setLoading(false)
        })
        .catch(err =>{
            console.log(err.message)
            setLoading(false)
        })
    }

    return (
        <>
            <Helmet>
                <title>MindFulness || Login</title>
            </Helmet>
            <div className='my-10 mx-auto w-2/3 md:w-1/3 bg-gray-200 p-10 shadow-2xl rounded-lg flex flex-col'>
                {
                    loading && <Loader/>
                }
                <p className='text-4xl font-bold text-center mb-5'>Login</p>
                <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                    <label className='text-xl font-semibold mb-3'>Email</label>
                    <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email', {required: true})} />
                    {errors?.email?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
                    <label className='text-xl font-semibold mb-3'>Password</label>
                    <div className='relative w-full'>
                        <input placeholder='Password' className='mb-5 w-full p-3 focus:outline-none' type={show ? 'text' : 'password'} {...register('password', { required: true })}/>
                        <div onClick={()=> setShow(!show)} className='absolute inset-y-0 right-3 top-3.5'>
                            {show ? <FaEye className='w-5 h-5' /> : <FaEyeSlash className='w-5 h-5' />}
                        </div>
                    </div>
                    {errors?.password?.type === 'required' && <p className='text-red-800 mb-2'>This field is required</p>}
                    <p className='mb-3'>Have not any account ? <Link to='/sign-up'><span className='underline'>Cerate Account</span></Link></p>
                    <p className='text-red-800 py-3'>{error}</p>
                    <button type='submit' className='btn  btn-primary font-bold'>Login</button>
                </form>
                <div className='divider'>Or</div>
                <div onClick={handleGoogleSignIn} className='cursor-pointer flex items-center justify-evenly w-full py-3 px-2 md:px-10 mx-auto border-2 mt-3 border-gray-500 rounded-full'><FcGoogle className='w-7 h-7' /> <p className='font-bold md:text-xl text-center'>Sign in with Google</p></div>
            </div>
        </>
    );
};

export default Login;