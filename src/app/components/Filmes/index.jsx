import Image from "next/image"
import Style from "./style.module.css"



export default function Filmes({ filmes }) {

    return (
        <div className={Style.carrousel_filmes}>
            {filmes.map((item, index) => {
                return (
                    <div key={index} className={Style.carrousel_filme}>
                        <div className={Style.carrousel_item_filme}>
                            <div className={Style.carrousel_conteudo_filme}>
                                <h2>{item.title.toUpperCase()}</h2>
                            </div>
                            <div className={Style.backdrop}></div>
                            <Image loading="lazy" placeholder="blur" alt="image" blurDataURL={"/loading_2.gif"} src={`https://www.themoviedb.org/t/p/w533_and_h300_bestv2/${item.poster_path}`} onError={(error) => {
                                console.log(error)
                            }} width={533} height={300} />
                        </div>

                        {
                            item.overview ? <div className={Style.carrousel_sessao_oculta}> <p>{item.overview}</p></div> : ""

                        }
                    </div>
                )
            })
            }
        </div>
    )
}