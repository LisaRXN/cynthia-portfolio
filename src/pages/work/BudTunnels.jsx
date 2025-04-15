import { WorkDetail } from "../../components/work/WorkDetail";
import useCarouselScroll from "../../utils/useCarouselScroll";

export function BudTunnels() {
  const { activeSlide, carouselRef, itemRef, goToSlide } = useCarouselScroll();

  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Bud Tunnels"
        subtitle="For Budweiser - By Publicis - 2022"
        video="https://player.vimeo.com/video/1068500493?"
        //         overview={`Budweiser quería robar la atención de los fanáticos del fútbol durante el mundial Qatar 2022 creando una gran idea bajo su concepto “El Túnel de la Grandeza”.\n\nAl escuchar la palabra túnel, supimos dos cosas: todos los países del mundo tienen uno, y en cada uno de ellos puede pasar algo increíble. Algo tan increíble como una inauguración o una final.
        // `}
        overview={`Budweiser wanted to grab the attention of football fans during the 2022 Qatar World Cup by creating a big idea under their concept “The Tunnel of Greatness.”\n\nWhen we heard the word tunnel, we knew two things: every country in the world`}
      />

      <div className="m-auto md:px-10 mb-20">
        <div
          ref={carouselRef}
          className="carousel h-[200px] md:h-[600px] carousel-center bg-zinc-900 rounded-box w-full space-x-4"
        >
          <div ref={itemRef} className="carousel-item" id="item1">
            <img src="/img/bud-tunnels1.png" className="rounded-box" />
          </div>
          <div className="carousel-item" id="item2">
            <img src="/img/budvar2.png" className="rounded-box rounded-full" />
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
