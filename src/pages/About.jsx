import { Link } from "react-router-dom";
import { Title } from "../components/shared/Title";
import { Contact } from "../components/shared/Contact";
import { useRef } from "react";

export function About() {

    const modalRef = useRef();
  
    const openModal = () => {
      modalRef.current.showModal()
  }

  return (
    <section id="work-section" className="mb-24">
      <div className="px-5 md:px-10">
        {/* <Title title="About" btn="Get in touch" /> */}

        <div className="px-3 py-10 mb-10 lg:mb-14 md:w-3/4 z-50 m-auto text-end text-[80px] md:text-[100px] text-gray-800 font-extrabold font-grotesk leading-none">
          <p className="opacity-35 inline">Shaping the Power of </p>{" "}
          <span
            className="opacity-50 bg-gradient-to-r from-emerald-800 to-mygreen bg-clip-text text-transparent font-bold "
            style={{
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
            }}
          >
            Ideas.
          </span>
        </div>
        {/* <div className="px-3 mb-14 w-3/4 z-50 m-auto text-end text-[100px] text-zinc-800 opacity-25 font-extrabold font-grotesk leading-none">Shaping the Power of Ideas</div> */}

        <div className="z-0 m-auto md:px-5 lg:pr-10 flex flex-col lg:flex-row items-center justify-between lg:w-4/5 xl:w-3/4 mb-28 lg:mb-14">
          <div className="w-4/5 lg:w-1/2 mb-14 lg:mb-0">
            <div className="pl-5 border-l-8 border-mygreen ">
              <p className="font-grotesk tracking-tight font-bold text-2xl mb-5">
                Who I Am
              </p>
              <p className="text-justify whitespace-pre-line">
                A Peruvian woman who loves ideas and their incredible ability to
                make people think about something they had never considered
                before or remember “that” which brings them so much joy, pride,
                passion, anger, or love.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-10 justify-between mt-20 ">
              <button
                onClick={()=>openModal()}
                className="order-2 md:order-1 w-[200px] py-3 rounded-full border border-gray-50 text-gray-50 hover:border-mygreen hover:bg-zinc-950 transition duration-300 flex items-center justify-center gap-2 "
              >
                Get in touch
                <img
                  src="src/assets/img/icon/arrow-up-right.png"
                  className="h-auto w-5"
                  alt=""
                />
              </button>
              <Contact modalRef={modalRef}/>
              <div className="order-1  md:order-2 flex flex-col gap-2 items-end transform translate-x-5  md:translate-x-12">
                <p className="font-open font-light text-end">Cynthia Alarcón</p>
                <p className="inline whitespace-nowrap font-open font-light text-zinc-400">
                  Senior Creative Copywriter
                </p>
              </div>
            </div>
            {/* <div className="flex flex-col gap-2 items-end mt-14 transform translate-x-5  md:translate-x-12">
              <p className="font-open font-light text-end">Cynthia Alarcón</p>
              <p className="inline font-open font-light text-zinc-400">
                Senior Creative Copywriter
              </p>
            </div> */}
          </div>

          <div className="relative h-[400px] w-[250px] ">
            <img
              src="src/assets/img/cynthia.jpeg"
              className="absolute top-0 left-0 z-20 h-full w-full object-cover shadow-md"
              alt=""
            />
            <span className="absolute z-0 bg-mygreen h-[200px] w-[250px] md:w-[300px] -bottom-10 -right-8 md:-right-20"></span>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center w-full py-14">
          <p className="font-grotesk tracking-tight font-bold text-2xl mb-14">
            My Experience
          </p>

          <div className="flex flex-col w-3/4">
            <div className="w-full border-t border-zinc-800 py-5 flex items-center justify-between">
              <p className="text-xl">PRESENT</p>
              <p>VML Peru</p>
            </div>
            <div className="w-full border-t border-zinc-800 py-5 flex items-center justify-between">
              <p className="text-xl">2023</p>
              <p>Juju Agency</p>
            </div>
            <div className="w-full border-t border-zinc-800 py-5 flex items-center justify-between">
              <p className="text-xl">2020</p>
              <p>Publicis Peru</p>
            </div>
            <div className="w-full border-t border-b border-zinc-800 py-5 flex items-center justify-between">
              <p className="text-xl">2018</p>
              <p>Circus Grey</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
