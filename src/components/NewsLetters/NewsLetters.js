import { Send } from "@material-ui/icons";
import "./newsLetters.css";

const NewsLetters = () => {
  return (
    <div className="newsLettersContainer">
      <h1 className="newsTitle">Newsletter</h1>
      <div className="newsDesc">
        Get timely updates from your favorite products.
      </div>
      <div className="newsInputContainer">
        <input className="newsInput" placeholder="Your email" />
        <button className="newsButton">
          <Send />
        </button>
      </div>
    </div>
  );
};

export default NewsLetters;
