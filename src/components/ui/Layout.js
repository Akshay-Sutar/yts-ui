import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";

const Layout = (props) => {
  const containerClass = ["app-container", classes.AppContainer].join(" ");
  return (
    <div className={containerClass}>
      <MainNavigation />
      <main>{props.children}</main>
    </div>
  );
};

export default Layout;
