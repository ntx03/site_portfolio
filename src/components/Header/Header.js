import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <div className='header' id='home'>
            <div className='header__nav-container'>
                <Link to='/#home' className='header__link'>Домой</Link>
                <Link to='/#about' className='header__link'>Обо мне</Link>
                <Link to='/#skills' className='header__link'>Навыки</Link>
                <Link to='/#portfolio' className='header__link'>Портфолио</Link>
                <Link to='/#contacts' className='header__link'>Контакты</Link>
            </div>
            <div className='header__border'></div>
        </div>
    );
}

export default Header;