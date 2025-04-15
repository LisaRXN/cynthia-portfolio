import { Carousel } from "../../components/shared/Carousel";
import { WorkDetail } from "../../components/work/WorkDetail";

export function BudVar() {
  return (
    <div className="px-10 lg:px-20 py-5 md:max-w-screen-2xl m-auto">
      <WorkDetail
        title="BudVAR"
        subtitle="For Budweiser - By Publicis - 2022"
        video="https://player.vimeo.com/video/1068500225?h=172528a43e?"
        // overview="Si algo genera conversación en los partidos de la Copa Mundial es el VAR, pero además, muchas de estas conversaciones se dan en el BAR, tomando una Budweiser. Ese VAR y nuestro BAR era una gran coincidencia fonética y gramatical que no podíamos pasar por alto."
        overview={`If there’s one thing that sparks conversation during World Cup matches, it’s VAR. But also, many of these conversations happen in the BAR, while drinking a Budweiser. That VAR and our BAR were a great phonetic and grammatical coincidence that we couldn’t overlook.`}
      />

      <div className="m-auto md:px-10 mb-20">
        <Carousel images={["budvar1.png", "budvar2.png"]} />
      </div>
    </div>
  );
}
