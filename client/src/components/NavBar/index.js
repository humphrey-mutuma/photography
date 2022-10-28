import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Fade } from "react-reveal";

export default function NavBar() {
  return (
    <nav id="header" className=" w-full z-50 top-0 sm:px-10 ">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <Link to="/">
            <Icon
              className="w-10 h-10 shrink-0"
              icon="emojione:camera-with-flash"
            />
          </Link>
        </div>
        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            <svg
              className="fill-current h-6 w-6 text-white rounded-md"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center space-x-6">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-300 no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://twitter.com/HumphreyMutuma_"
              >
                <Fade left duration={2000}>
                  <Icon className="w-6 h-6 shrink-0" icon="logos:twitter" />{" "}
                </Fade>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white no-underline hover:text-pink-500 hover:text-underline text-center h-10 p-2 md:h-auto md:p-4 transform hover:scale-125 duration-300 ease-in-out"
                href="https://github.com/humphrey-mutuma/photography"
              >
                <Fade left duration={2000}>
                  <Icon
                    className="w-8 h-8 shrink-0 "
                    icon="arcticons:github"
                  />{" "}
                </Fade>
              </a>
            </li>

            {/* Site navigation */}
            <li>
              <Link
                to="/signin"
                className="btn-sm font-medium text-black bg-white  hover:text-gray-900 px-5 py-3 flex items-center transition  ease-in-out transform hover:scale-125 duration-300"
              >
                Log in
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
