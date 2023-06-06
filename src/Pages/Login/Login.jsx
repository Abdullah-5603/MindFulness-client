import React from 'react';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data  =>{
        console.log(data);
    }

    return (
        <div className='my-10 mx-auto w-2/3 md:w-1/3 bg-gray-200 p-10 shadow-2xl rounded-lg' >
            <p className='text-4xl font-bold text-center mb-5'>Login</p>
            <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
                <label className='text-xl font-semibold mb-3'>Email</label>
                <input placeholder='Email' className='mb-5 p-3 focus:outline-none' {...register('email')} />
                <label className='text-xl font-semibold mb-3'>Password</label>
                <input placeholder='Password' className='mb-5 p-3 focus:outline-none' {...register('password', { required: true })} />
                {errors.lastName && <p>Last name is required.</p>}
                <p>Have not any account ? <span className='underline'>Cerate Account</span></p>
                <button type='submit' className='btn  btn-primary font-bold'>Login</button>
            </form>
        </div>
    );
};

export default Login;