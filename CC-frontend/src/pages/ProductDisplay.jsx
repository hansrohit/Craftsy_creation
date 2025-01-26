import React, { useEffect, useRef, useState } from 'react';
import {  X } from "lucide-react";
import { addProducts, addToCart, deleteProducts, getProducts } from '../services/api';
import { useSelector } from 'react-redux';
import { isAdmin, selectCurrentEmail } from '../state/store';
import toast from 'react-hot-toast';

const ProductDisplay = () => {

  const email = useSelector(selectCurrentEmail)
  const adminStatus = useSelector(isAdmin)
  const [inCart, setInCart] = useState(false)
  
  const [products, setProducts] = useState([]); 
  const [addProductsPage, setAddProductsPage] = useState(false); 

  const image = useRef(null);
  const name = useRef(null);
  const desc = useRef(null);
  const price = useRef(null);

  const AddToCart = async(id,productImage, productName, productDesc,productPrice)=>{
    
    try {
      const {data}=await addToCart(email, productImage, productName, productDesc, productPrice)
      console.log(data)
      setInCart((prevState)=>({
        ...prevState,
        [id]:true,
      }))
      toast.success("Added to Cart Successfully",{
        duration:3000,
        position:"bottom-right"
      })
    } catch (error) {
      
      console.log(error)
    }
      
  }
  const deleteHandler=async(id)=>{
    try {
      const {data} = await deleteProducts(id)
      console.log(data)
      fetchProduct()
    } catch (error) {
      console.log(error)
    }
  }

  const fetchProduct = async () => {
    try {
      const { data } = await getProducts();
      if (Array.isArray(data)) {
        setProducts(data); 
      } else {
        console.error("Expected array but got:", data);
      }
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  if (!products) {
    return <h2>Loading...</h2>;
  }

  const productHandler = async (e) => {
    e.preventDefault();
    try {
      const insert = await addProducts(
        image.current.value,
        name.current.value,
        desc.current.value,
        price.current.value
      );
      console.log(insert.data);
      setAddProductsPage(false);
      fetchProduct(); 
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-full p-8 bg-black overflow-y-auto">
      
      <div className='flex justify-between items-center bg-black mb-5'>
        <h1 className="text-3xl  mb-8 text-white  font-extralight">PRODUCTS</h1>
        {adminStatus && (
          <button className="h-[50%] w-[15%] text-black font-bold py-2 rounded bg-white" onClick={() => setAddProductsPage(true)}>
            Add Products
          </button>
        )}
      </div>

      
      <div className="flex flex-wrap justify-center gap-8">
        {products.length > 0 ? products.map(({ _id, productImage, productName, productDesc, productPrice }) => (
          <div key={_id} className="shadow-md rounded-lg p-6 max-w-xs flex flex-col justify-between group bg-white transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-gray-400">
            <div>
              <img src={productImage} alt={productName} className="w-full h-48 object-cover mb-4 rounded" />
              <h2 className="text-xl font-semibold mb-2 text-black">{productName}</h2>
              <p className="text-black mb-4 font-extralight">{productDesc}</p>
            </div>
            <div className="mt-auto">
              <span className="text-lg font-bold text-black block mb-4 text-center">{productPrice}</span>
              <button onClick={() => AddToCart(_id, productImage, productName, productDesc, productPrice)}
                className="w-full text-white font-bold py-2 rounded bg-black">
                {!inCart[_id] ? "ADD TO CART" : "Go To Cart"}
              </button>
              {adminStatus && (
                <button onClick={() => deleteHandler(_id)} className="w-full my-2 text-white font-bold py-2 rounded bg-[#ed3700]">
                  Delete Product
                </button>
              )}
            </div>
          </div>
        )) : <p>No products available</p>}
      </div>

      
      {addProductsPage && (
        <div className='h-screen w-screen absolute top-0 left-0 bg-black/20 flex justify-center items-center z-50'>
          <div className='h-[70%] w-[40%] border-2 border-gray-500 bg-gray-50 flex flex-col justify-center items-center rounded-md'>
            <div className='h-[13%] w-full bg-black  flex items-center justify-center'>
              <div className='h-full w-[80%] flex justify-between items-center'>
                <h2 className='text-white  text-2xl font-semibold'>Add a product</h2>
                <X onClick={() => setAddProductsPage(false)} className='h-8 w-8  text-white text-sm'/>
                
              </div>
            </div>

            
            <form onSubmit={productHandler} className='flex flex-col justify-center items-center h-[90%] w-[90%] gap-4'>
              <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product image' required ref={image} />
              <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product Name' required ref={name} />
              <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product Description' required ref={desc} />
              <input className='w-[80%] px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 ' type='text' placeholder='Product Price' required ref={price} />
              <button className='bg-black text-white w-[20%] rounded-md px-4 py-2 hover:bg-slate-700' type='submit'>Add</button>
            </form>
          </div>
        </div>
      )}
    </div>
  

  );
}

export default ProductDisplay;
