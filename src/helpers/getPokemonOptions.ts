import pokeApi from '@/api/pokeApi';
import type { PokeAPIResponse } from '@/types/PokeApiResponse';

export const MAX_POKEMONS = 650;

export const getPokemons = () => {
	/* Create pokemons array with 650 slots */
	const pokemonsArray = Array.from(Array(MAX_POKEMONS));
	const arrayWithIndex = pokemonsArray.map((_, index) => index + 1);

	return arrayWithIndex;
};

const getPokemonOptions = async () => {
	const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
	const pokemonNames = getPokemonNames(mixedPokemons.splice(0, 4));

	return pokemonNames;
};

export const getPokemonNames = async ([a, b, c, d]: number[]) => {
	const promiseArray = [
		pokeApi.get<PokeAPIResponse>(`/${a}`),
		pokeApi.get<PokeAPIResponse>(`/${b}`),
		pokeApi.get<PokeAPIResponse>(`/${c}`),
		pokeApi.get<PokeAPIResponse>(`/${d}`),
	];
	const [p1, p2, p3, p4] = await Promise.all(promiseArray);

	const pokemonNames = [
		{ name: p1.data.name, id: p1.data.id },
		{ name: p2.data.name, id: p2.data.id },
		{ name: p3.data.name, id: p3.data.id },
		{ name: p4.data.name, id: p4.data.id },
	];

	return pokemonNames;
};

export default getPokemonOptions;
