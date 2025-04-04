import { WorkDetail } from "../../components/work/WorkDetail";
import useCarouselScroll from "../../utils/useCarouselScroll";

export function BudVar() {

  const { activeSlide, carouselRef, itemRef, goToSlide } = useCarouselScroll();

  return (
    <div className="px-10 lg:px-20 py-5">
      <WorkDetail
        title="BudVAR"
        subtitle="For Budweiser - By Publicis - 2022"
        video="https://player.vimeo.com/video/1068500225é?"
        overview="Si algo genera conversación en los partidos de la Copa Mundial es el VAR, pero además, muchas de estas conversaciones se dan en el BAR, tomando una Budweiser. Ese VAR y nuestro BAR era una gran coincidencia fonética y gramatical que no podíamos pasar por alto."
      />

      <div className="m-auto md:px-10 mb-20">
        <div ref={carouselRef} className="carousel h-[200px] md:h-[600px] carousel-center bg-zinc-900 rounded-box w-full space-x-4">
          <div ref={itemRef} className="carousel-item" id="item1">
            <img src="/img/budvar1.png" className="rounded-box" />
          </div>
          <div className="carousel-item" id="item2">
            <img src="/img/budvar2.png" className="rounded-box" />
          </div>
        </div>
        <div className="flex w-full justify-center gap-2 py-2 cursor-pointer">
          <a
            onClick={() => {
              goToSlide(0);
            }}
            className={`h-3 w-3 rounded-full ${
              activeSlide == 0 ? "bg-mygreen" : "bg-zinc-700"
            }`}
          ></a>
          <a
            onClick={() => {
              goToSlide(1);
            }}
            className={`h-3 w-3 rounded-full ${
              activeSlide == 1 ? "bg-mygreen" : "bg-zinc-700"
            }`}
          ></a>
        </div>
        {/* Fin carousel  */}
      </div>
    </div>
  );
}
