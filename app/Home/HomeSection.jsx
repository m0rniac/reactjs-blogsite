import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

import "/public/css/bootstrap.css";
import "./Home.css"

const Home = () => {
    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>Inicio | La Hora Libre</title>
                <meta name="description" content="Una fuente de artículos imparcial y de calidad en la era digital con el objetivo de brindar una cobertura periodística completa, equilibrada y resumida, comprometido con los principios éticos y profesionales del periodismo digital moderno." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre inicio, la hora libre contacto, la hora libre support, la, hora, libre" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/LOGO_noBackground.png" sizes="any" />
            </Head>


            <div className='containter-fluid mt-4'>
                {/* [Corpus; Alert Message] */}
                <div className='container-fluid'>
                    <div className="alert alert-dismissible alert-light">
                        {/* <button type="button" className="btn-close" data-bs-dismiss="alert"></button> */}
                        <h4 className="alert-heading">Advertencia:</h4>
                        <p className="mb-0">El proyecto aún se encuentra en fase experimental</p>
                    </div>
                </div>


                {/* [Corpus; Logotype] */}
                <div className='container-fluid d-flex justify-content-center w-75'>
                    <Image src={'/LOGO_noBackground.png'} height={120} width={120} alt='La Hora Libre' />
                </div>


                {/* [Corpus; Introduction] */}
                <div className='container mt-1 w-75'>
                    <div>
                        <h1 className="text-center">LA HORA LIBRE</h1>
                        <p className="text-center">
                            Explora un destino digital cautivador con artículos sobre ciencia, entretenimiento, finanzas, salud y tecnología. Descubre conocimientos actualizados y avances fascinantes de la humanidad, guiado por la Inteligencia Artificial.
                        </p>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/about/about5.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <h3>¿Cómo funciona?</h3>
                            <p>
                                El sitio hace uso de Barlow, un motor de Inteligencia Artificial desarrollado recientemente en El Salvador, el motor utiliza técnicas de razonamiento automatizado para analizar la información disponible y aplicar reglas predefinidas o aprendidas a partir de datos, puede trabajar con conjuntos de reglas definidas por expertos humanos o aprender nuevas reglas a través de técnicas de aprendizaje automático.
                            </p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6 order-md-2 d-flex justify-content-center'>
                            <Image src={'/about/about2.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4 order-md-1'>
                            <h3>¿Es gratis?</h3>
                            <p>
                                En una era digital en la que la información fluye a una velocidad sin precedentes, se argumenta que restringir el acceso a la información puede limitar el aprendizaje, la innovación y la igualdad de oportunidades. Al hacer que la información sea gratuita, se busca eliminar barreras económicas y garantizar que cualquier persona, independientemente de su origen o recursos, pueda acceder a conocimientos y recursos educativos.
                            </p>
                        </div>
                    </div>

                    <div className='row mt-5'>
                        <div className='col-md-6'>
                            <Image src={'/about/about15.svg'} width={250} height={250} alt='Barlow | La Hora Libre' />
                        </div>
                        <div className='col-md-6 mt-4'>
                            <h3>Solo disfrútalo</h3>
                            <p>
                                Nuestros artículos son una invaluable fuente de información respaldada por fuentes fidedignas, diseñados tanto para entretener como para enriquecer tus proyectos. Con un enfoque riguroso en la precisión y la veracidad, te ofrecemos un tesoro de conocimiento confiable para satisfacer tus intereses y necesidades informativas.
                            </p>
                        </div>
                    </div>

                </div>


            </div>
        </React.Fragment>
    );
};

export default Home;