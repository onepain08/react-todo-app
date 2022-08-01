import React from 'react'
import './task-item.css'
import { motion } from 'framer-motion'

import {iconCross, iconCheck} from '../../assets/assets'

const TaskItem = (props) => {



    const variants = {

      hidden:{opacity:0.4},
      visible:{opacity:1, transition:{duration: 0.2}},
      exit:{opacity: 0, transition:{duration: 0.2}}
    }


  return (
    <motion.div className={props.completed ===true && props.filter === 'filter-completed' ? 'task-item'
                    :props.filter==='filter-active'&& props.completed !== true ? 'task-item'
                    :props.filter==='filter-all' ? 'task-item'
                    : 'no-display'} 
         id={props.id}
         draggable='true'
         onDragStart={props.onDragStart}
         onDragEnter={props.onDragEnter}
      variants={variants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <div className={props.completed === true ? 'task-item-mark task-marked': 'task-item-mark'}
           onClick={() => props.markCompleted(props.id)}>
        {props.completed &&<img className='task-item-mark-check' src={iconCheck} alt="" />}
      </div>
      <div className={props.completed ? 'task-item-content font-crossed' : 'task-item-content'}>{props.noteContent}</div>
      <motion.img src={iconCross} alt="" onClick={() => {props.deleteHandler(props.id)}} whileTap={{scale: 0.8}} />
    </motion.div>
  )
}

export default TaskItem