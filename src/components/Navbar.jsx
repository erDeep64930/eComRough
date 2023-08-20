import { NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { BiCartAdd } from "react-icons/bi";
const Navbar = () => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <NavLink to="/">
          <img src={logo} alt="logo" width={45} className="rounded-full" />
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <BiCartAdd />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
