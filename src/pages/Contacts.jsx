import { MdOutlinePerson2 } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contacts = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const dataToSend = {
      name: e.target.name.value,
      mobile: e.target.mobile.value,
      email: e.target.email.value,
    };

    const jsonData = JSON.stringify(dataToSend);

    axios
      .post(process.env.REACT_APP_API_URL + "/bsyenquiry/enquiry/", jsonData, {
        headers: {
          "Content-Type": "application/json", 
        },
      })
      .then(() => {
        toast.success(
          "Thanks for contacting us ! We will get back to you soon."
        );
        e.target.reset();
      })
      .catch((err) => toast.error("Something went wrong!"));
  };

  return (
    <div className="bg-[#f7f2f0]  p-5 md:p-20">
      <div className="grid md:grid-cols-2">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h6 className="font-semibold text-red-950">CONTACT US</h6>
            <h2 className="capitalize font-bold text-4xl">
              Have a Cool Project? <br />
              Get in touch!
            </h2>
          </div>
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1191.7703152861861!2d73.93909751780195!3d18.50018721552027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c2030ef06181%3A0xbc8dbbb422b09d1f!2sTrinity%20Tours%20%26%20Travels!5e0!3m2!1sen!2sin!4v1694702749814!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="bg-white mt-10 rounded-lg">
          <div className="flex flex-col gap-6 p-5 md:p-20">
            <div className="relative group w-full py-3 border-b border-b-slate-400 focus-within:border-black focus-within:border-[1px] focus-within:border-dotted">
              <input
                type="text"
                placeholder="Name"
                name="name"
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
                type="text"
                placeholder="Phone"
                name="mobile"
                maxLength={10}
                className="w-full outline-none text-sm pl-10 placeholder:text-gray-800 placeholder:text-base"
                required
              />
              <div className="absolute left-0 top-4 flex items-center justify-center">
                <BiPhoneCall className="w-6 h-6 text-gray-400" />
              </div>
              <div className="absolute bottom-0 left-0 h-[1px] bg-black w-0 transition-all duration-300 group-hover:w-full"></div>
            </div>
            <div className="relative group w-full py-3 border-b border-b-slate-400 focus:border-dotted">
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
            </div>
            <button className="py-3 px-10 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-sm flex items-center justify-center gap-2 button-icon">
              <AiOutlineMail className="w-6 h-6 text-white" />
              <span>Get in Touch</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contacts;
