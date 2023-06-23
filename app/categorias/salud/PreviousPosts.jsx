//"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import "/public/css/bootstrap.css";
import Data from "./info.json";


export default function PreviousPosts() {
    /* [Corpus; .JSONs] */
    const json1 = Data.elem1.jsonLink;
    const json2 = Data.elem2.jsonLink;
    const json3 = Data.elem3.jsonLink;
    const json4 = Data.elem4.jsonLink;
    const json5 = Data.elem5.jsonLink;
    const json6 = Data.elem6.jsonLink;

    /* [Corpus; Imges] */
    const img1 = Data.elem1.imageLink;
    const img2 = Data.elem2.imageLink;
    const img3 = Data.elem3.imageLink;
    const img4 = Data.elem4.imageLink;
    const img5 = Data.elem5.imageLink;
    const img6 = Data.elem6.imageLink;

    return (
        <React.Fragment>
            {/* [Corpus; Title] */}
            <div className="container-fluid mt-5 w-75 p-1">
                <h2>
                    Recientemente:
                </h2>
            </div>


            {/* [Corpus; POST 1] */}
            <div className="container-fluid w-75 p-1">
                <div className="card">
                    {/* <Image src={img1} className="card-img-top" width={80} height={80} alt="Cargando... | La Hora Libre" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{json1.title}</h5>
                        <p className="card-text">{json1.introduction}</p>
                        <div className="d-flex justify-content-end">
                            <Link href={'/categorias/salud/' + json1.routeTitle}><button className="btn btn-primary">Leer artículo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* [Corpus; POST 2] */}
            <div className="container-fluid mt-2 w-75 p-1">
                <div className="card">
                    {/* <Image src={img1} className="card-img-top" width={80} height={80} alt="Cargando... | La Hora Libre" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{json2.title}</h5>
                        <p className="card-text">{json2.introduction}</p>
                        <div className="d-flex justify-content-end">
                            <Link href={'/categorias/salud/' + json2.routeTitle}><button className="btn btn-primary">Leer artículo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* [Corpus; POST 3] */}
            <div className="container-fluid mt-2 w-75 p-1">
                <div className="card">
                    {/* <Image src={img1} className="card-img-top" width={80} height={80} alt="Cargando... | La Hora Libre" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{json3.title}</h5>
                        <p className="card-text">{json3.introduction}</p>
                        <div className="d-flex justify-content-end">
                            <Link href={'/categorias/salud/' + json3.routeTitle}><button className="btn btn-primary">Leer artículo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* [Corpus; POST 4] */}
            <div className="container-fluid mt-2 w-75 p-1">
                <div className="card">
                    {/* <Image src={img1} className="card-img-top" width={80} height={80} alt="Cargando... | La Hora Libre" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{json4.title}</h5>
                        <p className="card-text">{json4.introduction}</p>
                        <div className="d-flex justify-content-end">
                            <Link href={'/categorias/salud/' + json4.routeTitle}><button className="btn btn-primary">Leer artículo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* [Corpus; POST 5] */}
            <div className="container-fluid mt-2 w-75 p-1">
                <div className="card">
                    {/* <Image src={img1} className="card-img-top" width={80} height={80} alt="Cargando... | La Hora Libre" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{json5.title}</h5>
                        <p className="card-text">{json5.introduction}</p>
                        <div className="d-flex justify-content-end">
                            <Link href={'/categorias/salud/' + json5.routeTitle}><button className="btn btn-primary">Leer artículo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* [Corpus; POST 6] */}
            <div className="container-fluid mt-2 w-75 p-1">
                <div className="card">
                    {/* <Image src={img1} className="card-img-top" width={80} height={80} alt="Cargando... | La Hora Libre" /> */}
                    <div className="card-body">
                        <h5 className="card-title">{json6.title}</h5>
                        <p className="card-text">{json6.introduction}</p>
                        <div className="d-flex justify-content-end">
                            <Link href={'/categorias/salud/' + json6.routeTitle}><button className="btn btn-primary">Leer artículo</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};