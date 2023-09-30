import { MdOutlinePerson2 } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { useState ,useEffect} from "react";

const LogOut = () => {
    // const [token, settoken] = useState();

    // const{token} = JSON.parse(localStorage.getItem('items'));
    // if(items.token!==undefined||items.token!==null){
    //   // settoken(items.token)
    //   console.log(items.token)
    // }
    
  const logout = () => {
    const{token} = JSON.parse(localStorage.getItem('items'));

    // e.preventDefault();

    // const formData = new FormData(e.target);

    const dataToSend = {
        token: token,
        // password: e.target.password.value,
    //   email: e.target.email.value,
    };

    const jsonData = JSON.stringify(dataToSend);

    axios
      .post(process.env.REACT_APP_API_URL + "/accounts/logout/", jsonData, {
        headers: {
          "Content-Type": "application/json", 
        },
      })
      .then((response) => {
        // console.log( response.data)
        // setItems(response.data)

        toast.success(
          ` successful logOut.`
        );
        // e.target.reset();
      })
      .catch((err) => {
      console.log(err)
      toast.error(`${err}!"`)});
  };
  

  return (
    <div >
        <button onClick={logout} className="py-3 hover:bg-gray-700 text-white font-semibold rounded-sm ">
              {/* <AiOutlineMail className="w-6 h-6 text-white" /> */}
              <span>LogOut</span>
            </button>
    </div>
  );
};

export default LogOut;
