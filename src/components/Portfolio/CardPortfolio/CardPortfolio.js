import './CardPortfolio.css';
import React from 'react';

function CardPortfolio({ linkSite, image, name, linkGit }) {
    return (
        <>
            <a href={linkSite} target='_blank' className='portfolio__link-site'>
                <div className='portfolio__image-container'>
                    <img className='portfolio__image' src={image} alt='приложение поисковик фильмов' />
                </div>
            </a>
            <p className='portfolio__text'>{name}</p>
            <a href={linkGit} target='_blank' className='portfolio__text-git'>Ссылка на Github</a>
        </>
    );
}

export default CardPortfolio;