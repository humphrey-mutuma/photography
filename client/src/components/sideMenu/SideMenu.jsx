import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Burger from "../../images/burger-menu.png";
import Socials from "./Socials";

const activeMenuStyles = {
  textDecoration: "none",
  color: "rgb(37, 99, 235)",
};

const SideMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const ref = useRef(null);

  function ToggleMenu() {
    hiddenMenu ? setHiddenMenu(false) : setHiddenMenu(true);
  }
  function RemoveMenu() {
    setHiddenMenu(true);
    window.scrollTo(0, 0);
  }

  return (
    <header className="sm:relative flex flex-col min-h-screen col-span-1 items-center justify-center absolute">
      <nav
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex-col items-center fixed  text-2xl gap-5 text-slate-600 hidden sm:flex`}
      >
         <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/"
          onClick={() => {
            RemoveMenu();
          }}
        >
          Home
        </NavLink>
        <img
          className="burger-icon w-52 h-52 object-cover rounded-full cursor-pointer  z-10 "
          onClick={ToggleMenu}
          ref={ref}
          src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
          alt=""
        ></img>
        <h1 className="sm:text-xl md:text-3xl font-semibold font-namefont text-center uppercase text-black ">
          <span className="">Jane Doe</span>
        </h1>{" "}
        <h1 className="sm:text-lg md:text-xl  font-namefont text-center uppercase text-black ">
          <span className="">Street Photographer</span>
        </h1>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/gallery"
          onClick={() => {
            RemoveMenu();
          }}
        >
          Gallery
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/blog"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Blog
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/about"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          About
        </NavLink>
        <NavLink
          className="hover:text-blue-600 smooth-transition text-xl"
          to="/contact"
          onClick={() => {
            RemoveMenu();
          }}
          style={({ isActive }) => (isActive ? activeMenuStyles : {})}
        >
          Contact
        </NavLink>
        <Socials />
        <a
          className="text-sm"
          href="https://github.com/catherineisonline/travel-with-catherine"
          target="_blank"
          rel="noreferrer"
        >
          &copy; 2022 by Catherine
        </a>
      </nav>
    </header>
  );
};

export default SideMenu;
