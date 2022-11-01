import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Socials from "./Socials";

const SideMenu = ({ user }) => {
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
        <div className="w-44 h-44 lg:w-52 lg:h-52">
          {user.profilePic ? (
            <img
              onClick={ToggleMenu}
              ref={ref}
              src={user.profilePic}
              alt={user.name}
              className="burger-icon w-44 h-44 lg:w-52 lg:h-52 object-cover rounded-full cursor-pointer  z-10 "
            />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="burger-icon w-44 h-44 lg:w-52 lg:h-52 object-cover rounded-full cursor-pointer  z-10 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          )}
        </div>
        <h1 className="sm:text-xl md:text-3xl font-semibold font-namefont text-center uppercase text-white  ">
          <span className="">{user.name}</span>
        </h1>{" "}
        <h1 className="sm:text-lg md:text-xl  font-namefont text-center uppercase  text-white ">
          <span className="">{user.description}</span>
        </h1>
        <Socials socialMedia={user.socialMedia} />
        <a
          className="text-sm"
          href="https://github.com/humphrey-mutuma"
          target="_blank"
          rel="noreferrer"
        >
          &copy; {new Date().getFullYear()} {user.name}
        </a>
      </nav>
    </header>
  );
};

export default SideMenu;
