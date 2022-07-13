import React from 'react'
import './app-container.css'

//Components
import {Header, TaskItem, Filterbar, TaskInput} from '../../components/components'
//Assets
import { iconMoon, iconSun} from '../../assets/assets'

const AppContainer = (props) => {
  

  //States:

  //input state from <TaskInput />
  const [inputText, setInputText] = React.useState()

  // state holding all notes/ <TaskItem />
  const [notesData, setNotesData] = React.useState([])

  //filter
  const [filter, setFilter] = React.useState('filter-all')

  

// console.log(filter);
  // state holding completed notes from notesData state
  // const [notesCompletedData, setNotesCompletedData] = React.useState([])



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
        <TaskItem key={note.id}
        id={note.id}
        noteContent={note.noteContent}
        completed={note.completed}
        filter={filter}
        deleteHandler={deleteNote}
        markCompleted={markCompleted}
        />
      )
  })

// Completed notes filter

  function toggleFilter(id){
    setFilter(() => id)
  }

  // function filterCompleted(notesData){
  //   setNotesCompletedData( () => {
  //     return notesData.map(note => {
  //       return note.completed ? {...note} : {}
  //     })
  //   })
  // }  

  // const notesCompleted = notesCompletedData.map(note => {
  //   return(
  //     <TaskItem 
  //       id={note.id}
  //       noteContent={note.noteContent}
  //       completed={false}
  //       deleteHandler={deleteNote}
  //       markCompleted={markCompleted}
  //     />
  //   )
  // })
  return (
    <div className='app-container'>
        <Header icon={props.darkMode === false ? iconMoon : iconSun} darkModeHandler={props.darkModeHandler} />
        <TaskInput inputText={setInputText} onEnter={appendNote} />
        <div className='app-container-todos'>
          {notes}
        </div>
          <Filterbar notesCount={notesData.length} filter={filter} screenWidth={props.screenWidth} toggleFilter={toggleFilter} clearCompleted={clearCompleted} />
    </div>
  )
}

export default AppContainer