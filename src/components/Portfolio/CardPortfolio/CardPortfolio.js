import './CardPortfolio.css';
import React from 'react';

function CardPortfolio({ linkSite, image, name, linkGit, lang }) {
    return (
        <>
            <a href={linkSite} target='_blank' title={lang ? `Go to the website  ${linkSite}` : `Перейти на сайт ${linkSite}`} className='portfolio__link-site' >
                <div className='portfolio__image-container'>
                    <img className='portfolio__image' src={image} alt='приложение поисковик фильмов' />
                </div>
            </a>
            <p className='portfolio__text'>{name}</p>
            <a href={linkGit} target='_blank' className='portfolio__text-git'>{lang ? 'Link to Github ' : 'Ссылка на Github'}</a>
        </>
    );
}

export default CardPortfolio;