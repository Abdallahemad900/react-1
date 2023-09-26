import Navbar from "./components/Navbaro";
import ProductsList from "./components/Productslist";
import Slider from "./components/Slaider";
import { Routes, Route } from "react-router-dom";
import About from "./components/Abouts";
import ProductDetails from "./components/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <ProductsList />
            </>
          }
        />
        <Route path="about" element={<About />} />
        <Route path="product/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;