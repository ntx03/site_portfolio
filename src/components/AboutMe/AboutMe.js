import './AboutMe.css';
import React from 'react';

function AboutMe() {
    return (
        <div className='about'>
            <h2 className='about__title'>Обо мне</h2>
            <p className='about__text'>Привет! Меня зовут Андрей!</p>
            <p className='about__text'> Я  фронтенд разработчик из Тюмени.</p>
            <p className='about__text'>Готов работать и создавать отличные проекты для Вас.</p>
            <p className='about__text'>Вы можете ознакомиться с моими проектами и навыками на этом сайте.</p>
        </div>
    );
}

export default AboutMe;