import { WorkDetail } from "../../components/work/WorkDetail";

export function Navidad() {
  return (
    <div className="px-10 lg:px-20 py-5">
      <WorkDetail
        title="La Navidad La Preparamos Juntos"
        subtitle="For Gloria - By Juju - 2024"
        video="https://player.vimeo.com/video/1068499267?"
        overview={`Desde hace 84 años, cada vez que llega la navidad, en todas las mesas del Perú hay Gloria, la marca de lácteos más grande del país. Lista para preparar los platos más increíbles y emblemáticos.\n\nEsta vez, además de eso, Gloria quería no solo participar en la preparación de los sabores de la navidad peruana, sino también en la preparación de un gran símbolo de estas fiestas: el nacimiento. Así que decidimos contar esta gran preparación de manera muy cercana, junto a una linda reinterpretación de un clásico del clásico Chaikovski.
`}
      />
    </div>
  );
}
