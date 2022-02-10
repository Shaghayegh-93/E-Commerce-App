import { Add, Remove } from "@material-ui/icons";
import Layout from "../../Layout/Layout";
import styles from "./productItemPages.module.css";

const ProductItemPages = () => {
  const sizes = [
    { title: "XS", id: Date.now() },
    { title: "X", id: Date.now() },
    { title: "M", id: Date.now() },
    { title: "L", id: Date.now() },
    { title: "XL", id: Date.now() },
    { title: "XXL", id: Date.now() },
    { title: "XXL", id: Date.now() },
  ];
  return (
    <Layout>
      <div className={styles.wrapper}>
        <div className={styles.imgContainer}>
          <img
            className={styles.productImg}
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
          />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>Denim Jumpsuit</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </p>
          <span className={styles.price}>$20</span>
          <div className={styles.filterContainer}>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Color</span>
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "black" }}
              />
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "darkblue" }}
              />
              <div
                className={styles.filterColor}
                style={{ backgroundColor: "gray" }}
              />
            </div>
            <div className={styles.filter}>
              <span className={styles.filterTitle}>Size</span>
              <select className={styles.filterSize}>
                {sizes.map((size) => (
                  <option value={size.title} key={size.id}>
                    {size.title}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className={styles.addContainer}>
            <div className={styles.amountContainer}>
              <Remove />
              <span className={styles.amount}>1</span>
              <Add />
            </div>
            <button className={styles.addToCartButton}>ADD TO CART</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductItemPages;
