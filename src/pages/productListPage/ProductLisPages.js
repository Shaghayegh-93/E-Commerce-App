import { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Layout from "../../Layout/Layout";
import styles from "./productListPage.module.css";
const ProductListPage = () => {
  const options = [
    { colorTitle: "White", sizeTitle: "XS", id: Date.now() },
    { colorTitle: "Black", sizeTitle: "S", id: Date.now() },
    { colorTitle: "Red", sizeTitle: "M", id: Date.now() },
    { colorTitle: "Blue", sizeTitle: "L", id: Date.now() },
    { colorTitle: "Yellow", sizeTitle: "XL", id: Date.now() },
    { colorTitle: "White", sizeTitle: "XXL", id: Date.now() },
    { colorTitle: "Green", sizeTitle: "XXXL", id: Date.now() },
  ];

  return (
    <Layout>
      <div className="productListContainer">
        <h1 className={styles.produtListpageTitle}>Dresses</h1>
        <div className={styles.filterContainer}>
          <div className={styles.filter}>
            <span className={styles.filterText}>Filter products:</span>
            <select className={styles.selectBox}>
              <option disabled selected>
                color
              </option>
              {options.map((color) => {
                return (
                  <option key={color.id} value={color.colorTitle}>
                    {color.colorTitle}
                  </option>
                );
              })}
            </select>
            <select className={styles.selectBox}>
              <option disabled selected>
                Size
              </option>
              {options.map((size) => {
                return (
                  <option key={size.id} value={size.sizeTitle}>
                    {size.sizeTitle}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.filter}>
            <span className={styles.filterText}>Sort products:</span>
            <select className={styles.selectBox}>
              <option selected>Newest</option>
              <option>Price (asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
        <ProductList />
      </div>
    </Layout>
  );
};

export default ProductListPage;
