import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    
      <nav>
        <li>
          <ul>Tendencias</ul>
          <ul>Pop</ul>
          <ul>Rock</ul>
          <ul>Jazz</ul>
          <ul>Clásicos Argentina</ul>
          <ul>Clásicos Internacionales</ul>
        </li>
        <CartWidget />
      </nav>
    
  );
};
