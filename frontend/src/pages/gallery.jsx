import React from "react";
import Gallery from "../components/Gallery/Gallery";
import SideMenu from "../components/sideMenu/SideMenu";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function GalleryPage() {
  const [user, setUser] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_ROOT_URL}/api/users/${userId}`)
      .then((res) => {
        // handle success
        console.log(res);
        setUser(res.data);
      })
      .catch((error) => {
         // console.log(error);
        throw new Error("Something went wrong");
      })
      .then(() => {
        // always executed
      });
  }, [userId]);

  // console.log("user", user);
  return (
    <main className="grid grid-cols-10 bg-black">
      <section className=" hidden sm:block sm:col-span-2">
        <SideMenu user={user} />
      </section>
      <section className=" col-span-10 sm:col-span-8">
        <Gallery photos={user.gallery} />
      </section>
    </main>
  );
}
