import React from 'react'
import './task-item.css'

import {iconCross} from '../../assets/assets'

const TaskItem = (props) => {

    
  return (
    <div className={props.completed ===true && props.filter === 'filter-completed' ? 'task-item'
                    :props.filter==='filter-active'&& props.completed !== true ? 'task-item'
                    :props.filter==='filter-all' ? 'task-item'
                    : 'no-display'} 
         id={props.id} >
      <div className={props.completed === true ? 'task-item-mark task-marked': 'task-item-mark'}
           onClick={() => props.markCompleted(props.id)}>

      </div>
      <div>{props.noteContent}</div>
      <img src={iconCross} alt="" onClick={() => {props.deleteHandler(props.id)}} />
    </div>
  )
}

export default TaskItem