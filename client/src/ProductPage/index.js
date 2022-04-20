import axios from "axios";
import { Outlet, Link } from "react-router-dom";
export default function Productpage() {
  return (
    <>
      <Link to="nike">Nike</Link>
      <br />
      <Link to="adidas">Adidas</Link>
      <Outlet></Outlet>
    </>
  );
}
