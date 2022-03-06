import { Add, Remove } from "@material-ui/icons";
import StripeCheckout from "react-stripe-checkout";
import { useCart } from "../../context/CartProvider";
import Layout from "../../Layout/Layout";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { cart, total } = useCart();
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>YOUR BAG</h1>
        <div className={styles.topContainer}>
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
            {cart.map((product) => (
              <div className={styles.product}>
                <div className={styles.productDetail}>
                  <img className={styles.productDetailImg} src={product.img} />
                  <div className={styles.details}>
                    <span className={styles.productName}>
                      <b>Product:</b> {product.name}
                    </span>
                    <span className={styles.productId}>
                      <b>ID:</b>
                      {product._id}
                    </span>
                    <div className={styles.productColor}>{product.color}</div>
                    <div className={styles.productSize}>
                      <b>Size:</b>
                      {product.size}
                    </div>
                  </div>
                </div>
                <div className={styles.priceDetail}>
                  <div className={styles.productAmountContainer}>
                    <Remove />
                    <span className={styles.productAmount}>
                      {product.quantity}
                    </span>
                    <Add />
                  </div>
                  <span className={styles.productPrice}>
                    ${product.price * product.quantity}
                  </span>
                </div>
              </div>
            ))}
            <hr className={styles.hr} />
          </div>
          <div className={styles.summaryContainer}>
            <h1 className={styles.summaryTitle}>ORDER SUMMARY</h1>
            <div className={styles.summaryItem}>
              <span className={styles.summaryItemText}>Subtotal</span>
              <span className={styles.summaryItemPrice}>${total}</span>
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
              <span className={styles.summaryItemPrice}>${total}</span>
            </div>
            <StripeCheckout
              name="Lama Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${total}`}
              amount={total * 100}
              // token={onToken}
              // stripeKey={KEY}
            >
              <button className={styles.summaryButton}>CHECKOUT NOW</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
