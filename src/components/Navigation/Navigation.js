import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './Navigation.css';
import krest from '../../img/krestik.svg';

function Navigation({ isOpen, isClose, lang }) {
    return (
        <section className={isOpen ? 'navigation_open' : 'navigation'}>
            <div className='navigation__container'>
                <div className='navigation__container-link'>
                    <Link to='/#home' onClick={isClose} className='navigation__link'>{lang ? 'Home' : 'Домой'}</Link>
                    <Link to='/#about' onClick={isClose} className='navigation__link'>{lang ? 'About me' : 'Обо мне'}</Link>
                    <Link to='/#skills' onClick={isClose} className='navigation__link'>{lang ? 'Skills' : 'Навыки'}</Link>
                    <Link to='/#portfolio' onClick={isClose} className='navigation__link'>{lang ? 'Portfolio' : 'Портфолио'}</Link>
                    <Link to='/#footer' onClick={isClose} className='navigation__link'>{lang ? 'Contacts' : 'Контакты'}</Link>
                </div>
                <div className='navigation__container-button'>
                    <button className='navigation__button' onClick={isClose}><img className='navigation__image' src={krest} alt='крестик закрытия меню' /></button>
                    <div className='navigation__lang-container'>
                        <Link to='/' className={lang ? 'navigation__lang_gray' : 'navigation__lang'}>RU</Link>
                        <div className='navigation__lang-border'></div>
                        <Link to='/en' className={lang ? 'navigation__lang' : 'navigation__lang_gray'}>ENG</Link>
                    </div>
                </div>
            </div>

        </section>
    );
}


export default Navigation;