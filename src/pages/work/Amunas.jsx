import { Helmet } from "react-helmet";
import { WorkDetail } from "../../components/work/WorkDetail";
import useCarouselScroll from "../../utils/useCarouselScroll";
import { Carousel } from "../../components/shared/Carousel";

export function Amunas() {
  const { activeSlide, carouselRef, itemRef, goToSlide } = useCarouselScroll();

  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <Helmet>
        {/* Balises de base */}
        <title>Amunas Recovery</title>
        <meta
          name="description"
          content="Cusqueña brought back an ancient technology called Amunas to save"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Cusqueña brought back an ancient technology called Amunas to save communities with no access to water."
        />
        <meta
          property="og:description"
          content="Cusqueña brought back an ancient technology called Amunas to save communities with no access to water."
        />
        <meta property="og:url" content="https://mon-super-projet.com" />
        <meta
          property="og:image"
          content="https://mon-super-projet.com/img/amunas-home.png"
        />
        <meta property="og:image:alt" content="Amunas Recovery" />
        <meta property="og:site_name" content="Amunas Recovery" />
      </Helmet>

      <WorkDetail
        title="Amunas Recovery"
        subtitle="For Cusqueña - By Publicis - 2024"
        video="https://player.vimeo.com/video/937783428?h=80cded8db1"
        overview="Cusqueña brought back an ancient technology called Amunas to save communities with no access to water."
        awards={true}
      />

      <div className="m-auto md:px-10 md:max-w-screen-2xl">
        <Carousel images={["amunas1.png", "amunas6.png"]} />

        {/* <div className="grid md:grid-cols-2 gap-y-5 gap-x-10">
          <img src="/img/amunas1.png" className="flex-1 rounded-md" alt="" />
          <img src="
          /img/amunas6.png" className="flex-1 rounded-md" alt="" />
        </div> */}
        <div className="mb-10 md:mb-20">
          <div className="w-full py-5 m-auto">
            <img src="/img/amunas2-2.png" className="" alt="" />
          </div>
          <div className="hidden md:grid grid-cols-3 gap-y-5 gap-x-2">
            <img src="/img/amunas3.png" alt="" className="rounded-lg" />
            <img src="/img/amunas4.png" alt="" className="rounded-lg" />
            <img src="/img/amunas5.png" alt="" className="rounded-lg" />
          </div>
          <div
            ref={carouselRef}
            className="carousel md:hidden h-[200px] carousel-center bg-zinc-900 rounded-box w-full space-x-4"
          >
            <div ref={itemRef} className="carousel-item" id="item1">
              <img src="/img/amunas3.png" className="rounded-box" />
            </div>
            <div className="carousel-item" id="item2">
              <img src="/img/amunas4.png" className="rounded-box" />
            </div>
            <div className="carousel-item" id="item3">
              <img src="/img/amunas5.png" className="rounded-box" />
            </div>
          </div>
          <div className="flex md:hidden w-full justify-center gap-2 py-2 cursor-pointer">
            <a
              onClick={() => goToSlide(0)}
              className={`h-3 w-3 rounded-full ${
                activeSlide == 0 ? "bg-mygreen" : "bg-zinc-700"
              }`}
            ></a>
            <a
              onClick={() => goToSlide(1)}
              className={`h-3 w-3 rounded-full ${
                activeSlide == 1 ? "bg-mygreen" : "bg-zinc-700"
              }`}
            ></a>
            <a
              onClick={() => goToSlide(2)}
              className={`h-3 w-3 rounded-full ${
                activeSlide == 2 ? "bg-mygreen" : "bg-zinc-700"
              }`}
            ></a>
          </div>
        </div>
      </div>
    </div>
  );
}
