import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
// import Quote1 from "../assets/quote1.jpg"
// import Quote2 from "../assets/quote2.jpg"
// import Quote3 from "../assets/quote3.jpg"
// import Quote4 from "../assets/quote4.jpg"

// const dummyQuotes = [
//   { id: 1,
//     title: "This is First Title",
//     description: "This is First Description",
//     image: Quote1
//   },
//   { 
//     id: 2,
//     title: "This is Second Title",
//     description: "This is Second Description",
//     image: Quote2
//   },
//   {
//     id: 3,
//     title: "This is Third Title",
//     description: "This is Third Description",
//     image: Quote3
//   },
//   {
//     id: 4,
//     title: "This is Fourth Title",
//     description: "This is Fourth Description",
//     image: Quote4
//   },

// ]

const AllQuotes = () => {
  const [allQuotes, setAllQuotes] = useState([]);

  const fetchAllQuotes = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + "/imgUploader/quotes-list/"
      );
      setAllQuotes(response.data);
    } catch (error) {
      console.error("error", error);
    }
  };

  useEffect(() => {
    fetchAllQuotes();
  }, []);

  return (
    <div className="p-10 md:py-20 md:px-20">
      <div className="mb-5 flex justify-center items-center">
        <h6 className="text-2xl font-semibold text-red-950">All Quotes</h6>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-10 gap-y-10">
        {allQuotes.map((quote) => (
          <Card
            key={quote.id}
            title={quote.title}
            description={quote.description}
            image={quote.image_url}
          />
        ))}
      </div>
    </div>
  );
};

export default AllQuotes;
