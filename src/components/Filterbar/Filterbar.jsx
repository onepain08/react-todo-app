import React from 'react'
import './filterbar.css'

const Filterbar = (props) => {
  return (
    <div className='filterbar'>
        <h4 id='item-count'>5 items left</h4>
        <h4 id='filter-all'
          onClick={() => props.toggleFilter('filter-all')}
          className={props.filter === 'filter-all' ? 'filter-on': 'filterbar-filters'}>
            All
        </h4>
        <h4 id='filter-active'
          onClick={() => props.toggleFilter('filter-active')}
          className={props.filter === 'filter-active' ? 'filter-on': 'filterbar-filters'}>
            Active
        </h4>
        <h4 id='filter-completed'
        onClick={() => props.toggleFilter('filter-completed')}
        className={props.filter === 'filter-completed' ? 'filter-on': 'filterbar-filters'}>
          Completed
        </h4>
        <h4 id='clear-completed' onClick={props.clearCompleted}>Clear Completed</h4>

    </div>
  )
}

export default Filterbar