import { vi } from 'vitest';
import { VueWrapper, mount, shallowMount } from '@vue/test-utils';

import { pokemonsArray } from '@/mocks/pokemons.mock';
import PokemonPage from './PokemonPage.vue';

describe('PokemonPage', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(PokemonPage);
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	test('should match Snapshot after loading pokemons', () => {
		const wrapper = mount(PokemonPage, {
			data() {
				return {
					pokemonNamesArray: pokemonsArray,
					pokemon: pokemonsArray[0],
					showPokemon: false,
					showAnswer: false,
					message: '',
				};
			},
		});

		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should call mixPokemonArray on mounted', () => {
		const mixPokemonArraySpy = vi.spyOn(PokemonPage.methods!, 'mixPokemonArray');
		const wrapper = shallowMount(PokemonPage);

		expect(mixPokemonArraySpy).toHaveBeenCalled();
	});
});
