import './AboutMe.css';
import React from 'react';

function AboutMe({ lang }) {

    return (
        <div className='about' id='about'>
            <h2 className='about__title'>{lang ? 'About me' : 'Обо мне'}</h2>
            <p className='about__text'>{lang ? 'Hi! My name is Andrey!' : 'Привет! Меня зовут Андрей!'}</p>
            <p className='about__text'>{lang ? 'I am a frontend developer from Tyumen.' : 'Я  фронтенд разработчик из Тюмени.'}</p>
            <p className='about__text'>{lang ? 'I am ready to work and create great projects for you.' : 'Готов работать и создавать отличные проекты для Вас.'}</p>
        </div>
    );
}

export default AboutMe;