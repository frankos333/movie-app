import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetailsPage from "./Pages/MovieDetailsPage";
import MoviesPage from "./Pages/MoviesPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MoviesPage />} />
        <Route path="/tv/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
