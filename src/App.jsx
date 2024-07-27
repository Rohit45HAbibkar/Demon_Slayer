import { BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Hashira from './components/Hashira'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route index element={<Home></Home>} ></Route>
      <Route path='/' element={<Home></Home>} ></Route>
      <Route path='/hashira' element={<Hashira></Hashira>} ></Route>
      <Route path='/demon' element={<Hashira></Hashira>} ></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
