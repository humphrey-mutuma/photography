import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Socials from "../sideMenu/Socials";

export default function Photographers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ROOT_URL}/api/users/`)
      .then(function (res) {
        // handle success
        setUsers(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  // console.log("users", users);
  return (
    <main>
      <header>
        <h1 className="text-2xl pb-8 text-center text-white">
          Top Photographers
        </h1>
      </header>
      <br />
      <section
        role="list"
        aria-label="Photographers "
        className="flex flex-col sm:flex-row w-full  px-6 items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
      >
        {users.map((photographer) => (
          <div
            key={photographer._id}
            className=" cursor-pointer w-full    sm:w-1/2 md:w-1/3 relative mt-16  mb-14  sm:mb-24 xl:max-w-sm lg:w-1/4"
          >
            <section role="listitem">
              <section className="rounded group overflow-hidden shadow-md ">
                <Link to={photographer._id}>
                  <div className="absolute  -mt-20 w-full flex justify-center">
                    <div className="h-36 w-36 overflow-hidden rounded-full">
                      {photographer.profilePic ? (
                        <img
                          src={photographer.profilePic}
                          alt={photographer.name}
                          className="group-hover:transition  ease-in-out transform hover:scale-125 duration-300 rounded-full  object-cover h-full w-full shadow-sm"
                        />
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="rounded-full object-cover h-full w-full shadow-sm"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </Link>
                <Link to={photographer._id}>
                  <div className=" mt-16 ">
                    <h1 className="font-bold  text-white text-3xl text-mono text-center mb-1 text-ellipsis">
                      {photographer.name}
                    </h1>
                    <p className="text-slate-100  text-sm text-center text-ellipsis">
                      {photographer.description}
                    </p>
                  </div>
                </Link>
              </section>
              <Socials socialMedia={photographer.socialMedia} />
            </section>
          </div>
        ))}
      </section>
    </main>
  );
}
