  
import React,{useState} from "react";
import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";
import { AiOutlineArrowLeft } from "react-icons/ai";

//components
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";

const MobileNav = ({SignIn,SignUp}) => {
  const [isDropdownOpen,setIsDropdownOpen]= useState(false);
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
        <AiOutlineArrowLeft/>
      <div className="w-28">
        <img
          src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
          alt="logo"
          className="w-full h-full"
        />
      </div>
      <div className="flex items-center gap-3">
        <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
          Use App
        </button>
        <span onClick={()=>setIsDropdownOpen((prev)=>!prev)} className="border p-2 border-gray-300 text-zomato-400 rounded-full">
          <FaUserAlt onClick={()=>setIsDropdownOpen((prev)=>!prev)} />
        </span>
         {
         isDropdownOpen && (
              <div className="absolute w-full -bottom-20 py-3 -right-4 bg-white z-10 flex flex-col gap-2 shadow-lg"> 
              <button onClick={SignIn}>Sign In</button>
              <button onClick={SignUp} >Sign Up</button>
              </div>
        )}
      </div>
    </div>
  );
};

const LargeNav = ({SignIn,SignUp}) => {
  return (
    <>
      <div className="hidden lg:inline container px-20 mx-auto">
        <div className="hidden gap-4 w-full items-center justify-around lg:flex ">
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className=" w-3/4 bg-white shadow-md p-3 flex items-center gap-3  border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Alwar"
                className=" focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <RiSearch2Line />
              <input
                type="search"
                placeholder="Search for restaurant, cuisine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="ml-28 flex gap-4 ">
            <button onClick={SignIn} className="text-gray-500 text-xl hover:text-gray-800">
              Login
            </button>
            <button onClick={SignUp}  className="text-gray-500 text-xl hover:text-gray-800">
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const RestaurantNavbar = () => {
  const[openSignIn,setOpenSignIn]= useState(false)
  const[openSignUp,setOpenSignUp]= useState(false)
  const OpenSignInModal = ()=>setOpenSignIn(true)
  const OpenSignUpModal = ()=>setOpenSignUp(true)
  return (
    <>
    <SignIn isOpen={openSignIn} setIsOpen={setOpenSignIn}/>
    <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp}/>
      <nav className="p-4 flex bg-white shadow-md lg:shadow-none w-full items-center">
      <MobileNav SignIn={OpenSignInModal} SignUp={OpenSignUpModal}/>
        <LargeNav SignIn={OpenSignInModal} SignUp={OpenSignUpModal} />
      </nav>
    </>
  );
};   

export default RestaurantNavbar;