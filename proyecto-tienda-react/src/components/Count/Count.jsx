import { useState } from "react";
import { Button } from "../Button/Button"
import styles from "./Count.module.css"

export const Count = ({initial = 0,  max }) => {
  const [count, setCount] = useState(initial);

  const increment = () => { 
    if(count === max) {
      return setCount(count)
    }
    setCount(count +1);
   }

  const decrement = () => { 
    if(count === 0) {
      return setCount(0);
    }
      setCount(count - 1);
   }

  return (
    <div className={styles.count}>
    <>
      <Button text="-" variant={"verDetalle"} functionClick={decrement} />
      <strong className={styles.numero}> {count} </strong>
      <Button text="+" variant={"verDetalle"} functionClick={increment} />
    </>
    </div>
  )
}

