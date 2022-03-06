import { Add, Remove } from "@material-ui/icons";
import Layout from "../../Layout/Layout";
import styles from "./productItemPages.module.css";
import NewsLetters from "../../components/NewsLetters/NewsLetters";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart, useCartActions } from "../../context/CartProvider";

const ProductItemPages = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const { cart } = useCart();
  const dispatch = useCartActions();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/product/find/" + id
        );
        setProduct(res.data);
      } catch (error) {}
    };
    getProduct();
  }, [id]);
  const quantityHandler = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const addProductHandler = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: { ...product, quantity, color, size },
    });
  };

  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img className={styles.productImg} src={product.img} />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{product.title}</h1>
          <p className={styles.desc}> {product.description} </p>

          <span className={styles.price}>{product.price}</span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Color</span>

              {product.color?.map((c) => (
                <div
                  className={styles.filterColor}
                  onClick={() => setColor(c)}
                  style={{ backgroundColor: `${c} ` }}
                  key={c}
                />
              ))}
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Size</span>
              <select
                onChange={(e) => setSize(e.target.value)}
                className={styles.filterSize}
              >
                {product.size?.map((size) => (
                  <option key={size}>{size}</option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove onClick={() => quantityHandler("dec")} />
              <span className={styles.amount}>{quantity}</span>
              <Add onClick={() => quantityHandler("inc")} />
            </div>
            <button
              className={styles.addToCartButton}
              onClick={() => addProductHandler(product.id)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
      <NewsLetters />
    </Layout>
  );
};

export default ProductItemPages;
