import React from 'react'
import './task-item.css'

import {iconCross} from '../../assets/assets'

const TaskItem = (props) => {

  
  return (
    <div className={props.completed ===true && props.filter === 'filter-completed' ? 'no-display' : 'task-item'} id={props.id} >
        <div className='task-item-mark' onClick={() => props.markCompleted(props.id)}></div>
        <div>{props.noteContent}</div>
        <img src={iconCross} alt="" onClick={() => {props.deleteHandler(props.id)}} />
    </div>
  )
}

export default TaskItem