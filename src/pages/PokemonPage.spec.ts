import { vi } from 'vitest';
import { VueWrapper, mount, shallowMount } from '@vue/test-utils';
import PokemonPage from './PokemonPage.vue';

describe('PokemonPage', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(PokemonPage);
	});

	afterEach(() => {
		vi.clearAllMocks();
	});

	test('should call mixPokemonArray on mounted', () => {
		const mixPokemonArraySpy = vi.spyOn(PokemonPage.methods!, 'mixPokemonArray');
		const wrapper = shallowMount(PokemonPage);

		expect(mixPokemonArraySpy).toHaveBeenCalled();
	});
});
