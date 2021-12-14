import classes from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = (props) => {
  return (
    <div className="col-4">
      <Link to={`/movie/${props.id}`}>
        <div>
          <img src={props.cover_image} alt={props.title} />
        </div>
        <div>
          <span>{props.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
