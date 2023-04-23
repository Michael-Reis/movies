"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation";

import Link from "next/link"

export const Menu = () => {

    const router = usePathname()
    const [menu, setMenu] = useState("close")
    const [url, setUrl] = useState("")

    useEffect(() => {
        setUrl(router)
    }, [router])

    return (
        <nav className={`sidebar ${menu}`}>
            <header>
                <div className="image-text">
                    <span className="image">
                        <img src="foto_perfil.jpg" alt="" />
                    </span>

                    <div className="text logo-text">
                        <span className="name">Movies</span>
                        <span className="profession">Desenvolvedor</span>
                    </div>
                </div>

                <i className='bx bx-chevron-right toggle' onClick={() => { menu == "close" ? setMenu("open") : setMenu("close") }} />
            </header>

            <div className="menu-bar">
                <div className="menu">

                    <ul className="menu-links">
                        <li className={`nav-link ${url == "/" ? "menu-active" : ""}`}>
                            <Link href="/">
                                <i className='bx bx-camera-movie icon'></i>
                                <span className="text nav-text">Filmes</span>
                            </Link>
                        </li>

                        <li className={`nav-link ${url == "/novidades" ? "menu-active" : ""}`}>
                            <Link href="/novidades">
                                <i className='bx bx-bar-chart-alt-2 icon' ></i>
                                <span className="text nav-text">Novidades</span>
                            </Link>
                        </li>

                        <li className={`nav-link ${url == "/movies" ? "menu-active" : ""}`}>
                            <Link href="/movies">
                                <i className='bx bx-bell icon'></i>
                                <span className="text nav-text">movies</span>
                            </Link>
                        </li>

                        <li className={`nav-link ${url == "/teste" ? "menu-active" : ""}`}>
                            <a href="#">
                                <i className='bx bx-pie-chart-alt icon' ></i>
                                <span className="text nav-text">Analytics</span>
                            </a>
                        </li>

                        <li className={`nav-link ${url == "/teste" ? "menu-active" : ""}`}>
                            <a href="#">
                                <i className='bx bx-heart icon' ></i>
                                <span className="text nav-text">Likes</span>
                            </a>
                        </li>

                        <li className={`nav-link ${url == "/teste" ? "menu-active" : ""}`}>
                            <a href="#">
                                <i className='bx bx-wallet icon' ></i>
                                <span className="text nav-text">Wallets</span>
                            </a>
                        </li>

                    </ul>
                </div>

                <div className="bottom-content">
                    <li className="">
                        <a href="#">
                            <i className='bx bx-log-out icon' ></i>
                            <span className="text nav-text">Logout</span>
                        </a>
                    </li>


                </div>
            </div>

        </nav>

    )
}