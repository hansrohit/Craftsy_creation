import React, { useState } from 'react';
import { addToCart } from '../services/api';
import { useSelector } from 'react-redux';
import { selectCurrentEmail } from '../state/store';

const ProductCard = ({ image, title, description, price }) => {
    const email = useSelector(selectCurrentEmail)
    console.log(email)
    const [inCart, setInCart] = useState(false)

    
    const AddToCart = async()=>{
      
      try {
        const {data}=await addToCart(email, image, title, description, price)
        console.log(data)
        setInCart(true)
      } catch (error) {
        
        console.log(error)
      }
        
    }
  return (
    <div className="shadow-md rounded-lg p-6 max-w-xs flex flex-col justify-between group transform transition-all hover:-translate-y-2 bg-[#40583d] hover:bg-[#2d3b2c]">
      <div>
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
        <h2 className="text-xl font-semibold mb-2 group-hover:text-[#4d6e4b] text-[#84a682]">{title}</h2>
        <p className="text-black mb-4 group-hover:text-white">{description}</p>
      </div>
      <div className="mt-auto">
        <span className="text-lg font-bold text-[#84a682] block mb-4 flex flex-col justify-center items-center w-full text-2xl">{price}</span>
        <button onClick={AddToCart}
          className="w-full text-white font-bold py-2 rounded bg-[#84a682]" 
          >
          {!inCart ? "ADD TO CART" : "Go To Cart"}
        </button>
        <button className="w-full my-2 text-white font-bold py-2 rounded bg-[#ed3700]"> Delete Product</button>
      </div>
    </div>
  );
}

export default ProductCard;