import styles from "./productItem.module.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProductItem = ({ productItem }) => {
  const [toggle, setToggle] = useState(false);

  const triggerToggle = () => {
    setToggle(!toggle);
  };
  const favoritClass = toggle ? styles.favorit : "";

  return (
    <div className={styles.productItemContainer}>
      <div className={styles.circle}></div>
      <img className={styles.produtImg} src={productItem.img} />
      <div className={styles.productItemInfo}>
        <Link to="/cart">
          <div className={styles.productItemIcon}>
            <ShoppingCartOutlinedIcon />
          </div>
        </Link>
        <div className={styles.productItemIcon}>
          <Link to={`/product/${productItem._id}`}>
            <SearchOutlinedIcon />
          </Link>
        </div>
        <div
          onClick={triggerToggle}
          className={`${styles.productItemIcon} ${favoritClass}`}
        >
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
