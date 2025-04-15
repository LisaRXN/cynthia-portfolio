import { WorkDetail } from "../../components/work/WorkDetail";

export function Conectados() {
  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Conectados"
        subtitle="For Movistar - By VLM - 2025"
        video="https://player.vimeo.com/video/1068638578?"
        overview={`Movistar necesitaba comunicar el lanzamiento de su nuevo modem WiFi 6 que permitía a las familias tener más cobertura y más dispositivos conectados al tiempo.\n\nPara contarlo, decidimos llevar esta conexión al máximo nivel, mostrando que cuando el WiFi es bueno, hasta los objetos de una casa pueden cobrar vida para conectarse.`}
      />
    </div>
  );
}
