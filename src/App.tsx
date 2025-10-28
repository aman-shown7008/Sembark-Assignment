import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import ProductDetail from "./pages/ProductDetail";
import { Provider } from "react-redux";
import store from "./store/store";
import { AnimatePresence } from "framer-motion";


function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id/details" element={<ProductDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
