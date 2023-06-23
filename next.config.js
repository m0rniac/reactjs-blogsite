/** @type {import('next').NextConfig} */

/*
[ Glosario ]
- output: 'export' (Construye un 'out' estático [sitio con intex.html]).
- unoptimized: true (Desactiva la optimización de imágenes [no es tan necesaria, además de Vercel cobra por su uso]).

*/

const nextConfig = {
    //output: 'export',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
