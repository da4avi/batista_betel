import React from 'react'; //importar o React  é importante para que o arquivo .JSX funcione corretamente
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Body from '../layouts/Body';
import Home from '../pages/Home';

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />} > {/* O <Body> é o componente que contém o cabeçalho e o rodapé (ele sempre vai aparecer em todas rotas) */}
                    <Route path="/" element={<Home />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}