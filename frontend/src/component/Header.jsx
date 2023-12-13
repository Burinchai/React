import React from 'react';
import { Link } from 'react-router-dom';
import { UserConntext, useEffect } from 'react';
import { UserConntext } from '../context/UserContext';

const Header = () => {
  return (
    
    <header>
        <Link to={"/"} className='logo'>
        IT NPRU blog
        </Link>
        <nav>
            <Link to={"/login"}>Login</Link>
            <Link to={"/register"}>Register</Link>
        </nav>
        
    </header>
  );
};

export default Header;