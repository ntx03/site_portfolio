
import React from 'react';
import Header from '../Header/Header';
import MyFace from '../myFace/myFace';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function Ru({ isOpen, lang }) {
    return (
        <>
            <Header lang={lang} />
            <MyFace isOpen={isOpen} lang={lang} />
            <AboutMe lang={lang} />
            <Skills lang={lang} />
            <Portfolio lang={lang} />
            <Footer lang={lang} />
        </>
    );
}

export default Ru;