import React from "react";
import CarouselComponent from "../components/Carousel";
import HeroHome from "../components/HeroComponent/HeroHome";
import NavBar from "../components/NavBar";
import Photographers from "../components/Photographers";

export default function Home() {
  return (
    <main className="h-screen relative">
      <CarouselComponent />
      <section className="absolute bg-black opacity-80  scrollbar-hide h-screen overflow-y-scroll inset-0 z-30 text-black text-2xl font-bold">
        <section className="max-w-7xl mx-auto">
          <section className=" text-white">
            <NavBar />
            <HeroHome />
            <Photographers />
          </section>
        </section>
      </section>
    </main>
  );
}
