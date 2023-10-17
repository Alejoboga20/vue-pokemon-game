<template>
	<main class="game">
		<div v-if="!pokemon">
			<h1>Loading...</h1>
		</div>
		<div v-else="pokemon">
			<h1>Who's that pokémon?</h1>
			<PokemonImage :pokemon-id="pokemon.id" :show-pokemon="showPokemon" />
			<PokemonOptions :pokemons="pokemonNamesArray" @selection="checkAnswer" />
			<div v-if="showAnswer" class="fade-in">
				<h2>{{ message }}</h2>
				<button @click="newGame">New Game</button>
			</div>
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
			showAnswer: false,
			message: '',
		};
	},
	methods: {
		async mixPokemonArray() {
			this.pokemonNamesArray = (await getPokemonOptions()) as Pokemon[];

			const rndInt = Math.floor(Math.random() * 4);
			this.pokemon = this.pokemonNamesArray[rndInt];
		},
		checkAnswer(selectedId: number) {
			this.showPokemon = true;
			this.showAnswer = true;

			if (selectedId === this.pokemon?.id) {
				this.message = `Correct! It's ${this.pokemon.name}`;
			} else {
				this.message = `Wrong! It's ${this.pokemon?.name}`;
			}
		},
		newGame() {
			this.pokemon = undefined;
			this.showPokemon = false;
			this.showAnswer = false;
			this.message = '';
			this.mixPokemonArray();
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
