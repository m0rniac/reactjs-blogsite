import React from 'react'
import Head from 'next/head';
import { Section } from "./Section";

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
export default function page() {
    return (
        <React.Fragment>
            {/* [Corpus: HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, entretenimiento, la hora libre entretenimiento, la hora libre categoria entretenimiento" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; SECTIONS] */}
            <Section />
        </React.Fragment>
    );
};