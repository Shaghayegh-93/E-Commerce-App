import "./categoryItem.css";
const CategoryItem = ({ categoryItem }) => {
  return (
    <div className="categoryContainer">
      <img className="categoryImg" src={categoryItem.img}></img>
      <div className="categoryInfoContainer">
        <h1 className="categoryTitle">{categoryItem.title}</h1>
        <button className="categoryButton">SHOP NOW</button>
      </div>
    </div>
  );
};

export default CategoryItem;
