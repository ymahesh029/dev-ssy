import Quote1 from "../assets/quote1.jpg";
import { useEffect, useState } from "react";
import axios from "axios";

const QuoteImage = () => {
  const [quote, setQuote] = useState({
    title: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    const fetchImg = async () => {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL + "/imgUploader/todayeQ/"
        );
        setQuote({
          ...quote,
          title: response.data[0].title,
          description: response.data[0].description,
          image: process.env.REACT_APP_API_URL + response.data[0].image_url,
        });
      } catch (e) {
        console.log(e.message);
      }
    };

    fetchImg();
  }, []);

  return (
    <div className="relative w-full calc-height">
      <img
        src={quote.image}
        alt="quote"
        className="w-full h-full object-contain"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-overlay flex flex-col items-center gap-5 justify-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-semibold capitalize">{quote.title}</h1>
        <p className="font-normal text-xl lg:text-2xl capitalize italic">
          {quote.description}
        </p>
      </div>
    </div>
  );
};

export default QuoteImage;
