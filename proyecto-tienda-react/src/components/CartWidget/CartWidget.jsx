import styles from "./CartWidget.module.css"

export const CartWidget = () => {

  return (
    <div className={styles.carritoCompras}>
      <img src="../images/carritocompras.png" alt="carrito" className={styles.imgCarrito}/>
    </div>
  );
}