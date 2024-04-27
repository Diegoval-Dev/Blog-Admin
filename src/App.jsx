import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import '@styles/App.css'
import Home from '@pages/Home'
import Login from '@components/Login'


function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={Login} />
          <Route path="/" element={Home} />
        </Routes>
      </Router>
    </>
  )
}

export default App
