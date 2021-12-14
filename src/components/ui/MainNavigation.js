import { useRef } from "react";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const enteredTitle = useRef("");
  const searchMovieByName = () => {
    const title = enteredTitle.current.value.trim();
    console.log(title);
  };

  return (
    <header className={classes.header}>
      <div className={classes.search}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label=""
            ref={enteredTitle}
          />
          <span className="input-group-text">
            <i className="bi bi-search" onClick={searchMovieByName}></i>
          </span>
        </div>
      </div>
    </header>
  );
};
export default MainNavigation;
