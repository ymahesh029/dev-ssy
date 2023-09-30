import { MdOutlinePerson2 } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dataToSend = {
      user_id: e.target.user_id.value,
      password: e.target.password.value,
      //   email: e.target.email.value,
    };

    const jsonData = JSON.stringify(dataToSend);

    axios
      .post(process.env.REACT_APP_API_URL + "/accounts/login/", jsonData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        localStorage.setItem('items', JSON.stringify(response.data));

        setItems(response.data)
        console.log(response.data)
        
        navigate("/");

        toast.success(
          `Thanks  successful log in.`
        );
        e.target.reset();
      })
      .catch((err) => {
        console.log(err)
        toast.error(`${err}!"`)
      });
  };


  return (
    <div class=" h-screen w-full bg-gray-100 ">




      <div class="flex items-center justify-center h-screen shadow-2xl rounded   ">


        <form class="w-full max-w-md pt-5 bg-white px-2" onSubmit={handleSubmit}>
          <div class="text-center text-3xl"> Log in </div>
          {/* <p>Its quick and esay.</p> */}
          <hr />

          <div class="flex flex-wrap mx-2 m-2">
            <div class="w-full px-2">
              {/* <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-password">
            mobile number
          </label> */}
              <input class="appearance-none block w-full bg-gray-100 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="text" name="user_id" placeholder="user name" />
              {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          <div class="flex flex-wrap mx-2 m-2">
            <div class="w-full px-2">
              {/* <label class="block uppercase tracking-wide text-gray-200 text-xs font-bold mb-2" for="grid-password">
            new pass word
          </label> */}
              <input class="appearance-none block w-full bg-gray-100 text-gray-7=200 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" name="password" placeholder="password" />
              {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>
          <div class="flex flex-wrap mx-2 m-2">
            <div class="w-full px-3">

              <button class=" bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 roundedappearance-none block w-full bg-gray-100  border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"> Log in</button>
              {/* <p class="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p> */}
            </div>
          </div>





        </form>

      </div>



    </div>
  );
};

export default Login;
