import { useState } from "react";
import ProductList from "../../components/ProductList/ProductList";
import Layout from "../../Layout/Layout";
import styles from "./productListPage.module.css";
import NewsLetters from "../../components/NewsLetters/NewsLetters";
import { useLocation } from "react-router-dom";
const ProductListPage = () => {
  const allColors = [
    { title: "white", id: Date.now() },
    { title: "black", id: Date.now() },
    { title: "red", id: Date.now() },
    { title: "blue", id: Date.now() },
    { title: "yellow", id: Date.now() },
    { title: "Green", id: Date.now() },
  ];
  const allSizes = [
    { title: "XS", id: Date.now() },
    { title: "S", id: Date.now() },
    { title: "M", id: Date.now() },
    { title: "L", id: Date.now() },
    { title: "XL", id: Date.now() },
    { title: "XXL", id: Date.now() },
    { title: "XXXL", id: Date.now() },
  ];
  const location = useLocation();
  const cat = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");
  const filterHandler = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value});
  };

  const sortHandler = (e) => {
    setSort(e.target.value);
  };

  return (
    <Layout>
      <div className={styles.productListContainer}>
        <h1 className={styles.produtListpageTitle}>{cat}</h1>
        <div className={styles.filterContainer}>
          <div className={styles.filter}>
            <span className={styles.filterText}>Filter Products:</span>
            <select
              name="color"
              onChange={filterHandler}
              className={styles.selectBox}
            >
              <option disabled selected>
                Color
              </option>
              {allColors.map((color) => {
                return (
                  <option key={color.id} value={color.title}>
                    {color.title}
                  </option>
                );
              })}
            </select>
            <select
              name="size"
              onChange={filterHandler}
              className={styles.selectBox}
            >
              <option disabled selected>
                Size
              </option>
              {allSizes.map((size) => {
                return (
                  <option key={size.id} value={size.title}>
                    {size.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className={styles.filter}>
            <span className={styles.filterText}>Sort Products:</span>
            <select onChange={sortHandler} className={styles.selectBox}>
              <option value="Newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
        <ProductList category={cat} filter={filters} sort={sort} />
      </div>
      <NewsLetters />
    </Layout>
  );
};

export default ProductListPage;
