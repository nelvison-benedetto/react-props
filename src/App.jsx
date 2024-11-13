import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppHeader from '../src/components/AppHeader'
import AppMain from '../src/components/AppMain'
import AppFooter from '../src/components/AppFooter'

function App() {

  return (
    <>
      <AppHeader/>
      <AppMain/>
      <AppFooter/>
    </>
  )
}

export default App
