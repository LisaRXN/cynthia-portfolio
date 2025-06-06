import { Link } from "react-router-dom";
import { Carousel } from "../../components/shared/Carousel";
import { useTranslation } from "react-i18next";

export function OpenFootball() {
    const { t } = useTranslation();
  
  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto mb-20">
      <div className="flex flex-col items-start justify-center gap-5 mb-16 md:max-w-screen-2xl m-auto">
        <div className="flex flex-col gap-y-5 md:flex-row items-center justify-between w-full">
          <h1 className="order-2 md:order-1 font-grotesk tracking-tight font-light text-3xl md:text-5xl text-center">
            Open{" "}
            <span className="whitespace-nowrap">
              Football
              <span className="inline-block bg-mygreen h-2 w-2 ml-2 rounded-full"></span>
            </span>
          </h1>
          <Link
            to="/work"
            className="mb-5 md:mb-0 order-1 md:order-2 w-[140px] md:w-[180px] py-2 md:py-3 rounded-full border border-gray-50 text-gray-50 hover:border-mygreen hover:bg-zinc-950 transition duration-300 flex items-center justify-center gap-2 "
          >
            <img
              src="/img/icon/arrow-white.png"
              className="h-auto w-5"
              alt=""
            />
            {t('main.button4')}
          </Link>
        </div>
        <p className="text-zinc-400 font-open font-light text-lg text-center md:text-start w-full ">
        {t('projects.project10.subtitle')}
        </p>
      </div>
      <div className="m-auto md:px-5 lg:px-10 py-10 mb-14">
        <div className="relative md:w-1/2 pl-5 border-l-8 border-mygreen ">
          <p className="font-grotesk tracking-tight font-bold text-2xl mb-5">
          {t('work.overview')}
          </p>
          <p className="text-justify whitespace-pre-line">
          {t('projects.project10.overview')}
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <img src="/img/open3.jpg" className="w-full h-auto rounded-lg" alt="" />
        <img src="/img/open4.png" className="w-full h-auto rounded-lg" alt="" />
      </div>
      <Carousel images={["open1.jpg", "open2.png"]} />
    </div>
  );
}
