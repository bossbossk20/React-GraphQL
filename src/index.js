import React from 'react'
import ReactDOM from 'react-dom'
import Pokedex from './components/Pokedex'
import PokemonPage from './components/PokemonPage'
import AddPokemonCard from './components/AddPokemonCard'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo'
import 'tachyons'
import './index.css'


const client = new ApolloClient({
  networkInterface: createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/ciz5dw26f1qnr0144cqhynqwm'}),
  dataIdFromObject: o => o.id
})

ReactDOM.render((
    <ApolloProvider client={client}>
      <Router history={browserHistory}>
        <Route path='/' component={Pokedex}>
          <IndexRedirect to='/1' />
          <Route path='/:page' component={Pokedex} />
        </Route>
        <Route path='/view/:pokemonId' component={PokemonPage} />
        <Route path='/create/:trainerId' component={AddPokemonCard} />
      </Router>
    </ApolloProvider>
  ),
  document.getElementById('root')
)
