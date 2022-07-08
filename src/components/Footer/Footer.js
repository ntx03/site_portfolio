import './Footer.css';
import React from 'react';
import VK from '../../img/VK.png';
import telegramm from '../../img/telegram.png';
import viber from '../../img/viber.png';
import facebook from '../../img/facebook.png';


function Footer() {
    return (
        <div className='footer'>
            <h2 className='footer__title'>Контакты</h2>
            <p className='footer__text'>Хотите узнать больше или просто пообщаться?</p>
            <p className='footer__text'>Пожалуйста!</p>
            <a href='mailto:ntx033@yandex.ru' target='_blank' className='footer__email' rel="noreferrer">Отправить сообщение</a>
            <div className='footer__container'>
                <a href='https://vk.com/id4391481' target='_blank' rel="noreferrer" className='footer__link'><img className='footer__image' src={VK} alt="иконка вконтакте" /></a>
                <a href='https://telegram.me/ntx033' target='_blank' rel="noreferrer" className='footer__link'><img className='footer__image' src={telegramm} alt="иконка телеграмм" /></a>
                <a href="viber://chat?number=%2B79923084792" target='_blank' rel="noreferrer" className='footer__link'><img className='footer__image' src={viber} alt="иконка вайбер" /></a>
                <a href='https://www.facebook.com/profile.php?id=100000369908392' target='_blank' rel="noreferrer" className='footer__link'><img className='footer__image' src={facebook} alt="иконка фэйсбук" /></a>
            </div>
        </div>
    );
}

export default Footer;