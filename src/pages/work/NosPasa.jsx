import { useTranslation } from "react-i18next";
import { WorkDetail } from "../../components/work/WorkDetail";

export function NosPasa() {
    const { t } = useTranslation();
  
  return (
    <div className="min-h-screen h-auto px-10 lg:px-20 py-5 mb-10 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Nos Pasa"
        subtitle="Nayflex - Juju Angency"
        video="https://player.vimeo.com/video/1068498974"
        overview={t('projects.project3.overview')}
      />

      <div className="m-auto md:px-10 flex items-center justify-center">
        <div className="grid md:grid-cols-2 md:h-[880px] gap-5">
          <div className="grid grid-rows-3 gap-y-5 md:h-[880px]">
            <div className="h-full w-full">
              <img
                src="/img/nospasa1.png"
                className="h-full w-full object-cover rounded-lg md:rounded-tl-lg"
                alt=""
              />
            </div>
            <div className="h-full w-full">
              <img
                src="/img/nospasa3.png"
                className="h-full w-full object-cover rounded-lg md:rounded-none"
                alt=""
              />
            </div>
            <div className="h-full w-full">
              <img
                src="/img/nospasa4.png"
                className=" h-full w-full object-cover rounded-lg md:rounded-bl-lg"
                alt=""
              />
            </div>
          </div>
          <div className="w-full h-auto md:h-[880px] md:w-auto">
            <img
              src="/img/nospasa2.png"
              className="object-cover h-full rounded-lg md:rounded-r-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
