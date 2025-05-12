import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/Assets/menbanner.jpg";
import women_banner from "./Components/Assets/womenbanner.jpg";
import ShopContextProvider from "./Context/ShopContext";
import UserContextProvider from "./Context/UserContext"; // ✅ Import UserContext

function App() {
  return (
    <div>
      <BrowserRouter>
        {/* Wrap the app with both contexts */}
        <UserContextProvider> {/* ✅ Wrap with UserContextProvider */}
          <ShopContextProvider> {/* ✅ Keep ShopContextProvider */}
            <Navbar />
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/mens" element={<ShopCategory banner={men_banner} category="Men" />} />
              <Route path="/womens" element={<ShopCategory banner={women_banner} category="Women" />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:productId" element={<Product />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/login" element={<LoginSignup />} />
            </Routes>
            <Footer />
          </ShopContextProvider>
        </UserContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

