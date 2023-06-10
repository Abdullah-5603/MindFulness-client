import React from 'react';
import {Outlet} from 'react-router-dom'
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';
import { useAuth } from '../Hooks/useAuth';
import { ThemeProvider } from 'daisyui';

const Main = () => {
    const {bgColor} = useAuth()
    return (
        <div className=''>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;