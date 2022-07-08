import './myFace.css';
import React from 'react';
import { Link } from 'react-router-dom';
import button from '../../img/button_menu.svg'
import kachur from '../../img/kachur.jpg'

function MyFace() {

    return (
        <>
            <div className='myFace'>
                <div className='myFace__container'>
                    <h1 className='myFace__title'>Андрей Качур</h1>
                    <h2 className='myFace__about'> Frontend-разработчик 35 лет, Тюмень</h2>
                    <div className='myFase__lang-container'>
                        <Link to='/' className='myFase__lang'>RU</Link>
                        <div className='myface__lang-border'></div>
                        <Link to='/' className='myFase__lang_gray'>ENG</Link>
                    </div>
                </div>
                <button className='myFace__button'><img src={button} className='myFace__button-image' alt='изображение кнопки'></img></button>
                <div className='myFace__image-container'>
                    <img className='myFace__image' alt="фото качур андрея" src={kachur} />
                </div>
            </div>

        </>
    );
}

export default MyFace;