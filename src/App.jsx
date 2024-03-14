import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Cart from './Components/Cart'

function App() {
  

  return (
    <BrowserRouter>
<Navbar/>
<Routes>
  <Route path='/' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
</Routes>
    </BrowserRouter>
  )
}

export default App;
