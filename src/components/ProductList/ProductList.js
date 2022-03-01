import axios from "axios";
import { useEffect, useState } from "react";
import { popularProducts } from "../../data";
import ProductItem from "../ProductItem/ProductItem";
import styles from "./productList.module.css";
const ProductList = ({ category, filter, sort }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:5000/api/product?category=${category}`
            : "http://localhost:5000/api/product"
        );
        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, [category]);
  useEffect(() => {
    category &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [category, filter, products]);
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort == "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);
  return (
    <div className={styles.productListContainer}>
      {category
        ? filteredProducts.map((product) => (
            <ProductItem key={product.id} productItem={product} />
          ))
        : products
            .slice(0, 8)
            .map((product) => (
              <ProductItem key={product.id} productItem={product} />
            ))}
    </div>
  );
};

export default ProductList;
