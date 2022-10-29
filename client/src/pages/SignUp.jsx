import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ToastifyFailure,
  ToastifySuccess,
} from "../components/Toastify/Toastify";

function SignUp() {
  const { register, reset, handleSubmit } = useForm();

  // signup user
  const onSubmit = ({
    name,
    email,
    password,
    description,
    facebook,
    twitter,
    instagram,
  }) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_ROOT_URL}/api/users`, {
        name,
        email,
        password,
      })
      .then(function (res) {
        reset();
        ToastifySuccess("Successfully Registered");
        // console.log("new user", res);
      })
      .catch(function (error) {
        // console.log(error);
        if (error.response.data.msg === "login") {
          ToastifyFailure("You are registered, Kindly LOGIN");
        } else {
          ToastifyFailure("Something Went Wrong, Try again");
        }
      });
  };

  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-black">
      {/*  Site header */}
      <NavBar />
      {/*  Page content */}
      <main className="flex-grow">
        <section className="">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-6 pb-12  md:pb-20">
              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-6 md:pb-10">
                <h1 className="h1 text-white">
                  Welcome, make your photograhy dream a reality today.
                </h1>
              </div>

              {/* Form */}
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <section className="flex mb-4 flex-col sm:flex-row items-center justify-between sm:space-x-2 ">
                    <div className="w-full mb-4 sm:mb-0">
                      <label
                        className="block text-gray-100 text-sm font-medium mb-1"
                        htmlFor="name"
                      >
                        Name <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="name"
                        {...register("name", {
                          required: true,
                        })}
                        type="text"
                        className="form-input w-full text-black"
                        placeholder="Enter your name"
                        required
                      />
                    </div>
                    <div className="w-full mb-4 sm:mb-0">
                      <label
                        className="block text-gray-100 text-sm font-medium mb-1"
                        htmlFor="email"
                      >
                        Email <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="email"
                        {...register("email", {
                          required: true,
                        })}
                        type="email"
                        className="form-input w-full text-black"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </section>
                  <section className="flex mb-4 flex-col sm:flex-row items-center justify-between sm:space-x-2 ">
                    <div className="w-full mb-4 sm:mb-0">
                      <label
                        className="block text-gray-100 text-sm font-medium mb-1"
                        htmlFor="password"
                      >
                        Password <span className="text-red-600">*</span>
                      </label>
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
                    <div className="w-full mb-4 sm:mb-0">
                      <label
                        className="block text-gray-100 text-sm font-medium mb-1"
                        htmlFor="description"
                      >
                        Short Description{" "}
                        <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="description"
                        type="description"
                        {...register("description", {
                          required: true,
                        })}
                        className="form-input w-full text-black"
                        placeholder="e.g Nature and street photographer"
                        required
                      />
                    </div>
                  </section>

                  {/* social media handles */}
                  <section className="flex mb-4 flex-col sm:flex-row items-center justify-between sm:space-x-2 ">
                    <aside>
                      <div className="w-full mb-4 sm:mb-0">
                        <div className="flex justify-between">
                          <label
                            className="block text-gray-100 text-sm font-medium mb-1"
                            htmlFor="facebook"
                          >
                            Facebook username
                          </label>
                        </div>
                        <input
                          id="facebook"
                          type="facebook"
                          {...register("facebook", {
                            required: false,
                          })}
                          className="form-input w-full text-black"
                          placeholder="Enter your facebook Username"
                        />
                      </div>
                    </aside>
                    <aside>
                      <div className="w-full mb-4 sm:mb-0">
                        <div className="flex justify-between">
                          <label
                            className="block text-gray-100 text-sm font-medium mb-1"
                            htmlFor="twitter"
                          >
                            Twitter Username
                          </label>
                        </div>
                        <input
                          id="twitter"
                          type="twitter"
                          {...register("twitter", {
                            required: false,
                          })}
                          className="form-input w-full text-black"
                          placeholder="Enter your twitter username"
                        />
                      </div>
                    </aside>
                    <aside>
                      <div className="w-full ">
                        <div className="flex justify-between">
                          <label
                            className="block text-gray-100 text-sm font-medium mb-1"
                            htmlFor="instagram"
                          >
                            Instagram Username
                          </label>
                        </div>
                        <input
                          id="instagram"
                          type="instagram"
                          {...register("instagram", {
                            required: false,
                          })}
                          className="form-input w-full text-black"
                          placeholder="Enter your instagram username"
                        />
                      </div>
                    </aside>
                  </section>
                  <div className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full ">
                      <input
                        value="Sign up"
                        type="submit"
                        className="btn text-white text-center cursor-pointer bg-blue-600 hover:bg-blue-700 w-full"
                      />
                    </div>
                  </div>
                  <div className="text-sm text-gray-400 text-center mt-3">
                    By creating an account, you agree to the{" "}
                    <a className="underline" href="#0">
                      terms & conditions
                    </a>
                    , and our{" "}
                    <a className="underline" href="#0">
                      privacy policy
                    </a>
                    .
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

                <div className="text-gray-500 text-center mt-6">
                  Already registered?{" "}
                  <Link
                    to="/signin"
                    className="text-blue-600 hover:underline transition duration-150 ease-in-out"
                  >
                    Log in
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

export default SignUp;
