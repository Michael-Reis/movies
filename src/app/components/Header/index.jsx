import Image from "next/image"
import Style from "./page.module.css"

export default function Header({ dados_filme, filtro, setFiltro }) {

    const banner = "https://image.tmdb.org/t/p/w1920_and_h1080_bestv2"
    // const busca = "http://localhost/github/mydrugs/filme-api/busca.html?id="
    // const fotofilme = "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/"

    console.log("filtro: ", filtro)
    return (
        <main>
            <div className={Style.banner}>
                <Image loading="lazy" placeholder="blur" alt="image" blurDataURL={"/loading_2.gif"} src={`${banner}${dados_filme.backdrop_path ? dados_filme.backdrop_path : dados_filme.poster_path}`} width={1920} height={1080} />
                <div className={Style.backdrop}></div>
                <div className={Style.banner_content}>
                    <h1>{dados_filme.title.toUpperCase()}</h1>
                    <p>{dados_filme.overview}</p>
                    <div className={Style.banner_genero}>
                        {
                            dados_filme.genres.map((item, index) => {
                                return <div key={index} >{item.name.toUpperCase()}</div>
                            })
                        }
                    </div>

                </div>
                <div className={Style.banner_pesquisar}>
                    <div>
                        <i className='bx bx-search icon'></i>
                    </div>
                    <input type="search"  value={filtro} onChange={(e) => setFiltro(e.target.value)} />
                </div>

            </div>
        </main>
    )
}
