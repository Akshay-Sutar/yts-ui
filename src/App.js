import { Route, Routes } from "react-router-dom";
import Layout from "./components/ui/Layout";
import AllMovies from "./components/movie/AllMovies";
import MovieDetails from "./components/movie/MovieDetails";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMovies />} exact></Route>
        <Route path="/movie/:id" element={<MovieDetails />} exact></Route>
      </Routes>
    </Layout>
  );
}

export default App;
