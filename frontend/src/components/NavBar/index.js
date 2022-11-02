import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useUserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const { userData } = useUserContext();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.clear();
    window.location.reload();
    navigate("/");
  };
  return (
    <Popover className="relative bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between border-b border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <Icon
                className="w-10 h-10 shrink-0"
                icon="emojione:camera-with-flash"
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <a
              href="https://twitter.com/HumphreyMutuma_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-gray-500 hover:text-gray-900 transform hover:scale-125 duration-300 ease-in-out"
            >
              <Icon className="w-8 h-8 shrink-0" icon="logos:twitter" />{" "}
            </a>
            <a
              target="_blank"
              href="https://github.com/humphrey-mutuma"
              rel="noopener noreferrer"
              className="text-base font-medium text-white hover:text-gray-900 transform hover:scale-125 duration-300 ease-in-out"
            >
              <Icon className="w-8 h-8 shrink-0 " icon="arcticons:github" />{" "}
            </a>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 space-x-3 lg:w-0">
            {userData ? (
              <Link
                to="create-gallery"
                className="whitespace-nowrap  text-base font-medium text-white border px-3 py-2 rounded-md"
              >
                Create Gallery
              </Link>
            ) : (
              <Link
                to="signup"
                className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
              >
                Sign up
              </Link>
            )}
            <span>
              {userData && (
                <img
                  onClick={handleLogOut}
                  src={userData?.profilePic}
                  alt=""
                  className="w-12 ml-3 h-12 cursor-pointer border-2 border-white rounded-full"
                />
              )}
            </span>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute z-30 inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-black shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <Link to="/">
                    <span className="sr-only">Your Company</span>
                    <Icon
                      className="w-10 h-10 shrink-0"
                      icon="emojione:camera-with-flash"
                    />
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="space-y-6 py-6 px-5">
              <div className="flex items-center justify-evenly">
                <a
                  href="https://twitter.com/HumphreyMutuma_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-black hover:text-gray-900 transform hover:scale-125 duration-300 ease-in-out"
                >
                  <Icon className="w-8 h-8 shrink-0" icon="logos:twitter" />{" "}
                </a>
                <a
                  target="_blank"
                  href="https://github.com/humphrey-mutuma"
                  rel="noopener noreferrer"
                  className="text-base font-medium text-white hover:text-white transform hover:scale-125 duration-300 ease-in-out"
                >
                  <Icon className="w-8 h-8 shrink-0 " icon="arcticons:github" />{" "}
                </a>
                {userData && (
                  <img
                    onClick={handleLogOut}
                    src={userData?.profilePic}
                    alt=""
                    className="w-12 ml-3 h-12 cursor-pointer border-2 border-white rounded-full"
                  />
                )}{" "}
              </div>
              {userData ? (
                <div>
                  <Link
                    to="/create-gallery"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Create Gallery
                  </Link>
                </div>
              ) : (
                <div>
                  <Link
                    to="/signup"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </Link>
                  <p className="mt-6 text-center text-base font-medium text-gray-500">
                    Existing customer?{" "}
                    <Link
                      to="signin"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              )}
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}
