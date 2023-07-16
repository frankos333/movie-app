import React from "react";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL =
  "https://cyan-gorgeous-cygnet.cyclic.app/api/all-movies?key=jedimindtrick&count=250";

const BASE_FILTERS_STATE = { sortBy: "", name: "" };

const sortMap = {
  year: (a, b) =>
    parseInt(b.description.replace(/[{()}]/g, "")) -
    parseInt(a.description.replace(/[{()}]/g, "")),
  rating: (a, b) => parseFloat(b.imDbRating) - parseFloat(a.imDbRating),
  title: (a, b) => a.title.localeCompare(b.title),
};

const MoviesPage = () => {
  const [data, setData] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState(BASE_FILTERS_STATE);

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if (data && filters) {
      const results = data.filter(({ title }) => {
        if (filters.name) {
          return title.toLowerCase().includes(filters.name.toLowerCase());
        }
        return true;
      });
      if (filters.sortBy) {
        results.sort(sortMap[filters.sortBy]);
      }
      setFilteredMovies(results);
    }
  }, [filters, data]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(BASE_URL);
      setData(response.data.results);
      setFilteredMovies(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setFilters({ ...filters, name: e.target.value });
  };

  const handleSort = (e) => {
    setFilters({ ...filters, sortBy: e.target.value });
  };

  return (
    <header className="max_width px-4 py-10">
      <h1 className="text-5xl font-bold text-center ">Movies App</h1>
      <div className="flex justify-between items-center">
        <div className="relative flex-1 max-w-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search title..."
            className="w-full py-3 pl-12 pr-4 text-gray-500 border rounded-md outline-none bg-gray-50 focus:bg-white focus:border-indigo-600"
            value={filters.name}
            onChange={handleSearch}
          />
        </div>
        <div className="relative  lg:max-w-sm">
          <select
            className="w-32 p-2 text-gray-300 border rounded-md shadow-sm outline-none bg-black border-none focus:border-indigo-600"
            value={filters.sortBy}
            onChange={handleSort}
          >
            <option disabled={true} value="">
              Sort By
            </option>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>
      <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-10">
        {filteredMovies?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </header>
  );
};

export default MoviesPage;
