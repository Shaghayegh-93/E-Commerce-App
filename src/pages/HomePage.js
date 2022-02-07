import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import Layout from "../Layout/Layout";
import ProductList from "../components/ProductList/ProductList";

const HomePage = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
      <ProductList />
    </Layout>
  );
};

export default HomePage;
