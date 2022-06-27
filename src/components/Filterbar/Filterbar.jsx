import React from 'react'
import './filterbar.css'

const Filterbar = () => {
  return (
    <div className='filterbar'>
        <h4 id='item-count'>5 items left</h4>
        <h4 id='filter-all'>All</h4>
        <h4 id='filter-active'>Active</h4>
        <h4 id='filter-completed'>Completed</h4>
        <h4 id='clear-completed'>Clear Completed</h4>

    </div>
  )
}

export default Filterbar