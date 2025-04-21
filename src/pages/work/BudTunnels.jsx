import { useTranslation } from "react-i18next";
import { Carousel } from "../../components/shared/Carousel";
import { WorkDetail } from "../../components/work/WorkDetail";

export function BudTunnels() {
  const { t } = useTranslation();

  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Bud Tunnels"
        subtitle="For Budweiser - By Publicis - 2022"
        video="https://player.vimeo.com/video/1068500493?"
        overview={t("projects.project9.overview")}
      />

      <div className="m-auto md:px-10 mb-20">
        <Carousel images={["bud-tunnels1.png", "budvar2.png"]} />
      </div>
    </div>
  );
}
