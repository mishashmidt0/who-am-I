import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export const RickAndMortyApi = {
  get: () => instance.get('character'),
};
