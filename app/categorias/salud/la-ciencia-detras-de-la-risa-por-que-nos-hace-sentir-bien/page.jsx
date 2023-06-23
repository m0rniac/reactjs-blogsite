import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";
import "./image.css";

import data from "./data.json";
import Imagen from "./000001.jpg";

import PreviousPosts from "../PreviousPosts";


/*
https://nextjs.org/docs/app/api-reference/functions/generate-metadata
    [Corpus; METADATA]*/
export const metadata = {
    title: data.title + ' | La Hora Libre',
    description: data.summary,
    keywords: data.headerKeywords.split(', '),
    authors: [{ name: 'Barlow' }, { name: 'Barlow', url: 'https://lahoralibre.com' }],
    creator: 'lahoralibre.com',
    publisher: 'Barlow',
    icons: {
        icon: '/LOGO_noBackground.png',
    },
}
const Article = () => {
    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>{data.title} | La Hora Libre</title>
                <meta name="description" content={data.summary} />
                <meta name="keywords" content={data.headerKeywords} />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
            </Head>


            {/* [Corpus; Image] */}
            <div className="container-fluid mt-5 w-50 d-flex justify-content-center">
                <Image src={Imagen} width='700' height='430' className="image-sh" alt="Cargando imagen... | La Hora Libre" />
            </div>

            {/* [Corpus; Title] */}
            <div className="container-fluid mt-5 w-75 p-1">
                <h2 className="text-center text-bold fs-1">
                    {data.title}
                </h2>
            </div>

            {/* [Corpus; Introduction] */}
            <div className="container-fluid mt-3 w-50 p-1">
                <p className="text-center fw-bolder lh-base fs-5">
                    <strong>{data.introduction}</strong>
                </p>
            </div>

            {/* [Corpus; List] */}
            <div className="container-fluid mt-5 w-75 p-1">
                <h3>Lista de elementos:</h3>
                <ul>
                    {
                        data.list.map((item, index) => (
                            <li className="mt-2 w-100" key={index}>
                                <p className="text-start fw-bolder lh-base fs-5">
                                    {item}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {/* [Corpus; YouTube] */}
            <div className="container-fluid mt-5 w-75 p-1">
                <h3>
                    Vídeo de referencia:
                </h3>
                <div className="ratio ratio-16x9">
                    <iframe src={data.videoUrl} title="YouTube" allowFullScreen></iframe>
                </div>
            </div>

            {/* [Corpus; Popular Opinion] */}
            <div className="container-fluid mt-5 w-50 p-1">
                <h3>
                    Opinión popular:
                </h3>
                <p className="text-start fw-bolder lh-3 fs-5">
                    {data.popularOpinion}
                </p>
            </div>

            {/* [Corpus; Summary] */}
            <div className="container-fluid mt-5 w-75 p-1">
                <h3>
                    Resúmen:
                </h3>
                <p className="text-start fw-bolder lh-3 fs-5">
                    {data.summary}
                </p>
            </div>

            {/* [Corpus; Sources] */}
            <div className="container-fluid mt-5 w-75">
                <h5>
                    Fuentes de este artículo:
                </h5>
                <ul>
                    {
                        data.sources.map((item, index) => (
                            <li key={index} className="text-start w-75 mt-2 p-1">{item}</li>
                        ))
                    }
                </ul>
            </div>


            {/* [Corpus; Related posts] */}
            <div className="container-fluid mt-5">
                <PreviousPosts />
            </div>
        </React.Fragment>
    );
};

export default Article;