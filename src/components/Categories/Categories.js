import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import styles from "./categories.module.css";
const Categories = () => {
  return (
    <div className={styles.categoriesContainer}>
      {categories.map((category) => (
        <CategoryItem categoryItem={category} key={category.id} />
      ))}
    </div>
  );
};

export default Categories;
