import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useCart } from "../../context/CartProvider";
import { useAuth } from "../../context/AuthProvider";

const Navigation = () => {
  const { cart } = useCart();
  const userData = useAuth();

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.navWrapper}>
        <div className={styles.leftBox}>
          <span className={styles.languageInput}>EN</span>
          <div className={styles.searchBox}>
            <input className={styles.searchInput} placeholder="Search"></input>

            <SearchIcon className={styles.searchIcon} />
          </div>
        </div>
        <div className={styles.centerBox}>
          <h1 className={styles.logo}>SHERY.</h1>
        </div>
        <div className={styles.rightBox}>
          <Link className={styles.navItemLink} to="/register">
            <div className={styles.navItem}>
              {userData ? "Wellcome" : "REGISTER"}
            </div>
          </Link>
          <Link
            className={styles.navItemLink}
            to={userData ? "/profile" : "/login"}
          >
            <div className={styles.navItem}>
              {userData ? "Profile" : "SIGN IN"}
            </div>
          </Link>

          <Link to="/cart">
            <div className={styles.navItem}>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </div>
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
