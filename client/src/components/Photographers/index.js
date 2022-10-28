import { Link } from "react-router-dom";
import Socials from "../sideMenu/Socials";
const photographers = [
  {
    _id: "jgfnfkd7",
    name: "Alex pablo",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    category: "Street Photographer",
    socialMedia: [],
  },
  {
    _id: "jgddfnfk",

    name: "Jane Doe",
    image: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
    category: "Cars Lover",
    socialMedia: [],
  },
  {
    _id: "jgfnfk",

    name: "Sam Onli",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    category: "Nature Photographer",
    socialMedia: [],
  },
  {
    _id: "jsdgfnfk",

    name: "Milliano pablo",
    image: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
    category: "Pets Lover",
    socialMedia: [],
  },
  {
    _id: "6jgfnfk",

    name: "Sandro Anthony",
    image: "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif",
    category: " Football lover",
    socialMedia: [],
  },
  {
    _id: "jgfnf6k",

    name: "Sam Onli",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    category: "Nature Photographer",
    socialMedia: [],
  },
  {
    _id: "jgfenfk",

    name: "Milliano pablo",
    image: "https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif",
    category: "Pets Lover",
    socialMedia: [],
  },
  {
    _id: "jgfknfk",

    name: "Sam Onli",
    image: "https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif",
    category: "Nature Photographer",
    socialMedia: [],
  },
  {
    _id: "jlgfnfk",

    name: "Sandro Anthony",
    image: "https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif",
    category: " Football lover",
    socialMedia: [],
  },
];
export default function Photographers() {
  return (
    <main>
      <header>
        <h1 className="text-2xl pb-8 text-center text-white">
          Top Photographers
        </h1>
      </header>
      <br />
      <section
        role="list"
        aria-label="Photographers "
        class="flex flex-col sm:flex-row w-full  px-6 items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
      >
        {photographers.map((photographer) => (
          <Link
            to={photographer._id}
            key={photographer.name}
            class=" cursor-pointer w-full  sm:w-1/2 md:w-1/3 relative mt-16  mb-14  sm:mb-24 xl:max-w-sm lg:w-1/4"
          >
            <section role="listitem">
              <div class="rounded overflow-hidden shadow-md ">
                <div class="absolute -mt-20 w-full flex justify-center">
                  <div class="h-36 w-36">
                    <img
                      src={photographer.image}
                      alt={photographer.name}
                      role="img"
                      class="rounded-full object-cover h-full w-full shadow-sm"
                    />
                  </div>
                </div>
                <div class=" mt-16">
                  <h1 class="font-bold  text-white text-3xl text-mono text-center mb-1 text-ellipsis">
                    {photographer.name}
                  </h1>
                  <p class="text-slate-100  text-sm text-center text-ellipsis">
                    {photographer.category}
                  </p>

                  <Socials />
                </div>
              </div>
            </section>
          </Link>
        ))}
      </section>
    </main>
  );
}
