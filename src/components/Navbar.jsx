import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";
import Logo1 from "../assets/logo.jpeg";
import { useState } from "react";

const Navbar = () => {
  const [mobileNav, setMobileNav] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="relative  w-full shadow-md">



      <div className="w-full bg-white">
        <nav className="w-full flex items-center justify-between text-[#353030] h-18 max-w-[800px] lg:max-w-[1100px] 2xl:max-w-[1300px] mx-auto">
          <Link
            to={"/"}
            className="flex items-center justify-center w-[8rem] h-auto"
          >
            <img
              src={Logo}
              class="z-100"
              alt="logo"
              className="w-full h-auto cursor-pointer"
            />
            {/* <b class='px-0' > Bhakti Shakti Yog   
               Foundation</b> */}
            <b class='h-14 m-0 z-100'> <p className='text-[#3b82f6]'>BHAKTI</p> <p className='text-[#65a30d]'>SHAKTI  YOG </p>
              <p className='text-[#fb923c]'>FOUNDATION</p></b>
          </Link>
          <ul className="flex text-[17px] font-normal desktop-nav-links">
            <li className="hover:text-black py-7 relative group">
              <Link to="/" className="cursor-pointer px-3">
                Home
              </Link>
              <div
                className={`absolute bottom-5 left-0 h-0.5 bg-black ${pathname == "/" ? "w-full" : "w-0"
                  } transition-all duration-300 group-hover:w-full`}
              ></div>
            </li>
            {/* <li className="hover:text-black py-7 relative group">
              <Link to="/sadguru" className="cursor-pointer px-3">
                Sadguru
              </Link>
              <div
                className={`absolute bottom-5 left-0 h-0.5 bg-black  ${
                  pathname == "/sadguru" ? "w-full" : "w-0"
                } transition-all duration-300 group-hover:w-full`}
              ></div>
              <ul className="invisible group-hover:visible absolute z-10 top-[5.4rem] left-0 bg-stone-700 font-normal text-white py-2 min-w-[250px] shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 text-[15px]">
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/" className="relative px-4 py-3 capitalize">
                    Man
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/" className="relative px-4 py-3 capitalize">
                    Mystic
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/" className="relative px-4 py-3 capitalize">
                    Mission
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/" className="relative px-4 py-3 capitalize">
                    Meet Sadguru
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
              </ul>
            </li> */}
            <li className="hover:text-black py-7 relative group">
              <Link to="/wisdom" className="cursor-pointer px-3">
                Wisdom
              </Link>
              <div
                className={`absolute bottom-5 left-0 h-0.5   ${pathname == "/wisdom" ? "w-full" : "w-0"
                  } transition-all duration-300 group-hover:w-full`}
              ></div>
              <ul className="invisible group-hover:visible absolute z-10 top-[5.4rem] left-0  font-normal  py-2 min-w-[250px] shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 text-[15px]">
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                    Quotes
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  Blog
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  satsang
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  spiritual vidos
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  Pranayam
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  Pranayam
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
              </ul>
            </li>
            {/* <li className="hover:text-black py-7 relative group">
              <Link to="/contact-us" className="cursor-pointer px-3">
                Contact Us
              </Link>
              <div
                className={`absolute bottom-5 left-0 h-0.5 bg-black ${
                  pathname == "/contact-us" ? "w-full" : "w-0"
                } transition-all duration-300 group-hover:w-full`}
              ></div>
            </li> */}
            <li className="hover:text-black py-7 relative group">
              <Link to="/contact-us" className="cursor-pointer px-3">
                Events
              </Link>
              <div
                className={`absolute bottom-5 left-0 h-0.5 bg-black ${pathname == "/contact-us" ? "w-full" : "w-0"
                  } transition-all duration-300 group-hover:w-full`}
              ></div>
            </li>
            <li className="hover:text-black py-7 relative group">
              <Link to="/contact-us" className="cursor-pointer px-3">
                Courses
              </Link>
              <div
                className={`absolute bottom-5 left-0 h-0.5 bg-black ${pathname == "/contact-us" ? "w-full" : "w-0"
                  } transition-all duration-300 group-hover:w-full`}
              ></div>
              <ul className="invisible group-hover:visible absolute z-10 top-[5.4rem] left-0  font-normal  py-2 min-w-[250px] shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100 text-[15px]">
                {/* <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                    Quotes
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li> */}
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  Bal sanskar shibir
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  Science Of silence yoga
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  Advance meditation course
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  Sharwan nity sadhana
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
                <li className="parent-li flex pl-2 hover:pl-6 transition-all duration-150">
                  <Link to="/quotes" className="relative px-4 py-3 capitalize">
                  
High Consciousness Sadhna
                    <div className="absolute bottom-0 left-0 h-0.5 bg-white w-0 transition-all duration-300"></div>
                  </Link>
                </li>
              </ul>

            </li>
            <li className="hover:text-black py-7 relative group">
              <Link to="/contact-us" className="cursor-pointer px-3">
                Contact Us
              </Link>
              <div
                className={`absolute bottom-5 left-0 h-0.5 bg-black ${pathname == "/contact-us" ? "w-full" : "w-0"
                  } transition-all duration-300 group-hover:w-full`}
              ></div>
            </li>




            {/* <li className="hover:text-fourth py-5 relative group">
              <Link to="" className="cursor-pointer px-3">
                Yoga & Meditation
              </Link>
              <nav
                className="invisible group-hover:visible absolute z-10 top-16 left-0 bg-white font-normal text-gray-700 py-2 shadow-lg 
              w-[800px] grid grid-cols-3"
              >
                <ul className="min-w-[200px]">
                  <li className="flex hover:text-fourth font-medium text-gray-800">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Beginner's Programs
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Systematic process of purifying Panchkoshas for perfect
                      health
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      loving relationship
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      life of abundance
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Joyfully cure for all chronic Diseases
                    </Link>
                  </li>
                </ul>
                <ul className="min-w-[200px]">
                  <li className="flex hover:text-fourth font-medium text-gray-800">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Children Programs
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Complete child development through pranayama
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Meditation & lots of fun. Realisation one’s own greatness
                    </Link>
                  </li>
                </ul>
                <ul className="min-w-[200px]">
                  <li className="flex hover:text-fourth font-medium text-gray-800">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Teenagers Programs
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Let’s provide opportunity to your child to grow within
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Complete personality Development Programme
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Meditation
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Realisation of self-potential
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      How to set Vision
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      How to be well focused & Confident
                    </Link>
                  </li>
                </ul>
                <ul className="min-w-[250px]">
                  <li className="flex hover:text-fourth font-medium text-gray-800">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Advance Programs
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      AMC is called Nitya Samadhi
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      love Sadhana Seeing godliness in everyone Experiencing
                      within love & silence
                    </Link>
                  </li>
                </ul>
              </nav>
            </li> */}
            {/* <li className="hover:text-fourth py-5 relative group">
              <Link to="" className="cursor-pointer px-3">
                Events
              </Link>
              <nav
                className="invisible group-hover:visible absolute z-10 top-16 left-0 bg-white font-normal text-gray-700 py-2 shadow-lg 
              w-[700px] grid grid-cols-3"
              >
                <ul className="min-w-[200px]">
                  <li className="flex hover:text-fourth font-medium text-gray-800">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      monthly - weekly satsang
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Saptaha satsang
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Jodi Satsang
                    </Link>
                  </li>
                </ul>
                <ul className="min-w-[200px]">
                  <li className="flex hover:text-fourth font-medium text-gray-800">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      annual events
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Gurupurnima Celebration
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      International Yoga Day
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Guruji’s Punyatithi
                    </Link>
                  </li>
                </ul>
                <ul className="min-w-[200px]">
                  <li className="flex hover:text-fourth font-medium text-gray-800">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      special events
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Sadhana Shibir
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Padayatra
                    </Link>
                  </li>
                  <li className="flex hover:text-fourth">
                    <Link
                      to="/"
                      className="w-full pl-4 py-3 hover:bg-gray-100 capitalize"
                    >
                      Trek
                    </Link>
                  </li>
                </ul>
              </nav>
            </li>
            <li className="hover:text-fourth py-5 relative">
              <Link to="" className="cursor-pointer px-3">
                Centers
              </Link>
            </li>
            <li className="hover:text-fourth py-5 relative">
              <Link to="" className="cursor-pointer px-3">
                Health
              </Link>
            </li>
            <li className="hover:text-fourth py-5 relative">
              <Link to="" className="px-3">
                Outreach
              </Link>
            </li> */}

          </ul>
          <div className="flex items-center gap-6">
            <div
              className="hidden items-center justify-center mobile-nav-links-toggle"
              onClick={() => setMobileNav(true)}
            >
              {/* <AiOutlineMenu className="w-8 h-8 text-gray-500 cursor-pointer" /> */}
            </div>
            <div className="flex items-center justify-center">
              {/* <BiSearchAlt2 className="w-8 h-8 text-gray-500 cursor-pointer" /> */}
            </div>

            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search..</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  {/* <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"/>
            </svg> */}
                  <AiOutlineSearch className="w-6 h-6" />
                </div>

                <input type="text" id="simple-search" class=" border border-gray-200   text-gray-900 text-sm rounded-lg focus:border-gray-600 focus:border-gray-400 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-200 dark:placeholder-gray-400 dark:text-white dark:focus:border-gray-200 " placeholder="Search..." required />
              </div>
              {/* <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
        </svg>
        <span class="sr-only">Search</span>
    </button> */}
            </form>

            {/* <button className="py-3 px-10 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-sm">
              Donate
            </button> */}
          </div>
        </nav>
      </div>
      <div
        className={`absolute top-0 left-0 w-screen h-screen z-10 bg-[#1C110B] overflow-hidden ${mobileNav ? "block" : "hidden "
          }`}
      >
        <div className="flex items-center justify-between px-6 py-10">
          <div className="flex items-center justify-center w-20 lg:w-[7rem] h-auto">
            <img
              src={Logo1}
              alt="logo"
              className="w-full h-auto cursor-pointer"
            />
          </div>
          <div
            className="flex items-center gap-2  cursor-pointer text-gray-400 hover:text-gray-300 text-lg font-medium"
            onClick={() => setMobileNav(false)}
          >
            Close
            <AiOutlineClose className="w-8 h-8 text-white hover:text-slate-200 hover:rotate-180 transition-all duration-300" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 w-full mt-[5%]">
          {/* <Link
            to={"/sadguru"}
            className="flex justify-center items-center gap-8 cursor-pointer"
          >
            <span className="text-white text-2xl font-semibold">Sadguru</span>
            <BsArrowRight className="w-8 h-8 text-white hover:text-slate-200" />
          </Link> */}
          <Link
            to={"/"}
            className="flex justify-center items-center gap-8 cursor-pointer"
            onClick={() => setMobileNav(false)}
          >
            <span className="text-white text-2xl font-semibold">Home</span>
            {/* <BsArrowRight className="w-8 h-8 text-white hover:text-slate-200" /> */}
          </Link>

          <Link
            to={"/quotes"}
            className="flex justify-center items-center gap-8 cursor-pointer"
            onClick={() => setMobileNav(false)}
          >
            <span className="text-white text-2xl font-semibold">Wisdom</span>
            {/* <BsArrowRight className="w-8 h-8 text-white hover:text-slate-200 rotate-90" /> */}
          </Link>

          <Link
            to={"/quotes"}
            className="flex justify-end items-center gap-2 cursor-pointer"
            onClick={() => setMobileNav(false)}
          >
            <BsArrowRight className="w-6 h-6 text-white hover:text-slate-200 pl-2" />

            <span className="text-white text-2xl font-semibold">Quotes</span>
          </Link>
          <Link
            to={"/contact-us"}
            className="flex justify-end items-center gap-2 cursor-pointer"
            onClick={() => setMobileNav(false)}
          >

            <span className="text-white text-2xl font-semibold">Contact Us</span>
          </Link>
          <Link
            to={"/"}
            className="flex justify-end items-center gap-2 cursor-pointer"

          >

            <span className="text-white text-2xl font-semibold">Events</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
