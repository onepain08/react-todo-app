import React from 'react'
import './app-container.css'

//Components
import {Header, TaskItem, Filterbar, TaskInput} from '../../components/components'
//Assets
import { iconMoon } from '../../assets/assets'

const AppContainer = () => {
  

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
    setNotesData(oldNotesData => [...oldNotesData, {noteContent: inputText, id:'note' + notesData.length, completed: false,}])
    
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
        <Header icon={iconMoon} />
        <TaskInput inputText={setInputText} onEnter={appendNote} />
        <div className='app-container-todos'>
          {notes}
          <Filterbar filter={filter} toggleFilter={toggleFilter} clearCompleted={clearCompleted} />
        </div>
    </div>
  )
}

export default AppContainer