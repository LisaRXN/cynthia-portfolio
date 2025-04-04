import { Carousel } from "../../components/shared/Carousel";
import { WorkDetail } from "../../components/work/WorkDetail";
// import useCarouselScroll from "../../utils/useCarouselScroll";

export function Corazon() {
  // const { activeSlide, carouselRef, itemRef, goToSlide } = useCarouselScroll();

  return (
    <div className="min-h-screen h-auto px-10 lg:px-20 py-5 mb-10">
      <WorkDetail
        title="Corazón en la Pansa"
        subtitle="Cusqueña - Publicis"
        video="https://player.vimeo.com/video/630211406?h=2bbac42c5d"
        overview={`Los peruanos amamos tanto nuestra comida que el corazón se nos ha bajado a la panza. Justo ahí es donde lo tenemos y donde más sentimos el amor de todos a través de increíbles sabores.\n\nEsta es la historia que quisimos contar junto a Cusqueña, la cerveza de la gastronomía nacional, para recordarle a todos que cada plato va mejor con los sabores de nuestra cerveza.
        `}
      />
      <div className="m-auto md:px-10">
        <Carousel
          images={[
            "corazon01.png",
            "corazon02.png",
            "corazon1.png",
            "corazon2.png",
            "corazon3.png",
            "corazon4.png",
            "corazon5.png",
            "corazon6.png",
            "corazon7.png",
            "corazon8.png",
            "corazon9.png",
            "corazon10.png",
          ]}
        />

        <div className="w-full md:w-4/5 h-auto m-auto grid lg:grid-cols-2 gap-y-5 mt-20">
          <div className="w-full h-[200px] md:h-full">
            <img
              src="/img/corazon5.png"
              className="w-auto h-full object-left object-cover lg:rounded-l-lg"
            />
          </div>
          <div className="flex flex-col gap-5 lg:gap-20 md:p-10 uppercase text-3xl md:text-5xl text-zinc-50 font-tusker font-bold">
            <div className="flex flex-col gap-2 md:gap-4">
              <p>Para</p>
              <p>un</p>
              <p>ceviche</p>
              <p>norteño,</p>
              <p>una</p>
              <p>dorada</p>
              <p>como</p>
              <p>el sol</p>
            </div>
            <img
              src="/img/logo-cusquena.png"
              className=" h-[50px] w-auto self-end"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
