import { popularProducts } from "../../data";
import ProductItem from "../ProductItem/ProductItem";
import "./productList.css";
const ProductList = () => {
  return (
    <div className="productListContainer">
      {popularProducts.map((product) => (
        <ProductItem key={product.id} productItem={product} />
      ))}
    </div>
  );
};

export default ProductList;
