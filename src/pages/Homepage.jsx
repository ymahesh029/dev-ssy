import AboutSection from "../components/AboutSection";
import QuoteImage from "../components/QuoteImage";
import SocialMediaLinks from "../components/SocialMediaLinks";
import MyCarousel from "../components/MyCarousel"

const Homepage = () => {
  return (
    <div className="w-full">
      {/* <QuoteImage /> */}
      <SocialMediaLinks />
      <MyCarousel/>
      <AboutSection/>
    </div>
  );
};

export default Homepage;
