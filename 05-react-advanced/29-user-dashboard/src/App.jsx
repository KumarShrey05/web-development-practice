import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Form from './components/Form'
import Navbar from './pages/Navbar'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}></Route>
        <Route path='/users' element={<Users />}></Route>
        <Route path='/products' element={<Products />}></Route>
        <Route path='/orders' element={<Orders />}></Route>
        <Route path='/form' element={<Form />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
