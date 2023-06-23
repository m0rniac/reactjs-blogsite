import React from "react";
import Head from "next/head";

import "../public/css/bootstrap.css";

/* [Corpus; Sites] */
import Init from "./Home/HomeSection";

/* [Corpus; SECTIONS] */
import CienciasPosts from "./categorias/ciencias/PreviousPosts";
import EntretenimientoPosts from "./categorias/entretenimiento/PreviousPosts";
import FinanzasPosts from "./categorias/finanzas/PreviousPosts";
import SaludPosts from "./categorias/salud/PreviousPosts";
import TecnologiaPosts from "./categorias/tecnologia/PreviousPosts";

export const metadata = {
  title: 'Inicio | La Hora Libre',
  description: '¿Qué es lahoralibre.com?',
  keywords: ['lahoralibre.com', 'lahoralibre', 'la hora libre inicio', 'la hora libre blog'],
  authors: [{ name: 'lahoralibre' }, { name: 'lahoralibre.com', url: 'https://lahoralibre.com/' }],
  creator: 'lahoralibre.com/',
  publisher: 'lahoralibre.com',
  icons: {
    icon: '/LOGO_noBackground.png',
  },
}
export default function Home() {
  return (
    <main>
      {/* [Corpus; HEADER] */}
      <Head>
        <title>Inicio | La Hora Libre</title>
        <meta name="description" content="Una fuente de artículos imparcial y de calidad en la era digital con el objetivo de brindar una cobertura periodística completa, equilibrada y resumida, comprometido con los principios éticos y profesionales del periodismo digital moderno." />
        <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre inicio, la hora libre contacto, la hora libre support, la, hora, libre" />
        <meta name="author" content="lahoralibre" />
        <link rel="canonical" href="https://lahoralibre.com/" />
        <link rel="icon" href="/LOGO_noBackground.png" sizes="any" />
      </Head>


      {/* [Corpus; CONTENT] */}
      <Init />

      {/* [Corpus; SPACE] */}
      <br />
      <br />
      <br />

      {/* [Corpus; Ciencia] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          En relación a Ciencias
        </h3>
      </div>
      <CienciasPosts />
      <hr />

      {/* [Corpus; Entretenimiento] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          En relación a Entretenimiento
        </h3>
      </div>
      <EntretenimientoPosts />
      <hr />

      {/* [Corpus; Finanzas] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          En relación a Finanzas
        </h3>
      </div>
      <FinanzasPosts />
      <hr />

      {/* [Corpus; Salud] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          En relación a Salud
        </h3>
      </div>
      <SaludPosts />
      <hr />

      {/* [Corpus; Tecnología] */}
      <div className="container-fluid mt-5 w-75">
        <hr />
        <h3 className="text-center">
          En relación a Tecnología
        </h3>
      </div>
      <TecnologiaPosts />
      <hr />
    </main>
  )
}
