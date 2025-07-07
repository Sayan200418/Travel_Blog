import React, { useState } from 'react';
import logo from "../images/jj.png";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import SignUp from "../pages/Signup"
import Login from "../pages/Login";
import Explore from "../pages/Explore";  //  Import Explore page

const Navber = () => {
    const [showSignUp, setShowSignUp] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showExplore, setShowExplore] = useState(false); //  New Explore state

    return (
        <>
            <div className="navbar flex item-center h-[40px] px-[8px] mt-5">
                <img className='w-[120px]! h-[20]' src={logo} alt="" />
                <div className="btns ml-7 flex item-center front-[500] gap-[25px]">
                    <button>Today</button>
                    <button>Watch</button>
                    <button
                        className='abc bg-[black] text-white'
                        onClick={() => setShowExplore(true)} //  Show Explore modal
                    >
                        Explore
                    </button>
                </div>

                <div className="inputBox w-[57vw] rounded-[30px] ml-5 flex items-center bg-gray-100 p-2">
                    <i className='ml-3 text-[gray]'><FaSearch /></i>
                    <input className='rounded-[30px] ml-2 outline-none bg-transparent' type="text" placeholder='Search here..........' />
                </div>

                <div className="flex ml-8 item-center gap-[10px]">
                    <button className='btnNormal' onClick={() => setShowLogin(true)}>Login</button>
                    <button
                        className='btnNormal !bg-[#E60023] text-white'
                        onClick={() => setShowSignUp(true)}
                    >
                        Sign up
                    </button>
                    <i className='ml-3'><IoIosArrowDown /></i>
                </div>
            </div>

        
            {showSignUp && (
                <div className="fixed inset-0 bg-[#f1f1f1] flex items-center justify-center z-50">
                    <button
                        className="absolute top-5 right-5 text-3xl font-bold text-gray-700"
                        onClick={() => setShowSignUp(false)}
                    >
                        &times;
                    </button>
                    <SignUp />
                </div>
            )}

            
            {showLogin && (
                <div className="fixed inset-0 bg-[#f1f1f1] flex items-center justify-center z-50">
                    <button
                        className="absolute top-5 right-5 text-3xl font-bold text-gray-700"
                        onClick={() => setShowLogin(false)}
                    >
                        &times;
                    </button>
                    <Login />
                </div>
            )}

            
            {showExplore && (
                <div className="fixed inset-0 bg-[white] items-center justify-center z-50 overflow-auto">
                    <button
                        className="absolute top-5 right-5 text-3xl font-bold "
                        onClick={() => setShowExplore(false)}
                    >
                        &times;
                    </button>
                    <Explore />
                </div>
            )}
        </>
    );
};

export default Navber;
