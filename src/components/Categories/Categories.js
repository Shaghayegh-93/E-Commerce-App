import { categories } from "../../data";
import CategoryItem from "../CategoryItem/CategoryItem";
import "./categories.css";
const Categories = () => {
  return (
    <div className="categoriesContainer">
      {categories.map((category) => (
        <CategoryItem categoryItem={category} />
      ))}
    </div>
  );
};

export default Categories;
