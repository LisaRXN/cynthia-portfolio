import useCarouselScroll from "../../utils/useCarouselScroll";

export function Carousel({ images, home=false}) {
  const { activeSlide, carouselRef, goToSlide } = useCarouselScroll();

  return (
    <>
      {/* carousel */}
      <div
        ref={carouselRef}
        className={`carousel sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-[700px] carousel-center rounded-box w-full space-x-4 overflow-x-auto flex snap-x snap-mandatory scroll-smooth mb-4 ${ home ? 'h-[350px]' : 'h-[200px]'}`}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="carousel-item snap-center h-full w-full flex-shrink-0 "
          >
            <img
              src={`/img/${image}`}
              className="w-full h-full object-cover rounded-box object-top"
              />
          </div>
        ))}
      </div>
     {/* buttons */}
      <div className="flex w-full justify-center gap-2 py-2 cursor-pointer">
        {images.map((_, index) => (
          <a
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 w-3 rounded-full ${
              activeSlide === index ? "bg-mygreen" : "bg-zinc-700"
            }`}
          ></a>
        ))}
      </div>
    </>
  );
}
