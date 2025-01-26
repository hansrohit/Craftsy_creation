import React, { useEffect, useRef, useState } from 'react';
import { addOrder, displayCart, removeCartItem } from '../services/api';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"
import { selectCurrentEmail } from '../state/store';
import toast from 'react-hot-toast';

const Cart = () => {
  const [cartItems, setCartItems] = useState([])
  const [orderPage, setOrderPage] = useState(false)

  const [orderProduct, setOrderProduct] = useState({})

  const email = useSelector(selectCurrentEmail)

  const address = useRef()
  const phno = useRef()
  const quantity = useRef()

  const navigate = useNavigate()

    const fetchCart= async()=>{
      try {
        const {data} = await displayCart(email)
        if(Array.isArray(data))
          {
          setCartItems(data)
          console.log(cartItems)
        }
        else
        {
          console.log("data is fetching")
        }
      } catch (error) {
        console.log(error)
      }
    }
    const removeHandler=async(email, id)=>{
      try {
        const {data} = await removeCartItem(email, id)
        console.log(data)
        toast.success("Removed From Cart",{
          duration:3000,
          position:"bottom-right"
        })
        fetchCart()
      } catch (error) {
        console.log(error)
      }
  }
    useEffect(()=>{
      fetchCart()
    },[])
    if(!cartItems)
      {
        return <h2>Loading...</h2>
      }

      const orderHandler=async(e)=>{
        e.preventDefault()
        try {
          console.log(orderProduct)
          const {data}= await addOrder(email,address.current.value, phno.current.value, orderProduct.productName, orderProduct.productImage, quantity.current.value, orderProduct.productPrice)

          console.log(data)
          navigate("/orders")
        } catch (error) {
          console.log(error)
        }
      }
      const orderClickHandler = async(productName, productImage, productPrice)=>{
        await setOrderProduct({productName, productImage, productPrice})
        setOrderPage(true)
        
      }
      console.log(cartItems)
  return (
    <div className="h-full w-[100%] bg-black flex flex-col justify-center items-center overflow-y-auto  ">
  <h1 className="text-3xl font-extralight text-left h-[15%] text-white">YOUR CART</h1>
  <div className='h-[90%] w-[90%]  flex  justify-center items-center  '>
      <div className="h-[100%] w-[100%]  flex flex-wrap  items-center justify-center gap-8   ">
        {cartItems.map(({ _id,userEmail,  productImage, productName, productDesc, productPrice }) => (
          <div key={_id} className="shadow-md w-[80%] rounded-lg p-6 flex flex-row justify-center items-center group transform transition-all hover:-translate-y-2 bg-white gap-8 hover:white">
          <div className="w-[30%]">
            <img src={productImage} alt={productName} className="w-80 h-48 object-cover mb-4 rounded" />
          </div>
    
          <div className="w-2/3 pl-6 flex flex-col justify-between ">
            <div className='w-full'>
              
              <h2 className="text-xl font-semibold group-hover:text-black text-black">{productName}</h2>
              
            
              <p className="text-black group-hover:text-black  mb-0">{productDesc}</p>
              <span className="text-4xl font-bold text-black">{productPrice}</span>
            </div>
    
           
            <div className="flex justify-end  mt-1 items-end gap-3">
              <button onClick={()=>orderClickHandler(productName, productImage, productPrice)} className='bg-black text-white w-[20%] rounded-md px-2 py-2 font-bold '>Order Now!</button>
              <button onClick={()=>removeHandler(userEmail, _id)}
                className="text-white font-bold py-2 px-4 rounded bg-red-600 hover:bg-red-700">
                REMOVE FROM CART
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
      </div>
      {
        orderPage && (
          <div className='h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50'>
          <div className='h-[70%] w-[40%] border-2 border-black bg-gray-50 flex flex-col justify-center items-center rounded-xl'>
            <div className='h-[13%] w-full bg-black text-white border-2 rounded-xl border-gray-600   flex items-center justify-center'>
              <div className='h-full w-[80%] flex justify-between items-center'>
                <h2 className='text-white  text-2xl font-semibold'>Add a product</h2>
                <X onClick={() => setOrderPage(false)} className='h-8 w-8  text-white text-sm'/>
                
              </div>
            </div>

            
            <form onSubmit={orderHandler} className='flex flex-col justify-center items-center h-[90%] w-[90%] gap-4'>
              <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='User Address' required ref={address} />
              <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='User Phone Number' required ref={phno} />
              <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product Quantity' required ref={quantity} />
              
              <button className='bg-black text-white w-[20%] rounded-md px-4 py-2' type='submit'>Add</button>
            </form>
          </div>
        </div>
        )
      }
    </div>
  );
}

export default Cart;