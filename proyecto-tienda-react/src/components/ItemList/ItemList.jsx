import {Items} from "../Items/Items"
import styles from "./ItemList.module.css"

export const ItemList = ({ products }) => {
  return (
    <>
    <div className={styles.div}>
    {products.map (product => <Items key={product.id} {...product}/>)}
    </div>
    </>
  );
};
