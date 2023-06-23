import React from 'react';
import Head from 'next/head';
import Cookies from "./Section";

export const metadata = {
    title: 'Política de Cookies | La Hora Libre',
    description: 'Aviso sobre Política de Cookies en La Hora Libre',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre cookies', 'la hora libre privacidad', 'lahoralibre cookies', 'lahoralibre privacidad'],
    authors: [{ name: 'lahoralibre' }, { name: 'lahoralibre.com', url: 'https://lahoralibre.com/politicas/cookies' }],
    creator: 'lahoralibre.com/politicas/cookies',
    publisher: 'lahoralibre.com/',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
}
export default function CookiesSection() {
    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>Política de Cookies | La Hora Libre</title>
                <meta name="description" content="Una fuente de artículos imparcial y de calidad en la era digital con el objetivo de brindar una cobertura periodística completa, equilibrada y resumida, comprometido con los principios éticos y profesionales del periodismo digital moderno." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre inicio, la hora libre cookies, la hora libre support, la, hora, libre" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/LOGO_noBackground.png" sizes="any" />
            </Head>

            {/* [Corpus; Contenido] */}
            <Cookies />
        </React.Fragment>
    )
}
