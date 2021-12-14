import Button from "./Button/Button";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.search}>
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            aria-label="Dollar amount (with dot and two decimal places)"
          />
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
        </div>
      </div>
    </header>
  );
};
export default MainNavigation;
