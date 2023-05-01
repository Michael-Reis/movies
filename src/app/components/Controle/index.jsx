
"use client"
import { useEffect, useState } from 'react'

import Header from "../Header"
import Filmes from "../Filmes"

export default function Controle({ banner_inicial }) {
    const [filtro, setFiltro] = useState("pesquisar")
    const [filmes, setFilmes] = useState([])

    return (
        <div>
            <Header dados_filme={banner_inicial} filtro={filtro} setFiltro={setFiltro} />
            <p>{filtro}</p>
        </div>
    )
}