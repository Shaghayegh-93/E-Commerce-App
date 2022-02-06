import "./slider.css";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@material-ui/icons/ArrowRightOutlined";
import { sliderItems } from "../../data";
import { useState } from "react";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const sliderArrowHandler = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="sliderContainer">
      <div
        className="arrowLeft arrow"
        onClick={() => sliderArrowHandler("left")}
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className="sliderWrapper"
        style={{transform: `translateX(${-100 * slideIndex}vw)`}}
        
          
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className="silde"
            style={{ backgroundColor: item.bg }}
           
          >
            <div className="imgContainer">
              <img alt="heroImage" className="slideImage" src={item.img} />
            </div>
            <div className="infoContainer">
              <h1 className="headerTitle">{item.title}</h1>
              <p className="headerDescription">{item.desc}</p>
              <button className="headerButton">SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className="arrowRight arrow"
        onClick={() => sliderArrowHandler("right")}
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
