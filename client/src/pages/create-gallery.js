import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import NavBar from "../components/NavBar";
import { useForm } from "react-hook-form";
import axios from "axios";
import {
  ToastifyFailure,
  ToastifySuccess,
} from "../components/Toastify/Toastify";
import { v4 as uuidv4 } from "uuid";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../lib/firebase";
import {
  getStorage,
  ref as imageReference,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";

function CreateGallery() {
  const { register, reset, handleSubmit } = useForm();
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrl, setImageUrl] = useState("");
  const storage = getStorage(initializeApp(firebaseConfig));
  const [uploading, setUploading] = useState(false);

  // upload image to firebase storage
  const uploadFile = () => {
    if (imageUpload == null) return;
    const imageRef = imageReference(
      storage,
      `${""}/${imageUpload.name + uuidv4()}`
    );
    // eslint-disable-next-line no-unused-expressions, no-sequences
    setUploading(true),
      uploadBytes(imageRef, imageUpload).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          ToastifySuccess("Successfully Uploaded Image");
          // eslint-disable-next-line no-unused-expressions, no-sequences
          setUploading(false), setImageUpload(null), setImageUrl(url);
        });
      });
  };

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
                  <label className="flex cursor-pointer  p-6">
                    <span className="sr-only">Choose profile photo</span>
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      onChange={(event) => {
                        setImageUpload(event.target.files[0]);
                      }}
                      className="block cursor-pointer w-full text-slate-100 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-violet-200 file:text-blue-700 hover:file:bg-violet-100    "
                    />
                  <button className="btn-sm bg-blue-500 inline-flex whitespace-nowrap" onClick={uploadFile}>
                    {uploading ? "Uploading ..." : "Upload Image"}
                  </button>
                  </label>

                  <footer className="flex flex-wrap -mx-3 mt-6">
                    <div className="w-full px-3 flex items-center justify-end">
                      <input
                        type="submit"
                        value="upload"
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
