import React, { useRef } from 'react'
import { signinAuthentication } from '../services/api'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
    const userName = useRef(null)
    const userEmail = useRef(null)
    const userPassword = useRef(null)

    const navigate = useNavigate()

    const signinHandler=async(e)=>{
        e.preventDefault()
        const name = userName.current.value
        const email = userEmail.current.value
        const password = userPassword.current.value
        await signinAuthentication(name, email, password)
        .then(({data})=>{
            if(data.message==="successful")
            {
                console.log("registration successful")
                navigate("/")
            }
            else if(data.message==="failed")
            {
                console.log("user Already exist")
            }
        })
        .catch((error)=>{
            console.log(error)
        })
    }
  return (
    <div
        className="flex items-center justify-center h-screen bg-black"
        
    >
        <div className='bg-white flex w-[60%] h-[80%] rounded-3xl '>
        <div className="bg-white rounded-3xl p-8 max-w-md w-full flex justify-center items-center w-[50%] ">
        <div className=' flex flex-col justify-center items-center'>
        <h2 class="text-2xl text-center text-gray-800 mb-5 font-semibold">
  <span>WELCOME TO</span> <br />
  <span class="block  text-gray-600 text-6xl italic font-qwitcher">Craftsy Creations</span>
</h2>

            <p className='text-wrap text-sm mb-5 font-extralight'><span className='font-semibold'>Sign In </span> to explore unique, handcrafted creations made with love and creativity by skilled artisans.</p>
            <form 
            onSubmit={signinHandler}
             className="space-y-6 flex flex-col justify-center items-center">
                
                <div className='flex justify-start flex-col'>
                    
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full px-4 py-2 border-b-2 focus:outline-none  border-black  hover:border-gray-400  "
                        ref={userName}
                        required
                    />
                </div>
                <div className='flex justify-start flex-col'>
                    
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border-b-2 focus:outline-none  border-black  hover:border-gray-400  "
                        ref={userEmail}
                        required
                    />
                </div>
                <div className='flex justify-start flex-col'>
                
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border-b-2 focus:outline-none border-black  hover:border-gray-400 "
                        ref={userPassword}
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full text-white py-2 rounded-md transition duration-300 bg-black hover:bg-[#4f4d4d]"
                    
                >
                    Sign In
                </button>
                
            </form>
        </div>
        </div>
        <div className='flex  box-border border-black w-[80%] h-[100%] rounded-3xl items-center justify-center'>
            
            <img src="https://i.pinimg.com/564x/5d/30/16/5d30167d065e4497f215f778aebd002d.jpg" alt="jnjnjn" className='rounded-lg flex justify-center items-center h-[90%] w-[90%] rounded-3xl'/>
            </div>
            </div>
    </div>
  )
}

export default Signin