import React from 'react'
import './header.css' 

const Header = (props) => {
  return (
    <header className='header'>
        <h1>TODO</h1>
        <img src={props.icon} alt="" />
    </header>
  )
}

export default Header