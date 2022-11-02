import React, { useState } from "react";
import NavBar from "../components/NavBar";
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
import { useUserContext } from "../context/UserContext";

function CreateGallery() {
  const [imageUpload, setImageUpload] = useState(null);
  // const [imageUrl, setImageUrl] = useState([]);
  const storage = getStorage(initializeApp(firebaseConfig));
  const [uploading, setUploading] = useState(false);
  const { userData } = useUserContext();

  // upload image to firebase storage
  // console.log("nn", userData);
  const uploadFile = () => {
    // console.log(imageUrl);
    if (userData) {
      if (imageUpload == null) return;

      const imageRef = imageReference(
        storage,
        `${userData.id}/${uuidv4() + imageUpload.name}`
      );
      // eslint-disable-next-line no-unused-expressions, no-sequences
      setUploading(true),
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            // eslint-disable-next-line no-unused-expressions, no-sequences
            setUploading(false),
              setImageUpload(null),
              // setImageUrl((previousImages) => [...previousImages, url]);
            axios
              .patch(
                `${process.env.REACT_APP_SERVER_ROOT_URL}/api/users/`,
                {
                  photos: url,
                },
                {
                  headers: {
                    // "content-type": "application/json",
                    authorization: `Bearer ${userData.token}`,
                  },
                }
              )
              .then(function (res) {
                // console.log(res.status);
                if (res.status === 201) {
                  // setImageUrl([]);
                  ToastifySuccess("Successfully Uploaded Image");
                } else {
                  ToastifyFailure("Something went wrong");
                }
                // console.log("new user", res);
              })
              .catch(function (error) {
                console.log("errr", error);
                ToastifyFailure("Invalid Credentials");
              });
          });
        });
    } else {
      alert("Login");
    }
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
                <h1 className="h1 text-white">{userData  ? "Add more photos" :"Create a gallery now"}</h1>
              </div>

              {/* Form */}
              <>
                <main className="  mx-auto">
                  <label className="flex cursor-pointer border border-dashed p-6">
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
                    <button
                      className="btn-sm bg-blue-500 inline-flex whitespace-nowrap"
                      onClick={uploadFile}
                    >
                      {uploading ? "Uploading ..." : "Upload Image"}
                    </button>
                  </label>
                </main>
              </>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default CreateGallery;
