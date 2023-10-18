import { VueWrapper, shallowMount } from '@vue/test-utils';
import { pokemonsArray } from '@/mocks/pokemons.mock';
import PokemonOptions from '@/components/PokemonOptions.vue';

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

	test('should show 4 options', () => {
		const liTags = wrapper.findAll('li');

		expect(liTags.length).toBe(4);
		expect(liTags[0].text()).toBe(pokemonsArray[0].name);
		expect(liTags[1].text()).toBe(pokemonsArray[1].name);
		expect(liTags[2].text()).toBe(pokemonsArray[2].name);
		expect(liTags[3].text()).toBe(pokemonsArray[3].name);
	});

	test('should emit the event with args', () => {
		wrapper.findAll('li').forEach((li) => li.trigger('click'));

		expect(wrapper.emitted('selection')).not.toBeUndefined();
		expect(wrapper.emitted('selection')![0]).toEqual([pokemonsArray[0].id]);

		expect(wrapper.emitted('selection')).not.toBeUndefined();
		expect(wrapper.emitted('selection')![1]).toEqual([pokemonsArray[1].id]);

		expect(wrapper.emitted('selection')).not.toBeUndefined();
		expect(wrapper.emitted('selection')![2]).toEqual([pokemonsArray[2].id]);

		expect(wrapper.emitted('selection')).not.toBeUndefined();
		expect(wrapper.emitted('selection')![3]).toEqual([pokemonsArray[3].id]);
	});
});
