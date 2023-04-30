import Image from "next/image"
import Style from "./page.module.css"

async function GetFilmes() {
  const page = 2
  const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=bc2edd6da7c1980f09e65291361b7db1&language=pt-BR&page=" + page + "")
  const data = await response.json()
  return data
}

export default async function Home() {

  const movie = await GetFilmes()
  const fotofilme = "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/"
  const busca = "http://localhost/github/mydrugs/filme-api/busca.html?id="
  const banner = "https://image.tmdb.org/t/p/w1920_and_h1080_bestv2"


  return (
    <main>
      <div className={Style.banner}>
        <Image loading="lazy" placeholder="blur" alt="image" blurDataURL={"/loading_2.gif"} src={`${banner}${movie.results[3].backdrop_path}`} width={1920} height={1080} />
        <div className={Style.backdrop}></div>
      </div>

    </main>
  )
}
