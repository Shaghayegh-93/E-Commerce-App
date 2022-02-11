import styles from "./slider.module.css";
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
    <div className={styles.sliderContainer}>
      <div
        className={`${styles.arrow} ${styles.arrowLeft}`}
        onClick={() => sliderArrowHandler("left")}
      >
        <ArrowLeftOutlinedIcon />
      </div>
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}
      >
        {sliderItems.map((item) => (
          <div
            key={item.id}
            className={styles.silde}
            style={{ backgroundColor: item.bg }}
          >
            <div className={styles.imgContainer}>
              <img alt="heroImage" className="slideImage" src={item.img} />
            </div>
            <div className={styles.infoContainer}>
              <h1 className={styles.headerTitle}>{item.title}</h1>
              <p className={styles.headerDescription}>{item.desc}</p>
              <button className={styles.headerButton}>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`${styles.arrow} ${styles.arrowRight}`}
        onClick={() => sliderArrowHandler("right")}
      >
        <ArrowRightOutlinedIcon />
      </div>
    </div>
  );
};

export default Slider;
