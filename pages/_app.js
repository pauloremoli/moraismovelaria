import React from "react";
import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/styles.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Morais Movelaria</title>
                <meta
                    name="description"
                    content="A Movelaria Morais produz móveis planejados sob medida para todos os tipos de ambientes, atendimento em São José dos campos e região."
                />

                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "Movelaria",
                            image: [
                                "https://http://movelariamorais.com.br/img/logo.jpg",
                            ],
                            "@id": "http://movelariamorais.com.br",
                            name: "Morais Movelaria",
                            address: {
                                "@type": "PostalAddress",
                                streetAddress: "Rua Padre Guilherme Hopp, 128",
                                addressLocality: "São José dos Campos",
                                addressRegion: "SP",
                                postalCode: "12248-260",
                                addressCountry: "BR",
                            },
                            geo: {
                                "@type": "GeoCoordinates",
                                latitude: -23.17270415088732,
                                longitude: -45.79213224182986,
                            },
                            url: "http://moraismovelaria.com.br",
                            telephone: "+55 (12) 99680-2206",
                        }),
                    }}
                />
                <link rel="shortcut icon" href="/img/icon.png" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
