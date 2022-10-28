import React from "react";
import { useDropzone } from "react-dropzone";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ToastifyFailure,
  ToastifySuccess,
} from "../components/Toastify/Toastify";

function CreateGallery() {
  const { register, reset, handleSubmit } = useForm();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  // signup user
  const onSubmit = ({ email, password }) => {
    axios
      .post(`${process.env.REACT_APP_SERVER_ROOT_URL}/api/users/`, {
        email,
        password,
      })
      .then(function (res) {
        reset();
        ToastifySuccess("Successfully Logged In");
        console.log("new user", res);
      })
      .catch(function (error) {
        // console.log(error);
        ToastifyFailure("Invalid Credentials");
      });
  };

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));
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
                <h1 className="h1 text-white">Create a gallery now.</h1>
              </div>

              {/* Form */}
              <div className="  mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label
                        className="block text-gray-100 text-sm font-medium mb-1"
                        htmlFor="description"
                      >
                        Description
                      </label>
                      <input
                        id="description"
                        type="description"
                        {...register("description", {
                          required: true,
                        })}
                        className="form-input w-full text-black"
                        placeholder="Street and nature photographer"
                        required
                      />
                    </div>
                  </div>
                  {/* social media handles */}
                  <section className="flex ite items-center justify-between space-x-4">
                    <aside className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
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
                    <aside className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
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
                    <aside className="flex flex-wrap -mx-3 mb-4">
                      <div className="w-full px-3">
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
                  {/* dropzone */}
                  <section className="container bg-white   rounded-md border-2 border-dashed border-blue-500">
                    <div
                      className="p-10 m-12 h-10 "
                      {...getRootProps({ className: "dropzone" })}
                    >
                      <input
                        className="border-red-600  m-12 h-10 border-2 p-10 bg-emerald-400 cursor-pointer"
                        {...getInputProps()}
                      />
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    </div>
                    <aside>
                      <h4>Files</h4>
                      <ul>{files}</ul>
                    </aside>
                  </section>

                  <footer className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3 flex items-center justify-end">
                      <input
                        type="submit"
                        value="Publish"
                        className="btn max-w-sm text-white bg-blue-600 hover:bg-blue-700 w-full"
                      />
                    </div>
                  </footer>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreateGallery;
