import { Add, Remove } from "@material-ui/icons";
import { NavLink, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { useCart, useCartActions } from "../../context/CartProvider";
import Layout from "../../Layout/Layout";
import styles from "./CartPage.module.css";

const CartPage = () => {
  const { cart, total } = useCart();
  const dispatch = useCartActions();
  const navigate = useNavigate();
  const auth = useAuth();
  const userValidation = () => {
    if (auth) {
      navigate("/checkout");
    } else {
      navigate("/register");
    }
  };

  const incHandler = (cartItem) => {
    dispatch({ type: "INC_PRODUCT", payload: cartItem });
  };
  const decrementHandler = (cartItem) => {
    dispatch({ type: "DECREMENT_PRODUCT", payload: cartItem });
  };

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>YOUR BAG</h1>
        <div className={styles.topContainer}>
          <Link to="/">
            <button
              className={`${styles.topButton} ${styles.topButtonOutlined}`}
            >
              CONTINUE SHOPPING
            </button>
          </Link>
          <div className={styles.topTextsContainer}>
            <span className={styles.topText}>Shopping Bag({cart.length})</span>
            <span className={styles.topText}>Your Wishlist(0)</span>
          </div>
          <NavLink to="/register?redirect=checkout">
            <button className={`${styles.topButton} ${styles.topButtonFilled}`}>
              CHECKOUT NOW
            </button>
          </NavLink>
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
                    <Remove onClick={() => decrementHandler(product)} />
                    <span className={styles.productAmount}>
                      {product.quantity}
                    </span>
                    <Add onClick={() => incHandler(product)} />
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
              <span className={styles.summaryItemPrice}>$ 0</span>
            </div>
            <div className={styles.summaryItem}>
              <span className={styles.summaryItemText}>Shipping Discount</span>
              <span className={styles.summaryItemPrice}>$ 0</span>
            </div>
            <div className={`${styles.summaryItem} ${styles.summaryItemTotal}`}>
              <span className={styles.summaryItemText}>Total</span>
              <span className={styles.summaryItemPrice}>${total}</span>
            </div>

            <button onClick={userValidation} className={styles.summaryButton}>
              CHECKOUT NOW
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
