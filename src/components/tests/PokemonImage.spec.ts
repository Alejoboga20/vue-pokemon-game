import { shallowMount } from '@vue/test-utils';
import PokemonImage from '../PokemonImage.vue';

describe('PokemonImage', () => {
	test('should match the Snapshot', () => {
		const wrapper = shallowMount(PokemonImage, {
			props: { pokemonId: 1, showPokemon: false },
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should show the hidden image and pokemon', () => {});
	test('should show the pokemon if showPokemon:true', () => {});
});
