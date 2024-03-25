import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import NewEntry from "./newEntry"
import SampleEntry from "./sampleEntry"
import CreateNewEntry from "./createNewEntry"
import GetOldData from "./getOldData"

function App() {

  return (
    <>
      <GetOldData />

      <div id="newEntry">
        <NewEntry />
      </div>

      <div id="entryDisplay"></div>
    </>
  )
}

export default App
