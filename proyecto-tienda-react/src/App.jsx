
import {NavBar, ItemListContainer, ItemDetailContainer } from "."
import {BrowserRouter, Routes, Route} from "react-router-dom"

export const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
      <Route path="/" element= {<ItemListContainer  greeting={"Bienvenidos a mi tienda"}/>}/>
      <Route path="/category/:category" element= {<ItemListContainer  greeting={"Bienvenidos a mi tienda"}/>}/>
      <Route path="/items/:id" element= {<ItemDetailContainer />}/>
      </Routes>
    </BrowserRouter>
  );
};
