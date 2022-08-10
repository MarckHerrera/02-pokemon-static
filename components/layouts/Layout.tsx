import Head from 'next/head'

import React, { FC, PropsWithChildren } from 'react'
import { Navbar } from '../ui/Navbar';

interface Props{
    title?: string;
}

export const Layout: FC<PropsWithChildren<Props>> = ({children, title}) => {
  return (
    <>
        <Head>
            <title>{title || 'PokemosApp'}</title>
            <meta name="author" content="Dylan Herrera"/>
            <meta name="description" content={`Info de el Pokemon ${title}`}/>
            <meta name="keywords" content={`${title}, pokemon, pokedex`}/>
        </Head>
        <Navbar/>

        <main style={{
            padding: '0px 20px',
        }}>
            {children}
        </main>
    </>
  )
}
