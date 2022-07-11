import React from 'react';
import './app.css';

//Containers
import { AppContainer } from './containers/containers';

//Components


//Assets
import {bgDesktopDark, bgDesktopLight} from './assets/assets'



function App() {
  
  //States
  
  //Light/dark mode state
  const [darkMode, setDarkMode] = React.useState(false)

  return (
    <div className={darkMode === false ? 'App' : 'App dark-mode'}>
      <img className='app-bg-image' src={darkMode === false ? bgDesktopLight : bgDesktopDark} alt="" />
      <AppContainer darkMode={darkMode} darkModeHandler={() => setDarkMode(prevDarkMode => !prevDarkMode)} />
    </div>
  );
}

export default App;
