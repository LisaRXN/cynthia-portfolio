import { WorkDetail } from "../components/work/WorkDetail";

export function Mimaskot() {
  return (
    <div className="px-10 lg:px-20 py-5">
      <WorkDetail
        title="Blackie El Gato Negro"
        subtitle="For Mimaskot - By Publicis - 2021"
        video="https://player.vimeo.com/video/1068501493?"
        //           overview={`Mimaskot es una marca reconocida por su comida para perros, sin embargo, esta vez había incursionado en la comida para gatos y para anunciarlo, nos pidió una gran historia que tocara fibra.\n\nDecidimos crearla apoyados en un gran insight:  No hay nada que haga sentir más unida y afortunada a una familia que la llegada de un nuevo integrante, sin importar cuál sea su color, origen o raza.
        // `}
        overview={`Mimaskot is a brand known for its dog food, but this time, it ventured into cat food and asked us for a great story that would strike a chord.\n\nWe decided to create it based on a powerful insight: There’s nothing that makes a family feel more united and fortunate than`}
      />
    </div>
  );
}
