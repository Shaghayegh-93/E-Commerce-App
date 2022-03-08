import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./context/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer theme="colored" />
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} {...route} />
          ))}
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
