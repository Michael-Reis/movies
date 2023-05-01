
import Controle from "./components/Controle"

async function GetFilmes(pagina) {
  const page = pagina
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc2edd6da7c1980f09e65291361b7db1&language=pt-BR&page=" + page + "")
  const data = await response.json()
  return data
}


async function GetDetalhes(id) {
  const response = await fetch("https://api.themoviedb.org/3/movie/" + id + "?api_key=bc2edd6da7c1980f09e65291361b7db1&language=pt-BR")
  const data = await response.json()
  return data
}


export default async function Home() {

  // banner
  const filme_principal = 0
  const filmes_pagina = await GetFilmes(1)
  const banner_inicial = await GetDetalhes(filmes_pagina.results[filme_principal].id)


  return (
    <div>
      <Controle banner_inicial={banner_inicial} />
    </div>
  )
}

