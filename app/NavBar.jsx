"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleLinkClick = () => {
        if (menuOpen) {
            setMenuOpen(false);
        }
    };

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const searchUrl = `https://www.google.com/search?q=${searchQuery}+site:lahoralibre.com`;
        window.open(searchUrl, '_blank');
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <React.Fragment>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <Image src={'/LOGO_noBackground.png'} height={32} width={32} alt="La Hora Libre" />
                        </Link>
                        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarColor03">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item">
                                    <Link className="nav-link" href="/" onClick={handleLinkClick}>
                                        <p>Inicio</p>
                                    </Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        Sobre nosotros
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="/info" onClick={handleLinkClick}>
                                            Sobre nosotros
                                        </Link>
                                        <Link className="dropdown-item" href="/politicas/cookies" onClick={handleLinkClick}>
                                            Política de Cookies
                                        </Link>
                                        <Link className="dropdown-item" href="/politicas/privacidad" onClick={handleLinkClick}>
                                            Política de Privacidad
                                        </Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                                        Categorías
                                    </a>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" href="/categorias/ciencias" onClick={handleLinkClick}>
                                            Ciencias
                                        </Link>
                                        <Link className="dropdown-item" href="/categorias/entretenimiento" onClick={handleLinkClick}>
                                            Entretenimiento
                                        </Link>
                                        <Link className="dropdown-item" href="/categorias/finanzas" onClick={handleLinkClick}>
                                            Finanzas
                                        </Link>
                                        <Link className="dropdown-item" href="/categorias/salud" onClick={handleLinkClick}>
                                            Salud
                                        </Link>
                                        <Link className="dropdown-item" href="/categorias/tecnologia" onClick={handleLinkClick}>
                                            Tecnología
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                            <form className="d-flex" onSubmit={handleFormSubmit}>
                                <input
                                    className="form-control me-sm-2"
                                    type="search"
                                    placeholder="Buscar publicación"
                                    value={searchQuery}
                                    onChange={handleInputChange}
                                />
                                <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                                    Buscar
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
    );
};
