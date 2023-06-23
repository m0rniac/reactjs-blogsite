import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";
import Logs from "../logs.json";

import Infinite from "../InfiniteScroll1";
import PreviousPosts from "./PreviousPosts";


export const metadata = {
    title: 'Ciencias | La Hora Libre',
    description: 'Artículos interesantes relacionados al ámbito de la ciencia',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre ciencia', 'la hora libre ciencias'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categorias/ciencias' }],
    creator: 'lahoralibre.com/categorias/ciencias',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
};
export function Section() {
    const pages = Logs.cat1;

    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, ciencias, la hora libre ciencia" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; Section 1] */}
            <div className='container mt-5 w-75'>
                <div>
                    <h2 className="text-center">Artículos cientificos</h2>
                    <p className="text-center">
                        Un destino digital dedicado a compartir artículos sobre conocimientos, descubrimientos y avances en el emocionante mundo de la ciencia, aquí encontrarás una amplia variedad de contenidos cuidadosamente seleccionados para satisfacer tu curiosidad y mantenerte actualizado sobre los desarrollos más recientes de la ciencia.
                    </p>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/about/about10.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>¿A qué se refiere?</h3>
                        <p>
                            A que encontrarás una selección de artículos destacados que abarcan diversas áreas científicas, como la física, la biología, la química, la astronomía, la tecnología y más. Si te apasiona la ciencia, te invitamos a sumergirte en nuestro contenido, que está respaldado por investigaciones rigurosas y fuentes confiables.
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
