import './app.css';

//Containers
import { AppContainer } from './containers/containers';

//Components


//Assets
import {bgDesktopDark, bgDesktopLight} from './assets/assets'


function App() {
  return (
    <div className="App">
      <img className='app-bg-image' src={bgDesktopLight} alt="" />
      <AppContainer />
    </div>
  );
}

export default App;
