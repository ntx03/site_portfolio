import './Footer.css';
import React from 'react';
import VK from '../../img/VK.png';
import telegramm from '../../img/telegram.png';
import viber from '../../img/viber.png';
import facebook from '../../img/facebook.png';


function Footer({ lang }) {
    return (
        <div className='footer' id='footer'>
            <h2 className='footer__title'>{lang ? 'Contacts' : 'Контакты'}</h2>
            <p className='footer__text'>{lang ? 'Want to know more or just chat? ' : 'Хотите узнать больше или просто пообщаться?'}</p>
            <p className='footer__text'>{lang ? 'You are Welcome!' : 'Пожалуйста!'}</p>
            <a href='mailto:ntx033@yandex.ru' target='_blank' className={lang ? 'footer__email_en' : 'footer__email'} rel="noreferrer">{lang ? 'Seng message' : 'Отправить сообщение'}</a>
            <div className='footer__container'>
                <a href='https://telegram.me/ntx033' target='_blank' rel="noreferrer" className='footer__link'><img className='footer__image' src={telegramm} alt="иконка телеграмм" /></a>
                <a href='https://vk.com/id4391481' target='_blank' rel="noreferrer" className='footer__link'><img className='footer__image' src={VK} alt="иконка вконтакте" /></a>
                <a href="viber://chat?number=%2B79923084792" target='_blank' rel="noreferrer" className='footer__link'><img className='footer__image' src={viber} alt="иконка вайбер" /></a>
                <a href='https://www.facebook.com/profile.php?id=100000369908392' target='_blank' rel="noreferrer" className='footer__link'><img className='footer__image' src={facebook} alt="иконка фэйсбук" /></a>
            </div>
            <p className='footer__text_gray'>{lang ? 'Like me on' : 'Еще я есть в'}</p>
            <p className='footer__text_gray'>Telegram,  Вконтакте,  Viber,  Facebook</p>
        </div>
    );
}

export default Footer;