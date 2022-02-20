import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.id} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
