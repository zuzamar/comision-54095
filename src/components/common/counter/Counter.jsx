export const Counter = ({
  sumar,
  restar,
  contador,
}) => {
  return (
    <div className="counter">
      <h1> Contador </h1>
      <button onClick={restar}> restar </button>
      <h2> {contador} </h2>
      <button onClick={sumar}> sumar </button>
    </div>
  );
};
