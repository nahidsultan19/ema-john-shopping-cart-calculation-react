import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/delivary">Delivary</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;