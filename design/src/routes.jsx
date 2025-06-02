import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";
import Contato from "./Pages/Contato";
import Info from "./Pages/Info";

function CreateRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projetos" element={<Projetos />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
                <Route path="/info" element={<Info />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default CreateRoutes