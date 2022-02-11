import { Send } from "@material-ui/icons";
import styles from "./newsLetters.module.css";

const NewsLetters = () => {
  return (
    <div className={styles.newsLettersContainer}>
      <h1 className={styles.newsTitle}>Newsletter</h1>
      <div className={styles.newsDesc}>
        Get timely updates from your favorite products.
      </div>
      <div className={styles.newsInputContainer}>
        <input className={styles.newsInput} placeholder="Your email" />
        <button className={styles.newsButton}>
          <Send />
        </button>
      </div>
    </div>
  );
};

export default NewsLetters;
