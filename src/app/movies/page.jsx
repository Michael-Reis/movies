"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Movies() {

    const [movies, setMovies] = useState()
    const page = 2
    const fotofilme = "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/"
    const busca = "http://localhost/github/mydrugs/filme-api/busca.html?id="

    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc2edd6da7c1980f09e65291361b7db1&language=pt-BR&page=" + page + "")
            const data = await response.json()
            setMovies(data.results)
        })()
    }, [])

    return (
        <div>
            <h1>Filmes</h1>
            {movies && movies.map((movie) => (
                <div key={movie.id}>
                    <div>{movie.original_title}</div>
                    <div>{movie.overview}</div>
                    <div>
                        <Image loading="lazy" placeholder="blur" alt="image" onError={(e) => {
                            e.target.src = "/loading_2.gif"
                        }} blurDataURL={"/loading_2.gif"} src={fotofilme + movie.poster_path} width={533} height={300} />
                    </div>
                </div>
            ))}
        </div>
    )

}