import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ToastifyFailure,
  ToastifySuccess,
} from "../components/Toastify/Toastify";
import { useUserContext } from "../context/UserContext";
import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../lib/firebase";
import {
  getStorage,
  ref as imageReference,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const { register, reset, handleSubmit } = useForm();
  const { setUserData } = useUserContext();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const storage = getStorage(initializeApp(firebaseConfig));
  const [uploading, setUploading] = useState(false);
    const navigate = useNavigate();

  // upload image to firebase storage
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = imageReference(
      storage,
      `profiles/${uuidv4() + imageUpload.name}`
    );
    // eslint-disable-next-line no-unused-expressions, no-sequences
    setUploading(true),
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          // eslint-disable-next-line no-unused-expressions, no-sequences
          setUploading(false), setImageUpload(null), setImageUrl(url);
        });
      });
  };

  console.log(imageUrl);
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
        description,
        socialMedia: {
          facebook,
          twitter,
          instagram,
        },
        profilePic: imageUrl,
      })
      .then(function (res) {
        setUserData(res.data);
        setImageUrl("");
        navigate("/create-gallery");
        reset();
        ToastifySuccess("Successfully Registered");
        console.log("reg user", res);
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
                  {/* profile pic */}
                  <main className="  mx-auto">
                    {imageUrl === "" ? (
                      <div className="flex items-center justify-between  border border-dashed ">
                        <label className=" flex-auto">
                          <span className="sr-only">Choose profile photo</span>
                          <input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={(e) => {
                              setImageUpload(e.target.files[0]);
                            }}
                            className="block flex-3 p-6  cursor-pointer w-full text-slate-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-violet-200 file:text-blue-700 hover:file:bg-violet-100    "
                          />
                        </label>
                        <div
                          className=" mr-2 text-center flex-1 py-4 rounded-sm h-fit w-2 bg-blue-500 whitespace-nowrap cursor-pointer"
                          onClick={uploadFile}
                        >
                          {uploading ? "Uploading ..." : "Upload Profile Pic"}
                        </div>
                      </div>
                    ) : (
                      <div className="w-full flex items-start">
                        <img
                          src={imageUrl}
                          alt=""
                          className="rounded-full w-20 h-20 object-cover"
                        />
                      </div>
                    )}
                  </main>
                  {/* submit */}
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
