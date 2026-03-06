import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes'
import { CartProvider } from './Contex/CartContext'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <CartProvider>


    <RouterProvider router={router}/>
          <ToastContainer position="top-right" autoClose={2000}/>

    </CartProvider>
  </StrictMode>
)
