import React, { useState } from 'react';
import facebook from "../assets/NicePng_atencion-png_2420123.png";

const Enquirey = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed  z-20 top-[80%] left-0">
      <div className="flex  flex-col gap-2">
        <div>
          {/* <div className="bg-sky-600 rounded-l-full h-12 w-12 flex items-center justify-center"> */}
          {/* <Link
            to="/"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full"
          > */}
          <img src={facebook} onClick={toggleSidebar} alt="social-media-icon" className="h-10 w-10" />
          {/* </Link> */}
        </div>
        <div className={`fixed bottom-10 left-0 h-96 w-48 rounded-lg  bg-blue-800 text-white transition-all duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-64'}`}>

          <div  >


            <div class="w-full max-w-xs ">
              <h3 class="text-lg  text-center m-5">Quick Enquiry</h3>

              <form class="shadow-inner bg-gray-200 font-mono shadow-md rounded px-5 pt-2 pb-2 mb-2">

                <div class="m-4 ">

                  <input class=" text-xs rounded-lg shadow appearance-none border rounded w-full py-2 px-3   focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Full Name" />

                </div>
                <div class="m-4">
                  <input class=" text-xs rounded-lg shadow appearance-none border rounded w-full py-2 px-3   focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Whatsapp " />

                </div>
                <div class="m-4">
                  <input class="text-xs rounded-lg shadow appearance-none border rounded w-full py-2 px-3   focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />

                </div>
                <div class="m-4 ">
                  <textarea class="text- xs rounded-lg shadow appearance-none border rounded w-full py-2 px-3   focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Your Maessage..." />

                </div>
                

      
                <div class="flex items-center justify-between">
                  <button onClick={toggleSidebar} class="bg-blue-800 font-sans hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" type="button">
                    Submit
                  </button>
                  <a onClick={toggleSidebar} class="font-sans inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Cancel
                  </a>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Enquirey;
