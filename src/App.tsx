import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Viewbox from './components/PercentView'
const App = () => {
  let cislo: number = 34;
  cislo -= 1;

  return (
    <>
      
      <Viewbox value={cislo} max={333} makeColor={(p) =>  'rgb($(p*200), 255, 255)'}/>
    </>
  )
}

export default App
