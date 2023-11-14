import { Link } from "react-router-dom";
import styles from  "./Items.module.css";


export const Items = ({ name, artista, img, id }) => {
  return (
    <main className={styles.main}>
    <div className={styles.cardProductos}>
      <h1>{name} </h1>
      <h3>{artista}</h3>
      <img className={styles.imagen} src={img} alt={name} />
      <br />
      <br />
      <Link to = {`/items/${id}`} className={styles.verDetalle} > Ver detalle </Link>
    </div>
    </main>
  );
};
