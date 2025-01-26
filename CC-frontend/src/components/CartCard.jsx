import React from 'react';
import {  removeCartItem } from '../services/api';
const CartCard = ({email, id, image, title, description, price }) => {
    
    const removeHandler=async()=>{
        try {
          const {data} = await removeCartItem(email, id)
          console.log(data)
        } catch (error) {
          console.log(error)
        }
    }
  return (
    <div className="shadow-md rounded-lg p-6 flex flex-row justify-between group transform transition-all hover:-translate-y-2 bg-[#40583d] hover:bg-[#2d3b2c] w-full">
      <div className="w-1/3">
        <img src={image} alt={title} className="w-full h-48 object-cover mb-4 rounded" />
      </div>

      <div className="w-2/3 pl-6 flex flex-col justify-between ">
        <div>
          
          <h2 className="text-xl font-semibold group-hover:text-[#4d6e4b] text-[#84a682]">{title}</h2>
          
        
          <p className="text-black group-hover:text-white mb-0">{description}</p>
          <span className="text-4xl font-bold text-[#84a682]">{price}</span>
        </div>

       
        <div className="flex justify-end  mt-1 items-end">
          <button onClick={removeHandler}
            className="text-white font-bold py-2 px-4 rounded bg-red-600 hover:bg-red-700">
            REMOVE FROM CART
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartCard;