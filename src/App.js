import React, { useState, useRef } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useNavigate } from 'react-router'
import './App.css'
import { styled } from '@mui/styles'
import { Container } from '@mui/material'
import Header from './components/common/Header'
import Home from './components/parts/Home'
import About from './components/parts/About'
import Activity from './components/parts/Activity'
import Work from './components/parts/Work'
import Contact from './components/parts/Contact'

const AppContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  flexDirection: 'column',
  // paddingTop: '80px',
})

const App = () => {
  const navigate = useNavigate()
  return (
    <div className="App">
      <Header />
        <AppContainer>
          <Home />
          <About />
          <Activity />
          <Work />
          <Contact />
          {/* <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
          </Routes> */}
        </AppContainer>

    </div>
  );
}

export default App;
