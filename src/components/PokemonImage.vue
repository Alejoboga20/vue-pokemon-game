<template>
	<div class="pokemon-container">
		<img class="hidden-pokemon" :src="imgSrc" alt="pokemon" />
		<img v-if="showPokemon" class="fade-in" :src="imgSrc" alt="pokemon" />
	</div>
</template>

<script lang="ts">
export default {
	name: 'PokemonImage',
	props: {
		pokemonId: {
			type: Number,
			required: true,
		},
		showPokemon: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	computed: {
		imgSrc() {
			return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
		},
	},
};
</script>

<style lang="css" scoped>
.pokemon-container {
	height: 300px;
	position: relative;
	text-align: center;
}

img {
	height: 100%;
	position: absolute;
	left: 0;
	right: 0;
	margin: 0 auto;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	-webkit-user-drag: none;
	-webkit-user-select: none;
}
.hidden-pokemon {
	filter: brightness(0);
}
</style>
