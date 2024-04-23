import "./Counter.css";

export const Counter = ({
  sumar,
  restar,
  contador,
  onAdd
}) => {
  return (
    <div className="counter" >
      <h1> Contador </h1>
      <button onClick={restar}> restar </button>
      <h2> {contador} </h2>
      <button onClick={sumar}> sumar </button>
      <button onClick={()=>onAdd(contador)}>Agregar al carrito</button>
    </div>
  );
};  



