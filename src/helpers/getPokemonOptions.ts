const getPokemons = () => {
	/* Create pokemons array with 650 slots */
	const pokemonsArray = Array.from(Array(650));
	const arrayWithIndex = pokemonsArray.map((_, index) => index + 1);

	return arrayWithIndex;
};

const getPokemonOptions = async () => {
	const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5);
	getPokemonNames(mixedPokemons.splice(0, 4));
};

const getPokemonNames = async ([a, b, c, d]: number[]) => {};

export default getPokemonOptions;
