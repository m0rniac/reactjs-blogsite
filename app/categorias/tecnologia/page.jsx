import React from 'react'
import Head from 'next/head';
import { Section } from "./Section";

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
export default function page() {
    return (
        <React.Fragment>
            {/* [Corpus: HEADER] */}
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, tecnologia, la hora libre tecnologia, la hora libre categoria tecnologia" />
                <meta name="author" content={metadata.creator} />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; SECTIONS] */}
            <Section />
        </React.Fragment>
    );
};