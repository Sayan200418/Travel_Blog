import React, { useState } from 'react'
import { Link } from 'react-router-dom'  // import Link

const Login = () => {

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
                        src="https://tse4.mm.bing.net/th/id/OIP.pJrCufdx4KKP-TmnmnJBbAHaFn?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                        alt=""
                    />

                    <h3 className='self-center font-[600] text-2xl'>Log in to see more</h3>

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
                        Don't have an account{' '}
                        <Link to="/signup" className='text-[#0e65e7] cursor-pointer'>Sign up</Link>
                    </p>

                    <button className='bg-[#e60023] text-white p-2 rounded-[30px] ' >
                        Login
                    </button>

                </form>
            </div>
        </>
    )

}

export default Login;
