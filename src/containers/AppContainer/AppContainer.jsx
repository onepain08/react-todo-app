import React from 'react'
import './app-container.css'

//Components
import {Header} from '../../components/components'
//Assets
import { iconMoon } from '../../assets/assets'

const AppContainer = () => {
  return (
    <div className='app-container'>
        <Header icon={iconMoon} />
    </div>
  )
}

export default AppContainer