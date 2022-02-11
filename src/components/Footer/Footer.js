import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerLeftBox}>
        <h1 className={styles.footerLogo}>SHERY.</h1>
        <p className={styles.fotterDesc}>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className={styles.footerMediaContainer}>
          <div className={styles.mediaIcon} style={{ color: "#3B5999" }}>
            <Facebook />
          </div>
          <div className={styles.mediaIcon} style={{ color: "#E4405F" }}>
            <Instagram />
          </div>
          <div className={styles.mediaIcon} style={{ color: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className={styles.mediaIcon} style={{ color: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className={styles.footerCenterBox}>
        <h3 className={styles.footerTitle}>Useful Links</h3>
        <ul className={styles.footerList}>
          <li className={styles.footerListItem}>Home</li>
          <li className={styles.footerListItem}>Cart</li>
          <li className={styles.footerListItem}>Man Fashion</li>
          <li className={styles.footerListItem}>Woman Fashion</li>
          <li className={styles.footerListItem}>Accessories</li>
          <li className={styles.footerListItem}>Account</li>
          <li className={styles.footerListItem}>Order Tracking</li>
          <li className={styles.footerListItem}>Wishlist</li>
          <li className={styles.footerListItem}>Terms</li>
        </ul>
      </div>
      <div className={styles.footerRightBox}>
        <h3 className={styles.footerTitle}>Contact</h3>
        <div className={styles.contactItem}>
          <Room className={styles.contactItemIcon} />
          622 Dixie Path , South Tobinchester 98336
        </div>
        <div className={styles.contactItem}>
          <Phone className={styles.contactItemIcon} /> +1 234 56 78
        </div>
        <div className={styles.contactItem}>
          <MailOutline className={styles.contactItemIcon} />
          contact@shery.dev
        </div>
        <img
          className={styles.paymentImg}
          src="https://i.ibb.co/Qfvn4z6/payment.png"
        />
      </div>
    </footer>
  );
};

export default Footer;
