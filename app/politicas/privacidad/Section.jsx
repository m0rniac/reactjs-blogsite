import React from "react";
import Head from "next/head";
import Image from "next/image";

import "/public/css/bootstrap.css";



const PrivacySection = () => {
    return (
        <React.Fragment>
            {/* [Corpus; HEADER] */}
            <Head>
                <title>Política de privacidad | La Hora Libre</title>
                <meta name="description" content="Una fuente de artículos imparcial y de calidad en la era digital con el objetivo de brindar una cobertura periodística completa, equilibrada y resumida, comprometido con los principios éticos y profesionales del periodismo digital moderno." />
                <meta name="keywords" content="lahoralibre, lahoralibre.com, la hora libre, la hora libre inicio, la hora libre privacidad, la hora libre support, la, hora, libre" />
                <meta name="author" content="lahoralibre" />
                <link rel="canonical" href="https://lahoralibre.com/" />
                <link rel="icon" href="/LOGO_noBackground.png" sizes="any" />
            </Head>

            {/* [Corpus; Logotype] */}
            <div className='container-fluid d-flex mt-5 justify-content-center w-75'>
                <Image src={'/LOGO_noBackground.png'} height={120} width={120} alt='La Hora Libre' />
            </div>

            {/* [Corpus; Títular de documento] */}
            <div className="container-fluid mt-5 w-75">
                <h2 className="text-center">
                    POLÍTICA DE PRIVACIDAD
                </h2>
                <p className="text-center text-muted">
                    www.lahoralibre.com
                </p>
            </div>

            {/* [Corpus; Cuerpo de documento] */}
            <div className="container-fluid mt-4 w-75">
                <p>
                    El presente Política de Privacidad establece los términos en que www.lahoralibre.com usa y protege la información que es proporcionada por sus usuarios al momento de utilizar su sitio web. Esta compañía está comprometida con la seguridad de los datos de sus usuarios. Cuando le pedimos llenar los campos de información personal con la cual usted pueda ser identificado, lo hacemos asegurando que sólo se empleará de acuerdo con los términos de este documento. Sin embargo esta Política de Privacidad puede cambiar con el tiempo o ser actualizada por lo que le recomendamos y enfatizamos revisar continuamente esta página para asegurarse que está de acuerdo con dichos cambios.
                </p>

                <h3 className="mt-5">
                    Información que es recogida
                </h3>
                <p>
                    Nuestro sitio web podrá recoger información personal por ejemplo: Nombre,  información de contacto como  su dirección de correo electrónica e información demográfica. Así mismo cuando sea necesario podrá ser requerida información específica para procesar algún pedido o realizar una entrega o facturación.
                </p>

                <h3 className="mt-5">
                    Uso de la información recogida
                </h3>
                <p>
                    Nuestro sitio web emplea la información con el fin de proporcionar el mejor servicio posible, particularmente para mantener un registro de usuarios, de pedidos en caso que aplique, y mejorar nuestros productos y servicios.  Es posible que sean enviados correos electrónicos periódicamente a través de nuestro sitio con ofertas especiales, nuevos productos y otra información publicitaria que consideremos relevante para usted o que pueda brindarle algún beneficio, estos correos electrónicos serán enviados a la dirección que usted proporcione y podrán ser cancelados en cualquier momento.
                </p>
                <p>
                    www.lahoralibre.com está altamente comprometido para cumplir con el compromiso de mantener su información segura. Usamos los sistemas más avanzados y los actualizamos constantemente para asegurarnos que no exista ningún acceso no autorizado.
                </p>

                <h3 className="mt-5">
                    Cookies
                </h3>
                <p>
                    Una cookie se refiere a un fichero que es enviado con la finalidad de solicitar permiso para almacenarse en su ordenador, al aceptar dicho fichero se crea y la cookie sirve entonces para tener información respecto al tráfico web, y también facilita las futuras visitas a una web recurrente. Otra función que tienen las cookies es que con ellas las web pueden reconocerte individualmente y por tanto brindarte el mejor servicio personalizado de su web.
                </p>
                <p>
                    Nuestro sitio web emplea las cookies para poder identificar las páginas que son visitadas y su frecuencia. Esta información es empleada únicamente para análisis estadístico y después la información se elimina de forma permanente. Usted puede eliminar las cookies en cualquier momento desde su ordenador. Sin embargo las cookies ayudan a proporcionar un mejor servicio de los sitios web, estás no dan acceso a información de su ordenador ni de usted, a menos de que usted así lo quiera y la proporcione directamente . Usted puede aceptar o negar el uso de cookies, sin embargo la mayoría de navegadores aceptan cookies automáticamente pues sirve para tener un mejor servicio web. También usted puede cambiar la configuración de su ordenador para declinar las cookies. Si se declinan es posible que no pueda utilizar algunos de nuestros servicios.
                </p>

                <h3 className="mt-5">
                    Enlaces a Terceros
                </h3>
                <p>
                    Este sitio web pudiera contener enlaces a otros sitios que pudieran ser de su interés. Una vez que usted de clic en estos enlaces y abandone nuestra página, ya no tenemos control sobre al sitio al que es redirigido y por lo tanto no somos responsables de los términos o privacidad ni de la protección de sus datos en esos otros sitios terceros. Dichos sitios están sujetos a sus propias políticas de privacidad por lo cual es recomendable que los consulte para confirmar que usted está de acuerdo con estas.
                </p>

                <h3 className="mt-5">
                    Control de su información personal
                </h3>
                <p>
                    En cualquier momento usted puede restringir la recopilación o el uso de la información personal que es proporcionada a nuestro sitio web.  Cada vez que se le solicite rellenar un formulario, como el de alta de usuario, puede marcar o desmarcar la opción de recibir información por correo electrónico.  En caso de que haya marcado la opción de recibir nuestro boletín o publicidad usted puede cancelarla en cualquier momento.
                </p>
                <p>
                    Esta compañía no venderá, cederá ni distribuirá la información personal que es recopilada sin su consentimiento, salvo que sea requerido por un juez con un orden judicial.
                </p>

                <p className="mt-5">
                    Se reserva el derecho de cambiar los términos de la presente Política de Privacidad en cualquier momento.
                </p>
            </div>
        </React.Fragment>
    );
};

export default PrivacySection;