import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";
import Logs from "../logs.json";

import Infinite from "../InfiniteScroll2";
import PreviousPosts from "./PreviousPosts";


export const metadata = {
    title: 'Entretenimiento | La Hora Libre',
    description: 'Artículos interesantes relacionados al ámbito del entretenimiento',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre entretenimiento', 'la hora libre categoria entretenimiento'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categorias/entretenimiento' }],
    creator: 'lahoralibre.com/categorias/entretenimiento',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
};
export function Section() {
    const pages = Logs.cat2;

    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, entretenimiento, la hora libre entretenimiento" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; Section 1] */}
            <div className='container mt-5 w-75'>
                <div>
                    <h2 className="text-center">Artículos sobre entretenimiento</h2>
                    <p className="text-center">
                        Un lugar dedicado por completo a publicar contenido diverso y emocionante sobre todo lo relacionado con el entretenimiento. Ya sea que estés buscando noticias frescas, reseñas de películas, análisis de series de televisión, avances de videojuegos o información sobre los últimos eventos culturales.
                    </p>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/about/about14.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>¿A qué se refiere?</h3>
                        <p>
                            A que esta es tu fuente confiable para mantenerte al día en el mundo del cine, la televisión, los videojuegos y la música. ¡Explora nuestros contenidos, diviértete leyendo nuestras reseñas y déjate inspirar por el apasionante universo del entretenimiento!
                        </p>
                    </div>
                </div>
            </div>


            {/* [Corpus; Section 2] */}
            <div className="container-fluid mt-5">
                <PreviousPosts />
            </div>


            {/* [Corpus; Section 3] */}
            <div className="mt-5">
                <Infinite pages={pages} />
            </div>
        </React.Fragment>
    );
};
