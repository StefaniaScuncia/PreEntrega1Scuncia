import { CartWidget } from "../CartWidget/CartWidget";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <li>
      <Link to={"./"}>
          <img src="../images/logoMusic.png" alt="" className={styles.imgLogo}/>
        </Link>


        <Link to={"category/tendencias"}>
          <ul>Tendencias</ul>
        </Link>

        <Link to={"/category/pop"}>
          <ul>Pop</ul>
        </Link>

        <Link to={"/category/rock"}>
          <ul>Rock</ul>
        </Link>

        <Link to={"/category/clasicos"}>
          <ul>Clásicos</ul>
        </Link>
      </li>
      <CartWidget />
    </nav>
  );
};
