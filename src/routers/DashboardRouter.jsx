import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DcScreen from '../components/dc/DcScreen'
import HeroScreen from '../components/hero/HeroScreen'
import MarvelScreen from '../components/marvel/MarvelScreen'
import SearchScreen from '../components/search/SearchScreen'
import Navbar from '../components/ui/Navbar'
import Formulario from '../components/fomulario/Formulario'
import Imagen from '../components/imagen/Imagen'
import Calendario from '../components/calendario/Calendario'
import Seguimiento from '../components/seguimiento/Seguimiento'
import UploadFile from '../components/pruebas/Pruebas'


const DashboardRouter = () => {

    return (
        <>
            <Navbar />
            <div className="mx-3 my-4">
                <Routes>
                    <Route path="/" element={<SearchScreen />} />
                    <Route path="/seamless" element={<DcScreen />} />
                    <Route path="/body" element={<MarvelScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/income" element={< Formulario />} />
                    <Route path="/agend" element={< Calendario />} />
                    <Route path="/seguimiento" element={< Seguimiento />} />
                    <Route path="/Pruebas" element={< UploadFile />} />

                    <Route path="/dp/:id" element={<HeroScreen />} />
                    <Route path="/sgm/:id" element={<Seguimiento />} />
                    <Route path="/img/:id" element={<Imagen />} />
                    <Route path="/income/edit/:id" element={<Formulario />} />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRouter
