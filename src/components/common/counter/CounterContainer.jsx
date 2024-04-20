import { Counter } from "./Counter";
import "./Counter.css";
import { useState } from "react";


export const CounterContainer = () => {
  const [contador, setContador] = useState(1);

    const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("debes agregar al menos un producto");
    }
  };

  return (
    <Counter 
      sumar={sumar}
      restar={restar}
      contador={contador}
    />
  );
};
