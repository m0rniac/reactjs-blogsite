import React from "react";
import Head from "next/head";
import Info from "./InfoSection";

import "public/css/bootstrap.css";


export const metadata = {
    title: 'Sobre nosotros | La Hora Libre',
    description: '¿Qué es lahoralibre.com?',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre info', 'la hora libre about'],
    authors: [{ name: 'Barlow' }, { name: 'lahoralibre.com', url: 'https://lahoralibre.com/info' }],
    creator: 'lahoralibre.com/info',
    publisher: 'lahoralibre.com',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
}
const About = () => {
    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>Sobre nosotros | La Hora Libre</title>
                <meta name="description" content="Una fuente de artículos imparcial y de calidad en la era digital con el objetivo de brindar una cobertura periodística completa, equilibrada y resumida, comprometido con los principios éticos y profesionales del periodismo digital moderno." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre info, la hora libre contacto, la hora libre support, la, hora, libre" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/LOGO_noBackground.png" sizes="any" />
            </Head>

            {/* [Corpus; Content] */}
            <div className="container-fluid mt-3">
                <Info />
            </div>
        </React.Fragment>
    );
};

export default About;