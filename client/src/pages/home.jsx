import React from "react";
import CarouselComponent from "../components/carousel";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <main className="h-screen relative">
      <CarouselComponent />
      <section className="absolute  scrollbar-hide h-screen overflow-y-scroll inset-0 z-30 text-black text-2xl font-bold">
        <section className="max-w-6xl mx-auto">
          <NavBar />
          <section>
            <p className="py-20">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              facilis aliquid consectetur eveniet mollitia amet alias minima
              quia nemo, assumenda rerum illum eius perferendis praesentium
              expedita repellendus nesciunt et beatae.
            </p>{" "}
            <p className="py-20">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              facilis aliquid consectetur eveniet mollitia amet alias minima
              quia nemo, assumenda rerum illum eius perferendis praesentium
              expedita repellendus nesciunt et beatae.
            </p>{" "}
            <p className="py-20">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              facilis aliquid consectetur eveniet mollitia amet alias minima
              quia nemo, assumenda rerum illum eius perferendis praesentium
              expedita repellendus nesciunt et beatae.
            </p>{" "}
            <p className="py-20">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              facilis aliquid consectetur eveniet mollitia amet alias minima
              quia nemo, assumenda rerum illum eius perferendis praesentium
              expedita repellendus nesciunt et beatae.
            </p>{" "}
            <p className="py-20">
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              facilis aliquid consectetur eveniet mollitia amet alias minima
              quia nemo, assumenda rerum illum eius perferendis praesentium
              expedita repellendus nesciunt et beatae.
            </p>
          </section>
        </section>
      </section>
    </main>
  );
}
