import React from 'react'
import './app-container.css'

//Components
import {Header, TaskItem, Filterbar, TaskInput} from '../../components/components'
//Assets
import { iconMoon } from '../../assets/assets'

const AppContainer = () => {
  
  const [inputText, setInputText] = React.useState()
  const [notesData, setNotesData] = React.useState([])
  console.log(notesData)
  function appendNote(){
    setNotesData(oldNotesData => [...oldNotesData, {noteContent: inputText, id:notesData.length}])
    
  }

  const notes = notesData.map((note)=>{
      return <TaskItem key={note.id} noteContent={note.noteContent} />
  })


  return (
    <div className='app-container'>
        <Header icon={iconMoon} />
        <TaskInput inputText={setInputText} onEnter={appendNote} />
        <div className='app-container-todos'>
          {notes}
          <Filterbar />
        </div>
    </div>
  )
}

export default AppContainer