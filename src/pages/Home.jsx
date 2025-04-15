import { Link } from "react-router-dom";
import { WorkCard } from "../components/work/WorkCard";
import { Title } from "../components/shared/Title";
import { Contact } from "../components/shared/Contact";
import { useRef } from "react";
import { Carousel } from "../components/shared/Carousel";

export function Home() {
  const modalRef = useRef();

  const openModal = () => {
    modalRef.current.showModal();
  };
  return (
    <div className="m-auto md:min-h-screen md:max-w-screen-2xl">
      {/* ---- Hero Section Desktop ----  */}
      <section id="hero-section" className="hidden md:block mb-20 h-auto">
        <div className="grid grid-cols-3 w-full gap-10 box-border px-10">
          {/* video 1 */}
          <div className="flex-1 flex flex-col max-h-[800px] justify-between h-full ">
            <div className="flex-1 mb-10">
              <video
                src="/img/movistar-video.mp4?"
                type="video/mp4"
                autoPlay
                muted
                loop
                className="object-cover"
                alt=""
              />
            </div>
            <div className="flex flex-col gap-5">
              <h1 className="ml-1 text-xl font-extralight font-open">
                Cynthia Alarcón
              </h1>
              <div className="font-rock md:text-3xl lg:text-5xl font-bold">
                <span
                  className="bg-gradient-to-r from-mygreen to-emerald-800 bg-clip-text text-transparent font-bold animate-gradientMove"
                  style={{
                    backgroundSize: "200% 200%",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                  }}
                >
                  Creative
                </span>
                <p className="mt-5">Copywriter</p>
              </div>
            </div>
          </div>

          {/* video 2 */}
          <div className="flex-1 flex flex-col gap-10 h-full max-h-[800px] justify-between">
            <img src="/img/amunas.png" alt="" className="object-cover h-full max-h-[700px]" />
            <button
              onClick={() => openModal()}
              className="w-[160px] lg:w-[200px] py-2 md:py-3 rounded-full border border-gray-50 text-gray-50 hover:border-mygreen hover:bg-zinc-950 transition duration-300 flex items-center justify-center gap-2 "
            >
              Get in touch
              <img
                src="/img/icon/arrow-up-right.png"
                className="h-auto w-5"
                alt=""
              />
            </button>
            <Contact modalRef={modalRef} />
          </div>
          {/* video 3 */}
          <div className="flex-1 lg:h-full max-h-[800px]">
            <video
              src="/img/cusquena-video-9:16.mp4"
              type="video/mp4"
              autoPlay
              muted
              loop
              className="h-full w-full object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* ---- Hero Section Mobil ----  */}
      <div className="md:hidden flex-1 flex flex-col gap-10 justify-between h-full ">
        <div className="flex flex-col gap-4 px-10">
          <h1 className="ml-1 text-xl font-extralight  font-open">
            Cynthia Alarcón
          </h1>
          <div className="font-rock text-2xl font-bold">
            <span
              className="bg-gradient-to-r whitespace-nowrap from-mygreen to-emerald-800 bg-clip-text text-transparent font-bold animate-gradientMove"
              style={{
                backgroundSize: "150% 150%",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Creative
            </span>
            <p className="mt-4">Copywriter</p>
          </div>
        </div>
        <div className="flex-1 px-5 items-center justify-center">
          <Carousel
            images={["amunas-home.png", "nayflex-home.png", "corazon-home.png"]}
            home={true}
          />
        </div>
      </div>

      {/* ---- Work Section ----  */}
      <section id="work-section" className="">
        <div className="py-10 md:py-20 px-5 md:px-10">
          <Title title="Work" btn="View All" />

          {/* Amunas */}
          <WorkCard
            title="Amunas Recovery"
            subtitle="Cusqueña - Publicis"
            link="/amunas-recovery"
            image="amunas-home.png"
            video="https://player.vimeo.com/video/937783428?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

          {/* Corazon en la Pansa */}
          <WorkCard
            title="Corazón en la Pansa"
            subtitle="Cusqueña - Publicis"
            link="/corazon-en-la-pansa"
            image="corazon-home.png"
            video="https://player.vimeo.com/video/1068592834?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

          {/* Conectados */}
          <WorkCard
            title="Conectados"
            subtitle="Movistar - VML"
            link="/conectados"
            image="conectados-home.png"
            video="https://player.vimeo.com/video/1068638578?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />
          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

          {/* Nos Pasa */}
          <WorkCard
            title="Nos Pasa"
            subtitle="Nayflex - Juju Angency"
            link="/nos-pasa"
            image="nayflex-home.png"
            video="https://player.vimeo.com/video/1068498974?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
          />

          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

          {/* Sabores */}
          {/* <WorkCard
            title="Sabores que Conquistan el Mundo"
            subtitle="Cusqueña - Publicis"
            link="/sabores-que-conquistan-el-mundo"
            image="sabores-home.png"
            video="https://www.youtube.com/embed/J_nmEMGxbZQ?autoplay=1&loop=1&mute=1&controls=0&modestbranding=1"
          />

          <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr> */}
        </div>
      </section>

      {/* ---- About Section ----  */}
      <section id="work-section" className="mb-40">
        <div className="px-5 md:px-10">
          <div className="grid gap-14 place-items-center lg:grid-cols-[1fr_1fr_1fr] h-auto lg:h-[500px] mb-16">
            {/* col 1 */}
            <div className="w-full h-full">
              <div className="flex items-start md:items-center justify-between w-full mb-20">
                <div className="flex items-center font-rock tracking-tight text-2xl md:text-5xl font-semibold uppercase">
                  <h2 className="">About</h2>
                  <span className="text-mygreen ml-4 mt-2">.</span>
                </div>
                <Link
                  to="/about"
                  className="lg:hidden w-[160px] py-2 rounded-full border border-gray-50 text-gray-50 hover:border-mygreen hover:bg-zinc-950 transition duration-300 flex items-center justify-center gap-2"
                >
                  About
                  <img
                    src="/img/icon/arrow-up-right.png"
                    className="h-auto w-5"
                    alt=""
                  />
                </Link>
              </div>
              {/* who i am */}
              <div className="pl-5 border-l-8 border-mygreen mb-20 ">
                <p className="font-grotesk tracking-tight font-bold text-2xl mb-5">
                  Who I Am
                </p>
                <p className="text-justify whitespace-pre-line">
                  A Peruvian woman who loves ideas and their incredible ability
                  to make people think about something they had never considered
                  before or remember “that” which brings them so much joy,
                  pride, passion, anger, or love.
                </p>
              </div>

              <div className="w-full md:w-[500px] lg:w-full flex items-center justify-center gap-2 m-auto mb-8">
                <hr className="w-full border-none h-[1px] bg-zinc-500"></hr>
                <p className="whitespace-nowrap font-semibold text-zinc-500">
                  Contact me here
                </p>
                <hr className="w-full border-none h-[1px] bg-zinc-500 "></hr>
              </div>

              <div className="w-full md:w-[500px] lg:w-full  flex items-center justify-between m-auto mb-10">
                <div className="flex items-center justify-start gap-3">
                  <img src="/img/icon/mail.png" className="w-5" alt="" />
                  <div className="group relative">
                    <a
                      href="mailto:cynthia.alarcon.arroyo@gmail.com"
                      target="blank"
                      className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
                    >
                      email me
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <img src="/img/icon/linkedin.png" className="w-5" alt="" />
                  <div className="group relative">
                    <Link
                      to="https://www.linkedin.com/in/cynthia-alarc%C3%B3n-918b66b1/"
                      target="blank"
                      className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
                    >
                      linkedin
                    </Link>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-3">
                  <img src="/img/icon/behance.png" className="w-5" alt="" />
                  <div className="group relative">
                    <Link
                      to="https://www.behance.net/cynthiaalarcon27"
                      target="blank"
                      className="relative text-white after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-mygreen after:transition-all after:duration-300 group-hover:after:w-full"
                    >
                      behance
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* col 2 : carousel */}
            <div className="carousel carousel-vertical rounded-box rounded-xl w-[300px] h-[475px]">
              <div className="carousel-item h-full">
                <img
                  src="/img/cynthia.jpeg"
                  className="w-full h-full object-cover"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
              <div className="carousel-item h-full">
                <img
                  src="/img/cynthia2.jpeg"
                  className="w-full h-full object-cover"
                  alt="Tailwind CSS Carousel component"
                />
              </div>
            </div>
            {/* col 3 : Contact me */}
            <div className="flex flex-col justify-start h-full w-full font-open">
              <Link
                to="/about"
                className="mb-14 hidden self-end w-[200px] py-3 rounded-full border border-gray-50 text-gray-50 hover:border-mygreen hover:bg-zinc-950 transition duration-300 lg:flex items-center justify-center gap-2"
              >
                About me
                <img
                  src="/img/icon/arrow-up-right.png"
                  className="h-auto w-5"
                  alt=""
                />
              </Link>
              {/* Experience */}

              <div className="mb-12 self-end">
                <p className="font-open font-light mb-2 px-2 text-end">
                  Cynthia Alarcón
                </p>
                <p className="sfont-open font-light text-zinc-500 px-2 text-end">
                  Senior Creative Copywriter
                </p>
              </div>

              <div className="self-end flex flex-col w-full pl-2">
                <div className="w-full border-t border-zinc-800 py-5 flex items-center justify-between">
                  <p className="text-lg">PRESENT</p>
                  <p>VML Peru</p>
                </div>
                <div className="w-full border-t border-zinc-800 py-5 flex items-center justify-between">
                  <p className="text-lg">2023</p>
                  <p>Juju Agency</p>
                </div>
                <div className="w-full border-t border-zinc-800 py-5 flex items-center justify-between">
                  <p className="text-lg">2020</p>
                  <p>Publicis Peru</p>
                </div>
                <div className="w-full border-t border-b border-zinc-800 py-5 flex items-center justify-between">
                  <p className="text-lg">2018</p>
                  <p>Circus Grey</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
