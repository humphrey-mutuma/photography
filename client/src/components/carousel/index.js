import React from "react";
import { Carousel } from "react-responsive-carousel";

export default function CarouselComponent() {
  return (
    <div className="h-screen z-0">
      <Carousel
        showThumbs={false}
        showStatus={false}
        useKeyboardArrows={false}
        infiniteLoop={true}
        autoPlay={true}
        stopOnHover={false}
        interval={5000}
        transitionTime={5000}
        autoFocus={true}
        showArrows={false}
        showIndicators={false}
        emulateTouch={true}
        animationHandler="fade"
        swipeable={false}
        dynamicHeight={false}
      >
        <div className="h-screen" key="slide1">
          <img
            src="https://cdn.pixabay.com/photo/2022/08/18/10/41/herring-gull-7394570__340.jpg"
            alt=""
            className=" w-full h-full"
          />
        </div>
        <div className="h-screen" key="slide2">
          <img
            src="https://cdn.pixabay.com/photo/2022/10/18/20/27/old-man-7531093__340.jpg"
            alt=""
          />
        </div>
        <div className="h-screen" key="slide3">
          <img
            src="https://cdn.pixabay.com/photo/2022/10/14/08/35/woman-7520773__340.jpg"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
}
