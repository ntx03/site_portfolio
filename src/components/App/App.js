import './App.css';
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Routes, Route, useLocation } from 'react-router';
import Ru from '../Ru/Ru';
import En from '../En/En';

function App() {

  let location = useLocation();

  const [navigation, setNavigation] = React.useState(false);

  const [EnLanguage, setEnLanguage] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === '/') {
      setEnLanguage(false);
    }
    if (location.pathname === '/en') {
      setEnLanguage(true);
    }
  }, [location.pathname])

  function closeNavigationMenu() {
    setNavigation(false);
  }

  function openNavigationMenu() {
    setNavigation(true);
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Ru isOpen={openNavigationMenu} lang={EnLanguage} />} />
        <Route path='/en' element={<En isOpen={openNavigationMenu} lang={EnLanguage} />} />
      </Routes>
      <Navigation isOpen={navigation} isClose={closeNavigationMenu} lang={EnLanguage} />
    </div>
  );
}

export default App;
