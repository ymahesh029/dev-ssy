import { MdOutlinePerson2 } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState ,useEffect} from "react";

const Register = () => {
    const [items, setItems] = useState({});
    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(items));
      }, [items]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dataToSend = {
        
        username: e.target.username.value,
        password: e.target.password.value,
      email: e.target.email.value,
    };

    const jsonData = JSON.stringify(dataToSend);

    axios
      .post(process.env.REACT_APP_API_URL + "/accounts/addUser/", jsonData, {
        headers: {
          "Content-Type": "application/json", 
        },
      })
      .then((response) => {
        console.log( response.data)
        setItems(response.data)

        toast.success(
          `Thanks ${response.data.user_id} successful log in.`
        );
        e.target.reset();
      })
      .catch((err) => {
      console.log(err)
      toast.error(`${err}!"`)});
  };
  

  return (
    <div class=" h-screen w-full bg-gray-100 ">


 
  
<div class="flex items-center justify-center h-screen shadow-2xl rounded  pt-8 pb-10  ">
  

<form class="w-full max-w-md pt-5 bg-white px-2">
  <div class="text-center text-3xl"> sign up </div>
  <p>Its quick and esay.</p>
  <hr/>
  <div class="flex flex-wrap mx-2 mb-2 pt-3">
    <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
      {/* <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label> */}
      <input class="appearance-none block w-full bg-gray-100 text-gray-600 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="First Name"/>
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-2">
      {/* <label class="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label> */}
      <input class="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Last Name"/>
    </div>
  </div>
  
  <div class="flex flex-wrap mx-2 m-2">
    <div class="w-full px-2">
      {/* <label class="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-password">
        new pass word
      </label> */}
      <input class="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="whatsapp number"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
   <div class="flex flex-wrap mx-2 m-2 px-2">
   <div class="">

      <input class="appearance-none block w-full bg-gray-100 text-gray-600 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="Pin code"/>
    </div>
    </div>
  


  <div class="flex flex-wrap mx-2 mb-2 pt-3">
    <div class="w-full md:w-1/2 px-2 mb-6 md:mb-0">
      {/* <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label> */}
      <input type="date" class="appearance-none block w-full bg-gray-100 text-gray-400 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password"  placeholder="date"/>
      {/* <p class="text-red-500 text-xs italic">Please fill out this field.</p> */}
    </div>
    <div class="w-full md:w-1/2 px-2 inline-block text-gray-400 ">
    <div class="flex flex-wrap w-full border-5 px-2 ">
  <div class="px-6">
  <label>
  <input type="radio"  /> Male
</label>
  </div>
<div>
<div class="px-6">
<label>
  <input type="radio" class="accent-pink-500"  /> Female
</label>
</div>
</div>

  </div>
    </div>
  </div>

  <div class="flex flex-wrap mx-2 m-2">
    <div class="w-full px-2">
      {/* <label class="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-password">
        mobile number
      </label> */}
      <input class="appearance-none block w-full bg-gray-100 text-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="New password"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>

  <div class="flex flex-wrap mx-2 m-2">
    <div class="w-full px-2">
      {/* <label class="block uppercase tracking-wide text-gray-50 text-xs font-bold mb-2" for="grid-password">
        mobile number
      </label> */}
      <input class="appearance-none block w-full bg-gray-100 text-gray-50 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="confirm password"/>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
 
  
  
  <div class="flex flex-wrap mx-2 m-2">
    <div class="w-full px-2">
      
      <button type="button" class=" bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded appearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray focus:border-gray-500"> Sign Up</button>
      {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
    </div>
  </div>
  {/* <div class="flex flex-wrap -mx-2 mb-2">
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
        City
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" type="text" placeholder="Albuquerque"/>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
        State
      </label>
      <div class="relative">
        <select class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
          <option>New Mexico</option>
          <option>Missouri</option>
          <option>Texas</option>
        </select>
        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
      </div>
    </div>
    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
        Zip
      </label>
      <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-zip" type="text" placeholder="90210"/>
    </div>
  </div> */}
  
</form>

  </div>


      
    </div>
  );
};

export default Register;
{/* <form onSubmit={handleSubmit} className="bg-white mt-10 rounded-lg">
          <div className="flex flex-col gap-6 p-5 md:p-20">
            <div className="relative group w-full py-3 border-b border-b-slate-400 focus-within:border-black focus-within:border-[1px] focus-within:border-dotted">
              <input
                type="text"
                placeholder="username"
                name="username"
                
                className="w-full outline-none text-sm pl-10 placeholder:text-gray-800 placeholder:text-base"
                required
               
            />
              <div className="absolute left-0 top-4 flex items-center justify-center">
                <MdOutlinePerson2 className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="relative group w-full py-3 border-b border-b-slate-400 focus-within:border-black focus-within:border-[1px] focus-within:border-dotted">
              <input
                type="email"
                placeholder="email"
                name="email"
                
                className="w-full outline-none text-sm pl-10 placeholder:text-gray-800 placeholder:text-base"
                required
               
            />
              <div className="absolute left-0 top-4 flex items-center justify-center">
                <MdOutlinePerson2 className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="relative group w-full py-3 border-b border-b-slate-400 focus:border-dotted">
              <input
                type="password"
                placeholder="Phpasswordone"
                name="password"
                maxLength={10}
                className="w-full outline-none text-sm pl-10 placeholder:text-gray-800 placeholder:text-base"
                required
                
              />
              <div className="absolute left-0 top-4 flex items-center justify-center">
                <BiPhoneCall className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
            {/* <div className="relative group w-full py-3 border-b border-b-slate-400 focus:border-dotted">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="w-full outline-none text-sm pl-10 placeholder:text-gray-800 placeholder:text-base"
                required
              />
              <div className="absolute left-0 top-4 flex items-center justify-center">
                <AiOutlineMail className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 transition-all duration-300 group-hover:w-full"></div>
            </div> */}
        //     <button className="py-3 px-10 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-sm flex items-center justify-center gap-2 button-icon">
        //       <AiOutlineMail className="w-6 h-6 text-white" />
        //       <span>Register</span>
        //     </button>
        //   </div>
        // </form> */}