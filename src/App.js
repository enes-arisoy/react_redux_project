import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Product from "./pages/Product";
import ProductCard from "./Components/ProductCard";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/products" element={<ProductCard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
