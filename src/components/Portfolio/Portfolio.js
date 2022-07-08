import './Portfolio.css';
import React from 'react';
import service from '../../img/diplom.png';
import mesto from '../../img/mesto.png';
import korotaeva from '../../img/korotaeva.png';
import travel from '../../img/travel.png';
import learn from '../../img/learn.png';
import CardPortfolio from './CardPortfolio/CardPortfolio';

function Portfolio() {
    return (
        <div className='portfolio'>
            <h2 className='portfolio__title'>Мои проекты</h2>
            <CardPortfolio
                linkSite={'https://ntx033.kachur.nomoreparties.sbs'}
                image={service}
                name={'Сервис по поиску фильмов'}
                linkGit={'https://github.com/ntx03/movies-explorer-frontend'}
            />
            <CardPortfolio
                linkSite={'https://mesto2022.nomoredomains.xyz'}
                image={mesto}
                name={'Приложение Mesto. Сервис где можно делиться фотографиями с другими пользователями.'}
                linkGit={'https://github.com/ntx03/teacher-react'}
            />
            <CardPortfolio
                linkSite={'http://коротаева.рф'}
                image={korotaeva}
                name={'Сайт учителя  георгафии с информационными материалами'}
                linkGit={'https://github.com/ntx03/teacher-react'}
            />
            <CardPortfolio
                linkSite={'https://ntx03.github.io/russian-travel'}
                image={travel}
                name={'Сайт про путешествия по России'}
                linkGit={'https://github.com/ntx03/russian-travel'}
            />
            <CardPortfolio
                linkSite={'https://ntx03.github.io/how-to-learn'}
                image={learn}
                name={'Сайт про эффективные методы обучения (не адаптивный)'}
                linkGit={'https://github.com/ntx03/how-to-learn'}
            />
        </div>

    );
}

export default Portfolio;