import { ThemeProvider } from "@mui/material";
import { miTema } from "./components/themeContent.js";
import { Layout } from "./components/layout/Layout.jsx";
import  CartContainer  from "./components/pages/cart/CartContainer.jsx";
import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { Checkout } from "./components/pages/checkout/Checkout";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartContextProvider from "./context/CartContext.jsx";

function App() {
  return (
  <ThemeProvider theme={miTema}>
    <BrowserRouter>
    <CartContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<CartContainer />} />
          <Route path="*" element={<h1> Error 404: not found</h1>} />
        </Route>
        </Routes>
    </CartContextProvider>
    </BrowserRouter>  
  </ThemeProvider>
    
  );
}

export default App;
