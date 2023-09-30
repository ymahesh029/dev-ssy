import AboutSection from "../components/AboutSection";
import QuoteImage from "../components/QuoteImage";
import SocialMediaLinks from "../components/SocialMediaLinks";
import MyCarousel from "../components/MyCarousel"
import ReviewVolu from "../components/ReviewVolu";
import TestDemo from "../components/TestCompo";
import BsyCard from "../components/BsyCard";
import BsyActivity from "../components/BsyActivity";
import YouTubeMust from "../components/YouTubeMust";
import BsyLogo from "../components/bsylogo";
import Enquirey from "../components/Enquirey";
import Login from "../components/auth/Login";
import LogOut from "../components/auth/Logout";
import LoadingSpinner from "../components/common/Loader.jsx";

const Homepage = () => {

  return (
    <div className="w-full">
      

{/* <TestDemo/> */}





      {/* <Login/> */}
     
      
        <SocialMediaLinks />
      <MyCarousel/>
      <Enquirey/>
      {/* <BsyLogo/> */}
      <BsyCard/>
      <BsyActivity/>
      <YouTubeMust/>
      <ReviewVolu/>
      <LoadingSpinner/>


      <AboutSection/>  
      {/* <QuoteImage /> */}
    </div>
  );
};

export default Homepage;
