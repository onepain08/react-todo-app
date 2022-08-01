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
  const [darkMode, setDarkMode] = React.useState(JSON.parse(localStorage.getItem('darkMode')) || false)

  useEffect(()=>{
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  },[darkMode])
  
  //Screen width monitoring
  useEffect(() => {
    function handleResize(){
      setScreenWidth(window.innerWidth)
    }
    
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  }, [screenWidth])

  return (
    <div className={darkMode === false ? 'App' : 'App dark-mode'} >
      {screenWidth > 600 &&<img className='app-bg-image' src={darkMode === false ? bgDesktopLight : bgDesktopDark} alt="" />}
      {screenWidth < 600 &&<img className='app-bg-image' src={darkMode === false ? bgMobileLight : bgMobileDark} alt="" />}
      <AppContainer darkMode={darkMode} screenWidth={screenWidth} darkModeHandler={() => setDarkMode(prevDarkMode => !prevDarkMode)} />
      <h3 className="drag-and-drop">Drag and drop to reorder list</h3>
    </div>
  );
}

export default App;
