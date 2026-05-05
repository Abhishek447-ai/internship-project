import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import BookDetails from "./pages/BookDetails";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import { CartProvider } from "./context/CartContext";
import Checkout from "./pages/Checkout";


function App() {
  const token = sessionStorage.getItem("token");

  return (
    <CartProvider>
      <BrowserRouter>
        {token && <Navbar />}

        <Routes>
          <Route
            path="/"
            element={!token ? <Login /> : <Navigate to="/home" replace />}
          />

          <Route
            path="/home"
            element={token ? <Home /> : <Navigate to="/" replace />}
          />
          <Route
  path="/checkout"
  element={token ? <Checkout /> : <Navigate to="/" />}
/>

          <Route
            path="/cart"
            element={token ? <Cart /> : <Navigate to="/" replace />}
          />

          <Route
            path="/book/:id"
            element={token ? <BookDetails /> : <Navigate to="/" replace />}
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;