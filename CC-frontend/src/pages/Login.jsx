import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../state/store'
import { loginAuthentication } from '../services/api'
import toast from 'react-hot-toast'


const Login = () => {
    const userEmail = useRef(null)
    const userPassword = useRef(null)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginHandler=async(e)=>{
        e.preventDefault()

        const email = userEmail.current.value
        const password = userPassword.current.value

        await loginAuthentication(email, password)
        .then((fetchedData)=>{
            
            const {message, name, admin, token} = fetchedData.data
            console.log(fetchedData.data)
            if(message==="successful")
                {
                    localStorage.setItem('token', token);
                    dispatch(login({
                    name:name,
                    email:email,
                    admin:admin,
                    token:token
                }))
                navigate("/home")
            }
            else if(message==="failed")
            {
                console.log("password is incorrect")
                toast.error("Password incorrect",{
                    duration: 4000, 
                    position: 'top-left', 
                })
            
            }
            else
            {
                console.log(message)
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
  <span class="block text-gray-600  italic font-qwitcher text-6xl">Craftsy Creations</span>
</h2>
        <p className='text-wrap text-sm mb-5 font-extralight'><span className='font-semibold'>Log In</span> to discover one-of-a-kind handmade crafts that bring warmth and artistry to your life.</p>
        <form 
        onSubmit={loginHandler}
         className="space-y-6 flex flex-col justify-center items-center">
            
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
                Login
            </button>
            
        </form>
        <p className='text-sm mt-4 font-extralight '>Don't have an account? <span className='font-semibold hover:underline'><Link to="/register">Sign Up</Link></span></p>
    </div>
    </div>
    <div className='flex  box-border border-black w-[80%] h-[100%] rounded-3xl items-center justify-center'>

        <img src="https://i.pinimg.com/564x/5d/30/16/5d30167d065e4497f215f778aebd002d.jpg" alt="jnjnjn" className=' flex justify-center items-center h-[90%] w-[90%] rounded-3xl'/>
        </div>
        </div>
</div>
  )
}

export default Login