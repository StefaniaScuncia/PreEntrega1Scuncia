import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

export const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Bienvenid@s a Tienda Music"}/>
    </>
  );
};
