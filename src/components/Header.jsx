import { Link , NavLink } from "react-router-dom";
import Cart from "./Cart";

const Header = () => {
  return (
    <>
      <nav className="nav">
        <h2 className="logo">Enaa's Store</h2>
        <ul className="nav_list">
          <li> <NavLink to="/"   style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })}> home</NavLink></li>
          <li><NavLink   style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })} to="/AddProduct">add Product</NavLink></li>
          <li><NavLink   style={({ isActive }) => ({
                    color: isActive ? "yellow" : "white",
                    fontWeight: isActive ? "bold" : "normal",
                    textDecoration: "none",
                    marginRight: "15px",
                })} to="/AboutUs">About us</NavLink></li>
        </ul>
      </nav>
    </>
  );
};
export default Header;
