import GalleryItem from "./GalleryItem";

const Gallery = ({ photos }) => {
  return (
    <article className="col-span-2 min-h-screen ">
      <GalleryItem photos={photos} />
      <section className="flex flex-col items-center w-full">
        <button className="my-5 shadow border text-white font-mainfont bg-transparent hover:text-white hover:bg-slate-900 smooth-transition focus:shadow-outline focus:outline-none  py-4 px-4 rounded text-lg uppercase w-12/12 md:w-6/12 smooth-transition">
          Load More
        </button>
      </section>
    </article>
  );
};

export default Gallery;
