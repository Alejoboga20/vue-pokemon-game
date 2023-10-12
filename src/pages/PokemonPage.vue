<template>
	<div>
		<h1>Who's that pokémon?</h1>
		<PokemonImage />
		<PokemonOptions />
	</div>
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
