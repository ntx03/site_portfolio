import './Header.css';
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

function Header({ lang }) {

    return (
        <div className='header' id='home'>
            <div className='header__nav-container'>
                <Link to='/#home' className='header__link'>{lang ? 'Home' : 'Домой'}</Link>
                <Link to='/#about' className='header__link'>{lang ? 'About me' : 'Обо мне'}</Link>
                <Link to='/#skills' className='header__link'>{lang ? 'Skills' : 'Навыки'}</Link>
                <Link to='/#portfolio' className='header__link'>{lang ? 'Portfolio' : 'Портфолио'}</Link>
                <Link to='/#footer' className='header__link'>{lang ? 'Contacts' : 'Контакты'}</Link>
            </div>
            <div className='header__border'></div>
        </div>
    );
}

export default Header;