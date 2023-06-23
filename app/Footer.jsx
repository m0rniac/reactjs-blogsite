import React from 'react';
import Image from 'next/image';
import { FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-white text-black d-flex justify-content-center py-4 mt-5">
            <div className="container">
                <div className="row">
                    <hr />
                    <div className="container-fluid d-flex justify-content-center w-75">
                        <Image src="/LOGO_noBackground.png" height={60} width={60} alt="Logo | La Hora Libre" />
                    </div>

                    <h5 className="text-center">La Hora Libre</h5>
                    <p className="text-center">Todos los derechos reservados</p>

                    <div className="col-md-6 text-md-left mb-3 mb-md-0 mt-4">
                        <h5 className='text-center'>Información de contacto</h5>
                        <p className='text-center'>Email: support@lahoralibre.com</p>
                    </div>
                    <div className="col-md-6 text-md-right mt-4">
                        <h5 className='text-center'>Nuestras redes sociales</h5>
                        <ul className="list-inline text-center">
                            <li className="list-inline-item">
                                <a href="https://www.twitter.com/lahoralibreok" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter />
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.instagram.com/lahoralibreok" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
