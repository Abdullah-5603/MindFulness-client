import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <div className="flex justify-between navbar md:px-5 bg-base-300 h-20">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <div tabIndex={0} className='md:space-x-8 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28'>
                        <Link className={location.pathname === '/' && 'text-[#8dc7ea]'} to='/'>Home</Link>
                        <Link className={location.pathname === '/allToys' && 'text-[#8dc7ea]'} to='/allToys'>All Toys</Link>
                        <Link className={location.pathname === '/blog' && 'text-[#8dc7ea]'} to='/blog'>Blog</Link>
                    </div>
                </div>
                <div className='flex items-center md:space-x-5 px-3 md:px-5'>
                    <img className='w-24 -ml-5 md:-mr-5' src="https://i.ibb.co/59GRBKK/logo.png" alt="logo" border="0" />
                    <p className=" text-xl hidden md:block md:text-3xl md:font-bold">MindFulness</p>
                </div>
            </div>
            <div className='md:space-x-8 font-bold hidden md:flex'>
                <Link className={location.pathname === '/' && 'text-[#8dc7ea]'} to='/'>Home</Link>
                <Link className={location.pathname === '/allToys' && 'text-[#8dc7ea]'} to='/allToys'>All Toys</Link>
                <Link className={location.pathname === '/blog' && 'text-[#8dc7ea]'} to='/blog'>Blog</Link>
                <Link className={location.pathname === '/login' && 'text-[#8dc7ea]'} to='/login'>login</Link>
            </div>
        </div>
    );
};

export default NavBar;