import { useRouter } from 'next/router';
import React from 'react'
import { Layout } from '../../components/layouts/Layout';

const PokemonPage = () => {

  const router = useRouter();
  console.log(router.query)

  return (
    <Layout title='Algun pokemon'>
      <h1>Hola c:</h1>
    </Layout>
  )
}

export default PokemonPage