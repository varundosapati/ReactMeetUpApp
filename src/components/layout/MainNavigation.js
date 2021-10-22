import { Link } from "react-router-dom";
import MainNavClasses from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";
import { useContext } from "react";

function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);

  return (
    <header className={MainNavClasses.header}>
      <div className={MainNavClasses.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            {" "}
            <Link to="/">All Meet ups </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/new-meetup">New Meet ups </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/favorites">
              Favorites Meet ups
              <span className={MainNavClasses.badge}>
                {favoritesCtx.totalFavorites}
              </span>
            </Link>{" "}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
