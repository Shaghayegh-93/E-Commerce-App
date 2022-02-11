import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
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
          <div className={styles.navItem}>REGISTER</div>
          <div className={styles.navItem}>SIGN IN</div>
          <div className={styles.navItem}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon />
            </Badge>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
