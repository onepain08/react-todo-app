import React from 'react';
import './app.css';

//Containers
import { AppContainer } from './containers/containers';

//Components


//Assets
import {bgDesktopDark, bgDesktopLight, bgMobileDark, bgMobileLight} from './assets/assets'
import { useEffect } from 'react';



function App() {
  
  //States
  
  //Width state
  const [screenWidth, setScreenWidth] = React.useState(window.innerWidth)

  //Light/dark mode state
  const [darkMode, setDarkMode] = React.useState(false)

  useEffect(() => {
    setScreenWidth(window.innerWidth)
  },[])
  
  console.log(screenWidth);

  return (
    <div className={darkMode === false ? 'App' : 'App dark-mode'} >
      {screenWidth > 600 &&<img className='app-bg-image' src={darkMode === false ? bgDesktopLight : bgDesktopDark} alt="" />}
      {screenWidth < 600 &&<img className='app-bg-image' src={darkMode === false ? bgMobileLight : bgMobileDark} alt="" />}
      <AppContainer darkMode={darkMode} darkModeHandler={() => setDarkMode(prevDarkMode => !prevDarkMode)} />
    </div>
  );
}

export default App;
