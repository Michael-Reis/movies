import Image from "next/image"
import Style from "./page.module.css"


async function GetFilmes() {
  const page = 1
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

  const filme_principal = 1
  const movie = await GetFilmes()
  const detalhes = await GetDetalhes(movie.results[filme_principal].id)
  const fotofilme = "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/"
  const busca = "http://localhost/github/mydrugs/filme-api/busca.html?id="
  const banner = "https://image.tmdb.org/t/p/w1920_and_h1080_bestv2"


  console.log(movie.results[filme_principal])
  return (
    <main>
      <div className={Style.banner}>
        <Image loading="lazy" placeholder="blur" alt="image" blurDataURL={"/loading_2.gif"} src={`${banner}${movie.results[filme_principal].backdrop_path ? movie.results[filme_principal].backdrop_path : movie.results[filme_principal].poster_path  }`} width={1920} height={1080} />
        <div className={Style.backdrop}></div>
        <div className={Style.banner_content}>
          {/* {JSON.stringify(detalhes)} */}
          <h1>{movie.results[filme_principal].title.toUpperCase()}</h1>
          <p>{movie.results[filme_principal].overview}</p>
          <div className={Style.banner_genero}>
            {
              detalhes.genres.map((item, index) => {
                return <div key={index} >{item.name.toUpperCase()}</div>
              })
            }
          </div>
        </div>

      </div>
    </main>
  )
}
