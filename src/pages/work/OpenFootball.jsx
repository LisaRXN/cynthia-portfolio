import { Carousel } from "../../components/shared/Carousel";

export function OpenFootball() {
  return (
    <div className="px-10 lg:px-20 py-5">
      <div className="m-auto md:px-5 lg:px-10 py-10 mb-14">
        <div className="relative md:w-1/2 pl-5 border-l-8 border-mygreen ">
          <p className="font-grotesk tracking-tight font-bold text-2xl mb-5">
            Overview
          </p>
          <p className="text-justify whitespace-pre-line">
            Budweiser es dueño de una verdad absoluta: Cada vez que una persona
            abre una de sus latas, abre un espacio para disfrutar del fútbol,
            sin importar en qué lugar se encuentre. <br />
            <br /> Se acercaba la Copa Mundial de Fútbol Qatar 2022 y los
            fanáticos que estaban lejos y cerca de sus equipos, tenían que saber
            esto y animarse así a abrir cada vez más latas de Bud y fútbol.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <img
          src="/img/open3.jpg"
          className="w-full h-auto rounded-lg"
          alt=""
        />
        <img
          src="/img/open4.png"
          className="w-full h-auto rounded-lg"
          alt=""
        />
      </div>
      <Carousel images={["open1.jpg", "open2.png"]} />
    </div>
  );
}
