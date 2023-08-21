import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/header";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Detalhes from "./pages/Detalhes";
import ErrorPage from "./pages/ErrorPage";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalhes/:id" element={<Detalhes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
