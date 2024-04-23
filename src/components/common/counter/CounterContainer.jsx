import { Counter } from "./Counter.jsx";
import { useState } from "react";


export const CounterContainer = ({stock, initial=1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if( contador < stock ){
      setContador(contador + 1);
    }else{
      alert("maximo en stock")
    }
  };


  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("debes agregar al menos un producto");
    }
  };

  let objectProps = {
    restar,
    sumar,
    contador,
    onAdd
  };

return (
    <Counter {...objectProps} />
  );
};



