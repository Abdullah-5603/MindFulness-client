import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../../../Hooks/useAuth';
import { FaBars, FaMoon, FaUser } from 'react-icons/fa';
import { BsFillSunFill} from 'react-icons/bs';

const Navbar = () => {
    const location = useLocation()
    const { user, signOutUser } = useAuth()
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

    const handleSignOut = () => {
        signOutUser()
            .then(() => { })
            .cath((err) => {
                console.log(err.message)
            })
    }

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("business");
        } else {
            setTheme("light");
        }
    };

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);
    console.log(theme)
    return (
        <div className="navbar fixed z-10 top-0 md:px-5 bg-opacity-30 bg-black md:h-20 text-white">
            <div className='w-full flex justify-between'>
                <div className='flex'>
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <div tabIndex={0} className='md:space-x-8 menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-28'>
                            <Link className={location.pathname === '/' && 'text-[#d86b5b]'} to='/'>Home</Link>
                            <Link className={location.pathname === '/instructors' && 'text-[#d86b5b]'} to='/instructors'>Instructors</Link>
                            <Link className={location.pathname === '/classes' && 'text-[#d86b5b]'} to='/classes'>Classes</Link>
                        </div>
                    </div>
                    <div className='flex items-center md:space-x-5 px-3 md:px-5'>
                        <img className='w-24 -ml-5 md:-mr-5' src="https://www.logomaker.com/api/main/images/1j+ojlxEOMkX9Wyqfhe43D6kh...KFqhNGkBvOwXs1M3EMoAJtligrhPBj...fgyPExevg9C3ktKMcs8" alt="logo" border="0" />
                        <p className=" text-xl hidden md:block md:text-3xl text-[#d86b5b] md:font-bold">MindFulness</p>
                    </div>
                </div>
                <div className='flex items-center space-x-2 md:hidden'>
                    {
                        theme === 'light' && <BsFillSunFill />
                    }
                    {
                        theme === 'business' && <FaMoon className='text-black' />
                    }
                    <input type="checkbox" onChange={handleToggle} className="toggle " checked={theme === "light" ? false : true} />
                </div>
                {
                    user ? <div className='flex items-center bg-base-100 pl-5 pr-2 h-10 rounded-3xl md:hidden lg:hidden'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={1} className="mx-3"><FaBars className={`${theme === 'light' && 'text-black'}`} /></label>
                            <ul tabIndex={1} className={`dropdown-content menu flex flex-col items-start p-2 shadow bg-base-100 rounded-box ${theme === 'light' && 'text-black'}`}>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={handleSignOut}>Sign Out</button></li>
                            </ul>
                        </div>
                        {
                            user?.photoURL ? <img className='w-7 h-7 rounded-full' src={user?.photoURL} alt="" /> : <FaUser className='h-5 w-5' />
                        }

                    </div> :
                        <Link className={`lg:hidden md:hidden ${location.pathname === '/login' && 'text-[#d86b5b]'} `} to='/login'>login</Link>
                }
            </div>
            <div className='md:space-x-8 font-bold hidden md:flex'>
            <div className='flex items-center space-x-2'>
                    {
                        theme === 'light' && <BsFillSunFill />
                    }
                    {
                        theme === 'business' && <FaMoon className='text-black' />
                    }
                    <input type="checkbox" onChange={handleToggle} className="toggle " checked={theme === "light" ? false : true} />
                </div>
                <Link className={location.pathname === '/' && 'text-[#d86b5b]'} to='/'>Home</Link>
                <Link className={location.pathname === '/instructors' && 'text-[#d86b5b]'} to='/instructors'>Instructors</Link>
                <Link className={location.pathname === '/classes' && 'text-[#d86b5b]'} to='/classes'>Classes</Link>
                {
                    user ? <div className='flex items-center bg-base-100 pl-5 pr-2 h-10 w-20 rounded-3xl'>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="mx-3"><FaBars className={`${theme === 'light' && 'text-black'}`} /></label>
                            <ul tabIndex={0} className={`dropdown-content menu flex flex-col items-start p-2 shadow bg-base-100 rounded-box ${theme === 'light' && 'text-black'}`}>
                                <li><Link to='/dashboard'>Dashboard</Link></li>
                                <li><button onClick={handleSignOut}>Sign Out</button></li>
                            </ul>
                        </div>
                        {
                            user?.photoURL ? <img className='w-7 h-7 rounded-full' src={user?.photoURL} alt="" /> : <FaUser className='h-5 w-5' />
                        }

                    </div> :
                        <Link className={location.pathname === '/login' && 'text-[#d86b5b]'} to='/login'>login</Link>
                }
            </div>
        </div>
    );
};

export default Navbar;
