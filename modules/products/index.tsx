import * as React from 'react'
import { useGetProductsQuery } from '@store/api'

export default function App() {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading, isFetching, isSuccess, isError } =
    useGetProductsQuery('bulbasaur')
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')

  // useSelector: components need general (normalized) format
  // selectFromResult: components only need partial data, such as a filtered list
  // per-component / useMemo: specific components need to transform the cached data

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <img
            src={data.sprites.front_shiny}
            alt={data.species.name}
          />
        </>
      ) : null}
    </div>
  )
}
