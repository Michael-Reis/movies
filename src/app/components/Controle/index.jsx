"use client"
import { useEffect, useState } from 'react'
import { chunk } from 'lodash'

import Header from '../Header'
import Filmes from '../Filmes'

export default function Controle({ banner_inicial }) {
    const [filtro, setFiltro] = useState('')
    const [filmes, setFilmes] = useState()
    const [filme, setFilme] = useState()
    const [paginaAtual, setPaginaAtual] = useState(1)
    const [totalPaginas, setTotalPaginas] = useState(0)

    useEffect(() => {
        async function getFilmes() {
            setFilmes('')

            if (filtro) {
                const response = await fetch(
                    `https://api.themoviedb.org/3/search/movie?api_key=bc2edd6da7c1980f09e65291361b7db1&language=pt-BR&query=${filtro}&page=${paginaAtual}&include_adult=false`,
                    { timeout: 100000 }
                )
                const data = await response.json()
                setFilmes(data)
                setTotalPaginas(data.total_pages)

                return
            }

            const response = await fetch(
                `https://api.themoviedb.org/3/movie/popular?api_key=bc2edd6da7c1980f09e65291361b7db1&language=pt-BR&page=${paginaAtual}`,
                { timeout: 100000 }
            )
            const data = await response.json()
            setFilmes(data)
            setTotalPaginas(data.total_pages)
        }

        getFilmes()
    }, [filtro, paginaAtual])

    function proximaPagina() {
        if (paginaAtual < totalPaginas) {
            setPaginaAtual(paginaAtual + 1)
        }
    }

    function paginaAnterior() {
        if (paginaAtual > 1) {
            setPaginaAtual(paginaAtual - 1)
        }
    }

    useEffect(() => {
        // Se o filtro for alterado, volta para a primeira página
        setPaginaAtual(1)
    }, [filtro])

    return (
        <div>
            <Header dados_filme={banner_inicial} filtro={filtro} setFiltro={setFiltro} />

            <div className='paginacao'>
                <button onClick={paginaAnterior} disabled={paginaAtual === 1}>Anterior</button>
                <span>{paginaAtual} de {totalPaginas}</span>
                <button onClick={proximaPagina} disabled={paginaAtual === totalPaginas}>Próxima</button>
            </div>

            {filmes && (
                <>
                    {chunk(filmes.results, 20).map((filmeChunk, index) => (
                        <Filmes key={index} filmes={filmeChunk.slice(0, 10)} />
                    ))}
                    {chunk(filmes.results, 20).map((filmeChunk, index) => (
                        <Filmes key={index} filmes={filmeChunk.slice(10, 20)} />
                    ))}

                </>
            )}
        </div>)
}
