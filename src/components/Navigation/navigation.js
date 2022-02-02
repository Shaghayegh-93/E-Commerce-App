import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { NavLink } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="navContainer">
      <ul className="navWrapper">
        <div className="leftBox">
          <span className="languageInput">EN</span>
          <div className="searchBox">
            <input className="searchInput" placeholder="Search"></input>

            <SearchIcon  className="searchIcon"/>
          </div>
        </div>
        <div className="centerBox">
          <h1 className="logo">SHERY.</h1>
       
        </div>
        <div className="rightBox">
          <div className="navItem">REGISTER</div>
          <div className="navItem">SIGN IN</div>
          <div className="navItem">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon  />
            </Badge>
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default Navigation;
