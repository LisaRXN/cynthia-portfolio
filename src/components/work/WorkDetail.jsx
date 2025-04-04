import {
  faFacebookSquare,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export function WorkDetail({ title, subtitle, video, overview, awards }) {
  const words = title.split(" ");
  const lastWord = words.pop();
  const firstPart = words.join(" ");

  const url = encodeURIComponent(window.location.href);

  return (
    <>
      <div className="flex flex-col items-start justify-center gap-5 mb-16">
        <div className="flex flex-col gap-y-5 md:flex-row items-center justify-between w-full">
          <h1 className="order-2 md:order-1 font-grotesk tracking-tight font-light text-3xl md:text-5xl text-center">
            {firstPart}
            {firstPart && " "}
            <span className="whitespace-nowrap">
              {lastWord}
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
            All works
          </Link>
        </div>
        <p className="text-zinc-400 font-open font-light text-lg text-center md:text-start w-full ">
          {subtitle}
        </p>
      </div>

      {awards ? (
        <div className="w-full justify-between grid grid-cols-3 md:grid-cols-4 lg:grid-cols-8 place-items-start 2xl:w-4/5 m-auto gap-10 mb-20">
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <img
              src="/img/awards/lions-bronze.png"
              className="w-[100px] h-auto"
              alt="Award"
            />
            <div className="">
              <p className="text-[9px] sm:text-[11px] text-center uppercase text-bronze tracking-[3px] mb-1">
                EXPERIENCE
              </p>
              <p className="text-[6px] sm:text-[8px] text-center uppercase text-bronze leading-snug tracking-[3px] mb-1">
                Creative Business Transformation
              </p>
              <p className="text-[6px] sm:text-[8px] text-center text-bronze tracking-[2px]">
                2024
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <img
              src="/img/awards/lions-shortlist.png"
              className="w-[100px] h-auto"
              alt="Award"
            />
            <div className="">
              <p className="text-[9px] sm:text-[11px] text-center uppercase text-finalist tracking-[3px] mb-1">
                GOOD
              </p>
              <p className="text-[6px] sm:text-[8px] text-center uppercase text-finalist leading-snug tracking-[2px] ">
                Sustainable
              </p>
              <p className="whitespace-nowrap text-[6px] sm:text-[8px] text-center uppercase text-finalist leading-snug tracking-[2px] mb-1">
                development goals
              </p>
              <p className="text-[6px] sm:text-[8px] text-center text-finalist tracking-[2px]">
                2024
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <img
              src="/img/awards/ojo-eficacia.png"
              className="w-[100px] h-auto"
              alt="Award"
            />
            <div className="">
              <p className="text-[9px] sm:text-[11px] text-center uppercase text-gold tracking-[3px] mb-1">
                EFICACIA
              </p>
              <p className="text-[6px] sm:text-[8px] text-center uppercase text-gold leading-snug tracking-[2px] ">
                Marca local
              </p>
              <p className="whitespace-nowrap text-[6px] sm:text-[8px] text-center uppercase text-gold leading-snug tracking-[2px] mb-1">
                mercado especifico
              </p>
              <p className="text-[6px] sm:text-[8px] text-center text-gold tracking-[2px]">
                2024
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <img
              src="/img/awards/ojo-sustentable.png"
              className="w-[100px] h-auto"
              alt="Award"
            />
            <div className="">
              <p className="text-[9px] sm:text-[11px] text-center uppercase text-gold tracking-[3px] mb-1">
                SUSTENTABLE
              </p>
              <p className="text-[6px] sm:text-[8px] text-center uppercase text-gold leading-snug tracking-[2px] mb-1">
                Mercado especifico
              </p>
              <p className="text-[6px] sm:text-[8px] text-center text-gold tracking-[2px]">
                2024
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <img
              src="/img/awards/ojo-sustentable.png"
              className="w-[100px] h-auto"
              alt="Award"
            />

            <div className="">
              <p className="text-[9px] sm:text-[11px] text-center uppercase text-gold tracking-[3px] mb-1">
                SUSTENTABLE
              </p>
              <p className="text-[6px] sm:text-[8px] text-center uppercase text-gold leading-snug tracking-[2px] mb-1">
                Ambiente y sustentabilidad
              </p>
              <p className="text-[6px] sm:text-[8px] text-center text-gold tracking-[2px]">
                2024
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <img
              src="/img/awards/ojo-transformation.png"
              className="w-[100px] h-auto"
              alt="Award"
            />
            <div className="">
              <p className="text-[9px] sm:text-[11px] text-center uppercase text-silver tracking-[2px] mb-1">
                TRANSFORMACIÓN CREATIVA
              </p>
              <p className="text-[6px] sm:text-[8px] text-center uppercase text-silver leading-snug tracking-[2px] mb-1">
                Transfomración del negocio
              </p>
              <p className="text-[6px] sm:text-[8px] text-center text-silver tracking-[2px]">
                2024
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <img
              src="/img/awards/ojo-inovacion.png"
              className="w-[100px] h-auto"
              alt="Award"
            />
            <div className="">
              <p className="text-[9px] sm:text-[11px] text-center uppercase text-bronze tracking-[3px] mb-1">
                INOVACIÓN
              </p>
              <p className="w-full text-[6px] sm:text-[8px] text-center uppercase text-bronze leading-snug tracking-[2px] mb-1">
                Experiencia y
              </p>
              <p className="whitespace-nowrap w-full text-[6px] sm:text-[8px] text-center uppercase text-bronze leading-snug tracking-[2px] mb-1">
                estrategia de marca
              </p>
              <p className="text-[6px] sm:text-[8px] text-center text-bronze tracking-[2px]">
                2024
              </p>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center gap-3">
            <img
              src="/img/awards/ojo-idea.png"
              className="w-[100px] h-auto"
              alt="Award"
            />
            <div className="">
              <p className="text-[9px] sm:text-[11px] text-center uppercase text-finalist tracking-[2px] mb-1">
                MEJOR IDEA PAÍS
              </p>
              <p className="text-[6px] sm:text-[8px] text-center text-finalist tracking-[2px]">
                2024
              </p>
            </div>
          </div>
        </div>
      ) : null}

      {/* share this work Mobile*/}
      <div className="lg:hidden max-w-[800px] m-auto w-full flex items-center justify-center gap-2 mb-5">
        <hr className="flex-1 border-none top-0 right-0 bg-mygreen h-[1px]" />
        <p className="text-zinc-500 text-sm">share this work</p>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="text-lg text-zinc-100"
            icon={faLinkedin}
          />
        </a>
        <a
          href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
            title + " " + url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="text-lg text-zinc-100"
            icon={faWhatsapp}
          />
        </a>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            className="text-lg text-zinc-100"
            icon={faFacebookSquare}
          />
        </a>
        <hr className="flex-1 border-none top-0 right-0 bg-mygreen h-[1px]" />
      </div>

      <div className="relative flex items-center justify-center 2xl:w-4/5 m-auto">
        {/* share this work */}
        <div className="hidden lg:flex absolute top-0 -right-10 xl:right-10 2xl:right-0 flex-col items-center justify-between h-full">
          <hr className="border-none top-0 right-0 bg-mygreen rotate-90 h-[1px] w-[110px] mt-[55px]" />
          <p className="rotate-90 text-zinc-500 text-sm transform translate-x-[1px] mt-[55px] ">
            share this work
          </p>
          <div className="flex flex-col items-center justify-center gap-1 mb-5">
            <a
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                url
              )}`}
            >
              <FontAwesomeIcon
                className="text-xl text-zinc-100"
                icon={faLinkedin}
              />
            </a>
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(
                title + " " + url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-xl text-zinc-100"
                icon={faWhatsapp}
              />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                url
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="text-xl text-zinc-100"
                icon={faFacebookSquare}
              />
            </a>
          </div>
          <hr className="border-none top-0 right-0 bg-mygreen rotate-90 h-[1px] w-[110px] mb-[55px]" />
        </div>

        {/* video */}
        <iframe
          className="rounded-md aspect-video"
          title="vimeo-player"
          src={video}
          width="800"
          frameborder="0"
          allowFullScreen
        ></iframe>
      </div>

      <div className="m-auto md:px-5 lg:px-10">
        <div className="relative md:w-1/2 my-24 lg:my-32 pl-5 border-l-8 border-mygreen ">
          <p className="font-grotesk tracking-tight font-bold text-2xl mb-5">
            Overview
          </p>
          <p className="text-justify whitespace-pre-line">{overview}</p>
        </div>
      </div>
    </>
  );
}
