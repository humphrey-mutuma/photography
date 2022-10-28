const GalleryItem = ({ imagesToShow }) => {
  return (
    <section className="image-list  grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3   mx-auto justify-items-center overflow-hidden w-full ">
      {imagesToShow.slice(0, 12).map((img) => (
        <section className="card-zoom" key={img.id}>
          <img
            src={img.src}
            // srcSet={`${img.srcMobile} 300w, ${img.src} 900w`}
            // sizes="(min-width: 660px) 300px, 100vw"
            alt=""
            className="card-zoom-image"
          ></img>
        </section>
      ))}
    </section>
  );
};

export default GalleryItem;
