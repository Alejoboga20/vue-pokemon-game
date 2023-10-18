import { VueWrapper, shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions.vue';
import { pokemonsArray } from '@/mocks/pokemons.mock';

describe('PokemonOptions', () => {
	let wrapper: VueWrapper<any>;

	beforeEach(() => {
		wrapper = shallowMount(PokemonOptions, {
			props: { pokemons: [...pokemonsArray] },
		});
	});

	test('should match the Snapshot', () => {
		expect(wrapper.html()).toMatchSnapshot();
	});
});
