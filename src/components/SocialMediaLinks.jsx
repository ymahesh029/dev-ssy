import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import youtube from "../assets/youtube.png";
import Twitter from "../assets/Twitter.png";

const SocialMediaLinks = () => {
  return (
    <div className="fixed  z-50 top-[50%] right-0">
      <div className="flex flex-col gap-2">
        <div className="bg-sky-600 rounded-l-full h-12 w-12 flex items-center justify-center">
          <Link
            to="/"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full"
          >
            <img src={facebook} alt="social-media-icon" className="h-5 w-5" />
          </Link>
        </div>
        <div className="bg-pink-500 rounded-l-full h-12 w-12 flex items-center justify-center">
          <Link
            to="https://www.instagram.com/bhaktishaktiyogfoundation/?igshid=MzRlODBiNWFlZA%3D%3D"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full"
          >
            <img src={instagram} alt="social-media-icon" className="h-5 w-5" />
          </Link>
        </div>
        <div className="bg-red-600 rounded-l-full h-12 w-12 flex items-center justify-center">
          <Link
            to="https://youtube.com/@bhaktishaktiyogfoundation178"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full"
          >
            <img src={youtube} alt="social-media-icon" className="h-5 w-5" />
          </Link>
        </div>
        <div className="bg-slate-950 rounded-l-full h-12 w-12 flex items-center justify-center">
          <Link
            to="https://youtube.com/@bhaktishaktiyogfoundation178"
            className="w-8 h-8 flex items-center justify-center bg-white rounded-full"
          >
            <img src={Twitter} alt="social-media-icon" className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLinks;
