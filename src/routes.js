import CartPage from "./pages/CartPage/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProductItemPages from "./pages/ProductItempage/ProductItemPages";
import ProductListPage from "./pages/productListPage/ProductLisPages";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const routes = [
  { path: "/cart", element: <CartPage />, id: Date.now() },
  { path: "/", element: <HomePage />, id: Date.now() },
  { path: "/products/:category", element: <ProductListPage />, id: Date.now() },
  { path: "/product/:id", element: <ProductItemPages />, id: Date.now() },
  { path: "/login", element: <LoginPage />, id: Date.now() },
  { path: "/register", element: <RegisterPage />, id: Date.now() },
];
export default routes;
