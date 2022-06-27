import React from 'react'
import './task-item.css'

const TaskItem = (props) => {
  return (
    <div className='task-item'>
        <div className='task-item-mark'></div>
        <div>{props.noteContent}</div>
    </div>
  )
}

export default TaskItem