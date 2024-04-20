import { ThemeProvider } from "@mui/material";
import { ItemListContainer } from "./components/pages/itemListContainer/ItemListContainer.jsx";
import { miTema } from "./components/themeContent.js";
import { CounterContainer } from "./components/common/counter/CounterContainer.jsx";
import { Layout } from "./components/layout/Layout.jsx";
import { CartContainer } from "./components/pages/cart/CartContainer.jsx";

function App() {
  return (
    <ThemeProvider theme={miTema}>
      
      <Layout>
      
        <ItemListContainer greeting="¡Bienvenidos a Mi Perfumería" />
        <CartContainer />
        <CounterContainer />
      
      </Layout>
            
    </ThemeProvider>
      );
}

export default App;
