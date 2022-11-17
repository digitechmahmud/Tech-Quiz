import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import './Navbar.css';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-slate-300 text-slate-500">
                <div className="flex-1 sm:flex logo md:pl-10 pl-0">
                    <Link to='/' className="btn btn-ghost md:pl-10 text-xl"><img className='fluid' src={logo} alt="" />Tech Quiz</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal text-slate-500 font-bold"> 
                        <li className='sm:ml-10'><Link to='/'>Home</Link></li>
                        <li><Link to='/statistics'>Statistics</Link></li>
                        <li><Link to='/blogs'>Blogs</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;