import React from 'react'
import './App.scss'
import Header from './shared/components/Header/Header'
import Contact from './shared/components/Contact/Contact'
import HomePage from './pages/home-page/components/HomePage/HomePage'
import { Provider } from 'react-redux'
import store from './redux-toolkit/store/store'

function App() {
 

  return (
    <Provider store={store}>
    <Header />
    <HomePage/>
    <Contact/>
    </Provider>
  )
}

export default App
