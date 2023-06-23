import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";
import Logs from "../logs.json";

import Infinite from "../InfiniteScroll3";
import PreviousPosts from "./PreviousPosts";


export const metadata = {
    title: 'Finanzas | La Hora Libre',
    description: 'Artículos interesantes relacionados al ámbito financiero',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre finanzas', 'la hora libre economia'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/categorias/finanzas' }],
    creator: 'lahoralibre.com/categorias/finanzas',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
};
export function Section() {
    const pages = Logs.cat3;

    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, finanzas, la hora libre finanzas" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; Section 1] */}
            <div className='container mt-5 w-75'>
                <div>
                    <h2 className="text-center">Artículos financieros</h2>
                    <p className="text-center">
                        Tu recurso web confiable y completo en todo lo relacionado con las finanzas. Aquí encontrarás una amplia variedad de información y recursos relacionados con el mundo financiero, diseñados para ayudarte a tomar decisiones informadas y maximizar tu bienestar financiero.
                    </p>
                </div>

                <div className='row mt-5'>
                    <div className='col-md-6'>
                        <Image src={'/about/about11.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>¿A qué se refiere?</h3>
                        <p>
                            A que encontrarás una gran variedad de artículos que cubren diversos aspectos de las finanzas, como presupuesto personal, inversión, ahorro, planificación para la jubilación, impuestos, gestión empresarial y mucho más. Estos recursos te proporcionarán consejos prácticos para que puedas tomar decisiones financieras inteligentes y alcanzar tus metas económicas. Potenciado por la inteligencia artificial.
                        </p>
                    </div>
                </div>
            </div>


            {/* [Corpus; Section 2] */}
            <div className="container-fluid mt-5">
                <PreviousPosts/>
            </div>


            {/* [Corpus; Section 3] */}
            <div className="mt-5">
                <Infinite pages={pages} />
            </div>
        </React.Fragment>
    );
};
