import pokeApi, { BASE_URL } from './pokeApi';

describe('pokeApi', () => {
	test('should have pokeApi url config', () => {
		expect(pokeApi.defaults.baseURL).toBe(BASE_URL);
	});
});
