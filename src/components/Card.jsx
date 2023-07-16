import React from "react";
import { AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({ item }) => {

  return (
    <Link
      to={`/tv/${item.id}`}
      state={item}
      className="bg-black rounded relative transition duration-200 ease-in transform hover:scale-110"
    >
      <div className="h-[20rem] sm:h-[25rem] lg:h-[30rem]">
        <img src={item.image} alt={item.title} className="rounded-t-md" />
      </div>
      <h1 className="text-center py-2 text-xl">{item.title}</h1>
      <h1 className="text-center py-2 text-xl">{item.description}</h1>
      <div className="absolute top-2 right-2 bg-blue rounded-full px-2 py-1 text-sm flex items-center gap-1">
        <span>{Number(item.imDbRating).toFixed(1)}</span>
        <AiFillStar className="text-lg" />
      </div>
    </Link>
  );
};

export default Card;
