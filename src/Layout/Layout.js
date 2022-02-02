import Announcement from "../components/Announcement/Announcement";
import Navigation from "../components/Navigation/navigation";

const Layout = ({ children }) => {
  return (
    <div>
      <Announcement/>
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
