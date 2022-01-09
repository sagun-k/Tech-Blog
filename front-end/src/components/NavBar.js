import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [disp,setDisp]=useState("hidden")
  const[high,setHigh]=useState('0')
  const[time,setTime]=useState('0')
  const handledisplay=()=>{
    if(disp==='hidden'){
      setDisp("block")
      setHigh("auto")
      setTime("100")
    }else{
      setDisp('hidden')
      setHigh("0")
      setTime("0")
    }
  }
  return (
    <div className={`w-full bg-zinc-800 fixed z-20 shadow-2xl`}>
      <nav className="  flex items-center justify-between flex-wrap w-3/4 mx-auto  p-6">
        <div className=" flex items-center flex-shrink-0 text-white mr-6">
          <span className="font-bold text-4xl text-purple-500">MyBlogs</span>
        </div>
        <div className="block lg:hidden">
          <button
            onClick={handledisplay}
            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className={`w-full  ${disp} h-${high} delay-${time} flex-grow lg:grid lg:grid-cols-6   lg:w-auto `}>
          <div className="text-sm lg:flex-grow lg:col-start-4 lg:col-end-6 lg:grid lg:grid-cols-3">
            <Link
              to="/"
              className="block mt-4 lg:text-lg text-md lg:inline-block lg:mt-0 text-white hover:text-purple-600 mr-4"
            > 
              Home
            </Link>
            <Link
            activeClassName='is-active'
              to="/blog"
              className="block mt-4 lg:text-lg text-md lg:inline-block lg:mt-0 text-white hover:text-purple-600 mr-4"
            >
              Blog
            </Link>
            <a
              href="#responsive-header"
              className="block mt-4 lg:text-lg text-md lg:inline-block lg:mt-0 text-white hover:text-purple-600"
            >
              About
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
