import galleryImages from "../../data/GalleryOne";
import GalleryItem from "./GalleryItem";
 
const Gallery = () => {
  return (
    <article className="col-span-2 min-h-screen ">
      <GalleryItem imagesToShow={galleryImages} />
      <section className="flex flex-col items-center w-full">
        <button className="my-5 shadow border text-white font-mainfont bg-transparent hover:text-white hover:bg-blue-400 smooth-transition focus:shadow-outline focus:outline-none  py-4 px-4 rounded text-lg uppercase w-12/12 md:w-6/12 smooth-transition">
          Load More
        </button>
      </section>
    </article>
  );
};

export default Gallery;
