import { AiOutlineClose, AiOutlineContacts, AiOutlineMail, AiOutlineMenu,MdAppRegistration, AiOutlineShoppingCart, AiOutlineForm } from "react-icons/ai";
import { BiDonateHeart, BiLogIn, BiSearchAlt2 } from "react-icons/bi";
import { BsArrowRight, BsTelephone } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import Shopping from "../assets/logo.png";
// import Logo1 from "../assets/logo.jpeg";
import { useState } from "react";
import LogOut from "./auth/Logout";

const TopNavbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { pathname } = useLocation();

  return (

    
       <header className="w-full  shadow-md">
      <div className="bg-gray-500">
        <div className="w-full flex items-center gap-20 justify-end pr-[10%] max-w-[1300px] mx-auto">
          <ul className="flex items-center gap-6 py-2 text-[#ffffff]   text-xs font-medium">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
                 {/* <img
              src={Member}
              alt="logo"
              className="w-5 h-auto cursor-pointer"
            /> */}
               <AiOutlineForm className="w-5 h-5" />
              Membership
               </Link>
               </li>

               <li>
              <Link
                to="/"
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
                    {/* <img
              src={Shopping}
              alt="shopping"
              className="w-5 h-auto cursor-pointer"
            /> */}
               <BiDonateHeart className="w-5 h-5" />
               Donate
               </Link>
               </li>
               
               <li>
              <Link
                to="/"
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
<AiOutlineShoppingCart className="w-5 h-5" />               Shop
               </Link>
               </li>

               <li>
              <Link
                to="/"
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
               <BsTelephone className="w-4 h-4" />
               Contact
               </Link>
               </li>

             <li>
              <Link
                to="/login"
                className="flex   cursor-pointer hover:text-white"
              >

               Login
               </Link>
               
               </li>
               <li>
             
             
               <Link
                to="/register"
                className="flex  cursor-pointer hover:text"
              >
                                            

               Sign up
               </Link>
               </li>
              <li>
               <Link
                to="/"
                className="flex  cursor-pointer hover:text"
              >
                                            

                                            <LogOut/>
               </Link>
               </li>
              
               


               </ul>
               </div>
               {/* <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div> */}
               </div>
               </header>


    
  );
};

export default TopNavbar;
