import { WorkDetail } from "../../components/work/WorkDetail";

export function NosPasa() {
  return (
    <div className="min-h-screen h-auto px-10 lg:px-20 py-5 mb-10">
      <WorkDetail
        title="Nos Pasa"
        subtitle="Nayflex - Juju Angency"
        video="https://player.vimeo.com/video/1068498974"
        overview={`La regla es un fenómeno tan complejo que no puede ser resumido en un simple dolor, la regla es mucho más. La regla es hambre, frustración, furia, felicidad, excitación, cansancio, endometriosis, diarrea, frío, incomodidad y más, mucho más. Sumado a esto, las mujeres a las que les viene la regla también son más, son mamás, lesbianas, abuelas.\n\nCon este pensamiento claro y junto a un equipo de mujeres increíbles creamos #NosPasa, una campaña que habla de todo eso que nos pasa a las mujeres con la regla y que nadie dice. `}
      />

      <div className="m-auto md:px-10 flex items-center justify-center">
        <div className="grid md:grid-cols-2 md:h-[880px] gap-5">
          <div className="grid grid-rows-3 gap-y-5 md:h-[880px]">
            <div className="h-full w-full">
              <img
                src="src/assets/img/nospasa1.png"
                className="h-full w-full object-cover rounded-lg md:rounded-tl-lg"
                alt=""
              />
            </div>
            <div className="h-full w-full">
              <img
                src="src/assets/img/nospasa3.png"
                className="h-full w-full object-cover rounded-lg md:rounded-none"
                alt=""
              />
            </div>
            <div className="h-full w-full">
              <img
                src="src/assets/img/nospasa4.png"
                className=" h-full w-full object-cover rounded-lg md:rounded-bl-lg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-auto md:h-[880px] md:w-auto">
            <img
              src="src/assets/img/nospasa2.png"
              className="object-cover h-full rounded-lg md:rounded-r-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
