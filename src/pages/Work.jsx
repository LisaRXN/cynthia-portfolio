import { WorkCard } from "../components/work/WorkCard";
import { Title } from "../components/shared/Title";

export function Work() {
  return (
    <section id="work-section" className="mb-16 md:mb-24">
      <div className="py-10 md:py-20 px-5 md:px-10">
        <Title title="Work" />

        {/* Amunas */}
        <WorkCard
          title="Amunas Recovery"
          subtitle="Cusqueña - Publicis"
          link="/amunas-recovery"
          image="amunas-home.png"
          video="https://player.vimeo.com/video/937783428?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
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

        {/* Corazon en la Pansa */}
        <WorkCard
          title="Corazón en la Pansa"
          subtitle="Cusqueña - Publicis"
          link="/corazon-en-la-pansa"
          image="corazon-home.png"
          video="https://player.vimeo.com/video/1068592834?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Sabores */}
        <WorkCard
          title="Sabores que Conquistan el Mundo"
          subtitle="Cusqueña - Publicis"
          link="/sabores-que-conquistan-el-mundo"
          image="sabores-home.png"
          video="https://player.vimeo.com/video/1068499522?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Gloria */}
        <WorkCard
          title="La Navidad La Preparamos Juntos"
          subtitle="Gloria - Juju"
          link="/navidad"
          image="navidad-home2.png"
          video="https://player.vimeo.com/video/1068499267?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />
        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Intocables */}
        <WorkCard
          title="Las Intocables"
          subtitle="Iniciativa idea - Ojo 2021"
          link="/las-intocables"
          image="intocables-home.png"
          video="https://player.vimeo.com/video/704338668?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* BudVar */}
        <WorkCard
          title="BudVar"
          subtitle="Budweiser - Publicis"
          link="/bud-var"
          image="budvar-home.png"
          video="https://player.vimeo.com/video/1068500225?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Bud Tunnel */}
        <WorkCard
          title="Bud Tunnels"
          subtitle="Budweiser - Publicis"
          link="/bud-tunnels"
          image="bud-tunnels-home.png"
          video="https://player.vimeo.com/video/1068500493?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />
        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>
        
        {/* Open Football */}
        <WorkCard
          title="Open Football"
          subtitle="Budweiser - Publicis"
          link="/open-football"
          image="open-home.jpg"
        />
        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Mimaskot */}
        <WorkCard
          title="Blackie El Gato Negro"
          subtitle="Mimaskot - Circus"
          link="/mimaskot"
          image="/img/mimaskot-home.png"
          video="https://player.vimeo.com/video/1068501493?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />
      </div>
    </section>
  );
}