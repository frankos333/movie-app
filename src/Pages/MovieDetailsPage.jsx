import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";

const MovieDetailsPage = () => {

  const { state: movie } = useLocation();
  
  function formatNumber(num) {
    const map = [
      { suffix: "B", threshold: 1e9 },
      { suffix: "M", threshold: 1e6 },
      { suffix: "K", threshold: 1e3 },
      { suffix: "", threshold: 1 },
    ];

    const found = map.find((x) => Math.abs(num) >= x.threshold);
    if (found) {
      const formatted = (num / found.threshold).toFixed(0) + found.suffix;
      return formatted;
    }

    return num;
  }
  return (
    <section
      className={`max_width px-4 grid md:grid-cols-2 lg:grid-cols-3 h-screen place-items-center pt-10 gap-4
      }`}
    >
      {/* img section  */}
      <div className="h-[20rem] md:h-[30rem]">
        <img
          src={
            movie.image
              ? movie.image
              : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
          }
          alt={movie.title}
          className="rounded-xl"
        />
      </div>

      {/* summary section  */}
      <div className="lg:col-span-2 space-y-6 max-w-[50rem]">
        <Link
          to="/"
          className="text-grey transition duration-200 ease-in hover:text-white hover:tracking-wider"
        >
          <div className="flex items-center text-gray-200">
            <FaArrowAltCircleLeft className="text-lg mr-1.5" />
            <p>Go Back</p>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-3">
          <h1 className="text-6xl font-bold text-center py-2">{movie.title}</h1>
          <span className="text-gray-500 text-xs pt-2">
            · {movie.contentRating}
          </span>
        </div>
        <div className="flex justify-between items-center gap-4">
          <div>
            {movie.genreList.map((genre) => (
              <span
                key={genre.key}
                className="border border-white/50 rounded-lg px-3 py-1 mr-3"
              >
                {genre.value}
              </span>
            ))}
          </div>
          <div className="column">
            <p className="text-gray-400">IMDb Rating</p>
            <div className="rounded-full pr-8 pt-1 text-sm flex items-center gap-1">
              <AiFillStar className="text-2xl text-yellow-400" />
              <div className="column">
                <span className="text-md leading-none">
                  {Number(movie.imDbRating).toFixed(1)}
                </span>
                <p className="text-xs text-gray-400">
                  {formatNumber(movie.imDbRatingVotes)}
                </p>
              </div>
              <span className="text-gray-400 self-start text-xs"> / 10</span>
            </div>
          </div>
        </div>
        <div className="px-2 py-4">
          <p className="text-gray-300">{movie.plot}</p>
        </div>
        <div className="text-gray-300 px-2 pb-10">
          <h1 className="text-white font-bold text-xl mb-1">DETAILS:</h1>
          <p>Starring: {movie.stars}</p>
          <p>Year Released: {movie.description || "Unknown"}</p>
          <p>Runtime: {movie.runtimeStr || "Unknown"}</p>
        </div>
      </div>
    </section>
  );
};

export default MovieDetailsPage;
