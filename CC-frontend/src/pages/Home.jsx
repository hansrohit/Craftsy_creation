import React from 'react';
import { useSelector } from 'react-redux';

import { selectCurrenttoken, selectCurrentUser } from '../state/store';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  
  const token = useSelector(selectCurrenttoken) || localStorage.getItem('token');
  const name = useSelector(selectCurrentUser)
  
  return (
    <div className="h-full overflow-y-auto bg-black text-white">
      
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1529690840038-f38da8894ff6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBvdHRlcnl8ZW58MHwwfDB8fHww')" }}>
        
        
        <div className="z-10">
          <Navbar navColor={true} />
        </div>

        
        <div className="absolute inset-0 bg-black opacity-70 flex justify-center items-center flex-col gap-4">
          <h1 className='text-5xl '>Welcome <span className='font-d'>{name} !</span></h1>
          <h2 className="text-5xl font-bold z-10">Discover Unique Handmade Products</h2>
          <div className="text-sm font-extralight z-10">Every handmade piece is a reminder that beauty lies in imperfections, making each creation one-of-a-kind.</div>
          <button className='bg-[#353636] h-[5%] w-[10%] z-10 text-white rounded-md hover:bg-[#7a7b7b]'>
            <Link to="/products">SHOP NOW</Link> 
            </button>
        </div>
      </div>

      
      <footer className="bg-white text-black text-center p-8 h-[66vh]  flex justify-center items-center flex-col">
        <p className='text-3xl border-b-2 border-black font-bold mb-6 font-qwitcher'>Craftsy Creations</p>
        <div className="space-y-4 w-[80%]">
          <p className="text-3xl font-semibold">About Us</p>
          <p className="text-sm ">At Craftsy Creations, we believe in the timeless beauty of handmade artistry. Our journey began with a shared passion for craftsmanship and a desire to bring unique, one-of-a-kind pieces to life. Every product we create is thoughtfully designed and made with care, ensuring that each item carries its own special story.</p>
          <p className="text-3xl font-semibold">Our Vision</p>
          <p className="text-sm">We envision a world where handcrafted items are valued for their authenticity and soul. Our mission is to connect artisans with those who appreciate the artistry and effort involved in handmade products. By choosing Craftsy Creations, you're not just buying a product – you're supporting creativity, craftsmanship, and sustainable practices.</p>
          <p className="text-md font-semibold">KARTHICK | HANS ROHIT | RASHWANTH | AKSHAY KARTHIK</p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
