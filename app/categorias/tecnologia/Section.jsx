import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";
import Logs from "../logs.json";

import Infinite from "../InfiniteScroll5";
import PreviousPosts from "./PreviousPosts";


export const metadata = {
    title: 'Tecnología | La Hora Libre',
    description: 'Artículos interesantes relacionados al ámbito de la tecnología',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre tecnologia', 'la hora libre categoria tecnologia'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categorias/tecnologia' }],
    creator: 'lahoralibre.com/categorias/tecnologia',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
};
export function Section() {
    const pages = Logs.cat5;

    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, tecnologia, la hora libre tecnologia" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; Section 1] */}
            <div className='container mt-5 w-75'>
                <div>
                    <h2 className="text-center">Artículos tecnológicos</h2>
                    <p className="text-center">
                        Una interfaz moderna y fácil de navegar, aquí podrás explorar una amplia gama de secciones, cada una dedicada a diferentes aspectos de la tecnología. Desde noticias de última hora hasta reseñas de productos, tutoriales prácticos y artículos de opinión, tenemos algo para satisfacer todos los intereses tecnológicos.
                    </p>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/about/about12.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>¿A qué se refiere?</h3>
                        <p>
                            A que es el lugar perfecto para mantenerte actualizado sobre los avances más recientes en el mundo de la tecnología. Nuestra sección web es una plataforma informativa que se enfoca en brindar contenido relevante, fascinante y de vanguardia sobre diversos aspectos tecnológicos.
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
