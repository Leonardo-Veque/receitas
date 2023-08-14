
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from "./components/Header";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Detalhes from "./pages/Detalhes";
import ErrorPage from './pages/ErrorPage';

function RoutesApp(){
    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>
            <Route path="/detalhes" element={<Detalhes/>}/>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
    </BrowserRouter>
}

export default RoutesApp;