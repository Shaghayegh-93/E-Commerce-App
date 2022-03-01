import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";
import CartProvider from "./context/CartProvider";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
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
