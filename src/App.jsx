import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Recursos from "./pages/Recursos";
import Progress from "./components/Progress";

function App() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header fijo en todas las páginas */}
      <Header />

      {/* El main crece (flex-grow) para empujar el footer hacia abajo */}
      <main className="flex-grow pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Progress />
                <Story />
              </>
            }
          />
          <Route path="/recursos" element={<Recursos />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
