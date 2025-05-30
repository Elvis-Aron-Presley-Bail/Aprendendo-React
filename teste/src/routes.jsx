import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";
import Erro404 from "./pages/Erro404";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/sobre" element={<Sobre />}></Route>
                <Route path="/projetos" element={<Projetos />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
                <Route path="*" element={<Erro404 />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes