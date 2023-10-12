<template>
	<main class="game">
		<h1>Who's that pokémon?</h1>
		<PokemonImage />
		<PokemonOptions />
	</main>
</template>

<script lang="ts">
import PokemonImage from '@/components/PokemonImage.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

export default {
	name: 'PokemonPage',
	components: {
		PokemonImage,
		PokemonOptions,
	},
};
</script>

<style lang="css" scoped>
.game {
	font-family: 'Courier New', Courier, monospace;
	text-align: center;
}
</style>
