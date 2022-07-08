import './App.css';
import React from 'react';
import Header from '../Header/Header';
import MyFace from '../myFace/myFace';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

function App() {
  // состояние ширины экрана
  const [width, setWidth] = React.useState(window.innerWidth);

  // мониторим ширину экрана
  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <MyFace />
      <AboutMe />
      <Skills />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
