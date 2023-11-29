import React from "react";
import "./Menu.css";
import { Link, Outlet } from "react-router-dom";
import mainMenuImage from "../../assets/main-menu-icon.png";

const Menu = () => {
  return (
    <>
      <div id="sidebar">
        <h1>Menu</h1>
        <br/>
        <div></div>
        <nav>
          <ul>
            <li>
              <Link to={`/createQuestions`}>Create Questions</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};

export default Menu;
