const express = require('express');
const app = express()

const port = 5050;

app.listen (port, () => {
  console.log (`Server is memein' on port: ${port}!`)
})






//Controllers contain the handler functions for endpoints. When building a controller,
//you need to use module.exports to export your functions. You should export an object of
//methods (seen below), so that you can create as many handler functions as you need.

//Might not need controllers here...  more testing - from Matt's exercise below, future reference.  Controller = pokemonCtrl

// const caughtPokemon = [];
// let id = 1;

// module.exports = {
//     getCaughtPokemon: (req, res) => {
//         res.status(200).send(caughtPokemon);
//     },
//     catchPokemon: (req, res) => {
//         const {pokemon} = req.body;

//         pokemon.id = id;
//         id++;

//         caughtPokemon.push(pokemon);
//         res.status(200).send(caughtPokemon);
//     },
//     editName: (req, res) => {
//         const {id} = req.params,
//               {name} = req.body;

//         const pokemon = caughtPokemon.find(element => element.id === +id);
//         pokemon.name = name;
//         res.status(200).send(caughtPokemon);
//     },
//     releasePokemon: (req, res) => {
//         const {id} = req.params;

//         const index = caughtPokemon.findIndex(element => element.id === +id);
//         caughtPokemon.splice(index, 1);
//         res.status(200).send(caughtPokemon);
//     }
// }

// Other controller ***** GrassCtrl  (Reference point only)

// const axios = require('axios');

// module.exports = {
//     getWildPokemon: (req, res) => {
//         const pokemonArray = [];

//         const rand1 = Math.ceil(Math.random() * 151),
//               rand2 = Math.ceil(Math.random() * 151),
//               rand3 = Math.ceil(Math.random() * 151);

//         axios.get(`https://pokeapi.co/api/v2/pokemon/${rand1}`)
//             .then(response => {
//                 pokemonArray.push(response.data);
//                 axios.get(`https://pokeapi.co/api/v2/pokemon/${rand2}`)
//                     .then(response => {
//                         pokemonArray.push(response.data);
//                         axios.get(`https://pokeapi.co/api/v2/pokemon/${rand3}`)
//                             .then(response => {
//                                 pokemonArray.push(response.data);
//                                 res.status(200).send(pokemonArray);
//                             })
//                     })
//             })
//             .catch(err => res.status(500).send(err));
//     }
// }