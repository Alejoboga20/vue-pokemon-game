import getPokemonOptions, { getPokemons, MAX_POKEMONS } from './getPokemonOptions';

describe('getPokemonOptions', () => {
	test(`should return an array of ${MAX_POKEMONS} numbers`, () => {
		const pokemons = getPokemons();

		expect(pokemons.length).toBe(MAX_POKEMONS);
		expect(pokemons[0]).toBe(1);
		expect(pokemons[MAX_POKEMONS - 1]).toBe(MAX_POKEMONS);
	});
});
