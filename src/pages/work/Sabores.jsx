import { WorkDetail } from "../../components/work/WorkDetail";

export function Sabores() {
  return (
    <div className="px-10 lg:px-20 py-5">
      <WorkDetail
        title="Sabores que Conquistan el Mundo"
        subtitle="Cusqueña - Publicis"
        video="https://www.youtube.com/embed/J_nmEMGxbZQ"
        overview={`Desde tiempos ancestrales los peruanos hemos conquistado la papa, el fuego y una infinidad de sabores que nos han hecho resaltar como una de las grandes gastronomías del mundo.\n\nEn cada lugar los sabores del Perú han dejado de conquistar solo nuestras mesas y han pasado a conquistar el mundo entero junto a una cerveza Cusqueña. 

`}
      />
      <div className="m-auto px-10"></div>
    </div>
  );
}
