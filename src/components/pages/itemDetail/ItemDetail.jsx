import { CounterContainer } from "../../common/counter/CounterContainer";
import "./ItemDetail.css"


const ItemDetail = ({ item, onAdd }) => {
    return (
    <div>
        <div className=  {"containerItemDetail"}>
        <div className={"containerImage"}>
            <img src={item.img} alt="" />
        </div>

        <div className={"containerDetail"}>
            <h2 style={{ fontFamily: "Pacifico, cursive" }}>
            <span style={{ fontSize: "25px" }}>Nombre:</span> {item.title}
            </h2>
            <h2 style={{ fontFamily: "Pacifico, cursive"}}>
            <span style={{ fontSize: "25px" }}>Descripcion:</span>{" "}
            {item.description}
            </h2>
            <h2 style={{ fontFamily: "Pacifico, cursive" }}>
            <span style={{ fontSize: "25px" }}>Precio:</span> ${item.price}.-
            </h2>
        </div>
        </div>
        <CounterContainer stock={item.stock} onAdd={onAdd} />

    </div>
    );
};

export default ItemDetail;