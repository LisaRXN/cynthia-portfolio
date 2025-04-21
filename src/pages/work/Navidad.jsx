import { useTranslation } from "react-i18next";
import { WorkDetail } from "../../components/work/WorkDetail";

export function Navidad() {
    const { t } = useTranslation();
  
  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="La Navidad La Preparamos Juntos"
        subtitle="For Gloria - By Juju - 2024"
        video="https://player.vimeo.com/video/1068499267?"
        overview={t('projects.project6.overview')}

      />
    </div>
  );
}
