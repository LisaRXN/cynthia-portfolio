import { Carousel } from "../../components/shared/Carousel";
import { WorkDetail } from "../../components/work/WorkDetail";

export function BudTunnels() {

  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="Bud Tunnels"
        subtitle="For Budweiser - By Publicis - 2022"
        video="https://player.vimeo.com/video/1068500493?"
        //         overview={`Budweiser quería robar la atención de los fanáticos del fútbol durante el mundial Qatar 2022 creando una gran idea bajo su concepto “El Túnel de la Grandeza”.\n\nAl escuchar la palabra túnel, supimos dos cosas: todos los países del mundo tienen uno, y en cada uno de ellos puede pasar algo increíble. Algo tan increíble como una inauguración o una final.
        // `}
        overview={`Budweiser wanted to grab the attention of football fans during the 2022 Qatar World Cup by creating a big idea under their concept “The Tunnel of Greatness.”\n\nWhen we heard the word tunnel, we knew two things: every country in the world`}
      />

      <div className="m-auto md:px-10 mb-20">
        <Carousel images={["bud-tunnels1.png", "budvar2.png"]} />
      </div>
    </div>
  );
}
