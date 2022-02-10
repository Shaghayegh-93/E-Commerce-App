import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@material-ui/icons";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerContainer">
      <div className="footerLeftBox">
        <h1 className="footerLogo">SHERY.</h1>
        <p className="fotterDesc">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </p>
        <div className="footerMediaContainer">
          <div className="mediaIcon" style={{ color: "#3B5999" }}>
            <Facebook />
          </div>
          <div className="mediaIcon" style={{ color: "#E4405F" }}>
            <Instagram />
          </div>
          <div className="mediaIcon" style={{ color: "#55ACEE" }}>
            <Twitter />
          </div>
          <div className="mediaIcon" style={{ color: "#E60023" }}>
            <Pinterest />
          </div>
        </div>
      </div>
      <div className="footerCenterBox">
        <h3 className="footerTitle">Useful Links</h3>
        <ul className="footerList">
          <li className="footerListItem">Home</li>
          <li className="footerListItem">Cart</li>
          <li className="footerListItem">Man Fashion</li>
          <li className="footerListItem">Woman Fashion</li>
          <li className="footerListItem">Accessories</li>
          <li className="footerListItem">Account</li>
          <li className="footerListItem">Order Tracking</li>
          <li className="footerListItem">Wishlist</li>
          <li className="footerListItem">Terms</li>
        </ul>
      </div>
      <div className="footerRightBox">
        <h3 className="footerTitle">Contact</h3>
        <div className="contactItem">
          <Room className="contactItemIcon" />
          622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="contactItem">
          <Phone className="contactItemIcon" /> +1 234 56 78
        </div>
        <div className="contactItem">
          <MailOutline className="contactItemIcon" />
          contact@shery.dev
        </div>
        <img
          className="paymentImg"
          src="https://i.ibb.co/Qfvn4z6/payment.png"
        />
      </div>
    </footer>
  );
};

export default Footer;
