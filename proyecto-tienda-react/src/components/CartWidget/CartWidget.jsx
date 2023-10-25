import { useState } from "react";

export const CartWidget = () => {
  const [count, setCount] = useState(2);

 const numHardcodeado = () => {
    if (count == 2) {
      return setCount(2);
    }

    setCount(2);
}

  return (
    <div className="uwu">
      <img src="./images/carritocompras.png" alt="carrito"/><div>{count} </div>
    </div>
  );
};