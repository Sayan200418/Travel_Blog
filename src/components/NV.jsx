import React, { useState } from 'react';
import logo from "../images/logo.png";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import SignUp from "../pages/SignUp"; 

const Navber = () => {

    const [showSignUp, setShowSignUp] = useState(false);

    return (
        <>
            <div className="navbar flex items-center h-[40px] px-[8px] mt-5">
                <img className='w-[120px] h-[20px]' src={logo} alt="" />
                <div className="btns ml-7 flex items-center font-[500] gap-[25px]">
                    <button>Today</button>
                    <button>Watch</button>
                    <button className='abc bg-[black] text-white'>Explore</button>
                </div>

                <div className="inputBox w-[57vw] rounded-[30px] ml-5 flex items-center bg-white p-2">
                    <i className='ml-3 text-[gray]'><FaSearch /></i>
                    <input className='rounded-[30px] ml-2 outline-none w-full' type="text" placeholder='Search here..........' />
                </div>

                <div className="flex ml-8 items-center gap-[10px]">
                    <button className='btnNormal'>Login</button>
                    <button 
                        className='btnNormal !bg-[#E60023] text-white' 
                        onClick={() => setShowSignUp(true)}
                    >
                        Sign up
                    </button>
                    <i className='ml-3'><IoIosArrowDown /></i>
                </div>
            </div>

            
            {showSignUp && <SignUp />}
        </>
    );
};

export default Navber;
