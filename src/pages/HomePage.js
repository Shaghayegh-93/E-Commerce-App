import Categories from "../components/Categories/Categories";
import Slider from "../components/Slider/Slider";
import Layout from "../Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      <Slider />
      <Categories />
    </Layout>
  );
};

export default HomePage;
