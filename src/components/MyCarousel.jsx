import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Import slick carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme styles
// import Slider1 from "../assets/slider1.jpg";
// import Slider2 from "../assets/slider2.png";
// import Slider3 from "../assets/slider3.jpg";
// import Tagline from "../assets/tagline.png";
import Slider1 from "../assets/dege.png";
import Slider2 from "../assets/IMG_7523.png";
import Slider4 from "../assets/amc.jpg";

import Slider3 from "../assets/WhatsApp Image 2023-07-05 at 4.07.49 PM.jpeg";
import Tagline from "../assets/WhatsApp Image 2023-07-07 at 11.04.26 PM.jpeg";

const MyCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full  mx-auto overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src={Slider1} alt="Image 1" className="w-full h-94 h-screen   object-cover" />
        </div>
        <div>
          <img src={Slider2} alt="Image 2" className="w-full h-94 h-screen   object-cover" />
        </div>
        <div>
          <img src={Slider4} alt="Image 2" className="w-full h-94 h-screen   object-cover" />
        </div>
        <div>
          <img src={Slider3} alt="Image 3" className="w-full h-94 h-screen  object-cover" />
        </div>
        <div>
          <img src={Tagline} alt="Image 4" className="w-full h-94 h-screen  object-cover" />
        </div>
      </Slider>
    </div>
  );
};

export default MyCarousel;
