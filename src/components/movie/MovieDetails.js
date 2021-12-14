import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getMovie,
  removeSelectedMovie,
} from "../../redux/actions/movieActions";
import classes from "./MovieDetails.module.css";

const MovieDetails = (props) => {
  const { id: movieId } = useParams();
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();

  const fetchMovieDetails = () => {
    fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`)
      .then((res) => res.json())
      .then(({ data }) => {
        const { movie } = data;
        dispatch(getMovie(movie));
      })
      .catch((err) => console.error(err));
  };

  const trackers = [
    "udp://open.demonii.com:1337/announce",
    "udp://tracker.openbittorrent.com:80",
    "udp://tracker.coppersurfer.tk:6969",
    "udp://glotorrents.pw:6969/announce",
    "udp://tracker.opentrackr.org:1337/announce",
    "udp://torrent.gresille.org:80/announce",
    "udp://p4p.arenabg.com:1337",
    "udp://tracker.leechers-paradise.org:6969",
  ];
  const trackersString = trackers.join("&tr=");

  const downloadMagnet = (hash) => {
    let magnet =
      `magnet:?xt=urn:btih:${hash}&dn=` +
      encodeURI(movie.title) +
      trackersString;
    window.location.href = magnet;
  };

  useEffect(() => {
    if (movieId) {
      fetchMovieDetails();
    }

    return () => {
      dispatch(removeSelectedMovie(movie));
    };
  }, [movieId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img
            className={classes.image}
            src={movie.medium_cover_image}
            alt={movie.title}
          />
        </div>
        <div className="col-6">
          <h1>{movie.title}</h1>
          <h4>{movie.year}</h4>
          <h4>{movie.genres && movie.genres.join("/")}</h4>
          <p>Available in</p>
          {movie.torrents &&
            movie.torrents.map((item, idx) => {
              return (
                <button
                  key={idx}
                  className="btn btn-outline-secondary"
                  onClick={() => downloadMagnet(item.hash)}
                >
                  {item.quality} {item.type}
                </button>
              );
            })}
        </div>
      </div>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <div className="col">
            <i className="bi bi-heart-fill"></i>
            {movie.like_count}
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-6"></div>
        <div className="col-6">
          <div className="col-2">
            <label>
              <strong>IMDB</strong>
            </label>
            <label>{movie.rating}</label>
          </div>
        </div>
      </div>
      <div className="row">
        <p>{movie.description_full}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
