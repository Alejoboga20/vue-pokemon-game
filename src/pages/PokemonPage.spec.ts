import { vi } from 'vitest';
import { VueWrapper, mount, shallowMount } from '@vue/test-utils';

import { pokemonsArray } from '@/mocks/pokemons.mock';
import PokemonPage from './PokemonPage.vue';

describe('PokemonPage', () => {
	let wrapper: VueWrapper<any>;
	const mixPokemonArraySpy = vi.spyOn(PokemonPage.methods!, 'mixPokemonArray');

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
		expect(mixPokemonArraySpy).toHaveBeenCalled();
	});

	test('should show Picture and Options components', () => {
		const wrapper = shallowMount(PokemonPage, {
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
		const image = wrapper.find('pokemon-image-stub');
		const options = wrapper.find('pokemon-options-stub');

		expect(image.exists()).toBeTruthy();
		expect(options.exists()).toBeTruthy();

		expect(image.attributes('pokemonid')).toBe('1');
		expect(options.attributes('pokemons')).toBeTruthy();
	});

	test('should change state when checkAnswer is call', async () => {
		const wrapper = shallowMount(PokemonPage, {
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
		/* Select the correct answer */
		await wrapper.vm.checkAnswer(1);

		expect(wrapper.vm.showPokemon).toBeTruthy();
		expect(wrapper.vm.showAnswer).toBeTruthy();
	});
});
