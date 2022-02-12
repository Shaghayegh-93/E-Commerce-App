import { Add, Remove } from "@material-ui/icons";
import Layout from "../../Layout/Layout";
import styles from "./CartPage.module.css";

const CartPage = () => {
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>YOUR BAG</h1>
        <div className={styles.TopContainer}>
          <button className={`${styles.topButton} ${styles.topButtonOutlined}`}>
            CONTINUE SHOPPING
          </button>
          <div className={styles.topTextsContainer}>
            <span className={styles.topText}>Shopping Bag(2)</span>
            <span className={styles.topText}>Your Wishlist(0)</span>
          </div>
          <button className={`${styles.topButton} ${styles.topButtonFilled}`}>
            CHECKOUT NOW
          </button>
        </div>
        <div className={styles.bottomContainer}>
          <div className={styles.infoContainer}>
            <div className={styles.product}>
              <div className={styles.productDetail}>
                <img
                  className={styles.productDetailImg}
                  src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"
                />
                <div className={styles.details}>
                  <span className={styles.productName}>
                    <b>Product:</b> JESSIE THUNDER SHOES
                  </span>
                  <span className={styles.productId}>
                    <b>ID:</b> 93813718293
                  </span>
                  <div className={styles.productColor}></div>
                  <div className={styles.productSize}>
                    <b>Size:</b> 37.5
                  </div>
                </div>
              </div>
              <div className={styles.priceDetail}>
                <div className={styles.productAmountContainer}>
                  <Remove />
                  <span className={styles.productAmount}>1</span>
                  <Add />
                </div>
                <span className={styles.productPrice}>$30</span>
              </div>
            </div>
            <hr className={styles.hr} />
          </div>
          <div className={styles.summaryContainer}>
            <h1 className={styles.summaryTitle}>ORDER SUMMARY</h1>
            <div className={styles.summaryItem}>
              <span className={styles.summaryItemText}>Subtotal</span>
              <span className={styles.summaryItemPrice}>$80</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryItemText}>Estimated Shipping</span>
              <span className={styles.summaryItemPrice}>$ 5.90</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryItemText}>Shipping Discount</span>
              <span className={styles.summaryItemPrice}>$ -5.90</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.summaryItemTotal}`}>
              <span className={styles.summaryItemText}>Total</span>
              <span className={styles.summaryItemPrice}>$80</span>
            </div>
            <button className={styles.summaryButton}>CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
