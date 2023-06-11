import React from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { Helmet } from 'react-helmet';

const ErrorPage = () => {
    return (
        <>
            <Helmet>
                <title>MindFulness || Error</title>
            </Helmet>
            <div className='flex relative justify-center'>
                <img className='h-screen w-full' src="https://i.ibb.co/G5y4xPL/HTML-404-Error-Page.gif" alt="HTML-404-Error-Page" />
                <Link className='absolute bottom-10' to='/'><button className='btn'><HiArrowLeft className='w-5 h-5 mx-2' />Back To Home</button></Link>
            </div>
        </>
    );
};

export default ErrorPage;
