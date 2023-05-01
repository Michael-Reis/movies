import Header from "../Header"
import Filmes from "../Filmes"

async function GetFilmes(pagina) {
    let paginas = 0
    const page = pagina
    const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc2edd6da7c1980f09e65291361b7db1&language=pt-BR&page=" + page + "")
    const data = await response.json()
    return data
}

export default async function Controle({ filmes, detalhes }) {
    const filmes2 = await GetFilmes(2)
    const filmes3 = await GetFilmes(3)
    return (
        <>
            <Header filmes={filmes} />
            <Filmes filmes={filmes} />
            <Filmes filmes={filmes2} />
            <Filmes filmes={filmes3} />
        </>
    )
}