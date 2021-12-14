import classes from "./Movie.module.css";
import { Link } from "react-router-dom";

const Movie = (props) => {  
  return (
    <div className="col-4 ">
      <Link to={`/movie/${props.id}`}>
        <div className={classes.movie}>
          <img src={props.cover_image} alt={props.title} />
        </div>
        <div className={classes.movie}>
          <span style={{ flexWrap: "wrap" }}>{props.title}</span>
        </div>
      </Link>
    </div>
  );
};

export default Movie;
