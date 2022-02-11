import { popularProducts } from "../../data";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./productList.module.css";
const ProductList = () => {
  return (
    <div className={styles.productListContainer}>
      {popularProducts.map((product) => (
        <ProductItem key={product.id} productItem={product} />
      ))}
    </div>
  );
};

export default ProductList;
