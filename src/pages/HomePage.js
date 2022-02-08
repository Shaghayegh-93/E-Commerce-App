import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import Layout from "../Layout/Layout";
import ProductList from "../components/ProductList/ProductList";
import NewsLetters from "../components/NewsLetters/NewsLetters";

const HomePage = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <ProductList />
      <NewsLetters />
    </Layout>
  );
};

export default HomePage;
