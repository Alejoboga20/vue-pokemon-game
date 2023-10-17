import axios from 'axios';

export const BASE_URL = 'https://pokeapi.co/api/v2/pokemon';

const pokeApi = axios.create({
	baseURL: BASE_URL,
});

export default pokeApi;
