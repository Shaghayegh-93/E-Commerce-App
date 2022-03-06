import styles from "./checkoutPage.module.css";
import { useCart } from "../../context/CartProvider";
import { Link } from "react-router-dom";
const CheckoutPage = () => {
  const { cart } = useCart();
  return (
    <div className={styles.checkoutContainer}>
      {cart
        ? `Order has been created successfully. Your order number is 666544546`
        : `Successfull. Your order is being prepared...`}
      <Link to="/">
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default CheckoutPage;
