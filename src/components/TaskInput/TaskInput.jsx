import React from 'react'
import './task-input.css'

const TaskInput = (props) => {

  const handleKeyDown = (e) => {
    if(e.keyCode === 13 && (props.input !== undefined || '')){
      props.onEnter()
      e.target.value = ''
      props.inputText()
    }
    else if(e.keyCode === 13 && (props.input === undefined || '')){
      alert('Sorry, You cant append an empty note.')
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