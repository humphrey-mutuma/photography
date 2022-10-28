import React from "react";
import Gallery from "../components/Gallery/Gallery";
import SideMenu from "../components/sideMenu/SideMenu";

export default function GalleryPage() {
  return (
    <main className="grid grid-cols-10 bg-black">
      <section className=" hidden sm:block sm:col-span-2">
        <SideMenu />
      </section>
      <section className=" col-span-10 sm:col-span-8">
        <Gallery />
      </section>
    </main>
  );
}
