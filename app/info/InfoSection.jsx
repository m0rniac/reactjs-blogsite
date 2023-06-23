import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import Donation from "./PayPalDonation";

import "/public/css/bootstrap.css";


export const metadata = {
    title: 'Sobre nosotros | La Hora Libre',
    description: '¿Qué es lahoralibre.com?',
    keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre info', 'la hora libre about'],
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com/info' }],
    creator: 'lahoralibre.com/info',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
}
export default function InfoSection() {
    const helps = [
        "Desactivando el Ad-Block de tu navegador, de esta forma nos permites generar ingresos mediante anuncios.",
        "Compartiendo el sitio con tus amigos y en toda la red.",
        "Realizando una modesta donación (el enlace lo encontrarás al final de la página)."
    ];

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


            {/* [Corpus; Logotype] */}
            <div className='container-fluid mt-3 d-flex justify-content-center w-75 p-1'>
                <Image src={'/LOGO_noBackground.png'} width={240} height={240} alt='La Hora Libre' />
            </div>


            {/* [Corpus; Title] */}
            <div className='container-fluid mt-5 w-75 p-1'>
                <h2 className='text-center'>
                    ¿Qué es lahoralibre?
                </h2>
                <p className='text-center'>
                    Es un medio de difusión que está desempeñando un papel destacado como fuente confiable de información en línea. Fundado en 2023, nace buscando ser un referente en el mundo de la comunicación gracias a su amplia capacidad de redacción y cobertura exhaustiva y objetiva potenciado por un motor de Inteligencia Artificial desarrollado recientemente en El Salvador, BARLOW Engine.
                </p>
                <p className='text-center mt-5'>
                    Concebido como una respuesta a la necesidad de una fuente de artículos imparcial y de calidad en la era digital. Con el objetivo de brindar una cobertura periodística completa, equilibrada y resumida, comprometido con los principios éticos y profesionales del periodismo digital moderno.
                </p>
            </div>


            {/* [Corpus; Section 1] */}
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Image src={'/about/about17.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                    </div>
                    <div className='col-md-6 mt-4'>
                        <h3>¿Qué es Barlow Engine?</h3>
                        <p>
                            Es el nombre del Motor de IA utilizado por lahoralibre.com para poder generar cada artículo publicado y por publicar en el sitio, desarrollado en El Salvador, es un potente y avanzado software diseñado para generar respuestas coherentes y relevantes ya que hace uso de modelos entrenados utilizando una enorme cantidad de información proveniente de diversas fuentes en Internet, lo que le brinda un amplio conocimiento sobre una amplia gama de temas.
                        </p>
                    </div>
                </div>
            </div>




            {/* [Corpus; Section 2] */}
            <div className='container-fluid mt-5 w-75'>
                <h2 className='mt-4'>¿Por qué?</h2>
                <p>
                    La inteligencia artificial moderna es una revolución que desafía los límites del conocimiento y abre nuevas oportunidades en todos los aspectos de nuestras vidas. Desde máquinas que aprenden y toman decisiones autónomas hasta asistentes virtuales inteligentes, está transformando nuestra forma de interactuar y resolver problemas. Es un camino hacia un futuro lleno de posibilidades emocionantes y desafíos éticos.
                </p>
            </div>


            {/* [Corpus; Section 3] */}
            <div className='container-fluid mt-5 w-75'>
                <h3>Pero...</h3>
                <p>
                    Es importante tener en cuenta que el uso de inteligencia artificial consume un poco más de energía eléctrica debido a la potencia de cómputo necesaria, el entrenamiento de modelos intensivo en cálculos, la infraestructura de hardware especializada y la necesidad de mantener la disponibilidad del servicio.
                </p>

                <div className='container-fluid mt-5 d-flex justify-content-center'>
                    <Image src={'/about/about1.svg'} width={260} height={260} alt='Barlow | La Hora Libre' />
                </div>
                {/* {subCorpus; DONATION} */}
                <div className='mt-3 d-flex justify-content-center'>
                    <Donation />
                </div>
                <p className='mt-3 text-center text-muted'>Ayúdanos a mantener el proyecto a flote</p>
            </div>


            {/* [Corpus; Section 4] */}
            <div className='container-fluid mt-5'>
                <h2 className='text-center'>
                    ¿Cómo puedo ayudar?
                </h2>
                <p className='text-center'>
                    Actualmente existen tres formas en que puedes ayudarnos:
                </p>

                <div className='d-flex justify-content-center'>
                    <ul>
                        {
                            helps.map((helper, index) => (
                                <li className={index} key={index} ><p>{helper}</p></li>
                            ))
                        }
                    </ul>
                </div>
            </div>


            {/* [Corpus; Section 5] */}
            <div className='container-fluid mt-5 w-75'>
                <div className='container-fluid mt-5 d-flex justify-content-center'>
                    <Image src={'/about/about3.svg'} width={100} height={100} alt='Barlow | La Hora Libre' />
                </div>


                <h2 className='text-center mt-3'>
                    Esto es un medio de difusión:
                </h2>
                <p className='text-center'>
                    Toda la información mostrada en este sitio es fidedigna, gratuita, y accesible para cualquier usuario.
                </p>
            </div>
        </React.Fragment>
    );
};
