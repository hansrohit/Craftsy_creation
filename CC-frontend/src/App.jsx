import {BrowserRouter, Route, Routes} from "react-router-dom"

import Login from "./pages/Login"
import Signin from "./pages/Signin"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import WebLayout from "./Layout/WebLayout"
import ProductDisplay from "./pages/ProductDisplay"
import Orders from "./pages/Orders"
function App() {
  
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Signin />} />
            <Route path="/home" element={<Home />} />
          <Route element={<WebLayout />}>
            <Route path="/products" element={<ProductDisplay />} />
            <Route path="/cart" element={<Cart/>} />
            
            <Route path="/orders" element={<Orders/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App
