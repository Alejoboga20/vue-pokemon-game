import { shallowMount } from '@vue/test-utils';
import PokemonImage from '../PokemonImage.vue';

const POKE_ID = 1;
const IMG_SRC = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${POKE_ID}`;

describe('PokemonImage', () => {
	test('should match the Snapshot', () => {
		const wrapper = shallowMount(PokemonImage, {
			props: { pokemonId: 1, showPokemon: false },
		});
		expect(wrapper.html()).toMatchSnapshot();
	});

	test('should show the hidden image and pokemon id 1', () => {
		const wrapper = shallowMount(PokemonImage, {
			props: { pokemonId: 1, showPokemon: false },
		});
		const [hiddenImage, visibleImage] = wrapper.findAll('img');

		expect(hiddenImage.classes('hidden-pokemon')).toBeTruthy();
		expect(hiddenImage.exists()).toBeTruthy();

		expect(visibleImage).toBe(undefined);
	});

	test('should show the pokemon if showPokemon:true', () => {
		const wrapper = shallowMount(PokemonImage, {
			props: { pokemonId: 1, showPokemon: true },
		});
		const [_, visibleImage] = wrapper.findAll('img');

		expect(visibleImage.exists()).toBeTruthy();
		expect(visibleImage.classes('hidden-pokemon')).toBeFalsy();
		expect(visibleImage.attributes('src')).toBe(IMG_SRC + '.svg');
	});
});
