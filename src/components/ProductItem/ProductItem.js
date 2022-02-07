import "./productItem.css";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
const ProductItem = ({ productItem }) => {
  return (
    <div className="productItemContainer">
      <div className="circle"></div>
      <img className="produtImg" src={productItem.img} />
      <div className="productItemInfo">
        <div className="productItemIcon">
          <ShoppingCartOutlinedIcon />
        </div>
        <div className="productItemIcon">
          <SearchOutlinedIcon />
        </div>
        <div className="productItemIcon">
          <FavoriteBorderOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
