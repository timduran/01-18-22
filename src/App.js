import { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {

  const [pokeState, setPokeState] = useState({
    pokemon: {}
  })

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .then(({ data: pokemon }) => {
        console.log(pokemon)
        setPokeState({ ...pokeState, pokemon })
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      {
        pokeState.pokemon.name ? (
          <>
            <h1>{pokeState.pokemon.name}</h1>
            <h1>{pokeState.pokemon.species.name}</h1>
          </>
        ) : null
      }
    </>
  )
}

export default App
