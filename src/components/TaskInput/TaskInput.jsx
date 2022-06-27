import React from 'react'
import './task-input.css'

const TaskInput = (props) => {

  const handleKeyDown = (e) => {
    if(e.keyCode === 13){
      props.onEnter()
      e.target.value = ''
    }
  }

  const eventHandler = (e)=> {
    props.inputText(e.target.value)
  }
  return (
    <div className='task-input'>
        <div className='task-item-mark'></div>
        <input type="text" placeholder='Create new to do' onChange={eventHandler} onKeyDown={handleKeyDown} />
    </div>
  )
}

export default TaskInput