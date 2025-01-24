import { BrowserRouter, Route, Routes } from "react-router-dom";
import Principal from "./components/Principal";
import Imagenes from "./components/Imagenes";


function App() {
    //TODO: Implementar las rutas de la aplicación
    return <BrowserRouter>
        <Routes>
            <Route index path="/" element={<Principal/>}/>
            <Route path="/Imagenes" element={<Imagenes/>}/>
        </Routes>
    </BrowserRouter>
}

export default App;