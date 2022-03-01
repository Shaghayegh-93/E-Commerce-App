import styles from "./categoryItem.module.css";
import { Link } from "react-router-dom";
const CategoryItem = ({ categoryItem }) => {
  return (
    <div className={styles.categoryContainer}>
      <Link to={`/Products/${categoryItem.cat}`}>
        <img
          alt="clothesImg"
          className={styles.categoryImg}
          src={categoryItem.img}
        ></img>
        <div className={styles.categoryInfoContainer}>
          <h1 className={styles.categoryTitle}>{categoryItem.name}</h1>
          <button className={styles.categoryButton}>SHOP NOW</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
