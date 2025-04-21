import { useTranslation } from "react-i18next";
import { WorkDetail } from "../../components/work/WorkDetail";

export function Sabores() {
    const { t } = useTranslation();
  
  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Sabores que Conquistan el Mundo"
        subtitle="Cusqueña - Publicis"
        video="https://www.youtube.com/embed/J_nmEMGxbZQ"
        overview={t('projects.project5.overview')}
      />
      <div className="m-auto px-10"></div>
    </div>
  );
}
