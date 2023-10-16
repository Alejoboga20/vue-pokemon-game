<template>
	<main class="game">
		<h1>Who's that pokémon?</h1>
		<PokemonImage :pokemonId="6" :showPokemon="false" />
		<PokemonOptions :pokemons="pokemonNamesArray" />
	</main>
</template>

<script lang="ts">
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '../helpers/getPokemonOptions';

export default {
	name: 'PokemonPage',
	components: {
		PokemonImage,
		PokemonOptions,
	},
	data() {
		const pokemonNamesArray: { id: number; name: string }[] = [];

		return {
			pokemonNamesArray,
		};
	},
	methods: {
		async mixPokemonArray() {
			this.pokemonNamesArray = await getPokemonOptions();
		},
	},
	mounted() {
		this.mixPokemonArray();
	},
};
</script>

<style lang="css" scoped>
.game {
	font-family: 'Courier New', Courier, monospace;
	text-align: center;
}
</style>
