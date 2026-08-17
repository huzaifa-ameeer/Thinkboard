import React from 'react'
import toast from 'react-hot-toast'
import {Toaster} from "react-hot-toast"
import {Route, Routes} from "react-router"
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetails from './pages/NoteDetails'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element= {<HomePage/>} />
        <Route path='/create' element= {<CreatePage/>} />
        <Route path='/note/:id' element= {<NoteDetails/>} />
      </Routes>
    </div>
  )
}

export default App