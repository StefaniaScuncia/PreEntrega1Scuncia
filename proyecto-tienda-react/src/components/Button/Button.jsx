import styles from "./Button.module.css";

export const Button = ({text="boton", variant, functionClick}) => {
    const variantCss= styles [variant]
  return (
    <button className={variantCss} onClick={functionClick} >{text}</button>
  )
}
