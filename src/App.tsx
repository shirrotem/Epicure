import React from 'react'
import './App.scss'
import Header from './shared/components/Header/Header'
import Contact from './shared/components/Contact/Contact'
import HomePage from './pages/home-page/components/HomePage/HomePage'

function App() {
 

  return (
    <>
    <Header />
    <HomePage/>
    <Contact/>
    </>
  )
}

export default App
