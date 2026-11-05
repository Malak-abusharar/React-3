import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { FaRegSun, FaMoon } from "react-icons/fa6";
import "../theme.css";
import { useContext } from "react";
import Data from "../context/Data.jsx";
import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from "../firebase/Config.js"
export default function Header() {
  const [user, loading, error] = useAuthState(auth);
  const { theme, changeTheme } = useContext(Data);

  return (
    <div>
      {user && <p>hello</p>}
      <header className="header comp">
        <h1>
          <Link to="/">Web Dev Roadmap</Link>
        </h1>
        <button
          className="theme"
          onClick={() => {
            changeTheme(theme === "light" ? "dark" : "light");
          }}
        >
          {theme === "light" ? <FaMoon /> : <FaRegSun />}
        </button>
        <ul className="flex">
          {!user && <li className="main-list">
            <NavLink className="main-link" to="/Signin">
               SignIn
            </NavLink>
          </li>}
          {!user && <li className="main-list">
            <NavLink className="main-link" to="/Signup">
              SignUp
            </NavLink>
          </li>}
          <li className="main-list">
            <NavLink className="main-link" to="/Basic">
              Basics
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Framework">
              Frameworks
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Tips">
              Tips
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
}
