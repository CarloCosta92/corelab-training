import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layout/DaefaultLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
