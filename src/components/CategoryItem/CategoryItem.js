import styles from "./categoryItem.module.css";
const CategoryItem = ({ categoryItem }) => {
  return (
    <div className={styles.categoryContainer}>
      <img className={styles.categoryImg} src={categoryItem.img}></img>
      <div className={styles.categoryInfoContainer}>
        <h1 className={styles.categoryTitle}>{categoryItem.title}</h1>
        <button className={styles.categoryButton}>SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
