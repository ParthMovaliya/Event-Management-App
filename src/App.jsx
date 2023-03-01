import React from 'react'
import "./app.css"
import Home from './home/Home'
import Login from './login/Login'
// import Navbar from "./navbar/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Nav from "./nav/Nav"

const App = () => {

  return (
    <div>
      <Router>
        <Nav>
        <Routes >
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        </Nav>
      </Router>
      {/* <Nav />
      <Home />
      <Login /> */}
    </div>
  )
}

export default App