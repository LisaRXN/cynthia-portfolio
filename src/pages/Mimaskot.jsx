import { useTranslation } from "react-i18next";
import { WorkDetail } from "../components/work/WorkDetail";

export function Mimaskot() {
    const { t } = useTranslation();
  
  return (
    <div className="px-10 lg:px-20 py-5  md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Blackie El Gato Negro"
        subtitle="For Mimaskot - By Publicis - 2021"
        video="https://player.vimeo.com/video/1068501493?"
        overview={t("projects.project11.overview")}
      />
    </div>
  );
}
