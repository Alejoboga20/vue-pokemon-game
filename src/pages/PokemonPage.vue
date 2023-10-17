<template>
	<main class="game">
		<div v-if="!pokemon">
			<h1>Loading...</h1>
		</div>
		<div v-else="pokemon">
			<h1>Who's that pokémon?</h1>
			<PokemonImage :pokemonId="pokemon.id" :showPokemon="showPokemon" />
			<PokemonOptions :pokemons="pokemonNamesArray" @selection="checkAnswer" />
		</div>
	</main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '../helpers/getPokemonOptions';

interface Pokemon {
	id: number;
	name: string;
}

export default defineComponent({
	name: 'PokemonPage',
	components: {
		PokemonImage,
		PokemonOptions,
	},
	data() {
		return {
			pokemonNamesArray: [] as Pokemon[],
			pokemon: undefined as Pokemon | undefined,
			showPokemon: false,
		};
	},
	methods: {
		async mixPokemonArray() {
			this.pokemonNamesArray = (await getPokemonOptions()) as Pokemon[];

			const rndInt = Math.floor(Math.random() * 4);
			this.pokemon = this.pokemonNamesArray[rndInt];
		},
		checkAnswer(id: number) {
			this.showPokemon = true;
		},
	},
	mounted() {
		this.mixPokemonArray();
	},
});
</script>

<style lang="css" scoped>
.game {
	font-family: 'Courier New', Courier, monospace;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
