import './myFace.css';
import React from 'react';
import { Link } from 'react-router-dom';
import button from '../../img/button_menu.svg'
import kachur from '../../img/andrey.jpg'

function MyFace({ isOpen, lang }) {
    return (
        <>
            <div className='myFace'>
                <div className='myFace__container'>
                    <h1 className='myFace__title'>{lang ? 'Andrey Kachur' : 'Андрей Качур'}</h1>
                    <h2 className='myFace__about'>{lang ? 'Frontend-developer 35 years old, Tyumen' : 'Frontend-разработчик 35 лет, Тюмень'} </h2>
                    <div className='myFase__lang-container'>
                        <Link to='/' className={lang ? 'myFase__lang_gray' : 'myFase__lang'}>RU</Link>
                        <div className='myface__lang-border'></div>
                        <Link to='/en' className={lang ? 'myFase__lang' : 'myFase__lang_gray'}>ENG</Link>
                    </div>
                </div>
                <button className='myFace__button'><img src={button} onClick={isOpen} className='myFace__button-image' alt='изображение кнопки'></img></button>
                <div className='myFace__image-container'>
                    <img className='myFace__image' alt="фото качур андрея" src={kachur} />
                </div>
            </div>

        </>
    );
}

export default MyFace;