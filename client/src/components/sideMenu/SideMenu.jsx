import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Socials from "./Socials";

const SideMenu = () => {
  const [hiddenMenu, setHiddenMenu] = useState(true);
  const ref = useRef(null);

  function ToggleMenu() {
    hiddenMenu ? setHiddenMenu(false) : setHiddenMenu(true);
  }

  return (
    <header className="sm:relative flex flex-col  text-white min-h-screen col-span-1 items-center justify-center absolute">
      <nav
        className={`main-menu${
          hiddenMenu ? `` : ` show-menu`
        } flex-col items-center fixed  text-2xl gap-5  text-slate-600 hidden sm:flex`}
      >
        <NavLink
          className="hover:text-blue-600 smooth-transition inline-flex text-center text-slate-200 items-center justify-center text-xl"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
            />
          </svg>{" "}
          back
        </NavLink>
        <img
          className="burger-icon w-52 h-52 object-cover rounded-full cursor-pointer  z-10 "
          onClick={ToggleMenu}
          ref={ref}
          src="https://cdn.pixabay.com/photo/2016/11/18/19/07/happy-1836445__340.jpg"
          alt=""
        ></img>
        <h1 className="sm:text-xl md:text-3xl font-semibold font-namefont text-center uppercase text-white  ">
          <span className="">Jane Doe</span>
        </h1>{" "}
        <h1 className="sm:text-lg md:text-xl  font-namefont text-center uppercase  text-white ">
          <span className="">Street Photographer</span>
        </h1>
        <Socials />
        <a
          className="text-sm"
          href="https://github.com/catherineisonline/travel-with-catherine"
          target="_blank"
          rel="noreferrer"
        >
          &copy; 2022 Humphrey Mutuma
        </a>
      </nav>
    </header>
  );
};

export default SideMenu;
