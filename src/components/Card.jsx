
const Card = ({ image, title, description }) => {
  return (
    <div className="min-w-[280px] max-w-sm rounded overflow-hidden shadow-lg">
      <div className="w-full h-52 overflow-hidden">
        <img
          className="w-full h-full object-cover hover:scale-110 transition-all duration-500 cursor-pointer"
          src={ process.env.REACT_APP_API_URL + image}
          alt={title}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 capitalize">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default Card;
