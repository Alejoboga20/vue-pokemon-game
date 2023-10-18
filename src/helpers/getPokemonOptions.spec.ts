import { pokemonsArray } from '@/mocks/pokemons.mock';
import getPokemonOptions, { getPokemons, getPokemonNames, MAX_POKEMONS } from './getPokemonOptions';

describe('getPokemonOptions', () => {
	test(`should return an array of ${MAX_POKEMONS} numbers`, () => {
		const pokemons = getPokemons();

		expect(pokemons.length).toBe(MAX_POKEMONS);
		expect(pokemons[0]).toBe(1);
		expect(pokemons[MAX_POKEMONS - 1]).toBe(MAX_POKEMONS);
	});

	test('should return four pokemon names', async () => {
		const pokemons = await getPokemonNames([1, 2, 3, 4]);

		expect(pokemons.length).toBe(4);
		expect(pokemons).toStrictEqual(pokemonsArray);
	});

	test('should return an array of mixed pokemons', async () => {
		const pokemons = await getPokemonOptions();

		expect(pokemons.length).toBe(4);
		expect(pokemons).toEqual([
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
			{ name: expect.any(String), id: expect.any(Number) },
		]);
	});
});
