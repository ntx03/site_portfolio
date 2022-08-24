import './Portfolio.css';
import React from 'react';
import service from '../../img/diplom.png';
import mesto from '../../img/mesto.jpg';
import korotaeva from '../../img/korotaeva.jpg';
import travel from '../../img/travel.jpg';
import learn from '../../img/learn.png';
import CardPortfolio from './CardPortfolio/CardPortfolio';
import floristman from '../../img/floristman.png';

function Portfolio({ lang }) {
    return (
        <div className='portfolio' id='portfolio'>
            <h2 className='portfolio__title'>{lang ? 'My projects' : ' Мои проекты'}</h2>
            <CardPortfolio
                linkSite={'https://flower-shop-ecru.vercel.app'}
                image={floristman}
                name={lang ? 'Flower online store' : 'Цветочный интернет магазин'}
                linkGit={'https://github.com/ntx03/flower-shop'}
                lang={lang}
            />
            <CardPortfolio
                linkSite={'https://ntx033.kachur.nomoreparties.sbs'}
                image={service}
                name={lang ? 'Movie Search service' : 'Сервис по поиску фильмов'}
                linkGit={'https://github.com/ntx03/movies-explorer-frontend'}
                lang={lang}
            />
            <CardPortfolio
                linkSite={'https://mesto2022.nomoredomains.xyz'}
                image={mesto}
                name={lang ? 'The Mesto app. A service where you can share photos with other users.' : 'Приложение Mesto. Сервис где можно делиться фотографиями с другими пользователями.'}
                linkGit={'https://github.com/ntx03/teacher-react'}
                lang={lang}
            />
            <CardPortfolio
                linkSite={'http://коротаева.рф'}
                image={korotaeva}
                name={lang ? 'Geography teacher website with information materials' : 'Сайт учителя  георгафии с информационными материалами'}
                linkGit={'https://github.com/ntx03/teacher-react'}
                lang={lang}
            />
            <CardPortfolio
                linkSite={'https://ntx03.github.io/russian-travel'}
                image={travel}
                name={lang ? 'Website about travel in Russia' : 'Сайт про путешествия по России'}
                linkGit={'https://github.com/ntx03/russian-travel'}
                lang={lang}
            />
            <CardPortfolio
                linkSite={'https://ntx03.github.io/how-to-learn'}
                image={learn}
                name={lang ? 'Website about effective teaching methods (not adaptive)' : 'Сайт про эффективные методы обучения (не адаптивный)'}
                linkGit={'https://github.com/ntx03/how-to-learn'}
                lang={lang}
            />
        </div>

    );
}

export default Portfolio;