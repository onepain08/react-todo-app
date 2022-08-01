import React, { useEffect } from 'react'
import './app-container.css'

//Components
import {Header, TaskItem, Filterbar, TaskInput} from '../../components/components'
//Assets
import { iconMoon, iconSun} from '../../assets/assets'
import { AnimatePresence } from 'framer-motion'

const AppContainer = (props) => {
  
  //States:

  //input state from <TaskInput />
  const [inputText, setInputText] = React.useState()
  
  // state holding all notes/ <TaskItem />
  const [notesData, setNotesData] = React.useState(JSON.parse(localStorage.getItem('notesData')) || [])

  //filter
  const [filter, setFilter] = React.useState('filter-all')

  
  //Local storage
 useEffect(() => {
  localStorage.setItem('notesData', JSON.stringify(notesData))
 },[notesData])



  function appendNote(){
    setNotesData(oldNotesData => [...oldNotesData, {noteContent: inputText, id: inputText + notesData.length, completed: false,}])
    
  }

  function deleteNote(id){
    setNotesData(prevNotesData => prevNotesData.filter(note => note.id !== id))
  }

  function markCompleted(id){
    setNotesData(prevNotesData => {
      return prevNotesData.map(note =>{
        return note.id === id ? {...note, completed: !note.completed} : note
      })
    })
  }
  
  function clearCompleted(){
    setNotesData(prevNotesData => prevNotesData.filter(note => note.completed !==true))
  }

  

  const notes = notesData.map((note)=>{
      return (
        <TaskItem
          key={note.id}
          id={note.id}
          notesData={notesData}
          setNotesData={setNotesData}
          noteContent={note.noteContent}
          completed={note.completed}
          filter={filter}
          deleteHandler={deleteNote}
          markCompleted={markCompleted}
          onDragStart={dragStart}
          onDragEnter={dragEnter}
        />
      )
  })

// Completed notes filter

  function toggleFilter(id){
    setFilter(() => id)
  }

  // Drag and drop

  let hoveredItemID = ''

  function dragStart(e){
    console.log(e.target.id)
    e.dataTransfer.setData('dragID', e.target.id)
  }

  function dragEnter(e){
    // console.log(e.target.id);
    hoveredItemID = e.target.id
    return hoveredItemID
  }

  function dragover(e){
    e.preventDefault()
  }

  function drop(e){
    e.preventDefault()
    const dragID = e.dataTransfer.getData('dragID')

    setNotesData(oldNotesData => {
      let singleOutDragged = oldNotesData.filter(note => note.id === dragID)
      let newNotesData = oldNotesData.filter(note => note.id !== dragID)
      let index = newNotesData.findIndex(note => note.id === hoveredItemID)
      newNotesData.splice(index, 0, singleOutDragged[0])
      return newNotesData
    })
  }

 
  return (
    <div className='app-container' onDrop={drop} onDragOver={dragover}>
        <Header icon={props.darkMode === false ? iconMoon : iconSun} darkModeHandler={props.darkModeHandler} />
        <TaskInput input={inputText} inputText={setInputText} onEnter={appendNote} />
        <div className='app-container-todos'>
          <AnimatePresence>

          {notes}
          </AnimatePresence>
        </div>
          <Filterbar notesCount={notesData.length} filter={filter} screenWidth={props.screenWidth} toggleFilter={toggleFilter} clearCompleted={clearCompleted} />
    </div>
  )
}

export default AppContainer