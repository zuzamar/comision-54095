import { Home } from "./components/home/Home.jsx";
import { ItemListContainer } from "./components/itemListContainer/ItemListContainer.jsx";
import { NavBar } from "./components/navBar/NavBar.jsx";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenidos a:" />
      <Home />
    </div>
  );
}

export default App;
