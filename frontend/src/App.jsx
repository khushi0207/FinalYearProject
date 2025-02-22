import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/homePage'
import AboutUs from './pages/aboutUs'
import Contact from './pages/contact'
import Collections from './pages/collections'
import Cart from './pages/cart'
import Login from './pages/login'
import Orders from './pages/orders'
import PlaceOrder from './pages/placeOrder'
import Navigate from './components/navBar'
import Products from './pages/products'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]' >
      <Navigate/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/collections" element={<Collections />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/placeOrder" element={<PlaceOrder />} />
        <Route path="/product/:productId" element={<Products />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
