import { WorkCard } from "../components/work/WorkCard";
import { Title } from "../components/shared/Title";
import { useTranslation } from "react-i18next";

export function Work() {
    const { t } = useTranslation();
  
  return (
    <section id="work-section" className="mb-16 md:mb-24 md:max-w-screen-2xl m-auto">
      <div className="py-10 md:py-20 px-5 md:px-10">
        <Title title="Work" />

        {/* Amunas */}
        <WorkCard
          title={t('projects.project1.title')}
          subtitle={t('projects.project1.subtitle')}
          link="/amunas-recovery"
          image="amunas-home.png"
          video="https://player.vimeo.com/video/937783428?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />
        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>
        
        {/* Conectados */}
        <WorkCard
          title={t('projects.project2.title')}
          subtitle={t('projects.project2.subtitle')}
          link="/conectados"
          image="conectados-home.png"
          video="https://player.vimeo.com/video/1068638578?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />
        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Nos Pasa */}
        <WorkCard
          title={t('projects.project3.title')}
          subtitle={t('projects.project3.subtitle')}
          link="/nos-pasa"
          image="nayflex-home.png"
          video="https://player.vimeo.com/video/1068498974?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Corazon en la Pansa */}
        <WorkCard
          title={t('projects.project4.title')}
          subtitle={t('projects.project4.subtitle')}
          link="/corazon-en-la-pansa"
          image="corazon-home.png"
          video="https://player.vimeo.com/video/1068592834?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Sabores */}
        <WorkCard
          title={t('projects.project5.title')}
          subtitle={t('projects.project5.subtitle')}
          link="/sabores-que-conquistan-el-mundo"
          image="sabores-home.png"
          video="https://player.vimeo.com/video/1068499522?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Gloria */}
        <WorkCard
          title={t('projects.project6.title')}
          subtitle={t('projects.project6.subtitle')}
          link="/navidad"
          image="navidad-home2.png"
          video="https://player.vimeo.com/video/1068499267?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />
        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Intocables */}
        <WorkCard
          title={t('projects.project7.title')}
          subtitle={t('projects.project7.subtitle')}
          link="/las-intocables"
          image="intocables-home.png"
          video="https://player.vimeo.com/video/704338668?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* BudVar */}
        <WorkCard
          title={t('projects.project8.title')}
          subtitle={t('projects.project8.subtitle')}
          link="/bud-var"
          image="budvar-home.png"
          video="https://player.vimeo.com/video/1068500225?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />

        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Bud Tunnel */}
        <WorkCard
          title={t('projects.project9.title')}
          subtitle={t('projects.project9.subtitle')}
          link="/bud-tunnels"
          image="bud-tunnels-home.png"
          video="https://player.vimeo.com/video/1068500493?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />
        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>
        
        {/* Open Football */}
        <WorkCard
          title={t('projects.project10.title')}
          subtitle={t('projects.project10.subtitle')}
          link="/open-football"
          image="open-home.jpg"
        />
        <hr className="bg-zinc-600 w-full my-10 h-[1px] border-none"></hr>

        {/* Mimaskot */}
        <WorkCard
          title={t('projects.project11.title')}
          subtitle={t('projects.project11.subtitle')}
          link="/mimaskot"
          image="mimaskot-home.png"
          video="https://player.vimeo.com/video/1068501493?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1&loop=1&muted=1&controls=0"
        />
      </div>
    </section>
  );
}