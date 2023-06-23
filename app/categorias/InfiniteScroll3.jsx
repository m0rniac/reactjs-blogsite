"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';
import logsData from './logs.json';

import "./progress4.css";

export default function InfinityScroll() {
    const [pages, setPages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPagesContent = async () => {
            const cat3Pages = logsData.cat3.slice(0, 5); // Mostrar solo las primeras 5 páginas
            const pagesContent = [];

            for (const page of cat3Pages) {
                try {
                    const response = await axios.get(page);
                    const html = response.data;
                    const $ = cheerio.load(html);

                    // Aquí especifica los selectores de los elementos que deseas excluir
                    const navigationBarSelector = '.navbar';
                    const footerSelector = 'footer';

                    // Elimina la barra de navegación del contenido
                    $(navigationBarSelector).remove();

                    // Elimina el footer del contenido
                    $(footerSelector).remove();

                    const pageContent = $.html();
                    pagesContent.push(pageContent);
                } catch (error) {
                    console.error(`[Barlow (ERROR); Error al obtener el contenido de la página ${page}: ${error}]`);
                }
            }

            setPages(pagesContent);
            setLoading(false); // Finaliza la carga y oculta el progress bar
        };

        fetchPagesContent();
    }, []);

    return (
        <div className='container-fluid'>
            <h3>Artículos relacionados:</h3>
            {loading ? ( // Muestra el progress bar mientras loading es true
                <div className="container-fluid custom-loader d-flex justify-content-center mt-4"></div>
            ) : (
                pages.map((pageContent, index) => (
                    <div key={index}>
                        {/* <h2>Página {index + 1}</h2> */}
                        <div dangerouslySetInnerHTML={{ __html: pageContent }} />
                    </div>
                ))
            )}
        </div>
    );
}
