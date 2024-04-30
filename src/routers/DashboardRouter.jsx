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


const DashboardRouter = () => {
    return (
        <>
            <Navbar />
            <div className="mx-3 my-4">
                <Routes>
                    <Route path="/" element={<MarvelScreen />} />
                    <Route path="/seamless" element={<DcScreen />} />
                    <Route path="/body" element={<MarvelScreen />} />
                    <Route path="/search" element={<SearchScreen />} />
                    <Route path="/income" element={< Formulario />} />
                    <Route path="/agend" element={< Calendario />} />

                    <Route path="/dp/:heroId" element={<HeroScreen />} />
                    <Route path="/img/:id" element={<Imagen />} />
                    <Route path="/income/edit/:id" element={<Formulario />} />
                </Routes>
            </div>
        </>
    )
}

export default DashboardRouter
