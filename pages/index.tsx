import type { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react';

import { Layout } from '../components/layouts'
import pokeApi from '../api/pokeApi';
import { PokemonListResponse, SmallPokemon } from '../interfaces/pokemon-list';
import { PokemonCard } from '../components/pokemon';

interface Props {
  pokemons: SmallPokemon[];
}

const HomePage: NextPage<Props> = ({ pokemons }) => {

/*   console.log(pokemons) */

  return (
    <>
      <Layout title='Listado de Pokémons'>

        <Grid.Container gap={2} justify='flex-start'>
          {
            pokemons.map((poke) => (
              <PokemonCard key={poke.id} pokemon={poke}/>

            ))
          }


        </Grid.Container>
      </Layout>
    </>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

/*   console.log(data) */

  const pokemos: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg `
  }))

  return {
    props: {
      pokemons: pokemos
    }
  }
}


export default HomePage
