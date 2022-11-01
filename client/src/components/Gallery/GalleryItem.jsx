import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

const GalleryItem = ({ photos }) => {
  return (
    <section className="image-list  grid sm:grid-cols-1 relative md:grid-cols-2 lg:grid-cols-3   mx-auto justify-items-center overflow-hidden w-full ">
      {photos?.slice(0, 12).map((photo) => (
        <Zoom>
          <section
            style={{ backgroundColor: "black" }}
            className=" card-zoom bg-black"
            key={photo}
          >
            <img
              src={photo}
              // srcSet={`${photo.srcMobile} 300w, ${photo.src} 900w`}
              // sizes="(min-width: 660px) 300px, 100vw"
              alt=""
              className="card-zoom-image bg-black border-0 object-cover object-center group-hover:object-contain"
            />
          </section>
        </Zoom>
      ))}
    </section>
  );
};

export default GalleryItem;
