<template>
  <div>
    <h1>Page de demonstration</h1>
    <p>{{ maVariable }}</p>
    <p>{{ compteur }}</p>
    <input type="text" v-model="firstName" />

    <br />
    <span v-if="firstName != ''"> Bonjour {{ firstName }} </span>
    <span v-else> Merci de saisir votre blaze </span>
    <br />

    <button @click="direBonjour">Bonjour</button>

    <br />

    <div v-for="(obj, index) in pokemons" v-bind:key="index">
        <h1>
          <router-link v-bind:to="'/pokemons/' + obj.id">
      {{ obj.name }} 
        </router-link>
        </h1>

         <h2 v-for="(t, i) in obj.types" v-bind:key="i"> <!--on accede aux type des pokemons -->
            {{ t }}

        </h2>
    </div>

    <!-- index est pour le tableau, on a besoin d'une boucle -->
  </div>
</template>

<style>
ul {
  text-decoration: none;
  list-style: none;
}
</style>


<script>

import { PokemonService }from '../services/PokemonServices.js'

export default {
  name: "demo",

  // Tout ce qui est dans data() est réactif, que des variables
  data() {
    return {
      maVariable: "Bonjour !",
      compteur: 0,
      firstName: "",
      pokemons: [],
    service: new PokemonService(),
    };
  },

  // Que des fonctions dans methods
  methods: {
    direBonjour() {
      alert("Bonjour " + this.firstName);
    },
  },

  // Cette fonction sera appelée lorsque le composant est prêt à l'emploi
  mounted() {
    setInterval(() => {
      this.compteur++;
    }, 1000);

    this.service.getPokemons()
    .then (pokemons => {
      this.pokemons =  pokemons
    })
  },
};
</script>