import logo from "./logo.svg";
import "./App.css";
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";
import ProductForm from "./components/ProductForm/ProductForm";








function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
