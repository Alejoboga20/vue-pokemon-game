<template>
	<ul>
		<li v-for="pokemon in pokemons" @click="$emit('selection', pokemon.id)">
			{{ pokemon.name }}
		</li>
	</ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

interface Pokemon {
	id: number;
	name: string;
}

export default defineComponent({
	name: 'PokemonOptions',
	props: {
		pokemons: {
			type: Array as PropType<Pokemon[]>,
			required: true,
		},
	},
});
</script>

<style lang="css" scoped>
ul {
	list-style-type: none;
	margin-top: 64px;
	padding-inline-start: 0;
}

li {
	background-color: white;
	border-radius: 5px;
	border: 1px solid rgba(0, 0, 0, 0.2);
	cursor: pointer;
	margin-bottom: 10px;
	text-align: center;
	width: 100%;
	padding: 4px;
}

li:hover {
	background-color: rgba(0, 0, 0, 0.05);
}
</style>
