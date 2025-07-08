import React, { useState } from 'react'
import { Link } from 'react-router-dom'  // import Link

const Signup = () => {

  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const createUser = (e) => {
    e.preventDefault();
  }
  return (
    <>
      <div className=" flex flex-col items-center justify-center min-h-screen !bg-[#f1f1f1]">
        <form onSubmit={createUser} className='flex flex-col w-[25vw] h-auto px-[30px] bg-[#fff] rounded-[10px] p-[20px] gap-[20px]'>

          <img
            className='w-[80px] h-[45px] self-center'
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBI2KVWv2BVSrhpjaWAxnJ2z5FctP0b47jg&s"
            alt=""
          />

          <h3 className='self-center font-[600] text-2xl'>Sign up to see more</h3>

          <div className="inputBox12">
            <input required
              onChange={(e) => { setUsername(e.target.value) }}
              value={username}
              type="text"
              placeholder='Username'
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="inputBox12">
            <input required
              onChange={(e) => { setName(e.target.value) }}
              value={name}
              type="text"
              placeholder='Name'
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="inputBox12">
            <input required
              onChange={(e) => { setEmail(e.target.value) }}
              value={email}
              type="text"
              placeholder='Email'
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <div className="inputBox12">
            <input required
              onChange={(e) => { setPassword(e.target.value) }}
              value={password}
              type="text"
              placeholder='Password'
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>

          <p className='text-[13px] text-red-500'>{error}</p>

          <p className='text-sm'>
            Already have an account{' '}
            <Link to="/login" className='text-[#0e65e7] cursor-pointer'>Login</Link>
          </p>

          <button className='bg-[#e60023] text-white p-2 rounded-[30px] ' >
            Sign Up
          </button>

        </form>
      </div>
    </>
  )
}

export default Signup
