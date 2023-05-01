import Controle from "./components/Controle"

async function GetFilmes() {
  const page = 1
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc2edd6da7c1980f09e65291361b7db1&language=pt-BR&page=" + page + "")
  const data = await response.json()
  return data
}

export default async function Home() {

  const filmes = await GetFilmes()

  return (
    <main>
      <Controle filmes={filmes} />
    </main>
  )
}
