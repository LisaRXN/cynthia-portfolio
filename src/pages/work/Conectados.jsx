import { useTranslation } from "react-i18next";
import { WorkDetail } from "../../components/work/WorkDetail";

export function Conectados() {

    const { t } = useTranslation();
  
  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Conectados"
        subtitle={t('projects.project2.subtitle')}
        video="https://player.vimeo.com/video/1068638578?"
        overview={t('projects.project2.overview')}
      />
    </div>
  );
}
