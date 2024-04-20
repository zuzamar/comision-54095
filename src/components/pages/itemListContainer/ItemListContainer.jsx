import { ProductCard } from "../../common/productCard/ProductCard.jsx";
import gucciImage from "../../../assets/images/gucci.jpg";
import carolinaHerreraImage from "../../../assets/images/carolinaHerrera.jpg";
import calvinKleinImage from "../../../assets/images/calvinKelin.jpg";
import pacoRabanneImage from "../../../assets/images/pacoRabanne.jpg";
import "./ItemListContainer.css";

export const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h1
        className="titulo"
        style={{
          width: "100%",
          height: "40%",
          fontFamily: "inherit",
          fontSize: "4rem",
          color: "#73284d",
          padding: "1rem",
          textAlign: "center",
        }}
      >
        {" "}
        {greeting}{" "}
      </h1>
      <div className="cards">
        <ProductCard
          image={gucciImage}
          nombre="Gucci"
          descripcion=" Fragancia floral y elegante de Gucci, inspirada en la feminidad y la belleza natural. Su aroma combina notas de jazmín, tuberosa y lirio, creando una experiencia floral suave y sofisticada"
          precio={5760}
        />
        <ProductCard
          image={carolinaHerreraImage}
          nombre="Carolina Herrera"
          descripcion="Carolina Herrera Blush es una fragancia fresca y floral, con notas principales de pomelo rosa, flor de peonía y almizcle blanco. Aroma ligero, delicado y romántico, fragancia fresca y elegante para el día a día."
          precio={7659}
        />
        <ProductCard
          image={calvinKleinImage}
          nombre="Calvin Klein"
          descripcion="Euphoria de Calvin Klein es una fragancia icónica y sensual. Con notas orientales y exóticas, combina la granada, la orquídea negra y el ámbar líquido para crear un aroma cautivador y sofisticado. "
          precio={5640}
        />
        <ProductCard
          image={pacoRabanneImage}
          nombre="Paco Rabbane"
          descripcion="Pure XS es una fragancia femenina que celebra la sensualidad y la audacia. Con una combinación de notas dulces y picantes, como la vainilla, el ylang-ylang y la popurrí de palomitas de maíz, crea un aroma adictivo y seductor."
          precio={5690}
        />
      </div>
    </div>
  );
};
