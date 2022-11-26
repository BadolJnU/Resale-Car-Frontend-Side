import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import {AuthContext} from '../../contextApi/AuthProvider'

const Navbar = () => {
    const {user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItem = <React.Fragment>
        <li><Link to="/" className='font-bold'>Home</Link></li>
        <li><Link to="/blog" className='font-bold'>Blog</Link></li>
        {user?.uid ?
            <>
                <li><Link to="/dashboard"  className='font-bold'>Dashboard</Link></li>
                <li><button onClick={handleLogOut} className='btn btn-outline btn-primary rounded-lg font-extrabold'>SignOut</button></li>
            </>
            :
            <li className='btn btn-outline btn-primary rounded-lg'><Link to="/login" className='font-extrabold'>Login</Link></li>}
    
    </React.Fragment>
    return (
        <div className="navbar bg-base-400">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <Link to='/' className='text-xl font-bold'><img src={logo} alt='logo' style={{height: '50px'}}/>AutoRadar</Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;