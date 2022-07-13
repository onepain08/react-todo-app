import React from 'react';
import './app.css';

//Containers
import { AppContainer } from './containers/containers';

//Components


//Assets
import {bgDesktopDark, bgDesktopLight, bgMobileDark, bgMobileLight} from './assets/assets'



function App() {
  
  //States
  
  //Width state
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

  //Light/dark mode state
  const [darkMode, setDarkMode] = React.useState(false)

  

  return (
    <div className={darkMode === false ? 'App' : 'App dark-mode'} >
      {screenWidth > 600 &&<img className='app-bg-image' src={darkMode === false ? bgDesktopLight : bgDesktopDark} alt="" />}
      {screenWidth < 600 &&<img className='app-bg-image' src={darkMode === false ? bgMobileLight : bgMobileDark} alt="" />}
      <AppContainer darkMode={darkMode} screenWidth={screenWidth} darkModeHandler={() => setDarkMode(prevDarkMode => !prevDarkMode)} />
    </div>
  );
}

export default App;
