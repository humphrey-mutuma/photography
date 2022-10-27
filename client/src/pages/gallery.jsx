import React from "react";
import Gallery from "../components/gallery/Gallery";
import SideMenu from "../components/sideMenu/SideMenu";

export default function GalleryPage() {
  return (
    <main className="grid grid-cols-10">
      <section className="col-span-2">
        <SideMenu />
      </section>
      <section className="col-span-8">
        <Gallery />
      </section>
    </main>
  );
}
