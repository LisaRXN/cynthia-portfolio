import { useTranslation } from "react-i18next";
import { WorkDetail } from "../../components/work/WorkDetail";

export function Intocables() {
      const { t } = useTranslation();
  
  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Las Intocables"
        subtitle="Shortlist - El Ojo de Iberoamérica 2021"
        video="https://player.vimeo.com/video/704338668?"
        overview={t('projects.project7.overview')}
      />

      <div className="h-[180px] md:h-[600px] md:px-10 mb-20">
        <img
          className="rounded-lg h-full w-full object-cover"
          src="/img/intocables0.png"
          alt=""
        />
      </div>

      <div className="grid md:grid-cols-2 gap-5 w-full md:px-10 mb-20">
        <img className="rounded-lg" src="/img/intocables1.gif" alt="" />
        <img className="rounded-lg" src="/img/intocables2.gif" alt="" />
        <img className="rounded-lg" src="/img/intocables3.gif" alt="" />
        <img className="rounded-lg" src="/img/intocables4.gif" alt="" />
      </div>

      <div className="grid md:grid-cols-2 md:h-[700px] w-full gap-y-10 gap-x-10 md:px-10 mb-20">
        <div className="h-[700px] w-full">
          <img
            className="rounded-lg h-[700px] w-full object-cover"
            src="/img/intocables5.jpg"
          ></img>
        </div>
        <div className="h-[700px] w-full">
          <img
            className="rounded-lg h-[700px] w-full object-cover"
            src="/img/intocables6.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
}
