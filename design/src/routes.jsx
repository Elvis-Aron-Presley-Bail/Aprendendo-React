import { BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./Pages/Home";
import Projetos from "./Pages/Projetos";
import Contato from "./Pages/Contato";
import Info from "./Pages/Info";
import Error404 from "./Pages/Error404";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function CreateRoutes() {
    return (
        <>
        <BrowserRouter>
        <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/projetos" element={<Projetos />}></Route>
                <Route path="/contato" element={<Contato />}></Route>
                <Route path="/info" element={<Info />}></Route>
                <Route path="*" element={<Error404 />}></Route>
            </Routes>
        <Footer />
        </BrowserRouter>
        </>
    )
}

export default CreateRoutes