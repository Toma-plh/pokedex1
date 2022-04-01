<template>
    <h1>
        Id du pokemon : {{ pokemonId}}
    </h1>
</template>

<script>

export default {
    name: 'PokemonDetails',
    data(){
        return{
pokemonId : 0
        }
    },
    mounted(){
    let route = this.$route
    this.pokemonId = route.params.id
    }
}
</script>