import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Header } from "./components/shared/Header.jsx";
import { Footer } from "./components/shared/Footer.jsx";
import { Amunas } from "./pages/work/Amunas.jsx";
import { NosPasa } from "./pages/work/NosPasa.jsx";
import { Corazon } from "./pages/work/Corazon.jsx";
import { Sabores } from "./pages/work/Sabores.jsx";
import { Work } from "./pages/Work.jsx";
import { About } from "./pages/About.jsx";
import { useEffect } from "react";
import { Conectados } from "./pages/work/Conectados.jsx";
import { BudVar } from "./pages/work/BudVar.jsx";
import { BudTunnels } from "./pages/work/BudTunnels.jsx";
import { Intocables } from "./pages/work/Intocables.jsx";
import { Mimaskot } from "./pages/Mimaskot.jsx";
import { Navidad } from "./pages/work/Navidad.jsx";
import { OpenFootball } from "./pages/work/OpenFootball.jsx";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Main />
    </Router>
  );
}

function Main() {
  return (
    <div className="bg-zinc-900 min-h-screen font-open font-light">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="/amunas-recovery" element={<Amunas />} />
        <Route path="/conectados" element={<Conectados />} />
        <Route path="/nos-pasa" element={<NosPasa />} />
        <Route path="/corazon-en-la-pansa" element={<Corazon />} />
        <Route path="/sabores-que-conquistan-el-mundo" element={<Sabores />} />
        <Route path="/navidad" element={<Navidad />} />
        <Route path="/bud-var" element={<BudVar />} />
        <Route path="/bud-tunnels" element={<BudTunnels />} />
        <Route path="/las-intocables" element={<Intocables />} />
        <Route path="/open-football" element={<OpenFootball />} />
        <Route path="/mimaskot" element={<Mimaskot />} />
      </Routes>
      <Footer />
    </div>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location]);

  return null;
}

export default App;
