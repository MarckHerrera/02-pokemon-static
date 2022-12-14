import Head from 'next/head'

import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui/Navbar';
import { useRouter } from 'next/router';

interface Props {
    title?: string;
}

const origin = (typeof window === 'undefined')? '' : window.location.origin;

export const Layout: FC<PropsWithChildren<Props>> = ({ children, title }) => {

    return (
        <>
            <Head>
                <title>{title || 'PokemosApp'}</title>
                <meta name="author" content="Dylan Herrera" />
                <meta name="description" content={`Info de el Pokemon ${title}`} />
                <meta name="keywords" content={`${title}, pokemon, pokedex`} />

                <meta property={`og:title" content="Info sobre ${title}`} />
                <meta property="og:description" content={`Esta es la pagina de ${title}`} />
                <meta property="og:image" content={`${origin}/img/banner.png`} />
            </Head>
            <Navbar />

            <main style={{
                padding: '0px 20px',
            }}>
                {children}
            </main>
        </>
    )
}
