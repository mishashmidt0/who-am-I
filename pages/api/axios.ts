import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/',
});

export const fetchRickAndMorty = {
  get: () => instance.get('character/?page=2').then(({ data }) => data),
  search: (query: string) =>
    instance.get(`character/?name=${query}`).then(({ data }) => data),
};
