import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import React from 'react';
import Home from "./components/Home"
import Hashira from './components/Hashira';
import RengukoCard from "./components/RengukoCard"
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home></Home>}></Route>
      <Route path='/hashira' element={<Hashira></Hashira>}></Route>
      <Route path='/demon' element={<Hashira></Hashira>}></Route>
      <Route path='/renguko' element={<RengukoCard></RengukoCard>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
