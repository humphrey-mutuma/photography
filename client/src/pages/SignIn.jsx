import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ToastifyFailure,
  ToastifySuccess,
} from "../components/Toastify/Toastify";
import { useUserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const { register, reset, handleSubmit } = useForm();
  const { setUserData } = useUserContext();
  const navigate = useNavigate();


  // signup user
  const onSubmit = ({ email, password }) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_ROOT_URL}/api/users/login`, {
        email,
        password,
      })
      .then(function (res) {
        // store token in local storage
        localStorage.setItem("token", res.data.token);
        setUserData(res.data);
        reset();
        navigate("/create-gallery");
        ToastifySuccess("Successfully Logged In");
        // console.log("new user", res);
      })
      .catch(function (error) {
        // console.log(error);
        ToastifyFailure("Invalid Credentials");
      });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-black">
      {/*  Site header */}
      <NavBar />
      {/*  Page content */}
      <main className="flex-grow">
        <section className=" ">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className=" pb-12 pt-6 md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
                <h1 className="h1 text-white">
                  Welcome back, make your photography dream a reality today.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-100 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        {...register("email", {
                          required: true,
                        })}
                        className="form-input w-full text-black"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label
                          className="block text-gray-100 text-sm font-medium mb-1"
                          htmlFor="password"
                        >
                          Password
                        </label>
                      </div>
                      <input
                        id="password"
                        type="password"
                        {...register("password", {
                          required: true,
                        })}
                        className="form-input w-full text-black"
                        placeholder="Enter your password"
                        required
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="text-gray-300 ml-2">
                            Keep me logged in
                          </span>
                        </label>{" "}
                        <Link
                          to="/reset-password"
                          className="text-sm font-medium text-blue-600 hover:underline"
                        >
                          Having trouble logging in?
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3">
                      <input
                        type="submit"
                        value="Log In"
                        className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                      />
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div
                    className="border-t border-gray-300 flex-grow mr-3"
                    aria-hidden="true"
                  ></div>
                  <div className="text-gray-600 italic">Or</div>
                  <div
                    className="border-t border-gray-300 flex-grow ml-3"
                    aria-hidden="true"
                  ></div>
                </div>

                <div className="text-gray-400 text-center mt-6">
                  Don’t you have an account?{" "}
                  <Link
                    to="/signup"
                    className="text-blue-600 cursor-pointer hover:underline transition duration-150 ease-in-out"
                  >
                    Sign up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default SignIn;
