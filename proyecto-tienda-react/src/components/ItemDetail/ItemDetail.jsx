import { useState } from "react";
import { Count } from "../Count/Count";
import styles from "./ItemDetail.module.css"
import {Link} from "react-router-dom"

export const ItemDetail = ({ id, name, artista,price, stock, img }) => {
  const [quantityAdded, setQuantityAdded] = useState(0)

  const onAdd = (quantity) => { 
    setQuantityAdded (quantity)
 }


  return (
    <main className={styles.mainDetalle}>
    <div className={styles.cardDetalle}>
      <h1>{name} </h1>
      <h2>{artista}</h2>
      <img src= {img} alt={name} className={styles.imageDetalle} />
      <br />
      <br />
      <h2>Precio: {price} </h2>
      {
        quantityAdded > 0 ? (
          <Link to= "/cart" className={styles.verDetalle}>Terminar compra</Link>
        ): (
          <Count stock={stock} onAdd={onAdd} />
        )
      }
    </div>
    </main>
  );
};
