
import axios from 'axios';

export class PokemonService{




    constructor(){

    }

    // getPokemon(id ){

    // }
    //cette methode retourne un tableau de pokemons
    getPokemons() {
        return new Promise((resolve, reject) => {
let pokemons = [ ]

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
        .then(response => {
            
            
            let result = response.data.results;
            result.forEach(p => {
                let substrings = p.url.split("/");
                let id = substrings [ substrings.length -2];
                p.id = id;

                //pour chaque pokemon trouvé dans 'result' -> ajout dans 'pokemons'
                pokemons.push(p)
            })
            resolve(pokemons)
        })
        .catch(reason => {
            reject("erreur lors de la récupération des pokémons : " + reason)

            })
        })
        
        
        


    }
}

