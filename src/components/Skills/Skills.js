import './Skills.css';
import React from 'react';
import HTML from '../../img/HTML.jpg';
import CSS from '../../img/css.png';
import JS from '../../img/js.png';
import react from '../../img/react.png';
import node from '../../img/node.png';

function Skills() {
    return (
        <div className='skills'>
            <h2 className='skills__title'>Навыки</h2>
            <p className='skills__text'>Я работаю с технологиями</p>
            <div className='skills__container'>
                <div className='skills__card'>
                    <img className='skills__image' alt='HTML' src={HTML} />
                    <p className='skills__text_gray'>HTML</p>
                </div>
                <div className='skills__card'>
                    <img className='skills__image' alt='HTML' src={CSS} />
                    <p className='skills__text_gray'>CSS</p>
                </div>
                <div className='skills__card'>
                    <img className='skills__image' alt='HTML' src={JS} />
                    <p className='skills__text_gray'>JavaScript</p>
                </div>
                <div className='skills__card'>
                    <img className='skills__image' alt='HTML' src={react} />
                    <p className='skills__text_gray'>React</p>
                </div>
                <div className='skills__card'>
                    <img className='skills__image' alt='HTML' src={node} />
                    <p className='skills__text_gray'>Node.js</p>
                </div>
            </div>
        </div>
    );

}

export default Skills;