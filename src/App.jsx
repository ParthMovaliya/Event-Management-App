import React from 'react'
import Home from './home/Home'
import Login from './login/Login'
import Navbar from "./navbar/Navbar"
import "./app.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


const App = () => {

  return (
    <div>
      <Router>
        <Navbar>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </Navbar>
      </Router>

    </div>
  )
}

export default App