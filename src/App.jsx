import { useState } from 'react'
import './App.css'

import Cart from './component/Cart'
import Products from './component/Products'
import Navbar from './component/NavBar'
import Banner from './component/Banner'
import Rating from './component/Rating'
import Pricing from './component/Pricing'
import Steps from './component/Steps'
import Workflow from './component/Workflow'
import Footer from './component/Footer'



// fetch products
const getProducts = async () => {
  const res = await fetch("/products.json")
  return res.json()
}

const productPromise = getProducts()

function App() {

  const [activeTab, setActiveTab] = useState("product")
  const [carts, setCarts] = useState([])

  return (
    <>
     
      <Navbar carts={carts} setActiveTab={setActiveTab} />

      <Banner/>
      <Rating/>
   {/* tab button */}
      <div className="flex justify-center gap-4 my-10">
        <button
          onClick={() => setActiveTab("product")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "product"
              ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
              : "bg-gray-50"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "cart"
              ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
              : "bg-gray-50"
          }`}
        >
          Cart ({carts.length})
        </button>
      </div>

      {/* Render */}
      {activeTab === "product" && (
        <Products
          productPromise={productPromise}
          carts={carts}
          setCarts={setCarts}
        />
      )}

      {activeTab === "cart" && (
        <Cart carts={carts} setCarts={setCarts} />
      )}

      <Pricing/>
      <Steps/>
      <Workflow/>
      <Footer/>
      
    
    </>
  )
}

export default App  



// git commit -m "first commit"