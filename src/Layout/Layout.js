import Announcement from "../components/Announcement/Announcement";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/navigation";
import NewsLetters from "../components/NewsLetters/NewsLetters";

const Layout = ({ children }) => {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navigation />
      <Announcement />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
