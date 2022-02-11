import styles from "./productItem.module.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
const ProductItem = ({ productItem }) => {
  return (
    <div className={styles.productItemContainer}>
      <div className={styles.circle}></div>
      <img className={styles.produtImg} src={productItem.img} />
      <div className={styles.productItemInfo}>
        <div className={styles.productItemIcon}>
          <ShoppingCartOutlinedIcon />
        </div>
        <div className={styles.productItemIcon}>
          <SearchOutlinedIcon />
        </div>
        <div className={styles.productItemIcon}>
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
