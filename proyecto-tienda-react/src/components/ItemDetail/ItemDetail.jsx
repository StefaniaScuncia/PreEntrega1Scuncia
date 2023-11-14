import { Count } from "../Count/Count";
import styles from "./ItemDetail.module.css"

export const ItemDetail = ({ id, name, artista,price, stock, img }) => {
  return (
    <main className={styles.mainDetalle}>
    <div className={styles.cardDetalle}>
      <h1>{name} </h1>
      <h2>{artista}</h2>
      <img src= {img} alt={name} className={styles.imageDetalle} />
      <br />
      <br />
      <h2>Precio: {price} </h2>
      <Count />
    </div>
    </main>
  );
};
