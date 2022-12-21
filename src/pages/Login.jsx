import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
    const [email, setEmail] =useState('')
    const [password, setPassword] = useState('')
    const {user,logIn} =UserAuth()
    const navigate =useNavigate()
    const[error, setError] =useState('')

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try{
                await logIn(email, password)
                navigate('/')
        }catch(error){
            console.log(error)
            setError(error.message)
        }
    }

  return (
    <div><>
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/0678255b-ecfd-4775-999a-0680d539f07c/5d715e0d-a0c2-4bd3-8c99-a1e7e0ec6e2d/IN-en-20221128-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
        <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white '>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-blod'>Sign In</h1>
                    {error?<p className='p-3 bg-red-400 my-2'>{error}</p> :null}
                    <form onSubmit={handleSubmit}
                    className='w-full flex flex-col py-4' >
                        <input onChange={(e) => setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                        <input  onChange={(e) => setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                        <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                        <div className='text-sm text-gray-600 flex justify-between items-center'>
                            <p><input className='mr-2' type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='text-sm py-8 '><span className='text-gray-600'>New to Netflix?</span><Link to='/login'>Sign Up Now</Link></p>
                        <p className=' text-xs text-blue-700'><span className='text-gray-600'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</span>Learn more.</p>
                    </form>

                </div>
            </div>
        </div>
    </div>
    </></div>
  )
}

export default Login