import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DaefaultLayout";
import Home from "./pages/Home";
import Corsi from "./pages/Corsi";
import PersonalTrainer from "./pages/PersonalTrainer";
import Contatti from "./pages/Contatti";
import Trasformazioni from "./pages/Trasformazioni";
import Abbonamenti from "./pages/Abbonamenti";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/corsi" element={<Corsi />} />
          <Route path="/personal-trainer" element={<PersonalTrainer />} />
          <Route path="/contatti" element={<Contatti />} />
          <Route path="/abbonamenti" element={<Abbonamenti />} />
          <Route path="/trasformazioni" element={<Trasformazioni />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
